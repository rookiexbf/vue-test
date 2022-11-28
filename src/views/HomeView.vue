<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import query from '@/api/list.js'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data(){
    return {
      query:query.query
    }
  },
  beforeCreate(){
    console.log('Home-beforeCreate')
  },
  created(){
    console.log('Home-created')
  },
  beforeMount(){
    this.query()
    console.log('Home-beforeMount')
  },
  mounted(){
    console.log('Home-mounted')
  },
  destroyed(){
    console.log('Home-destroyed')
  },
  beforeDestroy(){
    console.log('Home-beforeDestroy')
  }
}
</script>
