<template>
    <a href="#" id="menu-icon" style="display:none;" v-on:click="showNavigation">
        <i class="fas fa-bars"></i>
    </a>
</template>

<script>
export default {
    name: "NavBurgerButton",
    methods: {
        showNavigation: () => {
            const menu = document.querySelector('#menu');
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
            }
        }
    }
}
</script>
