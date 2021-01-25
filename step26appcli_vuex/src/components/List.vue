<style scoped>
* {
  box-sizing: border-box;
}
.completed {
  text-decoration: none;
}
ul {
  margin: 0;
  padding: 0;
}

ul li {
  cursor: pointer;
  position: relative;
  padding: 8px 8px 8px 40px;
  background: #eee;
  font-size: 14px;
}

ul li:hover {
  background: #ddd;
}

/* li class='checked' 인 경우에 line 표기 */
ul li.checked {
  background: #bbb;
  color: #fff;
  text-decoration: line-through;
}

.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}
</style>

<template>
  <ul>
    <!-- v-bind:class="checked(true or false") : 
                1. true인 경우 : <li class="checked">
                2. false인 경우 : <li class>
        -->
    <li
      v-for="task in languagelist"
      :key="task.id"
      v-bind:class="checked(task.lang)"
      v-on:click="langToggle(task.id)"
    >
      <span>{{ task.language }}</span>
      <span v-if="task.lang"> (완료)</span>

      <span class="close" v-on:click.stop="deletelanguage(task.id)"
        >&#x00D7;</span
      >
    </li>
  </ul>
</template>

<script>
// import eventBus from "../EventBus";
import Constant from "../js/Constant.js";
// import Vuex from?

export default {
  name: "List",
  data: function () {
    return this.$store.state;
  },
  methods: {
    checked: function (lang) {
      if (lang) {
        return { checked: true };
      } else {
        return { checked: false };
      }
    },
    // addlanguage: function (payload) {
    //   this.$store.commit(Constant.ADDLANGUAGE, payload);
    // },
    langToggle: function (payload) {
      console.log(this.$store);
      this.$store.commit(Constant.LANGTOGGLE, payload);
    },
    deletelanguage: function (payload) {
       this.$store.commit(Constant.DELETELANGUAGE, payload); 
    },
  },
};
</script>