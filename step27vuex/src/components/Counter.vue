<!-- Vuex.store를 사용하는 컴포넌트-->
<template>
    <div id="app">
            <p>모든 component가 공유하는 숫자 : {{count}}</p>
            <!-- 
                {newData:newValue}
                -newData라는 property로 newValue가 보유한 데이터 값을 기반으로 js 객체로 생성해서 적용하는 원리
            -->
            값 입력 : <input type="text" v-model="newValue" @change="set({newData:newValue})"> <br>

            <button @click="increment">1씩 증가 +</button>
            <button @click="decrement">1씩 감소 -</button>

    </div>
</template>

<script>
import Constant from '../js/Constant.js'

export default {
    data(){
        return {newValue : 0};
    },
    //this.$store : Vuex 객체 의미
    //공유 데이터는 직접적으로 편집 불가 즉 Vuex 객체를 이용해서 편집
    //computed - readonly인 경우 computed 사용
    //methods - 데이터 값 갱신 시 사용
    computed: {
        count(){
            return this.$store.state.counter;
        },
    },
    methods: {
        increment: function(){
            //$store의 commit() 메소드로 변이 함수들 실제 호출
            //실제 로직이 구현된 함수를 보유하고 있는 파일 : myVuexStore.js
            //화면에서 일어나는 이벤트를 받아 처리하는 메소드에서 변이를 일으키기 위한 메소드들 호출
            /* commit("변이이름", 변이에 전달할 데이터)
            */
            this.$store.commit(Constant.INCREMENT);
        },
        decrement: function(){
            this.$store.commit(Constant.DECREMENT);
        },
        set: function(payload){
            this.$store.commit(Constant.SET, payload);
        },
    },
}
</script>