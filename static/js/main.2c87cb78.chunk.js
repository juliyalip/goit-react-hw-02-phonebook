(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={contactItem:"contact_contactItem__3ObLS"}},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),i=n(10),o=n.n(i),s=(n(9),n(14)),u=n(3),l=n(4),h=n(6),m=n(5),d=n(11),b=n.n(d),j=function(e){var t=e.persons,n=e.onDelete;return Object(a.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.name,c=e.number;return Object(a.jsxs)("li",{className:b.a.contactItem,children:[Object(a.jsxs)("p",{children:[r," ",c]}),Object(a.jsx)("button",{type:"button",onClick:function(){n(t)},children:"Delete"})]},t)}))})},f=function(e){var t=e.value,n=e.onChange;return Object(a.jsxs)("label",{children:["Find contacts by name",Object(a.jsx)("input",{type:"text",name:"filter",value:t,onChange:n,placeholder:"find name"})]})},p=n(12),O=n(13),v=n.n(O),x=n(7),C=n.n(x),g=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(p.a)({},a,r))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number,c=e.props.onAdd;e.validateForm()&&(c({id:v.a.generate(),name:a,number:r}),e.reset())},e.validateForm=function(){var t=e.state,n=t.name,a=t.number,r=e.props.onCheckUnigue;return n&&a?r(n):(alert("filed is empti"),!1)},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,className:C.a.form,children:[Object(a.jsxs)("label",{className:C.a.input,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",value:t,placeholder:"enter name",onChange:this.handleChange})]}),Object(a.jsxs)("label",{className:C.a.input,children:["Number",Object(a.jsx)("input",{type:"text",name:"number",value:n,placeholder:"enter number",onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(r.Component),y=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.handleAddContact=function(t){e.setState((function(e){var n=e.contacts;return{contacts:[].concat(Object(s.a)(n),[t])}}))},e.handleCheckUnicue=function(t){var n=!!e.state.contacts.find((function(e){return e.name===t}));return n&&alert("Contact is already axist"),!n},e.hangleDelete=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changleFilter=function(t){e.setState({filter:t.currentTarget.value})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.filter.toLowerCase(),t=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(g,{onAdd:this.handleAddContact,onCheckUnigue:this.handleCheckUnicue}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(f,{value:this.state.filter,onChange:this.changleFilter}),Object(a.jsx)(j,{persons:t,onDelete:this.hangleDelete})]})]})}}]),n}(r.Component);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={form:"form_form__1m0eP",input:"form_input__3TLjC"}},9:function(e,t,n){}},[[28,1,2]]]);
//# sourceMappingURL=main.2c87cb78.chunk.js.map