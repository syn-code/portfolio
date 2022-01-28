<template>
    <section id="section-3">
        <div class="container">
            <h2 class="title">Services we provide</h2>
            <div class="blurb-row">
                <div class="blurb">
                    <img class="not-draggable"
                         :src="gearsIcon"
                    alt=""
                    ondragstart="return false;"
                    />
                    <h3>Web Development</h3>
                </div>
                <div class="blurb">
                    <img class="not-draggable"
                         :src="crayonIcon"
                    alt=""  ondragstart="return false;"
                    />
                    <h3>Web Design</h3>
                </div>
                <div class="blurb">
                    <i class="fas fa-mobile-alt icon"></i>
                    <h3>Mobile Optimisation</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "HomeComponent",
    props: {
        gearsIcon: {
          type: String,
          required: true,
        },
        crayonIcon: {
            type: String,
            required: true,
        },

    }
}
</script>

