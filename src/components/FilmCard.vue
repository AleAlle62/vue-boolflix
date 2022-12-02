<template>
    <div class="container">
        <div v-for = "objMovie in arrMovie" :key = "objMovie.id">
            <!-- stampa delle varie del film -->
            <!-- immagine  -->
            <div><img :src = "`https://image.tmdb.org/t/p/w342${objMovie.poster_path}`"></div>
            <!-- titolo  -->
            <div>{{ objMovie.title }}</div>
            <!-- ittolo originale  -->
            <div>{{ objMovie.original_title }}</div>
            <!-- lingua con bandiera  -->
            <lang-flag :iso="objMovie.original_language"/>
            <!-- voto  -->
            <div>{{ converteScore(objMovie.vote_average) }}</div>
        </div>
    </div>
</template>



<script>
import LangFlag from 'vue-lang-code-flags';

export default {
    name: 'FilmCard',
    props : {
        arrMovie: Array, 
    },
    components: {
        LangFlag,
    },
    methods: {
        converteScore(score){
            // score : 10 = x : 5
            // x = (score x 5)/10
            // x = score x 0,5
            // x = score / 2
            return Math.ceil(score / 2) 
        }
    }
}
</script>

<style>
.container {
    padding: 30px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
}
</style>