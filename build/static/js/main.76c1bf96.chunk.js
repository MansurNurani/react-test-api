(this["webpackJsonpreact-test-api"]=this["webpackJsonpreact-test-api"]||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),s=n(14),c=n.n(s),i=(n(25),n(26),n(5)),l=n.n(i),b=n(15),o=n(16),u=n(17),j=n(20),d=n(19),p=n(18),h=n.n(p),x=n(0),O=h.a.create({baseURL:"https://randomuser.me/api/"}),f=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={displayStr:"",buttonIsEnabled:!0},t.sleep=function(t){return new Promise((function(e){return setTimeout(e,t)}))},t.handleClick=Object(b.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({displayStr:"Loading...",buttonIsEnabled:!1,imageUrl:""}),e.next=3,O.get("/");case 3:return e.next=5,e.sent.data.results[0];case 5:return n=e.sent,e.next=8,t.sleep(1500);case 8:a=n.name.first+"-"+n.name.last,console.log(n),t.setState({displayStr:a,buttonIsEnabled:!0,imageUrl:n.picture.large});case 11:case"end":return e.stop()}}),e)}))),t}return Object(u.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{style:{width:"100px",height:"50px"},disabled:!this.state.buttonIsEnabled,onClick:this.handleClick,children:"Get Data"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("label",{children:this.state.displayStr}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)("img",{src:this.state.imageUrl,alt:""})]})}}]),n}(a.Component);var g=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(f,{})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),s(t),c(t)}))};c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(g,{})}),document.getElementById("root")),m()}},[[48,1,2]]]);
//# sourceMappingURL=main.76c1bf96.chunk.js.map