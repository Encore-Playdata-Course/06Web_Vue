
//Constant.js 파일을 import 하는 곳에서 import시에 이름을 임의대로 설정 가능
//js 파일에는 default라는 설정은 한 번 만 가능

// *컴포넌트에서 변이 작업 진행 시 실제 호출되는 함수 이름을 등록
export default{
    INCREMENT : "increment" , // 숫자 공유데이터 1씩 증가
    DECREMENT : "decrement" , // 1 감소
    SET : "set", // 특정 데이터로 설정
    CLICK : "click",
    NONCLICK : "nonclick"
}