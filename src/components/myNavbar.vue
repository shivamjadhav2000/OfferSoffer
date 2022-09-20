<script>
export default {
  name: "myNavbar",
  props: ["page"],
  data() {
    return {
      active: "Stores",
    };
  },
};
</script>
<template>
  <div>
    <div class="Mynav">
      <div :class="page == 'Posts' ? 'active' : ''">
        <router-link class="Rlink" to="/mainPage"><p class="items">Posts</p></router-link>
      </div>
      <!-- <div :class="page == 'Stores' ? 'active' : ''">
        <router-link class="Rlink" to="/stores"><p class="items">Stores</p></router-link>
      </div> -->
      <div :class="page == 'Ratings' ? 'active' : ''"> 
        <router-link class="Rlink" to="/ratings"><p class="items">Stores</p></router-link>
      </div>
      <div :class="page == 'Leads' ? 'active' : ''">
        <router-link class="Rlink" to="/leads"><p class="items">Leads</p></router-link>
      </div>
    </div>
  </div>
</template>
<style>
.Mynav {
  margin: 0px 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(255, 255, 255);
  border-radius: 5px;
}
.Mynav > div {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.items{
  padding:15px 0px;
}
.Rlink {
  text-decoration: none;
  color: inherit;
}
.active {
  position: relative;
  top:-2px;
  border-top :2px solid red;
  color: red;
}
</style>
