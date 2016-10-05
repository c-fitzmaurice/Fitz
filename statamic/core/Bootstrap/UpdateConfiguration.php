<?php

namespace Statamic\Bootstrap;

use Statamic\API\Arr;
use Statamic\API\Str;
use Statamic\API\YAML;
use Statamic\Application;
use Statamic\Config\Addons;
use Statamic\Config\Roles;
use Statamic\Config\Settings;
use Illuminate\Filesystem\Filesystem;
use Statamic\API\Config as ConfigAPI;

class UpdateConfiguration
{
    /**
     * @var Application
     */
    private $app;

    /**
     * @var Filesystem
     */
    private $filesystem;

    /**
     * @var array
     */
    private $env = [];

    /**
     * @var Settings
     */
    private $settings;

    /**
     * @var Addons
     */
    private $addons;

    public function bootstrap(Application $app)
    {
        $this->app = $app;
        $this->filesystem = new Filesystem;

        $this->env = $this->loadEnvironment();

        $this->loadSettings();
        $this->loadAddonSettings();
    }

    private function loadSettings()
    {
        $this->settings = new Settings;
        $this->app->instance(Settings::class, $this->settings);

        $config = [];
        $site = $this->loadSiteConfig();
        $defaults = $this->loadDefaults();

        foreach ($defaults as $file => $default) {
            $site_config = array_get($site, $file, []);
            $config[$file] = Arr::combineRecursive($default, $site_config);
        }

        $this->settings->hydrate($config);

        $this->mergeIntoLaravel();
    }

    private function loadAddonSettings()
    {
        $this->addons = new Addons;

        $this->app->instance(Addons::class, $this->addons);

        $this->addons->hydrate(
            $this->loadAddonConfig()
        );
    }

    /**
     * Load the environment file
     */
    public function loadEnvironment()
    {
        $env = app()->environment();

        $path = settings_path("environments/{$env}.yaml");

        if (! $this->filesystem->exists($path)) {
            return;
        }

        return YAML::parse($this->filesystem->get($path));
    }

    /**
     * Loads default config variables
     */
    private function loadDefaults()
    {
        $files = collect($this->filesystem->files(statamic_path('settings/defaults')))->filter(function ($file) {
            return pathinfo($file)['extension'] === 'yaml';
        })->all();

        $settings = [];
        foreach ($files as $file) {
            $scope = pathinfo($file)['filename'];
            $settings[$scope] = YAML::parse($this->filesystem->get($file));
        }

        return $settings;
    }

    /**
     * Loads site config variables
     */
    private function loadSiteConfig()
    {
        $files = collect($this->filesystem->files(settings_path()))->filter(function ($file) {
            return pathinfo($file)['extension'] === 'yaml';
        })->all();

        $settings = [];
        foreach ($files as $file) {
            $scope = pathinfo($file)['filename'];
            $settings[$scope] = YAML::parse($this->filesystem->get($file));
        }

        $settings_env = array_get($this->env, 'settings', []);

        return Arr::combineRecursive($settings, $settings_env);
    }

    /**
     * Loads plugin config variables
     */
    private function loadAddonConfig()
    {
        $addon_config = [];

        foreach ([bundles_path(), addons_path()] as $addon_folder) {
            foreach ($this->filesystem->directories($addon_folder) as $addon) {
                $default = $config = [];

                // Get the default, if there is one
                if ($this->filesystem->exists($default_path = $addon . '/default.yaml')) {
                    $default = YAML::parse($this->filesystem->get($default_path));
                }

                // Get the user addon config files
                $addon_name = Str::snake(basename($addon));
                if ($this->filesystem->exists($main_file = settings_path('addons/'.$addon_name.'.yaml'))) {
                    $config = YAML::parse($this->filesystem->get($main_file));
                }

                // Merge with the environment
                $env = array_get($this->env, "addons.{$addon_name}", []);
                $config = Arr::combineRecursive($config, $env);

                // Add them to the addons scope
                if (! empty($default) || ! empty($config)) {
                    $addon_config[$addon_name] = $config + $default;
                }
            }
        }

        return $addon_config;
    }

    /**
     * Merge appropriate config values into Laravel
     *
     * There are settings that are set in our Statamic YAML files
     * that won't automatically affect the Laravel settings.
     */
    private function mergeIntoLaravel()
    {
        config([
            'app.url' => ConfigAPI::getSiteUrl(),
            'app.debug' => env('APP_DEBUG', ConfigAPI::get('debug.debug')),

            'services' => ConfigAPI::get('services'),

            'mail.driver' => ConfigAPI::get('email.driver'),
            'mail.host' => ConfigAPI::get('email.host'),
            'mail.port' => ConfigAPI::get('email.port'),
            'mail.host' => ConfigAPI::get('email.host'),
            'mail.encryption' => ConfigAPI::get('email.encryption'),
            'mail.username' => ConfigAPI::get('email.username'),
            'mail.password' => ConfigAPI::get('email.password'),
            'mail.from' => ['address' => ConfigAPI::get('email.from_email'), 'name' => ConfigAPI::get('email.from_name')],
            'services.mandrill.secret' => ConfigAPI::get('email.mandrill_secret'),
            'services.mailgun.secret' => ConfigAPI::get('email.mailgun_secret'),
            'services.mailgun.domain' => ConfigAPI::get('email.mailgun_domain'),

            'search.connections.algolia.config.application_id' => ConfigAPI::get('search.algolia_app_id'),
            'search.connections.algolia.config.admin_api_key' => ConfigAPI::get('search.algolia_api_key'),
        ]);
    }
}
