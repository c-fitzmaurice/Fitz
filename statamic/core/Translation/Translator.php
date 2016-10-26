<?php

namespace Statamic\Translation;

use Statamic\API\Folder;
use Statamic\API\Config;

class Translator extends \Illuminate\Translation\Translator
{
    /**
     * @var \Illuminate\Translation\Translator
     */
    private $fallbackTranslator;

    /**
     * Return all the translations of all the translations.
     *
     * @return array
     */
    public function all()
    {
        $locale = Config::get('cp.locale') ?: Config::getDefaultLocale();

        return collect(array_replace_recursive(
            $this->getTranslations(base_path() . '/resources/lang/en'),
            $this->getTranslations(site_path() . '/lang/' . $locale)
        ));
    }

    /**
     * Translate the given string to the requested locale.
     *
     * There are two provided translation lcoations:
     * - The user's site where they can override the existing translations.
     * - The Statamic's core translation.
     *
     * We made our own translation to look first for the local translation and
     * fallback to the core translation when there isn't any found.
     *
     * @param  string  $key
     * @param  array  $replace
     * @param  string  $locale
     * @param  bool  $fallback
     * @return string
     */
    public function get($key, array $replace = [], $locale = null, $fallback = true)
    {
        $translation = parent::get($key, $replace, $locale, $fallback);

        if ($key == $translation) {
            $translation = $this->getFallbackTranslator()->get($key, $replace, $locale, $fallback);
        }

        return $translation;
    }

    /**
     * Get the fallback translator
     *
     * @return \Illuminate\Translation\Translator
     */
    private function getFallbackTranslator()
    {
        if ($this->fallbackTranslator) {
            return $this->fallbackTranslator;
        }

        return $this->fallbackTranslator = new parent(app('translation.loader.fallback'), $this->getLocale());
    }

    /**
     * Return all the translations from the given path.
     *
     * @param  string  $path
     * @return array
     */
    private function getTranslations($path)
    {
        $messages = [];

        foreach (Folder::getFiles($path) as $file) {
            $pathinfo = pathinfo($file);

            if ($pathinfo['extension'] !== 'php') {
                continue;
            }

            $key = str_replace('\\', '.', $pathinfo['filename']);
            $key = str_replace('/', '.', $key);

            $messages[site_locale() . '.' . $key] = include root_path($file);
        }

        return $messages;
    }
}
