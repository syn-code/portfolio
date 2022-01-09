<!doctype html>
<html lang="en">
<head>
    <title>Jay Jay Designs | Web Development</title>
{{--    <link rel="stylesheet" href="{{ asset('storage/css/normalize.css') }}">--}}
    <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,500,700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/cd20dc8258.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

<div class="wrap">
    @include('includes.header')
    <!-- Main Background image -->
    <!-- TODO look at sorting this section out by either adding images into the html -->
    <section id="section-2">
    </section>
    @yield('content')
</div>
@include('includes.footer')
{{--TODO move to toggleMenu.js app.js--}}
<script src="{{ asset('/js/toggleMenu.js') }}"></script>
<script src="{{ asset('/js/app.js') }}"></script>
</body>
</html>
