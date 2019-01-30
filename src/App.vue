<template>
  <div id="app" background-color="dark">
    <ion-app>
      <SideMenu></SideMenu>
      <div class="ion-page top-toolbar" main>
        <ion-header>
          <ion-toolbar>
            <ion-menu-toggle class="menu-btn"><ion-menu-button></ion-menu-button></ion-menu-toggle>
            <ion-title >{{title}}</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>

          <router-view/>

        </ion-content>
      </div>

    </ion-app>
    <!--<ion-menu-controller></ion-menu-controller>-->


  </div>
</template>

<script>
  import SideMenu from './components/SideMenu';
export default {
  name: 'App',
  components:{
    SideMenu,
  },
  data(){
    return{
      title: 'Dashboard'
    }
  },
  created(){
    this.title = this.$route.name;
    //M.AutoInit();
  },
   mounted(){

   },
  methods: {
    // openStart () {
    //   document.querySelector('ion-menu-controller').open('start')
    // },
    routeChange(){
      this.title = this.$route.name;
      console.log(this.$route);
    }
  },
  watch:{
    $route: 'routeChange',
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .menu-btn{
    position: absolute;
    left: 0;
    z-index: 99;
    padding: 12px 6px;
    top: 0;
  }
  .top-toolbar{
    ion-header{
      ion-toolbar{
        --background: #7e57ff;
        ion-menu-button, ion-title{
          color: #fff;
        }
      }
    }

  }

</style>
