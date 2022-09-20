<template>
  <div>
    <div class="StoresCont">
      <div class="Store" v-for="store in Stores" :key="store.storeName">
        <div class="FirstRow">
          <div class="StoreImg">
            <img
              :src="store.NEW ? store.img : '/img/' + store.img"
              alt=""
            />
          </div>
          <div class="StoreInfo">
            <div class="StoreName">
              <div>
                <p id="storeName">{{ store.storeName }}</p>
                <div class="Rating">
                  <p>4.9</p>
                  <img src="../assets/star.png"/>
                  <img src="../assets/star.png"/>
                  <img src="../assets/star.png"/>
                  <img src="../assets/star.png"/>
                  <img src="../assets/star.png"/>
                </div>
              </div>
              <div >
              </div>
              
            </div>
            <div class="StoreButton">
              <button class="StoreContact">Call</button>
              <button class="StoreLocation">Location</button>
            </div>
          </div>
        </div>
        <div class="StoreAddress">
          {{ store.storeAddress }}
        </div>
      </div>
    </div>
    <div class="addmore">
      <img
        src="../assets/addition.png"
        id="show-btn"
        @click="$bvModal.show('bv-modal-example')"
        alt=""
      />
    </div>
    <div>
      <b-modal id="bv-modal-example" hide-footer>
        <template #modal-title>
          <code>create a post</code>
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
            $bvModal.hide('bv-modal-example');
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
  name: "stores",
  data() {
    return {
      example: [],
      preview: "",
      storeName: "",
      storeAddress: "",
      storeContact: "",
      image: "",
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
  methods: {
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
  },
};
</script>
<style scoped>

.StoresCont {
  padding: 2% 10%;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  flex-flow: row wrap;
  background: rgb(255, 255, 255);
}

.Store {
  width: 45%;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.815);
  border: 1px solid rgba(0, 0, 0, 0.185);
}
.Store:hover {
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.281);
}
.FirstRow{
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.425);

}
.StoreImg {
  margin: 0px 2%;
  display: flex;
  align-items: center;
}
.StoreImg > img {
  width:220px;
 height: 150px;
 border-radius:10px;
}
.StoreInfo {
  width: 100%;
  height:150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.Rating{
  margin-top:15px;
display:flex;
justify-content: space-between;
align-items: center;
}
.Rating>img{
  width:20px;
  height:20px
}
.Rating>p{
  margin:0px;
  font-size: x-large;
  font-weight: 300;
}

 #storeName{
  margin:0px;
  font-size: 25px;
}
.StoreButton {
  display: flex;
  justify-content: space-between;
}
.StoreAddress{
  padding:10px 10px;
}
.StoreButton > button {
  border: none;
  outline: none;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.322);
  width: 80px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.63);
}
.StoreInfo > .StoreName {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
}
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
