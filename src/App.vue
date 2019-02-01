<template>
  <div id="app">
    <ion-app>
      <SideMenu></SideMenu>
      <div class="ion-page top-toolbar main-content" main>
        <ion-header>
          <ion-toolbar>
            <ion-menu-toggle class="menu-btn">
              <ion-menu-button></ion-menu-button>
            </ion-menu-toggle>
            <ion-title class="ion-text-center">{{title}}</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>

          <router-view/>


          <!--<div class="fixed-bottom">-->
          <!---->
          <!--</div>-->
        </ion-content>
        <ion-footer id="btm-hider">
          <div class="bottom-tab">
            <div @click.prevent="title = link.title, goToRoute(link.route)" class="tab-icon waves-effect"
                 v-for="link in links">
              <i class="small material-icons">{{link.icon}}</i>
              <small>{{link.title}}</small>
            </div>
          </div>

          <!--<ul class="tabs tabs-fixed-width bottom-tab">-->
          <!--<li class="tab" v-for="link in links">-->
          <!--<a href="#" @click.prevent="title = link.title, goToRoute(link.route)">-->
          <!---->
          <!--</a>-->
          <!--</li>-->
          <!--</ul>-->
        </ion-footer>
      </div>
    </ion-app>
  </div>
</template>

<script>
  import SideMenu from './components/SideMenu';

  export default {
    name: 'App',
    components: {
      SideMenu,
    },
    data() {
      return {
        title: 'Dashboard',
        links: [
          {icon: 'tv', title: 'Dashboard', route: '/'},
          {icon: 'date_range', title: 'Monthly', route: '/MonthlyExpense'},
          {icon: 'event', title: 'Daily', route: '/DailyExpense'},
          // {icon: 'layers', title: 'Tab', route: '/tab'},
        ]
      }
    },
    created() {
      this.title = this.$route.name;
      //M.AutoInit();
    },
    mounted() {

      Notification.requestPermission().then(function (result) {
        console.log(result);
      });
    },
    methods: {


      goToRoute(link) {
        this.$router.push({path: link})
      }
      ,
      routeChange() {
        //this.title = this.$route.name;
        document.querySelector('#btm-hider').removeAttribute("style");
        console.log(this.$route);
      }
    },
    watch: {
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

  .fixed-bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .bottom-tab {
    border-top: 1px solid dimgrey;
    height: 56px;
    display: flex;
    justify-content: space-between;
    /*.tab{*/
    /*height: 56px !important;*/
    /*a{*/
    /*text-transform: none !important;*/
    /*color: #6f6c6c !important;*/
    /*&:focus{*/
    /*background: transparent !important;*/
    /*}*/
    /*&.active{*/
    /*color: #7e57ff !important;*/
    /*&:focus{*/
    /*background: transparent !important;*/
    /*}*/
    /*}*/

    /*}*/
    /*}*/

    /*.tab-icon{*/
    /*display: flex;*/
    /*justify-content: center;*/
    /*flex-direction: column;*/
    /*height: 56px;*/

    /*i{*/
    /*// display: table-header-group;*/
    /*font-size: 1.5rem;*/
    /*line-height: 1.24;*/
    /*}*/
    /*small{*/
    /*// display: table-footer-group;*/
    /*line-height: 1.6;*/
    /*}*/
    /*}*/

    .indicator {
      display: none;
    }

    .tab-icon {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 56px;

      i {
        // display: table-header-group;
        font-size: 1.5rem;
        line-height: 1.24;
      }

      small {
        // display: table-footer-group;
        line-height: 1.6;
      }
    }
  }

  .card-rounded {
    border-radius: 10px;
  }

  .menu-btn {
    position: absolute;
    left: 0;
    z-index: 99;
    padding: 12px 6px;
    top: 0;
  }

  .top-toolbar {
    ion-header {
      ion-toolbar {
        --background: #7e57ff;

        ion-menu-button, ion-title {
          color: #fff;
        }
      }
    }

  }

</style>
