!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.muiMHeader=t():e.muiMHeader=t()}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var s=o[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(11)},function(e,t){"use strict";function o(e,t){var o=document.createElement("div");o.style.cssText=r(e),n[t]=!!o.style.length,s.className+=" "+(n[t]?"":"no-")+t}function r(e){for(var t="",o=0;o<l.length;o++)t+=l[o]+e;return t}Object.defineProperty(t,"__esModule",{value:!0});var s=document.documentElement,l=["-webkit-","-moz-","-ms-","-o-",""],n={};o("flex-basis: 1px;","flexbox"),o("box-direction: reverse;","flexboxlegacy"),o("flex-align: end;","flexboxtweener"),o("flex-wrap: wrap;","flexwrap"),n.flex=n.flexbox,n.legacy=n.flexboxlegacy,n.tweener=n.flexboxtweener,n.wrap=n.flexwrap,t["default"]=n},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(1),l=r(s);t["default"]={created:function(){this.supported=l["default"].flex},ready:function(){this.supported&&(this.$el.classList.remove("mui-flexbox"),this.$el.classList.add("mui-flexbox--unsupport"))},props:{marginLeft:{type:Number,"default":8},orient:{type:String,"default":"horizontal"}}}},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(10),l=r(s),n=o(9),i=r(n);t["default"]={components:{Flexbox:l["default"],FlexboxItem:i["default"]},props:{title:{type:String},backText:{type:String},backCb:{type:Function}},methods:{handlerBackClick:function(){this.backCb?this.backCb():window.history.back()}}}},function(e,t){},function(e,t){},function(e,t){e.exports="<div class=mui-flexbox-item :style=\"{marginLeft: $parent.supported ? $parent.marginLeft + 'px' : 0}\"> <slot></slot> </div>"},function(e,t){e.exports="<div class=mui-flexbox :class=\"{'flex-col': orient == 'vertical', 'flex-row': orient == 'horizontal'}\"> <slot></slot> </div>"},function(e,t){e.exports="<flexbox class=mui-header :margin-left=0> <flexbox-item class=mui-header-left> <slot name=left> <div class=mui-header-back @click=handlerBackClick()> {{ backText }} </div> </slot> </flexbox-item> <flexbox-item class=mui-header-middle> <slot> <h1 class=mui-header-title> {{ title }} </h1> </slot> </flexbox-item> <flexbox-item class=mui-header-right> <slot name=right></slot> </flexbox-item> </flexbox>"},function(e,t,o){var r,s;s=o(6),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var r,s;o(5),r=o(2),s=o(7),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var r,s;o(4),r=o(3),s=o(8),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)}])});