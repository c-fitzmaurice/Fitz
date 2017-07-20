<?php

namespace Statamic\Console\Commands;

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

abstract class AbstractCommand extends Command
{
    /**
     * Run the console command.
     *
     * @param  \Symfony\Component\Console\Input\InputInterface  $input
     * @param  \Symfony\Component\Console\Output\OutputInterface  $output
     * @return int
     */
    public function run(InputInterface $input, OutputInterface $output)
    {
        \Partyline::bind($this);

        return parent::run($input, $output);
    }

    public function checkLine($message)
    {
        $this->line("<info>[✓]</info> $message");
    }

    public function checkInfo($message)
    {
        $this->info("[✓] $message");
    }

    public function crossLine($message)
    {
        $this->line("<fg=red>[✗]</> $message");
    }
}
