<template>
    <div class="containerdue">
        <ul v-for = "objMovie in arrMovie" :key = "objMovie.id">
            <!-- stampa delle varie del film -->
            <li>{{ objMovie.title }}</li>
            <li>{{ objMovie.original_title }}</li>
            <li>{{ objMovie.original_language }}</li>
            <li>{{ objMovie.vote_average }}</li>

        </ul>
    </div>
</template>

<script>
export default {
    name: 'MainPage',
    props : {
        arrMovie: Array, 
    }
}
</script>

<style>
.containerdue {
    height: 100%;
}
</style>