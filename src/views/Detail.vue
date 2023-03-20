<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from "vue-router";

const route = useRoute();
const post = ref([]);

async function getDetail() {
    let newId = route.params.id;
    let response = await fetch('https://techcrunch.com/wp-json/wp/v2/posts/' + newId);
    post.value = await response.json();
    console.log(post.value);
}
onMounted(() => {
    getDetail();
})
</script>

<template>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="news-detail">
            <div class="news-bg-img">
              <img :src="post.jetpack_featured_media_url" alt="" />
            </div>
            <div class="row">
              <div class="col-md-9">
                <div class="main-heading">
                  <h1 v-html="post.title.rendered"></h1>
                  <div class="desc" v-html="post.content.rendered"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>