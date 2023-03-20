<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { onMounted, ref } from 'vue'
const base_url = "https://techcrunch.com/wp-json/wp/v2/posts/";
const newsList = ref([]);
async function getNewsDetail() {
    let response = await fetch(base_url);
    newsList.value = await response.json();
    console.log(newsList.value)
  }

onMounted(() => {
  getNewsDetail();
})

</script>

<template>
  <main>
    <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="heading-sec">
          <h1>A news application from Vue.js</h1>
          <p>
            A simple and minimilistic looking news application made from vue.js.
          </p>
        </div>
      </div>
      <div
        class="col-md-4"
        v-for="news in newsList.slice(0, 6)"
        :key="news.id"
      >
        <router-link :to="`/${news.slug}`" class="news-item">
          <div class="news-img">
            <img
              :src="news.jetpack_featured_media_url"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="text-sec">
            <h5 class="news-title" v-html="news.title.rendered"></h5>
            <div class="publisher-info d-flex align-item-center">
              <div class="info">
                <span class="publisher-date">{{ news.date }}</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  </main>
</template>
