<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from "vue-router";
import tripData from '../data/trips.json'

const route = useRoute();
// const destination = ref([]);

const destinationSlug = route.params.slug;
const destination = computed(() => {
  return tripData.find(destination => destination.slug === destinationSlug)
})

// async function getDetail() {
//     let newId = route.params.slug;
//     let response = await fetch('https://simplejsoncms.com/api/b3nwgf9o4re/' + newd);
//     let data = await response.json();

//     destination.value = data.find(
//           (destination) => destination.slug === newId
//         );

//     console.log(destination.value);
// }

// function getTrips() {
//   let slug = route.params.slug;
//   fetch('https://simplejsoncms.com/api/b3nwgf9o4re/' + slug)
//         .then((response) => response.json())
//         .then((data) => {
//           //set data gotten from API call to our breweryDetails Object
//           destination.value = data;
//           console.log(destination.value)
//         });
// }
onMounted(() => {
  // getTrips();
    // getDetail();
})
</script>

<template>
    <div class="container-fluid px-0">
      <div class="row min-vh-75 mt-5">
        <!-- :style="{ 'background-image' : 'linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url(' + destination.image1 + ')', '' : 'cover' }" -->
        <div class="col-lg-8 offset-lg-2 d-flex flex-column justify-content-center align-items-center text-center p-5">
          <img :src="destination.image1" class="rounded-4 shadow mb-3" style="width: 110px; height: 110px" alt="">
          <h3 class="fw-bold text-secondary">{{ destination.name }}</h3>
          <h2 class="display-2 fw-bold lh-1" style="letter-spacing: -3px;">{{ destination.location }}</h2>
          <p class="up fs-5 text-dark fw-bold mt-2 mb-3">{{ destination.date }}</p>
          <p class="up fs-2 lh-1 mb-4 text-secondary">{{ destination.description }}</p>
          <div class="hstack gap-2 d-flex bg-secondary rounded-4 shadow w-75 mx-auto p-2">
            <button class="btn btn-outline-light px-4 rounded-4 w-75">Book</button>
            <button class="btn btn-outline-light px-4 rounded-4 w-75">Itinerary</button>
            <button class="btn btn-outline-light px-4 rounded-4 w-75">Contact</button>
          </div>
          <div class="mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
          </div>
        </div>
      </div>

      <div class="row min-vh-100 m-3 rounded-5">
          <div class="col-lg-12 rounded-5 shadow" :style="{ 'background' : 'url(' + destination.image1 + ')', 'background-size' : 'cover'}">
        </div>
      </div>
      
      <div class="row min-vh-75 m-3">
        <div class="col-lg-8 offset-lg-2 d-flex flex-column justify-content-center align-items-center text-center p-5">
          <h3 class="fw-bold text-secondary">{{ destination.name }}</h3>
          <h2 class="display-4 fw-bold lh-1" style="letter-spacing: -3px;">{{ destination.title }}</h2>
          <p class="up fs-2 lh-1 my-3 text-secondary">{{ destination.details }}</p>
          <div class="hstack gap-2 d-flex mt-3 bg-secondary rounded-4 shadow w-75 mx-auto p-2">
            <button class="btn btn-outline-light px-4 rounded-4 w-75">Book</button>
            <button class="btn btn-outline-light px-4 rounded-4 w-75">Itinerary</button>
            <button class="btn btn-outline-light px-4 rounded-4 w-75">Contact</button>
          </div>
        </div>
      </div>

      <div class="row min-vh-100 m-3 rounded-5">
          <div class="col-lg-12 rounded-5 shadow" :style="{ 'background' : 'url(' + destination.image2 + ')', 'background-size' : 'cover'}">
        </div>
      </div>

      <div class="row min-vh-75">
        <div class="col-lg-8 offset-lg-2 d-flex flex-column justify-content-center align-items-center text-center p-5">
          <h3 class="fw-bold text-secondary">{{ destination.name }}</h3>
          <h2 class="display-4 fw-bold lh-1" style="letter-spacing: -3px;">Accommodation</h2>
          <p class="up fs-2 lh-1 my-2 text-secondary">{{ destination.accommodation }}</p>
          <div class="hstack gap-2 d-flex mt-3 bg-secondary rounded-4 shadow w-75 mx-auto p-2">
            <button class="btn btn-outline-light px-4 rounded-4 w-75">Book</button>
            <button class="btn btn-outline-light px-4 rounded-4 w-75">Itinerary</button>
            <button class="btn btn-outline-light px-4 rounded-4 w-75">Contact</button>
          </div>
        </div>
      </div>

      <div class="row min-vh-100 m-3 rounded-5">
        <div class="col-lg-12 rounded-5 shadow" :style="{ 'background' : 'url(' + destination.image1 + ')', 'background-size' : 'cover'}">
        </div>
      </div>

      <footer>
      <div class="row min-vh-50 m-3 p-4 rounded-5 bg-dark">
      <div class="col-lg-3 d-flex flex-column justify-content-center align-items-start text-light p-5">
        <h3 class="fw-bold">WiWP</h3>
        <ul class="list-unstyled fs-5">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>JMS Home</li>
        </ul>
      </div>
      <div class="col-lg-3 d-flex flex-column justify-content-center align-items-start text-light p-5">
        <h3 class="fw-bold">Workshops</h3>
        <ul class="list-unstyled fs-5">
          <li>Scotland</li>
          <li>Italy</li>
          <li>Spain</li>
          <li>Morocco</li>
        </ul>
      </div>
      <div class="col-lg-3 d-flex flex-column justify-content-center align-items-start text-light p-5">
        <h3 class="fw-bold">Contact</h3>
        <ul class="list-unstyled fs-5">
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Archive</li>
          <li>Email</li>
        </ul>
      </div>
      <div class="col-lg-3 min-vh-50 rounded-5 shadow" style="background: url('https://workshopsinwildplaces.com/assets/img/sahara-camel-dunes-1.jpg') center; background-size: cover">
      </div>
    </div>
    </footer>
    </div>
  </template>