<template>
  <div class="Ratingmain">
    <div class="RatingCont">
      <div class="RatingCard">
      <div class="storeImg">
          <img src="../assets/zudio.jpeg" width="200" height="150" alt="">
      </div>
      <div class="StoreInfo">
        <p class="name">Zudio Shopping Mall</p>
        <div class="buttondiv">
          <button>Directions</button>
          <button>Call</button>
        </div>
        <div class="StoreRating">
          <p>4.2 
            <img src="../assets/star.png" width="20" alt="">
            <img src="../assets/star.png" width="20" alt="">
            <img src="../assets/star.png" width="20" alt="">
            <img src="../assets/star.png" width="20" alt="">
            <img src="../assets/star.png" width="20" alt="">
            616 <span style="color:blue">Google reviews</span></p>
          <p>Shopping mall in Hyderabad, Telangana</p>
        </div>
      </div>
      <div>
        <img v-b-toggle.collapse-1 src="../assets/down-arrow.png" width="20" height="20" alt="">
      </div>
    </div>
    <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <div class="user">
              <div><img src="../assets/user.png" width="30" alt=""></div>
              <div>
                <p class="card-text h4">shivam jadhav</p>
                <p class="card-text  text-muted">Local Guide <b>14</b> reviews</p>
                <div class="userrating">
                  <div class="ratingsimg">
                    <img src="../assets/star.png"  alt="">
                    <img src="../assets/star.png"  alt="">
                    <img src="../assets/star.png"  alt="">
                    <img src="../assets/star.png"  alt="">
                </div>
                <p class="card-text text-muted">7 days ago</p>
              </div>
              <div>
                <p style="font-size:small">It's very budget friendly.
But never go on a holiday.It would be a mess for sure.On a regular day everything is organised well.
The ethnic section is pretty sorted but you will have less options as it is a small store.</p>
              </div>
              </div>
            </div>
          </b-card>
        </b-collapse>
    </div>
    <div class="RatingCont">
      <div class="RatingCard">
      <div class="storeImg">
          <img src="../assets/westside.jpeg" width="200" height="150" alt="">
      </div>
      <div class="StoreInfo">
        <p class="name">Westside Shopping Mall</p>
        <div class="buttondiv">
          <button>Directions</button>
          <button>Call</button>
        </div>
        <div class="StoreRating">
          <p>4.8 
            <img src="../assets/star.png" width="20" alt="">
            <img src="../assets/star.png" width="20" alt="">
            <img src="../assets/star.png" width="20" alt="">
            <img src="../assets/star.png" width="20" alt="">
            <img src="../assets/star.png" width="20" alt="">
            416 <span style="color:blue">Google reviews</span></p>
          <p>Shopping mall in Hyderabad, Telangana</p>
        </div>
      </div>
      <div>
        <img v-b-toggle.collapse-2 src="../assets/down-arrow.png" width="20" height="20" alt="">
      </div>
    </div>
    <b-collapse id="collapse-2" class="mt-2">
          <b-card>
            <div class="user">
              <div><img src="../assets/user.png" width="30" alt=""></div>
              <div>
                <p class="card-text h4">shiva kumar</p>
                <p class="card-text  text-muted">Local Guide <b>14</b> reviews</p>
                <div class="userrating">
                  <div class="ratingsimg">
                    <img src="../assets/star.png"  alt="">
                    <img src="../assets/star.png"  alt="">
                    <img src="../assets/star.png"  alt="">
                    <img src="../assets/star.png"  alt="">
                </div>
                <p class="card-text text-muted">7 days ago</p>
              </div>
              <div>
                <p style="font-size:small">It's a good place for shopping.The cost of the clothes is too pricy.But there are different variety with different material.For men in full hands and half hands there are too many options.Even in pants also they have ..</p>
              </div>
              </div>
            </div>
          </b-card>
        </b-collapse>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ratings",
  data() {
    return {
    };
  },
};
</script>
<style scoped>
  .Ratingmain{
    padding:20px 10%;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
.RatingCont{
  padding:10px;
  border: 1px solid rgba(66, 62, 63, 0.26);
  width:600px;
  
}
.RatingCard{
  display: flex;
  justify-content: space-between;
}
.StoreInfo>.name{
  font-size: x-large;
}

.StoreInfo>.buttondiv{
  width:250px;
  display:flex;
  justify-content: space-between;
}
.StoreInfo>.buttondiv>button{
  width:100px;
  text-decoration: none;
  border:none;
  outline: none;
  border: 1px solid rgba(48, 46, 46, 0.226);
}
.StoreRating>p{
margin:10px 0px;
}


.user{
  display:grid;
  grid-template-columns: 10% 90%;
}
.userrating{
  display: flex;
  width:160px;
  align-items: center;
  justify-content: space-between;
}
.ratingsimg{
  width:70px;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.ratingsimg>p{
  margin:0px;
}
.ratingsimg>img{
  width:14px;
  height:14px
}
</style>
