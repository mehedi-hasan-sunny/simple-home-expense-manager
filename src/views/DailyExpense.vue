<template>
  <div>
    <button @click="notifyMe" class="btn">Notify</button>

    <div class="card">
      <div class="car-content">
        latitude  = {{geo.latitude}}
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "DailyExpense",
    data(){
      return{
        geo: {},
      }
    },
    mounted(){
      var instance = this;
      navigator.geolocation.getCurrentPosition(({ coords })=>{
        //this.loadingPosition = false;
        //this.geolocation = coords;
        instance.geo =  coords;
        console.log(coords)
      });
      cordova.plugins.notification.local.schedule({
        title: 'Notification Test',
        text: 'Chorami koira notification use kortesi ',
        // actions: [{
        //   id: 'reply',
        //   type: 'input',
        //   title: 'Reply',
        //   emptyText: 'Type message',
        // }, ]
      });
    },
    methods:{
       alertDismissed() {
        this.notifyMe();
      },


      notifyMe() {
        // Let's check if the browser supports notifications
        if (!("Notification" in window)) {
          alert("This browser does not support desktop notification");
        }

        // Let's check whether notification permissions have already been granted
        else if (Notification.permission === "granted") {
          // If it's okay let's create a notification
          var notification = new Notification("Hi there!");
        }

        // Otherwise, we need to ask the user for permission
        else if (Notification.permission !== "denied") {
          Notification.requestPermission().then(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
              var notification = new Notification("Hi there!");
            }
          });
        }

        // At last, if the user has denied notifications, and you
        // want to be respectful there is no need to bother them any more.
      },
    }
  }
</script>

<style scoped>

</style>
