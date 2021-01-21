<style scoped>
* {
    box-sizing: border-box;
}
.header {
  background-color: rgb(30, 206, 191);
  padding: 30px 30px;
  color: yellow;
  text-align: center;
}

.header:after {
  content: "";
  display: table;
  clear: both;
}
</style>

<template>
    <div>
        <div id="header" class="header">
            <h2>language List App</h2>
            <inputA/>
        </div>

        <list/>
    </div>
</template>

<script>
    import list from './List.vue';
    import inputA from './Input.vue';

    export default {
        name: "App",
        components: {
            list, 
            inputA
        },
        created: function(){
            console.log("languagelistapp 생성");
        }
    }
</script>