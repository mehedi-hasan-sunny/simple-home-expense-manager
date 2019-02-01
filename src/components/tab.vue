<template>
  <div class="row">

    <div class="col s12" id="test1">Test 1</div>
    <div class="col s12" id="test2">Test 2</div>
    <div class="col s12" id="test3">Test 3</div>

    <ul class="tabs fixed-bottom tabs-fixed-width">
      <li class="tab btn-flat waves-effect"><a class="" href="#test1">Test 1</a></li>
      <li class="tab"><a class="waves-effect waves-ripple" href="#test2">Test 2</a></li>
      <li class="tab">
        <a class="waves-effect waves-ripple waves-purple" href="#test3">
          <div class="tab-icon">
            <i class="small material-icons">tv</i>
           <small>Dashboard</small>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "tab",
    mounted() {
      M.AutoInit();
    },
  }
</script>

<style lang="scss">
  .fixed-bottom {
    position: fixed;
    bottom: 0;
  }

</style>
