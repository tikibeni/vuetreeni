(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"05d7":function(t,e,i){t.exports=i.p+"img/avatar-cropped.54093599.jpg"},8041:function(t,e,i){"use strict";i("d924")},"8b24":function(t,e,i){"use strict";i.r(e);var l=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("q-page",{staticClass:"pageContainer"},[l("div",{staticClass:"leftContainer bg-color-2"},[l("q-avatar",{staticClass:"dropShadow avatarImage",attrs:{size:"155px",square:""}},[l("img",{attrs:{src:i("05d7"),alt:"Beni"}})]),l("IconText",{staticClass:"hl-color-1",staticStyle:{"margin-top":"25px","margin-bottom":"25px","font-size":"30px"},attrs:{icon:"graduation-cap"}},[t._v(" "+t._s(t.$t("skills"))+" ")]),t._l(t.skList,(function(e){return l("SkillBar",{key:e.key,attrs:{"skill-name":e.name,"skill-level":e.grade}},[t._v(" "+t._s(e.description)+" ")])}))],2),l("div",{staticClass:"rightContainer bg-color-1",staticStyle:{"padding-left":"40px"}},[l("div",{staticClass:"q-pa-lg"},[l("IconText",{staticClass:"hl-color-1",staticStyle:{"padding-bottom":"45px","font-size":"30px"},attrs:{icon:"user"}},[t._v(t._s(t.$t("profile")))]),l("div",{staticClass:"tx-color-1"},[l("p",[t._v("TODO:")]),l("ul",[l("li",[t._v("Korjaa uudelleenrenderöintiongelma localizationiin liittyen")]),l("li",[t._v("Rakenna infot työkokemuksiin")]),l("li",[t._v("Koulutusosio työkokemusten alapuolelle")]),l("li",[t._v("Profiiliosion teksti")]),l("li",[t._v("Yhteystiedot-sivulle sposti + iconlinkit someihin + github")]),l("li",[t._v("Siistimpi fontti")]),l("li",[t._v("CV-osion jälkeen Projects-tabi, jossa koodausprojektien esittelyä")])])])],1),l("div",{staticClass:"q-pa-lg"},[l("q-timeline",{staticStyle:{position:"relative"},attrs:{color:"accent"}},[l("IconText",{staticClass:"hl-color-1",staticStyle:{"margin-bottom":"50px","font-size":"30px"},attrs:{icon:"book"}},[t._v(t._s(t.$t("experience")))]),l("div",{staticClass:"backRectangle"}),t._l(t.expList,(function(e){return l("div",{key:e.workplace},[l("div",[l("q-timeline-entry",{staticStyle:{"margin-left":"10px"},attrs:{icon:e.icon},scopedSlots:t._u([{key:"subtitle",fn:function(){return[l("div",{staticClass:"tx-color-2"},[t._v("\n                  "+t._s(e.during)+"\n                ")])]},proxy:!0},{key:"title",fn:function(){return[l("div",{staticClass:"hl-color-1"},[t._v("\n                  "+t._s(e.workplace)+"\n                ")])]},proxy:!0}],null,!0)},[l("div",[l("div",{staticClass:"tx-color-1"},[t._v("\n                  "+t._s(e.description)+"\n                ")])])])],1)])}))],2)],1)])])},s=[],a=i("60a3"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"margin-bottom":"30px"}},[i("div",{staticClass:"row justify-center"},[i("div",{staticClass:"hl-color-1-light"},[t._v("\n      "+t._s(t.SkillName)+"\n    ")])]),i("div",{staticClass:"row justify-center"},[t._l(t.SkillLevel,(function(e){return i("div",{key:t.SkillName+e},[i("q-icon",{staticClass:"q-px-xs hl-color-1",attrs:{name:"fas fa-star"}})],1)})),t._l(5-t.SkillLevel,(function(e){return i("div",{key:t.SkillName+e},[i("q-icon",{staticClass:"q-px-xs  hl-color-1-dark",attrs:{name:"far fa-star"}})],1)}))],2),i("div",{staticClass:"tx-color-2",staticStyle:{"text-align":"center"}},[t._t("default")],2)])},n=[],r=i("2b0e"),c=i("2fe1"),p=function(t,e,i,l){var s,a=arguments.length,o=a<3?e:null===l?l=Object.getOwnPropertyDescriptor(e,i):l;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,i,l);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(o=(a<3?s(o):a>3?s(e,i,o):s(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};let f=class extends r["a"]{};p([Object(a["b"])({required:!0})],f.prototype,"SkillName",void 0),p([Object(a["b"])({required:!0})],f.prototype,"SkillLevel",void 0),f=p([Object(c["b"])({})],f);var u=f,d=u,v=i("2877"),y=Object(v["a"])(d,o,n,!1,null,"5ee2807f",null),b=y.exports,k=i("8ea6"),x=function(t,e,i,l){var s,a=arguments.length,o=a<3?e:null===l?l=Object.getOwnPropertyDescriptor(e,i):l;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,i,l);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(o=(a<3?s(o):a>3?s(e,i,o):s(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};let _=class extends a["c"]{constructor(){super(...arguments),this.skList=this.$t("skills_info"),this.expList=this.$t("experience_info")}};_=x([Object(a["a"])({components:{SkillBar:b,IconText:k["a"]}})],_);var g=_,m=g,h=(i("8041"),Object(v["a"])(m,l,s,!1,null,null,null));e["default"]=h.exports},"8ea6":function(t,e,i){"use strict";var l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row q-mb-md"},[i("q-icon",{staticStyle:{top:"20%","margin-top":"5px"},attrs:{name:"fas fa-"+t.icon}}),i("div",{style:"margin-left: 15px;"},[t._t("default")],2)],1)},s=[],a=i("2b0e"),o=i("2fe1"),n=i("60a3"),r=function(t,e,i,l){var s,a=arguments.length,o=a<3?e:null===l?l=Object.getOwnPropertyDescriptor(e,i):l;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,i,l);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(o=(a<3?s(o):a>3?s(e,i,o):s(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o};let c=class extends a["a"]{};r([Object(n["b"])({required:!0})],c.prototype,"icon",void 0),c=r([Object(o["b"])({})],c);var p=c,f=p,u=i("2877"),d=Object(u["a"])(f,l,s,!1,null,"70334d6f",null);e["a"]=d.exports},d924:function(t,e,i){}}]);