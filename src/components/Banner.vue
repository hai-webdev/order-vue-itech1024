<template>
    <div class="banner">
        <img :src="banner" alt="">
    </div>
</template>

<script>
export default {
    name:"Banner",
    props:{
        banner: String
    }
}
</script>

<style>
.banner{
    width: 20rem;
    padding-top: 2.2rem;
}
img{
    width: 100%;
}
</style>