export function sayHi(user) {
    return `Hello, ${user}!`;
  }

  export function test(v) {
    axios.get("http://localhost/step23_routerBack/list2.jsp")
        .then(function (r) {
            v.dept = r.data;
            console.log(v.dept)
            return v.dept;
        }).catch(function () {
            console.log("예외 발생");
     })
     return v;
  }