<template>
    <div>
      <!-- header  -->
      <HeaderPage @queryChange = " search "/>
      <!-- main -->
      <MainPage 
      :arr-movie = " arrMovie "
      :arr-serie = " arrSerie "/>
    </div>
</template>

<script>
// axios 
import axios from 'axios';
// header 
import HeaderPage from '@/components/HeaderPage.vue';
// main 
import MainPage from '@/components/MainPage.vue';

export default {
    name: 'App',
  // componenti header e main 
    components: { 
      HeaderPage,
      MainPage,
    },
    data (){
      return{
        baseApi: 'https://api.themoviedb.org/3',
        apiKey: '07f8adb8a80647ce73267621c81dedf5',
        resultsLanguage: ' it-IT ',
        arrMovie: [],
        arrSerie: [],
      } 
    },
    methods: {
      //richiesta alla API dei FILM
      search(queryString){
        // chiamata axios all'url
        // base + end point + query string 
        axios.get(`${this.baseApi}` + '/search/movie' , {
          // parametri delle variabili per le richieste dell'URL
          params: {
            api_key: this.apiKey,
            query: queryString,
            language: this.resultsLanguage,
          }
        })
        // risposta di axios
        .then(responseAxios => {
          this.arrMovie = responseAxios.data.results;
          console.log(this.arrMovie)
        });


        // richiesta all'API richiesta delle SERIE TV
        axios.get(`${this.baseApi}` + '/search/tv' , {
          // parametri delle variabili per le richieste dell'URL
          params: {
            api_key: this.apiKey,
            query: queryString,
            language: this.resultsLanguage,
          }
        })
        // risposta di axios
        .then(responseAxios => {
          this.arrSerie = responseAxios.data.results;
          console.log(this.arrSerie + 'ciao')
        });
      }


    }
}
</script>

<!-- scss  -->
<style>

html {
  background-image: url('https://wallpaper.dog/large/20518712.jpg');
  object-fit: cover;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>