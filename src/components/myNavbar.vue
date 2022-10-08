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
  <div class="navMain">
    <div class="Mynav">
      <div :class="page == 'Posts' ? 'active' : ''">
        <router-link class="Rlink" to="/mainPage"><img src="../assets/posts.png" width="20" alt=""><p class="items">Posts</p></router-link>
      </div>
      <!-- <div :class="page == 'Stores' ? 'active' : ''">
        <router-link class="Rlink" to="/stores"><p class="items">Stores</p></router-link>
      </div> -->
      <div :class="page == 'Ratings' ? 'active' : ''"> 
        <router-link class="Rlink" to="/ratings"><img src="../assets/store.png" width="20" alt=""><p class="items">Stores</p></router-link>
      </div>
      <div :class="page == 'Leads' ? 'active' : ''">
        <router-link class="Rlink" to="/leads"><img src="../assets/leads.png" width="20" alt=""><p class="items">Leads</p></router-link>
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
  border-radius: 5px;
}
.Mynav > div {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}


.items{
  margin:0px;
  padding:15px 0px;
}
.Rlink {

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  gap:10px;
}
.active {
  position: relative;
  top:-1px;
  border-top :2px solid rgba(0, 0, 95, 0.774);;
  color: rgba(0, 0, 85, 0.911);;
}
</style>
