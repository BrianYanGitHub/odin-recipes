/*! v3068 undefined */
var __webpack_exports__={};(function(){function e(){try{return(new Date).getTime()}catch(e){return 0}}var t=e(),r={InjectTagError:{id:1,message:"InjectTagError"},LoadTagError:{id:2,message:"LoadTagError"},UnexpectedError:{id:128,message:"UnexpectedError"}},n=function(){},o=R(),i=function(){try{return Function("() => {};"),!0}catch(e){return!1}}(),a="undefined"==typeof window||"function"!=typeof window.addEventListener,c=function(){var e,t;if(!a){try{$(e=I("about:blank")),t=!x(e)}catch(e){t=!0}try{e&&("function"==typeof e.remove&&e.remove(),e=null)}catch(e){}}return t}(),d=function(){try{if(a)return!1;if("object"==typeof omidVerificationProperties&&"web"===omidVerificationProperties.injectionSource)return!0;for(var e=!1,t=window;!1===e&&t;)e=null!==t.document.querySelector("script[src*=omweb-v1]"),t=t===window.top?null:t.parent;return e}catch(e){return!1}}(),u=function(){try{if(a||d)return!1;var e=!1,t=window;for(;!1===e&&t;)e=(r=t.omid3p)&&"function"==typeof r.registerSessionObserver&&"function"==typeof r.addEventListener,t=t===window.top?null:t.parent;return e}catch(e){return!1}var r}(),f=!(a||!document.currentScript),s=function(){try{var e,t;if(!a&&document){if(f)return(e=document.currentScript).dvvisit=1,e;if("function"==typeof document.getElementsByTagName){var r=document.getElementsByTagName("script"),n=0,o=r.length;for(t=!1;n<o;++n)if((e=r[n])&&!e.dvvisit&&e.src&&-1!==e.src.indexOf("/dvtp_src.js")){e.dvvisit=1,t=!0;break}}if(!t)throw e=null,new Error("dvtp script element did not find");return e}}catch(e){N(e,19,!1)}}(),m=!a&&j(),p=3068,v=m?m.substr(0,m.indexOf("/dvtp_src.js")+1):"https://cdn.doubleverify.com/",l="https://tps.doubleverify.com/",y="visit.jpg",g={loadScript:function e(t,r,o){r=r||n,o=o||n,"object"==typeof omidNative&&("function"==typeof omidNative.downloadJavaScriptResource?omidNative.downloadJavaScriptResource(t,(function e(t){try{dvWindow=L($dv),eval(t),r()}catch(e){var n=void 0!==t&&t&&t.length||0;o("OnEvalError_ResLen_"+n)}}),(function(){o("OnFailedToDownload")})):o("DownloadJavaScriptResourceNotExist"))},fire:function(e,t,r){t=t||n,r=r||n,"object"==typeof omidNative&&"function"==typeof omidNative.sendUrl&&omidNative.sendUrl(e,t,r)}},w={loadScript:function(e,t,r,n){if(dvWindow=window,c||n||d)return M(e,t,r);U(e)},fire:function(e,t,r){var o=new Image(1,1);o.onerror=r||n,o.onload=t||n,o.src=e}},h=a?g:w,E,S;function _(){for(var e=1,t=Math.floor(10*Math.random())+1,r=0;r<t;++r)e*=Math.random();return e}function R(){return(e()*_()).toString(10)}function b(){return s&&s.src}function T(){return f&&document.currentScript.src}function j(){return T()||b()}function L(e){var t={location:{protocol:"https:"}},r={getElementById:n,createElement:n,body:{insertBefore:n},querySelectorAll:function(){return[]}};return t.$dv=e,t.parent=t,t.top=t,t.document=r,t}function O(e,t){var r=A(),n=x(e),o='<html><head><script type="text/javascript">('+function(){window.$dv=window.parent.$dv,window.$dv.isFrameSupported=!0,window.$frmId=Math.random().toString(36)+Math.random().toString(36)}.toString()+')();<\/script></head><body><script type="text/javascript">('+function e(t,r){var n;function o(){"function"==typeof window.clearTimeout&&RetrayLoader.timerRef&&window.clearTimeout(RetrayLoader.timerRef)}window.RetrayLoader||(window.RetrayLoader={MAX_NUM_OF_TRIES:3,TIMEOUT:400,numOfTries:1,timerRef:null}),t&&((n=document.createElement("script")).src=t,n.onload=function(){window.isDVMLoaded=!0,o()},n.onerror=function(){if(!window.isDVMLoaded){if(n&&"function"==typeof n.remove&&(n.remove(),n=null),"function"!=typeof window.setTimeout||RetrayLoader.MAX_NUM_OF_TRIES===RetrayLoader.numOfTries)return i=r,void(new Image(1,1).src=i);var i;++RetrayLoader.numOfTries,o(),RetrayLoader.timerRef=window.setTimeout((function(){e(t,r)}),RetrayLoader.TIMEOUT)}},document.body.appendChild(n))}.toString()+')("'+t+'", "'+r+'");<\/script></body></html>';if(n)n.open(),n.write(o),n.close();else{var i=encodeURIComponent(o.replace(/'/g,"\\'").replace(/\n|\r\n|\r/g,""));e.src='javascript: (function(){document.open();document.domain="'+window.document.domain+"\";document.write('"+i+"');})()"}}function I(e){var t=Math.floor(1e12*(Math.random()+"")),r=document.createElement("iframe");return r.name=r.id="iframe_"+t,r.setAttribute("data-dv-frm",t),r.width="0",r.height="0",r.style.display="none",r.src=e,r}function $(e){if(document.currentScript){var t=document.currentScript.parentNode;t&&"function"==typeof t.insertBefore?t.insertBefore(e,document.currentScript):document.currentScript.appendChild(e)}else if(document.body&&"function"==typeof document.body.insertBefore)document.body.firstChild?document.body.insertBefore(e,document.body.firstChild):document.body.appendChild(e);else{var r=document.getElementsByTagName("head")[0];r&&"function"==typeof document.body.insertBefore&&r.firstChild?r.insertBefore(e,r.firstChild):document.documentElement.appendChild(e)}}function x(e){return e&&(e.contentDocument||e.contentWindow&&e.contentWindow.document||frames&&frames[e.name]&&frames[e.name].document)}function M(e,t,r){var i=document.createElement("script");i.onload=t||n,i.onerror=r||n,i.src=e,i.type="application/javascript",$(i),Q().tagData[o].injectedAsSibling=!0}function U(e){var t=I("about:blank");$(t),O(t,e)}var C=l+y+"?";function D(e,t,r){var n=e&&e.message||"error undefined",o=[C,"ctx=818052&cmp=1619415&dvtagver=6.1.src","&napr=",n,"&cerrt=",t,"&tgjsver=",p,"&jsver=",p,"&flvr=","0"];r&&o.push("&dvp_isLostImp=1");var i=0;return a&&(i|=4),c&&(i|=8),i>0&&o.push("&tstype="+i),o.join("")}function N(e,t,r){var n=D(e,t,r),o=encodeURI(n);h&&h.fire(o)}try{S=function(e){var t,r,n,o,i,a={},c={};return(t=e)&&(r=function(e){var t=e.indexOf("#"),r=e.indexOf("?"),n="";n=t>-1&&r>-1?r<t?"?":"#":-1==r?"#":"?";var o="",i=e.trim().split(n);return 2===i.length&&(o=i[1]),o}(t),r&&(i={},r.split(/[&?#]+/).forEach((function(e){2===(e=e.trim().split("=")).length&&(i[e[0].trim()]=e[1].trim())})),n=a=i,o={},["cmp","ctx","sid","plc","gdpr","gdpr_consent"].forEach((function(e){n.hasOwnProperty(e)&&(o["dvp_"+e]=n[e])})),c=o)),{toQueryString:function(e){var t,r="";for(t in e)e.hasOwnProperty(t)&&(r&&(r+="&"),r=[r,t,"=",e[t]].join(""));return r},getQueryStringParams:function(){return a},getQueryStringClientParams:function(){return c}}}(m),E=function(){var e,t="",r="__ERR_MSG_PLACEHOLDR__",n="__CLIENT_ERROR_TYPE_PLACEHOLDR__",o={ctx:818052,cmp:1619415,dvtagver:"6.1.src",tgjsver:p,jsver:p,napr:r,cerrt:n,flvr:"0"},i=0;function d(e,o,i){var a;o=(o=o&&((a=o)&&a.trim().replace(/(\t|\n|\r|\|)/g,"")))&&encodeURIComponent(o)||"";var c=t.replace(new RegExp(r,"g"),[e.message,o].join("__"));return c=c.replace(new RegExp(n,"g"),e.id),i&&(c+="&dvp_isLostImp=1"),c}return a&&(i|=4),c&&(i|=8),i>0&&(o.tstype=i),e=[S.toQueryString(o),S.toQueryString(S.getQueryStringClientParams())].join("&"),t=[C,e].join(""),{report:function(e,t,r){h.fire(d(e,t,r))},getReportUrl:d}}()}catch(e){N(e,r.UnexpectedError,!1)}function P(e,t){for(var r=5;e[t]&&--r;)t=R();if(e[t])throw new Error("failed to create tagUniqueKey");return t}function B(r,n,o,c,f,m){r.tagData=r.tagData||{},n=P(r.tagData,n);var p={};p.dvtpScriptVersion=o,p.dvtpScriptUrl=c,p.restrictedAccess=f,p.$frmId=m,p.tagScriptElem=s,p.tagLoadedMS=t,p.isOmidForWeb=d,p.isOmid3p=u,p.tagExecTimeMs=e()-t,p.isES6Supported=i,a||(p.tagReadyState=document.readyState),p.staticPrefix=v,p.serverPrefix=l,r.tagData[n]=p}function A(e){e=e||"NotFound";var t=r.LoadTagError,n="failedToLoadDVM__"+e;return E?E.getReportUrl(t,n,!0):D(t.id,t.message+"__"+n,!0)}function F(e){var t=A(e);h.fire(t)}function Q(){return $dv="undefined"!=typeof $dv&&$dv||{tags:{},tagsCounter:0},$dv}try{var V,q;$dv=Q(),$frmId=R(),$dv.tagsCounter++,$dv.isDomlessEnvironment=a,$dv.sharedUniqueKey=$dv.sharedUniqueKey||R(),$dv.restrictedAccess=c,C=l+y+"?";var W=[v,"dv-measurements3068",".js"].join("");B($dv,o,p,m,c,$frmId),h.loadScript(W,n,F)}catch(e){var k=r.InjectTagError;E?E.report(k,e.message,!0):N(e,k,!0)}})();