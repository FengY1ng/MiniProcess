(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"1ce9":function(n,e,t){"use strict";var o=t("6f31"),a=t.n(o);a.a},"6f31":function(n,e,t){},7293:function(n,e,t){"use strict";t.r(e);var o=t("caaf"),a=t("f55e");for(var i in a)"default"!==i&&function(n){t.d(e,n,(function(){return a[n]}))}(i);t("1ce9");var r,u=t("f0c5"),s=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"1e2f3efa",null,!1,o["a"],r);e["default"]=s.exports},"755e":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(t("a34a")),a=i(t("509e"));function i(n){return n&&n.__esModule?n:{default:n}}function r(n,e,t,o,a,i,r){try{var u=n[i](r),s=u.value}catch(c){return void t(c)}u.done?e(s):Promise.resolve(s).then(o,a)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(o,a){var i=n.apply(e,t);function u(n){r(i,o,a,u,s,"next",n)}function s(n){r(i,o,a,u,s,"throw",n)}u(void 0)}))}}var s={data:function(){return{username:"",password:"",options:["请选择登录用户类型"],optionsValues:["","gongzuorenyuan","laoren"],index:0}},onLoad:function(){var n=["请选择登录用户类型"],e=a.default.list();this.menuList=e;for(var t=0;t<this.menuList.length;t++)"是"==this.menuList[t].hasFrontLogin&&n.push(this.menuList[t].roleName);this.options=n,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(e){n.setStorageSync("loginTable",e),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var e=this;return u(o.default.mark((function t(){var a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.optionsValues[e.index]){t.next=3;break}return e.$utils.msg("请选择登陆用户类型"),t.abrupt("return");case 3:return t.next=5,e.$api.login("".concat(e.optionsValues[e.index]),{username:e.username,password:e.password});case 5:return a=t.sent,n.setStorageSync("token",a.token),n.setStorageSync("nickname",e.username),n.setStorageSync("nowTable","".concat(e.optionsValues[e.index])),t.next=11,e.$api.session("".concat(e.optionsValues[e.index]));case 11:a=t.sent,n.setStorageSync("userid",a.data.id),n.setStorageSync("role","".concat(e.options[e.index])),e.$utils.tab("../index/index");case 15:case"end":return t.stop()}}),t)})))()},optionsChange:function(n){this.index=n.target.value}}};e.default=s}).call(this,t("543d")["default"])},ad1e:function(n,e,t){"use strict";(function(n){t("3b6f");o(t("66fd"));var e=o(t("7293"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},caaf:function(n,e,t){"use strict";var o;t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return i})),t.d(e,"a",(function(){return o}));var a=function(){var n=this,e=n.$createElement;n._self._c},i=[]},f55e:function(n,e,t){"use strict";t.r(e);var o=t("755e"),a=t.n(o);for(var i in o)"default"!==i&&function(n){t.d(e,n,(function(){return o[n]}))}(i);e["default"]=a.a}},[["ad1e","common/runtime","common/vendor"]]]);