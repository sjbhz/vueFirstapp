<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      articles: []
    }
  },
  methods: {
    requestData () {
      axios.get('/api/articles')
        .then(e => {
          let data = e.data
          if (data.data && Array.isArray(data.data)) {
            this.articles = data.data
          }
          console.log(this.articles)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.requestData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
