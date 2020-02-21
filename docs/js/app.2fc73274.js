(function(e){function t(t){for(var n,r,u=t[0],i=t[1],s=t[2],d=0,l=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,r=1;r<o.length;r++){var u=o[r];0!==a[u]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"020af251"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o={about:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=new Promise((function(t,o){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"7e1b8392"}[e]+".css",a=i.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===n||d===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===n||d===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete r[e],p.parentNode.removeChild(p),o(c)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(p);var o=a[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,o[1](l)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-todo-list/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=d;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"0f2f":function(e,t,o){"use strict";var n=o("5b70"),r=o.n(n);r.a},2369:function(e,t,o){"use strict";var n=o("fc12"),r=o.n(n);r.a},"499e":function(e,t,o){"use strict";var n=o("b970"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Header"),o("router-view")],1)},a=[],c=o("2f62"),u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",{staticClass:"header"},[o("div",{staticClass:"container"},[o("h1",[e._v("TodoList")]),o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[e._v("Home")]),o("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)])])},i=[],s={nme:"Header"},d=s,l=(o("2369"),o("2877")),p=Object(l["a"])(d,u,i,!1,null,"6ab3bc58",null),f=p.exports,m={name:"App",components:{Header:f},methods:{...Object(c["b"])(["getTodos"])},created(){this.getTodos(),console.log("Home created")},mounted(){console.log("Home mounted")},updated(){console.log("Home updated")},destroyed(){console.log("Home destroyed")}},v=m,b=(o("034f"),Object(l["a"])(v,r,a,!1,null,null,null)),h=b.exports,g=(o("d3b7"),o("8c4f")),T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"main"},[o("AddTodo"),o("Todos",{attrs:{todos:e.allTodos}})],1)])},y=[],w=o("5530"),O=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},e._l(e.allTodos,(function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e}})],1)})),0)},j=[],k=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"todo-item"},[o("div",{staticClass:"checkbox-group"},[o("label",{staticClass:"checkbox privacy-label",class:{"is-complete":e.todo.completed}},[e._v(" "+e._s(e.todo.title)+" "),o("input",{attrs:{type:"checkbox"},domProps:{checked:e.todo.completed},on:{change:function(t){return e.updateTodoAction(e.todo)}}}),o("span",{staticClass:"checkmark"})]),o("button",{staticClass:"del",on:{click:function(t){return e.delTodoAction(e.todo)}}},[e._v("×")])])])},x=[],_={name:"TodoItem",props:["todo"],methods:Object(w["a"])({},Object(c["b"])(["updateTodo","delTodo"]),{delTodoAction:function(e){this.delTodo(e)},updateTodoAction:function(e){this.updateTodo({id:e.id,title:e.title,completed:!e.completed})}})},S=_,C=(o("8a52"),Object(l["a"])(S,k,x,!1,null,"4115244f",null)),A=C.exports,E={name:"Todos",components:{TodoItem:A},computed:Object(w["a"])({},Object(c["c"])(["allTodos"])),props:["todos"]},H=E,P=(o("0f2f"),Object(l["a"])(H,O,j,!1,null,"0b989c70",null)),R=P.exports,$=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("form",{on:{submit:e.onSubmit}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo..."},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])},L=[],N={name:"AddTodo",data:function(){return{title:""}},methods:Object(w["a"])({},Object(c["b"])(["addTodo"]),{onSubmit:function(e){e.preventDefault(),this.addTodo(this.title)}})},I=N,M=(o("499e"),Object(l["a"])(I,$,L,!1,null,"a1fb45bc",null)),B=M.exports,D={name:"Home",components:{Todos:R,AddTodo:B},computed:Object(w["a"])({},Object(c["c"])(["allTodos"])),methods:{},created:function(){console.log("Home created")},mounted:function(){console.log("Home mounted")},updated:function(){console.log("Home updated")},destroyed:function(){console.log("Home destroyed")}},q=D,J=(o("cccb"),Object(l["a"])(q,T,y,!1,null,null,null)),F=J.exports;n["a"].use(g["a"]);var K=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],U=new g["a"]({routes:K}),z=U,G=(o("4de4"),o("4160"),o("159b"),o("96cf"),o("1da1")),Q=o("bc3a"),V=o.n(Q),W={todos:[]},X={allTodos:function(e){return e.todos}},Y={getTodos:function(e){var t=e.commit;return Object(G["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V.a.get("https://5e4ea1866272aa0014230dcf.mockapi.io/vue/todos");case 3:o=e.sent,t("getTodosSync",o.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},addTodo:function(e,t){var o=e.commit;return Object(G["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={title:t,completed:!1},e.prev=1,e.next=4,V.a.post("https://5e4ea1866272aa0014230dcf.mockapi.io/vue/todos",n);case 4:r=e.sent,o("addTodoSync",r.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},updateTodo:function(e,t){var o=e.commit;return Object(G["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V.a.put("https://5e4ea1866272aa0014230dcf.mockapi.io/vue/todos/".concat(t.id),t);case 2:n=e.sent,o("updateTodoSync",n.data);case 4:case"end":return e.stop()}}),e)})))()},delTodo:function(e,t){var o=e.commit;return Object(G["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V.a.delete("https://5e4ea1866272aa0014230dcf.mockapi.io/vue/todos/".concat(t.id));case 2:n=e.sent,o("delTodoSync",n.data);case 4:case"end":return e.stop()}}),e)})))()}},Z={getTodosSync:function(e,t){return e.todos=t},addTodoSync:function(e,t){return e.todos.push(t)},updateTodoSync:function(e,t){return e.todos.forEach((function(e){e.id===t.id&&(e.completed=t.completed)}))},delTodoSync:function(e,t){return e.todos=e.todos.filter((function(e){return e.id!==t.id}))}},ee={state:W,getters:X,actions:Y,mutations:Z};n["a"].use(c["a"]);var te=new c["a"].Store({modules:{todos:ee}});n["a"].config.productionTip=!1,new n["a"]({store:te,router:z,render:function(e){return e(h)}}).$mount("#app")},"5b70":function(e,t,o){},"5ced":function(e,t,o){},"85ec":function(e,t,o){},"8a52":function(e,t,o){"use strict";var n=o("e209"),r=o.n(n);r.a},b970:function(e,t,o){},cccb:function(e,t,o){"use strict";var n=o("5ced"),r=o.n(n);r.a},e209:function(e,t,o){},fc12:function(e,t,o){}});
//# sourceMappingURL=app.2fc73274.js.map