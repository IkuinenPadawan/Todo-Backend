(this["webpackJsonpdeadline-app"]=this["webpackJsonpdeadline-app"]||[]).push([[0],{33:function(t,e,n){},35:function(t,e,n){},54:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n(1),s=n.n(i),o=n(21),c=n.n(o),r=(n(33),n(22)),l=n(10),d=n(4),u=n.n(d),b=n(3),h=n(8),m=n(9),j=n(23),p=n(24),f=n(27),O=n(26),x=(n(35),n(25)),v={baseURL:"https://tamk-4a00ez62-3001-group11.herokuapp.com/api"},S=n.n(x).a.create(v);var k=function(t){var e="3",n="2",i="1",s=function(e){t.onInputChange(e)},o=function(e){return t.todoFormState.priority.toString()===e};return Object(a.jsxs)("form",{children:[Object(a.jsx)("h3",{children:"Add Deadline"}),Object(a.jsxs)("div",{className:"input-animation",children:[Object(a.jsx)("input",{onChange:s,name:"name",value:t.todoFormState.name,type:"text",required:!0}),Object(a.jsx)("label",{htmlFor:"name",className:"label-name",children:Object(a.jsx)("span",{className:"content-name",children:"Name"})})]}),Object(a.jsxs)("div",{className:"input-animation",children:[Object(a.jsx)("input",{onChange:s,name:"date",type:"date",value:t.todoFormState.date,required:!0}),Object(a.jsx)("label",{htmlFor:"date",className:"label-name",children:Object(a.jsx)("span",{className:"content-name",children:"Date"})})]}),Object(a.jsx)("div",{id:"priority",children:Object(a.jsxs)("label",{children:["Priority",Object(a.jsxs)("div",{className:"radio-container",children:[Object(a.jsx)("input",{type:"radio",id:"low",name:"priority",value:e,checked:o(e),onChange:s}),Object(a.jsxs)("label",{htmlFor:"low",className:"radio",children:["Low (",e,")"]}),Object(a.jsx)("input",{type:"radio",id:"medium",name:"priority",value:n,checked:o(n),onChange:s}),Object(a.jsxs)("label",{htmlFor:"medium",className:"radio",children:["Medium (",n,")"]}),Object(a.jsx)("input",{type:"radio",id:"high",name:"priority",value:i,checked:o(i),onChange:s}),Object(a.jsxs)("label",{htmlFor:"high",className:"radio",children:["High (",i,")"]})]})]})}),Object(a.jsxs)("div",{className:"toggle",children:[Object(a.jsx)("h4",{children:"Is deadline"}),Object(a.jsx)("input",{type:"checkbox",id:"switch",onClick:function(e){t.handleListClick()},defaultChecked:!t.listItemState}),Object(a.jsx)("label",{htmlFor:"switch",children:"Deadline"})]}),Object(a.jsx)("div",{className:t.listItemState?"list-input-on":"list-input-off",children:Object(a.jsxs)("div",{className:"input-animation",children:[Object(a.jsx)("input",{onChange:s,name:"list",type:"text",value:t.todoFormState.list,required:!0}),Object(a.jsx)("label",{htmlFor:"list",className:"label-name",children:Object(a.jsx)("span",{className:"content-name",children:"Task List"})})]})}),Object(a.jsxs)("div",{className:"input-animation",children:[Object(a.jsx)("input",{onChange:s,name:"description",type:"text",value:t.todoFormState.description,required:!0}),Object(a.jsx)("label",{htmlFor:"description",className:"label-name",children:Object(a.jsx)("span",{className:"content-name",children:"Description"})})]}),Object(a.jsxs)("div",{className:"submitbuttons",children:[Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),""!==t.todoFormState.name&&t.onFormSubmit(t.todoFormState)},id:"submit",className:"form-button",type:"submit",children:t.submitButtonLabel}),Object(a.jsx)("button",{onClick:function(e){e.preventDefault(),t.onFormCancel()},id:"cancel",className:"form-button",type:"submit",children:"Cancel"})]})]})},y=n(6),g=n(12),C=n.n(g);var N=function(t){var e={main:{display:"flex",flexFlow:"row wrap"},header:{width:"100%"},content:{width:"100%"}},n={width:"100%",height:"100%",transform:t.isOpen?"rotate(90deg)":"",transition:"all 0.1s ease-out"};return Object(a.jsxs)("div",{className:"collapsible",style:e.main,children:[Object(a.jsxs)("div",{className:"collapsible-header",onClick:function(){t.onClick(t.id)},style:e.header,children:[Object(a.jsx)("div",{style:{textAlign:"center",width:"16px",height:"16px",marginRight:"1rem"},children:Object(a.jsx)("i",{className:"fas fa-angle-right",style:n})}),t.header]}),Object(a.jsx)("div",{className:t.isOpen?"collapsible-content":"collapsible-content collapsed",style:e.content,children:t.isOpen?t.children:null})]})};function w(t){return Object(a.jsxs)("button",{id:t.id,className:t.className,onClick:t.onClick,children:[t.label,Object(a.jsx)("i",{className:t.icon})]})}var F=function(t){var e=t.todo,n=t.todoHandler,i=t.collapsibleStates,s=function(){return C()(e.date).diff(C()(new Date),"days")};return Object(a.jsx)("li",{className:e.isdone?"todo-item completed":"todo-item",children:Object(a.jsxs)(N,{id:e.id,isOpen:i.find((function(t){return t.id===e.id})).isOpen,onClick:n.collapse,header:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:function(){if(e.isdone&&e.priority>0)return"priority-color priority-color-completed";switch(e.priority){case 1:return"priority-color priority-color-high";case 2:return"priority-color priority-color-medium";case 3:return"priority-color priority-color-low";default:return"deadline"===e.list||"deadlines"===e.list?"priority-color priority-color-deadline":"priority-color priority-color-default"}}()}),Object(a.jsx)("p",{className:"todo-priority",children:e.priority>0?e.priority:""}),Object(a.jsx)("p",{className:"todo-date",children:e.date}),Object(a.jsx)("p",{className:"todo-name",children:e.name}),Object(a.jsx)(w,{className:"btn-flat task-completed",onClick:function(t){t.stopPropagation(),n.complete(e.id)},icon:"fas fa-check"})]}),children:[Object(a.jsxs)("div",{className:"toolbar",children:[Object(a.jsx)("p",{children:e.isdone?"Task completed":e.date?s()>=0?"Time remaining: ".concat(s()," days"):"You are ".concat(-s()," days late!"):"You are in no hurry"}),Object(a.jsx)(w,{id:"edit",className:"btn py-05",onClick:function(){n.edit(e)},label:"Edit",icon:"fas fa-edit"}),Object(a.jsx)(w,{id:"delete",className:"btn py-05",onClick:function(){n.delete(e.id)},label:"Delete",icon:"fas fa-trash"})]}),""===e.description?null:Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Description:"}),Object(a.jsx)("p",{className:"todo-description",children:e.description})]}),Object(a.jsx)("div",{children:Object(a.jsxs)("p",{className:"todo-datecreated",children:["Date added: ",e.created]})})]})})},L=function(t){var e=t.todos,n=t.todoHandler,i=t.collapsibleStates,s=e.map((function(t){return Object(a.jsx)(F,{todo:t,todoHandler:n,collapsibleStates:i},t.id)}));return Object(a.jsx)("div",{className:"list",children:s})},E=function(t){var e=t.todos,n=t.lists,s=t.todoHandler,o=t.collapsibleStates,c=t.isLoaded,r=t.statusMessage,l=Object(i.useState)([]),d=Object(y.a)(l,2),u=d[0],h=d[1],m=Object(i.useState)(!1),j=Object(y.a)(m,2),p=j[0],f=j[1];Object(i.useEffect)((function(){var t;t=n.map((function(t){return t={id:t.id,isOpen:!1}})),h(t)}),[n]);var O=[];e.forEach((function(t){O.includes(t.list)||O.push(t.list)}));var x=function(t){return n.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})).id},v=function(t){var e=Object(b.a)(u),n=e.findIndex((function(e){return e.id===t}));e[n].isOpen=!e[n].isOpen,h(e)},S=function(t){return u.find((function(e){return e.id===x(t)})).isOpen},k=O.map((function(t){if(p&&(e=e.filter((function(t){return!t.isdone}))),"deadlines"!==t){var n=e.filter((function(e){return e.list===t&&"deadlines"!==e.list}));return Object(a.jsx)("ul",{children:Object(a.jsx)(N,{id:x(t),header:Object(a.jsx)("h3",{children:t}),onClick:v,isOpen:S(t),children:Object(a.jsx)(L,{todos:n,todoHandler:s,collapsibleStates:o})})},x(t))}return""}));return c?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"list-toolbar",children:[Object(a.jsx)("button",{className:"btn-alt",onClick:function(t){var e=Object(b.a)(u);e.forEach((function(t){t.isOpen=!0})),h(e)},children:"Expand all lists"}),Object(a.jsx)("button",{className:"btn-alt",onClick:function(t){var e=Object(b.a)(u);e.forEach((function(t){t.isOpen=!1})),h(e)},children:"Collapse all lists"}),Object(a.jsx)("div",{className:"hide-completed-toggle",children:Object(a.jsxs)("label",{className:"checbox-wrapper",children:[Object(a.jsx)("i",{className:p?"fas fa-check-square":"fas fa-square"}),Object(a.jsx)("input",{type:"checkbox",checked:p,onChange:function(t){f(t.target.checked)}}),"Hide completed"]})})]}),Object(a.jsxs)("div",{className:"list",children:[Object(a.jsxs)("div",{className:"deadlines",children:[Object(a.jsx)("h3",{children:"Deadlines"}),Object(a.jsx)(L,{todos:e.filter((function(t){return"deadline"===t.list||"deadlines"===t.list})),todoHandler:s,collapsibleStates:o})]}),k]})]}):Object(a.jsx)("div",{className:"list",children:r})},I="Completed",D="Date",T="Name",_="Priority";function R(t){return Object(a.jsx)("button",{className:"btn py-05",onClick:function(e){t.onClick(t.label)},children:t.label})}var H=function(t){var e=Object(i.useState)(!0),n=Object(y.a)(e,2),s=n[0],o=n[1],c=Object(i.useState)(null),r=Object(y.a)(c,2),l=r[0],d=r[1],u=t.tasklist.slice(),b=t.updateTasklist;Object(i.useEffect)((function(){u.sort((function(t,e){if(t.list!==e.list)return t.list.localeCompare(e.list);switch(l){case D:return s?(null===t.date)-(null===e.date)||new Date(t.date)-new Date(e.date):(null===e.date)-(null===t.date)||new Date(e.date)-new Date(t.date);case T:return s?t.name.localeCompare(e.name):e.name.localeCompare(t.name);case _:return s?(0===t.priority)-(0===e.priority)||t.priority-e.priority:(0===e.priority)-(0===t.priority)||e.priority-t.priority;case I:return s?e.isdone-t.isdone:t.isdone-e.isdone;default:return 0}})),b(u)}),[s,l,b]);var h=function(t){o(t!==l||!s),d(t)};return Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{className:"sortbuttonlist",children:["Sort by:",Object(a.jsx)("li",{children:Object(a.jsx)(R,{label:"Date",onClick:h})}),Object(a.jsx)("li",{children:Object(a.jsx)(R,{label:"Name",onClick:h})}),Object(a.jsx)("li",{children:Object(a.jsx)(R,{label:"Priority",onClick:h})}),Object(a.jsx)("li",{children:Object(a.jsx)(R,{label:"Completed",onClick:h})})]})})},W="Add",B="Edit",M="Deadlines",V="Other tasks",q=1050,P=function(t){Object(f.a)(n,t);var e=Object(O.a)(n);function n(t){var a;return Object(j.a)(this,n),(a=e.call(this,t)).handleInitialFetch=function(t,e){S.get("/".concat("".concat(t,"?apikey=").concat("43457514"))).then((function(t){if(!t.hasOwnProperty("data"))throw new Error("Data fetching failed.");e(t)})).catch((function(e){a.handleFetchError(e,(function(){var e="isLoaded_".concat(t);a.setState(Object(m.a)({},e,!0))}))}))},a.handleFetchError=function(t,e){t.response&&404===t.response.status?e():a.setState({statusMessage:"ERROR: Could not reach the api"})},a.convertTodoContext=function(t){var e=t.hasOwnProperty("date")?"frontend":"backend";if("frontend"===e){var n={date_deadline:""!==t.date?t.date:null,name:t.name,description:t.description,priority:+t.priority,is_done:t.isdone};return t.listid&&(n.listid=t.listid),t.created&&(n.date_created=t.created),t.id&&(n.id=t.id),n}return"backend"===e?{id:t.id,name:t.name,date:t.date_deadline,priority:t.priority,listid:t.listid,list:a.getListName(t.listid),description:t.description,isdone:t.is_done,created:t.date_created}:t},a.getListId=function(){var t=Object(h.a)(u.a.mark((function t(e){var n,i,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=Object(b.a)(a.state.lists),""===e&&(e=a.state.default_list),!(i=n.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})))){t.next=7;break}return t.abrupt("return",i.id);case 7:return t.prev=7,t.next=10,S.post("/lists?apikey=".concat("43457514"),{name:e});case 10:return s=t.sent,t.abrupt("return",s.data.content.id);case 14:t.prev=14,t.t0=t.catch(7),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[7,14]])})));return function(e){return t.apply(this,arguments)}}(),a.getListName=function(t){return Object(b.a)(a.state.lists).find((function(e){return e.id===t})).name},a.isLastTodoFromList=function(t){return 0===a.state.todos.filter((function(e){return e.list===t.list})).length},a.handleListClick=function(){a.state.listItemState?a.setState({default_list:M}):a.setState({default_list:V}),a.setState((function(t){return{listItemState:!t.listItemState}}))},a.handleTodoFormInputChange=function(t){var e=t.target,n=e.value,i=e.name,s=Object(l.a)({},a.state.todoFormState);s[i]=n,a.setState({todoFormState:s})},a.handleSubmit=function(){var t=Object(h.a)(u.a.mark((function t(e){var n,i,s,o,c,r,l,d,h,m,j,p,f,O;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(b.a)(a.state.todos),i=Object(b.a)(a.state.lists),s=Object(b.a)(a.state.collapsibleStates),window.innerWidth<q&&a.setState({isFormVisibleWhenScreenSmall:!1}),t.prev=4,t.next=7,a.getListId(e.list);case 7:if(o=t.sent,(c=a.convertTodoContext(e)).listid=o,a.state.todoFormSubmitButtonLabel!==B){t.next=28;break}return r=n.findIndex((function(t){return t.id===e.id})),t.next=14,S.put("/todos/".concat(e.id,"?apikey=").concat("43457514"),c);case 14:if(200!==t.sent.status){t.next=25;break}if(""===e.list&&(e.list=a.state.default_list),i.includes({id:c.listid,name:e.list})){t.next=22;break}return t.next=20,S.get("/lists?apikey=".concat("43457514"));case 20:l=t.sent,a.setState({lists:l.data});case 22:n[r]=e,t.next=26;break;case 25:throw new Error("ERROR: Could not update entry in db.");case 26:t.next=45;break;case 28:return t.next=30,S.post("/todos?apikey=".concat("43457514"),c);case 30:if(d=t.sent,h=d.data.content.id,m={id:h,isOpen:!1},s=s.concat(m),i.includes({id:c.listid,name:e.list})){t.next=39;break}return t.next=37,S.get("/lists?apikey=".concat("43457514"));case 37:j=t.sent,a.setState({lists:j.data});case 39:return t.next=41,S.get("/todos/".concat(h,"?apikey=").concat("43457514"));case 41:p=t.sent,f=p.data[0],O=a.convertTodoContext(f),n=n.concat(O);case 45:t.next=50;break;case 47:t.prev=47,t.t0=t.catch(4),console.log(t.t0);case 50:a.setState({todos:n,todoFormState:a.resetTodoFormState(),todoFormSubmitButtonLabel:W,collapsibleStates:s});case 51:case"end":return t.stop()}}),t,null,[[4,47]])})));return function(e){return t.apply(this,arguments)}}(),a.handleCancel=function(){window.innerWidth<q&&a.setState({isFormVisibleWhenScreenSmall:!1}),a.setState({todoFormState:a.resetTodoFormState(),todoFormSubmitButtonLabel:W})},a.resetTodoFormState=function(){var t={name:"",date:"",priority:"",list:"",description:"",isdone:!1};return t},a.handleSort=function(t){a.setState({todos:t})},a.getTodoObject=function(t){var e=a.state.todos.filter((function(e){return e.id===t}));return console.log(e),e[0]},a.todoHandler={collapse:function(t){var e=Object(b.a)(a.state.collapsibleStates);e.forEach((function(e){e.isOpen=t===e.id&&!e.isOpen})),a.setState({collapsibleStates:e})},delete:function(){var t=Object(h.a)(u.a.mark((function t(e){var n,i,s,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.getTodoObject(e),t.prev=1,t.next=4,S.delete("todos/".concat(e,"?apikey=").concat("43457514"));case 4:if(204!==t.sent.status){t.next=24;break}if(i=a.state.todos.filter((function(t){return t.id!==e})),a.setState({todos:i}),"deadlines"===n.list){t.next=22;break}if(!a.isLastTodoFromList(n)){t.next=22;break}return t.next=12,a.getListId(n.list);case 12:return s=t.sent,t.next=15,S.delete("lists/".concat(s,"?apikey=").concat("43457514"));case 15:if(204!==t.sent.status){t.next=21;break}o=a.state.lists.filter((function(t){return t.id!==s})),a.setState({lists:o}),t.next=22;break;case 21:throw new Error("ERROR: Could not delete list with id: ".concat(s," from db."));case 22:t.next=25;break;case 24:throw new Error("ERROR: Could not delete todo with id: ".concat(e," from db."));case 25:t.next=30;break;case 27:t.prev=27,t.t0=t.catch(1),console.log(t.t0);case 30:case"end":return t.stop()}}),t,null,[[1,27]])})));return function(e){return t.apply(this,arguments)}}(),complete:function(){var t=Object(h.a)(u.a.mark((function t(e){var n,i,s,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.getTodoObject(e),i={is_done:!n.isdone},t.prev=2,t.next=5,S.put("todos/".concat(e,"?apikey=").concat("43457514"),i);case 5:if(200!==t.sent.status){t.next=13;break}s=Object(b.a)(a.state.todos),o=s.findIndex((function(t){return t.id===e})),s[o]=Object(l.a)(Object(l.a)({},s[o]),{},{isdone:!s[o].isdone}),a.setState({todos:s}),t.next=14;break;case 13:throw new Error("Error: Could not mark todo done with id: ".concat(e," in db."));case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(2),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[2,16]])})));return function(e){return t.apply(this,arguments)}}(),edit:function(t){window.innerWidth<q&&a.setState({isFormVisibleWhenScreenSmall:!0}),a.setState({todoFormState:t,todoFormSubmitButtonLabel:B})}},a.state={isLoaded_lists:!1,isLoaded_todos:!1,isLoaded:!1,statusMessage:"Fetching data...",todos:[],lists:[],todoFormState:{name:"",date:"",priority:"",list:"",descritpion:"",isdone:!1},todoFormSubmitButtonLabel:W,listItemState:!1,collapsibleStates:[],isFormVisibleWhenScreenSmall:!1,default_list:M},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){for(var t=this,e=function(){var e=a[n];t.handleInitialFetch(e,(function(n){switch(e){case"lists":t.setState({lists:n.data,isLoaded_lists:!0});break;case"todos":var a,i=n.data.map((function(e){return t.convertTodoContext(e)})),s=Object(b.a)(t.state.collapsibleStates),o=Object(r.a)(i);try{for(o.s();!(a=o.n()).done;){var c={id:a.value.id,isOpen:!1};s=s.concat(c)}}catch(l){o.e(l)}finally{o.f()}t.setState({todos:i,collapsibleStates:s,isLoaded_todos:!0});break;default:console.log("Something went wrong.")}}))},n=0,a=["lists","todos"];n<a.length;n++)e()}},{key:"componentDidUpdate",value:function(){this.state.isLoaded_todos&&this.state.isLoaded_lists&&!this.state.isLoaded&&this.setState({isLoaded:!0})}},{key:"render",value:function(){var t=this;return Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)("button",{className:this.state.isFormVisibleWhenScreenSmall?"floating-action-button fab-hidden":"floating-action-button fab-visible",onClick:function(){t.setState({isFormVisibleWhenScreenSmall:!0})},children:Object(a.jsx)("i",{className:"fas fa-plus"})}),Object(a.jsx)("div",{className:this.state.isFormVisibleWhenScreenSmall?"form form-visible":"form form-hidden",children:Object(a.jsx)(k,{handleListClick:this.handleListClick,listItemState:this.state.listItemState,submitButtonLabel:this.state.todoFormSubmitButtonLabel,todoFormState:this.state.todoFormState,onInputChange:this.handleTodoFormInputChange,onFormSubmit:this.handleSubmit,onFormCancel:this.handleCancel})}),Object(a.jsxs)("div",{className:this.state.isFormVisibleWhenScreenSmall?"todo-list list-hidden":"todo-list list-visible",children:[Object(a.jsx)(H,{tasklist:this.state.todos,updateTasklist:this.handleSort}),Object(a.jsx)(E,{todos:this.state.todos,lists:this.state.lists,todoHandler:this.todoHandler,collapsibleStates:this.state.collapsibleStates,isLoaded:this.state.isLoaded,statusMessage:this.state.statusMessage})]})]})})}}]),n}(s.a.Component);c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.93160c15.chunk.js.map