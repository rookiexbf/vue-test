<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: 'AboutView',
  beforeCreate(){
    console.log('about-beforeCreate')
  },
  created(){
    console.log('about-created')
  },
  beforeMount(){
    console.log('about-beforeMount')
  },
  mounted(){
    console.log('about-mounted')
  },
  destroyed(){
    console.log('about-destroyed')
  },
  beforeDestroy(){
    console.log('about-beforeDestroy')
  }
}
</script>