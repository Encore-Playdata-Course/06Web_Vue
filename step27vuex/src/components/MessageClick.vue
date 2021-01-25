<template>
    <div id="app">
            <p>message : {{message}}</p>
            <button @click="cl">클릭</button>

    </div>
</template>

<script>
import Constant from '../js/Constant.js'

export default {
    data(){
        return {newValue : ""};
    },
    computed: {
        message(){
            return this.$store.state.message;
        },
    },
    methods: {
       cl: function(){
           this.$store.commit(Constant.CLICK)
        //    this.newValue = this.$store.state.message;
        //    console.log(this.$store.commit(Constant.CLICK));
       }
    },
}
</script>