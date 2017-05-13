<template>
  <div id="app">
    <h1 v-occupy="{ data: title }"></h1>
    <p v-occupy="{ data: content1 }"></p>
    <p v-occupy="{ data: content2, config }"></p>
    <a href="https://github.com/jrainlau/vue-occupy" v-occupy="{ data: gitUrl }"></a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      content1: '',
      content2: '',
      gitUrl: '',
      config: {
        width: '200px',
        height: '18px',
        background: '#ddd'
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.title = 'Vue-Occupy'
      this.content1 = 'A Vue directive for occupying content places before the data has been loaded.'
      // this.content2 = 'It\'s good for user experiment improving'
      this.gitUrl = 'Fork me on Github!'
    }, 1500)
  }
}
</script>

<style lang="less">
  html,
  body {
    height: 100%;
    overflow: hidden;
    background: lightblue;
    color: #fff;
    font-family: Microsoft yahei;
  }
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      margin-top: 0;
      margin-bottom: 40px;
      width: 300px;
      height: 48px;
      font-size: 48px;
      text-align: center;
    }
    p {
      width: 50%;
      min-width: 350px;
      height: 18px;
      font-size: 16px;
      text-align: center;
      margin-bottom: 20px;
    }
    a {
      color: #fff;
      margin-top: 20px;
      outline: none;
      width: 300px;
      height: 18px;
      text-align: center;
    }
  }
</style>