(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1571],{49029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},18674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},69877:function(e){var t=Math.floor,r=Math.random;e.exports=function(e,n){return e+t(r()*(n-e+1))}},35393:function(e,t,r){var n=r(62663),i=r(53816),o=r(58748),u=RegExp("['\u2019]","g");e.exports=function(e){return function(t){return n(o(i(t).replace(u,"")),e,"")}}},69389:function(e,t,r){var n=r(18674)({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"});e.exports=n},93157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2757:function(e){var t="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",n="A-Z\\xc0-\\xd6\\xd8-\\xde",i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+i+"]",u="\\d+",c="[\\u2700-\\u27bf]",s="["+r+"]",a="[^\\ud800-\\udfff"+i+u+t+r+n+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+n+"]",p="(?:"+s+"|"+a+")",y="(?:"+f+"|"+a+")",v="(?:['\u2019](?:d|ll|m|re|s|t|ve))?",_="(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",g="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",O="[\\ufe0e\\ufe0f]?",b=O+g+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,l].join("|")+")"+O+g+")*"),m="(?:"+[c,d,l].join("|")+")"+b,E=RegExp([f+"?"+s+"+"+v+"(?="+[o,f,"$"].join("|")+")",y+"+"+_+"(?="+[o,f+p,"$"].join("|")+")",f+"?"+p+"+"+v,f+"+"+_,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",u,m].join("|"),"g");e.exports=function(e){return e.match(E)||[]}},53816:function(e,t,r){var n=r(69389),i=r(79833),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=i(e))&&e.replace(o,n).replace(u,"")}},45021:function(e,t,r){var n=r(35393)((function(e,t,r){return e+(r?" ":"")+t.toLowerCase()}));e.exports=n},83608:function(e,t,r){var n=r(69877),i=r(16612),o=r(18601),u=parseFloat,c=Math.min,s=Math.random;e.exports=function(e,t,r){if(r&&"boolean"!=typeof r&&i(e,t,r)&&(t=r=void 0),void 0===r&&("boolean"==typeof t?(r=t,t=void 0):"boolean"==typeof e&&(r=e,e=void 0)),void 0===e&&void 0===t?(e=0,t=1):(e=o(e),void 0===t?(t=e,e=0):t=o(t)),e>t){var a=e;e=t,t=a}if(r||e%1||t%1){var d=s();return c(e+d*(t-e+u("1e-"+((d+"").length-1))),t)}return n(e,t)}},14035:function(e,t,r){var n=r(35393)((function(e,t,r){return e+(r?" ":"")+t.toUpperCase()}));e.exports=n},58748:function(e,t,r){var n=r(49029),i=r(93157),o=r(79833),u=r(2757);e.exports=function(e,t,r){return e=o(e),void 0===(t=r?void 0:t)?i(e)?u(e):n(e):e.match(t)||[]}},59397:function(e,t,r){"use strict";r.d(t,{EZ:function(){return P},Kp:function(){return m}});var n=r(68697);var i={ALL:"ALL",CUSTOM:"CUSTOM",WEDDING:"WEDDING",BABY:"BABY",COLLEGE:"COLLEGE",SHOPPING_LIST:"SHOPPING_LIST",WISH_LIST:"WISH_LIST",GENERIC:"GENERIC",CHARITY:"CHARITY",HOUSEWARMING:"HOUSEWARMING",ANNIVERSARY:"ANNIVERSARY",PET:"PET",BIRTHDAY:"BIRTHDAY",HOLIDAY:"HOLIDAY",OTHER:"OTHER",BOY:"BOY",GIRL:"GIRL",MORE:"MORE",UNDEFINED_GENDER:"UNDEFINED",CHANNEL_WEB:"WEB",SUBCHANNEL_DESKTOP:"TGTWEB",SUBCHANNEL_TABLET:"TABLET",SUBCHANNEL_MOBILE:"MWEB"};const o=e=>e;(0,n.P1)(o,(e=>null===e||void 0===e?void 0:e.find((e=>e.registry_type===i.BABY)))),(0,n.P1)(o,(e=>null===e||void 0===e?void 0:e.find((e=>e.registry_type===i.WEDDING)))),(0,n.P1)(o,(e=>null===e||void 0===e?void 0:e.find((e=>e.registry_type===i.CUSTOM)))),(0,n.P1)(o,(e=>null===e||void 0===e?void 0:e.find((e=>e.registry_type===i.CHARITY))));var u=r(59499),c=r(83608),s=r.n(c),a=r(96012),d=r(69027),l=r(92354);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const p=e=>{var t,r;const{apiKey:n,apis:{registriesV2:i},baseUrl:o}=(0,a.asConfigV2)(a.config).services.apiPlatform,{fetchOptions:c,requestParams:p}=null!==e&&void 0!==e?e:{},{profile_id:y}=null!==p&&void 0!==p?p:{},v=l.Z.buildURLWithParams(new URL(null!==(t=null===(r=i.endpointPaths)||void 0===r?void 0:r.v2)&&void 0!==t?t:"",o),{profile_id:y,channel:"WEB",sub_channel:"TGTWEB",sn_id:s()(1,99999999,!1),key:n});return(0,d.U2)(v,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},c))};var y=r(64595),v=r(41982);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const O="@web/domain-registry/registries/queries/get-registries",{useQuery:b}=(0,y.J)({name:O,keyFn:e=>{const{apiKey:t}=(0,a.asConfigV2)(a.config).services.apiPlatform;if(!t)throw new Error("API key required for ".concat(O));return[O,e]},queryFn:async function(e){let{requestMetricsOptions:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{data:r}=await p({requestParams:e,fetchOptions:g({errorTag:O,timerTag:O,credentials:"include"},t)});return r},defaultOptions:{staleTime:3e4}}),m=(0,v.Hv)(b,{blockCallOnAuthFail:!0,minimumAssuranceLevel:v.Jr});function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,u.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=r(98689);const j="@site-registry/domains/registry/add-item/mutations/add-item",{useMutation:x}=(0,I.F)({name:j,mutationFn:async e=>{const t=(e=>{var t,r;const{fetchOptions:n,requestParams:o}=null!==e&&void 0!==e?e:{},{apiKey:u,apis:{registriesV2:c},baseUrl:s}=(0,a.asConfigV2)(a.config).services.apiPlatform,f="".concat(null!==(t=null===(r=c.endpointPaths)||void 0===r?void 0:r.v2)&&void 0!==t?t:"","/").concat(null===o||void 0===o?void 0:o.registry_id,"/registry_items"),p=l.Z.buildURLWithParams(new URL(f,s),{channel:i.CHANNEL_WEB,sub_channel:i.SUBCHANNEL_DESKTOP,location_id:"3991",key:u,registry_id:null===o||void 0===o?void 0:o.registry_id});let y={};if("TCIN"===(null===o||void 0===o?void 0:o.registry_item_type)){const e=o;y={tcin:null===e||void 0===e?void 0:e.tcin,requested_quantity:null===e||void 0===e?void 0:e.requested_quantity,purchased_quantity:null===e||void 0===e?void 0:e.purchased_quantity,registry_item_type:null===o||void 0===o?void 0:o.registry_item_type,item_note:null===o||void 0===o?void 0:o.item_note,added_by_recipient:null===e||void 0===e?void 0:e.added_by_recipient,most_wanted_flag:null===o||void 0===o?void 0:o.most_wanted_flag}}else if("EXTERNAL_ITEM"===(null===o||void 0===o?void 0:o.registry_item_type)){const e=o;y={registry_item_type:null===e||void 0===e?void 0:e.registry_item_type,external_product_url:null===e||void 0===e?void 0:e.external_product_url,external_retailer:null===e||void 0===e?void 0:e.external_retailer,external_product_price:null===e||void 0===e?void 0:e.external_product_price,external_product_size:null===e||void 0===e?void 0:e.external_product_size,external_product_color:null===e||void 0===e?void 0:e.external_product_color,external_product_image_url:null===e||void 0===e?void 0:e.external_product_image_url,requested_quantity:null===e||void 0===e?void 0:e.requested_quantity,purchased_quantity:null===e||void 0===e?void 0:e.purchased_quantity,item_title:null===e||void 0===e?void 0:e.item_title,item_note:null===e||void 0===e?void 0:e.item_note,most_wanted_flag:null===e||void 0===e?void 0:e.most_wanted_flag,visibility_indicator:null===e||void 0===e?void 0:e.visibility_indicator}}else if("HONEYFUND_ITEM"===(null===o||void 0===o?void 0:o.registry_item_type)){const e=o;y={registry_item_type:null===e||void 0===e?void 0:e.registry_item_type,item_note:null===e||void 0===e?void 0:e.item_note,most_wanted_flag:null===e||void 0===e?void 0:e.most_wanted_flag,visibility_indicator:null===e||void 0===e?void 0:e.visibility_indicator,honeyfund_item_experience_id:null===e||void 0===e?void 0:e.honeyfund_item_experience_id}}return{fetch:()=>(0,d.v_)(p,h(h({credentials:"include"},n),{},{headers:{Accept:"application/json"},body:JSON.stringify({items:[y]})})),url:p,options:e}})({requestParams:e,fetchOptions:{errorTag:j,timerTag:j}}),{data:r,ok:n,statusText:o}=await t.fetch().catch((e=>{401===e.status&&(0,v.zB)()}));if(n)return r;throw new Error("".concat(o))}}),P=(0,v.tW)(x,{minimumAssuranceLevel:v.Jr})},14964:function(e,t,r){"use strict";r.d(t,{A8:function(){return i},D:function(){return s},Dk:function(){return c},LL:function(){return d},Oe:function(){return n},So:function(){return o},qN:function(){return a},vC:function(){return u},vq:function(){return f},xb:function(){return l}});const n="https://www.target.com/gift-registry",i="regModeLP",o="Add to registry",u="GG",c="REGST",s="REG",a="CUSTOM",d="WEDDING",l="BABY",f="CHARITY"},91571:function(e,t,r){"use strict";r.d(t,{Q:function(){return b},g:function(){return m}});var n=r(59499),i=r(14035),o=r.n(i),u=r(79833),c=r.n(u),s=r(67294),a=r(11163),d=r(48113),l=r(26098),f=r(41982),p=r(59397),y=r(20745),v=r(14964);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const O=(0,d.ej)(v.A8);function b(){const e=(0,a.useRouter)(),{query:t}=e,r=(0,l.jI)(t,"regMode"),n=(0,l.jI)(t,"registryId"),i=(0,l.jI)(t,"itemLineNum"),u=(0,l.jI)(t,"registryType"),d=(0,l.jI)(t,"type"),p=c()(r),y=(0,f.xd)(),_=(0,s.useMemo)((()=>p===v.vC||p===v.Dk),[p]),b=(0,s.useCallback)((()=>p===v.vC),[p]),m=(0,s.useCallback)((()=>{if(n){var e;const t=i?{registry_line_id:i}:{};return{registry_information:g({registry_id:n,registry_subtype:o()(null!==(e=null!==u&&void 0!==u?u:d)&&void 0!==e?e:""),registry_type:"Registry"},t)}}}),[i,n,u,d]),E=(0,s.useMemo)((()=>!(!O&&p!==v.Dk)),[p]),h=(0,s.useMemo)((()=>p===v.vC),[p]),I=(0,s.useMemo)((()=>p===v.D||!_&&!!O),[_,p]),j=(0,s.useMemo)((()=>!(!y||!I&&!_)),[I,_,y]);return{isGiftGiverOrRegistrantFromMyItems:_,registryModeStatusFromCookie:O,getRegistryInformationForAddToCart:m,hasRegistryModeStatus:I,isInRegistrantMode:E,isInGiftGiverMode:h,isInRegistryMode:j,getRegistryGiftGiverStatus:b}}function m(e){let{registryId:t,tcin:r,isStandaloneOrChildItem:n=!0,addItemToRegistryOnSuccessCallback:i,addItemToRegistryOnErrorCallback:o,openCreateARegistryModal:u,openMultipleRegistryDrawer:c}=e;const d=(0,a.useRouter)(),{query:v}=d,_=(0,f.zy)(),g=(0,f.Pd)(),[O,{isSuccess:b}]=(0,p.Kp)(),m=O(),E=(0,f.xd)(),h=(0,l.jI)(v,"registryId"),I=1===(null===m||void 0===m?void 0:m.length)?m[0].registry_id:null,j=Boolean(t||h||I),{ffCustomInteraction:x}=(0,y.d)(),[P]=(0,p.EZ)({onSuccess:async()=>{x("registry_tcin_".concat(r,"_added_to_registry")),i()},onError:async()=>{x("registry_tcin_".concat(r,"_add_to_registry_failed")),o()}}),A=(0,s.useCallback)((async()=>{x("registry_add_to_registry_button_clicked"),E?b&&(null!==m&&void 0!==m&&m.length||!u?j&&n?P({tcin:r,requested_quantity:1,purchased_quantity:0,registry_item_type:"TCIN",added_by_recipient:!0,registry_id:t||h||I||""}):c():u()):(0,f.zB)()}),[P,u,x,j,n,b,E,null===m||void 0===m?void 0:m.length,t,h,r,c,I]);return{handleRegistryButtonClick:(0,s.useCallback)((async()=>{g&&(_?A():(0,f.zB)())}),[A,g,_])}}},20745:function(e,t,r){"use strict";r.d(t,{d:function(){return f}});var n=r(59499),i=r(45021),o=r.n(i),u=r(67294),c=r(11163),s=r(17724),a=r(26098);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(){const e=(0,s.rS)(),t=(0,c.useRouter)(),{query:r}=t,n=(0,a.jI)(r,"type"),i=(0,a.jI)(r,"registryId"),d=(0,u.useMemo)((()=>i&&n?{registries:[{hasItems:!1,id:i,type:"".concat(o()(n)," registry")}]}:{}),[i,n]);return{ffCustomInteraction:function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t&&e.trackEvent({guest:{eventType:"customInteraction"},customInteraction:l({value:t},r)})},ffAdImpressionsInteraction:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;t&&e.trackEvent({guest:{eventType:"adimp"},adImpressions:t})},ffComponentload:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.trackEvent({guest:{eventType:"componentload"},registry:l(l({},d),t)})}}}}}]);