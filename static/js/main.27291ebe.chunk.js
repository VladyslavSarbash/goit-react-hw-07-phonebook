(this["webpackJsonpreact-config-hw"]=this["webpackJsonpreact-config-hw"]||[]).push([[0],{62:function(t,e,n){},63:function(t,e,n){},91:function(t,e,n){"use strict";n.r(e);var r,c,a=n(0),u=n.n(a),o=n(15),i=n.n(o),l=n(7),s=n(6),b=n(4),f=n(2),j=n(32),d=n(8),O=n.n(d),p=n(17),h=n(18),m=n.n(h),x=Object(b.c)("getContacts",Object(p.a)(O.a.mark((function t(){var e,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("http://localhost:3000/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))),v=Object(b.c)("addContact",function(){var t=Object(p.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.post("http://localhost:3000/contacts",e);case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),g=Object(b.c)("deleteContact",function(){var t=Object(p.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m.a.delete("http://localhost:3000/contacts/".concat(e)),t.abrupt("return",e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),C=Object(b.d)([],(r={},Object(f.a)(r,x.fulfilled,(function(t,e){return e.payload})),Object(f.a)(r,v.fulfilled,(function(t,e){return[e.payload].concat(Object(j.a)(t))})),Object(f.a)(r,g.fulfilled,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),r)),y=Object(b.b)("filter"),w=Object(b.d)("",Object(f.a)({},y,(function(t,e){return e.payload}))),A=Object(b.d)(!1,(c={},Object(f.a)(c,v.pending,(function(){return!0})),Object(f.a)(c,v.fulfilled,(function(){return!1})),Object(f.a)(c,v.rejected,(function(){return!1})),Object(f.a)(c,x.pending,(function(){return!0})),Object(f.a)(c,x.fulfilled,(function(){return!1})),Object(f.a)(c,x.rejected,(function(){return!1})),Object(f.a)(c,g.pending,(function(){return!0})),Object(f.a)(c,g.fulfilled,(function(){return!1})),Object(f.a)(c,g.rejected,(function(){return!1})),c)),k=Object(s.b)({contacts:C,filter:w,loader:A}),z=Object(b.a)({reducer:k}),Z=(n(62),n(63),n(30)),N=n.n(Z),F=n(1);var B=n(9),E=function(t){return t.contacts},J=function(t){return t.filter},S=function(t){return t.loader},q=Object(B.a)([E,J],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}));var D=Object(l.b)((function(t){return{contacts:q(t),loader:S(t)}}),(function(t){return{deleteContact:function(e){return t(g(e))}}}))((function(t){var e=t.contacts,n=t.deleteContact,r=t.loader;return Object(F.jsx)("div",{children:Object(F.jsx)("ul",{children:r?Object(F.jsx)(N.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}):0===e.length?Object(F.jsx)("h2",{children:"No contacts"}):e.map((function(t){var e=t.id,r=t.name,c=t.number;return Object(F.jsxs)("li",{children:[r,": ",c,Object(F.jsx)("button",{className:"item-list",id:e,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})})}));var L=Object(l.b)((function(t){return{filter:J(t)}}),(function(t){return{filterValue:function(e){var n=e.target;return t(y(n.value))}}}))((function(t){var e=t.filterValue,n=t.filter;return Object(F.jsxs)("label",{children:["Find contacts by name",Object(F.jsx)("input",{type:"text",name:"filter",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:e})]})})),M=n(10),P=n(33),V=n(31),$=n.n(V);var I=Object(l.b)((function(t){return{contacts:E(t)}}),(function(t){return{addContact:function(e){return t(v(e))},getContacts:function(){return t(x())}}}))((function(t){var e=t.contacts,n=t.addContact,r=t.getContacts,c=Object(a.useState)({name:"",number:""}),u=Object(P.a)(c,2),o=u[0],i=u[1];Object(a.useEffect)((function(){r()}),[r]);var l=function(){var t={name:o.name,number:o.number,id:$.a.generate()};n(t)},s=function(t){var e=t.target,n=e.name,r=e.value;i(Object(M.a)(Object(M.a)({},o),{},Object(f.a)({},n,r)))},b=function(){i({name:"",number:""})};return Object(F.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.find((function(t){return t.name===o.name}))?alert("".concat(o.name," is already in contacts.")):l(),b()},children:[Object(F.jsxs)("label",{children:["Name",Object(F.jsx)("input",{type:"text",name:"name",value:o.name,placeholder:"Kris Evans",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:s})]}),Object(F.jsxs)("label",{children:["Number",Object(F.jsx)("input",{type:"tel",name:"number",value:o.number,placeholder:"555-55-55",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:s})]}),Object(F.jsx)("button",{className:"submit_form",type:"submit",children:"Add contact"})]})}));var K=function(){return Object(F.jsxs)("section",{children:[Object(F.jsx)("h1",{children:"Phonebook"}),Object(F.jsx)(I,{}),Object(F.jsx)("h2",{children:"Contacts"}),Object(F.jsx)(L,{}),Object(F.jsx)(D,{})]})};i.a.render(Object(F.jsx)(u.a.StrictMode,{children:Object(F.jsx)(l.a,{store:z,children:Object(F.jsx)(K,{})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.27291ebe.chunk.js.map