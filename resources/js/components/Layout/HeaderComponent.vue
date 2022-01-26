<template>
    <a :href="href">
        <img id="logo" :src="src" alt="">
    </a>
    <navigation></navigation>
</template>

<script>
export default {
    name: "HeaderComponent",
    props: {
        src: {
            type: String,
            required: true,
        },
        href: {
            type: String,
            required: true,
        }
    }
}
</script>
