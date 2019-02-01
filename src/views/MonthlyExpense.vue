<template>
  <ion-page>
    <ion-content class="content">

      <ion-card class="card-rounded m-2" v-for="post in posts" v-bind:key="post.bill">
        <ion-card-header>
          <ion-card-subtitle> {{post.title}}</ion-card-subtitle>
          <ion-card-title> {{post.bill}}<span class="badge white-text rounded" :class="[post.status? 'green ' : 'red']">{{post.status ? 'Paid' : 'Due' }}</span></ion-card-title>
        </ion-card-header>
      </ion-card>

      <!-- Modal Structure -->

      <div id="modal1" class="modal bottom-sheet modal-form">
        <div class="modal-content">
          <AddorEditMonthlyExpense :posts.sync="posts"></AddorEditMonthlyExpense>
        </div>

      </div>
      <a class="modal-trigger" href="#modal1" @click="hideBottomNav()">
      <ion-fab-button class="todo-fab">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>

      </a>
    </ion-content>
  </ion-page>

</template>

<script>

  import AddorEditMonthlyExpense from './AddorEditMonthlyExpense';
  import Storage from '../services/storage';
  const storage = new Storage();

  export default {
    name: 'MonthlyExpense',
    components: {
      AddorEditMonthlyExpense,
    },
    data () {
      return {
        posts: [],
        name:'',
      }
    },
    created() {
      let instance = this;
      storage.get('subreddit').then((value) => {
        if(value != null){
          let data = JSON.parse(value);
          if (data.length>0)
          {
            instance.posts = data;
          }
          else {
            instance.posts.push(data);
          }
        }
      });


    },
    mounted(){
      M.AutoInit();
      var instance = M.Modal.init(document.querySelector('#modal1'),
        {
          onCloseStart: function () {
            document.querySelector('#btm-hider').removeAttribute("style");
          }
        }
      );
    },
    methods: {

      hideBottomNav(){
        document.querySelector('#btm-hider').setAttribute("style", "display:none;");
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .todo-fab {
    position: fixed;
    bottom: 25px;
    right: 15px;
    font-size: 30px;
  }
  .m-2{
    margin: 20px;
  }
  .modal-form{
    border-top-left-radius: 10px !important;
    border-top-right-radius: 10px !important;
    max-height: 85% !important;
  }
</style>
