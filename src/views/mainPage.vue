<script setup lang="ts">
import myNavbar from "../components/myNavbar.vue";
import profile from "../components/profile.vue";
import posts from "../components/posts.vue";
import newPosts from "../components/newPosts.vue";

</script>

<template>
  <div class="mainPage">
    <profile />
    <myNavbar page="Posts" />
    <newPosts />
  </div>
</template>

<style>
.mainPage{
  font-family: 'Karla';
    font-style: normal;
}
</style>
