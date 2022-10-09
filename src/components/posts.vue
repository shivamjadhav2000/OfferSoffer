<!-- eslint-disable prefer-const -->
<template>
    <div class="postMain">
       <div class="PostsCont">
        <div class="post" v-for="post in posts" :key="post.id">
            <div class="postImg">
              <img :src="post.NEW ? post.img : '/img/' + post.img">
              <div class="PostIconsCont">
                <div class="PostIcon">
                  <img src="../assets/heart.png" width="25" height="25" alt="">
                  <p>1.4K</p>
                </div>
                <div class="PostIcon">
                  <img src="../assets/chat.png" width="25"  height="25" alt="">
                  <p>900</p>
                </div>
              </div>
            </div>
            <div class="postInfo">
              <p>{{ post.title }} {{ post.offer }}</p>
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
            <code>Create a post</code>
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
                v-model="posttitle"
                name=""
                id=""
                placeholder="add a title(summer sale)"
              />
              <input
                class="postinput"
                v-model="postoffers"
                type="text"
                name=""
                id=""
                placeholder="Add offers (eg 30% off)"
              />
            </form>
          </div>
          <b-button
            class="mt-3"
            block
            variant="danger"
            @click="
              $bvModal.hide('bv-modal-example');
              createPost();
            "
            >Add Post</b-button
          >
        </b-modal>
      </div>
    </div>
  </template>
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Posts",
    data() {
      return {
        example: [],
        image: false,
        preview: "",
        posttitle: "",
        postoffers: "",
        posts: [
          {
            title: "fall sale",
            img: "shirt1.jpeg",
            offer: "30% off",
          },
          {
            title: "summer sale",
            img: "shirt2.jpeg",
            offer: "30% off",
          },
          {
            title: "new arrivals",
            img: "shirt3.jpeg",
            offer: "30% off",
          },
          {
            title: "freedom sale",
            img: "shirt4.jpeg",
            offer: "30% off",
          },
          {
            title: "fashion sale",
            img: "shirt5.jpeg",
            offer: "30% off",
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
      createPost() {
        const obj = {
          title: this.posttitle,
          offer: this.postoffers,
          img: this.preview,
          NEW: true,
        };
        this.posts.push(obj);
      },
    },
  };
  </script>
  <style scoped>
  button {
    text-decoration: none;
    border: none;
    outline: none;
  }
  p {
    margin: 5px;
  }
  .PostsCont {
    margin: 2% 15%;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    gap: 4%;
  }
  .post {
    width: 22%;
    height: 300px;
    margin: 10px 0px;
    display: flex;
    color:white;
    font-size: large;
    position: relative;
    text-transform: uppercase; 
    font-weight:900;
    flex-direction: column;
    justify-content: space-between;
    border:1px solid rgba(59, 57, 57, 0.096);
    background: rgba(255, 255, 255, 0.815);
  }
  .PostIconsCont{
    justify-content: center;
    align-items: center;
    position: absolute;
    width:100%;
    top:130px;
    display:none;
  }
 .PostIcon{
    display: flex;
    align-items: center;
  }
  .post>.postInfo{
    position: relative;
    bottom:40px;
  }
  .post>.postImg>img{
    width: 100%;
    height: 300px;
  }
  .postImg:hover{
    opacity: 0.8;
    /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  }
  .postImg:hover .PostIconsCont{
    display:flex;
  }
  .sec1 {
    display: flex;
    justify-content: space-evenly;
  }
  .sec2 {
    margin-top: 5px;
    text-align: center;
  }
  .sec2 > img {
    border-radius: 5px;
  }
  .sec4 {
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  