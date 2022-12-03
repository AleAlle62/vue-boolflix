<!-- <template>
    <div class="container">
        <div v-for = "objMovie in arrMovie" :key = "objMovie.id">


            <div><img :src = "`https://image.tmdb.org/t/p/w342${objMovie.poster_path}`"></div>

            <div>{{ objMovie.title }}</div>

            <div>{{ objMovie.original_title }}</div>

            <lang-flag :iso="objMovie.original_language"/>

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
</style> -->

<template>
    <div class="container">
        <div class="card" 
        v-for = "objMovie in arrMovie" :key = "objMovie.id">
            <!-- stampa delle varie del film -->
            <!-- DAVANTI  -->
            <div class="back">
                <div><img  :src = "`https://image.tmdb.org/t/p/w342${objMovie.poster_path}`"></div>
            </div>
            <!-- DIETRO  -->
            <div class="front">
                <!-- titolo  -->
                <div class="flex">
                    <div class="descrizione">TITOLO:</div>
                    <div>{{ objMovie.name }}</div>
                </div>
                <div class="flex">
                    <div class="descrizione">LINGUA:</div>
                    <div><lang-flag :iso="objMovie.original_language"/></div>
                </div>
                <!-- voto  -->
                <div class="flex">
                    <div class="descrizione">DESCRIZIONE:</div>
                </div>
                <div class="view">{{ objMovie.overview + '...' }}</div>
            </div>
        </div>
    </div>
</template>



<script>
import LangFlag from 'vue-lang-code-flags';

export default {
    name: 'FilmCard',
    props : {
        arrMovie: Array,
        score: Object,
        maxScore: Object,
    },
    components: {
        LangFlag,
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
    flex-wrap: wrap;
    gap: 30px;
}

.card {
    perspective: 1000px;
    height: 320px;
    width: 250px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.card .back {
    position: absolute;
    transform: rotateY(0deg);
    backface-visibility: hidden;
    transition: 0.4s linear;
}

.card .front {
    position: absolute;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    transition: 0.4s linear;
}

.card:hover .back {
    transform: rotateY(-180deg);
    cursor: pointer;
}

.card:hover .front {
    transform: rotateY(0deg);
    cursor: pointer;
}

.view {
    width: 100%;
    max-height: 200px;
    overflow: hidden;
}

img {
    height: 310px;
    width: 250px;
    border-radius: 10px;
}

.flex {
    display: flex;
    justify-content: space-between;
}

.descrizione {
    color: salmon;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>