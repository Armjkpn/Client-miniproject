(this.webpackJsonpfontend=this.webpackJsonpfontend||[]).push([[0],{184:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(26),c=n.n(l),o=(n(89),n(19)),u=n(20),i=n(15),s=n(22),m=n(21),p=(n(90),n(30)),E=n.n(p),h=E.a.initializeApp({apiKey:"AIzaSyBk7NRqeQPD4ORoaYztKd3aOC586tB4KbQ",authDomain:"miniproject-88f54.firebaseapp.com",databaseURL:"https://miniproject-88f54.firebaseio.com",projectId:"miniproject-88f54",storageBucket:"miniproject-88f54.appspot.com",messagingSenderId:"730277569998",appId:"1:730277569998:web:188004ab48670e8bd4779f",measurementId:"G-6DBSJHZLL2"}),f=n(37),d=(n(29),n(70)),b=n.n(d),g=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).uiConfig={signInFlow:"popup",signInOptions:[E.a.auth.FacebookAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}},a.login=a.login.bind(Object(i.a)(a)),a.handleChange=a.handleChange.bind(Object(i.a)(a)),a.signup=a.signup.bind(Object(i.a)(a)),a.state={email:"",password:""},a}return Object(u.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"login",value:function(e){e.preventDefault(),h.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((function(e){})).catch((function(e){console.log(e)}))}},{key:"signup",value:function(e){e.preventDefault(),h.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(e){})).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{class:"login"},r.a.createElement("div",{class:"login2"},r.a.createElement("h1",null,"JSS Network Company"),r.a.createElement("hr",null),r.a.createElement("h2",null,"Login"),r.a.createElement("input",{value:this.state.email,type:"email",name:"email",placeholder:"Email address",style:{width:"60%"},class:"form-control",onChange:this.handleChange}),r.a.createElement("input",{value:this.state.password,type:"password",name:"password",placeholder:"Password",style:{width:"60%",marginTop:"20px"},class:"form-control",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("button",{type:"button",onClick:this.login,class:"form-control2",style:{width:"30%",marginTop:"15px"}},"Login"),r.a.createElement("br",null),r.a.createElement("button",{type:"button",onClick:this.signup,class:"form-control3",style:{width:"30%",marginTop:"15px"}},"Register"),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("h4",null,"Login with facebook :"),r.a.createElement(b.a,{uiConfig:this.uiConfig,firebaseAuth:E.a.auth()})))}}]),n}(a.Component),y=n(33),v=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).logout=a.logout.bind(Object(i.a)(a)),a}return Object(u.a)(n,[{key:"logout",value:function(){h.auth().signOut()}},{key:"render",value:function(){return r.a.createElement("nav",null,r.a.createElement("h1",null," JSS Network Company"),r.a.createElement("ul",{className:"nav-links"},r.a.createElement(y.b,{to:"/"},r.a.createElement("li",null,r.a.createElement("h4",{class:"btn btn-danger"},"Home"))),r.a.createElement(y.b,{to:""},r.a.createElement("li",null,r.a.createElement("h4",{onClick:this.logout},"Logout")))))}}]),n}(a.Component),O=n(7),j=n.n(O),C=n(16),k=n(12),w=n(17),N=n.n(w),A=n(11),S=n(186),L=n(13),_=n(28),P=function(e){var t=Object(A.b)(),n=Object(A.c)((function(e){return e.form})),l=function(){var e=Object(C.a)(j.a.mark((function e(){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://miniproject5735512156.herokuapp.com/api/employees");case 2:n=e.sent,a={type:"GET_EMPLOYEES",employee:n.data},t(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){l()}),[]);var c=function(){var a=Object(C.a)(j.a.mark((function a(){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,N.a.put("https://miniproject5735512156.herokuapp.com/api/employees/".concat(e.no),n);case 2:t({type:"UPDATE_EMPLOYEE",no:e.no,employee:Object(k.a)({},n,{no:e.no})}),l();case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),o=function(){var n=Object(C.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N.a.delete("https://miniproject5735512156.herokuapp.com/api/employees/".concat(e.no));case 2:t({type:"DELETE_EMPLOYEE",no:e.no}),l();case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{class:" card"},r.a.createElement(S.a,{title:e.activity,bordered:!0},r.a.createElement(L.a,null,r.a.createElement(_.a,null,r.a.createElement("p",null,"Name - Surname : ",e.name," ",e.surname),r.a.createElement("p",null,"Age : ",e.age," years old"),r.a.createElement("p",null,"Position : ",e.position),r.a.createElement("p",null,"E-Mail : ",e.mail),r.a.createElement("p",null,"Phone number : ",e.tel),r.a.createElement("p",null,"Status : ",e.status)),r.a.createElement("button",{onClick:c},"\u0e41\u0e01\u0e49\u0e44\u0e02\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"),r.a.createElement("button",{onClick:o},"\u0e25\u0e1a\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01")))))},x=function(){Object(A.c)((function(e){return e.postreduc}));var e=Object(A.c)((function(e){return e.employee})),t=Object(A.b)(),n=function(){var e=Object(C.a)(j.a.mark((function e(){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://miniproject5735512156.herokuapp.com/api/employees");case 2:n=e.sent,a={type:"GET_EMPLOYEES",employee:n.data},t(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){n()}),[]),console.log("data",e),e&&e.length?r.a.createElement("div",{className:"container"},0!=e.length&&e.map((function(e,t){return r.a.createElement("div",{key:t,style:{margin:20}},r.a.createElement(P,e))}))):r.a.createElement("h2",null,"No data")},G=function(e){var t=Object(A.b)(),n=Object(A.c)((function(e){return e.form})),l=Object(A.c)((function(e){return e.employee})),c=function(){var e=Object(C.a)(j.a.mark((function e(){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://miniproject5735512156.herokuapp.com/api/employees");case 2:n=e.sent,a={type:"GET_EMPLOYEES",employee:n.data},t(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){c()}),[]);var o=function(){var e=Object(C.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("https://miniproject5735512156.herokuapp.com/api/employees",n);case 2:t({type:"ADD_EMPLOYEE",employee:Object(k.a)({no:l.length>0?l[l.length-1].no+1:0},n)});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,r.a.createElement("input",{className:"inpt",type:"text",onChange:function(e){return t({type:"CHANGE_NAME",name:e.target.value})}}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Surname"),r.a.createElement("td",null,r.a.createElement("input",{className:"inpt",type:"text",onChange:function(e){return t({type:"CHANGE_SURNAME",surname:e.target.value})}}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Age"),r.a.createElement("td",null,r.a.createElement("input",{className:"inpt",type:"text",onChange:function(e){return t({type:"CHANGE_AGE",age:e.target.value})}}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Position"),r.a.createElement("td",null,r.a.createElement("input",{className:"inpt",type:"text",onChange:function(e){return t({type:"CHANGE_POSITION",position:e.target.value})}}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Email"),r.a.createElement("td",null,r.a.createElement("input",{className:"inpt",type:"text",onChange:function(e){return t({type:"CHANGE_MAIL",mail:e.target.value})}}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Phone number"),r.a.createElement("td",null,r.a.createElement("input",{className:"inpt",type:"text",onChange:function(e){return t({type:"CHANGE_TEL",tel:e.target.value})}}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Status"),r.a.createElement("td",null,r.a.createElement("input",{className:"inpt",type:"text",onChange:function(e){return t({type:"CHANGE_STATUS",status:e.target.value})}}))),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("button",{className:"btn",onClick:o},"Add"))))))},T=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("h2",null,"JSS Network Family"),r.a.createElement(x,null),r.a.createElement(G,null)))}}]),n}(a.Component),I=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={user:{}},a.authListener=a.authListener.bind(Object(i.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;h.auth().onAuthStateChanged((function(t){t?e.setState({user:t}):e.setState({user:null})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.user?r.a.createElement(T,null):r.a.createElement(g,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=n(82),H=n(32),D={no:"",name:"",surname:"",age:"",position:"",mail:" ",tel:" ",status:" "},Y=Object(H.b)({employee:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_EMPLOYEES":return t.employee;case"ADD_EMPLOYEE":return[].concat(Object(M.a)(e),[t.employee]);case"DELETE_EMPLOYEE":return e.filter((function(e){return e.no!==+t.no}));case"UPDATE_EMPLOYEE":return e.map((function(e){return+e.no===+t.no?t.employee:e}));default:return e}},form:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_NO":return Object(k.a)({},e,{no:t.no});case"CHANGE_NAME":return Object(k.a)({},e,{name:t.name});case"CHANGE_SURNAME":return Object(k.a)({},e,{surname:t.surname});case"CHANGE_AGE":return Object(k.a)({},e,{age:t.age});case"CHANGE_POSITION":return Object(k.a)({},e,{position:t.position});case"CHANGE_MAIL":return Object(k.a)({},e,{mail:t.mail});case"CHANGE_TEL":return Object(k.a)({},e,{tel:t.tel});case"CHANGE_STATUS":return Object(k.a)({},e,{status:t.status});default:return e}}}),R=Object(H.c)(Y);c.a.render(r.a.createElement(A.a,{store:R},r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,n){},84:function(e,t,n){e.exports=n(184)},89:function(e,t,n){},90:function(e,t,n){}},[[84,1,2]]]);
//# sourceMappingURL=main.7d53b664.chunk.js.map