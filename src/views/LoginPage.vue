<template>
  <div class="logindiv">
    <div class="Headings">
      <p class="h1">Offer - Soffer</p>
      <p class="h5 text-secondary" >Buisness</p>
    </div>
    <div>
      <form action="/mainPage" class="Form">
        <p class="title">Sign in</p>
        <div class="formElements">
          <label for="phoneNumebr">
            <img src="../assets/user.png" width="30px" alt="" />
          </label>
          <input name="phoneNumber" type="text" placeholder="Phone Number" />
        </div>
        <div class="formElements">
          <label for="password">
            <img src="../assets/padlock.png" width="30px" alt="" />
          </label>
          <input type="text" name="password" placeholder="Password" />
        </div>
        <a href="http://" class="grey">Forgot your password</a>
        <button>Submit</button>
        <div class="extra">
          <a href="http://" class="grey">Not a member?</a>
          <p class="title">sign up</p>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
  .Headings{
    text-align: center;
    color: red;
    padding:20px 0px;
  }
.logindiv {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  text-decoration: none;
  color: inherit;
}
.Form {
  display: flex;
  width: 300px;
  height: 350px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 5px 0;
  background: rgba(255, 255, 255, 0.637);
  backdrop-filter: blur(10px);
  border-radius: 5px;
  padding: 4%;
}
.title {
  color: rgb(236, 17, 17);
  font-size: large;
  font-weight: bold;
}
input {
  text-decoration: none;
  border: none;
  outline:none;
  border-bottom: 1px solid black;
  background: none;
  color: rgba(0, 0, 0, 0.699);
  font-size: large;
  font-weight: bold;
  text-align: left;
  width: 80%;
}
.Form > .formElements {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.grey {
  color: grey;
  font-size: small;
}
.Form > button {
  text-decoration: non;
  border: none;
  background: rgb(236, 17, 17);
  color: white;
  width: 70%;
  padding: 4% 2%;
  border-radius: 15px;
  box-shadow: 0 0 5px 0;
}
.extra {
  width:170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.extra>p{
  margin:0px;
}
</style>
