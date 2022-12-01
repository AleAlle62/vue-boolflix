<template>
    <div class="containerdue">
        <FilmCard/>
    </div>
</template>

<script>
import FilmCard from '@/components/FilmCard.vue';

export default {
    name: "MainPage",
    components: { 
        FilmCard 
    },
    props: {

    },
}
</script>

<style>
.containerdue {
    padding: 30px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
img {
    height: 200px;
}
</style>