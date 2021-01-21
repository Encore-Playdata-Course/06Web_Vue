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
    background: #BBB;
    color: #fff;
    text-decoration: line-through;
}

.close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 12px 16px 12px 16px
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
        <li v-for="task in languagelist" :key="task.id" v-bind:class="checked(task.lang)" v-on:click="langToggle(task.id)">
            
            <span>{{ task.language }}</span>
            <span v-if="task.lang"> (완료)</span>

            <span class="close" v-on:click.stop="deletelanguage(task.id)">&#x00D7;</span>
            
        </li>
    </ul>
</template>

<script>
import eventBus from '../EventBus';
export default {
    name : 'List',
        data: function () {
            return {
                languagelist: [
                    { id: 1, language: "Python", lang: false },  
                    { id: 2, language: "Java", lang: true },  
                    { id: 3, language: "JavaScript", lang: false },
                    { id: 4, language: "SQL", lang: false }
                ]
            }
        },
        created: function () {
            console.log("created");
            eventBus.$on('add-language', this.addlanguage);
        },
        methods: {
            //완료 표현을 위한 메소드 : <li class="checked"> or <li class>
            checked: function (lang) {
                if(lang){
                    return {checked: true };
                }else{
                    return { checked: false };
                }
            },
            //languagelist 데이터 옵션을 변경하는 메소드들
            /* language  : 입력된 데이터를 languagelist에 저장 */
            addlanguage: function (language) { //이벤트 버스 객체에 바인딩되어 호출
                if (language !== "") {
                    this.languagelist.push({ 
                        id: new Date().getTime(), 
                        language: language, 
                        lang: false  
                    });
                }
            },
            langToggle: function (id) {
                /* 선택한 id값과 일치되는 index 반환
                1. 배열내에 저장되어 있는 javascript 리터럴 객체의 id값을 비교해서 true or false 반환
                2. 해당 index 값의 true/false값 치환해서 toogle 적용
                */
                let index = this.languagelist.findIndex(function (item) {
                    return item.id === id;
                });
                this.languagelist[index].lang = !this.languagelist[index].lang;
            },
            deletelanguage: function (id) {
                var index = this.languagelist.findIndex(function (item) {
                    return item.id === id;
                });
                /* splice() 메소드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경, 원본 배열 자체를 수정 */
                this.languagelist.splice(index, 1); //(start, 삭제하고자 하는 개수)
            }
        }
}
</script>