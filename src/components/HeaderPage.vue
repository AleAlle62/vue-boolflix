<template>
    <!-- container nero  -->
    <div class="containeruno">
        <!-- scirtta bool  -->
        <div class="titolo">BOOLFLIX</div>
        <!-- per non refreshare la pagina  -->
        <form @submit.prevent = " $emit('queryChange', queryString) ">
            <!-- barra di ricerca  -->
            <input type="text" placeholder="cerca film o serie tv..." v-model="queryString">
            <!-- bottone di invio  -->
            <button>search</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'HeaderPage',
    // creazione funzione che ricerca il nome nella API 
    data(){
        return{
            queryString: '',
        }
    },
}
</script>

<style>
.containeruno {
    height: 20vh;
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid white;
}
.titolo {
    color: red;
    font-size: 30px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
button {
    background-color: red;
    border-radius: 10px;
    border: 1px solid white;
}
input {
    border-radius: 10px;
}
</style>