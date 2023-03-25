<script setup>
import { onMounted, ref } from 'vue'
import carouselData from '../data/carousel.json'
import tripData from '../data/trips.json'
import useAnimation from '../stores/useAnimation'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const { animate } = useAnimation();

// const base_url = "https://simplejsoncms.com/api/b3nwgf9o4re";
// const tripData = ref([]);
// async function getData() {
//     let response = await fetch(base_url);
//     tripData.value = await response.json();
//     console.log(tripData.value)
//   }

onMounted(() => {
  animate();
  // getData();
})
</script>

<template>
  <div class="container-fluid px-0">
    <div class="row min-vh-100">
      <div class="col-lg-8 d-flex flex-column justify-content-center align-items-start p-5">
        <h5>Workshops in Wild Places</h5>
        <h1 class="display-1 lh-1 fw-bold" style="letter-spacing: -3px;">Connecting artists with the land in remote, <span class="fw-bold" style="color: hotpink">wild</span> locations worldwide.</h1>
        <div class="d-flex mt-3">
          <button class="btn btn-dark rounded-5 me-2 px-4">Upcoming</button>
          <button class="btn btn-outline-dark rounded-5 px-4">Learn More</button>
        </div>
      </div>
    </div>

    <div class="row min-vh-100 position-relative m-3">
      <img src="https://images.unsplash.com/photo-1554757388-29a2a86ef02f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" class="position-absolute start-0 top-0 w-100 h-100 p-0 rounded-5" style="z-index: 0; object-fit: cover">
    </div>

    <div class="row min-vh-75 m-3 p-4 rounded-5 bg-dark text-light">
      <div class="col-lg-8 offset-lg-2 d-flex flex-column justify-content-center align-items-center text-center p-4 p-lg-5">
        <h2 class="up h5">About WiWP</h2>
        <p class="up fs-2 lh-1 my-3">Workshops in Wild Places <span style="color: #a1a1a6">is an international art teaching initiative developed by Canadian artist and educator Janice Mason Steeves. Participants travel to remote locations throughout the world to connect with the beauty and power of the wild landscape through the creative process.</span></p>
        <div class="up d-flex">
          <button class="btn btn-outline-light rounded-5 px-4 mt-2 me-2">Details</button>
          <button class="btn btn-outline-light rounded-5 px-4 mt-2">Workshops</button>
        </div>
      </div>
    </div>
    
    <div class="row min-vh-75 m-3 p-4 rounded-5 border shadow-lg"
    :class="index % 2 === 0 ? 'bg-light' : 'bg-dark text-light'"
    v-for="(trip, index) in tripData" :key="index">
      <div class="w-100 d-flex flex-wrap flex-md-nowwrap" v-if="index % 2 === 0">
        <div class="col-lg-6 min-vh-50 rounded-5 shadow" :style="{ 'background' : 'url('+ trip.image1 + ')', 'background-size' : 'cover'}">
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

      <div v-else class="w-100 d-flex flex-wrap flex-md-nowwrap">
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-start text-start p-5">
          <h5>WiWP</h5>
          <h2 class="display-2 fw-bold lh-1" style="letter-spacing: -3px;">{{ trip.location }}</h2>
          <h3 class="fw-bold text-secondary">{{ trip.name }}</h3>
          <p class="text-uppercase">{{ trip.date }}</p>
          <router-link :to="'/' + trip.slug">
            <button class="btn btn-light rounded-5 px-5">More</button>
          </router-link>
        </div>
        <div class="col-lg-6 min-vh-50 rounded-5 shadow" :style="{ 'background' : 'url('+ trip.image1 +')', 'background-size' : 'cover'}">
        </div>
    </div>
    </div>

    <div class="row m-3 rounded-5 bg-light border shadow-lg">
      <div class="col-lg-12 text-center p-5">
        <h2 class="display-3 fw-bold lh-1" style="letter-spacing: -3px;">What People are Saying</h2>
        <p class="fs-5 mb-0 mt-3">Workshops in Wild Places participant testimonials</p>
      </div>
      <div class="col-lg-12 p-0 min-vh-50">
        <div class="mx-3 mb-3">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
              <div class="carousel-item min-vh-50 rounded-5" 
              :class="index === 0 ? 'active' : ''" 
              v-for="(item, index) in carouselData.carousel" :key="index"
              :style="{ 'background-image': 'url(' + item.image + ')', backgroundSize: 'cover' }">
              <div class="col-lg-6 d-flex flex-column justify-content-center align-items-start bg-dark text-light p-5 m-3 rounded-5 shadow">
                <h4 class="h2 fw-bold">{{ item.name }} <span class="fw-light fs-5">{{ item.age }}</span></h4>
                <p class="fw-bold">{{ item.trip }}</p>
                <p class="fst-italic">"{{ item.text }}"</p>
                <!-- <p>{{ item.image }}</p> -->
                <span class="text-warning fs-5">⭑ ⭑ ⭑ ⭑ ⭑</span>
                <div class="hstack gap-1">
                <button class="btn btn-link p-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="fs-3 text-light" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                  </span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="btn btn-link" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="fs-3 text-light" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </span>
                  <span class="visually-hidden">Next</span>
                </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>

    <!-- newsletter -->

    <div class="row m-3 rounded-5 bg-light border border-secondary">
      <div class="col-lg-5 d-flex flex-column justify-content-center align-items-start p-5 rounded-5 bg-dark text-light">
        <p class="mb-0 lh-1">Join my</p>
        <h3 class="display-4 fw-bold">Newsletter</h3>
      </div>
      <div class="col-lg-7 d-flex flex-column justify-content-center align-items-start p-5">
        <div id="mc_embed_signup" class="w-100">
            <form action="https://janicemasonsteeves.us12.list-manage.com/subscribe/post?u=a9ab1596540478d19124106d8&amp;id=66a407ea79&amp;SIGNUP=WiWP" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate-2 bs" target="_blank" novalidate>
            <div class="input-group"  id="mc_embed_signup_scroll">
              <button class="btn btn-dark px-4"
              style="border-radius: 22px 0 0 22px;" 
              type="submit" value="Subscribe"
              name="b_a9ab1596540478d19124106d8_66a407ea79" 
               id="mc-embedded-subscribe-2">Sign up</button>
              
               <input class="form-control py-3 border-secondary" 
               style="border-radius: 0 22px 22px 0;" aria-label="Example text with button addon" aria-describedby="button-addon1"
              type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="email address" required>
            </div>
                    </form>
                </div>
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

