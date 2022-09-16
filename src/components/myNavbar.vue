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
        <router-link class="Rlink" to="/mainPage"><p>Posts</p></router-link>
      </div>
      <div :class="page == 'Stores' ? 'active' : ''">
        <router-link class="Rlink" to="/stores"><p>Stores</p></router-link>
      </div>
      <div :class="page == 'Ratings' ? 'active' : ''"> 
        <router-link class="Rlink" to="/ratings"><p>Ratings</p></router-link>
      </div>
      <div :class="page == 'Leads' ? 'active' : ''">
        <router-link class="Rlink" to="/leads"><p>Leads</p></router-link>
      </div>
    </div>
  </div>
</template>
<style>
.Mynav {
  margin: 2% 30%;
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
.Mynav > div > p {
  font-size: x-large;
  font-weight: bold;
}
.Rlink {
  text-decoration: none;
  color: inherit;
}
.active {
  color: red;
}
</style>
