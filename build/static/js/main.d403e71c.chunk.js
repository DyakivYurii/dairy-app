(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(17)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),m=a(5),r=a.n(m),l=a(1),s=(a(12),function(){return c.a.createElement("section",{className:"info"},c.a.createElement("h1",{className:"info__logo"},"Dairy App"),c.a.createElement("p",{className:"info__description"},"Comment with no sense"))}),o=a(2),i=(a(13),function(e){var t=e.store,a=e.selectedItem,m=e.setSelectedItem,r=e.setStore,s=Object(n.useState)(""),i=Object(l.a)(s,2),u=i[0],f=i[1],E=Object(n.useState)(Object(o.a)(t)),_=Object(l.a)(E,2),d=_[0],p=_[1];Object(n.useEffect)(function(){p(Object(o.a)(t))},[t,a]);var v=function(e){return function(t){t.preventDefault(),t.stopPropagation();var a=Object(o.a)(d);a.splice(e,1),p(a),r(a),m(null)}};return c.a.createElement("section",{className:"item"},c.a.createElement("h2",{className:"item__title"},"Items"),c.a.createElement("form",{method:"GET",className:"item__form",onSubmit:function(e){e.preventDefault();var t=Object(o.a)(d),a={name:u,comments:[]};t.push(a),p(t),r(t),f("")}},c.a.createElement("input",{className:"item__input",type:"text",value:u,placeholder:"Type name here...",onChange:function(e){f(e.target.value)}}),c.a.createElement("button",{className:"item__submit",type:"submit"},"Add new")),c.a.createElement("ul",{className:"item__list"},d.map(function(e,t){return c.a.createElement("li",{className:"item__item",key:t+e.name,onClick:(n=t,function(){return m(a===n?null:n)})},a===t&&c.a.createElement("span",{className:"item__span"}),c.a.createElement("div",{className:"item__left-flex"},c.a.createElement("h3",{className:"item__item-title"},e.name),c.a.createElement("span",{className:"item__comments"},e.comments.length)),c.a.createElement("button",{type:"button",className:"item__delete",onClick:v(t)},"Delete"));var n})))}),u=a(3),f=(a(14),function(e){var t=e.store,a=e.selectedItem,m=e.setStore,r=Object(n.useState)(""),s=Object(l.a)(r,2),i=s[0],f=s[1],E=Object(n.useState)(Object(u.a)({},t[a])),_=Object(l.a)(E,2),d=_[0],p=_[1],v=Object(n.useRef)(null);Object(n.useEffect)(function(){p(Object(u.a)({},t[a]))},[t,a]),Object(n.useEffect)(function(){var e=function(e){if(e.ctrlKey&&13===e.keyCode){var n=Object(u.a)({},d),c={avatar:null,text:i};n.comments.push(c),p(n),f(""),function(){var e=t.slice();e[a]=d,m(Object(o.a)(e))}()}};return v.current&&v.current.addEventListener("keydown",e),function(){v.current&&v.current.removeEventListener("keydown",e)}},[i]);return c.a.createElement(c.a.Fragment,null,t&&null!==a&&c.a.createElement("div",{className:"comment"},c.a.createElement("h2",{className:"comment__title"},"Comments #",d.name),c.a.createElement("ul",{className:"comment__list"},d.comments&&d.comments.map(function(e,t){return c.a.createElement("li",{key:t,className:"comment__item"},c.a.createElement("div",{className:"comment__avatar"}),c.a.createElement("p",{className:"comment__text"},e.text))})),c.a.createElement("div",{className:"flex-container"},c.a.createElement("div",{className:"comment__avatar"}),c.a.createElement("textarea",{className:"comment__field",value:i,ref:v,onChange:function(e){e.preventDefault(),f(e.target.value)}}))))}),E=[],_=function(e){E=e},d=function(){return E};window.addEventListener("load",function(){var e=JSON.parse(window.localStorage.getItem("store"));E=e||[]}),window.addEventListener("beforeunload",function(e){e.preventDefault(),window.localStorage.setItem("store",JSON.stringify(E))});a(15);var p=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],m=t[1],r=Object(n.useState)(null),o=Object(l.a)(r,2),u=o[0],E=o[1];return Object(n.useEffect)(function(){var e=d();m(e)},[]),Object(n.useEffect)(function(){_(a)},[a]),c.a.createElement("main",{className:"app"},c.a.createElement(s,null),c.a.createElement("div",{className:"app__right"},c.a.createElement(i,{store:a,selectedItem:u,setSelectedItem:E,setStore:m}),c.a.createElement(f,{store:a,selectedItem:u,setStore:m})))};a(16);r.a.render(c.a.createElement(p,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.d403e71c.chunk.js.map