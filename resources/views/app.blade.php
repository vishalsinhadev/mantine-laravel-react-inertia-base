<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

    <!-- <meta itemProp="name" content="Mantine UI" key="item-title" />
    <meta property="og:title" content="Mantine UI" key="og-title" />
    <meta name="twitter:title" content="Mantine UI" key="twitter-title" />
    <meta property="og:url" content="https://ui.mantine.dev/" key="og-url" />
    <link rel="shortcut icon" href="/favicon.svg" />
    <meta name="language" content="English" />
    <meta name="robots" content="index, follow" />
    <meta name="keywords" content="react,mantine,components" />
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
    <meta name="og:image:width" content="1280" />
    <meta name="og:image:height" content="640" />
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@vishalsinhadev" />
    <meta name="og:image" content="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/social-preview.png" />
    <meta name="twitter:image" content="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/social-preview.png" />
    <meta itemProp="image" content="http://raw.githubusercontent.com/mantinedev/mantine/master/.demo/social-preview.png" />
    <meta itemProp="description" content="120+ prebuilt components with Mantine" />
    <meta name="description" content="120+ prebuilt components with Mantine" /> -->

    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>