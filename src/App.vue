<template>
    <div>
      <!-- header  -->
      <HeaderPage/>
      <!-- main -->
      <MainPage/>
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
  // componenti header e main 
    components: { 
      HeaderPage,
      MainPage,
    },
    // dati 
    data() {
      return {
        // array dei film 
        arrayFilm: null,
        // link della mia chiave apy 
        urlApi: 'https://api.themoviedb.org/3/search/movie?api_key=2e41251ba6af8c59827f3c648b26408b&query=string',
      }
    },
    // axios
    created() {

      axios.get(this.urlApi)
      .then((axiosResponse) => {
        console.log(axiosResponse);
        this.arrayFilm = axiosResponse.data.results;
      });



      // variabile che incolla scritta dalla ricerca
      // let searchStr = '';
      // axios.get `https://api.themoviedb.org/3/movie/550?api_key=07f8adb8a80647ce73267621c81dedf5&query=${searchStr}`
    
    
      // axios.get ('https://api.themoviedb.org/3/movie', {
      //   params: {
      //     // chiave della mia api 
      //     api_key: '07f8adb8a80647ce73267621c81dedf5',
      //     query: searchStr,
      //   }
      // })

  },
}
</script>

<!-- scss  -->
<style lang="scss" scoped>

</style>