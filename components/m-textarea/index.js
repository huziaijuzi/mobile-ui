!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxMTextarea=t():e.vuxMTextarea=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(5)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{required:{type:Boolean,"default":!0}},created:function(){this.uuid=Math.random().toString(36).substring(3,8),this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(e){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$dispatch("change",e)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(1),r=n(i);t["default"]={minxins:[r["default"]],components:{},props:{showCounter:{type:Boolean,"default":!0},max:{type:Number},value:{type:String,"default":""},placeholder:{type:String,"default":""}},watch:{value:function(e){this.max&&this.value.length>this.max&&(this.value=e.slice(0,this.max)),this.$dispatch("change",this.value)}},computed:{count:function(){return this.value.length}},data:function(){return{}}}},function(e,t){},function(e,t){e.exports='<div class=mui-group-item> <div class="mui-group-item-bd mui-group-item-primary"> <textarea class=mui-textarea placeholder={{placeholder}} rows=3 v-model=value></textarea> <div class=mui-textarea-counter v-show="showCounter && max"><span>{{count}}</span>/{{max}}</div> </div> </div>'},function(e,t,o){var n,i;o(3),n=o(2),i=o(4),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}])});