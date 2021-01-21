<style scoped>
.input {
  border: none;
  width: 75%;
  height: 35px;
  padding: 10px;
  float: left;
  font-size: 16px;
}

.addbutton {
  padding: 10px;
  width: 25%;
  height: 35px;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
}

.addbutton:hover {
  background-color: #bbb;
}
</style>

<template>
  <div>
    <!-- 입력form, 바인딩된 model 필요, enter 키 이벤트 발생 -->
    <input class="input" type="text" id="task"  placeholder="언어 입력하세요"
      v-model.trim="language"  v-on:keyup.enter="addlanguage"/>

    <span class="addbutton" v-on:click="addlanguage">추 가</span>
  </div>
</template>

<script>
import eventBus from "../EventBus.js";
export default {
    name:'Input',
  data: function () {
    return { language: "" };
  },
  methods: {
    addlanguage: function () {
      eventBus.$emit("add-language", this.language);
      this.language = "";
    },
  },
};
</script>