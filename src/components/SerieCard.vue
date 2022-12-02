<template>
    <div class="container">
        <div class="card" 
        v-for = "objSerie in arrSerie" :key = "objSerie.id">
            <!-- stampa delle varie del film -->
            <!-- DAVANTI  -->
            <div class="back">
                <div><img  :src = "`https://image.tmdb.org/t/p/w342${objSerie.poster_path}`"></div>
            </div>
            <!-- DIETRO  -->
            <div class="front">
                <!-- titolo  -->
                <div class="flex">
                    <div class="descrizione">TITOLO:</div>
                    <div>{{ objSerie.name }}</div>
                </div>
                <div class="flex">
                    <div class="descrizione">LINGUA:</div>
                    <div><lang-flag :iso="objSerie.original_language"/></div>
                </div>
                <!-- voto  -->
                <div class="" >
                    <!-- <div class="descrizione">VOTO:</div> -->
                    <div>{{objSerie.vote_average}}</div>
                    <!-- stelline  -->
                    <font-awesome-icon
                    icon="fa-solid fa-star" 
                    v-for= "i in score" 
                    :key="i"
                    />

                    <!-- v-for= "i in (score.maxScore - score.score)"  -->

                    <!-- stelline vuote  -->
                    <!-- <font-awesome-icon 
                    icon="fa-regular fa-star "

                    :style= "{ color: 'yellow'} " />
                    <div>{{' su 5'}}</div> -->
                </div>

                <div class="flex">
                    <div class="descrizione">DESCRIZIONE:</div>
                </div>
                <div class="view">{{ objSerie.overview + '...' }}</div>
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
        score : Object,
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