(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Manufacturers"],{"91b2":function(t,a,e){},"9faa":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"table-manufacturers"},[e("a-table",{attrs:{columns:t.columns,"data-source":t.manufacturers,pagination:!1,bordered:""},scopedSlots:t._u([{key:"name",fn:function(a){return[e("span",{staticClass:"table-name"},[t._v(t._s(a))])]}},{key:"operation",fn:function(a,n){return[e("a-button-group",[e("a-button",{attrs:{type:"primary",size:"small"}},[e("router-link",{staticClass:"edit",attrs:{to:"/admin/manufacturers/edit/"+n._id}},[e("a-icon",{attrs:{type:"form"}})],1)],1),e("a-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return t.removeManufacturer(n._id)}}},[e("a-icon",{attrs:{type:"delete"}})],1)],1)]}}])})],1)},r=[],u=(e("d81d"),{data:function(){return{columns:[{title:"Name",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"Operation",dataIndex:"operation",scopedSlots:{customRender:"operation"}}],data:this.manufacturers}},created:function(){0===this.manufacturers.length&&this.$store.dispatch("allManufacturers")},computed:{manufacturers:function(){return this.$store.getters.allManufacturers.map((function(t,a){var e=t;return e.key="'".concat(a,"'"),e}))}},methods:{removeManufacturer:function(t){var a=confirm("是否删除此制造商？");a&&this.$store.dispatch("removeManufacturer",{manufacturerId:t})}}}),s=u,o=(e("ba6b"),e("2877")),c=Object(o["a"])(s,n,r,!1,null,null,null);a["default"]=c.exports},ba6b:function(t,a,e){"use strict";var n=e("91b2"),r=e.n(n);r.a}}]);
//# sourceMappingURL=Manufacturers.3e38e0e5.js.map