<template>
  <div class="hello">
    <h1>Home.vue에서 전송되는 데이터 : {{ msg }}</h1>
    
    Home.vue라는 컴포넌트에 포함된 종속된 컴포넌트 <br>
    주종관계로 간주할 경우 부모 = Home.vue / 자식 = HelloWorld.vue <br>
    부모가 제공하는 데이터를 자식이 받을 경우 props 사용 <br>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String //msg라는 속성에 부모가 제공하는 데이터 값 받아서 사용
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
