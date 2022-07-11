!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("vue"),require("joinclass")):"function"==typeof define&&define.amd?define(["vue","joinclass"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).VuePaginate=t(e.Vue,e.joinclass)}(this,(function(e,t){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,r,o=[],i=!0,l=!1;try{for(a=a.call(e);!(i=(n=a.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{i||null==a.return||a.return()}finally{if(l)throw r}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var r=e.defineComponent({name:"Paginate",props:{totalCount:{required:!0,type:[Number,String]},modelValue:{type:[Number,String],default:function(){return 1}},limit:{type:[Number,String],default:function(){return 10}},section:{type:[Number,String],default:function(){return 5}},type:{type:String,default:function(){return"default"}},labelFirst:{type:String,default:function(){return"|<<"}},labelLast:{type:String,default:function(){return">>|"}},labelBack:{type:String,default:function(){return"<"}},labelForward:{type:String,default:function(){return">"}},showFirstLast:{type:Boolean,default:function(){return!0}},showForwardBack:Boolean,hideFirstLastIfActive:Boolean},emits:["update:modelValue"],data:function(){return{}},mounted:function(){this.fixPageNumber()},watch:{modelValue:function(){this.fixPageNumber()}},computed:{hasData:function(){return!(!this.totalCount||!this.limit)},numberPages:function(){return this.hasData?Math.ceil(+this.totalCount/+this.limit):1},pageData:function(){return this.makePager()},isDefault:function(){return"default"===this.type}},methods:{fixPageNumber:function(){this.modelValue<=0&&this.onChangepage(1),this.modelValue>this.numberPages&&this.onChangepage(this.numberPages)},makePager:function(){var e=this.section,t=this.numberPages,a=this.modelValue;e<3&&(e=3),e>t&&(e=t);var n=a>2,r=+a+ +e<=t+1,o=a>t,i=o||a<=1,l=o||a>=t;if("default"!==this.type)return{showFirst:n,showLast:r,isOverPage:o,disabledFirstBack:i,disabledForwardLast:l};i=(o=o||t<=e)||a<=1,l=o||a>=t;var s=[],u=+a-1;u<=0&&(u=1);var c=u+ +e;c>t&&(u=(c=t+1)-+e);for(var d=u;d<c;d++)s.push(d);return{showFirst:n,showLast:r,isOverPage:o,disabledFirstBack:i,disabledForwardLast:l,arrayNumber:s}},makeFirstLastclass:function(e,a){return t.clsx("paginate-section paginate-section-nav","".concat(!e&&a?"paginate-show":"paginate-hide"),this.hideFirstLastIfActive&&"paginate-hide-now")},makePageclass:function(e){return t.clsx("paginate-numbered",e&&"paginate-numbered-active","paginate-button")},onChangepage:function(e){this.$emit("update:modelValue",e)}}}),o={key:0,class:"paginate-container"},i=["disabled"],l=e.createElementVNode("span",{class:"paginate-ripple"},null,-1),s=["disabled"],u=e.createElementVNode("span",{class:"paginate-ripple"},null,-1),c=e.createElementVNode("span",{class:"paginate-more"},"...",-1),d={class:"paginate-section paginate-section-number"},p=["onClick"],g=e.createElementVNode("span",{class:"paginate-ripple"},null,-1),m=e.createElementVNode("span",{class:"paginate-more"},"...",-1),f=["disabled"],b=e.createElementVNode("span",{class:"paginate-ripple"},null,-1),h=["disabled"],k=e.createElementVNode("span",{class:"paginate-ripple"},null,-1),y={key:1,class:"paginate-container pagination-no-page"},V=["disabled"],N=e.createElementVNode("span",{class:"paginate-ripple"},null,-1),v=["disabled"],w=e.createElementVNode("span",{class:"paginate-ripple"},null,-1),C={class:"pagination-number"},B={class:"pagination-current"},F=e.createElementVNode("div",{class:"pagination-separator"},"/",-1),E={class:"pagination-totals"},S=["disabled"],D=e.createElementVNode("span",{class:"paginate-ripple"},null,-1),P=["disabled"],L=e.createElementVNode("span",{class:"paginate-ripple"},null,-1);r.render=function(t,a,n,r,x,j){return t.isDefault?(e.openBlock(),e.createElementBlock("div",o,[t.showForwardBack?(e.openBlock(),e.createElementBlock("button",{key:0,class:"paginate-button-nav button-previous paginate-button",disabled:t.pageData.disabledFirstBack,onClick:a[0]||(a[0]=function(e){return t.onChangepage(+t.modelValue-1)})},[e.renderSlot(t.$slots,"back",{},(function(){return[e.createTextVNode(e.toDisplayString(t.labelBack),1)]})),l],8,i)):e.createCommentVNode("",!0),t.showFirstLast?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(t.makeFirstLastclass(t.pageData.isOverPage,t.pageData.showFirst))},[e.createElementVNode("button",{class:"paginate-button-first paginate-button",disabled:t.pageData.disabledFirstBack,onClick:a[1]||(a[1]=function(e){return t.onChangepage(1)})},[e.renderSlot(t.$slots,"first",{},(function(){return[e.createTextVNode(e.toDisplayString(t.labelFirst),1)]})),u],8,s),c],2)):e.createCommentVNode("",!0),e.createElementVNode("div",d,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.pageData.arrayNumber,(function(a){return e.openBlock(),e.createElementBlock("button",{key:a,class:e.normalizeClass(t.makePageclass(t.modelValue===a)),onClick:function(e){return t.onChangepage(a)}},[e.createElementVNode("span",null,e.toDisplayString(a),1),g],10,p)})),128))]),t.showFirstLast?(e.openBlock(),e.createElementBlock("div",{key:2,class:e.normalizeClass(t.makeFirstLastclass(t.pageData.isOverPage,t.pageData.showLast))},[m,e.createElementVNode("button",{class:"paginate-button-last paginate-button",disabled:t.pageData.disabledForwardLast,onClick:a[2]||(a[2]=function(e){return t.onChangepage(t.numberPages)})},[e.renderSlot(t.$slots,"last",{},(function(){return[e.createTextVNode(e.toDisplayString(t.labelLast),1)]})),b],8,f)],2)):e.createCommentVNode("",!0),t.showForwardBack?(e.openBlock(),e.createElementBlock("button",{key:3,class:"paginate-button-nav button-forward",disabled:t.pageData.disabledForwardLast,onClick:a[3]||(a[3]=function(e){return t.onChangepage(+t.modelValue+1)})},[e.renderSlot(t.$slots,"forward",{},(function(){return[e.createTextVNode(e.toDisplayString(t.labelForward),1)]})),k],8,h)):e.createCommentVNode("",!0)])):(e.openBlock(),e.createElementBlock("div",y,[t.showFirstLast?(e.openBlock(),e.createElementBlock("button",{key:0,class:"paginate-button-first paginate-button",disabled:t.pageData.disabledFirstBack,onClick:a[4]||(a[4]=function(e){return t.onChangepage(1)})},[e.renderSlot(t.$slots,"first",{},(function(){return[e.createTextVNode(e.toDisplayString(t.labelFirst),1)]})),N],8,V)):e.createCommentVNode("",!0),e.createElementVNode("button",{class:"paginate-button-nav button-previous paginate-button",disabled:t.pageData.disabledFirstBack,onClick:a[5]||(a[5]=function(e){return t.onChangepage(+t.modelValue-1)})},[e.renderSlot(t.$slots,"back",{},(function(){return[e.createTextVNode(e.toDisplayString(t.labelBack),1)]})),w],8,v),e.createElementVNode("div",C,[e.createElementVNode("div",B,e.toDisplayString(t.pageData.isOverPage?t.numberPages:t.modelValue),1),F,e.createElementVNode("div",E,e.toDisplayString(t.numberPages),1)]),e.createElementVNode("button",{class:"paginate-button-nav button-forward",disabled:t.pageData.disabledForwardLast,onClick:a[6]||(a[6]=function(e){return t.onChangepage(+t.modelValue+1)})},[e.renderSlot(t.$slots,"forward",{},(function(){return[e.createTextVNode(e.toDisplayString(t.labelForward),1)]})),D],8,S),t.showFirstLast?(e.openBlock(),e.createElementBlock("button",{key:1,class:"paginate-button-last paginate-button",disabled:t.pageData.disabledForwardLast,onClick:a[7]||(a[7]=function(e){return t.onChangepage(t.numberPages)})},[e.renderSlot(t.$slots,"last",{},(function(){return[e.createTextVNode(e.toDisplayString(t.labelLast),1)]})),L],8,P)):e.createCommentVNode("",!0)]))};var x=Object.freeze({__proto__:null,Paginate:r}),j=function(e){Object.entries(x).forEach((function(t){var n=a(t,2),r=n[0],o=n[1];e.component(r,o)}))},O=Object.freeze({__proto__:null,default:j,Paginate:r});return Object.entries(O).forEach((function(e){var t=a(e,2),n=t[0],r=t[1];"default"!==n&&(j[n]=r)})),j}));