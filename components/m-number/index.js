!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.muiMNumber=t():e.muiMNumber=t()}(this,function(){return function(e){function t(s){if(i[s])return i[s].exports;var n=i[s]={exports:{},id:s,loaded:!1};return e[s].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){e.exports=i(4)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={ready:function(){var e=this.$parent.$el;e.className.indexOf("mui-group-item")>-1&&-1===e.className.indexOf("mui-group-item-number")&&(e.className+=" mui-group-item-number")},props:{width:{type:Number,"default":50},step:{type:Number,"default":1},placeholder:String,value:{type:Number,"default":0},min:Number,max:Number,disabled:{type:Boolean,"default":!1},disabledDecrease:{type:Boolean,"default":!1},disabledIncrease:{type:Boolean,"default":!1},onIncrease:Function,onDecrease:Function},watch:{value:function(e,t){e>this.max&&(this.value=this.max),e<this.min&&(this.value=this.min)}},computed:{checkDisabledDecr:function(){return this.disabledDecrease||this.value<=this.min},checkDisabledIncr:function(){return this.disabledIncrease||this.value>=this.max}},methods:{decrease:function(){this.checkDisabledDecr||(this.value-=this.step,this.onDecrease&&this.onDecrease(this.value),this.$dispatch("mui-change",this.value))},increase:function(){this.checkDisabledIncr||(this.value+=this.step,this.onIncrease&&this.onIncrease(this.value),this.$dispatch("mui-change",this.value))},handlerBlur:function(){this.$dispatch("blur",this.value)}},data:function(){return{}}}},function(e,t){},function(e,t){e.exports="<div class=mui-number> <span @click=decrease() :class=\"['mui-number-decrease', {\n    'mui-number-disabled': checkDisabledDecr\n  }]\">-</span> <input number v-model=value class=mui-number-input :style=\"{width: width+'px'}\" pattern=[0-9]* :disabled=disabled :placeholder=placeholder @blur=handlerBlur /> <span @click=increase() :class=\"['mui-number-increase', {\n    'mui-number-disabled': checkDisabledIncr\n  }]\">+</span> </div>"},function(e,t,i){var s,n;i(2),s=i(1),n=i(3),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)}])});