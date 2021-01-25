<template>
    <div id="app">
            값 입력 : <input type="text" v-model="newValue" @change="nonclick({newData:newValue})"> <br>

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
       nonclick: function(payload){
            this.$store.commit(Constant.NONCLICK, payload);
       }
    },
}
</script>