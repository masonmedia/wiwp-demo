<script setup>
import { onMounted, watch, ref, computed } from 'vue'
import { useRoute, useRouter } from "vue-router";
import tripData from '../data/trips.json'

const route = useRoute();
const router = useRouter();
const destinationDetails = ref([]);
const destinationSlug = route.params.slug;
const destination = computed(() => {
  return tripData.find(destination => destination.slug === destinationSlug)
})
const destinationQuery = destination.query

// watch(user, () => doSomething({ user: user.value, profile: profile.value }))

  //  const article = reactive({...});
  //  function fetchArticle(id) {
  //     //assign article..
  //  }
 

// function trimString(string) {
//   var trimmedString = string.replace(/^(.{11}[^\s]*).*/, "$1");
//   // trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
//   return trimmedString;
// }

function shorten(text, max) {
    return text && text.length > max ? text.slice(0, max).split(' ').slice(0, -1).join(' ') : text
}

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

// https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=New_England_Patriots
// https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=Stack%20Overflow
  // fetch('https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=Stack%20Overflow')
  // fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=revisions&titles=Spain&formatversion=2&rvprop=content&rvslots=*&rvsection=0')
    // fetch('https://en.wikipedia.org/w/api.php?action=parse&origin=*&prop=text&page=Spain&format=json')

