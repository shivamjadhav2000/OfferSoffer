<script setup lang="ts">
import myNavbar from "../components/myNavbar.vue";
import profile from "../components/profile.vue";
import Stores from "../components/Stores.vue";
</script>

<template>
  <div class="mainPage">
    <profile />
    <myNavbar page="Stores" />
    <Stores />
  </div>
</template>
<style>
</style>
