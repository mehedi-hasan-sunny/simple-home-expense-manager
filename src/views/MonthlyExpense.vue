<template>
  <ion-page>
    <ion-content class="content">

      <ion-card class="card-rounded m-2" v-for="(post,index) in posts" v-bind:key="post+index">
        <ion-card-content class="p-1">
          {{post}}
        </ion-card-content>
      </ion-card>

      <ion-item>
        <ion-input :value="name" ref="newTodoItem" @input="updateTodoName" placeholder="Todo Name"></ion-input>
      </ion-item>


      <!-- Modal Structure -->
      <div id="modal1" class="modal">
        <div class="modal-content">
          <AddorEditMonthlyExpense></AddorEditMonthlyExpense>
        </div>
      </div>

      <a class="modal-trigger" href="#modal1">
      <ion-fab-button class="todo-fab" @click="addTodo">
        <ion-icon name="checkmark"></ion-icon>
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
        posts: ['eat','sleep'],
        name:'',
        isModalVisible:false,
        showModal: false
      }
    },
    created() {

      let instance = this;

      storage.get('subreddit').then((value) => {

        if(value != null){
          instance.posts = JSON.parse(value);
        }
      });

    },
    mounted(){
      M.AutoInit();
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      switchSubreddit(subreddit){

        this.posts.push(subreddit);

        storage.set('subreddit', JSON.stringify(this.posts));
      },
      updateTodoName() {
        this.name = this.$refs.newTodoItem.value
      },
      addTodo(){
        this.switchSubreddit(this.name);
        this.name = null;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todo-fab {
    position: fixed;
    bottom: 25px;
    right: 15px;
    font-size: 30px;
  }
  .m-2{
    margin: 20px;
  }
</style>
