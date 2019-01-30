<template>
  <ion-page>
    <ion-content class="content">
      <ion-toolbar>
        <ion-title>Add Item</ion-title>
      </ion-toolbar>
      <ion-list>
        <ion-item v-for="(post,index) in posts" v-bind:key="post+index">
          {{post}}
        </ion-item>
      </ion-list>
      <ion-item>
        <ion-input :value="name" ref="newTodoItem" @input="updateTodoName" placeholder="Todo Name"></ion-input>
      </ion-item>

      <ion-fab-button class="todo-fab" @click="addTodo">
        <ion-icon name="checkmark"></ion-icon>
      </ion-fab-button>

    </ion-content>
  </ion-page>
</template>

<script>
  //import RedditService from '../services/reddit';
  import Storage from '../services/storage';

  const storage = new Storage();

  export default {
    name: 'HelloWorld',
    data () {
      return {
        posts: ['eat','sleep'],
        name:'',
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
    methods: {
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
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .todo-fab {
    position: fixed;
    bottom: 25px;
    right: 15px;
    font-size: 30px;
  }
</style>
