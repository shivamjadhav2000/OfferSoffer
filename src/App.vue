<script setup lang="ts">
</script>

<template>
  <div id="app">
    <router-view />
  </div>
  
</template>

<style scoped>
#app{
  background:rgba(245, 245, 245, 0.575);
}

@font-face {
    font-family: 'Karla';
    src: local("Karla"),
    url(./fonts/Karla/Karla-Regular.ttf) format("truetype"),
    url(../fonts/Karla/Karla-Bold.ttf),
      url(../fonts/Karla/Karla-BoldItalic.ttf),
      url(../fonts/Karla/Karla-ExtraBold.ttf),
      url(../fonts/Karla/Karla-ExtraBoldItalic.ttf),
      url(../fonts/Karla/Karla-ExtraLight.ttf),
      url(../fonts/Karla/Karla-ExtraLightItalic.ttf),
      url(../fonts/Karla/Karla-Italic-VariableFont_wght.ttf),
      url(../fonts/Karla/Karla-Italic.ttf), url(../fonts/Karla/Karla-Light.ttf),
      url(../fonts/Karla/Karla-LightItalic.ttf),
      url(../fonts/Karla/Karla-Medium.ttf),
      url(../fonts/Karla/Karla-MediumItalic.ttf),
      url(../fonts/Karla/Karla-Regular.ttf),
      url(../fonts/Karla/Karla-SemiBold.ttf),
      url(../fonts/Karla/Karla-SemiBoldItalic.ttf),
      url(../fonts/Karla/Karla-VariableFont_wght.ttf);
  }
</style>
