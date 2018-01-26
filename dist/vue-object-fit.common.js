module.exports=function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=1)}([function(module,exports,__webpack_require__){__webpack_require__(3);var Component=__webpack_require__(4)(__webpack_require__(2),__webpack_require__(5),null,null);module.exports=Component.exports},function(module,__webpack_exports__,__webpack_require__){"use strict";function install(Vue){Vue.component("ObjectFitComponent",__WEBPACK_IMPORTED_MODULE_0__components_ObjectFitComponent_vue___default.a)}Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.install=install;var __WEBPACK_IMPORTED_MODULE_0__components_ObjectFitComponent_vue__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0__components_ObjectFitComponent_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_ObjectFitComponent_vue__);__webpack_require__.d(__webpack_exports__,"ObjectFitComponent",function(){return __WEBPACK_IMPORTED_MODULE_0__components_ObjectFitComponent_vue___default.a});var plugin={version:"1.0.4",install:install};__webpack_exports__.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:"undefined"!=typeof global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.default={name:"vue-object-fit",props:{url:{type:String,required:!0},title:{type:String,default:""},titleId:{type:String,default:function(){return"title_"+Math.random().toString(36).substr(2,9)}},align:{type:String,default:"xMidYMid"},meetOrSlice:{type:String,default:"slice"},width:{type:String,default:"100%"},height:{type:String,default:"100%"},imgWidth:{type:Number,default:"100%"},imgHeight:{type:Number,default:"100%"}}}},function(module,exports){},function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("svg",{attrs:{width:_vm.width,height:_vm.height,viewBox:"0 0 "+_vm.imgWidth+" "+_vm.imgHeight,preserveAspectRatio:_vm.align+" "+_vm.meetOrSlice,"aria-labelledby":_vm.titleId,"aria-role":"img"}},[_c("title",{attrs:{id:_vm.titleId},domProps:{innerHTML:_vm._s(_vm.title)}}),_vm._v(" "),_c("image",{attrs:{"xlink:href":_vm.url,width:"100%",height:"100%"}})])},staticRenderFns:[]}}]);