(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){},38:function(e,t,a){e.exports=a(68)},43:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"productState",function(){return v}),a.d(n,"cartState",function(){return w});var c=a(0),r=a.n(c),o=a(13),l=a.n(o),u=(a(43),a(16)),i=a(8),s=a(14),m=a.n(s),d=a(11),p=a(7),E="cart/GET_PRODUCTS",f={products:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(d.a)({},e,{products:t.payload});default:return e}};function h(){var e=Object(p.b)(),t=Object(p.c)(function(e){return e.productState.products});return Object(c.useEffect)(function(){e(function(e){m.a.get("/products").then(function(t){e({type:E,payload:t.data})})})},[]),{products:t}}var g=a(37),b=a(21),O="cart/ADD_ITEM",j="cart/DEL_ITEM",k="cart/GET_STATUS",y={cart:[],open:!1},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(d.a)({},e,{cart:[].concat(Object(b.a)(e.cart),[t.payload])});case k:return Object(d.a)({},e,{open:!e.open});case j:return Object(d.a)({},e,{cart:Object(b.a)(e.cart.filter(function(e){return e!==t.payload}))});default:return e}};function N(){var e=Object(p.b)(),t=Object(p.c)(function(e){return e.cartState.cart}),a=Object(p.c)(function(e){return e.cartState.open}),n=Object(c.useState)(""),r=Object(g.a)(n,2),o=r[0],l=r[1];return Object(c.useEffect)(function(){var e=t.reduce(function(e,t){return e+t.price},0);l(e.toFixed(2))},[t]),{cart:t,add:function(t){return e(function(e){return function(t){t({type:O,payload:e})}}(t))},status:a,toggle:function(){return e({type:k})},del:function(t){return e(function(e){return function(t){t({type:j,payload:e})}}(t))},total:o}}var T=function(e){var t=h().products,a=N().add;return r.a.createElement("div",null,r.a.createElement("h1",null,"Logan-Code-LV's Ecommerce Application Prototype"),r.a.createElement("div",{className:"header"},r.a.createElement("h6",null,"16 Prodct(s) found.")),r.a.createElement("div",{class:"sort"},r.a.createElement("h5",null," Order by"),r.a.createElement("select",{name:"sort"},r.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Select"),r.a.createElement("option",{value:"other"},"Highest to Lowest"),r.a.createElement("option",{value:"space"},"Lowest to Highest"))),r.a.createElement("div",{className:"products"},t.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("img",{src:"/assets/".concat(e.sku,"_1.jpg")}),r.a.createElement("p",null,e.title),r.a.createElement("p",null,"$",e.price.toFixed(2)),r.a.createElement("button",{onClick:function(t){return a(e)},className:"addtocart"},"Add to cart"))})))},_=(a(32),a(34)),S=a.n(_),C=function(e){var t=N(),a=t.cart,n=(t.toggle,t.status,t.del),c=t.total;return r.a.createElement("div",null,r.a.createElement(S.a,{trigger:"Click to View Your Cart"},r.a.createElement("div",{className:"cartHeading"},r.a.createElement("p",{className:"cartTitle"},a.length," item(s) are in your cart")),a.map(function(e){return r.a.createElement("div",{class:"itemincart",key:e.id},r.a.createElement("img",{className:"cartimg",src:"/assets/".concat(e.sku,"_2.jpg")}),r.a.createElement("p",null,e.title),r.a.createElement("p",null,"$",e.price.toFixed(2)),r.a.createElement("button",{class:"cancel",onClick:function(t){return n(e)}},"X"))}),r.a.createElement("div",{className:"total"},r.a.createElement("h3",null," Total: $",c)),r.a.createElement("div",{className:"cartCheckout"},r.a.createElement("button",{class:!0},r.a.createElement(u.b,{to:"checkout"},r.a.createElement("p",{class:"checkoutbutton"},"CHECKOUT"))))))},x=function(e){var t=N(),a=t.cart,n=(t.toggle,t.isOpen,t.del),c=t.total;t.checkout;return r.a.createElement("div",null,r.a.createElement("h4",null,"Thank you for shopping with us"),a.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("img",{className:"cartimg",src:"/assets/".concat(e.sku,"_2.jpg")}),r.a.createElement("p",null,e.title),r.a.createElement("p",null,"$",e.price.toFixed(2)),r.a.createElement("button",{onClick:function(t){return n(e)}},"X"))}),r.a.createElement("div",{className:"total"},r.a.createElement("h3",null," Total: $",c)))};a(66),a(67),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(10),L=a(36),$=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.d,A=Object(D.c)(n),F=$(Object(D.a)(L.a)),H=Object(D.e)(A,F);l.a.render(r.a.createElement(p.a,{store:H},r.a.createElement(function(e){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"products"},r.a.createElement(i.a,{exact:!0,path:"/",component:T})),r.a.createElement("div",{className:"cart"},r.a.createElement(i.a,{exact:!0,path:"/",component:C})),r.a.createElement("div",{class:"checkout"},r.a.createElement(i.a,{path:"/checkout",component:x}))))},null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.a512cecb.chunk.js.map