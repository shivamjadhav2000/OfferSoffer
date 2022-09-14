<template>
  <div>
    <div class="RatingCont">
      <div class="RatingCard">
        <div class="RatingUser">
          <p class="h5">shivam jadhav</p>
          <div>
            <span>Ratings 4.1</span
            ><img src="../assets/rating.png" width="100" alt="" />
          </div>
          <p class="h6">this store is very nearby to me and has good offers.</p>
        </div>
        <div class="StoreInfo">
          <p class="h6">sep 14 2022 10 58</p>
        </div>
      </div>
      <div class="RatingCard">
        <div class="RatingUser">
          <p class="h5">shiva kumar</p>
          <div>
            <span>Ratings 4.1</span
            ><img src="../assets/rating.png" width="100" alt="" />
          </div>
          <p class="h6">this store is very nearby to me and has good offers.</p>
        </div>
        <div class="StoreInfo">
          <p class="h6">sep 14 2022 10 58</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ratings",
  data() {
    return {
      Stores: [
        {
          img: "zudio.jpeg",
          storeName: "Zudio",
          storeAddress:
            "Address: Pillar No, 138, Attapur Main Rd, Hyderaguda, Hyderabad,Telangana 500048",
        },
        {
          img: "westside.jpeg",
          storeName: "Westside",
          storeAddress:
            "Address: Pillar No, 138, Attapur Main Rd, Hyderaguda, Hyderabad,Telangana 500048",
        },
      ],
    };
  },
};
</script>
<style scoped>
p {
  margin: 5px;
}
.RatingCont {
  padding: 2% 10%;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  background: rgb(255, 255, 255);
}
.RatingCard {
  width: 100%;
  margin: 5px;
  display: flex;
  padding: 10px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.815);
  border: 1px solid rgba(0, 0, 0, 0.185);
}
.RatingCard:hover {
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.281);
}
.RatingUser {
  display: flex;
  flex-direction: column;
  align-items: left;
}
.StoreImg > img {
  border-radius: 5px;
}
.StoreInfo {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.StoreName > p {
  font-size: 35px;
}

.StoreInfo > .StoreName {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
}
</style>
