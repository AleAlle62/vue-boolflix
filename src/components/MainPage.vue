<template>
    <div class="containerdue">
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
            <div>{{ objMovie.vote_average }}</div>
        </div>
    </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
    name: 'MainPage',
    props : {
        arrMovie: Array, 
    },
    components: {
        LangFlag,
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