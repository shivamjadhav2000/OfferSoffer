<template>
  <div >
    <div class="navBarDiv">
      <img src="../assets/logo_b.png" width="50" alt="" />
      <div><p>Offer Soffer - Buisness</p></div>
      <div class="icons">

        <img src="../assets/user.png" width="30" height="30" alt="" />
        <img src="../assets/bell.png" width="30" height="30" alt="" />
        <!-- <router-link class="Rlink" to="/"> -->
          <img src="../assets/logout.png" width="30" height="30" alt="" />
        <!-- </router-link> -->
      </div>
    </div>

    <div class="maindiv">
    <div class="MainCont">
      <div class="Img">
        <img src="../assets/userPic.jpeg" width="180" height="180" alt="" />
      </div>
      <div class="binfo">
        <div class="btitle">
          <p>
          Tata Company
          </p>
          
        </div>
        
        <div class="Conts">
          <div class="cont">
            <p class="number1">10K</p>
            <p class="btext">followers</p>
          </div>
          <div class="cont">
            <p class="number1">13900+</p>
            <p class="btext">visitors</p>
          </div>
          <div class="cont">
            <p class="number1">4.5</p>
            <p class="btext">ratings</p>
          </div>
        </div>
        <div>
          <p class="summary">
            The kurti changed the Indian ready-made garment sector. Leading this
            fashion revolution..
          </p>
          <p class="websitelink">https://westside.com/fashion</p>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "profile",
  props: ["artists"],
};
</script>
<style scoped>
  .Rlink {
    text-decoration: none;
    color: inherit;
  }
.navBarDiv {
  border-bottom: 1px solid rgba(0, 0, 0, 0.219);
    background-color: rgb(255, 255, 255);
  padding:0px 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:60px;
}
.Ratnig{
  margin:0px 100px;
  width:300px;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.Ratnig>img{
  width:20px;
}
.navBarDiv > div > p {
  font-weight: 300;
  display: flex;
  align-items: center;
  margin:0px;
}
.navBarDiv {
  font-size: xx-large;
}
.navBarDiv > .icons {
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items:center;
}
.maindiv {
  background: white;
  margin: 0px 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.219);
}

.MainCont > .Img {
  display: flex;
  align-items: center;
}
.MainCont > .Img > img {
  border-radius: 50%;
}

.MainCont {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
}
.binfo {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: left;
  border-radius: 2px;
}
.binfo > .btitle {
  width: 100%;
  display: flex;
  align-items: center;
  padding:10px 0px;
}
.btitle>p{
  margin:0px;
  display:flex;
  font-size: x-large;
  font-weight: 400;
  color:rgb(5, 13, 29);
  align-items: center;
}


.Conts {
  width: 100%;
  height:40px;
  display: flex;
  gap:20px;
}
.Conts > .cont {
  display:flex;
  align-items: center;
  gap: 5px;
}
.summary {
  width: 100%;
  text-align: left;
  color: rgba(0, 0, 0, 0.808);
}
.websitelink{
  font-size: medium;
  font-weight: 600;
  color:rgba(0, 0, 95, 0.774);
}
.cont > .btext {
  margin:0px;
  font-weight: 400;
  text-align: center;
  font-size: large;
  padding: 0%;
}
.cont > .number1 {
  margin:0px;
  text-align:center;
  font-size:medium;
  font-weight: 500;
  color: rgb(0, 0, 0);
}
</style>
