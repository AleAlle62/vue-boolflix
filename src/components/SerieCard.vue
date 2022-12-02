<template>
    <div class="container">
        <div class="card" 
        v-for = "objSerie in arrSerie" :key = "objSerie.id"
        v-show = " objSerie.poster_path ">
            <!-- stampa delle varie del film -->


            <!-- DAVANTI  -->
            <div class="back">
                <div><img  :src = "`https://image.tmdb.org/t/p/w342${objSerie.poster_path}`"></div>
            </div>

            <!-- DIETRO  -->
            <div class="front">
                <!-- titolo  -->
                <div>{{ objSerie.name }}</div>
                <!-- ittolo originale  -->
                <div>{{ objSerie.original_title }}</div>
                <!-- lingua con bandiera  -->
                <lang-flag :iso="objSerie.original_language"/>
                <!-- voto  -->
                <div>{{ converteScore(objSerie.vote_average) }}</div>
                <div class="view">{{ objSerie.overview }}</div>
                <!-- <font-awesome-icon icon="fa-solid fa-star" /> -->
                <!-- <font-awesome-icon icon="fa-solid fa-star" /> -->
            </div>


        </div>
    </div>
</template>



<script>
import LangFlag from 'vue-lang-code-flags';

export default {
    name: 'SerieCard',
    props : {
        arrSerie: Array,
    },
    components: {
        LangFlag,
    },
    methods: {
        // trasformazione dei voti da 10 a 5
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
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
}

.card {
    perspective: 1000px;
    height: 220px;
    width: 220px;
    position: relative;
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
    height: 20px;
}
</style>