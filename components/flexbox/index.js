!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.muiFlexbox=t():e.muiFlexbox=t()}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(5)},function(e,t){"use strict";function o(e,t){var o=document.createElement("div");o.style.cssText=r(e),s[t]=!!o.style.length,n.className+=" "+(s[t]?"":"no-")+t}function r(e){for(var t="",o=0;o<l.length;o++)t+=l[o]+e;return t}Object.defineProperty(t,"__esModule",{value:!0});var n=document.documentElement,l=["-webkit-","-moz-","-ms-","-o-",""],s={};o("flex-basis: 1px;","flexbox"),o("box-direction: reverse;","flexboxlegacy"),o("flex-align: end;","flexboxtweener"),o("flex-wrap: wrap;","flexwrap"),s.flex=s.flexbox,s.legacy=s.flexboxlegacy,s.tweener=s.flexboxtweener,s.wrap=s.flexwrap,t["default"]=s},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),l=r(n);t["default"]={created:function(){this.supported=l["default"].flex},ready:function(){this.supported||(this.$el.classList.remove("mui-flexbox"),this.$el.classList.add("mui-flexbox--unsupport"))},props:{marginLeft:{type:Number,"default":8},orient:{type:String,"default":"horizontal"}}}},function(e,t){},function(e,t){e.exports="<div class=mui-flexbox :class=\"{'flex-col': orient == 'vertical', 'flex-row': orient == 'horizontal'}\"> <slot></slot> </div>"},function(e,t,o){var r,n;o(3),r=o(2),n=o(4),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)}])});