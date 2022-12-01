<template>
    <div >
        <!-- film  -->
        <div class="containerdue">
            <h1>FILM</h1>
            <FilmCard :arr-movie = " arrMovie "/>
            <h1>SERIE</h1>
            <SerieCard/>
        </div>
    </div>
</template>

<script>
import FilmCard from '@/components/FilmCard.vue';
import SerieCard from '@/components/SerieCard.vue';

export default {
    name: "MainPage",
    components: { 
        FilmCard,
        SerieCard,
    },
    props: {
        arrMovie: Array,
    },
}
</script>

<style>

img {
    height: 200px;
}
</style>