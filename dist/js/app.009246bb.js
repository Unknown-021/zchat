(function(t){function e(e){for(var n,i,u=e[0],a=e[1],c=e[2],l=0,f=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);g&&g(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,u=1;u<s.length;u++){var a=s[u];0!==r[a]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var g=a;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"0c90":function(t,e,s){},1760:function(t,e,s){"use strict";s("7064")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("users",{attrs:{id:"users"}}),s("div",{attrs:{id:"body"}},[s("div",{staticClass:"header"},[void 0==t.getUserPhoto?s("div",[s("img",{staticClass:"my-avatar",attrs:{src:"userpic.png",alt:""}})]):s("div",[s("img",{staticClass:"my-avatar",attrs:{src:t.getUserPhoto.thumbnailUrl,alt:""}})]),s("h2",[t._v(t._s(t.getMyName))])]),s("chat-window"),s("div",{staticClass:"message-input"},[s("img",{attrs:{src:t.image,alt:"",height:"50px",wight:"50"}}),s("form",{on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[s("input",{attrs:{type:"file",accept:"image/*"},on:{change:t.handleImage}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newMessage,expression:"newMessage"}],attrs:{id:"message-input"},domProps:{value:t.newMessage},on:{input:function(e){e.target.composing||(t.newMessage=e.target.value)}}}),s("button",{on:{click:t.sendMessage}},[t._v("Send")])])])],1)],1)},o=[],i=(s("d3b7"),s("5530")),u=s("2f62"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",{staticClass:"chat-window"},t._l(t.getMessages,(function(e,n){return s("li",{key:n,attrs:{img:e.img,owner:t.getMessages[n].id===t.getMyId}},[s("div",{staticClass:"message-top"},[s("img",{staticClass:"message-avatar",attrs:{src:t.getUserPhoto(e.count).thumbnailUrl,alt:""}}),s("span",{staticClass:"name"},[t._v(t._s(e.name))])]),s("hr"),t._v(" "+t._s(e.mes)+" "),e.img?s("img",{staticClass:"attached-photo",attrs:{src:e.img,height:"50px",width:"50px"}}):t._e(),t.getMessages[n].id===t.getMyId?s("button",{staticClass:"del-button",on:{click:function(e){return e.preventDefault(),t.REMOVE_MESSAGE(n)}}},[t._v("Del")]):t._e()])})),0)])},c=[],g={data:function(){return{imgUrl:""}},computed:{getMessages:function(){return this.$store.getters.getMessages},getUsers:function(){return this.$store.getters.getUsers},getMyMessageType:function(){return this.$store.getters.getMyMessageType},getMyId:function(){return this.$store.getters.getMyId},getMyCount:function(){return this.$store.getters.getMyCount},getUserPhoto:function(){return this.$store.getters.getUserPhoto},getMyName:function(t){return t.myName}},methods:Object(i["a"])({},Object(u["b"])(["REMOVE_MESSAGE"]))},l=g,f=(s("f198"),s("2877")),h=Object(f["a"])(l,a,c,!1,null,"73ef7220",null),m=h.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",{attrs:{id:"user-list"}},[s("span",[t._v("Список пользователей:")]),s("br"),s("br"),t._l(t.getUsers,(function(e,n){return s("li",{key:n},[s("div",{staticClass:"user-item"},[void 0==t.getUserPhoto(e.userCount)?s("div",[s("img",{staticClass:"user-list-ava",attrs:{src:"userpic.png"}})]):s("div",[s("img",{staticClass:"user-list-ava",attrs:{src:t.getUserPhoto(e.userCount).thumbnailUrl}})]),s("span",[t._v(t._s(e.name)+" ")])])])}))],2)])},p=[],M={computed:{getUsers:function(){return this.$store.getters.getUsers},getMyName:function(){return this.$store.getters.getMyName},getUserCount:function(){return this.$store.getters.getUserCount},getUserPhoto:function(){return this.$store.getters.getUserPhoto}}},y=M,v=(s("1760"),Object(f["a"])(y,d,p,!1,null,"728fa7a3",null)),_=v.exports,b=s("8e27"),S=s.n(b),E={data:function(){return{socket:S()(),image:null,newMessage:null}},created:function(){var t=this;this.$store.dispatch("fetchPhoto"),this.socket.emit("created"),this.socket.on("setMyProps",(function(e){t.SET_MY_PROPS(e)})),this.socket.on("addUserList",(function(e){t.ADD_USERS(e)})),this.socket.on("chat-message",(function(e){t.ADD_MESSAGE(e)}))},methods:Object(i["a"])(Object(i["a"])({},Object(u["b"])(["ADD_MESSAGE","ADD_USERS","SET_MY_PROPS","SET_MY_MESSAGE_TYPE"])),{},{handleImage:function(t){var e=this,s=t.target.files[0];this.getBase64(s).then((function(t){return e.image=t}))},getBase64:function(t){return new Promise((function(e,s){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(t){return s(t)}}))},sendMessage:function(){(this.newMessage||this.image)&&(this.user=this.$store.getters.getMyName,this.userId=this.$store.getters.getMyId,this.ADD_MESSAGE({mes:this.newMessage,name:this.user,img:this.image,id:this.userId,count:this.getMyCount}),this.socket.emit("chat-message",{mes:this.newMessage,name:this.user,id:this.userId,img:this.image,count:this.getMyCount}),this.newMessage=null,this.image=null)}}),computed:{getMyName:function(){return this.$store.getters.getMyName},getMyCount:function(){return this.$store.getters.getMyCount},getUserPhoto:function(){return this.$store.getters.getUserPhoto(this.getMyCount)},getUsers:function(){return this.$store.getters.getUsers}},components:{ChatWindow:m,Users:_}},P=E,U=(s("034f"),Object(f["a"])(P,r,o,!1,null,null,null)),w=U.exports;s("4de4"),s("a434"),s("b0c0");n["a"].use(u["a"]),n["a"].config.productionTip=!0;var C=new u["a"].Store({state:{messages:[],users:[],myName:null,myId:null,myCount:null,photos:[]},getters:{getMessages:function(t){return t.messages},getUsers:function(t){return t.users},getMyName:function(t){return t.myName},getMyId:function(t){return t.myId},getMyCount:function(t){return t.myCount},getUserCount:function(t){return function(){return t.users.filter((function(t){return t.userCount.count}))}},getUserPhoto:function(t){return function(e){return t.photos[e]}},getMyMessageType:function(t){return t.myMessageType}},mutations:{ADD_MESSAGE:function(t,e){t.messages.unshift(e)},ADD_USERS:function(t,e){t.users=e},SET_MY_PROPS:function(t,e){t.myName=e.name,t.myId=e.userId,t.myCount=e.userCount},SET_PHOTOS:function(t,e){t.photos=e},REMOVE_MESSAGE:function(t,e){t.messages.splice(e,1)}},actions:{fetchPhoto:function(t){var e=t.commit,s="https://jsonplaceholder.typicode.com/photos/";fetch(s).then((function(t){return t.json()})).then((function(t){return e("SET_PHOTOS",t)}))}}});n["a"].config.productionTip=!0,new n["a"]({store:C,render:function(t){return t(w)}}).$mount("#app")},7064:function(t,e,s){},"85ec":function(t,e,s){},f198:function(t,e,s){"use strict";s("0c90")}});
//# sourceMappingURL=app.009246bb.js.map