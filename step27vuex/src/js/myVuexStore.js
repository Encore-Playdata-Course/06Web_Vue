import Vuex from 'vuex';
import Vue from 'vue';

import Constant from './Constant.js';

//Vuex를 사용하기 위한 설정
Vue.use(Vuex)

export default new Vuex.Store({
    //데이터(상태, model) - 컴포넌트 간에 공유하는 데이터 선언
    state : {
        counter : 0,
        message : '공유하는 메세지값을 보유하게 되는 property'
    },
    //상태를 변경해주는(변이) 함수들 정의
    mutations : {
        //기초 문법을 활용한 함수
        //현 상태 값을 parameter로 받는 함수
        [Constant.INCREMENT]: (oldState )=> {
            oldState.counter++;
        },

        //Constant.js를 활용하여 단순 문자를 변수로 표현 - 선호
        [Constant.DECREMENT]:(oldState) => {
            oldState.counter--;
        },

        //? set(두개의 parameter)
        /* payload
            - 헤더 값, 메타데이터를 제외한 실제 사용되는 데이터 값 만을 의미하는 용어
            - 페이로드는 사용에 있어서 전송되는 데이터를 뜻한다.
            - 페이로드는 전송의 근본적인 목적이 되는 데이터의 일부분으로 그 데이터와 함께 전송되는 헤더와 메타데이터와 같은 데이터는 제외
        */
        [Constant.SET]:(oldState, payload) => {
            //새로운 데이터로 기존 데이터 수정하는 로직
            //브라우저 통해서 입력되는 데이터값들은  문자열에서 숫자로 변환하여 대입 - parseInt
            console.log(payload)    // payload = {newData:newValue}
            oldState.counter = parseInt(payload.newData);
        },

        [Constant.CLICK]:(oldState) =>{
        // console.log(oldState.message)
            oldState.message ='공유하는 메세지값을 보유하게 되는 property';
        },

        [Constant.NONCLICK]:(oldState, payload) =>{
            // console.log(oldState.message)
            oldState.message = payload.newData;
        },
    }
})
/*
[1] 상태와 변이 처리하는 js
-Vuex 저장소(Store) 내부의 핵심 요소
1. 상태 (state)
    - 어플리케이션이 관리해야 할 중요한 공유 데이터

2. 변이(mutation)
    -상태를 변경하는 함수들을 보유

[2] 중요
- 전역에서 사용해야 하기 때문에 Vue.use(Vuex) 코드 필수
- 애플리케이션 내부의 모든 component가 저장소의 상태는 반드시 변이를 통해서만 변경해야함
*/