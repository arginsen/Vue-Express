(function(e){function t(t){for(var a,r,o=t[0],s=t[1],d=t[2],f=0,i=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&i.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(i.length)i.shift()();return u.push.apply(u,d||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==c[o]&&(a=!1)}a&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c={app:0},u=[];function o(e){return s.p+"js/"+({Admin:"Admin",Cart:"Cart",Detail:"Detail",Edit:"Edit",EditManufacturers:"EditManufacturers",Manufacturers:"Manufacturers",New:"New",NewManufacturers:"NewManufacturers",Products:"Products"}[e]||e)+"."+{Admin:"f263ab24",Cart:"17335248",Detail:"62f92dd7",Edit:"74aa48fc",EditManufacturers:"2783af72",Manufacturers:"3e38e0e5",New:"d2dfd1bd",NewManufacturers:"818f6e8a",Products:"d4553e0c","chunk-4745f00d":"3c6260ac","chunk-8a28d54c":"ea3b8d71","chunk-65430b68":"a4f58065","chunk-34f8e08d":"3e29a24f","chunk-2d0b64c7":"ac4d70d1","chunk-2d0af4f7":"02e3cb20","chunk-3f6f8533":"90f4d359","chunk-72929303":"07ee3434"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={Admin:1,Cart:1,Manufacturers:1,Products:1,"chunk-4745f00d":1,"chunk-8a28d54c":1,"chunk-65430b68":1,"chunk-34f8e08d":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({Admin:"Admin",Cart:"Cart",Detail:"Detail",Edit:"Edit",EditManufacturers:"EditManufacturers",Manufacturers:"Manufacturers",New:"New",NewManufacturers:"NewManufacturers",Products:"Products"}[e]||e)+"."+{Admin:"562a2007",Cart:"57f7280f",Detail:"31d6cfe0",Edit:"31d6cfe0",EditManufacturers:"31d6cfe0",Manufacturers:"6c01ea51",New:"31d6cfe0",NewManufacturers:"31d6cfe0",Products:"6e6e77df","chunk-4745f00d":"824ee943","chunk-8a28d54c":"9e7b195d","chunk-65430b68":"a2d75da4","chunk-34f8e08d":"19ca896e","chunk-2d0b64c7":"31d6cfe0","chunk-2d0af4f7":"31d6cfe0","chunk-3f6f8533":"31d6cfe0","chunk-72929303":"31d6cfe0"}[e]+".css",c=s.p+a,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var d=u[o],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===a||f===c))return t()}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){d=i[o],f=d.getAttribute("data-href");if(f===a||f===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete r[e],l.parentNode.removeChild(l),n(u)},l.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(l)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var u=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=u);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=o(e);var i=new Error;d=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",i.name="ChunkLoadError",i.type=a,i.request=r,n[1](i)}c[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:f})}),12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=t,d=d.slice();for(var i=0;i<d.length;i++)t(d[i]);var l=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("7bb1"),c=n("f23d"),u=(n("202f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("a-menu",{staticClass:"menu",attrs:{mode:"horizontal"}},[n("a-menu-item",{key:"1"},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("a-menu-item",{key:"2"},[n("router-link",{attrs:{to:"/cart"}},[e._v("Cart")])],1),n("a-sub-menu",{key:"3"},[n("span",{attrs:{slot:"title"},slot:"title"},[e._v("Admin")]),n("a-menu-item",{key:"3a"},[n("router-link",{attrs:{to:"/admin"}},[e._v("查看商品")])],1),n("a-menu-item",{key:"3b"},[n("router-link",{attrs:{to:"/admin/new"}},[e._v("添加商品")])],1),n("a-menu-item",{key:"3c"},[n("router-link",{attrs:{to:"/admin/manufacturers"}},[e._v("查看生产商")])],1),n("a-menu-item",{key:"3d"},[n("router-link",{attrs:{to:"/admin/manufacturers/new"}},[e._v("添加生产商")])],1)],1)],1),n("router-view")],1)}),o=[],s={name:"App",methods:{handleSelect:function(e,t){console.log(e,t)}}},d=s,f=(n("034f"),n("2877")),i=Object(f["a"])(d,u,o,!1,null,null,null),l=i.exports,m=(n("d3b7"),n("8c4f")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"container"},[n("product-carousel"),n("product-list")],1),e._m(0)])},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("span",{staticStyle:{display:"block"}},[e._v("© 2020 淘机客 中国互联网举报中心")]),e._v(" 京ICP证1401号京ICP备125439号-3京公网安备 ")])}],h={name:"Home",data:function(){return{msg:"Welcome to the Home Page"}},components:{"product-carousel":function(){return n.e("chunk-4745f00d").then(n.bind(null,"0d43"))},"product-list":function(){return n.e("chunk-8a28d54c").then(n.bind(null,"b5e1"))}}},p=h,v=(n("cccb"),Object(f["a"])(p,b,j,!1,null,null,null)),_=v.exports;a["a"].use(m["a"]);var k,w,g,O=[{path:"/",name:"Home",component:_},{path:"/cart",name:"Cart",component:function(){return n.e("Cart").then(n.bind(null,"b789"))}},{path:"/detail/:id",name:"Detail",component:function(){return n.e("Detail").then(n.bind(null,"c84b"))}},{path:"/admin",name:"Admin",component:function(){return n.e("Admin").then(n.bind(null,"0a09"))},children:[{path:"new",name:"New",component:function(){return n.e("New").then(n.bind(null,"5db7"))}},{path:"",name:"Products",component:function(){return n.e("Products").then(n.bind(null,"d416"))}},{path:"edit/:id",name:"Edit",component:function(){return n.e("Edit").then(n.bind(null,"9213"))}},{path:"manufacturers",name:"Manufacturers",component:function(){return n.e("Manufacturers").then(n.bind(null,"9faa"))}},{path:"manufacturers/new",name:"NewManufacturers",component:function(){return n.e("NewManufacturers").then(n.bind(null,"0ded"))}},{path:"manufacturers/edit/:id",name:"EditManufacturers",component:function(){return n.e("EditManufacturers").then(n.bind(null,"7b3c"))}}]}],C=new m["a"]({mode:"history",base:"/",routes:O}),E=C,y=n("5530"),M=n("2f62"),A=(n("4de4"),{allProducts:function(e){return e.products},productById:function(e,t){return function(n){return t.allProducts.length>0?t.allProducts.filter((function(e){return e._id===n}))[0]:e.product}}}),U={allManufacturers:function(e){return e.manufacturers},manufacturerById:function(e,t){return function(n){return t.allManufacturers.length>0?t.allManufacturers.filter((function(e){return e._id===n}))[0]:e.manufacturer}}},P=(n("99af"),n("d81d"),n("ade3")),S="ADD_TO_CART",D="REMOVE_FROM_CART",R="ALL_PRODUCTS",T="ALL_PRODUCTS_SUCCESS",L="PRODUCT_BY_ID",N="PRODUCT_BY_ID_SUCCESS",z="ADD_PRODUCT",I="ADD_PRODUCT_SUCCESS",F="UPDATE_PRODUCT",x="UPDATE_PRODUCT_SUCCESS",B="REMOVE_PRODUCT",V="REMOVE_PRODUCT_SUCCESS",H="ALL_MANUFACTURER",q="ALL_MANUFACTURER_S",Y="MANUFACTURER_BY_ID",$="MANUFACTURER_BY_ID_SUCCESS",J="ADD_MANUFACTURER",K="ADD_MANUFACTURER_SUCCESS",W="UPDATE_MANUFACTURER",G="UPDATE_MANUFACTURER_SUCCESS",Q="REMOVE_MANUFACTURER",X="REMOVE_MANUFACTURER_SUCCESS",Z=(k={},Object(P["a"])(k,S,(function(e,t){var n=t.product;e.cart.push(n)})),Object(P["a"])(k,D,(function(e,t){var n=t.productId;e.cart=e.cart.filter((function(e){return e._id!==n}))})),k),ee=(w={},Object(P["a"])(w,R,(function(e){e.showLoader=!0})),Object(P["a"])(w,T,(function(e,t){var n=t.products;e.showLoader=!1,e.products=n})),Object(P["a"])(w,L,(function(e){e.showLoader=!0})),Object(P["a"])(w,N,(function(e,t){e.showLoader=!1;var n=t.product;e.product=n})),Object(P["a"])(w,B,(function(e){e.showLoader=!0})),Object(P["a"])(w,V,(function(e,t){e.showLoader=!1;var n=t.productId;e.products=e.products.filter((function(e){return e._id!==n}))})),Object(P["a"])(w,F,(function(e){e.showLoader=!0})),Object(P["a"])(w,x,(function(e,t){e.showLoader=!1;var n=t.product;e.product=n,e.products=e.products.map((function(e){return e._id===n._id?n:e}))})),Object(P["a"])(w,z,(function(e){e.showLoader=!0})),Object(P["a"])(w,I,(function(e,t){e.showLoader=!1;var n=t.product;e.products=e.products.concat(n)})),w),te=(g={},Object(P["a"])(g,H,(function(e){e.showLoader=!0})),Object(P["a"])(g,q,(function(e,t){var n=t.manufacturers;e.showLoader=!1,e.manufacturers=n})),Object(P["a"])(g,Y,(function(e){e.showLoader=!0})),Object(P["a"])(g,$,(function(e,t){e.showLoader=!1;var n=t.manufacturer;e.manufacturer=n})),Object(P["a"])(g,Q,(function(e){e.showLoader=!0})),Object(P["a"])(g,X,(function(e,t){e.showLoader=!1;var n=t.manufacturerId;e.manufacturers=e.manufacturers.filter((function(e){return e._id!==n}))})),Object(P["a"])(g,W,(function(e){e.showLoader=!0})),Object(P["a"])(g,G,(function(e,t){e.showLoader=!1;var n=t.manufacturer;e.manufacturers=e.manufacturers.map((function(e){return e._id===n._id?n:e}))})),Object(P["a"])(g,J,(function(e){e.showLoader=!0})),Object(P["a"])(g,K,(function(e,t){e.showLoader=!1;var n=t.manufacturer;e.manufacturers=e.manufacturers.concat(n)})),g),ne=n("bc3a"),ae=n.n(ne),re="http://127.0.0.1:3000/api/v1",ce={allProducts:function(e){var t=e.commit;t(R),ae.a.get("".concat(re,"/products")).then((function(e){console.log("response",e),t(T,{products:e.data})}))},productById:function(e,t){var n=e.commit;n(L);var a=t.productId;ae.a.get("".concat(re,"/products/").concat(a)).then((function(e){n(N,{product:e.data})}))},removeProduct:function(e,t){var n=e.commit;n(B);var a=t.productId;ae.a.delete("".concat(re,"/products/").concat(a)).then((function(){n(V,{productId:a})}))},updateProduct:function(e,t){var n=e.commit;n(F);var a=t.product;ae.a.put("".concat(re,"/products/").concat(a._id),a).then((function(){n(x,{product:a})}))},addProduct:function(e,t){var n=e.commit;n(z);var a=t.product;ae.a.post("".concat(re,"/products"),a).then((function(e){n(I,{product:e.data})}))}},ue={allManufacturers:function(e){var t=e.commit;t(H),ae.a.get("".concat(re,"/manufacturers")).then((function(e){console.log("response",e),t(q,{manufacturers:e.data})}))},manufacturerById:function(e,t){var n=e.commit;n(Y);var a=t.manufacturerId;ae.a.get("".concat(re,"/manufacturers/").concat(a)).then((function(e){n($,{manufacturer:e.data})}))},removeManufacturer:function(e,t){var n=e.commit;n(Q);var a=t.manufacturerId;ae.a.delete("".concat(re,"/manufacturers/").concat(a)).then((function(){n(X,{manufacturerId:a})}))},updateManufacturer:function(e,t){var n=e.commit;n(W);var a=t.manufacturer;ae.a.put("".concat(re,"/manufacturers/").concat(a._id),a).then((function(){n(G,{manufacturer:a})}))},addManufacturer:function(e,t){var n=e.commit;n(J);var a=t.manufacturer;ae.a.post("".concat(re,"/manufacturers"),a).then((function(e){n(K,{manufacturer:e.data})}))}};a["a"].use(M["a"]);var oe=new M["a"].Store({strict:!0,state:{cart:[],showLoader:!1,product:{},products:[],manufacturers:[]},mutations:Object(y["a"])(Object(y["a"])(Object(y["a"])({},ee),Z),te),getters:Object(y["a"])(Object(y["a"])({},A),U),actions:Object(y["a"])(Object(y["a"])({},ce),ue)});a["a"].config.productionTip=!1,a["a"].use(c["a"]),a["a"].component("ValidationProvider",r["a"]),new a["a"]({router:E,store:oe,render:function(e){return e(l)}}).$mount("#app")},"5ced":function(e,t,n){},"85ec":function(e,t,n){},cccb:function(e,t,n){"use strict";var a=n("5ced"),r=n.n(a);r.a}});
//# sourceMappingURL=app.1cadc66b.js.map