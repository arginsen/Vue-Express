(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0af4f7"],{"0e7c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-form-model",{ref:"ruleForm",attrs:{model:e.modelData,rules:e.rules,"label-col":e.labelCol,"wrapper-col":e.wrapperCol}},[a("a-form-model-item",{attrs:{label:"Name",prop:"name"}},[a("a-input",{attrs:{placeholder:"please input product name"},model:{value:e.modelData.name,callback:function(t){e.$set(e.modelData,"name",t)},expression:"modelData.name"}})],1),a("a-form-model-item",{attrs:{"wrapper-col":{span:10,offset:7}}},[e.isEditing?a("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(" Update ")]):a("a-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v(" Create ")]),a("a-button",{staticStyle:{"margin-left":"10px"},on:{click:e.resetForm}},[e._v(" Reset ")])],1)],1)},o=[],n=(a("b0c0"),a("5530")),l={data:function(){return{modelData:{},labelCol:{span:4,offset:4},wrapperCol:{span:10},rules:{name:[{required:!0,message:"Please input validate name",trigger:"blur"},{min:2,max:15,trigger:"blur",message:"Length should be 2 to 15"}]}}},props:["model","isEditing"],created:function(){var e=this.model;this.modelData=Object(n["a"])({},e)},watch:{model:function(e){this.modelData=e}},methods:{onSubmit:function(){var e=this;this.$refs.ruleForm.validate((function(t){return!!t&&(e.$emit("save-manufacturer",e.modelData),e.$message.loading("Action in progress..",1).then((function(){return e.$message.success("Loading finished",2.5)})),!0)}))},resetForm:function(){"EditManufacturers"===this.$route.name?this.modelData=Object(n["a"])({},this.model):this.$refs.ruleForm.resetFields()}}},s=l,i=a("2877"),m=Object(i["a"])(s,r,o,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0af4f7.02e3cb20.js.map