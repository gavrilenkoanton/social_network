(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[0],[,,,,,,function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3rcgj",dialogsImg:"Dialogs_dialogsImg__3WypZ",dialogsItems:"Dialogs_dialogsItems__3wi_9",active:"Dialogs_active__1VTte",dialog:"Dialogs_dialog__1lJm5",messages:"Dialogs_messages__3RXQg",message1:"Dialogs_message1__1R7X9",message2:"Dialogs_message2__3OXyM",inputDialogs:"Dialogs_inputDialogs__3jmQN"}},function(e,a,t){e.exports={navBarStyles:"Navbar_navBarStyles__1HO8Q",active:"Navbar_active__1_S7e",navBarFriends:"Navbar_navBarFriends__3ENXJ"}},,,,function(e,a,t){e.exports={wrapper:"App_wrapper__1IN4D",header:"App_header__3TxXZ",navbar:"App_navbar__2xO37",profile:"App_profile__1fxKO"}},function(e,a,t){e.exports={postsBlock:"Posts_postsBlock__2Rt0W",posts:"Posts_posts__21F0O"}},,,,function(e,a,t){e.exports={image:"ProfileInfo_image__1ySrx",descriptionBlock:"ProfileInfo_descriptionBlock__1xJYK"}},,,,,,,function(e,a,t){e.exports={header:"Header_header__10vCM"}},,,function(e,a,t){e.exports={post:"Post_post__3_Uyw"}},,function(e,a,t){e.exports=t(43)},,,,,function(e,a,t){},,,,,function(e,a,t){e.exports={image:"Profile_image__1o_7x"}},function(e,a,t){e.exports={header:"Settings_header__dmMNI"}},function(e,a,t){e.exports={header:"Music_header__3Tb1d"}},function(e,a,t){e.exports={header:"News_header__1FWpp"}},,function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(22),r=t.n(i),o=(t(33),t(11)),l=t.n(o),c=t(23),m=t.n(c);var d=function(){return n.a.createElement("header",{className:m.a.header})},g=t(7),u=t.n(g),p=t(2),v=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:u.a.navBarFriends},n.a.createElement(p.b,{to:a},n.a.createElement("img",{src:e.img}),e.name))};var E=function(e){var a=e.state.dialogsData.slice(0,3).map((function(e){return n.a.createElement(v,{name:e.name,id:e.id,img:e.img})}));return n.a.createElement("div",{className:u.a.navBarStyles},n.a.createElement("div",null,n.a.createElement(p.b,{to:"/profile",activeClassName:u.a.active}," Profile")),n.a.createElement("div",null,n.a.createElement(p.b,{to:"/dialogs",activeClassName:u.a.active}," Messages")),n.a.createElement("div",null,n.a.createElement(p.b,{to:"/news",activeClassName:u.a.active},"News")),n.a.createElement("div",null,n.a.createElement(p.b,{to:"/music",activeClassName:u.a.active}," Music")),n.a.createElement("div",null,n.a.createElement(p.b,{to:"/settings",activeClassName:u.a.active}," Settings")),n.a.createElement("div",null," "),n.a.createElement("div",null,n.a.createElement(p.b,{to:"/friends",activeClassName:u.a.active}," Friends ",a)))},_=(t(38),t(12)),f=t.n(_),h=t(26),w=t.n(h);var b=function(e){return n.a.createElement("div",{className:w.a.post},n.a.createElement("img",{src:"https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3266-6236-4266-b833-393539393436__cat-3601092_1280.jpg",alt:""}),e.message,n.a.createElement("br",null),n.a.createElement("span",null,"likes: "),e.likesCount)},x={posts:[{id:1,message:"\u041f\u0443\u0441\u0442\u044c \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u043c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442",likesCount:23},{id:2,message:"\u041f\u0443\u0441\u0442\u044c \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u043c\u043e\u0439 \u0432\u0442\u043e\u0440\u043e\u0439 \u043f\u043e\u0441\u0442",likesCount:32}],newPostText:""},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD-POST":return e.posts.push({id:3,message:e.newPostText,likesCount:0}),e.newPostText="",e;case"UPDATE-NEW-POST-TEXT":return e.newPostText=a.newText,e;default:return e}};var P=function(e){var a=n.a.createRef(),t=e.profilePage.posts.map((function(e){return n.a.createElement(b,{message:e.message,likesCount:e.likesCount})}));return n.a.createElement("div",{className:f.a.postsBlock},n.a.createElement("h3",null,"my posts"),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("textarea",{name:"",id:"",cols:"30",rows:"10",ref:a,onChange:function(){var t=a.current.value;e.updateNewPostText(t)},value:e.profilePage.newPostText})),n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){e.addPost()}},"send post"))),n.a.createElement("div",{className:f.a.posts},t))},T=t(16),D=t.n(T);var S=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:D.a.image},n.a.createElement("img",{src:"https://www.thewowstyle.com/wp-content/uploads/2015/03/Desktop-Wallpaper-HD2.jpg",alt:""})),n.a.createElement("div",{className:D.a.descriptionBlock},"ava+description"))};var k=function(e){var a=e.store.getState();return n.a.createElement("div",null,n.a.createElement(P,{updateNewPostText:function(a){e.store.dispatch(function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(a))},addPost:function(){e.store.dispatch({type:"ADD-POST"})},profilePage:a.profilePage}))};var j=function(e){return n.a.createElement("div",null,n.a.createElement(S,null),n.a.createElement(k,{store:e.store}))},y=t(6),C=t.n(y),M={dialogsData:[{id:1,name:"\u0422\u043e\u0445\u0430",img:"https://i.ytimg.com/vi/mK72EwuxZAU/hqdefault.jpg"},{id:2,name:"\u041c\u0430\u0440\u0438\u043d\u0430",img:"https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg"},{id:3,name:"\u0410\u043d\u0434\u0440\u0435\u0439",img:"https://i.pinimg.com/originals/36/fd/c3/36fdc3549189dd354acc8d4b2615c571.jpg"},{id:4,name:"\u0416\u043e\u0440\u0430",img:"https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg"},{id:5,name:"\u0412\u0430\u0441\u044f",img:"https://ichef.bbci.co.uk/news/410/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg"},{id:6,name:"\u0412\u0438\u043a\u0442\u043e\u0440",img:"https://www.fresher.ru/wp-content/uploads/2018/03/1.jpg"}],messagesData:[{id:1,mesid:1,message:"\u0435\u0443\u0435\u0443, \u043c\u0430\u0437\u0430\u0444\u0430\u043a\u0430"},{id:2,mesid:1,message:"\u0445\u0430\u0443 \u0430 \u044e \u0434\u0443\u0438\u043d\u0433?"},{id:3,mesid:1,message:"\u0432\u0435\u0440\u0438 \u0438\u0437 \u043c\u0430\u0439 \u0444\u0430\u043a\u0438\u043d\u0433 \u043c\u0430\u043d\u0438?"},{id:3,mesid:2,message:"\u0430\u0439 \u0445\u044d\u0432 \u043d\u043e \u043c\u0430\u043d\u0438"},{id:3,mesid:2,message:"\u0430\u0439 \u0445\u044d\u0432 \u043e\u043d\u043b\u0438 \u043b\u0430\u043f\u043a\u0438"},{id:3,mesid:2,message:"\u0431\u0430\u0442 \u0430\u0439 \u043a\u0430\u043d \u0438\u0440\u043d \u0441\u043e\u043c \u0432\u0438\u0441\u043a\u0430\u0441"},{id:3,mesid:1,message:"\u043a\u044d\u043d \u044e \u0431\u0440\u0438\u043d\u0433 \u043c\u0435 \u0441\u043e\u043c \u0437\u0438\u0441 \u0449\u0438\u0442?"},{id:3,mesid:2,message:"\u043e\u043a, \u0431\u0440\u043e, \u043c\u044f\u0443"}],newMessageText:""},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE-NEW-MESSAGE-TEXT":return e.newMessageText=a.newText,e;case"SEND-MESSAGE":return e.messagesData.push({id:4,mesid:2,message:e.newMessageText}),e.newMessageText="",e;default:return e}},A=function(e){var a="/dialogs/"+e.id;return n.a.createElement("div",{className:C.a.dialogsImg},n.a.createElement(p.b,{to:a},n.a.createElement("img",{src:e.img}),e.name))},I=function(e){return 1===e.mesid?n.a.createElement("div",{className:C.a.message1},e.message):n.a.createElement("div",{className:C.a.message2},e.message)};var O=function(e){var a=e.state,t=a.dialogsData.map((function(e){return n.a.createElement(A,{name:e.name,id:e.id,img:e.img})})),s=a.messagesData.map((function(e){return n.a.createElement(I,{message:e.message,id:e.id,mesid:e.mesid})}));return n.a.createElement("div",{className:C.a.dialogs},n.a.createElement("div",{className:C.a.dialogsItems},t),n.a.createElement("div",{className:C.a.messages},s,n.a.createElement("div",{className:C.a.inputDialogs},n.a.createElement("input",{type:"text",onChange:function(a){var t=a.target.value;e.newText(t)},value:a.newMessageText}),n.a.createElement("button",{onClick:function(){e.sendMessage()}},"Send"))))},W=t(8);t(39);var X=function(){return n.a.createElement("div",null,"Settings")};t(40);var U=function(){return n.a.createElement("div",null,"Music")};t(41);var F=function(){return n.a.createElement("div",null,"News")},J={_state:{profilePage:{posts:[{id:1,message:"\u041f\u0443\u0441\u0442\u044c \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u043c\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442",likesCount:23},{id:2,message:"\u041f\u0443\u0441\u0442\u044c \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u043c\u043e\u0439 \u0432\u0442\u043e\u0440\u043e\u0439 \u043f\u043e\u0441\u0442",likesCount:32}],newPostText:""},messagesPage:{dialogsData:[{id:1,name:"\u0422\u043e\u0445\u0430",img:"https://i.ytimg.com/vi/mK72EwuxZAU/hqdefault.jpg"},{id:2,name:"\u041c\u0430\u0440\u0438\u043d\u0430",img:"https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg"},{id:3,name:"\u0410\u043d\u0434\u0440\u0435\u0439",img:"https://i.pinimg.com/originals/36/fd/c3/36fdc3549189dd354acc8d4b2615c571.jpg"},{id:4,name:"\u0416\u043e\u0440\u0430",img:"https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg"},{id:5,name:"\u0412\u0430\u0441\u044f",img:"https://ichef.bbci.co.uk/news/410/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg"},{id:6,name:"\u0412\u0438\u043a\u0442\u043e\u0440",img:"https://www.fresher.ru/wp-content/uploads/2018/03/1.jpg"}],messagesData:[{id:1,mesid:1,message:"\u0435\u0443\u0435\u0443, \u043c\u0430\u0437\u0430\u0444\u0430\u043a\u0430"},{id:2,mesid:1,message:"\u0445\u0430\u0443 \u0430 \u044e \u0434\u0443\u0438\u043d\u0433?"},{id:3,mesid:1,message:"\u0432\u0435\u0440\u0438 \u0438\u0437 \u043c\u0430\u0439 \u0444\u0430\u043a\u0438\u043d\u0433 \u043c\u0430\u043d\u0438?"},{id:3,mesid:2,message:"\u0430\u0439 \u0445\u044d\u0432 \u043d\u043e \u043c\u0430\u043d\u0438"},{id:3,mesid:2,message:"\u0430\u0439 \u0445\u044d\u0432 \u043e\u043d\u043b\u0438 \u043b\u0430\u043f\u043a\u0438"},{id:3,mesid:2,message:"\u0431\u0430\u0442 \u0430\u0439 \u043a\u0430\u043d \u0438\u0440\u043d \u0441\u043e\u043c \u0432\u0438\u0441\u043a\u0430\u0441"},{id:3,mesid:1,message:"\u043a\u044d\u043d \u044e \u0431\u0440\u0438\u043d\u0433 \u043c\u0435 \u0441\u043e\u043c \u0437\u0438\u0441 \u0449\u0438\u0442?"},{id:3,mesid:2,message:"\u043e\u043a, \u0431\u0440\u043e, \u043c\u044f\u0443"}],newMessageText:""}},_callSubscriber:function(){console.log("")},getState:function(){return this._state},subscribe:function(e){this._callSubscriber=e},dispatch:function(e){this._state.profilePage=N(this._state.profilePage,e),this._state.messagesPage=B(this._state.messagesPage,e),this._callSubscriber(this._state)}};window.store=J;var V=function(e){var a=e.store.getState().messagesPage;return n.a.createElement(O,{sendMessage:function(){e.store.dispatch({type:"SEND-MESSAGE"})},newText:function(a){e.store.dispatch({type:"UPDATE-NEW-MESSAGE-TEXT",newText:a})},state:a})};var z=function(e){return n.a.createElement(p.a,null,n.a.createElement("div",{className:l.a.wrapper},n.a.createElement("div",{className:l.a.header},n.a.createElement(d,null)),n.a.createElement("div",{className:l.a.navbar},n.a.createElement(E,{state:e.state.messagesPage})),n.a.createElement("div",{className:l.a.profile},n.a.createElement(W.a,{path:"/",exact:!0,render:function(){return n.a.createElement(j,{store:e.store})}}),n.a.createElement(W.a,{path:"/profile",render:function(){return n.a.createElement(j,{store:e.store})}}),n.a.createElement(W.a,{path:"/dialogs",render:function(){return n.a.createElement(V,{store:e.store})}}),n.a.createElement(W.a,{path:"/news",component:F}),n.a.createElement(W.a,{path:"/music",component:U}),n.a.createElement(W.a,{path:"/settings",component:X}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=t(17),K=Object(G.a)({profilePage:N,messagesPage:B}),R=Object(G.b)(K),Z=function(){r.a.render(n.a.createElement(z,{state:R.getState(),store:R,dispatch:R.dispatch.bind(R)}),document.getElementById("root"))};Z(R.getState()),R.subscribe((function(){R.getState();Z()})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[28,1,2]]]);
//# sourceMappingURL=main.5e24301a.chunk.js.map