<template>
    <div >
        <div class="containerdue">
            <!-- serie  -->
            <h1>SERIE TV</h1>
            <SerieCard 
            :arr-serie =  " arrSerie "
            :score="convertScore(arrSerie.vote_average)"/>
            <!-- film  -->
            <h1>FILM</h1>
            <FilmCard :arr-movie = " arrMovie"/>
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
        score: Object,
    },
    methods: {
        convertScore(score) {
            const maxScore = 5;
        const originalMaxScore = 10;
        return {
                score: Math.ceil((score * maxScore) / originalMaxScore),
                maxScore,
            };
        },
    }
}
</script>

<style>

.container {
    display: flex;
    color: white;
}

h1 {
    margin: 1em;
    color: white;
}
</style>