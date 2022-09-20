<template>
  <div class="maindiv">
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
    <div class="MainCont">
      <div class="Img">
        <img src="../assets/userPic.jpeg" width="180" height="180" alt="" />
      </div>
      <div class="binfo">
        <div class="btitle">
          <p>
          Tata Company
          </p>
          <div class="Ratnig">
            <img src="../assets/star.png"/>
            <img src="../assets/star.png"/>
            <img src="../assets/star.png"/>
            <img src="../assets/star.png"/>
            <img src="../assets/star.png"/>
          </div>
        </div>
        
        <div class="Conts">
          <div class="cont">
            <p class="btext">followers</p>
            <p class="number1">10K</p>
          </div>
          <div class="cont">
            <p class="btext">visitors</p>
            <p class="number2">13900+</p>
          </div>
          <div class="cont">
            <p class="btext">ratings</p>
            <p class="number2">4.5</p>
          </div>
        </div>
        <div>
          <p class="summary">
            The kurti changed the Indian ready-made garment sector. Leading this
            fashion revolution — from a store in south Mumbai's Hughes Road
            precinct — was Tata group's flagship retail store Westside. Its
            trademark kurti was sold under the same brand name, Westside.
          </p>
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
  width: 145%;
  padding:0px 25%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.219);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:80px;
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
  margin-top: 10px;
  font-weight: 300;
  display: flex;
  align-items: center;
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
  border-bottom: 2px solid rgba(0, 0, 0, 0.219);
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
  font-weight: 300;
  color:rgb(221, 32, 32);
  align-items: center;
}


.Conts {
  width: 100%;
  height:70px;
  display: flex;
  justify-content: space-between;
}
.Conts > .cont {
  width: 100px;
}
.summary {
  width: 100%;
  text-align: left;
  color: rgb(73, 24, 48);
}
.cont > .btext {
  margin:0px;
  font-weight: 300;
  text-align: center;
  font-size: x-large;
}
.cont > .number1 {
  text-align:center;
  font-size: large;
  font-weight: 400;
  color: rgb(0, 0, 0);
}
.cont > .number2 {
  text-align: center;
  font-size: large;
  font-weight: 400;
  color: rgb(0, 0, 0);;
}
</style>
