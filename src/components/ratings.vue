<template>
  <div class="Ratingmain">
    <div >
      <div class="RatingCont" v-for="store in Stores" :key="store.id">
        <div class="RatingCard" >
            <div class="storeImg">
              <img :src="store.NEW ? store.img : '/img/' + store.img" width="300" height="180" alt="" />
            </div>
            <div class="StoreInfo">
              <p class="name">{{store.storeName}}</p>
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
                <p>{{store.storeAddress}}</p>
              </div>
            </div>
            <div>
              <img v-b-toggle="'collapse-'+store.id" src="../assets/down-arrow.png" width="30" height="30" alt="">
            </div>
      </div>
        <b-collapse :id="'collapse-'+store.id" class="mt-2">
          <b-card>
            <div v-if="store.user" class="user">
              <div><img src="../assets/user.png" width="30" alt=""></div>
              <div>
                <p class="card-text h4">{{store.user}}</p>
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
                <p style="font-size:medium">{{store.comment}}</p>
              </div>
              </div>
            </div>
            <div v-else>
              <p class="card-text h4">No ratings found for this store.</p>
            </div>
          </b-card>
        </b-collapse> 
    </div>
    </div>
    <div class="addmore">
      <img
        src="../assets/addition.png"
        id="show-btn"
        @click="$bvModal.show('store-add-model')"
        alt=""
      />
    </div>
    <div>
      <b-modal id="store-add-model" hide-footer>
        <template #modal-title>
          <code>Create a store</code>
        </template>
        <div class="d-block text-center">
          <form enctype="multipart/form-data" novalidate>
            <div class="filediv">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  margin: 0px 50px;
                  align-items: center;
                "
              >
                <label for="fileupload">
                  <img src="../assets/file.png" width="50" alt="" />upload
                  picture
                </label>
                <img v-if="image" :src="preview" width="150" alt="" />
              </div>

              <input
                ref="file"
                accept="image/*"
                type="file"
                name="productImg"
                id="fileupload"
                @change="filesChange"
              />
            </div>
            <input
              class="postinput"
              type="text"
              v-model="storeName"
              name=""
              id=""
              placeholder="add name of the store"
            />
            <!-- <div style="display:flex">
              <label for="">add Rating</label>
              <b-form-rating v-model="value"></b-form-rating>
            </div> -->
            <input
              class="postinput"
              v-model="storeAddress"
              type="text"
              name=""
              id=""
              placeholder="add address of the store"
            />
            <input
              class="postinput"
              v-model="storeContact"
              type="text"
              name=""
              id=""
              placeholder="enter the contact number"
            />
          </form>
        </div>
        <b-button
          class="mt-3"
          block
          variant="danger"
          @click="
            $bvModal.hide('store-add-model');
            createStore();
          "
          >Add Store</b-button
        >
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ratings",
  data() {
    return {
      Stores:[{
        id:1,
        img: "zudio.jpeg",
          storeName: "Zudio Shopping Mall",
          storeAddress:
            "Address: Pillar No, 138, Attapur Main Rd, Hyderaguda, Hyderabad,Telangana 500048",
        comment:"It's very budget friendly.But never go on a holiday.It would be a mess for sure.On a regular day everything is organised well.The ethnic section is pretty sorted but you will have less options as it is a small store.",
      user:'shivam jadhav'
      },{
        id:2,
        img: "westside.jpeg",
        storeName:'Westside Shopping Mall',
        storeAddress:
            "Address: Pillar No, 138, Attapur Main Rd, Hyderaguda, Hyderabad,Telangana 500048",
        comment:"It's a good place for shopping.The cost of the clothes is too pricy.But there are different variety with different material.For men in full hands and half hands there are too many options.Even in pants also they have .."  , 
        user:'shiva kumar'
      }],
      example: [],
      preview: "",
      storeName: "",
      storeAddress: "",
      storeContact: "",
      image: "",
    };
  },
  methods:{
    filesChange() {
      this.example = this.$refs.file.files[0];
      if (
        this.example.name.includes(".png") ||
        this.example.name.includes(".jpg")
      ) {
        this.image = true;
        this.preview = URL.createObjectURL(this.example);
      } else {
        this.image = false;
      }
    },
    createStore() {
      const obj = {
        storeName: this.storeName,
        storeAddress: this.storeAddress,
        storeContact: this.storeContact,
        img: this.preview,
        NEW: true,
      };
      this.Stores.push(obj);
    },
  }
};
</script>
<style scoped>
  .addmore {
  position: fixed;
  bottom: 50px;
  right: 60px;
}
.addmore > img {
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
}
  .Ratingmain{
    padding:20px 10%;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
.RatingCont{
  padding:20px 10px;
  margin:20px 0px;
  border-radius: 5px;
  border: 1px solid rgba(66, 62, 63, 0.26);
  width:800px; 
}
.RatingCard{
  display: flex;
  justify-content: space-between;
}
.StoreInfo{
  width:400px;
  height:180px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
}
.StoreInfo>.name{
  font-size: x-large;
}

.StoreInfo>.buttondiv{
  width:260px;
  display:flex;
  justify-content: space-between;
}
.StoreInfo>.buttondiv>button{
  width:120px;
  height: 35px;
  text-decoration: none;
  border:none;
  outline: none;
  border: 1px solid rgba(48, 46, 46, 0.226);
}
.StoreRating>p{
margin:10px 0px;
}
.storeImg>img{
  border-radius: 5px;
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
#fileupload {
  visibility: hidden;
  width: 0;
  height: 0;
}
.filediv {
  width: 100%;
}
.filediv > label > img {
  width: 50px;
}
.postinput {
  margin: 10px 0px;
}
</style>
