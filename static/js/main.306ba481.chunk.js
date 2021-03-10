(this["webpackJsonpmoichor-task"]=this["webpackJsonpmoichor-task"]||[]).push([[0],{107:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(21),r=n.n(i),a=n(22),o=n(57),s=n(109),d=n(20),l=n(61),j=n(53),b=(n(106),n(107),n(51)),u=n(30),g=n(153),O=n(151);var h,f,y,v=function(e){var t=Object(c.useState)(e),n=Object(u.a)(t,2),i=n[0],r=n[1];return[i,function(e){r(e.target.value)},function(){r("")}]},x=n(6),p=function(e){var t=e.isModalVisible,n=e.setIsModalVisible,c=e.addCategory,i=v(""),r=Object(u.a)(i,3),a=r[0],o=r[1],s=r[2];return Object(x.jsx)(g.a,{title:"Create Category",visible:t,onOk:function(){c(a),n(!1),s()},onCancel:function(){n(!1),s()},children:Object(x.jsx)(O.a,{placeholder:"Input category name here...",onChange:o,value:a})})},m=n(64),C=n(150),k=n(65),F=Object(k.a)(C.a)(h||(h=Object(m.a)(["\n  margin-right: 20px;\n"]))),w=C.a.Option,N=function(e){var t=e.categories,n=e.selectedCategory,i=e.selectCategory,r=e.isInHeader,a=void 0!==r&&r,o=a?t:t.filter((function(e){return e.id}));return Object(c.useEffect)((function(){a||n.id||i(o[0])}),[n,a,o,i]),Object(x.jsx)(F,{value:n.id,style:{minWidth:300},onChange:function(e){i(t.find((function(t){return t.id===e})))},children:o.map((function(e){return Object(x.jsx)(w,{value:e.id,children:e.title},e.id)}))})},S=n(125),_=function(e){var t=e.categories,n=e.selectedCategory,i=e.selectCategory,r=e.addCategory,o=e.isInHeader,s=Object(c.useState)(!1),d=Object(u.a)(s,2),l=d[0],b=d[1],g={categories:t,selectedCategory:n,selectCategory:i};return Object(x.jsxs)("div",{style:{textAlign:"right"},children:[Object(x.jsx)(N,Object(a.a)({isInHeader:o},g)),Object(x.jsx)(j.a,{onClick:function(){return b(!0)},type:"primary",shape:"circle",icon:Object(x.jsx)(S.a,{})}),Object(x.jsx)(p,{addCategory:r,isModalVisible:l,setIsModalVisible:b})]})},E=function(e){var t=e.categoryProps,n=e.editNote,i=e.initialList,r=Object(d.h)().id,o=Object(c.useMemo)((function(){return i.find((function(e){return e.id===r}))}),[r,i]);Object(c.useEffect)((function(){document.getElementById("anchor").firstChild.lastChild.firstChild.innerHTML=o.content}),[o.content]);var s=Object(d.f)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(_,Object(a.a)({},t)),Object(x.jsx)("div",{id:"anchor",children:Object(x.jsx)(b.Whiteboard,{events:new b.EventStream,eventStore:new b.EventStore,width:300,height:300,style:{backgroundColor:"#FFFFF0"}})}),Object(x.jsx)(j.a,{style:{marginTop:20},onClick:function(){var e=document.getElementById("anchor").getElementsByTagName("svg");n({id:o.id,content:e[0].innerHTML,category_id:t.selectedCategory.id,category_name:t.selectedCategory.title}),s.push("/")},children:"Save"})]})},I=n(149),M=n(154),T=n(155),B=n(156),P=function(e){var t=e.idToDelete,n=e.removeNote,c=e.isModalVisible,i=e.setIsModalVisible;return Object(x.jsx)(g.a,{okButtonProps:{danger:!0},title:"Delete Note",visible:c,onOk:function(){n(t),i(!1)},onCancel:function(){i(!1)},children:Object(x.jsx)("p",{children:"Are you sure you want to delete this note?"})})},H=Object(k.a)(I.a)(f||(f=Object(m.a)(["\n  margin-bottom: 20px;\n"]))),L=function(e){var t=e.item,n=e.removeNote,i=e.duplicateNote,r=Object(c.useState)(!1),a=Object(u.a)(r,2),o=a[0],s=a[1],l=Object(d.f)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(H,{title:t.category_name,actions:[Object(x.jsx)(M.a,{onClick:function(){return i(t.id)}},"duplicate"),Object(x.jsx)(T.a,{onClick:function(){l.push("/edit/"+t.id)}},"edit"),Object(x.jsx)(B.a,{onClick:function(){s(!0)}},"delete")],children:Object(x.jsx)("div",{dangerouslySetInnerHTML:{__html:'<svg width="300" height="300">'+t.content+"</svg>"}})}),Object(x.jsx)(P,{setIsModalVisible:s,isModalVisible:o,removeNote:n,idToDelete:t.id})]})},A=function(e){var t=e.list,n=Object(o.a)(e,["list"]);return Object(x.jsx)(x.Fragment,{children:t.map((function(e){return Object(x.jsx)(L,Object(a.a)({item:e},n),e.id)}))})},V=Object(k.a)(j.a)(y||(y=Object(m.a)(["\n  position: fixed;\n  bottom: 50px;\n  left: 50px;\n  width: 70px !important;\n  height: 70px !important;\n"]))),D=function(e){var t=e.list,n=Object(o.a)(e,["list"]),c=Object(d.f)();return Object(x.jsxs)(x.Fragment,{children:[!!t.length&&Object(x.jsx)(A,Object(a.a)({list:t},n)),!t.length&&Object(x.jsx)("div",{children:"No notes yet."}),Object(x.jsx)(V,{onClick:function(){c.push("/new")},type:"primary",size:"large",shape:"circle",icon:Object(x.jsx)(S.a,{})})]})},W=n(152),z=n(102),J=n.n(z),q=n(117),G=n(76),K=n(41),Q=n.n(K),R=n(118),U=n.n(R),X=n(119);var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=Object(c.useState)(e),i=Object(u.a)(n,2),r=i[0],o=i[1],s=t?r.filter((function(e){return e.category_id===t})):r;return{initialList:r||[],list:s||[],addNote:function(e){o([].concat(Object(G.a)(r),[{id:Q()(),content:e.content,category_id:e.category_id,category_name:e.category_name}]))},removeNote:function(e){var t=r.filter((function(t){return t.id!==e}));o(t)},duplicateNote:function(e){var t=r.find((function(t){return t.id===e}));o([].concat(Object(G.a)(r),[{id:Q()(),content:t.content,category_id:t.category_id,category_name:t.category_name}]))},editNote:function(e){var t=r.map((function(t){return t.id===e.id?Object(a.a)(Object(a.a)({},t),e):t}));o(t)},exportNotes:function(){var e=Object(q.a)(J.a.mark((function e(){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=new U.a,t?s.forEach((function(e,t){n.file("img".concat(t+1,"-").concat(e.id,".svg"),'<svg width="300" height="300">'+e.content+"</svg>")})):r.forEach((function(e,t){n.file("img".concat(t+1,"-").concat(e.id,".svg"),'<svg width="300" height="300">'+e.content+"</svg>")})),n.generateAsync({type:"blob"}).then((function(e){Object(X.saveAs)(e,"images.zip")}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}};var Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(c.useState)(e),n=Object(u.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(e[0]),o=Object(u.a)(a,2),s=o[0],d=o[1];return{categories:i,selectedCategory:s,addCategory:function(e){r([].concat(Object(G.a)(i),[{id:Q()(),title:e}]))},selectCategory:function(e){d(e)}}},$=function(e){var t=e.categoryProps,n=e.addNote,c=Object(d.f)();return Object(x.jsxs)("div",{children:[Object(x.jsx)(_,Object(a.a)({},t)),Object(x.jsx)("div",{id:"anchor",children:Object(x.jsx)(b.Whiteboard,{events:new b.EventStream,eventStore:new b.EventStore,width:300,height:300,style:{backgroundColor:"#FFFFF0"}})}),Object(x.jsx)(j.a,{style:{marginTop:20},onClick:function(){var e=document.getElementById("anchor").getElementsByTagName("svg");n({content:e[0].innerHTML,category_id:t.selectedCategory.id,category_name:t.selectedCategory.title}),c.push("/")},children:"Save"})]})},ee=W.a.Header,te=W.a.Footer,ne=W.a.Content,ce=[{id:null,title:"All"},{id:Q()(),title:"First test category"},{id:Q()(),title:"Second test category"},{id:Q()(),title:"Third test category"}],ie=function(e){var t=e.list,n=e.categoryProps,c=Object(o.a)(e,["list","categoryProps"]);return Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{exact:!0,path:"/",children:Object(x.jsx)(D,Object(a.a)({list:t},c))}),Object(x.jsx)(d.a,{path:"/new",children:Object(x.jsx)($,Object(a.a)({categoryProps:n,list:t},c))}),Object(x.jsx)(d.a,{path:"/edit/:id",children:Object(x.jsx)(E,Object(a.a)({categoryProps:n,list:t},c))})]})},re=function(e){var t=e.categories,n=e.selectedCategory,c=e.selectCategory,i=e.addCategory,r=e.exportNotes,o={categories:t,selectedCategory:n,selectCategory:c,addCategory:i},s=Object(d.g)(),l=Object(d.f)();return"/new"===s.pathname||s.pathname.includes("edit")?Object(x.jsx)(ee,{children:Object(x.jsx)(j.a,{onClick:function(){return l.goBack()},type:"primary",children:"Back"})}):Object(x.jsxs)(ee,{children:[Object(x.jsx)(_,Object(a.a)({isInHeader:!0},o)),Object(x.jsx)(j.a,{onClick:r,type:"primary",style:{marginLeft:"20px"},children:"Download"})]})};var ae=function(){var e=Object(s.a)(),t=e.ErrorBoundary,n=e.didCatch,c=e.error,i=Z(ce),r=Y([],i.selectedCategory.id),d=r.list,j=Object(o.a)(r,["list"]);return Object(x.jsx)(x.Fragment,{children:n?Object(x.jsxs)("p",{children:["An error has been catched: ",c.message]}):Object(x.jsx)(l.a,{children:Object(x.jsx)(W.a,{children:Object(x.jsxs)(t,{children:[Object(x.jsx)(re,Object(a.a)(Object(a.a)({},i),{},{list:d},j)),Object(x.jsx)(ne,{children:Object(x.jsx)(ie,Object(a.a)({list:d,categoryProps:i},j))}),Object(x.jsx)(te,{style:{textAlign:"center"},children:"Notes App"})]})})})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,157)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};r.a.render(Object(x.jsx)(ae,{}),document.getElementById("root")),oe()}},[[147,1,2]]]);
//# sourceMappingURL=main.306ba481.chunk.js.map