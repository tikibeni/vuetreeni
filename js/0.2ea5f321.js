(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{"713b":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{attrs:{view:"lHh Lpr lFf"}},[o("q-header",{attrs:{elevated:""}},[o("q-toolbar",{staticClass:"toolbar-color"},[o("q-btn",{staticClass:"hl-color-1",on:{click:function(e){return t.changeLanguage()}}},[t._v(" "+t._s(t.$t("lang"))+" ")]),o("div",{staticStyle:{position:"absolute",left:"50%",top:"4px",cursor:"pointer"},on:{click:function(e){return t.goToRoot()}}},[o("div",{staticStyle:{position:"relative",left:"-50%"}},[o("IconText",{staticClass:"hl-color-1",attrs:{size:"30",icon:"mug-hot"}},[t._v("Benjamin Blinnikka")])],1)]),o("q-space"),o("ToolbarButton",{attrs:{"button-name":t.$t("contacts"),"link-to":"/contacts"}})],1)],1),o("q-page-container",[o("router-view")],1)],1)},r=[],c=o("60a3"),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("q-btn",{staticClass:"hl-color-1",attrs:{flat:""},on:{click:t.buttonPressed}},[t._v("\n    "+t._s(t.ButtonName)+"\n  ")])],1)},a=[],i=o("2b0e"),s=o("2fe1"),u=function(t,e,o,n){var r,c=arguments.length,l=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(l=(c<3?r(l):c>3?r(e,o,l):r(e,o))||l);return c>3&&l&&Object.defineProperty(e,o,l),l};let f=class extends i["a"]{buttonPressed(){this.$router.currentRoute.fullPath!==this.linkTo&&this.$router.push(this.linkTo)}};u([Object(c["b"])({required:!0})],f.prototype,"ButtonName",void 0),u([Object(c["b"])({required:!0})],f.prototype,"linkTo",void 0),f=u([Object(s["b"])({})],f);var p=f,b=p,d=o("2877"),h=Object(d["a"])(b,l,a,!1,null,"0e74f882",null),v=h.exports,g=o("8ea6"),y=function(t,e,o,n){var r,c=arguments.length,l=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(l=(c<3?r(l):c>3?r(e,o,l):r(e,o))||l);return c>3&&l&&Object.defineProperty(e,o,l),l};let j=class extends c["c"]{created(){this.$q.dark.set(!0)}goToRoot(){"/"!==this.$router.currentRoute.fullPath&&this.$router.push("/")}changeLanguage(){console.log(this.$i18n.locale),"en-us"===this.$i18n.locale?this.$i18n.locale="fi":this.$i18n.locale="en-us",this.$emit("changelanguage")}};j=y([Object(c["a"])({components:{ToolbarButton:v,IconText:g["a"]}})],j);var O=j,$=O,m=Object(d["a"])($,n,r,!1,null,null,null);e["default"]=m.exports},"8ea6":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row q-mb-md",style:"height: "+t.size+"px;"},[o("q-icon",{staticStyle:{top:"20%"},attrs:{size:t.size+"px",name:"fas fa-"+t.icon}}),o("div",{style:"font-size: "+t.size+"px; margin-left: 15px;"},[t._t("default")],2)],1)},r=[],c=o("2b0e"),l=o("2fe1"),a=o("60a3"),i=function(t,e,o,n){var r,c=arguments.length,l=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(l=(c<3?r(l):c>3?r(e,o,l):r(e,o))||l);return c>3&&l&&Object.defineProperty(e,o,l),l};let s=class extends c["a"]{};i([Object(a["b"])({required:!0})],s.prototype,"size",void 0),i([Object(a["b"])({required:!0})],s.prototype,"icon",void 0),s=i([Object(l["b"])({})],s);var u=s,f=u,p=o("2877"),b=Object(p["a"])(f,n,r,!1,null,"77e5eda2",null);e["a"]=b.exports}}]);