"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[763],{763:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(791),a=n(434),u=n(52),i="NOT_FOUND";var c=function(e,t){return e===t};function o(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?c:r,u=n.maxSize,o=void 0===u?1:u,s=n.resultEqualityCheck,l=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),f=1===o?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:i},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(l):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return i}return{get:r,put:function(t,a){r(t)===i&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(o,l);function p(){var t=f.get(arguments);if(t===i){if(t=e.apply(null,arguments),s){var n=f.getEntries(),r=n.find((function(e){return s(e.value,t)}));r&&(t=r.value)}f.put(arguments,t)}return t}return p.clearCache=function(){return f.clear()},p}function s(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function l(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var u,i=0,c={memoizeOptions:void 0},o=r.pop();if("object"===typeof o&&(c=o,o=r.pop()),"function"!==typeof o)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof o+"]");var l=c,f=l.memoizeOptions,p=void 0===f?n:f,m=Array.isArray(p)?p:[p],d=s(r),v=e.apply(void 0,[function(){return i++,o.apply(null,arguments)}].concat(m)),h=e((function(){for(var e=[],t=d.length,n=0;n<t;n++)e.push(d[n].apply(null,arguments));return u=v.apply(null,e)}));return Object.assign(h,{resultFunc:o,memoizedResultFunc:v,dependencies:d,lastResult:function(){return u},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return a}var f=l(o),p=function(e){return e.contacts},m=function(e){return e.contacts.items},d=function(e){return e.filter},v=function(e){return e.contacts.isLoading},h=function(e){return e.contacts.error},y=f([m,d],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),x=n(439),_={title:"ContactForm_title__jZguf",input:"ContactForm_input__Bl93P"},b=n(329),g=function(){var e=(0,r.useState)(""),t=(0,x.Z)(e,2),n=t[0],i=t[1],c=(0,r.useState)(""),o=(0,x.Z)(c,2),s=o[0],l=o[1],f=(0,a.I0)(),p=(0,a.v9)(m),d=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":i(r);break;case"number":l(r)}};return(0,b.jsxs)("form",{className:_.container,onSubmit:function(e){e.preventDefault(),p.find((function(e){return e.name===n}))?alert("".concat(n," is already in contacs")):(f((0,u.uK)({name:n,number:s})),i(""),l(""))},children:[(0,b.jsxs)("label",{className:_.item,children:["Name",(0,b.jsx)("input",{type:"text",className:_.input,name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:d})]}),(0,b.jsxs)("label",{className:_.item,children:["Number",(0,b.jsx)("input",{type:"tel",name:"number",className:_.input,value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:d})]}),(0,b.jsx)("button",{className:_.button,children:"Add contact"})]})},j="Filter_name__ZiNRr",N="Filter_input__N7T3z",C=n(808);function k(){var e=(0,a.v9)(d),t=(0,a.I0)();return(0,b.jsxs)("label",{className:j,children:["Find contacts by name",(0,b.jsx)("input",{className:N,type:"text",onChange:function(e){var n=e.target.value;t((0,C.Tv)(n))},value:e})]})}var w={list:"ContactList_list__csErn",item:"ContactList_item__EZYHO"};function A(){var e=(0,a.I0)(),t=(0,a.v9)(y);return(0,b.jsx)("ul",{className:w.list,children:t.map((function(t){var n=t.id,r=t.name,a=t.phone;return(0,b.jsxs)("li",{className:w.item,children:[(0,b.jsxs)("p",{children:[r,":",a]}),(0,b.jsx)("button",{className:w.button,type:"button",onClick:function(){return function(t){e((0,u.GK)(t))}(n)},value:"delete",children:"Delete contact"})]},n)}))})}var F="Section_card__qIHto",z="Section_title__SLHvV",E=function(e){var t=e.title,n=e.children;return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:F,children:[(0,b.jsx)("h1",{className:z,children:t}),n]})})},S=function(){var e=(0,a.v9)(p),t=(0,a.v9)(h),n=(0,a.v9)(v),i=(0,a.I0)();return(0,r.useEffect)((function(){i((0,u.yF)())}),[i]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(E,{title:"Phonebook",children:(0,b.jsx)(g,{})}),(0,b.jsxs)(E,{title:"Contacts",children:[(0,b.jsx)(k,{}),n&&!t&&(0,b.jsx)("b",{children:"Request in progress..."}),t&&t,(0,b.jsx)(A,{}),e.length>0&&(0,b.jsx)(A,{})]})]})}}}]);
//# sourceMappingURL=763.b3ec675e.chunk.js.map