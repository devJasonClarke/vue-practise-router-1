<template>
    <nav>
        <ul>
            <li>
                <router-link :to="{name: 'Home'}">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'About', hash:'#bb'}">About</router-link>
            </li>
            <li>
                <router-link :to="{name: 'Gas'}">Gas</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'TheNavigation'
    }
</script>

<style lang="scss" scoped>
nav>ul>li>a{
    text-decoration: none;
}
.router-link-active{
    color: green;
    text-decoration: underline;
}
</style>