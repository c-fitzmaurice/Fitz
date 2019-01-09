<?php

return [
    'production' => false,
    'baseUrl' => 'https://artisan-static-demo.netlify.com',
    'site' => [
        'title' => 'Colin Fitz-Maurice',
        'description' => 'Hello World',
        'image' => 'default-share.png',
    ],
    'owner' => [
        'name' => 'John Doe',
        'twitter' => 'https://twitter.com/C_FitzMaurice',
        'github' => 'https://github.com/c-fitzmaurice',
        'linkedin' => 'https://www.linkedin.com/in/colinfitzmaurice',
    ],
    'services' => [
        'analytics' => 'UA-48741641-4',
        'disqus' => 'colin-fitz-maurice',
    ],
    'collections' => [
        'posts' => [
            'path' => 'posts/{filename}',
            'sort' => '-date',
            'extends' => '_layouts.post',
            'section' => 'postContent',
            'isPost' => true,
            'comments' => true,
            'tags' => [],
        ],
        'tags' => [
            'path' => 'tags/{filename}',
            'extends' => '_layouts.tag',
            'section' => '',
            'name' => function ($page) {
                return $page->getFilename();
            },
        ],
    ],
    'excerpt' => function ($page, $limit = 250, $end = '...') {
        return $page->isPost
            ? str_limit_soft(content_sanitize($page->getContent()), $limit, $end)
            : null;
    },
];
