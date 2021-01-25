<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br><hr><br>

    <MessageClick />
    <!-- <MessageNonClick /> -->
    <message-non-click />
  </div>
</template>

<script>
// import Counter from './components/Counter.vue'
import MessageClick from './components/MessageClick.vue'
import MessageNonClick from './components/MessageNonClick.vue'

export default {
  name: 'App',
  components: {
   // Counter,
    MessageClick,
    //html tag는 대소문자 구분이 없기 떄문에 혹여 대소문자 혼용된 property명 사용 시 반드시 -대체해서 소문자로만 처리
    MessageNonClick
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
