<template>
  <div class="playdata">
    <h1>Encore playdata</h1>
    <form action="/#">
      <label for="fname">First name:</label><br />
      <input type="text" id="fname" name="fname" value="John" /><br />
      <label for="lname">Last name:</label><br />
      <input type="text" id="lname" name="lname" value="Doe" /><br /><br />
      <input type="submit" value="Submit" />
    </form>

    <button @click="m">클릭</button> <!-- v-on directice 사용해서 클릭 시 m() 호출 -->
  </div>
</template>

<script>
//일반 함수 구현 시 실행 불가
//개발 구조
//export default 하위에 vue data, created, methods 속성으로 개발해야 함
export default {
  methods: {
    m : function(){
      alert(100)
    }
  }
};
</script>
