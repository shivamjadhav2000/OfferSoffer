<template>
  <div class="LeadsCont">
    <div>
      <p class="h2">People Searching for Clothings Offers</p>
      <div>
        <div class="row mb-1 progressDiv">
          <div class="col-sm-2"><p class="h5">Total search</p></div>
          <div class="col-sm-10 pt-1">
            <b-progress
              value="100"
              height="40px"
              show-progress
              variant="warning"
            ></b-progress>
          </div>
        </div>
        <div class="row mb-1 progressDiv">
          <div class="col-sm-2" ><p class="h5">18 years -25 years</p></div>
          <div class="col-sm-10 pt-1">
            <b-progress
              value="48"
              height="40px"
              show-progress
              variant="primary"
            ></b-progress>
          </div>
        </div>
        <div class="row mb-1 progressDiv">
          <div class="col-sm-2"><p class="h5">25 years-45 years</p></div>
          <div class="col-sm-10 pt-1">
            <b-progress
              value="44"
              height="40px"
              show-progress
              variant="secondary"
            ></b-progress>
          </div>
        </div>
        <div class="row mb-1 progressDiv">
          <div class="col-sm-2"><p class="h5">Male</p></div>
          <div class="col-sm-10 pt-1">
            <b-progress
              value="80"
              height="40px"
              show-progress
              variant="success"
            ></b-progress>
          </div>
        </div>
        <div class="row mb-1 progressDiv">
          <div class="col-sm-2"><p class="h5">Female</p></div>
          <div class="col-sm-10 pt-1">
            <b-progress
              value="20"
              height="40px"
              show-progress
              variant="danger"
            ></b-progress>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "leads",
};
</script>
<style scoped>
.LeadsCont {
  margin: 10px 10%;
}
.progressDiv {
    margin:20px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
