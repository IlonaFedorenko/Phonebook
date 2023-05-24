"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[763],{763:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var r=t(791),a=t(434),u=t(52),i="NOT_FOUND";var c=function(e,n){return e===n};function o(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?c:r,u=t.maxSize,o=void 0===u?1:u,s=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),f=1===o?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:i},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return i}return{get:r,put:function(n,a){r(n)===i&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,l);function p(){var n=f.get(arguments);if(n===i){if(n=e.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return p.clearCache=function(){return f.clear()},p}function s(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function l(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var u,i=0,c={memoizeOptions:void 0},o=r.pop();if("object"===typeof o&&(c=o,o=r.pop()),"function"!==typeof o)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof o+"]");var l=c,f=l.memoizeOptions,p=void 0===f?t:f,m=Array.isArray(p)?p:[p],d=s(r),v=e.apply(void 0,[function(){return i++,o.apply(null,arguments)}].concat(m)),h=e((function(){for(var e=[],n=d.length,t=0;t<n;t++)e.push(d[t].apply(null,arguments));return u=v.apply(null,e)}));return Object.assign(h,{resultFunc:o,memoizedResultFunc:v,dependencies:d,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return a}var f=l(o),p=function(e){return e.contacts},m=function(e){return e.contacts.items},d=function(e){return e.filter},v=function(e){return e.contacts.isLoading},h=function(e){return e.contacts.error},_=f([m,d],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),y=t(439),x="ContactForm_input__Bl93P",b="ContactForm_button__eSwX9",g="ContactForm_item__zE+8S",j="ContactForm_container__qpJ1N",C=t(686),N=t(329),k=function(){var e=(0,r.useState)(""),n=(0,y.Z)(e,2),t=n[0],i=n[1],c=(0,r.useState)(""),o=(0,y.Z)(c,2),s=o[0],l=o[1],f=(0,a.I0)(),p=(0,a.v9)(m),d=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":i(r);break;case"number":l(r)}};return(0,N.jsxs)("form",{className:j,onSubmit:function(e){e.preventDefault(),p.find((function(e){return e.name===t}))?C.Notify.failure("".concat(t," is already in contacs")):(f((0,u.uK)({name:t,number:s})),i(""),l(""))},children:[(0,N.jsxs)("label",{className:g,children:["Name",(0,N.jsx)("input",{type:"text",className:x,name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:d})]}),(0,N.jsxs)("label",{className:g,children:["Number",(0,N.jsx)("input",{type:"tel",name:"number",className:x,value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:d})]}),(0,N.jsx)("button",{className:b,children:"Add contact"})]})},w="Filter_name__ZiNRr",F="Filter_input__N7T3z",A=t(808);function S(){var e=(0,a.v9)(d),n=(0,a.I0)();return(0,N.jsxs)("label",{className:w,children:["Find contacts by name",(0,N.jsx)("input",{className:F,type:"text",onChange:function(e){var t=e.target.value;n((0,A.Tv)(t))},value:e})]})}var z="ContactList_list__csErn",E="ContactList_item__EZYHO",q="ContactList_button__7kL4l";function L(){var e=(0,a.I0)(),n=(0,a.v9)(_);return(0,N.jsx)("ul",{className:z,children:n.map((function(n){var t=n.id,r=n.name,a=n.phone;return(0,N.jsxs)("li",{className:E,children:[(0,N.jsxs)("p",{children:[r,":",a]}),(0,N.jsx)("button",{className:q,type:"button",onClick:function(){return function(n){e((0,u.GK)(n))}(t)},value:"delete",children:"Delete contact"})]},t)}))})}var Z="Section_card__qIHto",I="Section_title__SLHvV",O=function(e){var n=e.title,t=e.children;return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)("div",{className:Z,children:[(0,N.jsx)("h1",{className:I,children:n}),t]})})},R=function(){var e=(0,a.v9)(p),n=(0,a.v9)(h),t=(0,a.v9)(v),i=(0,a.I0)();return(0,r.useEffect)((function(){i((0,u.yF)())}),[i]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(O,{title:"Phonebook",children:(0,N.jsx)(k,{})}),(0,N.jsxs)(O,{title:"Contacts",children:[(0,N.jsx)(S,{}),t&&!n&&(0,N.jsx)("b",{children:"Request in progress..."}),n&&n,(0,N.jsx)(L,{}),e.length>0&&(0,N.jsx)(L,{})]})]})}}}]);
//# sourceMappingURL=763.37bc691f.chunk.js.map