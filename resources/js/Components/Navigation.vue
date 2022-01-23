<template>
    <fragment>
        <nav-list :navList="navigation"></nav-list>
        <nav-burger-button></nav-burger-button>
    </fragment>
</template>

<script>

export default {
    name: "Navigation",
    data() {
        return {
            navigation: [
                'Home', 'Projects', 'About Me', 'Contact'
            ],
        };
    },
}
</script>
