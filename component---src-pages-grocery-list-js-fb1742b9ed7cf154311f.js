(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{DYqz:function(e,t,n){"use strict";n.r(t);n("XfO3"),n("HEwt"),n("a1Th"),n("Btvt"),n("rE2o"),n("ioFf"),n("rGqo"),n("Z2Ku"),n("L9s1"),n("91GP");var a=n("q1tI"),r=n.n(a),c=n("/MKj"),i=n("FeNT"),s=n("WlAH"),l=n("VSEU"),o=n("Bl7J"),u=n("Kvkj");n("3via");function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g=function(e){var t=e.listItem,n=e.onChange,a=e.handleDelete,c=t.quantity,i=t.unit,l=t.item,o=t.id,m=function(e,a){var r;n(Object.assign({},t,((r={})[e]=a,r)))};return r.a.createElement("div",{className:"sage-grocery-list-item",key:o},r.a.createElement(u.e,{type:"number",size:"small",className:"sage-item-line-quantity",value:c,onChange:function(e){return m("quantity",e)}}),r.a.createElement(u.c,{className:"sage-item-line-unit",options:s.b,selected:i,onChange:function(e){return m("unit",e)},isSearchable:!0,placeholder:"unit"}),r.a.createElement(u.e,{size:"small",className:"sage-item-line",value:l,onChange:function(e){return m("item",e)}}),r.a.createElement(u.b,{onClick:a}))};t.default=function(){var e=Object(c.c)((function(e){return e.grocery})),t=Object(a.useState)(Object(l.a)(e)),n=t[0],d=t[1],b=Object(c.b)(),f=Object(a.useState)(0),y=f[0],v=f[1],E=Object(a.useState)(""),p=E[0],h=E[1],j=Object(a.useState)(!1),N=j[0],O=j[1],C=Object(a.useState)(!1),w=C[0],S=C[1],k=Object(a.useState)(!1),A=k[0],q=k[1];return r.a.createElement(o.a,null,r.a.createElement("div",{className:"sage-grocery-list-container"},r.a.createElement("div",{className:"sage-grocery-list"},r.a.createElement("div",{className:"sage-grocery-list--heading"},"Grocery list"),n.map((function(e,t){return r.a.createElement(g,{key:e.id,listItem:e,handleDelete:function(){return function(e){var t=n.splice(0);d(t),t.splice(e,1);Object(l.b)(t);S(!0)}(t)},onChange:function(e){return function(e,t){var a=n.splice(0);a[e]=t,d(a);Object(l.b)(a);S(!0)}(t,e)}})})),r.a.createElement("div",{className:"sage-grocery-list-button-container"},r.a.createElement(u.a,{className:"sage-grocery-list--add",type:"secondary",onClick:function(){return function(e){var t=m(n);t.push(e),d(t);Object(l.b)(t);S(!0)}({quantity:0,unit:s.a.NA,item:"item"})}},"+ Add item"),w&&r.a.createElement(u.a,{className:"sage-grocery-list--save",onClick:function(){b(Object(i.b)(n)),S(!1)}},"Save"))),r.a.createElement(u.a,{className:"sage-list--send",onClick:function(){w?q(!0):v(1)}},"Send grocery list")),r.a.createElement(u.f,{title:"Send your grocery list",onClose:function(){return v(0)},size:"small",isOpen:y>0},1===y?r.a.createElement("div",null,r.a.createElement(u.e,{size:"small",className:"sage-list-send-input",label:"Email",onChange:function(e){h(e),O(!1)}}),N&&r.a.createElement("p",{className:"sage-list--error"},"Please enter a valid email"),r.a.createElement(u.a,{className:"sage-list--send-button",onClick:function(){p.includes("@")?v(2):O(!0)}},"Send")):r.a.createElement("p",{className:"sage-list--sent"},"Your grocery list has been sent! Please check your inbox.")),r.a.createElement(u.f,{size:"small",warning:!0,isOpen:A,onClose:function(){return q(!1)},title:"Are you sure?"},"Your recent changes have not been saved. Are you sure you want to send the outdated list?",r.a.createElement("div",{className:"sage-recipes--warning-modal"},r.a.createElement(u.a,{className:"sage-recipes--modal-button",onClick:function(){return q(!1),void v(1)}},"Continue without saving"),r.a.createElement(u.a,{type:"secondary",onClick:function(){return q(!1)}},"Cancel"))))}}}]);
//# sourceMappingURL=component---src-pages-grocery-list-js-fb1742b9ed7cf154311f.js.map