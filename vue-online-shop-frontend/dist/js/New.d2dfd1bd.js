(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["New"],{"5db7":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("product-form",{attrs:{model:t.model,manufacturers:t.manufacturers},on:{"save-product":t.addProduct}})},u=[],a=(n("d3b7"),{data:function(){return{model:{manufacturer:{name:""}}}},created:function(){0===this.manufacturers.length&&this.$store.dispatch("allManufacturers")},computed:{manufacturers:function(){return this.$store.getters.allManufacturers}},methods:{addProduct:function(t){this.$store.dispatch("addProduct",{product:t})}},components:{"product-form":function(){return n.e("chunk-3f6f8533").then(n.bind(null,"1d20"))}}}),c=a,o=n("2877"),d=Object(o["a"])(c,e,u,!1,null,null,null);r["default"]=d.exports}}]);
//# sourceMappingURL=New.d2dfd1bd.js.map