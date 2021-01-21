<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <!-- Helloworld 라는 컴포넌트의 msg props에 값대입
    출력 즉 활용은 자식 컴포넌트에서 활용-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
