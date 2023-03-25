<script setup>
import { useRoute, useRouter } from "vue-router";
import tripData from '../data/trips.json'
const router = useRouter();

</script>

<template>
    <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <router-link class="navbar-brand font-antonio fs-4" to="/">WiWP</router-link>
            <div class="hstack gap-2 ms-auto">
                <button class="btn btn-sm btn-primary rounded-5 px-4 ms-auto">Sign up</button>
                <button class="btn btn-sm btn-outline-light rounded-5 px-4 me-2">Contact</button>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>

            <!-- <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
            </button> -->
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">WiWP</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body d-flex flex-column justify-content-end align-items-start">
                <ul class="navbar-nav justify-content-end flex-grow-1 px-3">
                    <!-- <router-link class="nav-link" v-for="(route, index) in router.options.routes" :key="index"
                    :to="route.path">
                        {{ route.name }}
                    </router-link> -->
                    <li class="nav-item" data-bs-dismiss="offcanvas">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item" data-bs-dismiss="offcanvas">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item" data-bs-dismiss="offcanvas" 
                    v-for="(trip, index) in tripData" :key="index">
                        <span class="nav-link"
                        @click="router.push({ name: 'Detail', params: { slug: trip.slug } })">
                            {{ trip.name }}
                </span>
                    </li>
                    <li class="nav-item" data-bs-dismiss="offcanvas">
                        <router-link class="nav-link" to="/">Archive</router-link>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        </nav>
</template>

<style>
.nav-item .nav-link {
    font-size: 5vmin;
    line-height: 5vmin;
}
</style>