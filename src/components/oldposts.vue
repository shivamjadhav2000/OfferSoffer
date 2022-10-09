<!-- eslint-disable prefer-const -->
<template>
  <div>
    <div class="PostsCont">
      <div class="post" v-for="post in posts" :key="post.id">
        <div class="sec1">
          <img src="../assets/user.png" width="20px" alt="" />
          <p>shivam jadhav</p>
          <p>10 days ago</p>
        </div>
        <div class="sec2">
          <img
            :src="post.NEW ? post.img : '/img/' + post.img"
            width="250"
            height="250"
            alt=""
          />
          <p>{{ post.title }}</p>
          <p>{{ post.offer }}</p>
        </div>
        <div class="sec3">
          <p>likes:90</p>
        </div>
        <div class="sec4">
          <img src="../assets/like.png" width="30" alt="" />

          <img src="../assets/comments.png" width="30" alt="" />
          <img src="../assets/share.png" width="30" alt="" />
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
    </div>
    <div>
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
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "posts",
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
      console.log("this.sdaafafaf=", this.example);
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
  justify-content: space-around;
  background: rgb(255, 255, 255);
}
.post {
  width: 280px;
  height: 435px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 5px;
  border-radius: 5px;
  border:1px solid rgba(59, 57, 57, 0.096);
  background: rgba(255, 255, 255, 0.815);
}
.post:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;}
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
