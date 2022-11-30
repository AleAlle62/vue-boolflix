<template>
    <!-- container nero  -->
    <div class="containeruno">
        <!-- scirtta bool  -->
        <div class="titolo">BOOLFLIX</div>
        <div>
            <!-- barra di ricerca  -->
            <input type="text" placeholder="cerca..." @keyup.enter = " search ">
            <!-- bottone di invio  -->
            <button>cerca</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderPage',
    // creazione funzione che ricerca il nome nella API 
    methods: {
        search(){
            
        }
    }
}
</script>

<style>
.containeruno {
    height: 20vh;
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
</style>