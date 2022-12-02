<template>
    <div >
        <div class="containerdue">
            <!-- serie  -->
            <h1>SERIE TV</h1>
            <SerieCard 
            :arr-serie =  " arrSerie "/>
            <!-- film  -->
            <h1>FILM</h1>
            <FilmCard :arr-movie = " arrMovie "/>
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
        arrSerie: Array,
    },
}
</script>

<style>

.container {
    display: flex;
    color: white;
}

img {
    height: 300px;
    border-radius: 10px;
}
h1 {
    margin: 1em;
    color: white;
}
</style>