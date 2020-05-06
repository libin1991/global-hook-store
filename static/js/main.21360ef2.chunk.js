(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{45:function(e,t,n){e.exports=n(57)},50:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(13),c=n(0),o=n.n(c),u=n(14),l=n(92),i=n(91),m=n(40),s=n(87),b=n(93),f=n(89),p=n(83),d=n(27),E=n(86),j=n(90),O=n(39),v=n.n(O),g=n(85),h=(n(50),n(7)),k=n(29),C=n(21),y=n.n(C),x=n(28),w=n(22),F={getRepo:function(e){return t="https://api.github.com/users/".concat(e,"/repos"),fetch(t).then((function(e){if(e.status>=400&&e.status<600)throw new Error("Error ".concat(e.status," from server"));return e.json()}));var t}},I=Object(h.b)({},{toggleTodo:function(e,t){return e[t]=!e[t],Object(a.a)({},e)},addTodo:function(e,t){var n=t.value;return t.value="",Object(a.a)(Object(a.a)({},e),{},Object(w.a)({},n,!1))}}),R=Object(h.b)([],{push:function(e,t){return e.push(t),e}}),T=Object(h.b)({count:0},{increment:function(e){return{count:e.count+1}},decrement:function(e){return{count:e.count-1}},incrementByTen:function(){var e=Object(x.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.count,e.next=3,new Promise((function(e){return setTimeout(e,3e3)}));case 3:return e.abrupt("return",{count:n+10});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),N=Object(h.b)({repos:Object(h.a)([]),userId:""},{setRepoId:function(e,t){return Object(a.a)(Object(a.a)({},e),{},{userId:t})},getUserRepos:function(){var e=Object(x.a)(y.a.mark((function e(t,n,a){var r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.userId,c=a.asyncAction,e.abrupt("return",c("repos",F.getRepo(r)));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),reset:function(e,t,n){return(0,n.reset)()}}),A=Object(h.b)({count:0,name:"Willy wonka",get length(){return this.name.length}},{increment:function(e){var t=e.count,n=Object(k.a)(e,["count"]);return Object(a.a)(Object(a.a)({},n),{},{count:t+1})},decrement:function(e){var t=e.count,n=Object(k.a)(e,["count"]);return Object(a.a)(Object(a.a)({},n),{},{count:t-1})},updateName:function(e,t){return Object(a.a)(Object(a.a)({},e),{},{name:t})}}),B=Object(h.b)("Choose name",{kalle:function(){return"k\xe5lle"},ada:function(){return"ada"}}),P=function(){var e=Object(h.c)(A),t=e.state,n=t.name,a=t.length,r=e.actions.updateName,c=Object(h.c)(T).state.count;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,"Name: ",n),o.a.createElement("h4",null,"Count from counter example: ",c),o.a.createElement("input",{value:n,onChange:function(e){return r(e.target.value)}}),o.a.createElement("span",null,o.a.createElement("small",null,"Char length: ",a)))},S=function(e,t){return Array(e).fill(t).reduce((function(e,n,a){return e["".concat(t.name," component ").concat(a+1)]=n,e}),{})},D=Object.entries({Counters:S(4,(function(){var e=Object(h.c)(T),t=e.actions,n=e.state;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,"Count: ",n.count),o.a.createElement("button",{onClick:function(){return t.decrement()}},"-"),o.a.createElement("button",{onClick:function(){return t.increment()}},"+"))})),Payload:{Payload:P,"Payload in other component":P},"Local store":S(4,(function(){var e=Object(h.d)(T),t=e.state.count,n=e.actions;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,"Local count: ",t),o.a.createElement("button",{onClick:function(){return n.decrement()}},"-"),o.a.createElement("button",{onClick:function(){return n.increment()}},"+"))})),"Primitive & Array":Object(a.a)(Object(a.a)({},S(2,(function(){var e=Object(h.c)(B),t=e.state,n=e.actions;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,"Name: ",t),o.a.createElement("button",{onClick:function(){return n.kalle()}},"K\xe5lle"),o.a.createElement("button",{onClick:function(){return n.ada()}},"Ada"))}))),S(4,(function(){var e=Object(h.c)(R),t=e.state,n=e.actions;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,t.map((function(e,t){return o.a.createElement("span",{key:t},e," ")}))),o.a.createElement("button",{onClick:function(){return n.push("Value #".concat(t.length))}},"PUSH"))}))),"Todo list":S(2,(function(){var e=Object(h.c)(I),t=e.state,n=e.actions,a=Object(c.useRef)(null);return o.a.createElement(o.a.Fragment,null,Object.entries(t).map((function(e,t){var a=Object(r.a)(e,2),c=a[0],u=a[1];return o.a.createElement("div",{onClick:function(){return n.toggleTodo(c)},key:t+c},c,u?" \u2714":" \u23f2")})),o.a.createElement("input",{ref:a}),o.a.createElement("button",{onClick:function(){return n.addTodo(a.current)}},"Add todo"))})),Async:Object(a.a)(Object(a.a)({},S(2,(function(){var e=Object(h.c)(T),t=e.actions,n=e.state.count;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",null,"Counter store count: ",n),o.a.createElement("button",{onClick:function(){return t.incrementByTen()}},"3s Delayed increment by 10"))}))),S(2,(function(){var e=Object(h.c)(N),t=e.state,n=t.repos,a=t.userId,r=e.actions,c=r.getUserRepos,u=r.setRepoId,l=r.reset;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,(n.loading?"Loading...":n.error&&n.error.toString())||n.data.map((function(e,t){return o.a.createElement("p",{key:t},e.name)}))),o.a.createElement("input",{placeholder:"Github username",value:a,onChange:function(e){return u(e.target.value)}}),o.a.createElement("button",{onClick:c},"Fetch repos"),o.a.createElement("button",{onClick:l},"Reset"))})))}),G=n(88),L=n(84),U=Object(m.a)(),H=Object(l.a)((function(e){var t=e.spacing;return{root:{flexGrow:1,backgroundColor:U.palette.background.paper},grid:{padding:t(2)},example:{marginBottom:t(2)}}})),J=function(e){var t=e.title,n=e.onDelete,a=e.children,r=H();return o.a.createElement(p.a,{className:r.example},o.a.createElement(L.a,{action:o.a.createElement(g.a,{onClick:n,"aria-label":"settings"},o.a.createElement(v.a,null))}),o.a.createElement(E.a,null,o.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},t),o.a.createElement(d.a,{component:"div"},a)))},K=function(){var e=H(),t=Object(c.useState)(0),n=Object(r.a)(t,2),u=n[0],l=n[1];Object(c.useEffect)((function(){E(Object(a.a)({},D[u][1]))}),[u]);var i=Object(c.useState)(Object(a.a)({},D[u][1])),m=Object(r.a)(i,2),p=m[0],E=m[1],O=Object(c.useCallback)((function(e){return function(){delete p[e],E(Object(a.a)({},p))}}),[p]);return o.a.createElement("div",{className:e.root},o.a.createElement(s.a,{position:"static"},o.a.createElement(G.a,{variant:"dense"},o.a.createElement(d.a,{variant:"h6",color:"inherit"},"Global Hook Store examples")),o.a.createElement(b.a,{value:u,variant:"scrollable",scrollButtons:"on",onChange:function(e,t){l(t)}},D.map((function(e){var t=Object(r.a)(e,2),n=t[0];t[1];return o.a.createElement(f.a,{key:n,label:n})})))),o.a.createElement(j.a,{className:e.grid,spacing:2,direction:"row",justify:"flex-start",alignItems:"flex-start",container:!0},Object.entries(p).map((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];return o.a.createElement(j.a,{key:n,item:!0,xs:12,md:6},o.a.createElement(J,{onDelete:O(n),title:n},a&&o.a.createElement(a,null)))}))))},V=document.getElementById("root");Object(u.render)(o.a.createElement(i.a,{theme:U},o.a.createElement(K,null)),V)}},[[45,1,2]]]);
//# sourceMappingURL=main.21360ef2.chunk.js.map