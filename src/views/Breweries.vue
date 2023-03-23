<script setup>
import { onMounted, ref } from 'vue';

const apiUrl = "https://api.openbrewerydb.org/breweries/";
    // We declare our list and make it reactive
    let allBreweriesList = ref([]);
    onMounted(() => {
      // We call our function here when the component is first instantiated
      fetchAllBreweries();
    });
    const fetchAllBreweries = () => {
      // Function to retrieve  a list of all breweries from the API
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // here we set the data gotten from the API to equal our array
          allBreweriesList.value = data;
        });
    };
</script>

<template>
    <div class="container-fluid mt-5">
      <div class="row">
        <div
          class="col-lg-4 p-5"
          v-for="(brewery, index) in allBreweriesList.slice(0, 6)" :key="index"
        >
          <div class="brewery-info">
            <router-link :to="'/brewery/' + brewery.id">
                <h3>{{ brewery.name }}</h3>
            </router-link>
            <p>{{ brewery.country }}</p>
            <a :href="brewery.website_url">
              {{ brewery.website_url || `Not available`}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>