function getData(location) {
  // fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&origin=*&exintro&explaintext&titles=${location}`)
  fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&explaintext&titles=${location}&format=json&`)
        .then((response) => response.json())
        .then((data) => {
          destinationDetails.value = data;
          console.log(destinationDetails.value)
        });
}
onMounted(() => {})
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
          <div class="hstack gap-2 col-lg-8 offset-lg-2 d-flex bg-secondary rounded-4 shadow mx-auto p-2">
            <button class="btn btn-outline-light px-4 rounded-4 w-75">Book</button>
            <button class="btn btn-outline-light px-4 rounded-4 w-75">Itinerary</button>
            <button class="btn btn-outline-light px-4 rounded-4 w-75"
            @click.passive="getData(destination.query)"
            data-bs-toggle="modal" :data-bs-target="'#item_' + destination.id"
            >Map</button>
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

      <!-- modal -->
      <div class="modal fade" :id="'item_' + destination.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">{{ destination.location }}, <span class="fw-bold">{{ destination.name }}</span>
              </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <iframe :src="destination.map" width="100%" height="450" class="p-3 shadow rounded-5" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

              <!-- test -->
              <!-- <div class="text-start col-md-10 p-5" v-for="(item, index) in destinationDetails">
                <p v-if="item.normalized" class=""></p>
                <p>{{ item }}</p>
              </div> -->

              <div class="" v-if="destinationDetails.query">
                <div class="text-start col-md-10 p-5"
                v-for="(item, index) in destinationDetails.query.pages">
                <h3 class="h4 fw-bold text-secondary">Details</h3>
                <h2 class="display-4 fw-bold lh-1 pb-3" style="letter-spacing: -3px;" v-html="item.title"></h2>  
                <p class="up fs-3 lh-1 my-3" style="color: #a1a1a6" >{{ shorten(item.extract, 1000) + '...' }}</p>
                <!-- <p class="up fs-3 lh-1 my-3" style="color: #a1a1a6" >{{ item.extract.substring(0,800) + '...' }}</p> -->
                <div class="hstack gap-2">
                    <button type="button" class="btn btn-secondary px-4 mt-2 rounded-5" data-bs-dismiss="modal">Back</button>
                    <a :href="'https://en.wikipedia.org/wiki/' + destination.query" target="_blank">
                      <button type="button" class="btn btn-outline-secondary px-4 mt-2 rounded-5">More</button>
                    </a>
                  </div>
              </div>

                <!-- <div v-for="i in item">
                  <p>{{i.from}}</p>
                  <h2 class="display-4 fw-bold lh-1" style="letter-spacing: -3px;" v-html="i.title"></h2>  
                  <p class="up fs-3 lh-1 my-3" style="color: #a1a1a6" 
                  v-html="i.extract"></p>  
                  <div class="hstack gap-2">
                    <button type="button" class="btn btn-secondary px-4 mt-2 rounded-5" data-bs-dismiss="modal">Close</button>
                    <a :href="'https://en.wikipedia.org/wiki/' + destination.query" target="_blank">
                      <button type="button" class="btn btn-outline-secondary px-4 mt-2 rounded-5">More</button>
                    </a>
                  </div>
                </div> -->
                </div>

                <!-- <span v-for="(i, index) in item.pages">
                  <h2 class="display-4 fw-bold lh-1" style="letter-spacing: -3px;" v-html="i.title"></h2>  
                  <p class="up fs-3 lh-1 my-3" style="color: #a1a1a6" v-html="i.extract.substring(0, 1000) + '...'"></p>  
                  <div class="hstack gap-2">
                    <button type="button" class="btn btn-secondary px-4 mt-2 rounded-5" data-bs-dismiss="modal">Close</button>
                    <a :href="'https://en.wikipedia.org/wiki/' + destination.query" target="_blank">
                      <button type="button" class="btn btn-outline-secondary px-4 mt-2 rounded-5">More</button>
                    </a>
                  </div>
                </span> -->


            </div>
          </div>
        </div>
      </div><!--end modal-->

      <div class="row m-3">
        <div class="col-sm-12 p-5 text-center">
          <h4 class="fw-bold text-secondary mb-0">WiWP</h4>
          <h2 class="display-4 fw-bold mb-3" style="letter-spacing: -3px;">Explore</h2>
          <p class="up fs-2 lh-1 my-2 text-secondary">Browse upcoming workshops in the in WiWP catalogue</p>
        </div>
        <div class="col-lg-3 p-0 up" v-for="(trip, index) in tripData" :key="index">
        <div class="p-3 m-2 rounded-5 bg-light shadow border" style="min-height: 200px">
          <div class="up rounded-5 shadow" style="min-height: 200px;" :style="{ 'background' : 'url('+ trip.image1 +')', 'background-size' : 'cover'}"></div>
          <div class="p-3 py-4">
            <h4 class="h2 fw-bold mb-1" style="letter-spacing: -1px;">{{ trip.name }}</h4>
            <p class="my-1 fw-bold text-secondary">{{ trip.location }}</p>
            <p>{{ trip.date }}</p>
            <router-link :to="'/' + trip.slug">
              <button class="btn btn-secondary px-4 rounded-5">More</button>
            </router-link>
          </div>
        </div>
      </div>

      </div>

      <!-- <div class="row m-3 p-4 rounded-5 border shadow-lg">
      <div class="w-100 d-flex flex-wrap flex-md-nowwrap">
        <div class="col-lg-3 rounded-5 shadow" 
        v-for="(trip, index) in tripData" :key="index"
        :style="{ 'background' : 'url('+ trip.image1 + ')', 'background-size' : 'cover'}">
        </div>
        <div class="col-lg-6 col-md-6 d-flex flex-column justify-content-center align-items-start p-5">
          <h5>WiWP</h5>
          <h2 class="display-2 fw-bold lh-1" style="letter-spacing: -3px;">{{ trip.location }}</h2>
          <h3 class="fw-bold text-secondary">{{ trip.name }}</h3>
          <p class="text-uppercase">{{ trip.date }}</p>
          <router-link :to="'/' + trip.slug">
            <button class="btn btn-dark rounded-5 px-5">More</button>
          </router-link>
        </div>
      </div>
      </div> -->

      <footer>
      <div class="row min-vh-50 m-3 p-4 rounded-5 bg-dark">
      <div class="col-lg-3 d-flex flex-column justify-content-center align-items-start text-light p-4 p-lg-5">
        <h3 class="fw-bold">WiWP</h3>
        <ul class="list-unstyled fs-5">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>JMS Home</li>
        </ul>
      </div>
      <div class="col-lg-3 d-flex flex-column justify-content-center align-items-start text-light p-4 p-lg-5">
        <h3 class="fw-bold">Workshops</h3>
        <ul class="list-unstyled fs-5">
          <li class="nav-item" v-for="(trip, index) in tripData" :key="index">
            <router-link class="nav-link fs-5 lh-base" :to="'/' + trip.slug">{{ trip.name }}</router-link>
          </li>
        </ul>
      </div>
      <div class="col-lg-3 d-flex flex-column justify-content-center align-items-start text-light p-4 p-lg-5">
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