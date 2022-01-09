@extends('layout.main')
@section('content')
    <section id="section-3">
        <div class="container">
            <h2 class="title">Services we provide</h2>
            <div class="blurb-row">
                <div class="blurb">
                    <img src="{{asset("images/gears-icon.png")}}" alt=""/>
                    <h3>Web Development</h3>
                </div>
                <div class="blurb">
                    <img src="{{asset("images/crayon-icon.png") }}" alt=""/>
                    <h3>Web Design</h3>
                </div>
                <div class="blurb">
                    <i class="fas fa-mobile-alt icon"></i>
                    <h3>Mobile Optimisation</h3>
                </div>
            </div>
        </div>
    </section>
@endsection
