import Vuex from 'vuex';
import Vue from 'vue';

import Constant from './Constant.js';

//Vuex를 사용하기 위한 설정
Vue.use(Vuex)

export default new Vuex.Store({
    state : {  
            languagelist: [
                { id: 1, language: "Python", lang: false },  
                { id: 2, language: "Java", lang: true },  
                { id: 3, language: "JavaScript", lang: false },
                { id: 4, language: "SQL", lang: false }
            ]
    },
    mutations : {
        [Constant.ADDLANGUAGE]:(oldState, payload)=> {
            // console.log(11+this) -> NAN
            if (oldState.languagelist.language !== "") {
                oldState.languagelist.push({ 
                    id: new Date().getTime(), 
                    language: payload, 
                    lang: false  
                });
            }
        },
        [Constant.LANGTOGGLE]:(oldState, payload)=> {
            let index = oldState.languagelist.findIndex(function (item) {
                return item.id === payload;
            });
            oldState.languagelist[index].lang = !oldState.languagelist[index].lang;
        },
        [Constant.DELETELANGUAGE]:(oldState, payload)=> {
            var index = oldState.languagelist.findIndex(function (item) {
                return item.id === payload;
              });
              oldState.languagelist.splice(index, 1); //(start, 삭제하고자 하는 개수)
        }
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