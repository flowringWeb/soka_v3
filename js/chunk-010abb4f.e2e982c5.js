(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-010abb4f"],{1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=a},"1fb1":function(e,t,r){"use strict";r("fdd4")},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=a},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t.default=a},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=a},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("numeric",/^[0-9]*$/);t.default=a},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=a},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,o=(0,n.regex)("email",a);t.default=o},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=a},"60ae":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[e._v(" "+e._s(e.testData)+" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("q-select",{attrs:{id:"cboBelongArea",outlined:"",dense:"","emit-value":"","map-options":"",label:e.$q.screen.lt.sm?"所屬區域":void 0,options:e.findCity},scopedSlots:e._u([e.$q.screen.gt.xs?{key:"before",fn:function(){return[r("label",{attrs:{for:"cboBelongArea"}},[r("span",{staticClass:"required"},[e._v("＊")]),e._v("所屬區域: ")])]},proxy:!0}:null],null,!0),model:{value:e.cboBelongArea,callback:function(t){e.cboBelongArea=t},expression:"cboBelongArea"}})],1),r("div",{staticClass:"col-6"},[r("q-select",{attrs:{id:"cboBelongArea2",outlined:"",dense:"","emit-value":"","map-options":"",label:e.$q.screen.lt.sm?"所屬區域":void 0,options:e.findArea},model:{value:e.cboBelongArea2,callback:function(t){e.cboBelongArea2=t},expression:"cboBelongArea2"}})],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("q-input",{staticClass:"q-pb-none",staticStyle:{"max-width":"70%"},attrs:{outlined:"",dense:"",label:e.$q.screen.lt.sm?"新增日期":void 0},scopedSlots:e._u([e.$q.screen.gt.xs?{key:"before",fn:function(){return[r("label",{attrs:{for:"pStartDates"}},[e._v(" 新增日期: ")])]},proxy:!0}:null,{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[r("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-date",{attrs:{range:""},on:{input:e.inputDate},model:{value:e.pStartDates,callback:function(t){e.pStartDates=t},expression:"pStartDates"}},[r("div",{staticClass:"row items-center justify-end"},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"確認",color:"primary"}})],1)])],1)],1)]},proxy:!0}],null,!0),model:{value:e.trueDate,callback:function(t){e.trueDate=t},expression:"trueDate"}})],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("q-input",{staticClass:"q-pb-none",staticStyle:{"max-width":"70%"},attrs:{outlined:"",dense:"",label:e.$q.screen.lt.sm?"測試起訖日期":void 0},scopedSlots:e._u([e.$q.screen.gt.xs?{key:"before",fn:function(){return[r("label",{attrs:{for:""}},[e._v(" 測試起訖日期: ")])]},proxy:!0}:null,{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[r("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-date",{model:{value:e.aDate,callback:function(t){e.aDate=t},expression:"aDate"}},[r("div",{staticClass:"row items-center justify-end"},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"確認",color:"primary"}})],1)])],1)],1)]},proxy:!0}],null,!0),model:{value:e.aDate,callback:function(t){e.aDate=t},expression:"aDate"}}),r("q-input",{staticClass:"q-pb-none",staticStyle:{"max-width":"70%"},attrs:{outlined:"",dense:"",label:e.$q.screen.lt.sm?"測試日期2":void 0},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[r("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-date",{attrs:{options:e.optionsFn},model:{value:e.bDate,callback:function(t){e.bDate=t},expression:"bDate"}},[r("div",{staticClass:"row items-center justify-end"},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"確認",color:"primary"}})],1)])],1)],1)]},proxy:!0}]),model:{value:e.bDate,callback:function(t){e.bDate=t},expression:"bDate"}})],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("q-input",{class:{"form-group--error":e.$v.memberName.$error},attrs:{id:"memberName",type:"text",outlined:"",dense:"",label:e.$q.screen.lt.sm?"會員姓名驗證":void 0},scopedSlots:e._u([e.$q.screen.gt.xs?{key:"before",fn:function(){return[r("label",{attrs:{for:"memberName"}},[r("span",{staticClass:"required"},[e._v("＊")]),e._v("會員姓名驗證: ")])]},proxy:!0}:null],null,!0),model:{value:e.$v.memberName.$model,callback:function(t){e.$set(e.$v.memberName,"$model",t)},expression:"$v.memberName.$model"}}),e.$v.memberName.required?e._e():r("div",{staticClass:"error"},[e._v("必填欄位")]),e.$v.memberName.maxLength?e._e():r("div",{staticClass:"error"},[e._v(" 請輸入不超過 "+e._s(e.$v.memberName.$params.maxLength.max)+" 個字 ")])],1),r("div",{staticClass:"col-6 col-md-4"},[r("q-input",{attrs:{type:"tel",outlined:"",dense:"",label:e.$q.screen.lt.sm?"電話":void 0},scopedSlots:e._u([e.$q.screen.gt.xs?{key:"before",fn:function(){return[r("label",{attrs:{for:""}},[e._v(" 電話: ")])]},proxy:!0}:null],null,!0),model:{value:e.$v.tel.$model,callback:function(t){e.$set(e.$v.tel,"$model","string"===typeof t?t.trim():t)},expression:"$v.tel.$model"}}),r("div",[e._v("EX: 0912345678")]),e.$v.tel.required?e._e():r("div",{staticClass:"error"},[e._v("必填欄位")]),e.$v.tel.phone&&e.$v.tel.maxLength?e._e():r("div",{staticClass:"error"},[e._v(" 請輸入正確的手機號碼格式 ")])],1)])])},a=[],o=(r("d81d"),r("4de4"),r("ac1f"),r("1276"),r("99af"),r("b5ae")),u=r("b775");function i(){return Object(u["a"])({url:"/books",method:"get"})}var l=o["helpers"].regex("phoneNumber",/\d{4}\d{3}\d{3}/),c=[{label:"0001",value:"0001",children:[{label:"A區",value:"A區"},{label:"B區",value:"B區"}]},{label:"0002",value:"0002",children:[{label:"C區",value:"C區"},{label:"D區",value:"D區"}]}],s={name:"TestApi",props:{},components:{},data:function(){return{testData:[],cboBelongArea:"0001",cboBelongArea2:"A區",trueDate:"2021/09/09~2021/09/10",pStartDates:{from:"2021/09/09",to:"2021/09/10"},aDate:"",bDate:"",bProxyDate:"",memberName:"王曉明",tel:"0912345678",model:"facebook"}},validations:{memberName:{required:o["required"],maxLength:Object(o["maxLength"])(3)},tel:{required:o["required"],phone:l,maxLength:Object(o["maxLength"])(10)}},created:function(){this.fetchData()},computed:{findCity:function(){var e=c.map((function(e){return e.value}));return e},findArea:function(){var e=this,t=c.filter((function(t){return t.value===e.cboBelongArea}))[0]["children"];return t}},watch:{cboBelongArea:{handler:function(){var e=this,t=c.filter((function(t){return t.value===e.cboBelongArea}))[0]["children"][0];this.cboBelongArea2=t},deep:!0},trueDate:{handler:function(e){var t=e.split("~");this.updateDate(t[0],t[1])}},aDate:{handler:function(e){this.bProxyDate=e}}},methods:{fetchData:function(){var e=this;i().then((function(t){var r=t.data;e.testData=r,console.log(r)}))},inputDate:function(e){var t="".concat(e.from,"~").concat(e.to);this.trueDate=t},updateDate:function(e,t){this.pStartDates.from=e,this.pStartDates.to=t},optionsFn:function(e){return e>this.bProxyDate}}},f=s,d=(r("1fb1"),r("2877")),p=r("ddd8"),b=r("27f9"),v=r("0016"),m=r("7cbe"),y=r("52ee"),h=r("9c40"),g=r("7f67"),x=r("93dc"),_=r.n(x),P=Object(d["a"])(f,n,a,!1,null,"7c27f824",null);t["default"]=P.exports;_()(P,"components",{QSelect:p["a"],QInput:b["a"],QIcon:v["a"],QPopupProxy:m["a"],QDate:y["a"],QBtn:h["a"]}),_()(P,"directives",{ClosePopup:g["a"]})},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=a},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t.default=a},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,o=(0,n.regex)("url",a);t.default=o},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=a(r("8750"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var u=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===o(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=u;var i=function(e){return Array.isArray(e)?e.length:"object"===o(e)?Object.keys(e).length:String(e).length};t.len=i;var l=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=l;var c=function(e,t){return(0,n.default)({type:e},(function(e){return!u(e)||t.test(e)}))};t.regex=c},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",VUE_APP_BASE_API:"/pro-api",BASE_URL:"/soka_v3/"}).BUILD?r("cb69").withParams:r("0234").withParams,a=n;t.default=a},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};t.default=a;var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=a},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return q.default}}),t.helpers=void 0;var n=w(r("6235")),a=w(r("3a54")),o=w(r("45b8")),u=w(r("ec11")),i=w(r("5d75")),l=w(r("c99d")),c=w(r("91d3")),s=w(r("2a12")),f=w(r("5db3")),d=w(r("d4f4")),p=w(r("aa82")),b=w(r("e652")),v=w(r("b6cb")),m=w(r("772d")),y=w(r("d294")),h=w(r("3360")),g=w(r("6417")),x=w(r("eb66")),_=w(r("46bc")),P=w(r("1331")),q=w(r("c301")),j=O(r("78ef"));function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function w(e){return e&&e.__esModule?e:{default:e}}t.helpers=j},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t.default=a},b775:function(e,t,r){"use strict";var n=r("bc3a"),a=r.n(n),o=a.a.create({baseURL:"/pro-api",timeout:5e3});t["a"]=o},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=a},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(o)}));t.default=a;var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},a=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},o=n.vuelidate?n.vuelidate.withParams:a;t.withParams=o}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t.default=a},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=a},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=a},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=a},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),a=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=a},fdd4:function(e,t,r){}}]);