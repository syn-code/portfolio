<template>
    <nav id="menu">
        <ul>
            <li v-for="nav in navList" :key="nav" :class="{active: nav === 'Home'}">
                <router-link to="#">{{ nav }}</router-link>
<!--                <a href="#" @click="changeActiveState($event)">{{nav}}</a>-->
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NavList",
    props: {
        navList: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            activeNavigation: {
                default: 'Home',
                active: null,
            }
        }
    },
    methods: {
        changeActiveState: function (state) {
            this.activeNavigation.active = state.target.text;
        }
    }
}
</script>
