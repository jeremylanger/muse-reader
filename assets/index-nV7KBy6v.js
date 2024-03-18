(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();var Jr={exports:{}},ta={},Ur={exports:{}},C={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vn=Symbol.for("react.element"),ld=Symbol.for("react.portal"),hd=Symbol.for("react.fragment"),dd=Symbol.for("react.strict_mode"),ud=Symbol.for("react.profiler"),cd=Symbol.for("react.provider"),pd=Symbol.for("react.context"),fd=Symbol.for("react.forward_ref"),md=Symbol.for("react.suspense"),gd=Symbol.for("react.memo"),yd=Symbol.for("react.lazy"),_i=Symbol.iterator;function wd(e){return e===null||typeof e!="object"?null:(e=_i&&e[_i]||e["@@iterator"],typeof e=="function"?e:null)}var Kr={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$r=Object.assign,Vr={};function an(e,t,n){this.props=e,this.context=t,this.refs=Vr,this.updater=n||Kr}an.prototype.isReactComponent={};an.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};an.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gr(){}Gr.prototype=an.prototype;function Oo(e,t,n){this.props=e,this.context=t,this.refs=Vr,this.updater=n||Kr}var jo=Oo.prototype=new Gr;jo.constructor=Oo;$r(jo,an.prototype);jo.isPureReactComponent=!0;var zi=Array.isArray,Qr=Object.prototype.hasOwnProperty,Fo={current:null},qr={key:!0,ref:!0,__self:!0,__source:!0};function Xr(e,t,n){var s,a={},o=null,i=null;if(t!=null)for(s in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Qr.call(t,s)&&!qr.hasOwnProperty(s)&&(a[s]=t[s]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var l=Array(r),d=0;d<r;d++)l[d]=arguments[d+2];a.children=l}if(e&&e.defaultProps)for(s in r=e.defaultProps,r)a[s]===void 0&&(a[s]=r[s]);return{$$typeof:Vn,type:e,key:o,ref:i,props:a,_owner:Fo.current}}function vd(e,t){return{$$typeof:Vn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ro(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vn}function kd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wi=/\/+/g;function ka(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kd(""+e.key):t.toString(36)}function vs(e,t,n,s,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Vn:case ld:i=!0}}if(i)return i=e,a=a(i),e=s===""?"."+ka(i,0):s,zi(a)?(n="",e!=null&&(n=e.replace(Wi,"$&/")+"/"),vs(a,t,n,"",function(d){return d})):a!=null&&(Ro(a)&&(a=vd(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Wi,"$&/")+"/")+e)),t.push(a)),1;if(i=0,s=s===""?".":s+":",zi(e))for(var r=0;r<e.length;r++){o=e[r];var l=s+ka(o,r);i+=vs(o,t,n,l,a)}else if(l=wd(e),typeof l=="function")for(e=l.call(e),r=0;!(o=e.next()).done;)o=o.value,l=s+ka(o,r++),i+=vs(o,t,n,l,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function ts(e,t,n){if(e==null)return e;var s=[],a=0;return vs(e,s,"","",function(o){return t.call(n,o,a++)}),s}function bd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ie={current:null},ks={transition:null},Sd={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:ks,ReactCurrentOwner:Fo};C.Children={map:ts,forEach:function(e,t,n){ts(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ts(e,function(){t++}),t},toArray:function(e){return ts(e,function(t){return t})||[]},only:function(e){if(!Ro(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};C.Component=an;C.Fragment=hd;C.Profiler=ud;C.PureComponent=Oo;C.StrictMode=dd;C.Suspense=md;C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sd;C.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=$r({},e.props),a=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Fo.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var r=e.type.defaultProps;for(l in t)Qr.call(t,l)&&!qr.hasOwnProperty(l)&&(s[l]=t[l]===void 0&&r!==void 0?r[l]:t[l])}var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){r=Array(l);for(var d=0;d<l;d++)r[d]=arguments[d+2];s.children=r}return{$$typeof:Vn,type:e.type,key:a,ref:o,props:s,_owner:i}};C.createContext=function(e){return e={$$typeof:pd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cd,_context:e},e.Consumer=e};C.createElement=Xr;C.createFactory=function(e){var t=Xr.bind(null,e);return t.type=e,t};C.createRef=function(){return{current:null}};C.forwardRef=function(e){return{$$typeof:fd,render:e}};C.isValidElement=Ro;C.lazy=function(e){return{$$typeof:yd,_payload:{_status:-1,_result:e},_init:bd}};C.memo=function(e,t){return{$$typeof:gd,type:e,compare:t===void 0?null:t}};C.startTransition=function(e){var t=ks.transition;ks.transition={};try{e()}finally{ks.transition=t}};C.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};C.useCallback=function(e,t){return ie.current.useCallback(e,t)};C.useContext=function(e){return ie.current.useContext(e)};C.useDebugValue=function(){};C.useDeferredValue=function(e){return ie.current.useDeferredValue(e)};C.useEffect=function(e,t){return ie.current.useEffect(e,t)};C.useId=function(){return ie.current.useId()};C.useImperativeHandle=function(e,t,n){return ie.current.useImperativeHandle(e,t,n)};C.useInsertionEffect=function(e,t){return ie.current.useInsertionEffect(e,t)};C.useLayoutEffect=function(e,t){return ie.current.useLayoutEffect(e,t)};C.useMemo=function(e,t){return ie.current.useMemo(e,t)};C.useReducer=function(e,t,n){return ie.current.useReducer(e,t,n)};C.useRef=function(e){return ie.current.useRef(e)};C.useState=function(e){return ie.current.useState(e)};C.useSyncExternalStore=function(e,t,n){return ie.current.useSyncExternalStore(e,t,n)};C.useTransition=function(){return ie.current.useTransition()};C.version="18.2.0";Ur.exports=C;var et=Ur.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td=et,Id=Symbol.for("react.element"),Hd=Symbol.for("react.fragment"),Pd=Object.prototype.hasOwnProperty,xd=Td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ed={key:!0,ref:!0,__self:!0,__source:!0};function Zr(e,t,n){var s,a={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(s in t)Pd.call(t,s)&&!Ed.hasOwnProperty(s)&&(a[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)a[s]===void 0&&(a[s]=t[s]);return{$$typeof:Id,type:e,key:o,ref:i,props:a,_owner:xd.current}}ta.Fragment=Hd;ta.jsx=Zr;ta.jsxs=Zr;Jr.exports=ta;var Ce=Jr.exports,Ka={},el={exports:{}},ye={},tl={exports:{}},nl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,x){var E=T.length;T.push(x);e:for(;0<E;){var R=E-1>>>1,V=T[R];if(0<a(V,x))T[R]=x,T[E]=V,E=R;else break e}}function n(T){return T.length===0?null:T[0]}function s(T){if(T.length===0)return null;var x=T[0],E=T.pop();if(E!==x){T[0]=E;e:for(var R=0,V=T.length,Zn=V>>>1;R<Zn;){var gt=2*(R+1)-1,va=T[gt],yt=gt+1,es=T[yt];if(0>a(va,E))yt<V&&0>a(es,va)?(T[R]=es,T[yt]=E,R=yt):(T[R]=va,T[gt]=E,R=gt);else if(yt<V&&0>a(es,E))T[R]=es,T[yt]=E,R=yt;else break e}}return x}function a(T,x){var E=T.sortIndex-x.sortIndex;return E!==0?E:T.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,r=i.now();e.unstable_now=function(){return i.now()-r}}var l=[],d=[],m=1,f=null,c=3,w=!1,v=!1,k=!1,B=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var x=n(d);x!==null;){if(x.callback===null)s(d);else if(x.startTime<=T)s(d),x.sortIndex=x.expirationTime,t(l,x);else break;x=n(d)}}function g(T){if(k=!1,p(T),!v)if(n(l)!==null)v=!0,ya(S);else{var x=n(d);x!==null&&wa(g,x.startTime-T)}}function S(T,x){v=!1,k&&(k=!1,u(P),P=-1),w=!0;var E=c;try{for(p(x),f=n(l);f!==null&&(!(f.expirationTime>x)||T&&!He());){var R=f.callback;if(typeof R=="function"){f.callback=null,c=f.priorityLevel;var V=R(f.expirationTime<=x);x=e.unstable_now(),typeof V=="function"?f.callback=V:f===n(l)&&s(l),p(x)}else s(l);f=n(l)}if(f!==null)var Zn=!0;else{var gt=n(d);gt!==null&&wa(g,gt.startTime-x),Zn=!1}return Zn}finally{f=null,c=E,w=!1}}var I=!1,H=null,P=-1,F=5,A=-1;function He(){return!(e.unstable_now()-A<F)}function ln(){if(H!==null){var T=e.unstable_now();A=T;var x=!0;try{x=H(!0,T)}finally{x?hn():(I=!1,H=null)}}else I=!1}var hn;if(typeof h=="function")hn=function(){h(ln)};else if(typeof MessageChannel<"u"){var Ni=new MessageChannel,rd=Ni.port2;Ni.port1.onmessage=ln,hn=function(){rd.postMessage(null)}}else hn=function(){B(ln,0)};function ya(T){H=T,I||(I=!0,hn())}function wa(T,x){P=B(function(){T(e.unstable_now())},x)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,ya(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(c){case 1:case 2:case 3:var x=3;break;default:x=c}var E=c;c=x;try{return T()}finally{c=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,x){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var E=c;c=T;try{return x()}finally{c=E}},e.unstable_scheduleCallback=function(T,x,E){var R=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?R+E:R):E=R,T){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=E+V,T={id:m++,callback:x,priorityLevel:T,startTime:E,expirationTime:V,sortIndex:-1},E>R?(T.sortIndex=E,t(d,T),n(l)===null&&T===n(d)&&(k?(u(P),P=-1):k=!0,wa(g,E-R))):(T.sortIndex=V,t(l,T),v||w||(v=!0,ya(S))),T},e.unstable_shouldYield=He,e.unstable_wrapCallback=function(T){var x=c;return function(){var E=c;c=x;try{return T.apply(this,arguments)}finally{c=E}}}})(nl);tl.exports=nl;var Cd=tl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sl=et,ge=Cd;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var al=new Set,Ln={};function At(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(Ln[e]=t,e=0;e<t.length;e++)al.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$a=Object.prototype.hasOwnProperty,Ad=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mi={},Yi={};function Ld(e){return $a.call(Yi,e)?!0:$a.call(Mi,e)?!1:Ad.test(e)?Yi[e]=!0:(Mi[e]=!0,!1)}function Dd(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bd(e,t,n,s){if(t===null||typeof t>"u"||Dd(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function re(e,t,n,s,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var Z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Z[e]=new re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Z[t]=new re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Z[e]=new re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Z[e]=new re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Z[e]=new re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Z[e]=new re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Z[e]=new re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Z[e]=new re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Z[e]=new re(e,5,!1,e.toLowerCase(),null,!1,!1)});var Jo=/[\-:]([a-z])/g;function Uo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Jo,Uo);Z[t]=new re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Jo,Uo);Z[t]=new re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Jo,Uo);Z[t]=new re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Z[e]=new re(e,1,!1,e.toLowerCase(),null,!1,!1)});Z.xlinkHref=new re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Z[e]=new re(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ko(e,t,n,s){var a=Z.hasOwnProperty(t)?Z[t]:null;(a!==null?a.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bd(t,n,a,s)&&(n=null),s||a===null?Ld(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,s=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var Ve=sl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ns=Symbol.for("react.element"),Bt=Symbol.for("react.portal"),Nt=Symbol.for("react.fragment"),$o=Symbol.for("react.strict_mode"),Va=Symbol.for("react.profiler"),ol=Symbol.for("react.provider"),il=Symbol.for("react.context"),Vo=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),Qa=Symbol.for("react.suspense_list"),Go=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),rl=Symbol.for("react.offscreen"),Oi=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Oi&&e[Oi]||e["@@iterator"],typeof e=="function"?e:null)}var O=Object.assign,ba;function wn(e){if(ba===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ba=t&&t[1]||""}return`
`+ba+e}var Sa=!1;function Ta(e,t){if(!e||Sa)return"";Sa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var s=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){s=d}e.call(t.prototype)}else{try{throw Error()}catch(d){s=d}e()}}catch(d){if(d&&s&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),o=s.stack.split(`
`),i=a.length-1,r=o.length-1;1<=i&&0<=r&&a[i]!==o[r];)r--;for(;1<=i&&0<=r;i--,r--)if(a[i]!==o[r]){if(i!==1||r!==1)do if(i--,r--,0>r||a[i]!==o[r]){var l=`
`+a[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=r);break}}}finally{Sa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function Nd(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=Ta(e.type,!1),e;case 11:return e=Ta(e.type.render,!1),e;case 1:return e=Ta(e.type,!0),e;default:return""}}function qa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nt:return"Fragment";case Bt:return"Portal";case Va:return"Profiler";case $o:return"StrictMode";case Ga:return"Suspense";case Qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case il:return(e.displayName||"Context")+".Consumer";case ol:return(e._context.displayName||"Context")+".Provider";case Vo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Go:return t=e.displayName||null,t!==null?t:qa(e.type)||"Memo";case Qe:t=e._payload,e=e._init;try{return qa(e(t))}catch{}}return null}function _d(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qa(t);case 8:return t===$o?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ll(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zd(e){var t=ll(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){s=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(i){s=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ss(e){e._valueTracker||(e._valueTracker=zd(e))}function hl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=ll(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function Ls(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xa(e,t){var n=t.checked;return O({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ji(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dl(e,t){t=t.checked,t!=null&&Ko(e,"checked",t,!1)}function Za(e,t){dl(e,t);var n=ut(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?eo(e,t.type,n):t.hasOwnProperty("defaultValue")&&eo(e,t.type,ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function eo(e,t,n){(t!=="number"||Ls(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vn=Array.isArray;function Ut(e,t,n,s){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&s&&(e[n].defaultSelected=!0)}else{for(n=""+ut(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,s&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function to(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return O({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ri(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(vn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ut(n)}}function ul(e,t){var n=ut(t.value),s=ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function Ji(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function no(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var as,pl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(as=as||document.createElement("div"),as.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=as.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wd=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){Wd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function fl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function ml(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,a=fl(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,a):e[n]=a}}var Md=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function so(e,t){if(t){if(Md[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function ao(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oo=null;function Qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var io=null,Kt=null,$t=null;function Ui(e){if(e=qn(e)){if(typeof io!="function")throw Error(y(280));var t=e.stateNode;t&&(t=ia(t),io(e.stateNode,e.type,t))}}function gl(e){Kt?$t?$t.push(e):$t=[e]:Kt=e}function yl(){if(Kt){var e=Kt,t=$t;if($t=Kt=null,Ui(e),t)for(e=0;e<t.length;e++)Ui(t[e])}}function wl(e,t){return e(t)}function vl(){}var Ia=!1;function kl(e,t,n){if(Ia)return e(t,n);Ia=!0;try{return wl(e,t,n)}finally{Ia=!1,(Kt!==null||$t!==null)&&(vl(),yl())}}function Bn(e,t){var n=e.stateNode;if(n===null)return null;var s=ia(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ro=!1;if(Je)try{var un={};Object.defineProperty(un,"passive",{get:function(){ro=!0}}),window.addEventListener("test",un,un),window.removeEventListener("test",un,un)}catch{ro=!1}function Yd(e,t,n,s,a,o,i,r,l){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var Tn=!1,Ds=null,Bs=!1,lo=null,Od={onError:function(e){Tn=!0,Ds=e}};function jd(e,t,n,s,a,o,i,r,l){Tn=!1,Ds=null,Yd.apply(Od,arguments)}function Fd(e,t,n,s,a,o,i,r,l){if(jd.apply(this,arguments),Tn){if(Tn){var d=Ds;Tn=!1,Ds=null}else throw Error(y(198));Bs||(Bs=!0,lo=d)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ki(e){if(Lt(e)!==e)throw Error(y(188))}function Rd(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,s=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(s=a.return,s!==null){n=s;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return Ki(a),e;if(o===s)return Ki(a),t;o=o.sibling}throw Error(y(188))}if(n.return!==s.return)n=a,s=o;else{for(var i=!1,r=a.child;r;){if(r===n){i=!0,n=a,s=o;break}if(r===s){i=!0,s=a,n=o;break}r=r.sibling}if(!i){for(r=o.child;r;){if(r===n){i=!0,n=o,s=a;break}if(r===s){i=!0,s=o,n=a;break}r=r.sibling}if(!i)throw Error(y(189))}}if(n.alternate!==s)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Sl(e){return e=Rd(e),e!==null?Tl(e):null}function Tl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tl(e);if(t!==null)return t;e=e.sibling}return null}var Il=ge.unstable_scheduleCallback,$i=ge.unstable_cancelCallback,Jd=ge.unstable_shouldYield,Ud=ge.unstable_requestPaint,J=ge.unstable_now,Kd=ge.unstable_getCurrentPriorityLevel,qo=ge.unstable_ImmediatePriority,Hl=ge.unstable_UserBlockingPriority,Ns=ge.unstable_NormalPriority,$d=ge.unstable_LowPriority,Pl=ge.unstable_IdlePriority,na=null,We=null;function Vd(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(na,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:qd,Gd=Math.log,Qd=Math.LN2;function qd(e){return e>>>=0,e===0?32:31-(Gd(e)/Qd|0)|0}var os=64,is=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _s(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,a=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var r=i&~a;r!==0?s=kn(r):(o&=i,o!==0&&(s=kn(o)))}else i=n&~a,i!==0?s=kn(i):o!==0&&(s=kn(o));if(s===0)return 0;if(t!==0&&t!==s&&!(t&a)&&(a=s&-s,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(s&4&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-Le(t),a=1<<n,s|=e[n],t&=~a;return s}function Xd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zd(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-Le(o),r=1<<i,l=a[i];l===-1?(!(r&n)||r&s)&&(a[i]=Xd(r,t)):l<=t&&(e.expiredLanes|=r),o&=~r}}function ho(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xl(){var e=os;return os<<=1,!(os&4194240)&&(os=64),e}function Ha(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function eu(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Le(n),o=1<<a;t[a]=0,s[a]=-1,e[a]=-1,n&=~o}}function Xo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-Le(n),a=1<<s;a&t|e[s]&t&&(e[s]|=t),n&=~a}}var D=0;function El(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cl,Zo,Al,Ll,Dl,uo=!1,rs=[],st=null,at=null,ot=null,Nn=new Map,_n=new Map,Xe=[],tu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vi(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":Nn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(t.pointerId)}}function cn(e,t,n,s,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:o,targetContainers:[a]},t!==null&&(t=qn(t),t!==null&&Zo(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function nu(e,t,n,s,a){switch(t){case"focusin":return st=cn(st,e,t,n,s,a),!0;case"dragenter":return at=cn(at,e,t,n,s,a),!0;case"mouseover":return ot=cn(ot,e,t,n,s,a),!0;case"pointerover":var o=a.pointerId;return Nn.set(o,cn(Nn.get(o)||null,e,t,n,s,a)),!0;case"gotpointercapture":return o=a.pointerId,_n.set(o,cn(_n.get(o)||null,e,t,n,s,a)),!0}return!1}function Bl(e){var t=kt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=bl(n),t!==null){e.blockedOn=t,Dl(e.priority,function(){Al(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=co(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);oo=s,n.target.dispatchEvent(s),oo=null}else return t=qn(n),t!==null&&Zo(t),e.blockedOn=n,!1;t.shift()}return!0}function Gi(e,t,n){bs(e)&&n.delete(t)}function su(){uo=!1,st!==null&&bs(st)&&(st=null),at!==null&&bs(at)&&(at=null),ot!==null&&bs(ot)&&(ot=null),Nn.forEach(Gi),_n.forEach(Gi)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,uo||(uo=!0,ge.unstable_scheduleCallback(ge.unstable_NormalPriority,su)))}function zn(e){function t(a){return pn(a,e)}if(0<rs.length){pn(rs[0],e);for(var n=1;n<rs.length;n++){var s=rs[n];s.blockedOn===e&&(s.blockedOn=null)}}for(st!==null&&pn(st,e),at!==null&&pn(at,e),ot!==null&&pn(ot,e),Nn.forEach(t),_n.forEach(t),n=0;n<Xe.length;n++)s=Xe[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<Xe.length&&(n=Xe[0],n.blockedOn===null);)Bl(n),n.blockedOn===null&&Xe.shift()}var Vt=Ve.ReactCurrentBatchConfig,zs=!0;function au(e,t,n,s){var a=D,o=Vt.transition;Vt.transition=null;try{D=1,ei(e,t,n,s)}finally{D=a,Vt.transition=o}}function ou(e,t,n,s){var a=D,o=Vt.transition;Vt.transition=null;try{D=4,ei(e,t,n,s)}finally{D=a,Vt.transition=o}}function ei(e,t,n,s){if(zs){var a=co(e,t,n,s);if(a===null)_a(e,t,s,Ws,n),Vi(e,s);else if(nu(a,e,t,n,s))s.stopPropagation();else if(Vi(e,s),t&4&&-1<tu.indexOf(e)){for(;a!==null;){var o=qn(a);if(o!==null&&Cl(o),o=co(e,t,n,s),o===null&&_a(e,t,s,Ws,n),o===a)break;a=o}a!==null&&s.stopPropagation()}else _a(e,t,s,null,n)}}var Ws=null;function co(e,t,n,s){if(Ws=null,e=Qo(s),e=kt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ws=e,null}function Nl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kd()){case qo:return 1;case Hl:return 4;case Ns:case $d:return 16;case Pl:return 536870912;default:return 16}default:return 16}}var tt=null,ti=null,Ss=null;function _l(){if(Ss)return Ss;var e,t=ti,n=t.length,s,a="value"in tt?tt.value:tt.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var i=n-e;for(s=1;s<=i&&t[n-s]===a[o-s];s++);return Ss=a.slice(e,1<s?1-s:void 0)}function Ts(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ls(){return!0}function Qi(){return!1}function we(e){function t(n,s,a,o,i){this._reactName=n,this._targetInst=a,this.type=s,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(n=e[r],this[r]=n?n(o):o[r]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ls:Qi,this.isPropagationStopped=Qi,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ls)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ls)},persist:function(){},isPersistent:ls}),t}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ni=we(on),Qn=O({},on,{view:0,detail:0}),iu=we(Qn),Pa,xa,fn,sa=O({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:si,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fn&&(fn&&e.type==="mousemove"?(Pa=e.screenX-fn.screenX,xa=e.screenY-fn.screenY):xa=Pa=0,fn=e),Pa)},movementY:function(e){return"movementY"in e?e.movementY:xa}}),qi=we(sa),ru=O({},sa,{dataTransfer:0}),lu=we(ru),hu=O({},Qn,{relatedTarget:0}),Ea=we(hu),du=O({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),uu=we(du),cu=O({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pu=we(cu),fu=O({},on,{data:0}),Xi=we(fu),mu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yu[e])?!!t[e]:!1}function si(){return wu}var vu=O({},Qn,{key:function(e){if(e.key){var t=mu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ts(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:si,charCode:function(e){return e.type==="keypress"?Ts(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ts(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ku=we(vu),bu=O({},sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zi=we(bu),Su=O({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:si}),Tu=we(Su),Iu=O({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hu=we(Iu),Pu=O({},sa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xu=we(Pu),Eu=[9,13,27,32],ai=Je&&"CompositionEvent"in window,In=null;Je&&"documentMode"in document&&(In=document.documentMode);var Cu=Je&&"TextEvent"in window&&!In,zl=Je&&(!ai||In&&8<In&&11>=In),er=" ",tr=!1;function Wl(e,t){switch(e){case"keyup":return Eu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ml(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _t=!1;function Au(e,t){switch(e){case"compositionend":return Ml(t);case"keypress":return t.which!==32?null:(tr=!0,er);case"textInput":return e=t.data,e===er&&tr?null:e;default:return null}}function Lu(e,t){if(_t)return e==="compositionend"||!ai&&Wl(e,t)?(e=_l(),Ss=ti=tt=null,_t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zl&&t.locale!=="ko"?null:t.data;default:return null}}var Du={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Du[e.type]:t==="textarea"}function Yl(e,t,n,s){gl(s),t=Ms(t,"onChange"),0<t.length&&(n=new ni("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var Hn=null,Wn=null;function Bu(e){Ql(e,0)}function aa(e){var t=Mt(e);if(hl(t))return e}function Nu(e,t){if(e==="change")return t}var Ol=!1;if(Je){var Ca;if(Je){var Aa="oninput"in document;if(!Aa){var sr=document.createElement("div");sr.setAttribute("oninput","return;"),Aa=typeof sr.oninput=="function"}Ca=Aa}else Ca=!1;Ol=Ca&&(!document.documentMode||9<document.documentMode)}function ar(){Hn&&(Hn.detachEvent("onpropertychange",jl),Wn=Hn=null)}function jl(e){if(e.propertyName==="value"&&aa(Wn)){var t=[];Yl(t,Wn,e,Qo(e)),kl(Bu,t)}}function _u(e,t,n){e==="focusin"?(ar(),Hn=t,Wn=n,Hn.attachEvent("onpropertychange",jl)):e==="focusout"&&ar()}function zu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return aa(Wn)}function Wu(e,t){if(e==="click")return aa(t)}function Mu(e,t){if(e==="input"||e==="change")return aa(t)}function Yu(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:Yu;function Mn(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var a=n[s];if(!$a.call(t,a)||!Be(e[a],t[a]))return!1}return!0}function or(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ir(e,t){var n=or(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=or(n)}}function Fl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rl(){for(var e=window,t=Ls();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ls(e.document)}return t}function oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ou(e){var t=Rl(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Fl(n.ownerDocument.documentElement,n)){if(s!==null&&oi(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(s.start,a);s=s.end===void 0?o:Math.min(s.end,a),!e.extend&&o>s&&(a=s,s=o,o=a),a=ir(n,o);var i=ir(n,s);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>s?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ju=Je&&"documentMode"in document&&11>=document.documentMode,zt=null,po=null,Pn=null,fo=!1;function rr(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fo||zt==null||zt!==Ls(s)||(s=zt,"selectionStart"in s&&oi(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Pn&&Mn(Pn,s)||(Pn=s,s=Ms(po,"onSelect"),0<s.length&&(t=new ni("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=zt)))}function hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wt={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},La={},Jl={};Je&&(Jl=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function oa(e){if(La[e])return La[e];if(!Wt[e])return e;var t=Wt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jl)return La[e]=t[n];return e}var Ul=oa("animationend"),Kl=oa("animationiteration"),$l=oa("animationstart"),Vl=oa("transitionend"),Gl=new Map,lr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pt(e,t){Gl.set(e,t),At(t,[e])}for(var Da=0;Da<lr.length;Da++){var Ba=lr[Da],Fu=Ba.toLowerCase(),Ru=Ba[0].toUpperCase()+Ba.slice(1);pt(Fu,"on"+Ru)}pt(Ul,"onAnimationEnd");pt(Kl,"onAnimationIteration");pt($l,"onAnimationStart");pt("dblclick","onDoubleClick");pt("focusin","onFocus");pt("focusout","onBlur");pt(Vl,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);At("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));At("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));At("onBeforeInput",["compositionend","keypress","textInput","paste"]);At("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));At("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));At("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ju=new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));function hr(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,Fd(s,t,void 0,e),e.currentTarget=null}function Ql(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],a=s.event;s=s.listeners;e:{var o=void 0;if(t)for(var i=s.length-1;0<=i;i--){var r=s[i],l=r.instance,d=r.currentTarget;if(r=r.listener,l!==o&&a.isPropagationStopped())break e;hr(a,r,d),o=l}else for(i=0;i<s.length;i++){if(r=s[i],l=r.instance,d=r.currentTarget,r=r.listener,l!==o&&a.isPropagationStopped())break e;hr(a,r,d),o=l}}}if(Bs)throw e=lo,Bs=!1,lo=null,e}function _(e,t){var n=t[vo];n===void 0&&(n=t[vo]=new Set);var s=e+"__bubble";n.has(s)||(ql(t,e,2,!1),n.add(s))}function Na(e,t,n){var s=0;t&&(s|=4),ql(n,e,s,t)}var ds="_reactListening"+Math.random().toString(36).slice(2);function Yn(e){if(!e[ds]){e[ds]=!0,al.forEach(function(n){n!=="selectionchange"&&(Ju.has(n)||Na(n,!1,e),Na(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ds]||(t[ds]=!0,Na("selectionchange",!1,t))}}function ql(e,t,n,s){switch(Nl(t)){case 1:var a=au;break;case 4:a=ou;break;default:a=ei}n=a.bind(null,t,n,e),a=void 0,!ro||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),s?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function _a(e,t,n,s,a){var o=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var i=s.tag;if(i===3||i===4){var r=s.stateNode.containerInfo;if(r===a||r.nodeType===8&&r.parentNode===a)break;if(i===4)for(i=s.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;i=i.return}for(;r!==null;){if(i=kt(r),i===null)return;if(l=i.tag,l===5||l===6){s=o=i;continue e}r=r.parentNode}}s=s.return}kl(function(){var d=o,m=Qo(n),f=[];e:{var c=Gl.get(e);if(c!==void 0){var w=ni,v=e;switch(e){case"keypress":if(Ts(n)===0)break e;case"keydown":case"keyup":w=ku;break;case"focusin":v="focus",w=Ea;break;case"focusout":v="blur",w=Ea;break;case"beforeblur":case"afterblur":w=Ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=qi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=lu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Tu;break;case Ul:case Kl:case $l:w=uu;break;case Vl:w=Hu;break;case"scroll":w=iu;break;case"wheel":w=xu;break;case"copy":case"cut":case"paste":w=pu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Zi}var k=(t&4)!==0,B=!k&&e==="scroll",u=k?c!==null?c+"Capture":null:c;k=[];for(var h=d,p;h!==null;){p=h;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,u!==null&&(g=Bn(h,u),g!=null&&k.push(On(h,g,p)))),B)break;h=h.return}0<k.length&&(c=new w(c,v,null,n,m),f.push({event:c,listeners:k}))}}if(!(t&7)){e:{if(c=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",c&&n!==oo&&(v=n.relatedTarget||n.fromElement)&&(kt(v)||v[Ue]))break e;if((w||c)&&(c=m.window===m?m:(c=m.ownerDocument)?c.defaultView||c.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=d,v=v?kt(v):null,v!==null&&(B=Lt(v),v!==B||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=d),w!==v)){if(k=qi,g="onMouseLeave",u="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(k=Zi,g="onPointerLeave",u="onPointerEnter",h="pointer"),B=w==null?c:Mt(w),p=v==null?c:Mt(v),c=new k(g,h+"leave",w,n,m),c.target=B,c.relatedTarget=p,g=null,kt(m)===d&&(k=new k(u,h+"enter",v,n,m),k.target=p,k.relatedTarget=B,g=k),B=g,w&&v)t:{for(k=w,u=v,h=0,p=k;p;p=Dt(p))h++;for(p=0,g=u;g;g=Dt(g))p++;for(;0<h-p;)k=Dt(k),h--;for(;0<p-h;)u=Dt(u),p--;for(;h--;){if(k===u||u!==null&&k===u.alternate)break t;k=Dt(k),u=Dt(u)}k=null}else k=null;w!==null&&dr(f,c,w,k,!1),v!==null&&B!==null&&dr(f,B,v,k,!0)}}e:{if(c=d?Mt(d):window,w=c.nodeName&&c.nodeName.toLowerCase(),w==="select"||w==="input"&&c.type==="file")var S=Nu;else if(nr(c))if(Ol)S=Mu;else{S=zu;var I=_u}else(w=c.nodeName)&&w.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(S=Wu);if(S&&(S=S(e,d))){Yl(f,S,n,m);break e}I&&I(e,c,d),e==="focusout"&&(I=c._wrapperState)&&I.controlled&&c.type==="number"&&eo(c,"number",c.value)}switch(I=d?Mt(d):window,e){case"focusin":(nr(I)||I.contentEditable==="true")&&(zt=I,po=d,Pn=null);break;case"focusout":Pn=po=zt=null;break;case"mousedown":fo=!0;break;case"contextmenu":case"mouseup":case"dragend":fo=!1,rr(f,n,m);break;case"selectionchange":if(ju)break;case"keydown":case"keyup":rr(f,n,m)}var H;if(ai)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else _t?Wl(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(zl&&n.locale!=="ko"&&(_t||P!=="onCompositionStart"?P==="onCompositionEnd"&&_t&&(H=_l()):(tt=m,ti="value"in tt?tt.value:tt.textContent,_t=!0)),I=Ms(d,P),0<I.length&&(P=new Xi(P,e,null,n,m),f.push({event:P,listeners:I}),H?P.data=H:(H=Ml(n),H!==null&&(P.data=H)))),(H=Cu?Au(e,n):Lu(e,n))&&(d=Ms(d,"onBeforeInput"),0<d.length&&(m=new Xi("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:d}),m.data=H))}Ql(f,t)})}function On(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ms(e,t){for(var n=t+"Capture",s=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Bn(e,n),o!=null&&s.unshift(On(e,o,a)),o=Bn(e,t),o!=null&&s.push(On(e,o,a))),e=e.return}return s}function Dt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dr(e,t,n,s,a){for(var o=t._reactName,i=[];n!==null&&n!==s;){var r=n,l=r.alternate,d=r.stateNode;if(l!==null&&l===s)break;r.tag===5&&d!==null&&(r=d,a?(l=Bn(n,o),l!=null&&i.unshift(On(n,l,r))):a||(l=Bn(n,o),l!=null&&i.push(On(n,l,r)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Uu=/\r\n?/g,Ku=/\u0000|\uFFFD/g;function ur(e){return(typeof e=="string"?e:""+e).replace(Uu,`
`).replace(Ku,"")}function us(e,t,n){if(t=ur(t),ur(e)!==t&&n)throw Error(y(425))}function Ys(){}var mo=null,go=null;function yo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wo=typeof setTimeout=="function"?setTimeout:void 0,$u=typeof clearTimeout=="function"?clearTimeout:void 0,cr=typeof Promise=="function"?Promise:void 0,Vu=typeof queueMicrotask=="function"?queueMicrotask:typeof cr<"u"?function(e){return cr.resolve(null).then(e).catch(Gu)}:wo;function Gu(e){setTimeout(function(){throw e})}function za(e,t){var n=t,s=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(s===0){e.removeChild(a),zn(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=a}while(n);zn(t)}function it(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pr(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rn=Math.random().toString(36).slice(2),ze="__reactFiber$"+rn,jn="__reactProps$"+rn,Ue="__reactContainer$"+rn,vo="__reactEvents$"+rn,Qu="__reactListeners$"+rn,qu="__reactHandles$"+rn;function kt(e){var t=e[ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ue]||n[ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pr(e);e!==null;){if(n=e[ze])return n;e=pr(e)}return t}e=n,n=e.parentNode}return null}function qn(e){return e=e[ze]||e[Ue],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function ia(e){return e[jn]||null}var ko=[],Yt=-1;function ft(e){return{current:e}}function z(e){0>Yt||(e.current=ko[Yt],ko[Yt]=null,Yt--)}function N(e,t){Yt++,ko[Yt]=e.current,e.current=t}var ct={},se=ft(ct),de=ft(!1),Ht=ct;function Xt(e,t){var n=e.type.contextTypes;if(!n)return ct;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=t[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function ue(e){return e=e.childContextTypes,e!=null}function Os(){z(de),z(se)}function fr(e,t,n){if(se.current!==ct)throw Error(y(168));N(se,t),N(de,n)}function Xl(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var a in s)if(!(a in t))throw Error(y(108,_d(e)||"Unknown",a));return O({},n,s)}function js(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ct,Ht=se.current,N(se,e),N(de,de.current),!0}function mr(e,t,n){var s=e.stateNode;if(!s)throw Error(y(169));n?(e=Xl(e,t,Ht),s.__reactInternalMemoizedMergedChildContext=e,z(de),z(se),N(se,e)):z(de),N(de,n)}var Oe=null,ra=!1,Wa=!1;function Zl(e){Oe===null?Oe=[e]:Oe.push(e)}function Xu(e){ra=!0,Zl(e)}function mt(){if(!Wa&&Oe!==null){Wa=!0;var e=0,t=D;try{var n=Oe;for(D=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}Oe=null,ra=!1}catch(a){throw Oe!==null&&(Oe=Oe.slice(e+1)),Il(qo,mt),a}finally{D=t,Wa=!1}}return null}var Ot=[],jt=0,Fs=null,Rs=0,ve=[],ke=0,Pt=null,je=1,Fe="";function wt(e,t){Ot[jt++]=Rs,Ot[jt++]=Fs,Fs=e,Rs=t}function eh(e,t,n){ve[ke++]=je,ve[ke++]=Fe,ve[ke++]=Pt,Pt=e;var s=je;e=Fe;var a=32-Le(s)-1;s&=~(1<<a),n+=1;var o=32-Le(t)+a;if(30<o){var i=a-a%5;o=(s&(1<<i)-1).toString(32),s>>=i,a-=i,je=1<<32-Le(t)+a|n<<a|s,Fe=o+e}else je=1<<o|n<<a|s,Fe=e}function ii(e){e.return!==null&&(wt(e,1),eh(e,1,0))}function ri(e){for(;e===Fs;)Fs=Ot[--jt],Ot[jt]=null,Rs=Ot[--jt],Ot[jt]=null;for(;e===Pt;)Pt=ve[--ke],ve[ke]=null,Fe=ve[--ke],ve[ke]=null,je=ve[--ke],ve[ke]=null}var me=null,fe=null,W=!1,Ae=null;function th(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gr(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,me=e,fe=it(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,me=e,fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pt!==null?{id:je,overflow:Fe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,me=e,fe=null,!0):!1;default:return!1}}function bo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(W){var t=fe;if(t){var n=t;if(!gr(e,t)){if(bo(e))throw Error(y(418));t=it(n.nextSibling);var s=me;t&&gr(e,t)?th(s,n):(e.flags=e.flags&-4097|2,W=!1,me=e)}}else{if(bo(e))throw Error(y(418));e.flags=e.flags&-4097|2,W=!1,me=e}}}function yr(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;me=e}function cs(e){if(e!==me)return!1;if(!W)return yr(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yo(e.type,e.memoizedProps)),t&&(t=fe)){if(bo(e))throw nh(),Error(y(418));for(;t;)th(e,t),t=it(t.nextSibling)}if(yr(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){fe=it(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}fe=null}}else fe=me?it(e.stateNode.nextSibling):null;return!0}function nh(){for(var e=fe;e;)e=it(e.nextSibling)}function Zt(){fe=me=null,W=!1}function li(e){Ae===null?Ae=[e]:Ae.push(e)}var Zu=Ve.ReactCurrentBatchConfig;function xe(e,t){if(e&&e.defaultProps){t=O({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Js=ft(null),Us=null,Ft=null,hi=null;function di(){hi=Ft=Us=null}function ui(e){var t=Js.current;z(Js),e._currentValue=t}function To(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function Gt(e,t){Us=e,hi=Ft=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function Te(e){var t=e._currentValue;if(hi!==e)if(e={context:e,memoizedValue:t,next:null},Ft===null){if(Us===null)throw Error(y(308));Ft=e,Us.dependencies={lanes:0,firstContext:e}}else Ft=Ft.next=e;return t}var bt=null;function ci(e){bt===null?bt=[e]:bt.push(e)}function sh(e,t,n,s){var a=t.interleaved;return a===null?(n.next=n,ci(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ke(e,s)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qe=!1;function pi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ah(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Re(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rt(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,L&2){var a=s.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),s.pending=t,Ke(e,n)}return a=s.interleaved,a===null?(t.next=t,ci(s)):(t.next=a.next,a.next=t),s.interleaved=t,Ke(e,n)}function Is(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Xo(e,n)}}function wr(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:s.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ks(e,t,n,s){var a=e.updateQueue;qe=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,r=a.shared.pending;if(r!==null){a.shared.pending=null;var l=r,d=l.next;l.next=null,i===null?o=d:i.next=d,i=l;var m=e.alternate;m!==null&&(m=m.updateQueue,r=m.lastBaseUpdate,r!==i&&(r===null?m.firstBaseUpdate=d:r.next=d,m.lastBaseUpdate=l))}if(o!==null){var f=a.baseState;i=0,m=d=l=null,r=o;do{var c=r.lane,w=r.eventTime;if((s&c)===c){m!==null&&(m=m.next={eventTime:w,lane:0,tag:r.tag,payload:r.payload,callback:r.callback,next:null});e:{var v=e,k=r;switch(c=t,w=n,k.tag){case 1:if(v=k.payload,typeof v=="function"){f=v.call(w,f,c);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,c=typeof v=="function"?v.call(w,f,c):v,c==null)break e;f=O({},f,c);break e;case 2:qe=!0}}r.callback!==null&&r.lane!==0&&(e.flags|=64,c=a.effects,c===null?a.effects=[r]:c.push(r))}else w={eventTime:w,lane:c,tag:r.tag,payload:r.payload,callback:r.callback,next:null},m===null?(d=m=w,l=f):m=m.next=w,i|=c;if(r=r.next,r===null){if(r=a.shared.pending,r===null)break;c=r,r=c.next,c.next=null,a.lastBaseUpdate=c,a.shared.pending=null}}while(!0);if(m===null&&(l=f),a.baseState=l,a.firstBaseUpdate=d,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);Et|=i,e.lanes=i,e.memoizedState=f}}function vr(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],a=s.callback;if(a!==null){if(s.callback=null,s=n,typeof a!="function")throw Error(y(191,a));a.call(s)}}}var oh=new sl.Component().refs;function Io(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var la={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=oe(),a=ht(e),o=Re(s,a);o.payload=t,n!=null&&(o.callback=n),t=rt(e,o,a),t!==null&&(De(t,e,a,s),Is(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=oe(),a=ht(e),o=Re(s,a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=rt(e,o,a),t!==null&&(De(t,e,a,s),Is(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),s=ht(e),a=Re(n,s);a.tag=2,t!=null&&(a.callback=t),t=rt(e,a,s),t!==null&&(De(t,e,s,n),Is(t,e,s))}};function kr(e,t,n,s,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,i):t.prototype&&t.prototype.isPureReactComponent?!Mn(n,s)||!Mn(a,o):!0}function ih(e,t,n){var s=!1,a=ct,o=t.contextType;return typeof o=="object"&&o!==null?o=Te(o):(a=ue(t)?Ht:se.current,s=t.contextTypes,o=(s=s!=null)?Xt(e,a):ct),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=la,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function br(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&la.enqueueReplaceState(t,t.state,null)}function Ho(e,t,n,s){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=oh,pi(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=Te(o):(o=ue(t)?Ht:se.current,a.context=Xt(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Io(e,t,o,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&la.enqueueReplaceState(a,a.state,null),Ks(e,n,a,s),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function mn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var s=n.stateNode}if(!s)throw Error(y(147,e));var a=s,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var r=a.refs;r===oh&&(r=a.refs={}),i===null?delete r[o]:r[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function ps(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Sr(e){var t=e._init;return t(e._payload)}function rh(e){function t(u,h){if(e){var p=u.deletions;p===null?(u.deletions=[h],u.flags|=16):p.push(h)}}function n(u,h){if(!e)return null;for(;h!==null;)t(u,h),h=h.sibling;return null}function s(u,h){for(u=new Map;h!==null;)h.key!==null?u.set(h.key,h):u.set(h.index,h),h=h.sibling;return u}function a(u,h){return u=dt(u,h),u.index=0,u.sibling=null,u}function o(u,h,p){return u.index=p,e?(p=u.alternate,p!==null?(p=p.index,p<h?(u.flags|=2,h):p):(u.flags|=2,h)):(u.flags|=1048576,h)}function i(u){return e&&u.alternate===null&&(u.flags|=2),u}function r(u,h,p,g){return h===null||h.tag!==6?(h=Ja(p,u.mode,g),h.return=u,h):(h=a(h,p),h.return=u,h)}function l(u,h,p,g){var S=p.type;return S===Nt?m(u,h,p.props.children,g,p.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Qe&&Sr(S)===h.type)?(g=a(h,p.props),g.ref=mn(u,h,p),g.return=u,g):(g=As(p.type,p.key,p.props,null,u.mode,g),g.ref=mn(u,h,p),g.return=u,g)}function d(u,h,p,g){return h===null||h.tag!==4||h.stateNode.containerInfo!==p.containerInfo||h.stateNode.implementation!==p.implementation?(h=Ua(p,u.mode,g),h.return=u,h):(h=a(h,p.children||[]),h.return=u,h)}function m(u,h,p,g,S){return h===null||h.tag!==7?(h=It(p,u.mode,g,S),h.return=u,h):(h=a(h,p),h.return=u,h)}function f(u,h,p){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ja(""+h,u.mode,p),h.return=u,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ns:return p=As(h.type,h.key,h.props,null,u.mode,p),p.ref=mn(u,null,h),p.return=u,p;case Bt:return h=Ua(h,u.mode,p),h.return=u,h;case Qe:var g=h._init;return f(u,g(h._payload),p)}if(vn(h)||dn(h))return h=It(h,u.mode,p,null),h.return=u,h;ps(u,h)}return null}function c(u,h,p,g){var S=h!==null?h.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:r(u,h,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ns:return p.key===S?l(u,h,p,g):null;case Bt:return p.key===S?d(u,h,p,g):null;case Qe:return S=p._init,c(u,h,S(p._payload),g)}if(vn(p)||dn(p))return S!==null?null:m(u,h,p,g,null);ps(u,p)}return null}function w(u,h,p,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return u=u.get(p)||null,r(h,u,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ns:return u=u.get(g.key===null?p:g.key)||null,l(h,u,g,S);case Bt:return u=u.get(g.key===null?p:g.key)||null,d(h,u,g,S);case Qe:var I=g._init;return w(u,h,p,I(g._payload),S)}if(vn(g)||dn(g))return u=u.get(p)||null,m(h,u,g,S,null);ps(h,g)}return null}function v(u,h,p,g){for(var S=null,I=null,H=h,P=h=0,F=null;H!==null&&P<p.length;P++){H.index>P?(F=H,H=null):F=H.sibling;var A=c(u,H,p[P],g);if(A===null){H===null&&(H=F);break}e&&H&&A.alternate===null&&t(u,H),h=o(A,h,P),I===null?S=A:I.sibling=A,I=A,H=F}if(P===p.length)return n(u,H),W&&wt(u,P),S;if(H===null){for(;P<p.length;P++)H=f(u,p[P],g),H!==null&&(h=o(H,h,P),I===null?S=H:I.sibling=H,I=H);return W&&wt(u,P),S}for(H=s(u,H);P<p.length;P++)F=w(H,u,P,p[P],g),F!==null&&(e&&F.alternate!==null&&H.delete(F.key===null?P:F.key),h=o(F,h,P),I===null?S=F:I.sibling=F,I=F);return e&&H.forEach(function(He){return t(u,He)}),W&&wt(u,P),S}function k(u,h,p,g){var S=dn(p);if(typeof S!="function")throw Error(y(150));if(p=S.call(p),p==null)throw Error(y(151));for(var I=S=null,H=h,P=h=0,F=null,A=p.next();H!==null&&!A.done;P++,A=p.next()){H.index>P?(F=H,H=null):F=H.sibling;var He=c(u,H,A.value,g);if(He===null){H===null&&(H=F);break}e&&H&&He.alternate===null&&t(u,H),h=o(He,h,P),I===null?S=He:I.sibling=He,I=He,H=F}if(A.done)return n(u,H),W&&wt(u,P),S;if(H===null){for(;!A.done;P++,A=p.next())A=f(u,A.value,g),A!==null&&(h=o(A,h,P),I===null?S=A:I.sibling=A,I=A);return W&&wt(u,P),S}for(H=s(u,H);!A.done;P++,A=p.next())A=w(H,u,P,A.value,g),A!==null&&(e&&A.alternate!==null&&H.delete(A.key===null?P:A.key),h=o(A,h,P),I===null?S=A:I.sibling=A,I=A);return e&&H.forEach(function(ln){return t(u,ln)}),W&&wt(u,P),S}function B(u,h,p,g){if(typeof p=="object"&&p!==null&&p.type===Nt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ns:e:{for(var S=p.key,I=h;I!==null;){if(I.key===S){if(S=p.type,S===Nt){if(I.tag===7){n(u,I.sibling),h=a(I,p.props.children),h.return=u,u=h;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Qe&&Sr(S)===I.type){n(u,I.sibling),h=a(I,p.props),h.ref=mn(u,I,p),h.return=u,u=h;break e}n(u,I);break}else t(u,I);I=I.sibling}p.type===Nt?(h=It(p.props.children,u.mode,g,p.key),h.return=u,u=h):(g=As(p.type,p.key,p.props,null,u.mode,g),g.ref=mn(u,h,p),g.return=u,u=g)}return i(u);case Bt:e:{for(I=p.key;h!==null;){if(h.key===I)if(h.tag===4&&h.stateNode.containerInfo===p.containerInfo&&h.stateNode.implementation===p.implementation){n(u,h.sibling),h=a(h,p.children||[]),h.return=u,u=h;break e}else{n(u,h);break}else t(u,h);h=h.sibling}h=Ua(p,u.mode,g),h.return=u,u=h}return i(u);case Qe:return I=p._init,B(u,h,I(p._payload),g)}if(vn(p))return v(u,h,p,g);if(dn(p))return k(u,h,p,g);ps(u,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,h!==null&&h.tag===6?(n(u,h.sibling),h=a(h,p),h.return=u,u=h):(n(u,h),h=Ja(p,u.mode,g),h.return=u,u=h),i(u)):n(u,h)}return B}var en=rh(!0),lh=rh(!1),Xn={},Me=ft(Xn),Fn=ft(Xn),Rn=ft(Xn);function St(e){if(e===Xn)throw Error(y(174));return e}function fi(e,t){switch(N(Rn,t),N(Fn,e),N(Me,Xn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:no(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=no(t,e)}z(Me),N(Me,t)}function tn(){z(Me),z(Fn),z(Rn)}function hh(e){St(Rn.current);var t=St(Me.current),n=no(t,e.type);t!==n&&(N(Fn,e),N(Me,n))}function mi(e){Fn.current===e&&(z(Me),z(Fn))}var M=ft(0);function $s(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ma=[];function gi(){for(var e=0;e<Ma.length;e++)Ma[e]._workInProgressVersionPrimary=null;Ma.length=0}var Hs=Ve.ReactCurrentDispatcher,Ya=Ve.ReactCurrentBatchConfig,xt=0,Y=null,K=null,G=null,Vs=!1,xn=!1,Jn=0,ec=0;function ee(){throw Error(y(321))}function yi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function wi(e,t,n,s,a,o){if(xt=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Hs.current=e===null||e.memoizedState===null?ac:oc,e=n(s,a),xn){o=0;do{if(xn=!1,Jn=0,25<=o)throw Error(y(301));o+=1,G=K=null,t.updateQueue=null,Hs.current=ic,e=n(s,a)}while(xn)}if(Hs.current=Gs,t=K!==null&&K.next!==null,xt=0,G=K=Y=null,Vs=!1,t)throw Error(y(300));return e}function vi(){var e=Jn!==0;return Jn=0,e}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return G===null?Y.memoizedState=G=e:G=G.next=e,G}function Ie(){if(K===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=G===null?Y.memoizedState:G.next;if(t!==null)G=t,K=e;else{if(e===null)throw Error(y(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},G===null?Y.memoizedState=G=e:G=G.next=e}return G}function Un(e,t){return typeof t=="function"?t(e):t}function Oa(e){var t=Ie(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var s=K,a=s.baseQueue,o=n.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}s.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,s=s.baseState;var r=i=null,l=null,d=o;do{var m=d.lane;if((xt&m)===m)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),s=d.hasEagerState?d.eagerState:e(s,d.action);else{var f={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(r=l=f,i=s):l=l.next=f,Y.lanes|=m,Et|=m}d=d.next}while(d!==null&&d!==o);l===null?i=s:l.next=r,Be(s,t.memoizedState)||(he=!0),t.memoizedState=s,t.baseState=i,t.baseQueue=l,n.lastRenderedState=s}if(e=n.interleaved,e!==null){a=e;do o=a.lane,Y.lanes|=o,Et|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ja(e){var t=Ie(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var s=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);Be(o,t.memoizedState)||(he=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,s]}function dh(){}function uh(e,t){var n=Y,s=Ie(),a=t(),o=!Be(s.memoizedState,a);if(o&&(s.memoizedState=a,he=!0),s=s.queue,ki(fh.bind(null,n,s,e),[e]),s.getSnapshot!==t||o||G!==null&&G.memoizedState.tag&1){if(n.flags|=2048,Kn(9,ph.bind(null,n,s,a,t),void 0,null),Q===null)throw Error(y(349));xt&30||ch(n,t,a)}return a}function ch(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ph(e,t,n,s){t.value=n,t.getSnapshot=s,mh(t)&&gh(e)}function fh(e,t,n){return n(function(){mh(t)&&gh(e)})}function mh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function gh(e){var t=Ke(e,1);t!==null&&De(t,e,1,-1)}function Tr(e){var t=_e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Un,lastRenderedState:e},t.queue=e,e=e.dispatch=sc.bind(null,Y,e),[t.memoizedState,e]}function Kn(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function yh(){return Ie().memoizedState}function Ps(e,t,n,s){var a=_e();Y.flags|=e,a.memoizedState=Kn(1|t,n,void 0,s===void 0?null:s)}function ha(e,t,n,s){var a=Ie();s=s===void 0?null:s;var o=void 0;if(K!==null){var i=K.memoizedState;if(o=i.destroy,s!==null&&yi(s,i.deps)){a.memoizedState=Kn(t,n,o,s);return}}Y.flags|=e,a.memoizedState=Kn(1|t,n,o,s)}function Ir(e,t){return Ps(8390656,8,e,t)}function ki(e,t){return ha(2048,8,e,t)}function wh(e,t){return ha(4,2,e,t)}function vh(e,t){return ha(4,4,e,t)}function kh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bh(e,t,n){return n=n!=null?n.concat([e]):null,ha(4,4,kh.bind(null,t,e),n)}function bi(){}function Sh(e,t){var n=Ie();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&yi(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function Th(e,t){var n=Ie();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&yi(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function Ih(e,t,n){return xt&21?(Be(n,t)||(n=xl(),Y.lanes|=n,Et|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function tc(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var s=Ya.transition;Ya.transition={};try{e(!1),t()}finally{D=n,Ya.transition=s}}function Hh(){return Ie().memoizedState}function nc(e,t,n){var s=ht(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},Ph(e))xh(t,n);else if(n=sh(e,t,n,s),n!==null){var a=oe();De(n,e,s,a),Eh(n,t,s)}}function sc(e,t,n){var s=ht(e),a={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ph(e))xh(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,r=o(i,n);if(a.hasEagerState=!0,a.eagerState=r,Be(r,i)){var l=t.interleaved;l===null?(a.next=a,ci(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}n=sh(e,t,a,s),n!==null&&(a=oe(),De(n,e,s,a),Eh(n,t,s))}}function Ph(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function xh(e,t){xn=Vs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Eh(e,t,n){if(n&4194240){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Xo(e,n)}}var Gs={readContext:Te,useCallback:ee,useContext:ee,useEffect:ee,useImperativeHandle:ee,useInsertionEffect:ee,useLayoutEffect:ee,useMemo:ee,useReducer:ee,useRef:ee,useState:ee,useDebugValue:ee,useDeferredValue:ee,useTransition:ee,useMutableSource:ee,useSyncExternalStore:ee,useId:ee,unstable_isNewReconciler:!1},ac={readContext:Te,useCallback:function(e,t){return _e().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:Ir,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ps(4194308,4,kh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ps(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ps(4,2,e,t)},useMemo:function(e,t){var n=_e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=_e();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=nc.bind(null,Y,e),[s.memoizedState,e]},useRef:function(e){var t=_e();return e={current:e},t.memoizedState=e},useState:Tr,useDebugValue:bi,useDeferredValue:function(e){return _e().memoizedState=e},useTransition:function(){var e=Tr(!1),t=e[0];return e=tc.bind(null,e[1]),_e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=Y,a=_e();if(W){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),Q===null)throw Error(y(349));xt&30||ch(s,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ir(fh.bind(null,s,o,e),[e]),s.flags|=2048,Kn(9,ph.bind(null,s,o,n,t),void 0,null),n},useId:function(){var e=_e(),t=Q.identifierPrefix;if(W){var n=Fe,s=je;n=(s&~(1<<32-Le(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=Jn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ec++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},oc={readContext:Te,useCallback:Sh,useContext:Te,useEffect:ki,useImperativeHandle:bh,useInsertionEffect:wh,useLayoutEffect:vh,useMemo:Th,useReducer:Oa,useRef:yh,useState:function(){return Oa(Un)},useDebugValue:bi,useDeferredValue:function(e){var t=Ie();return Ih(t,K.memoizedState,e)},useTransition:function(){var e=Oa(Un)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:dh,useSyncExternalStore:uh,useId:Hh,unstable_isNewReconciler:!1},ic={readContext:Te,useCallback:Sh,useContext:Te,useEffect:ki,useImperativeHandle:bh,useInsertionEffect:wh,useLayoutEffect:vh,useMemo:Th,useReducer:ja,useRef:yh,useState:function(){return ja(Un)},useDebugValue:bi,useDeferredValue:function(e){var t=Ie();return K===null?t.memoizedState=e:Ih(t,K.memoizedState,e)},useTransition:function(){var e=ja(Un)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:dh,useSyncExternalStore:uh,useId:Hh,unstable_isNewReconciler:!1};function nn(e,t){try{var n="",s=t;do n+=Nd(s),s=s.return;while(s);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Fa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Po(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var rc=typeof WeakMap=="function"?WeakMap:Map;function Ch(e,t,n){n=Re(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){qs||(qs=!0,zo=s),Po(e,t)},n}function Ah(e,t,n){n=Re(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var a=t.value;n.payload=function(){return s(a)},n.callback=function(){Po(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Po(e,t),typeof s!="function"&&(lt===null?lt=new Set([this]):lt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Hr(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new rc;var a=new Set;s.set(t,a)}else a=s.get(t),a===void 0&&(a=new Set,s.set(t,a));a.has(n)||(a.add(n),e=bc.bind(null,e,t,n),t.then(e,e))}function Pr(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xr(e,t,n,s,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Re(-1,1),t.tag=2,rt(n,t,1))),n.lanes|=1),e)}var lc=Ve.ReactCurrentOwner,he=!1;function ae(e,t,n,s){t.child=e===null?lh(t,null,n,s):en(t,e.child,n,s)}function Er(e,t,n,s,a){n=n.render;var o=t.ref;return Gt(t,a),s=wi(e,t,n,s,o,a),n=vi(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,$e(e,t,a)):(W&&n&&ii(t),t.flags|=1,ae(e,t,s,a),t.child)}function Cr(e,t,n,s,a){if(e===null){var o=n.type;return typeof o=="function"&&!Ci(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Lh(e,t,o,s,a)):(e=As(n.type,null,s,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:Mn,n(i,s)&&e.ref===t.ref)return $e(e,t,a)}return t.flags|=1,e=dt(o,s),e.ref=t.ref,e.return=t,t.child=e}function Lh(e,t,n,s,a){if(e!==null){var o=e.memoizedProps;if(Mn(o,s)&&e.ref===t.ref)if(he=!1,t.pendingProps=s=o,(e.lanes&a)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,$e(e,t,a)}return xo(e,t,n,s,a)}function Dh(e,t,n){var s=t.pendingProps,a=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},N(Jt,pe),pe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,N(Jt,pe),pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:n,N(Jt,pe),pe|=s}else o!==null?(s=o.baseLanes|n,t.memoizedState=null):s=n,N(Jt,pe),pe|=s;return ae(e,t,a,n),t.child}function Bh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xo(e,t,n,s,a){var o=ue(n)?Ht:se.current;return o=Xt(t,o),Gt(t,a),n=wi(e,t,n,s,o,a),s=vi(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,$e(e,t,a)):(W&&s&&ii(t),t.flags|=1,ae(e,t,n,a),t.child)}function Ar(e,t,n,s,a){if(ue(n)){var o=!0;js(t)}else o=!1;if(Gt(t,a),t.stateNode===null)xs(e,t),ih(t,n,s),Ho(t,n,s,a),s=!0;else if(e===null){var i=t.stateNode,r=t.memoizedProps;i.props=r;var l=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Te(d):(d=ue(n)?Ht:se.current,d=Xt(t,d));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==s||l!==d)&&br(t,i,s,d),qe=!1;var c=t.memoizedState;i.state=c,Ks(t,s,i,a),l=t.memoizedState,r!==s||c!==l||de.current||qe?(typeof m=="function"&&(Io(t,n,m,s),l=t.memoizedState),(r=qe||kr(t,n,r,s,c,l,d))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=l),i.props=s,i.state=l,i.context=d,s=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{i=t.stateNode,ah(e,t),r=t.memoizedProps,d=t.type===t.elementType?r:xe(t.type,r),i.props=d,f=t.pendingProps,c=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=Te(l):(l=ue(n)?Ht:se.current,l=Xt(t,l));var w=n.getDerivedStateFromProps;(m=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==f||c!==l)&&br(t,i,s,l),qe=!1,c=t.memoizedState,i.state=c,Ks(t,s,i,a);var v=t.memoizedState;r!==f||c!==v||de.current||qe?(typeof w=="function"&&(Io(t,n,w,s),v=t.memoizedState),(d=qe||kr(t,n,d,s,c,v,l)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(s,v,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(s,v,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=v),i.props=s,i.state=v,i.context=l,s=d):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),s=!1)}return Eo(e,t,n,s,o,a)}function Eo(e,t,n,s,a,o){Bh(e,t);var i=(t.flags&128)!==0;if(!s&&!i)return a&&mr(t,n,!1),$e(e,t,o);s=t.stateNode,lc.current=t;var r=i&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&i?(t.child=en(t,e.child,null,o),t.child=en(t,null,r,o)):ae(e,t,r,o),t.memoizedState=s.state,a&&mr(t,n,!0),t.child}function Nh(e){var t=e.stateNode;t.pendingContext?fr(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fr(e,t.context,!1),fi(e,t.containerInfo)}function Lr(e,t,n,s,a){return Zt(),li(a),t.flags|=256,ae(e,t,n,s),t.child}var Co={dehydrated:null,treeContext:null,retryLane:0};function Ao(e){return{baseLanes:e,cachePool:null,transitions:null}}function _h(e,t,n){var s=t.pendingProps,a=M.current,o=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(a&2)!==0),r?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),N(M,a&1),e===null)return So(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=s.children,e=s.fallback,o?(s=t.mode,o=t.child,i={mode:"hidden",children:i},!(s&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=ca(i,s,0,null),e=It(e,s,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ao(n),t.memoizedState=Co,e):Si(t,i));if(a=e.memoizedState,a!==null&&(r=a.dehydrated,r!==null))return hc(e,t,i,s,r,a,n);if(o){o=s.fallback,i=t.mode,a=e.child,r=a.sibling;var l={mode:"hidden",children:s.children};return!(i&1)&&t.child!==a?(s=t.child,s.childLanes=0,s.pendingProps=l,t.deletions=null):(s=dt(a,l),s.subtreeFlags=a.subtreeFlags&14680064),r!==null?o=dt(r,o):(o=It(o,i,n,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,s=o,o=t.child,i=e.child.memoizedState,i=i===null?Ao(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Co,s}return o=e.child,e=o.sibling,s=dt(o,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function Si(e,t){return t=ca({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fs(e,t,n,s){return s!==null&&li(s),en(t,e.child,null,n),e=Si(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hc(e,t,n,s,a,o,i){if(n)return t.flags&256?(t.flags&=-257,s=Fa(Error(y(422))),fs(e,t,i,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=s.fallback,a=t.mode,s=ca({mode:"visible",children:s.children},a,0,null),o=It(o,a,i,null),o.flags|=2,s.return=t,o.return=t,s.sibling=o,t.child=s,t.mode&1&&en(t,e.child,null,i),t.child.memoizedState=Ao(i),t.memoizedState=Co,o);if(!(t.mode&1))return fs(e,t,i,null);if(a.data==="$!"){if(s=a.nextSibling&&a.nextSibling.dataset,s)var r=s.dgst;return s=r,o=Error(y(419)),s=Fa(o,s,void 0),fs(e,t,i,s)}if(r=(i&e.childLanes)!==0,he||r){if(s=Q,s!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(s.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Ke(e,a),De(s,e,a,-1))}return Ei(),s=Fa(Error(y(421))),fs(e,t,i,s)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Sc.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,fe=it(a.nextSibling),me=t,W=!0,Ae=null,e!==null&&(ve[ke++]=je,ve[ke++]=Fe,ve[ke++]=Pt,je=e.id,Fe=e.overflow,Pt=t),t=Si(t,s.children),t.flags|=4096,t)}function Dr(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),To(e.return,t,n)}function Ra(e,t,n,s,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=n,o.tailMode=a)}function zh(e,t,n){var s=t.pendingProps,a=s.revealOrder,o=s.tail;if(ae(e,t,s.children,n),s=M.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dr(e,n,t);else if(e.tag===19)Dr(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(N(M,s),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&$s(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ra(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&$s(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ra(t,!0,n,null,o);break;case"together":Ra(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $e(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Et|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dc(e,t,n){switch(t.tag){case 3:Nh(t),Zt();break;case 5:hh(t);break;case 1:ue(t.type)&&js(t);break;case 4:fi(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,a=t.memoizedProps.value;N(Js,s._currentValue),s._currentValue=a;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(N(M,M.current&1),t.flags|=128,null):n&t.child.childLanes?_h(e,t,n):(N(M,M.current&1),e=$e(e,t,n),e!==null?e.sibling:null);N(M,M.current&1);break;case 19:if(s=(n&t.childLanes)!==0,e.flags&128){if(s)return zh(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),N(M,M.current),s)break;return null;case 22:case 23:return t.lanes=0,Dh(e,t,n)}return $e(e,t,n)}var Wh,Lo,Mh,Yh;Wh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lo=function(){};Mh=function(e,t,n,s){var a=e.memoizedProps;if(a!==s){e=t.stateNode,St(Me.current);var o=null;switch(n){case"input":a=Xa(e,a),s=Xa(e,s),o=[];break;case"select":a=O({},a,{value:void 0}),s=O({},s,{value:void 0}),o=[];break;case"textarea":a=to(e,a),s=to(e,s),o=[];break;default:typeof a.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ys)}so(n,s);var i;n=null;for(d in a)if(!s.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var r=a[d];for(i in r)r.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ln.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in s){var l=s[d];if(r=a!=null?a[d]:void 0,s.hasOwnProperty(d)&&l!==r&&(l!=null||r!=null))if(d==="style")if(r){for(i in r)!r.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&r[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(o||(o=[]),o.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,r=r?r.__html:void 0,l!=null&&r!==l&&(o=o||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&_("scroll",e),o||r===l||(o=[])):(o=o||[]).push(d,l))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Yh=function(e,t,n,s){n!==s&&(t.flags|=4)};function gn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags&14680064,s|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,s|=a.subtreeFlags,s|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function uc(e,t,n){var s=t.pendingProps;switch(ri(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(t),null;case 1:return ue(t.type)&&Os(),te(t),null;case 3:return s=t.stateNode,tn(),z(de),z(se),gi(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(cs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ae!==null&&(Yo(Ae),Ae=null))),Lo(e,t),te(t),null;case 5:mi(t);var a=St(Rn.current);if(n=t.type,e!==null&&t.stateNode!=null)Mh(e,t,n,s,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(y(166));return te(t),null}if(e=St(Me.current),cs(t)){s=t.stateNode,n=t.type;var o=t.memoizedProps;switch(s[ze]=t,s[jn]=o,e=(t.mode&1)!==0,n){case"dialog":_("cancel",s),_("close",s);break;case"iframe":case"object":case"embed":_("load",s);break;case"video":case"audio":for(a=0;a<bn.length;a++)_(bn[a],s);break;case"source":_("error",s);break;case"img":case"image":case"link":_("error",s),_("load",s);break;case"details":_("toggle",s);break;case"input":ji(s,o),_("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},_("invalid",s);break;case"textarea":Ri(s,o),_("invalid",s)}so(n,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var r=o[i];i==="children"?typeof r=="string"?s.textContent!==r&&(o.suppressHydrationWarning!==!0&&us(s.textContent,r,e),a=["children",r]):typeof r=="number"&&s.textContent!==""+r&&(o.suppressHydrationWarning!==!0&&us(s.textContent,r,e),a=["children",""+r]):Ln.hasOwnProperty(i)&&r!=null&&i==="onScroll"&&_("scroll",s)}switch(n){case"input":ss(s),Fi(s,o,!0);break;case"textarea":ss(s),Ji(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=Ys)}s=a,t.updateQueue=s,s!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=i.createElement(n,{is:s.is}):(e=i.createElement(n),n==="select"&&(i=e,s.multiple?i.multiple=!0:s.size&&(i.size=s.size))):e=i.createElementNS(e,n),e[ze]=t,e[jn]=s,Wh(e,t,!1,!1),t.stateNode=e;e:{switch(i=ao(n,s),n){case"dialog":_("cancel",e),_("close",e),a=s;break;case"iframe":case"object":case"embed":_("load",e),a=s;break;case"video":case"audio":for(a=0;a<bn.length;a++)_(bn[a],e);a=s;break;case"source":_("error",e),a=s;break;case"img":case"image":case"link":_("error",e),_("load",e),a=s;break;case"details":_("toggle",e),a=s;break;case"input":ji(e,s),a=Xa(e,s),_("invalid",e);break;case"option":a=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},a=O({},s,{value:void 0}),_("invalid",e);break;case"textarea":Ri(e,s),a=to(e,s),_("invalid",e);break;default:a=s}so(n,a),r=a;for(o in r)if(r.hasOwnProperty(o)){var l=r[o];o==="style"?ml(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pl(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Dn(e,l):typeof l=="number"&&Dn(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ln.hasOwnProperty(o)?l!=null&&o==="onScroll"&&_("scroll",e):l!=null&&Ko(e,o,l,i))}switch(n){case"input":ss(e),Fi(e,s,!1);break;case"textarea":ss(e),Ji(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ut(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?Ut(e,!!s.multiple,o,!1):s.defaultValue!=null&&Ut(e,!!s.multiple,s.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ys)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return te(t),null;case 6:if(e&&t.stateNode!=null)Yh(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(y(166));if(n=St(Rn.current),St(Me.current),cs(t)){if(s=t.stateNode,n=t.memoizedProps,s[ze]=t,(o=s.nodeValue!==n)&&(e=me,e!==null))switch(e.tag){case 3:us(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&us(s.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[ze]=t,t.stateNode=s}return te(t),null;case 13:if(z(M),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&fe!==null&&t.mode&1&&!(t.flags&128))nh(),Zt(),t.flags|=98560,o=!1;else if(o=cs(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[ze]=t}else Zt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;te(t),o=!1}else Ae!==null&&(Yo(Ae),Ae=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||M.current&1?$===0&&($=3):Ei())),t.updateQueue!==null&&(t.flags|=4),te(t),null);case 4:return tn(),Lo(e,t),e===null&&Yn(t.stateNode.containerInfo),te(t),null;case 10:return ui(t.type._context),te(t),null;case 17:return ue(t.type)&&Os(),te(t),null;case 19:if(z(M),o=t.memoizedState,o===null)return te(t),null;if(s=(t.flags&128)!==0,i=o.rendering,i===null)if(s)gn(o,!1);else{if($!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=$s(e),i!==null){for(t.flags|=128,gn(o,!1),s=i.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)o=n,e=s,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return N(M,M.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>sn&&(t.flags|=128,s=!0,gn(o,!1),t.lanes=4194304)}else{if(!s)if(e=$s(i),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!W)return te(t),null}else 2*J()-o.renderingStartTime>sn&&n!==1073741824&&(t.flags|=128,s=!0,gn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=M.current,N(M,s?n&1|2:n&1),t):(te(t),null);case 22:case 23:return xi(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?pe&1073741824&&(te(t),t.subtreeFlags&6&&(t.flags|=8192)):te(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function cc(e,t){switch(ri(t),t.tag){case 1:return ue(t.type)&&Os(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),z(de),z(se),gi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mi(t),null;case 13:if(z(M),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));Zt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(M),null;case 4:return tn(),null;case 10:return ui(t.type._context),null;case 22:case 23:return xi(),null;case 24:return null;default:return null}}var ms=!1,ne=!1,pc=typeof WeakSet=="function"?WeakSet:Set,b=null;function Rt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){j(e,t,s)}else n.current=null}function Do(e,t,n){try{n()}catch(s){j(e,t,s)}}var Br=!1;function fc(e,t){if(mo=zs,e=Rl(),oi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var a=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,r=-1,l=-1,d=0,m=0,f=e,c=null;t:for(;;){for(var w;f!==n||a!==0&&f.nodeType!==3||(r=i+a),f!==o||s!==0&&f.nodeType!==3||(l=i+s),f.nodeType===3&&(i+=f.nodeValue.length),(w=f.firstChild)!==null;)c=f,f=w;for(;;){if(f===e)break t;if(c===n&&++d===a&&(r=i),c===o&&++m===s&&(l=i),(w=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=w}n=r===-1||l===-1?null:{start:r,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(go={focusedElem:e,selectionRange:n},zs=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,B=v.memoizedState,u=t.stateNode,h=u.getSnapshotBeforeUpdate(t.elementType===t.type?k:xe(t.type,k),B);u.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(g){j(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return v=Br,Br=!1,v}function En(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&Do(t,n,o)}a=a.next}while(a!==s)}}function da(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function Bo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Oh(e){var t=e.alternate;t!==null&&(e.alternate=null,Oh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ze],delete t[jn],delete t[vo],delete t[Qu],delete t[qu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jh(e){return e.tag===5||e.tag===3||e.tag===4}function Nr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function No(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ys));else if(s!==4&&(e=e.child,e!==null))for(No(e,t,n),e=e.sibling;e!==null;)No(e,t,n),e=e.sibling}function _o(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(_o(e,t,n),e=e.sibling;e!==null;)_o(e,t,n),e=e.sibling}var q=null,Ee=!1;function Ge(e,t,n){for(n=n.child;n!==null;)Fh(e,t,n),n=n.sibling}function Fh(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(na,n)}catch{}switch(n.tag){case 5:ne||Rt(n,t);case 6:var s=q,a=Ee;q=null,Ge(e,t,n),q=s,Ee=a,q!==null&&(Ee?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Ee?(e=q,n=n.stateNode,e.nodeType===8?za(e.parentNode,n):e.nodeType===1&&za(e,n),zn(e)):za(q,n.stateNode));break;case 4:s=q,a=Ee,q=n.stateNode.containerInfo,Ee=!0,Ge(e,t,n),q=s,Ee=a;break;case 0:case 11:case 14:case 15:if(!ne&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){a=s=s.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Do(n,t,i),a=a.next}while(a!==s)}Ge(e,t,n);break;case 1:if(!ne&&(Rt(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(r){j(n,t,r)}Ge(e,t,n);break;case 21:Ge(e,t,n);break;case 22:n.mode&1?(ne=(s=ne)||n.memoizedState!==null,Ge(e,t,n),ne=s):Ge(e,t,n);break;default:Ge(e,t,n)}}function _r(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pc),t.forEach(function(s){var a=Tc.bind(null,e,s);n.has(s)||(n.add(s),s.then(a,a))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var a=n[s];try{var o=e,i=t,r=i;e:for(;r!==null;){switch(r.tag){case 5:q=r.stateNode,Ee=!1;break e;case 3:q=r.stateNode.containerInfo,Ee=!0;break e;case 4:q=r.stateNode.containerInfo,Ee=!0;break e}r=r.return}if(q===null)throw Error(y(160));Fh(o,i,a),q=null,Ee=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(d){j(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rh(t,e),t=t.sibling}function Rh(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Ne(e),s&4){try{En(3,e,e.return),da(3,e)}catch(k){j(e,e.return,k)}try{En(5,e,e.return)}catch(k){j(e,e.return,k)}}break;case 1:Pe(t,e),Ne(e),s&512&&n!==null&&Rt(n,n.return);break;case 5:if(Pe(t,e),Ne(e),s&512&&n!==null&&Rt(n,n.return),e.flags&32){var a=e.stateNode;try{Dn(a,"")}catch(k){j(e,e.return,k)}}if(s&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,r=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{r==="input"&&o.type==="radio"&&o.name!=null&&dl(a,o),ao(r,i);var d=ao(r,o);for(i=0;i<l.length;i+=2){var m=l[i],f=l[i+1];m==="style"?ml(a,f):m==="dangerouslySetInnerHTML"?pl(a,f):m==="children"?Dn(a,f):Ko(a,m,f,d)}switch(r){case"input":Za(a,o);break;case"textarea":ul(a,o);break;case"select":var c=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Ut(a,!!o.multiple,w,!1):c!==!!o.multiple&&(o.defaultValue!=null?Ut(a,!!o.multiple,o.defaultValue,!0):Ut(a,!!o.multiple,o.multiple?[]:"",!1))}a[jn]=o}catch(k){j(e,e.return,k)}}break;case 6:if(Pe(t,e),Ne(e),s&4){if(e.stateNode===null)throw Error(y(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(k){j(e,e.return,k)}}break;case 3:if(Pe(t,e),Ne(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{zn(t.containerInfo)}catch(k){j(e,e.return,k)}break;case 4:Pe(t,e),Ne(e);break;case 13:Pe(t,e),Ne(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Hi=J())),s&4&&_r(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ne=(d=ne)||m,Pe(t,e),ne=d):Pe(t,e),Ne(e),s&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&e.mode&1)for(b=e,m=e.child;m!==null;){for(f=b=m;b!==null;){switch(c=b,w=c.child,c.tag){case 0:case 11:case 14:case 15:En(4,c,c.return);break;case 1:Rt(c,c.return);var v=c.stateNode;if(typeof v.componentWillUnmount=="function"){s=c,n=c.return;try{t=s,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){j(s,n,k)}}break;case 5:Rt(c,c.return);break;case 22:if(c.memoizedState!==null){Wr(f);continue}}w!==null?(w.return=c,b=w):Wr(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{a=f.stateNode,d?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(r=f.stateNode,l=f.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,r.style.display=fl("display",i))}catch(k){j(e,e.return,k)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(k){j(e,e.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pe(t,e),Ne(e),s&4&&_r(e);break;case 21:break;default:Pe(t,e),Ne(e)}}function Ne(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jh(n)){var s=n;break e}n=n.return}throw Error(y(160))}switch(s.tag){case 5:var a=s.stateNode;s.flags&32&&(Dn(a,""),s.flags&=-33);var o=Nr(e);_o(e,o,a);break;case 3:case 4:var i=s.stateNode.containerInfo,r=Nr(e);No(e,r,i);break;default:throw Error(y(161))}}catch(l){j(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mc(e,t,n){b=e,Jh(e)}function Jh(e,t,n){for(var s=(e.mode&1)!==0;b!==null;){var a=b,o=a.child;if(a.tag===22&&s){var i=a.memoizedState!==null||ms;if(!i){var r=a.alternate,l=r!==null&&r.memoizedState!==null||ne;r=ms;var d=ne;if(ms=i,(ne=l)&&!d)for(b=a;b!==null;)i=b,l=i.child,i.tag===22&&i.memoizedState!==null?Mr(a):l!==null?(l.return=i,b=l):Mr(a);for(;o!==null;)b=o,Jh(o),o=o.sibling;b=a,ms=r,ne=d}zr(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,b=o):zr(e)}}function zr(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ne||da(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!ne)if(n===null)s.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:xe(t.type,n.memoizedProps);s.componentDidUpdate(a,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&vr(t,o,s);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vr(t,i,n)}break;case 5:var r=t.stateNode;if(n===null&&t.flags&4){n=r;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&zn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ne||t.flags&512&&Bo(t)}catch(c){j(t,t.return,c)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Wr(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function Mr(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{da(4,t)}catch(l){j(t,n,l)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var a=t.return;try{s.componentDidMount()}catch(l){j(t,a,l)}}var o=t.return;try{Bo(t)}catch(l){j(t,o,l)}break;case 5:var i=t.return;try{Bo(t)}catch(l){j(t,i,l)}}}catch(l){j(t,t.return,l)}if(t===e){b=null;break}var r=t.sibling;if(r!==null){r.return=t.return,b=r;break}b=t.return}}var gc=Math.ceil,Qs=Ve.ReactCurrentDispatcher,Ti=Ve.ReactCurrentOwner,Se=Ve.ReactCurrentBatchConfig,L=0,Q=null,U=null,X=0,pe=0,Jt=ft(0),$=0,$n=null,Et=0,ua=0,Ii=0,Cn=null,le=null,Hi=0,sn=1/0,Ye=null,qs=!1,zo=null,lt=null,gs=!1,nt=null,Xs=0,An=0,Wo=null,Es=-1,Cs=0;function oe(){return L&6?J():Es!==-1?Es:Es=J()}function ht(e){return e.mode&1?L&2&&X!==0?X&-X:Zu.transition!==null?(Cs===0&&(Cs=xl()),Cs):(e=D,e!==0||(e=window.event,e=e===void 0?16:Nl(e.type)),e):1}function De(e,t,n,s){if(50<An)throw An=0,Wo=null,Error(y(185));Gn(e,n,s),(!(L&2)||e!==Q)&&(e===Q&&(!(L&2)&&(ua|=n),$===4&&Ze(e,X)),ce(e,s),n===1&&L===0&&!(t.mode&1)&&(sn=J()+500,ra&&mt()))}function ce(e,t){var n=e.callbackNode;Zd(e,t);var s=_s(e,e===Q?X:0);if(s===0)n!==null&&$i(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&$i(n),t===1)e.tag===0?Xu(Yr.bind(null,e)):Zl(Yr.bind(null,e)),Vu(function(){!(L&6)&&mt()}),n=null;else{switch(El(s)){case 1:n=qo;break;case 4:n=Hl;break;case 16:n=Ns;break;case 536870912:n=Pl;break;default:n=Ns}n=Xh(n,Uh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Uh(e,t){if(Es=-1,Cs=0,L&6)throw Error(y(327));var n=e.callbackNode;if(Qt()&&e.callbackNode!==n)return null;var s=_s(e,e===Q?X:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Zs(e,s);else{t=s;var a=L;L|=2;var o=$h();(Q!==e||X!==t)&&(Ye=null,sn=J()+500,Tt(e,t));do try{vc();break}catch(r){Kh(e,r)}while(!0);di(),Qs.current=o,L=a,U!==null?t=0:(Q=null,X=0,t=$)}if(t!==0){if(t===2&&(a=ho(e),a!==0&&(s=a,t=Mo(e,a))),t===1)throw n=$n,Tt(e,0),Ze(e,s),ce(e,J()),n;if(t===6)Ze(e,s);else{if(a=e.current.alternate,!(s&30)&&!yc(a)&&(t=Zs(e,s),t===2&&(o=ho(e),o!==0&&(s=o,t=Mo(e,o))),t===1))throw n=$n,Tt(e,0),Ze(e,s),ce(e,J()),n;switch(e.finishedWork=a,e.finishedLanes=s,t){case 0:case 1:throw Error(y(345));case 2:vt(e,le,Ye);break;case 3:if(Ze(e,s),(s&130023424)===s&&(t=Hi+500-J(),10<t)){if(_s(e,0)!==0)break;if(a=e.suspendedLanes,(a&s)!==s){oe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=wo(vt.bind(null,e,le,Ye),t);break}vt(e,le,Ye);break;case 4:if(Ze(e,s),(s&4194240)===s)break;for(t=e.eventTimes,a=-1;0<s;){var i=31-Le(s);o=1<<i,i=t[i],i>a&&(a=i),s&=~o}if(s=a,s=J()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*gc(s/1960))-s,10<s){e.timeoutHandle=wo(vt.bind(null,e,le,Ye),s);break}vt(e,le,Ye);break;case 5:vt(e,le,Ye);break;default:throw Error(y(329))}}}return ce(e,J()),e.callbackNode===n?Uh.bind(null,e):null}function Mo(e,t){var n=Cn;return e.current.memoizedState.isDehydrated&&(Tt(e,t).flags|=256),e=Zs(e,t),e!==2&&(t=le,le=n,t!==null&&Yo(t)),e}function Yo(e){le===null?le=e:le.push.apply(le,e)}function yc(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var a=n[s],o=a.getSnapshot;a=a.value;try{if(!Be(o(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ze(e,t){for(t&=~Ii,t&=~ua,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),s=1<<n;e[n]=-1,t&=~s}}function Yr(e){if(L&6)throw Error(y(327));Qt();var t=_s(e,0);if(!(t&1))return ce(e,J()),null;var n=Zs(e,t);if(e.tag!==0&&n===2){var s=ho(e);s!==0&&(t=s,n=Mo(e,s))}if(n===1)throw n=$n,Tt(e,0),Ze(e,t),ce(e,J()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vt(e,le,Ye),ce(e,J()),null}function Pi(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(sn=J()+500,ra&&mt())}}function Ct(e){nt!==null&&nt.tag===0&&!(L&6)&&Qt();var t=L;L|=1;var n=Se.transition,s=D;try{if(Se.transition=null,D=1,e)return e()}finally{D=s,Se.transition=n,L=t,!(L&6)&&mt()}}function xi(){pe=Jt.current,z(Jt)}function Tt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$u(n)),U!==null)for(n=U.return;n!==null;){var s=n;switch(ri(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Os();break;case 3:tn(),z(de),z(se),gi();break;case 5:mi(s);break;case 4:tn();break;case 13:z(M);break;case 19:z(M);break;case 10:ui(s.type._context);break;case 22:case 23:xi()}n=n.return}if(Q=e,U=e=dt(e.current,null),X=pe=t,$=0,$n=null,Ii=ua=Et=0,le=Cn=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],s=n.interleaved,s!==null){n.interleaved=null;var a=s.next,o=n.pending;if(o!==null){var i=o.next;o.next=a,s.next=i}n.pending=s}bt=null}return e}function Kh(e,t){do{var n=U;try{if(di(),Hs.current=Gs,Vs){for(var s=Y.memoizedState;s!==null;){var a=s.queue;a!==null&&(a.pending=null),s=s.next}Vs=!1}if(xt=0,G=K=Y=null,xn=!1,Jn=0,Ti.current=null,n===null||n.return===null){$=1,$n=t,U=null;break}e:{var o=e,i=n.return,r=n,l=t;if(t=X,r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,m=r,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var c=m.alternate;c?(m.updateQueue=c.updateQueue,m.memoizedState=c.memoizedState,m.lanes=c.lanes):(m.updateQueue=null,m.memoizedState=null)}var w=Pr(i);if(w!==null){w.flags&=-257,xr(w,i,r,o,t),w.mode&1&&Hr(o,d,t),t=w,l=d;var v=t.updateQueue;if(v===null){var k=new Set;k.add(l),t.updateQueue=k}else v.add(l);break e}else{if(!(t&1)){Hr(o,d,t),Ei();break e}l=Error(y(426))}}else if(W&&r.mode&1){var B=Pr(i);if(B!==null){!(B.flags&65536)&&(B.flags|=256),xr(B,i,r,o,t),li(nn(l,r));break e}}o=l=nn(l,r),$!==4&&($=2),Cn===null?Cn=[o]:Cn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var u=Ch(o,l,t);wr(o,u);break e;case 1:r=l;var h=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(lt===null||!lt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=Ah(o,r,t);wr(o,g);break e}}o=o.return}while(o!==null)}Gh(n)}catch(S){t=S,U===n&&n!==null&&(U=n=n.return);continue}break}while(!0)}function $h(){var e=Qs.current;return Qs.current=Gs,e===null?Gs:e}function Ei(){($===0||$===3||$===2)&&($=4),Q===null||!(Et&268435455)&&!(ua&268435455)||Ze(Q,X)}function Zs(e,t){var n=L;L|=2;var s=$h();(Q!==e||X!==t)&&(Ye=null,Tt(e,t));do try{wc();break}catch(a){Kh(e,a)}while(!0);if(di(),L=n,Qs.current=s,U!==null)throw Error(y(261));return Q=null,X=0,$}function wc(){for(;U!==null;)Vh(U)}function vc(){for(;U!==null&&!Jd();)Vh(U)}function Vh(e){var t=qh(e.alternate,e,pe);e.memoizedProps=e.pendingProps,t===null?Gh(e):U=t,Ti.current=null}function Gh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cc(n,t),n!==null){n.flags&=32767,U=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$=6,U=null;return}}else if(n=uc(n,t,pe),n!==null){U=n;return}if(t=t.sibling,t!==null){U=t;return}U=t=e}while(t!==null);$===0&&($=5)}function vt(e,t,n){var s=D,a=Se.transition;try{Se.transition=null,D=1,kc(e,t,n,s)}finally{Se.transition=a,D=s}return null}function kc(e,t,n,s){do Qt();while(nt!==null);if(L&6)throw Error(y(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(eu(e,o),e===Q&&(U=Q=null,X=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gs||(gs=!0,Xh(Ns,function(){return Qt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Se.transition,Se.transition=null;var i=D;D=1;var r=L;L|=4,Ti.current=null,fc(e,n),Rh(n,e),Ou(go),zs=!!mo,go=mo=null,e.current=n,mc(n),Ud(),L=r,D=i,Se.transition=o}else e.current=n;if(gs&&(gs=!1,nt=e,Xs=a),o=e.pendingLanes,o===0&&(lt=null),Vd(n.stateNode),ce(e,J()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],s(a.value,{componentStack:a.stack,digest:a.digest});if(qs)throw qs=!1,e=zo,zo=null,e;return Xs&1&&e.tag!==0&&Qt(),o=e.pendingLanes,o&1?e===Wo?An++:(An=0,Wo=e):An=0,mt(),null}function Qt(){if(nt!==null){var e=El(Xs),t=Se.transition,n=D;try{if(Se.transition=null,D=16>e?16:e,nt===null)var s=!1;else{if(e=nt,nt=null,Xs=0,L&6)throw Error(y(331));var a=L;for(L|=4,b=e.current;b!==null;){var o=b,i=o.child;if(b.flags&16){var r=o.deletions;if(r!==null){for(var l=0;l<r.length;l++){var d=r[l];for(b=d;b!==null;){var m=b;switch(m.tag){case 0:case 11:case 15:En(8,m,o)}var f=m.child;if(f!==null)f.return=m,b=f;else for(;b!==null;){m=b;var c=m.sibling,w=m.return;if(Oh(m),m===d){b=null;break}if(c!==null){c.return=w,b=c;break}b=w}}}var v=o.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var B=k.sibling;k.sibling=null,k=B}while(k!==null)}}b=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,b=i;else e:for(;b!==null;){if(o=b,o.flags&2048)switch(o.tag){case 0:case 11:case 15:En(9,o,o.return)}var u=o.sibling;if(u!==null){u.return=o.return,b=u;break e}b=o.return}}var h=e.current;for(b=h;b!==null;){i=b;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,b=p;else e:for(i=h;b!==null;){if(r=b,r.flags&2048)try{switch(r.tag){case 0:case 11:case 15:da(9,r)}}catch(S){j(r,r.return,S)}if(r===i){b=null;break e}var g=r.sibling;if(g!==null){g.return=r.return,b=g;break e}b=r.return}}if(L=a,mt(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(na,e)}catch{}s=!0}return s}finally{D=n,Se.transition=t}}return!1}function Or(e,t,n){t=nn(n,t),t=Ch(e,t,1),e=rt(e,t,1),t=oe(),e!==null&&(Gn(e,1,t),ce(e,t))}function j(e,t,n){if(e.tag===3)Or(e,e,n);else for(;t!==null;){if(t.tag===3){Or(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(lt===null||!lt.has(s))){e=nn(n,e),e=Ah(t,e,1),t=rt(t,e,1),e=oe(),t!==null&&(Gn(t,1,e),ce(t,e));break}}t=t.return}}function bc(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,Q===e&&(X&n)===n&&($===4||$===3&&(X&130023424)===X&&500>J()-Hi?Tt(e,0):Ii|=n),ce(e,t)}function Qh(e,t){t===0&&(e.mode&1?(t=is,is<<=1,!(is&130023424)&&(is=4194304)):t=1);var n=oe();e=Ke(e,t),e!==null&&(Gn(e,t,n),ce(e,n))}function Sc(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qh(e,n)}function Tc(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(y(314))}s!==null&&s.delete(t),Qh(e,n)}var qh;qh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,dc(e,t,n);he=!!(e.flags&131072)}else he=!1,W&&t.flags&1048576&&eh(t,Rs,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;xs(e,t),e=t.pendingProps;var a=Xt(t,se.current);Gt(t,n),a=wi(null,t,s,e,a,n);var o=vi();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ue(s)?(o=!0,js(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,pi(t),a.updater=la,t.stateNode=a,a._reactInternals=t,Ho(t,s,e,n),t=Eo(null,t,s,!0,o,n)):(t.tag=0,W&&o&&ii(t),ae(null,t,a,n),t=t.child),t;case 16:s=t.elementType;e:{switch(xs(e,t),e=t.pendingProps,a=s._init,s=a(s._payload),t.type=s,a=t.tag=Hc(s),e=xe(s,e),a){case 0:t=xo(null,t,s,e,n);break e;case 1:t=Ar(null,t,s,e,n);break e;case 11:t=Er(null,t,s,e,n);break e;case 14:t=Cr(null,t,s,xe(s.type,e),n);break e}throw Error(y(306,s,""))}return t;case 0:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:xe(s,a),xo(e,t,s,a,n);case 1:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:xe(s,a),Ar(e,t,s,a,n);case 3:e:{if(Nh(t),e===null)throw Error(y(387));s=t.pendingProps,o=t.memoizedState,a=o.element,ah(e,t),Ks(t,s,null,n);var i=t.memoizedState;if(s=i.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=nn(Error(y(423)),t),t=Lr(e,t,s,n,a);break e}else if(s!==a){a=nn(Error(y(424)),t),t=Lr(e,t,s,n,a);break e}else for(fe=it(t.stateNode.containerInfo.firstChild),me=t,W=!0,Ae=null,n=lh(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zt(),s===a){t=$e(e,t,n);break e}ae(e,t,s,n)}t=t.child}return t;case 5:return hh(t),e===null&&So(t),s=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,yo(s,a)?i=null:o!==null&&yo(s,o)&&(t.flags|=32),Bh(e,t),ae(e,t,i,n),t.child;case 6:return e===null&&So(t),null;case 13:return _h(e,t,n);case 4:return fi(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=en(t,null,s,n):ae(e,t,s,n),t.child;case 11:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:xe(s,a),Er(e,t,s,a,n);case 7:return ae(e,t,t.pendingProps,n),t.child;case 8:return ae(e,t,t.pendingProps.children,n),t.child;case 12:return ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,N(Js,s._currentValue),s._currentValue=i,o!==null)if(Be(o.value,i)){if(o.children===a.children&&!de.current){t=$e(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var r=o.dependencies;if(r!==null){i=o.child;for(var l=r.firstContext;l!==null;){if(l.context===s){if(o.tag===1){l=Re(-1,n&-n),l.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?l.next=l:(l.next=m.next,m.next=l),d.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),To(o.return,n,t),r.lanes|=n;break}l=l.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(y(341));i.lanes|=n,r=i.alternate,r!==null&&(r.lanes|=n),To(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ae(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,s=t.pendingProps.children,Gt(t,n),a=Te(a),s=s(a),t.flags|=1,ae(e,t,s,n),t.child;case 14:return s=t.type,a=xe(s,t.pendingProps),a=xe(s.type,a),Cr(e,t,s,a,n);case 15:return Lh(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,a=t.pendingProps,a=t.elementType===s?a:xe(s,a),xs(e,t),t.tag=1,ue(s)?(e=!0,js(t)):e=!1,Gt(t,n),ih(t,s,a),Ho(t,s,a,n),Eo(null,t,s,!0,e,n);case 19:return zh(e,t,n);case 22:return Dh(e,t,n)}throw Error(y(156,t.tag))};function Xh(e,t){return Il(e,t)}function Ic(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,s){return new Ic(e,t,n,s)}function Ci(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hc(e){if(typeof e=="function")return Ci(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vo)return 11;if(e===Go)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function As(e,t,n,s,a,o){var i=2;if(s=e,typeof e=="function")Ci(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Nt:return It(n.children,a,o,t);case $o:i=8,a|=8;break;case Va:return e=be(12,n,t,a|2),e.elementType=Va,e.lanes=o,e;case Ga:return e=be(13,n,t,a),e.elementType=Ga,e.lanes=o,e;case Qa:return e=be(19,n,t,a),e.elementType=Qa,e.lanes=o,e;case rl:return ca(n,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ol:i=10;break e;case il:i=9;break e;case Vo:i=11;break e;case Go:i=14;break e;case Qe:i=16,s=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=be(i,n,t,a),t.elementType=e,t.type=s,t.lanes=o,t}function It(e,t,n,s){return e=be(7,e,s,t),e.lanes=n,e}function ca(e,t,n,s){return e=be(22,e,s,t),e.elementType=rl,e.lanes=n,e.stateNode={isHidden:!1},e}function Ja(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function Ua(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Pc(e,t,n,s,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ha(0),this.expirationTimes=Ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ha(0),this.identifierPrefix=s,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ai(e,t,n,s,a,o,i,r,l){return e=new Pc(e,t,n,r,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=be(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pi(o),e}function xc(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bt,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function Zh(e){if(!e)return ct;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(ue(n))return Xl(e,n,t)}return t}function ed(e,t,n,s,a,o,i,r,l){return e=Ai(n,s,!0,e,a,o,i,r,l),e.context=Zh(null),n=e.current,s=oe(),a=ht(n),o=Re(s,a),o.callback=t??null,rt(n,o,a),e.current.lanes=a,Gn(e,a,s),ce(e,s),e}function pa(e,t,n,s){var a=t.current,o=oe(),i=ht(a);return n=Zh(n),t.context===null?t.context=n:t.pendingContext=n,t=Re(o,i),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=rt(a,t,i),e!==null&&(De(e,a,i,o),Is(e,a,i)),i}function ea(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jr(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Li(e,t){jr(e,t),(e=e.alternate)&&jr(e,t)}function Ec(){return null}var td=typeof reportError=="function"?reportError:function(e){console.error(e)};function Di(e){this._internalRoot=e}fa.prototype.render=Di.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));pa(e,t,null,null)};fa.prototype.unmount=Di.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ct(function(){pa(null,e,null,null)}),t[Ue]=null}};function fa(e){this._internalRoot=e}fa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ll();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Xe.length&&t!==0&&t<Xe[n].priority;n++);Xe.splice(n,0,e),n===0&&Bl(e)}};function Bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fr(){}function Cc(e,t,n,s,a){if(a){if(typeof s=="function"){var o=s;s=function(){var d=ea(i);o.call(d)}}var i=ed(t,s,e,0,null,!1,!1,"",Fr);return e._reactRootContainer=i,e[Ue]=i.current,Yn(e.nodeType===8?e.parentNode:e),Ct(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof s=="function"){var r=s;s=function(){var d=ea(l);r.call(d)}}var l=Ai(e,0,!1,null,null,!1,!1,"",Fr);return e._reactRootContainer=l,e[Ue]=l.current,Yn(e.nodeType===8?e.parentNode:e),Ct(function(){pa(t,l,n,s)}),l}function ga(e,t,n,s,a){var o=n._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var r=a;a=function(){var l=ea(i);r.call(l)}}pa(t,i,e,a)}else i=Cc(n,t,e,a,s);return ea(i)}Cl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(Xo(t,n|1),ce(t,J()),!(L&6)&&(sn=J()+500,mt()))}break;case 13:Ct(function(){var s=Ke(e,1);if(s!==null){var a=oe();De(s,e,1,a)}}),Li(e,1)}};Zo=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=oe();De(t,e,134217728,n)}Li(e,134217728)}};Al=function(e){if(e.tag===13){var t=ht(e),n=Ke(e,t);if(n!==null){var s=oe();De(n,e,t,s)}Li(e,t)}};Ll=function(){return D};Dl=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};io=function(e,t,n){switch(t){case"input":if(Za(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var a=ia(s);if(!a)throw Error(y(90));hl(s),Za(s,a)}}}break;case"textarea":ul(e,n);break;case"select":t=n.value,t!=null&&Ut(e,!!n.multiple,t,!1)}};wl=Pi;vl=Ct;var Ac={usingClientEntryPoint:!1,Events:[qn,Mt,ia,gl,yl,Pi]},yn={findFiberByHostInstance:kt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Lc={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sl(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Ec,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ys=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ys.isDisabled&&ys.supportsFiber)try{na=ys.inject(Lc),We=ys}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ac;ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bi(t))throw Error(y(200));return xc(e,t,null,n)};ye.createRoot=function(e,t){if(!Bi(e))throw Error(y(299));var n=!1,s="",a=td;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ai(e,1,!1,null,null,n,!1,s,a),e[Ue]=t.current,Yn(e.nodeType===8?e.parentNode:e),new Di(t)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Sl(t),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Ct(e)};ye.hydrate=function(e,t,n){if(!ma(t))throw Error(y(200));return ga(null,e,t,!0,n)};ye.hydrateRoot=function(e,t,n){if(!Bi(e))throw Error(y(405));var s=n!=null&&n.hydratedSources||null,a=!1,o="",i=td;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=ed(t,null,e,1,n??null,a,!1,o,i),e[Ue]=t.current,Yn(e),s)for(e=0;e<s.length;e++)n=s[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new fa(t)};ye.render=function(e,t,n){if(!ma(t))throw Error(y(200));return ga(null,e,t,!1,n)};ye.unmountComponentAtNode=function(e){if(!ma(e))throw Error(y(40));return e._reactRootContainer?(Ct(function(){ga(null,null,e,!1,function(){e._reactRootContainer=null,e[Ue]=null})}),!0):!1};ye.unstable_batchedUpdates=Pi;ye.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!ma(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return ga(e,t,n,!1,s)};ye.version="18.2.0-next-9e3b772b8-20220608";function nd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nd)}catch(e){console.error(e)}}nd(),el.exports=ye;var Dc=el.exports,Rr=Dc;Ka.createRoot=Rr.createRoot,Ka.hydrateRoot=Rr.hydrateRoot;const Bc=({delay:e,word:t})=>{const[n,s]=et.useState(!1);return et.useEffect(()=>{setTimeout(()=>{s(!0)},e)},[e]),Ce.jsxs(Ce.Fragment,{children:[Ce.jsx("span",{className:`${n?"opacity-100":"opacity-0"} duration-500 mr-3 transition-opacity inline-block`,dangerouslySetInnerHTML:{__html:t}}),t.endsWith("<br>")&&Ce.jsx("br",{})]})},Nc=`
<?xml version="1.0" encoding="UTF-8" standalone="no"?><html xmlns="http://www.w3.org/1999/xhtml" xmlns:svg="http://www.w3.org/2000/svg">
   
   <head>
      <meta content="text/html; charset=UTF-8" http-equiv="Content-Type"/>
      
      <title>
         Dune
      </title>
      <link href="css/stylesheet.css" rel="stylesheet" type="text/css"/>
<meta name="Adept.resource" value="urn:uuid:15559dc9-fb29-4a72-ba06-8394ef3816fe"/>
      
      
   </head>
   
   <body>


      

      
      <p class="indent"><a id="page150"/>Halleck’s music still wafted over the room, but it had come out of its minor key, lilting and lively now as though he were
         trying to lift the mood.
      </p>
      
      <p class="indent">‘Let the dinner commence,’ the Duke said, and sank into his chair.</p>
      
      <p class="indent"><em>He’s angry and uncertain,</em> Jessica thought. <em>The loss of that factory crawler hit him more deeply than it should have. It must be something more than that loss. He acts
            like a desperate man.</em> She lifted her fork, hoping in the motion to hide her own sudden bitterness. <em>Why not? He is desperate.</em></p>
      
      <p class="indent">Slowly at first, then with increasing animation, the dinner got under way. The stillsuit manufacturer complimented Jessica
         on her chef and wine.
      </p>
      
      <p class="indent">‘We brought both from Caladan,’ she said.</p>
      
      <p class="indent">‘Superb!’ he said, tasting the chukka. ‘Simply superb! And not a hint of melange in it. One gets so tired of the spice in
         everything.’
      </p>
      
      <p class="indent">The Guild Bank representative looked across at Kynes. ‘I understand, Doctor Kynes, that another factory crawler has been lost
         to a worm.’
      </p>
      
      <p class="indent">‘News travels fast,’ the Duke said.</p>
      
      <p class="indent">‘Then it’s true?’ the banker asked, shifting his attention to Leto.</p>
      
      <p class="indent">‘Of course, it’s true!’ the Duke snapped. ‘The blasted carryall disappeared. It shouldn’t be possible for anything that big
         to disappear!’
      </p>
      
      <p class="indent">‘When the worm came, there was nothing to recover the crawler,’ Kynes said.</p>
      
      <p class="indent">‘It should <em>not</em> be possible!’ the Duke repeated.
      </p>
      
      <p class="indent">‘No one saw the carryall leave?’ the banker asked.</p>
      
      <p class="indent">‘Spotters customarily keep their eyes on the sand,’ Kynes said. ‘They’re primarily interested in wormsign. A carryall’s complement
         usually is four men – two pilots and two journeymen attachers. If one – or even two of this crew were in the pay of the Duke’s
         foes—’
      </p>
      
      <p class="indent">‘A-h-h, I see,’ the banker said. And you, as Judge of the Change, do you challenge this?’</p>
      
      <p class="indent">‘I shall have to consider my position carefully,’ Kynes said, <a id="page151"/>‘and I certainly will not discuss it at table.’ And he thought: <em>That pale skeleton of a man! He knows this is the kind of infraction I was instructed to ignore.</em></p>
      
      <p class="indent">The banker smiled, returned his attention to his food.</p>
      
      <p class="indent">Jessica sat remembering a lecture from her Bene Gesserit schooldays. The subject had been espionage and counterespionage.
         A plump, happy-faced Reverend Mother had been the lecturer, her jolly voice contrasting weirdly with the subject matter.
      </p>
      
      <p class="indent"><em>A thing to note about any espionage and/or counter-espionage school is the similar basic reaction pattern of all its graduates.
            Any enclosed discipline sets its stamp, its pattern, upon its students. That pattern is susceptible to analysis and prediction.</em></p>
      
      <p class="indent"><em>‘Now, motivational patterns are going to be similar among all espionage agents. That is to say: there will be certain types
            of motivation that are similar despite differing schools or opposed aims. You will study first how to separate this element
            for your analysis – in the beginning, through interrogation patterns that betray the inner orientation of the interrogators;
            secondly, by close observation of language-thought orientation of those under analysis. You will find it fairly simple to
            determine the root languages of your subjects, of course, both through voice inflection and speech pattern.’</em></p>
      
      <p class="indent">Now, sitting at table with her son and her Duke and their guests, hearing the Guild Bank representative, Jessica felt a chill
         of realization: the man was a Harkonnen agent. He had the Giedi Prime speech pattern – subtly masked, but exposed to her trained
         awareness as though he had announced himself.
      </p>
      
      <p class="indent"><em>Does this mean the Guild itself has taken sides against House Atreides?</em> she asked herself. The thought shocked her, and she masked her emotion by calling for a new dish, all the while listening
         for the man to betray his purpose. <em>He will shift the conversation next to something innocent, but with ominous overtones,</em> she told herself. <em>It’s his pattern.</em></p>
      
      <p class="indent">The banker swallowed, took a sip of wine, smiled at something said to him by the woman on his right. He seemed to listen for
         a moment to a man down the table who was explaining to the Duke that native Arrakeen plants had no thorns.
      </p>
      
      <p class="indent">‘I enjoy watching the flights of birds on Arrakis,’ the banker said, directing his words at Jessica. All of our birds, of
         course, are <a id="page152"/>carrion-eaters, and many exist without water, having become blood-drinkers.’
      </p>
      
      <p class="indent">The stillsuit manufacturer’s daughter, seated between Paul and his father at the other end of the table, twisted her pretty
         face into a frown, said: ‘Oh, Soo-Soo, you say the most disgusting things.’
      </p>
      
      <p class="indent">The banker smiled. ‘They call me Soo-Soo because I’m financial adviser to the Water Peddlers’ Union.’ And, as Jessica continued
         to look at him without comment, he added: ‘Because of the water-sellers’ cry – “Soo-Soo Sook!” ‘And he imitated the call
         with such accuracy that many around the table laughed.
      </p>
      
      <p class="indent">Jessica heard the boastful tone of voice, but noted most that the young woman had spoken on cue – a set piece. She had produced
         the excuse for the banker to say what he had said. She glanced at Lingar Bewt. The water magnate was scowling, concentrating
         on his dinner. It came to Jessica that the banker had said: ‘<em>I, too, control that ultimate source of power on Arrakis – water.’</em></p>
      
      <p class="indent">Paul had marked the falseness in his dinner companion’s voice, saw that his mother was following the conversation with Bene
         Gesserit intensity. On impulse, he decided to play the foil, draw the exchange out. He addressed himself to the banker.
      </p>
      
      <p class="indent">‘Do you mean, sir, that these birds are cannibals?’</p>
      
      <p class="indent">‘That’s an odd question, young Master,’ the banker said. ‘I merely said the birds drink blood. It doesn’t have to be the blood
         of their own kind, does it?’
      </p>
      
      <p class="indent">‘It was <em>not</em> an odd question,’ Paul said, and Jessica noted the brittle riposte quality of her training exposed in his voice. ‘Most educated
         people know that the worst potential competition for any young organism can come from its own kind.’ He deliberately forked
         a bite of food from his companion’s plate, ate it. ‘They are eating from the same bowl. They have the same basic requirements.’
      </p>
      
      <p class="indent">The banker stiffened, scowled at the Duke.</p>
      
      <p class="indent">‘Do not make the error of considering my son a child,’ the Duke said. And he smiled.</p>
      
      <p class="indent">Jessica glanced around the table, noted that Bewt had brightened, that both Kynes and the smuggler, Tuek, were grinning.</p>
      
      <p class="indent">‘It’s a rule of ecology,’ Kynes said, ‘that the young Master <a id="page153"/>appears to understand quite well. The struggle between life elements is the struggle for the free energy of a system. Blood’s
         an efficient energy source.’
      </p>
      
      <p class="indent">The banker put down his fork, spoke in an angry voice: ‘It’s said that the Fremen scum drink the blood of their dead.’</p>
      
      <p class="indent">Kynes shook his head, spoke in a lecturing tone: ‘Not the blood, sir. But all of a man’s water, ultimately, belongs to his
         people – to his tribe. It’s a necessity when you live near the Great Flat. All water’s precious there, and the human body
         is composed of some seventy per cent water by weight. A dead man, surely, no longer requires that water.’
      </p>
      
      <p class="indent">The banker put both hands against the table beside his plate, and Jessica thought he was going to push himself back, leave
         in a rage.
      </p>
      
      <p class="indent">Kynes looked at Jessica. ‘Forgive me, my Lady, for elaborating on such an ugly subject at table, but you were being told falsehood
         and it needed clarifying.’
      </p>
      
      <p class="indent">‘You’ve associated so long with Fremen that you’ve lost all sensibilities,’ the banker rasped.</p>
      
      <p class="indent">Kynes looked at him calmly, studied the pale, trembling face. ‘Are you challenging me, sir?’</p>
      
      <p class="indent">The banker froze. He swallowed, spoke stiffly: ‘Of course not. I’d not so insult our host and hostess.’</p>
      
      <p class="indent">Jessica heard the fear in the man’s voice, saw it in his face, in his breathing, in the pulse of a vein at his temple. The
         man was terrified of Kynes!
      </p>
      
      <p class="indent">‘Our host and hostess are quite capable of deciding for themselves when they’ve been insulted,’ Kynes said. ‘They’re brave
         people who understand defense of honor. We all may attest to their courage by the fact that they are here … now … on Arrakis.’
      </p>
      
      <p class="indent">Jessica saw that Leto was enjoying this. Most of the others were not. People all around the table sat poised for flight, hands
         out of sight under the table. Two notable exceptions were Bewt, who was openly smiling at the banker’s discomfiture, and the
         smuggler, Tuek, who appeared to be watching Kynes for a cue. Jessica saw that Paul was looking at Kynes in admiration.
      </p>
      
      <p class="indent">‘Well?’ Kynes said.</p>
      
      <p class="indent"><a id="page154"/>‘I meant no offense,’ the banker muttered. ‘If offense was taken, please accept my apologies.’
      </p>
      
      <p class="indent">‘Freely given, freely accepted,’ Kynes said. He smiled at Jessica, resumed eating as though nothing had happened.</p>
      
      <p class="indent">Jessica saw that the smuggler, too, had relaxed. She marked this: the man had shown every aspect of an aide ready to leap
         to Kynes’ assistance. There existed an accord of some sort between Kynes and Tuek.
      </p>
      
      <p class="indent">Leto toyed with a fork, looked speculatively at Kynes. The ecologist’s manner indicated a change in attitude toward the House
         of Atreides. Kynes had seemed colder on their trip over the desert.
      </p>
      
      <p class="indent">Jessica signaled for another course of food and drink. Servants appeared with <em>langues de lapins de garenne –</em> red wine and a sauce of mushroom-yeast on the side.
      </p>
      
      <p class="indent">Slowly, the dinner conversation resumed, but Jessica heard the agitation in it, the brittle quality, saw that the banker ate
         in sullen silence. <em>Kynes would have killed him without hesitating,</em> she thought. And she realized that there was an offhand attitude toward killing in Kynes’ manner. He was a casual killer,
         and she guessed that this was a Fremen quality.
      </p>
      
      <p class="indent">Jessica turned to the stillsuit manufacturer on her left, said: ‘I find myself continually amazed by the importance of water
         on Arrakis.’
      </p>
      
      <p class="indent">‘Very important,’ he agreed. ‘What is this dish? It’s delicious.’</p>
      
      <p class="indent">‘Tongues of wild rabbit in a special sauce,’ she said. ‘A very old recipe.’</p>
      
      <p class="indent">‘I must have that recipe,’ the man said.</p>
      
      <p class="indent">She nodded. ‘I’ll see that you get it.’</p>
      
      <p class="indent">Kynes looked at Jessica, said: ‘The newcomer to Arrakis frequently underestimates the importance of water here. You are dealing,
         you see, with the Law of the Minimum.’
      </p>
      
      <p class="indent">She heard the testing quality in his voice, said, ‘Growth is limited by that necessity which is present in the least amount.
         And, naturally, the least favorable condition controls the growth rate.’
      </p>
      
      <p class="indent">‘It’s rare to find members of a Great House aware of <a id="page155"/>planetological problems,’ Kynes said. ‘Water is the least favorable condition for life on Arrakis. And remember that <em>growth</em> itself can produce unfavorable conditions unless treated with extreme care.’
      </p>
      
      <p class="indent">Jessica sensed a hidden message in Kynes’ words, but knew she was missing it. ‘Growth,’ she said. ‘Do you mean Arrakis can
         have an orderly cycle of water to sustain human life under more favorable conditions?’
      </p>
      
      <p class="indent">‘Impossible!’ The water magnate barked.</p>
      
      <p class="indent">Jessica turned her attention to Bewt. ‘Impossible?’</p>
      
      <p class="indent">‘Impossible on Arrakis,’ he said. ‘Don’t listen to this dreamer. All the laboratory evidence is against him.’</p>
      
      <p class="indent">Kynes looked at Bewt, and Jessica noted that the other conversations around the table had stopped while people concentrated
         on this new interchange.
      </p>
      
      <p class="indent">‘Laboratory evidence tends to blind us to a very simple fact,’ Kynes said. ‘That fact is this: we are dealing here with matters
         that originated and exist out-of-doors where plants and animals carry on their normal existence.’
      </p>
      
      <p class="indent">‘Normal!’ Bewt snorted. ‘Nothing about Arrakis is normal!’</p>
      
      <p class="indent">‘Quite the contrary,’ Kynes said. ‘Certain harmonies could be set up here along self-sustaining lines. You merely have to
         understand the limits of the planet and the pressures upon it.’
      </p>
      
      <p class="indent">‘It’ll never be done,’ Bewt said.</p>
      
      <p class="indent">The Duke came to a sudden realization, placing the point where Kynes’ attitude had changed – it had been when Jessica had
         spoken of holding the conservatory plants in trust for Arrakis.
      </p>
      
      <p class="indent">‘What would it take to set up the self-sustaining system, Doctor Kynes?’ Leto asked.</p>
      
      <p class="indent">‘If we can get three per cent of the green plant element on Arrakis involved in forming carbon compounds as foodstuffs, we’ve
         started the cyclic system,’ Kynes said.
      </p>
      
      <p class="indent">‘Water’s the only problem?’ the Duke asked. He sensed Kynes’ excitement, felt himself caught up in it.</p>
      
      <p class="indent">‘Water overshadows the other problems,’ Kynes said. ‘This planet has much oxygen without its usual concomitants – widespread
         plant life and large sources of free carbon dioxide from <a id="page156"/>such phenomena as volcanoes. There are unusual chemical interchanges over large surface areas here.’
      </p>
      
      <p class="indent">‘Do you have pilot projects?’ the Duke asked.</p>
      
      <p class="indent">‘We’ve had a long time in which to build up the Tansley Effect – small-unit experiments on an amateur basis from which my
         science may now draw its working facts,’ Kynes said.
      </p>
      
      <p class="indent">‘There isn’t enough water,’ Bewt said. ‘There just isn’t enough water.’</p>
      
      <p class="indent">‘Master Bewt is an expert on water,’ Kynes said. He smiled, turned back to his dinner.</p>
      
      <p class="indent">The Duke gestured sharply down with his right hand, barked: ‘No, I want an answer! Is there enough water, Doctor Kynes?’</p>
      
      <p class="indent">Kynes stared at his plate.</p>
      
      <p class="indent">Jessica watched the play of emotion on his face. <em>He masks himself well,</em> she thought, but she had him registered now and read that he regretted his words.
      </p>
      
      <p class="indent">‘Is there enough water?’ the Duke demanded.</p>
      
      <p class="indent">‘There … may be,’ Kynes said.</p>
      
      <p class="indent"><em>He’s faking uncertainty!</em>Jessica thought.
      </p>
      
      <p class="indent">With his deeper truthsense, Paul caught the underlying motive, had to use every ounce of his training to mask his excitement.
         <em>There is enough water! But Kynes doesn’t wish it to be known.</em></p>
      
      <p class="indent">‘Our planetologist has many interesting dreams,’ Bewt said. ‘He dreams with the Fremen – of prophecies and messiahs.’</p>
      
      <p class="indent">Chuckles sounded at odd places around the table. Jessica marked them – the smuggler, the stillsuit manufacturer’s daughter,
         Duncan Idaho, the woman with the mysterious escort service.
      </p>
      
      <p class="indent"><em>Tensions are oddly distributed here tonight,</em> Jessica thought. <em>There’s too much going on of which I’m not aware. I’ll have to develop new information sources.</em></p>
      
      <p class="indent">The Duke passed his gaze from Kynes to Bewt to Jessica. He felt oddly let down, as though something vital had passed him here.
         <em>‘May</em> be,’ he muttered.
      </p>
      
      <p class="indent">Kynes spoke quickly: ‘Perhaps we should discuss this another time, my Lord. There are so many—’</p>
      
      <p class="indent">The planetologist broke off as a uniformed Atreides trooper hurried in through the service door, was passed by the guard <a id="page157"/>and rushed to the Duke’s side. The man bent, whispering into Leto’s ear.
      </p>
      
      <p class="indent">Jessica recognized the capsign of Hawat’s corps, fought down uneasiness. She addressed herself to the stillsuit manufacturer’s
         feminine companion – a tiny, dark-haired woman with a doll face, a touch of epicanthic fold to the eyes.
      </p>
      
      <p class="indent">‘You’ve hardly touched your dinner, my dear,’ Jessica said. ‘May I order you something?’</p>
      
      <p class="indent">The woman looked at the stillsuit manufacturer before answering, then: ‘I’m not very hungry.’</p>
      
      <p class="indent">Abruptly, the Duke stood up beside his trooper, spoke in a harsh tone of command: ‘Stay seated, everyone. You will have to
         forgive me, but a matter has arisen that requires my personal attention.’ He stepped aside. ‘Paul, take over as host for me,
         if you please.’
      </p>
      
      <p class="indent">Paul stood, wanting to ask why his father had to leave, knowing he had to play this with the grand manner. He moved around
         to his father’s chair, sat down at it.
      </p>
      
      <p class="indent">The Duke turned to the alcove where Halleck sat, said: ‘Gurney, please take Paul’s place at table. We mustn’t have an odd
         number here. When the dinner’s over, I may want you to bring Paul to the field C.P. Wait for my Call.’
      </p>
      
      <p class="indent">Halleck emerged from the alcove in dress uniform, his lumpy ugliness seeming out of place in the glittering finery. He leaned
         his baliset against the wall, crossed to the chair Paul had occupied, sat down.
      </p>
      
      <p class="indent">‘There’s no need for alarm,’ the Duke said, ‘but I must ask that no one leave until our house guard says it’s safe. You will
         be perfectly secure as long as you remain here, and we’ll have this little trouble cleared up very shortly.’
      </p>
      
      <p class="indent">Paul caught the code words in his father’s message – <em>guard-safe-secure-shortly.</em> The problem was security, not violence. He saw that his mother had read the same message. They both relaxed.
      </p>
      
      <p class="indent">The Duke gave a short nod, wheeled and strode through the service door followed by his trooper.</p>
      
      <p class="indent">Paul said: ‘Please go on with your dinner. I believe Doctor Kynes was discussing water.’</p>
      
      <p class="indent">‘May we discuss it another time?’ Kynes asked.</p>
      
      <p class="indent"><a id="page158"/>‘By all means,’ Paul said.
      </p>
      
      <p class="indent">And Jessica noted with pride her son’s dignity, the mature sense of assurance.</p>
      
      <p class="indent">The banker picked up his water flagon, gestured with it at Bewt. ‘None of us here can surpass Master Lingar Bewt in flowery
         phrases. One might almost assume he aspired to Great House status. Come, Master Bewt, lead us in a toast. Perhaps you’ve a
         dollop of wisdom for the boy who must be treated like a man.’
      </p>
      
      <p class="indent">Jessica clenched her right hand into a fist beneath the table. She saw a hand signal pass from Halleck to Idaho, saw the house
         troopers along the walls move into positions of maximum guard.
      </p>
      
      <p class="indent">Bewt cast a venomous glare at the banker.</p>
      
      <p class="indent">Paul glanced at Halleck, took in the defensive positions of his guards, looked at the banker until the man lowered the water
         flagon. He said: ‘Once, on Caladan, I saw the body of a drowned fisherman recovered. He—’
      </p>
      
      <p class="indent">‘Drowned?’ It was the stillsuit manufacturer’s daughter.</p>
      
      <p class="indent">Paul hesitated, then: ‘Yes. Immersed in water until dead. Drowned.’</p>
      
      <p class="indent">‘What an interesting way to die,’ she murmured.</p>
      
      <p class="indent">Paul’s smile became brittle. He returned his attention to the banker. ‘The interesting thing about this man was the wounds
         on his shoulders – made by another fisherman’s claw-boots. This fisherman was one of several in a boat – a craft for travelling
         on water – that foundered … sank beneath the water. Another fisherman helping recover the body said he’d seen marks like this
         man’s wounds several times. They meant another drowning fisherman had tried to stand on this poor fellow’s shoulders in the
         attempt to reach up to the surface – to reach air.’
      </p>
      
      <p class="indent">‘Why is this interesting?’ the banker asked.</p>
      
      <p class="indent">‘Because of an observation made by my father at the time. He said the drowning man who climbs on your shoulders to save himself
         is understandable – except when you see it happen in the drawing room.’ Paul hesitated just long enough for the banker to
         see the point coming, then: ‘And, I should add, except when you see it at the dinner table.’
      </p>
      
      <p class="indent">A sudden stillness enfolded the room.</p>
      
      <p class="indent"><a id="page159"/><em>That was rash,</em> Jessica thought. <em>This banker might have enough rank to call my son out.</em> She saw that Idaho was poised for instant action. The House troopers were alert. Gurney Halleck had his eyes on the men opposite
         him.
      </p>
      
      <p class="indent">‘Ho-ho-ho-o-o-o!’ It was the smuggler, Tuek, head thrown back, laughing with complete abandon.</p>
      
      <p class="indent">Nervous smiles appeared around the table.</p>
      
      <p class="indent">Bewt was grinning.</p>
      
      <p class="indent">The banker had pushed his chair back, was glaring at Paul.</p>
      
      <p class="indent">Kynes said: ‘One baits an Atreides at his own risk.’</p>
      
      <p class="indent">‘Is it Atreides custom to insult their guests?’ the banker demanded.</p>
      
      <p class="indent">Before Paul could answer, Jessica leaned forward, said: ‘Sir!’ And she thought: <em>We must learn this Harkonnen creature’s game. Is he here to try for Paul? Does he have help?</em></p>
      
      <p class="indent">‘My son displays a general garment and you claim it’s cut to your fit?’Jessica asked. ‘What a fascinating revelation.’ She
         slid a hand down her leg to the crysknife she had fastened in a calf-sheath.
      </p>
      
      <p class="indent">The banker turned his glare at Jessica. Eyes shifted away from Paul and she saw him ease himself back from the table, freeing
         himself for action. He had focused on the code word: <em>garment. ‘Prepare for violence.’</em></p>
      
      <p class="indent">Kynes directed a speculative look at Jessica, gave a subtle hand signal to Tuek.</p>
      
      <p class="indent">The smuggler lurched to his feet, lifted his flagon. ‘I’ll give you a toast,’ he said. ‘To young Paul Atreides, still a lad
         by his looks, but a man by his actions.’
      </p>
      
      <p class="indent"><em>Why do they intrude?</em>Jessica asked herself.
      </p>
      
      <p class="indent">The banker stared now at Kynes, and Jessica saw terror return to the agent’s face.</p>
      
      <p class="indent">People began responding all around the table.</p>
      
      <p class="indent"><em>Where Kynes leads, people follow,</em> Jessica thought. <em>He has told us he sides with Paul. What’s the secret of his power? It can’t be because he’s Judge of the Change. That’s temporary.
            And certainly not because he’s a civil servant.</em></p>
      
      <p class="indent">She removed her hand from the crysknife hilt, lifted her flagon to Kynes, who responded in kind.</p>
      
      <p class="indent"><a id="page160"/>Only Paul and the banker – <em>(Soo-Soo! What an idiotic nickname!</em> Jessica thought.) – remained empty-handed. The banker’s attention stayed fixed on Kynes. Paul stared at his plate.
      </p>
      
      <p class="indent"><em>I was handling it correctly,</em> Paul thought. <em>Why do they interfere?</em> He glanced covertly at the male guests nearest him. <em>Prepare for violence? From whom? Certainly not from that banker fellow.</em></p>
      
      <p class="indent">Halleck stirred, spoke as though to no one in particular, directing his words over the heads of the guests across from him:
         ‘In our society, people shouldn’t be quick to take offense. It’s frequently suicidal.’ He looked at the stillsuit manufacturer’s
         daughter beside him. ‘Don’t you think so, miss?’
      </p>
      
      <p class="indent">‘Oh, yes. Yes. Indeed I do,’ she said. ‘There’s too much violence. It makes me sick. And lots of times no offense is meant,
         but people die anyway. It doesn’t make sense.’
      </p>
      
      <p class="indent">‘Indeed it doesn’t,’ Halleck said.</p>
      
      <p class="indent">Jessica saw the near perfection of the girl’s act, realized: <em>That empty-headed little female is not an empty-headed little female.</em> She saw then the pattern of the threat and understood that Halleck, too, had detected it. They had planned to lure Paul with
         sex. Jessica relaxed. Her son had probably been first to see it – his training hadn’t overlooked the obvious gambit.
      </p>
      
      <p class="indent">Kynes spoke to the banker: ‘Isn’t another apology in order?’</p>
      
      <p class="indent">The banker turned a sickly grin toward Jessica, said: ‘My Lady, I fear I’ve overindulged in your wines. You serve potent drink
         at table, and I’m not accustomed to it.’
      </p>
      
      <p class="indent">Jessica heard the venom beneath his tone, spoke sweetly: ‘When strangers meet, great allowance should be made for differences
         of custom and training.’
      </p>
      
      <p class="indent">‘Thank you, my Lady,’ he said.</p>
      
      <p class="indent">The dark-haired companion of the stillsuit manufacturer leaned toward Jessica, said: ‘The Duke spoke of our being secure here.
         I do hope that doesn’t mean more fighting.’
      </p>
      
      <p class="indent"><em>She was directed to lead the conversation this way,</em> Jessica thought.
      </p>
      
      <p class="indent">‘Likely this will prove unimportant,’Jessica said. ‘But there’s so much detail requiring the Duke’s personal attention in
         these times. As long as enmity continues between Atreides and Harkonnen we cannot be too careful. The Duke has sworn kanly.
         He will leave no Harkonnen agent alive on Arrakis, of course.’ She <a id="page161"/>glanced at the Guild Bank agent. ‘And the Conventions, naturally, support him in this.’ She shifted her attention to Kynes.
         ‘Is this not so, Dr Kynes?’
      </p>
      
      <p class="indent">‘Indeed it is,’ Kynes said.</p>
      
      <p class="indent">The stillsuit manufacturer pulled his companion back. She looked at him, said: ‘I do believe I’ll eat something now. I’d like
         some of that bird dish you served earlier.’
      </p>
      
      <p class="indent">Jessica signaled a servant, turned to the banker: ‘And you, sir, were speaking of birds earlier and of their habits. I find
         so many interesting things about Arrakis. Tell me, where is the spice found? Do the hunters go deep into the desert?’
      </p>
      
      <p class="indent">‘Oh, no, my Lady,’ he said. ‘Very little’s known of the deep desert. And almost nothing of the southern regions.’</p>
      
      <p class="indent">‘There’s a tale that a great Mother Lode of spice is to be found in the southern reaches,’ Kynes said, ‘but I suspect it was
         an imaginative invention made solely for purposes of a song. Some daring spice hunters do, on occasion, penetrate into the
         edge of the central belt, but that’s extremely dangerous – navigation is uncertain, storms are frequent. Casualties increase
         dramatically the farther you operate from Shield Wall bases. It hasn’t been found profitable to venture too far south. Perhaps
         if we had a weather satellite …’
      </p>
      
      <p class="indent">Bewt looked up, spoke around a mouthful of food: ‘It’s said the Fremen travel there, that they go anywhere and have hunted
         out soaks and sip-wells even in the southern latitudes.’
      </p>
      
      <p class="indent">‘Soaks and sip-wells?’Jessica asked.</p>
      
      <p class="indent">Kynes spoke quickly: ‘Wild rumors, my Lady. These are known on other planets, not on Arrakis. A soak is a place where water
         seeps to the surface or near enough to the surface to be found by digging according to certain signs. A sip-well is a form
         of soak where a person draws water through a straw … so it is said.’
      </p>
      
      <p class="indent"><em>There’s deception in his</em> words, Jessica thought.
      </p>
      
      <p class="indent"><em>Why is he lying?</em> Paul wondered.
      </p>
      
      <p class="indent">‘How very interesting,’ Jessica said. And she thought: <em>‘It is said</em> …’ <em>What a curious speech mannerism they have here. If they only knew what it reveals about their dependence on superstitions.</em></p>
      
      <p class="indent"><a id="page162"/>‘I’ve heard you have a saying,’ Paul said, ‘that polish comes from the cities; wisdom from the desert.’
      </p>
      
      <p class="indent">‘There are many sayings on Arrakis,’ Kynes said.</p>
      
      <p class="indent">Before Jessica could frame a new question, a servant bent over her with a note. She opened it, saw the Duke’s handwriting
         and code signs, scanned it.
      </p>
      
      <p class="indent">‘You’ll all be delighted to know,’ she said, ‘that our Duke sends his reassurances. The matter which called him away has been
         settled. The missing carryall has been found. A Harkonnen agent in the crew overpowered the others and flew the machine to
         a smugglers’ base, hoping to sell it there. Both man and machine were turned over to our forces.’ She nodded to Tuek.
      </p>
      
      <p class="indent">The smuggler nodded back.</p>
      
      <p class="indent">Jessica refolded the note, tucked it into her sleeve.</p>
      
      <p class="indent">‘I’m glad it didn’t come to open battle,’ the banker said. ‘The people have such hopes the Atreides will bring peace and prosperity.’</p>
      
      <p class="indent">‘Especially prosperity,’ Bewt said.</p>
      
      <p class="indent">‘Shall we have our dessert now?’Jessica asked. ‘I’ve had our chef prepare a Caladan sweet: pongi rice in sauce dolsa.’</p>
      
      <p class="indent">‘It sounds wonderful,’ the stillsuit manufacturer said. ‘Would it be possible to get the recipe?’</p>
      
      <p class="indent">‘Any recipe you desire,’ Jessica said, <em>registering</em> the man for later mention to Hawat. The stillsuit manufacturer was a fearful little climber and could be bought.
      </p>
      
      <p class="indent">Small talk resumed around her: ‘Such a lovely fabric …’ ‘He is having a setting made to match the jewel …’ ‘We might try for
         a production increase next quarter …’
      </p>
      
      <p class="indent">Jessica stared down at her plate, thinking of the coded part of Leto’s message: <em>‘The Harkonnens tried to get a shipment of lasguns. We captured them. This may mean they’ve succeeded with other shipments.
            It certainly means they don’t place much store in shields. Take appropriate precautions.’</em></p>
      
      <p class="indent">Jessica focused her mind on lasguns, wondering. The white-hot beams of disruptive light could cut through any known substance,
         provided that substance was not shielded. The fact that feedback from a shield would explode both lasgun and shield did not
         bother the Harkonnens. Why? A lasgun-shield <a id="page163"/>explosion was a dangerous variable, could be more powerful than atomics, could kill only the gunner and his shielded target.
      </p>
      
      <p class="indent">The unknowns here filled her with uneasiness.</p>
      
      <p class="indent">Paul said: ‘I never doubted we’d find the carryall. Once my father moves to solve a problem, he solves it. This is a fact
         the Harkonnens are beginning to discover.’
      </p>
      
      <p class="indent"><em>He’s boasting,</em> Jessica thought. <em>He shouldn’t boast. No person who’ll be sleeping far below ground level this night as a precaution against lasguns has the
            right to boast.</em></p>
      
      <blockquote class="blockquote">
         <p class="noindent">‘There is no escape – we pay for the violence of our ancestors.’</p>
         <p class="right">—from ‘The Collected Sayings of Muad’Dib’ by the Princess Irulan</p>
      </blockquote>
      
      <p class="noindent">Jessica heard the disturbance in the great hall, turned on the light beside her bed. The clock there had not been properly
         adjusted to local time, and she had to subtract twenty-one minutes to determine that it was about 2 <span class="small-caps">A.M.</span></p>
      
      <p class="indent">The disturbance was loud and incoherent.</p>
      
      <p class="indent"><em>Is this the Harkonnen attack?</em> she wondered.
      </p>
      
      <p class="indent">She slipped out of bed, checked the screen monitors to see where her family was. The screen showed Paul asleep in the deep
         cellar room they’d hastily converted to a bedroom for him. The noise obviously wasn’t penetrating to his quarters. There was
         no one in the Duke’s room, his bed was unrumpled. Was he still at the field C.P.?
      </p>
      
      <p class="indent">There were no screens yet to the front of the house.</p>
      
      <p class="indent">Jessica stood in the middle of her room, listening.</p>
      
      <p class="indent">There was one shouting, incoherent voice. She heard someone call for Dr Yueh. Jessica found a robe, pulled it over her shoulders,
         pushed her feet into slippers, strapped the crysknife to her leg.
      </p>
      
      <p class="indent">Again, a voice called out for Yueh.</p>
      
      <p class="indent">Jessica belted the robe around her, stepped into the hallway. Then the thought struck her: <em>What if Leto’s hurt?</em></p>
      
      <p class="indent">The hall seemed to stretch out forever under her running feet. She turned through the arch at the end, dashed past the dining
         hall and down the passage to the Great Hall, finding the place brightly lighted, all the wall suspensors glowing at maximum.
      </p>
      
      <p class="indent"><a id="page164"/>To her right near the front entry, she saw two house guards holding Duncan Idaho between them. His head lolled forward, and
         there was an abrupt, panting silence to the scene.
      </p>
      
      <p class="indent">One of the house guards spoke accusingly to Idaho: ‘You see what you did? You woke the Lady Jessica.’</p>
      
      <p class="indent">The great draperies billowed behind the men, showing that the front door remained open. There was no sign of the Duke or Yueh.
         Mapes stood to one side staring coldly at Idaho. She wore a long brown robe with serpentine design at the hem. Her feet were
         pushed into unlaced desert boots.
      </p>
      
      <p class="indent">‘So I woke the Lady Jessica,’ Idaho muttered. He lifted his face toward the ceiling, bellowed: ‘My sword was firs’ blooded
         on Grumman!’
      </p>
      
      <p class="indent"><em>Great Mother! He’s drunk!Jessica</em> thought.
      </p>
      
      <p class="indent">Idaho’s dark, round face was drawn into a frown. His hair, curling like the fur of a black goat, was plastered with dirt.
         A jagged rent in his tunic exposed an expanse of the dress shirt he had worn at the dinner party earlier.
      </p>
      
      <p class="indent">Jessica crossed to him.</p>
      
      <p class="indent">One of the guards nodded to her without releasing his hold on Idaho. ‘We didn’t know what to do with him, my Lady. He was
         creating a disturbance out front, refusing to come inside. We were afraid locals might come along and see him. That wouldn’t
         do at all. Give us a bad name here.’
      </p>
      
      <p class="indent">‘Where has he been?’Jessica asked.</p>
      
      <p class="indent">‘He escorted one of the young ladies home from the dinner, my Lady. Hawat’s orders.’</p>
      
      <p class="indent">‘Which young lady?’</p>
      
      <p class="indent">‘One of the escort wenches. You understand, my Lady?’ He glanced at Mapes, lowered his voice. ‘They’re always calling on Idaho
         for special surveillance of the ladies.’
      </p>
      
      <p class="indent">And Jessica thought: <em>So they are. But why is he drunk?</em></p>
      
      <p class="indent">She frowned, turned to Mapes. ‘Mapes, bring a stimulant. I’d suggest caffeine. Perhaps there’s some of the spice coffee left.’</p>
      
      <p class="indent">Mapes shrugged, headed for the kitchen. Her unlaced desert boots slap-slapped against the stone floor.</p>
      
      <p class="indent">Idaho swung his unsteady head around to peer at an angle <a id="page165"/>toward Jessica. ‘Killed more’n three hunner’ men f‘r the Duke,’ he muttered. ‘Whadduh wanna know is why’m mere? Can’t live
         unner th’ groun’ here. Can’t live onna groun’ here. Wha’ kinna place is ’iss, huh?’
      </p>
      
      <p class="indent">A sound from the side hall entry caught Jessica’s attention. She turned, saw Yueh crossing to them, his medical kit swinging
         in his left hand. He was fully dressed, looked pale, exhausted. The diamond tattoo stood out sharply on his forehead.
      </p>
      
      <p class="indent">‘Th’ good docker!’ Idaho shouted. ‘Whad’re you, Doc? Splint ’n’ pill man?’ He turned blearily toward Jessica. ‘Makin’ uh damn
         fool uh m’self, huh?’
      </p>
      
      <p class="indent">Jessica frowned, remained silent, wondering: <em>Why would Idaho get drunk? Was he drugged?</em></p>
      
      <p class="indent">‘Too much spice beer,’ Idaho said, attempting to straighten.</p>
      
      <p class="indent">Mapes returned with a steaming cup in her hands, stopped uncertainly behind Yueh. She looked at Jessica, who shook her head.</p>
      
      <p class="indent">Yueh put his kit on the floor, nodded greeting to Jessica, said: ‘Spice beer, eh?’</p>
      
      <p class="indent">‘Bes’ damn stuff ever tas’ed,’ Idaho said. He tried to pull himself to attention. ‘My sword was firs’ blooded on Grumman!
         Killed a Harkon … Harkon … killed ’im f’r th’ Duke.’
      </p>
      
      <p class="indent">Yueh turned, looked at the cup in Mapes’ hand. ‘What is that?’</p>
      
      <p class="indent">‘Caffeine,’Jessica said.</p>
      
      <p class="indent">Yueh took the cup, held it toward Idaho. ‘Drink this, lad.’</p>
      
      <p class="indent">‘Don’ wan’ any more t’ drink.’</p>
      
      <p class="indent">‘Drink it, I say!’</p>
      
      <p class="indent">Idaho’s head wobbled toward Yueh, and he stumbled one step ahead, dragging the guards with him. ‘I’m almighdy fed up with
         pleasin’ th’ ‘Mperial Universe, Doc. Jus’ once, we’re gonna do th’ thing my way.’
      </p>
      
      <p class="indent">‘After you drink this,’ Yueh said. ‘It’s just caffeine.’</p>
      
      <p class="indent">‘ ’Sprolly like all res’ uh this place! Damn’ sun ‘stoo brighd. Nothin’ has uh righd color. Ever’thing’s wrong or …’</p>
      
      <p class="indent">‘Well, it’s nighttime now,’ Yueh said. He spoke reasonably. ‘Drink this like a good lad. It’ll make you feel better.’</p>
      
      <p class="indent">‘Don’ wanna feel bedder!’</p>
      
      <p class="indent"><a id="page166"/>‘We can’t argue with him all night,’ Jessica said. And she thought: <em>This calls for shock treatment.</em></p>
      
      <p class="indent">‘There’s no reason for you to stay, my Lady,’ Yueh said. ‘I can take care of this.’</p>
      
      <p class="indent">Jessica shook her head. She stepped forward, slapped Idaho sharply across the cheek.</p>
      
      <p class="indent">He stumbled back with his guards, glaring at her.</p>
      
      <p class="indent">‘This is no way to act in your Duke’s home,’ she said. She snatched the cup from Yueh’s hands, spilling part of it, thrust
         the cup toward Idaho. ‘Now drink this! That’s an order!’
      </p>
      
      <p class="indent">Idaho jerked himself upright, scowling down at her. He spoke slowly, with careful and precise enunciation: ‘I do not take
         orders from a damn’ Harkonnen spy.’
      </p>
      
      <p class="indent">Yueh stiffened, whirled to face Jessica.</p>
      
      <p class="indent">Her face had gone pale, but she was nodding. It all became clear to her – the broken stems of meaning she had seen in words
         and actions around her these past few days could now be translated. She found herself in the grip of anger almost too great
         to contain. It took the most profound of her Bene Gesserit training to quiet her pulse and smooth her breathing. Even then
         she could feel the blaze flickering.
      </p>
      
      <p class="indent"><em>They were always calling on Idaho for surveillance of the ladies!</em></p>
      
      <p class="indent">She shot a glance at Yueh. The doctor lowered his eyes.</p>
      
      <p class="indent">‘You knew this?’ she demanded.</p>
      
      <p class="indent">‘I … heard rumors, my Lady. But I didn’t want to add to your burdens.’</p>
      
      <p class="indent">‘Hawat!’ she snapped. ‘I want Thufir Hawat brought to me immediately!’</p>
      
      <p class="indent">‘But, my Lady …’</p>
      
      <p class="indent">‘Immediately!’</p>
      
      <p class="indent"><em>It has to be Hawat,</em> she thought. <em>Suspicion such as this could come from no other source without being discarded immediately.</em></p>
      
      <p class="indent">Idaho shook his head, mumbled: ‘Chuck th’ whole damn thing.’</p>
      
      <p class="indent">Jessica looked down at the cup in her hand, abruptly dashed its contents across Idaho’s face. ‘Lock him in one of the guest
         rooms of the east wing,’ she ordered. ‘Let him <em>sleep</em> it off.’
      </p>
      
      <p class="indent">The two guards stared at her unhappily. One ventured: <a id="page167"/>‘Perhaps we should take him someplace else, m’Lady. We could …’
      </p>
      
      <p class="indent">‘He’s supposed to be here!’Jessica snapped. ‘He has a job to do here.’ Her voice dripped bitterness. ‘He’s so good at watching
         the ladies.’
      </p>
      
      <p class="indent">The guard swallowed.</p>
      
      <p class="indent">‘Do you know where the Duke is?’ she demanded.</p>
      
      <p class="indent">‘He’s at the command post, my Lady.’</p>
      
      <p class="indent">‘Is Hawat with him?’</p>
      
      <p class="indent">‘Hawat’s in the city, my Lady.’</p>
      
      <p class="indent">‘You will bring Hawat to me at once,’Jessica said. ‘I will be in my sitting room when he arrives.’</p>
      
      <p class="indent">‘But, my Lady …’</p>
      
      <p class="indent">‘If necessary, I will call the Duke,’ she said. ‘I hope it will not be necessary. I would not want to disturb him with this.’</p>
      
      <p class="indent">‘Yes, my Lady.’</p>
      
      <p class="indent">Jessica thrust the empty cup into Mapes’ hands, met the questioning stare of the blue-within-blue eyes. You may return to
         bed, Mapes.’
      </p>
      
      <p class="indent">You’re sure you’ll not need me?’</p>
      
      <p class="indent">Jessica smiled grimly. ‘I’m sure.’</p>
      
      <p class="indent">‘Perhaps this could wait until tomorrow,’ Yueh said. ‘I could give you a sedative and …’</p>
      
      <p class="indent">You will return to your quarters and leave me to handle this my way,’ she said. She patted his arm to take the sting out of
         her command. ‘This is the only way.’
      </p>
      
      <p class="indent">Abruptly, head high, she turned and stalked off through the house to her rooms. Cold walls … passages … a familiar door …
         She jerked the door open, strode in, and slammed it behind her. Jessica stood there glaring at the shield-blanked windows
         of her sitting room. <em>Hawat! Could he be the one the Harkonnens bought? We shall see.</em></p>
      
      <p class="indent">Jessica crossed to the deep, old-fashioned armchair with an embroidered cover of schlag skin, moved the chair into position
         to command the door. She was suddenly very conscious of the crysknife in its sheath on her leg. She removed the sheath and
         strapped it to her arm, tested the drop of it. Once more, she glanced around the room, placing everything precisely in her
         <a id="page168"/>mind against any emergency: the chaise near the corner, the straight chairs along the wall, the two low tables, her stand-mounted
         zither beside the door to her bedroom.
      </p>
      
      <p class="indent">Pale rose light glowed from the suspensor lamps. She dimmed them, sat down in the armchair, patting the upholstery, appreciating
         the chair’s regal heaviness for this occasion.
      </p>
      
      <p class="indent"><em>Now, let him come,</em> she thought. <em>We shall see what we shall see.</em> And she prepared herself in the Bene Gesserit fashion for the wait, accumulating patience, saving her strength.
      </p>
      
      <p class="indent">Sooner than she had expected, a rap sounded at the door and Hawat entered at her command.</p>
      
      <p class="indent">She watched him without moving from the chair, seeing the crackling sense of drug-induced energy in his movements, seeing
         the fatigue beneath. Hawat’s rheumy old eyes glittered. His leathery skin appeared faintly yellow in the room’s light, and
         there was a wide, wet stain on the sleeve of his knife arm.
      </p>
      
      <p class="indent">She smelled blood there.</p>
      
      <p class="indent">Jessica gestured to one of the straight-backed chairs, said: ‘Bring that chair and sit facing me.’</p>
      
      <p class="indent">Hawat bowed, obeyed. <em>That drunken fool of an Idaho!</em> he thought. He studied Jessica’s face, wondering how he could save this situation.
      </p>
      
      <p class="indent">‘It’s long past time to clear the air between us,’Jessica said.</p>
      
      <p class="indent">‘What troubles my Lady?’ He sat down, placed hands on knees.</p>
      
      <p class="indent">‘Don’t play coy with me!’ she snapped. ‘If Yueh didn’t tell you why I summoned you, then one of your spies in my household
         did. Shall we be at least that honest with each other?’
      </p>
      
      <p class="indent">‘As you wish, my Lady.’</p>
      
      <p class="indent">‘First, you will answer me one question,’ she said. Are you now a Harkonnen agent?’</p>
      
      <p class="indent">Hawat surged half out of his chair, his face dark with fury, demanding: ‘You dare insult me so?’</p>
      
      <p class="indent">‘Sit down,’ she said. ‘You insulted me so.’</p>
      
      <p class="indent">Slowly, he sank back into the chair.</p>
      
      <p class="indent">And Jessica, reading the signs on this face that she knew so well, allowed herself a deep breath. <em>It isn’t Hawat.</em></p>
      
      <p class="indent"><a id="page169"/>‘Now I know you remain loyal to my Duke,’ she said. ‘I’m prepared, therefore, to forgive your affront to me.’
      </p>
      
      <p class="indent">‘Is there something to forgive?’</p>
      
      <p class="indent">Jessica scowled, wondering: <em>Shall I play my trump? Shall I tell him of the Duke’s daughter I’ve carried within me these few weeks? No … Leto himself doesn’t
            know. This would only complicate his life, divert him in a time when he must concentrate on our survival. There is yet time
            to use this.</em></p>
      
      <p class="indent">‘A Truthsayer would solve this,’ she said, ‘but we have no Truthsayer qualified by the High Board.’</p>
      
      <p class="indent">‘As you say. We’ve no Truthsayer.’</p>
      
      <p class="indent">‘Is there a traitor among us?’ she asked. ‘I’ve studied our people with great care. Who could it be? Not Gurney. Certainly
         not Duncan. <em>Their</em> lieutenants are not strategically enough placed to consider. It’s not you, Thufir. It cannot be Paul. I <em>know</em> it’s not me. Dr Yueh, then? Shall I call him in and put him to the test?’
      </p>
      
      <p class="indent">‘You know that’s an empty gesture,’ Hawat said. ‘He’s conditioned by the High College. <em>That</em> I know for certain.’
      </p>
      
      <p class="indent">‘Not to mention that his wife was a Bene Gesserit slain by the Harkonnens,’Jessica said.</p>
      
      <p class="indent">‘So that’s what happened to her,’ Hawat said.</p>
      
      <p class="indent">‘Haven’t you heard the hate in his voice when he speaks the Harkonnen name?’</p>
      
      <p class="indent">‘You know I don’t have the ear,’ Hawat said.</p>
      
      <p class="indent">‘What brought this base suspicion on me?’ she asked.</p>
      
      <p class="indent">Hawat frowned. ‘My Lady puts her servant in an impossible position. My first loyalty is to the Duke.’</p>
      
      <p class="indent">‘I’m prepared to forgive much because of that loyalty,’ she said.</p>
      
      <p class="indent">‘And again I must ask: Is there something to forgive?’</p>
      
      <p class="indent">‘Stalemate?’ she asked.</p>
      
      <p class="indent">He shrugged.</p>
      
      <p class="indent">‘Let us discuss something else for a minute, then,’ she said. ‘Duncan Idaho, the admirable fighting man whose abilities at
         guarding and surveillance are so esteemed. Tonight, he overindulged in something called spice beer. I hear reports that others
         among our people have been stupefied by this concoction. Is that true?’
      </p>
      
      <p class="indent"><a id="page170"/>‘You have your reports, my Lady.’
      </p>
      
      <p class="indent">‘So I do. Don’t you see this drinking as a symptom, Thufir?’</p>
      
      <p class="indent">‘My Lady speaks riddles.’</p>
      
      <p class="indent">‘Apply your Mentat abilities to it!’ she snapped. ‘What’s the problem with Duncan and the others? I can tell you in four words
         – they have no home.’
      </p>
      
      <p class="indent">He jabbed a finger at the floor. ‘Arrakis, that’s their home.’</p>
      
      <p class="indent">‘Arrakis is an unknown! Caladan was their home, but we’ve uprooted them. They have no home. And they fear the Duke’s failing
         them.’
      </p>
      
      <p class="indent">He stiffened. ‘Such talk from one of the men would be cause for—’</p>
      
      <p class="indent">‘Oh, stop that, Thufir. Is it defeatist or treacherous for a doctor to diagnose a disease correctly? My only intention is
         to cure the disease.’
      </p>
      
      <p class="indent">‘The Duke gives me charge over such matters.’</p>
      
      <p class="indent">‘But you understand I have a certain natural concern over the progress of this disease,’ she said. ‘And perhaps you’ll grant
         I have certain abilities along these lines.’
      </p>
      
      <p class="indent"><em>Will I have to shock him severely?</em> she wondered. <em>He needs shaking up – something to break him from routine.</em></p>
      
      <p class="indent">‘There could be many interpretations for your concern,’ Hawat said. He shrugged.</p>
      
      <p class="indent">‘Then you’ve already convicted me?’</p>
      
      <p class="indent">‘Of course not, my Lady. But I cannot afford to take <em>any</em> chances, the situation being what it is.’
      </p>
      
      <p class="indent">‘A threat to my son got past you right here in this house,’ she said. ‘Who took that chance?’</p>
      
      <p class="indent">His face darkened. ‘I offered my resignation to the Duke.’</p>
      
      <p class="indent">‘Did you offer your resignation to me … or to Paul?’</p>
      
      <p class="indent">Now he was openly angry, betraying it in quickness of breathing, in dilation of nostrils, a steady stare. She saw a pulse
         beating at his temple.
      </p>
      
      <p class="indent">‘I’m the Duke’s man,’ he said, biting off the words.</p>
      
      <p class="indent">‘There is no traitor,’ she said. ‘The threat’s something else. Perhaps it has to do with the lasguns. Perhaps they’ll risk
         secreting a few lasguns with timing mechanisms aimed at house shields. Perhaps they’ll …’
      </p>
      
      <p class="indent"><a id="page171"/>‘And who could tell after the blast if the explosion wasn’t atomic?’ he asked. ‘No, my Lady. They’ll not risk anything <em>that</em> illegal. Radiation lingers. The evidence is hard to erase. No. They’ll observe <em>most</em> of the forms. It has to be a traitor.’
      </p>
      
      <p class="indent">‘You’re the Duke’s man,’ she sneered. ‘Would you destroy him in the effort to save him?’</p>
      
      <p class="indent">He took a deep breath, then: ‘If you’re innocent, you’ll have my most abject apologies.’</p>
      
      <p class="indent">‘Look at you now, Thufir,’ she said. ‘Humans live best when each has his own place, when each knows where he belongs in the
         scheme of things. Destroy the place and destroy the person. You and I, Thufir, of all those who love the Duke, are most ideally
         situated to destroy the other’s place. Could I not whisper suspicions about you into the Duke’s ear at night? When would he
         be most susceptible to such whispering, Thufir? Must I draw it for you more clearly?’
      </p>
      
      <p class="indent">‘You threaten me?’ he growled.</p>
      
      <p class="indent">‘Indeed not. I merely point out to you that someone is attacking us through the basic arrangement of our lives. It’s clever,
         diabolical. I propose to negate this attack by so ordering our lives that there’ll be no chinks for such barbs to enter.’
      </p>
      
      <p class="indent">‘You accuse me of whispering baseless suspicions?’</p>
      
      <p class="indent">‘Baseless, yes.’</p>
      
      <p class="indent">‘You’d meet this with your own whispers?’</p>
      
      <p class="indent"><em>‘Your</em> life is compounded of whispers, not mine, Thufir.’
      </p>
      
      <p class="indent">‘Then you question my abilities?’</p>
      
      <p class="indent">She sighed. ‘Thufir, I want you to examine your own emotional involvement in this. The <em>natural</em> human’s an animal without logic. Your projection of logic onto all affairs is <em>un</em>natural, but suffered to continue for its usefulness. You’re the embodiment of logic – a Mentat. Yet, your problem solutions
         are concepts that, in a very real sense, are projected outside yourself, there to be studied and rolled around, examined from
         all sides.’
      </p>
      
      <p class="indent">‘You think now to teach me my trade?’ he asked, and he did not try to hide the disdain in his voice.</p>
      
      <p class="indent">‘Anything outside yourself, this you can see and apply your <a id="page172"/>logic to it,’ she said. ‘But it’s a human trait that when we encounter personal problems, those things most deeply personal
         are the most difficult to bring out for our logic to scan. We tend to flounder around, blaming everything but the actual,
         deep-seated thing that’s really chewing on us.’
      </p>
      
      <p class="indent">‘You’re deliberately attempting to undermine my faith in my abilities as a Mentat,’ he rasped. ‘Were I to find one of our
         people attempting thus to sabotage any other weapon in our arsenal, I should not hesitate to denounce and destroy him.’
      </p>
      
      <p class="indent">‘The finest Mentats have a healthy respect for the error factor in their computations,’ she said.</p>
      
      <p class="indent">‘I’ve never said otherwise!’</p>
      
      <p class="indent">‘Then apply yourself to these symptoms we’ve both seen: drunkenness among the men, quarrels – they gossip and exchange wild
         rumors about Arrakis; they ignore the most simple—’
      </p>
      
      <p class="indent">‘Idleness, no more,’ he said. ‘Don’t try to divert my attention by trying to make a simple matter appear mysterious.’</p>
      
      <p class="indent">She stared at him, thinking of the Duke’s men rubbing their woes together in the barracks until you could almost smell the
         charge there, like burnt insulation. <em>They’re becoming like the men of the pre-Guild legend,</em> she thought: <em>Like the men of the lost star-searcher, Ampoliros – sick at their guns –forever seeking, forever prepared and forever unready.</em></p>
      
      <p class="indent">‘Why have you never made full use of my abilities in your service to the Duke?’ she asked. ‘Do you fear a rival <em>for your</em> position?’
      </p>
      
      <p class="indent">He glared at her, the old eyes blazing. ‘I know some of the training they give you Bene Gesserit …’ He broke off, scowling.</p>
      
      <p class="indent">‘Go ahead, say it,’ she said. ‘Bene Gesserit <em>witches,’</em></p>
      
      <p class="indent">‘I know something of the <em>real</em> training they give you,’ he said. ‘I’ve seen it come out in Paul. I’m not fooled by what your schools tell the public: you
         exist only to serve.’
      </p>
      
      <p class="indent"><em>The shock must be severe and he’s almost ready for it,</em> she thought.
      </p>
      
      <p class="indent">‘You listen respectfully to me in Council,’ she said, ‘yet you seldom heed my advice. Why?’</p>
      
      <p class="indent">‘I don’t trust your Bene Gesserit motives,’ he said. You may <a id="page173"/>think you can look through a man; you may <em>think</em> you can make a man do exactly what you—’
      </p>
      
      <p class="indent">‘You poor <em>fool,</em> Thufir!’ she raged.
      </p>
      
      <p class="indent">He scowled, pushing himself back in the chair.</p>
      
      <p class="indent">‘Whatever rumors you’ve heard about our schools,’ she said, ‘the truth is far greater. If I wished to destroy the Duke … or
         you, or any other person within my reach, you could not stop me.’
      </p>
      
      <p class="indent">And she thought: <em>Why do I let pride drive such words out of me? This is not the way I was trained. This is not how I must shock him.</em></p>
      
      <p class="indent">Hawat slipped a hand beneath his tunic where he kept a tiny projector of poison darts. <em>She wears no shield,</em> he thought. <em>Is this just a brag she makes? I could slay her now … but, ah-h-h-h, the consequences if I’m wrong.</em></p>
      
      <p class="indent">Jessica saw the gesture toward his pocket, said: ‘Let us pray violence shall never be necessary between us.’</p>
      
      <p class="indent">‘A worthy prayer,’ he agreed.</p>
      
      <p class="indent">‘Meanwhile, the sickness spreads among us,’ she said. ‘I must ask you again: Isn’t it more reasonable to suppose the Harkonnens
         have planted this suspicion to pit the two of us against each other?’
      </p>
      
      <p class="indent">‘We appear to’ve returned to stalemate,’ he said.</p>
      
      <p class="indent">She sighed, thinking: <em>He’s almost ready for it.</em></p>
      
      <p class="indent">‘The Duke and I are father and mother surrogates to our people,’ she said. ‘The position—’</p>
      
      <p class="indent">‘He hasn’t married you,’ Hawat said.</p>
      
      <p class="indent">She forced herself to calmness, thinking: <em>A good riposte, that.</em></p>
      
      <p class="indent">‘But he’ll not marry anyone else,’ she said. ‘Not as long as I live. And we are surrogates, as I’ve said. To break up this
         natural order in our affairs, to disturb, disrupt, and confuse us – which target offers itself most enticingly to the Harkonnens?’
      </p>
      
      <p class="indent">He sensed the direction she was taking, and his brows drew down in a lowering scowl.</p>
      
      <p class="indent">‘The Duke?’ she asked. ‘Attractive target, yes, but no one with the possible exception of Paul is better guarded. Me? I tempt
         them, surely, but they must know the Bene Gesserit make difficult targets. And there’s a better target, one whose duties create,
         necessarily, a monstrous blind spot. One to whom <a id="page174"/>suspicion is as natural as breathing. One who builds his entire life on innuendo and mystery.’ She darted her right hand toward
         him. ‘You!’
      </p>
      
      <p class="indent">Hawat started to leap from his chair.</p>
      
      <p class="indent">‘I have not dismissed you, Thufir!’ she flared.</p>
      
      <p class="indent">The old Mentat almost fell back into the chair, so quickly did his muscles betray him.</p>
      
      <p class="indent">She smiled without mirth.</p>
      
      <p class="indent">‘Now you know something of the <em>real</em> training they give us,’ she said.
      </p>
      
      <p class="indent">Hawat tried to swallow in a dry throat. Her command had been regal, peremptory – uttered in a tone and manner he had found
         completely irresistible. His body had obeyed her before he could think about it. Nothing could have prevented his response
         – not logic, not passionate anger … nothing. To do what she had done spoke of a sensitive, intimate knowledge of the person
         thus commanded, a depth of control he had not dreamed possible.
      </p>
      
      <p class="indent">‘I have said to you before that we should understand each other,’ she said. ‘I meant <em>you</em> should understand <em>me.</em> I already understand you. And I tell you now that your loyalty to the Duke is all that guarantees your safety with me.’
      </p>
      
      <p class="indent">He stared at her, wet his lips with his tongue.</p>
      
      <p class="indent">‘If I desired a puppet, the Duke would marry me,’ she said. ‘He might even think he did it of his own free will.’</p>
      
      <p class="indent">Hawat lowered his head, looked upward through his sparse lashes. Only the most rigid control kept him from calling the guard.
         Control … and the suspicion now that the woman might not permit it. His skin crawled with the memory of how she had controlled
         him. In the moment of hesitation, she could have drawn a weapon and killed him!
      </p>
      
      <p class="indent"><em>Does every human have this blind spot?</em> he wondered. <em>Can any of us be ordered into action before he can resist?</em> The idea staggered him. <em>Who could stop a person with such power?</em></p>
      
      <p class="indent">‘You’ve glimpsed the fist within the Bene Gesserit glove,’ she said. ‘Few glimpse it and live. And what I did was a relatively
         simple thing for us. You’ve not seen my entire arsenal. Think on that.’
      </p>
      
      <p class="indent"><a id="page175"/>‘Why aren’t you out destroying the Duke’s enemies?’ he asked.
      </p>
      
      <p class="indent">‘What would you have me destroy?’ she asked. Would you have me make a weakling of our Duke, have him forever leaning on me?’</p>
      
      <p class="indent">‘But, with such power …’</p>
      
      <p class="indent">‘Power’s a two-edged sword, Thufir,’ she said. ‘You think: “How easy for her to shape a human tool to thrust into an enemy’s
         vitals.” True, Thufir; even into your vitals. Yet, what would I accomplish? If enough of us Bene Gesserit did this, wouldn’t
         it make all Bene Gesserit suspect? We don’t want that, Thufir. We do not wish to destroy ourselves.’ She nodded. We truly
         exist only to serve.’
      </p>
      
      <p class="indent">‘I cannot answer you,’ he said. You know I cannot answer.’</p>
      
      <p class="indent">You’ll say nothing about what has happened here to anyone,’ she said. ‘I know you, Thufir.’</p>
      
      <p class="indent">‘My Lady …’ Again the old man tried to swallow in a dry throat.</p>
      
      <p class="indent">And he thought: <em>She has great powers, yes. But would these not make her an even more formidable tool for the Harkonnens?</em></p>
      
      <p class="indent">‘The Duke could be destroyed as quickly by his friends as by his enemies,’ she said. ‘I trust now you’ll get to the bottom
         of this suspicion and remove it.’
      </p>
      
      <p class="indent">‘If it proves baseless,’ he said.</p>
      
      <p class="indent"><em>‘If</em>’ she sneered.
      </p>
      
      <p class="indent">‘If,’ he said.</p>
      
      <p class="indent">‘You <em>are</em> tenacious,’ she said.
      </p>
      
      <p class="indent">‘Cautious,’ he said, ‘and aware of the error factor.’</p>
      
      <p class="indent">‘Then I’ll pose another question for you: What does it mean to you that you stand before another human, that you are bound
         and helpless and the other human holds a knife at your throat – yet this other human refrains from killing you, frees you
         from your bonds and gives you the knife to use as you will?’
      </p>
      
      <p class="indent">She lifted herself out of the chair, turned her back on him. ‘You may go now, Thufir.’</p>
      
      <p class="indent">The old Mentat arose, hesitated, hand creeping toward the deadly weapon beneath his tunic. He was reminded of the bull ring
         and of the Duke’s father (who’d been brave, no matter what <a id="page176"/>his other failings) and one day of the <em>corrida</em> long ago: The fierce black beast had stood there, head bowed, immobilized and confused. The Old Duke had turned his back
         on the horns, cape thrown flamboyantly over one arm, while cheers rained down from the stands.
      </p>
      
      <p class="indent"><em>I am the bull and she the matador,</em> Hawat thought. He withdrew his hand from the weapon, glanced at the sweat glistening in his empty palm.
      </p>
      
      <p class="indent">And he knew that whatever the facts proved to be in the end, he would never forget this moment nor lose this sense of supreme
         admiration for the Lady Jessica.
      </p>
      
      <p class="indent">Quietly, he turned and left the room.</p>
      
      <p class="indent">Jessica lowered her gaze from the reflection in the windows, turned, and stared at the closed door.</p>
      
      <p class="indent">‘Now we’ll see some proper action,’ she whispered.</p>
      
      <blockquote class="linegroup">
         <p class="line1">Do you wrestle with dreams?</p>
         
         <p class="line1">Do you contend with shadows?</p>
         
         <p class="line1">Do you move in a kind of sleep?</p>
         
         <p class="line1">Time has slipped away.</p>
         
         <p class="line1">Your life is stolen.</p>
         
         <p class="line1">You tarried with trifles,</p>
         
         <p class="line1">Victim of your folly.</p>
         
         <p class="line1">—Dirge for Jamis on the Funeral Plain,</p>
      <p class="line">from ‘Songs of Muad’Dib’ by the Princess Irulan</p>
         
      </blockquote>
      
      
      <p class="noindent">Leto stood in the foyer of his house, studying a note by the light of a single suspensor lamp. Dawn was yet a few hours away,
         and he felt his tiredness. A Fremen messenger had brought the note to the outer guard just now as the Duke arrived from his
         command post.
      </p>
      
      <p class="indent">The note read: ‘A column of smoke by day, a pillar of fire by night.’</p>
      
      <p class="indent">There was no signature.</p>
      
      <p class="indent"><em>What does it mean?</em> he wondered.
      </p>
      
      <p class="indent">The messenger had gone without waiting for an answer and before he could be questioned. He had slipped into the night like
         some smoky shadow.
      </p>
      
      <p class="indent"><a id="page177"/>Leto pushed the paper into a tunic pocket, thinking to show it to Hawat later. He brushed a lock of hair from his forehead,
         took a sighing breath. The antifatigue pills were beginning to wear thin. It had been a long two days since the dinner party
         and longer than that since he had slept.
      </p>
      
      <p class="indent">On top of all the military problems, there’d been the disquieting session with Hawat, the report on his meeting with Jessica.</p>
      
      <p class="indent"><em>Should I waken Jessica?</em> he wondered. <em>There’s no reason to play the secrecy game with her any longer. Or is there?</em></p>
      
      <p class="indent"><em>Blast and damn that Duncan Idaho!</em></p>
      
      <p class="indent">He shook his head. <em>No, not Duncan. I was wrong not to take Jessica into my confidence from the first. I must do it now, before more damage is
            done.</em></p>
      
      <p class="indent">The decision made him feel better, and he hurried from the foyer through the Great Hall and down the passages toward the family
         wing.
      </p>
      
      <p class="indent">At the turn where the passages split to the service area, he paused. A strange mewling came from somewhere down the service
         passage. Leto put his left hand to the switch on his shield belt, slipped his kindjal into his right hand. The knife conveyed
         a sense of reassurance. That strange sound had sent a chill through him.
      </p>
      
      <p class="indent">Softly, the Duke moved down the service passage, cursing the inadequate illumination. The smallest of suspensors had been
         spaced about eight meters apart along here and tuned to their dimmest level. The dark stone walls swallowed the light.
      </p>
      
      <p class="indent">A dull blob stretching across the floor appeared out of the gloom ahead.</p>
      
      <p class="indent">Leto hesitated, almost activated his shield, but refrained because that would limit his movements, his hearing … and because
         the captured shipment of lasguns had left him filled with doubts.
      </p>
      
      <p class="indent">Silently, he moved toward the gray blob, saw that it was a human figure, a man face down on the stone. Leto turned him over
         with a foot, knife poised, bent close in the dim light to see the face. It was the smuggler, Tuek, a wet stain down his chest.
         <a id="page178"/>The dead eyes stared with empty darkness. Leto touched the stain – warm.
      </p>
      
      <p class="indent"><em>How could this man be dead here?</em> Leto asked himself. <em>Who killed him?</em></p>
      
      <p class="indent">The mewling sound was louder here. It came from ahead and down the side passage to the central room where they had installed
         the main shield generator for the house.
      </p>
      
      <p class="indent">Hand on belt switch, kindjal poised, the Duke skirted the body, slipped down the passage and peered around the corner toward
         the shield generator room.
      </p>
      
      <p class="indent">Another gray blob lay stretched on the floor a few paces away, and he saw at once this, was the source of the noise. The shape
         crawled toward him with painful slowness, gasping, mumbling.
      </p>
      
      <p class="indent">Leto stilled his sudden constriction of fear, darted down the passage, crouched beside the crawling figure. It was Mapes,
         the Fremen housekeeper, her hair tumbled around her face, clothing disarrayed. A dull shininess of dark stain spread from
         her back along her side. He touched her shoulder and she lifted herself on her elbows, head tipped up to peer at him, the
         eyes black-shadowed emptiness.
      </p>
      
      <p class="indent">‘S’you,’ she gasped. ‘Killed … guard … sent … get … Tuek … escape … m’Lady … you … you … here … no …’ She flopped forward,
         her head thumping against the stone.
      </p>
      
      <p class="indent">Leto felt for pulse at the temples. There was none. He looked at the stain: she’d been stabbed in the back. Who? His mind
         raced. Did she mean someone had killed a guard? And Tuek – had Jessica sent for him? Why?
      </p>
      
      <p class="indent">He started to stand up. A sixth sense warned him. He flashed a hand toward the shield switch – too late. A numbing shock slammed
         his arm aside. He felt pain there, saw a dart protruding from the sleeve, sensed paralysis spreading from it up his arm. It
         took an agonizing effort to lift his head and look down the passage.
      </p>
      
      <p class="indent">Yueh stood in the open door of the generator room. His face reflected yellow from the light of a single, brighter suspensor
         above the door. There was stillness from the room behind him – no sound of generators.
      </p>
      
      <p class="indent"><a id="page179"/><em>Yueh!</em> Leto thought. <em>He’s sabotaged the house generators! We’re wide open!</em></p>
      
      <p class="indent">Yueh began walking toward him, pocketing a dartgun.</p>
      
      <p class="indent">Leto found he could still speak, gasped: ‘Yueh! How?’ Then the paralysis reached his legs and he slid to the floor with his
         back propped against the stone wall.
      </p>
      
      <p class="indent">Yueh’s face carried a look of sadness as he bent over, touched Leto’s forehead. The Duke found he could feel the touch, but
         it was remote … dull.
      </p>
      
      <p class="indent">‘The drug on the dart is selective,’ Yueh said. ‘You can speak, but I’d advise against it.’ He glanced down the hall, and
         again bent over Leto, pulled out the dart, tossed it aside. The sound of the dart clattering on the stones was faint and distant
         to the Duke’s ears.
      </p>
      
      <p class="indent"><em>It can’t be Yueh,</em> Leto thought. <em>He’s conditioned.</em></p>
      
      <p class="indent">‘How?’ Leto whispered.</p>
      
      <p class="indent">‘I’m sorry, my dear Duke, but there <em>are</em> things which will make greater demands than this.’ He touched the diamond tattoo on his forehead. ‘I find it very strange,
         myself – an override on my pyretic conscience – but I wish to kill a man. Yes, I actually wish it. I will stop at nothing
         to do it.’
      </p>
      
      <p class="indent">He looked down at the Duke. ‘Oh, not you, my dear Duke. The Baron Harkonnen. I wish to kill the Baron.’</p>
      
      <p class="indent">‘Bar … on Har …’</p>
      
      <p class="indent">‘Be quiet, please, my poor Duke. You haven’t much time. That peg tooth I put in your mouth after the tumble at Narcal – that
         tooth must be replaced. In a moment, I’ll render you unconscious and replace that tooth.’ He opened his hand, stared at something
         in it. ‘An exact duplicate, its core shaped most exquisitely like a nerve. It’ll escape the usual detectors, even a fast scanning.
         But if you bite down hard on it, the cover crushes. Then, when you expel your breath sharply, you fill the air around you
         with a poison gas – most deadly.’
      </p>
      
      <p class="indent">Leto stared up at Yueh, seeing madness in the man’s eyes, the perspiration along brow and chin.</p>
      
      <p class="indent">‘You were dead anyway, my poor Duke,’ Yueh said. ‘But you will get close to the Baron before you die. He’ll believe you’re
         stupefied by drugs beyond any dying effort to attack him. And <a id="page180"/>you will be drugged – and tied. But attack can take strange forms. And <em>you</em> will remember the tooth. The <em>tooth,</em> Duke Leto Atreides. You will remember the tooth.’
      </p>
      
      <p class="indent">The old doctor leaned closer and closer until his face and drooping mustache dominated Leto’s narrowing vision.</p>
      
      <p class="indent">‘The tooth,’ Yueh muttered.</p>
      
      <p class="indent">‘Why?’ Leto whispered.</p>
      
      <p class="indent">Yueh lowered himself to one knee beside the Duke. ‘I made a shaitan’s bargain with the Baron. And I must be certain he has
         fulfilled his half of it. When I see him, I’ll know. When I look at the Baron, then I <em>will</em> know. But I’ll never enter his presence without the price. You’re the price, my poor Duke. And I’ll know when I see him.
         My poor Wanna taught me many things, and one is to see certainty of truth when the stress is great. I cannot do it always,
         but when I see the Baron – then, I <em>will</em> know.’
      </p>
      
      <p class="indent">Leto tried to look down at the tooth in Yueh’s hand. He felt this was happening in a nightmare – it could not be.</p>
      
      <p class="indent">Yueh’s purple lips turned up in a grimace. ‘I’ll not get close enough to the Baron, or I’d do this myself. No. I’ll be detained
         at a safe distance. But you … ah, now! You, my lovely weapon! He’ll want you close to him – to gloat over you, to boast a
         little.’
      </p>
      
      <p class="indent">Leto found himself almost hypnotized by a muscle on the left side of Yueh’s jaw. The muscle twisted when the man spoke.</p>
      
      <p class="indent">Yueh leaned closer. ‘And you, my good Duke, my precious Duke, you must remember this tooth.’ He held it up between thumb and
         forefinger. ‘It will be all that remains to you.’
      </p>
      
      <p class="indent">Leto’s mouth moved without sound, then: ‘Refuse.’</p>
      
      <p class="indent">‘Ah-h, no! You mustn’t refuse. Because, in return for this small service, I’m doing a thing for you. I will save your son
         and your woman. No other can do it. They can be removed to a place where no Harkonnen can reach them.’
      </p>
      
      <p class="indent">‘How … save … them?’ Leto whispered.</p>
      
      <p class="indent">‘By making it appear they’re dead, by secreting them among people who draw knife at hearing the Harkonnen name, who hate the
         Harkonnens so much they’ll burn a chair in which a Harkonnen has sat, salt the ground over which a Harkonnen has <a id="page181"/>walked.’ He touched Leto’s jaw. ‘Can you feel anything in your jaw?’
      </p>
      
      <p class="indent">The Duke found that he could not answer. He sensed distant tugging, saw Yueh’s hand come up with the ducal signet ring.</p>
      
      <p class="indent">‘For Paul,’ Yueh said. ‘You’ll be unconscious presently. Goodbye, my poor Duke. When we next meet we’ll have no time for conversation.’</p>
      
      <p class="indent">Cool remoteness spread upward from Leto’s jaw, across his cheeks. The shadowy hall narrowed to a pinpoint with Yueh’s purple
         lips centered in it.
      </p>
      
      <p class="indent">‘Remember the tooth!’ Yueh hissed. ‘The tooth!’</p>
      
      <blockquote class="blockquote">
         <p class="noindent">There should be a science of discontent. People need hard times and oppression to develop psychic muscles.</p>
         <p class="right">—from ‘Collected Sayings of Muad’Dib’ by the Princess Irulan</p>
      </blockquote>
      
      <p class="noindent">Jessica awoke in the dark, feeling premonition in the stillness around her. She could not understand why her mind and body
         felt so sluggish. Skin raspings of fear ran along her nerves. She thought of sitting up and turning on a light, but something
         stayed the decision. Her mouth felt … strange.
      </p>
      
      <p class="indent"><em>Lump-lump-lump-lump!</em></p>
      
      <p class="indent">It was a dull sound, directionless in the dark. Somewhere.</p>
      
      <p class="indent">The waiting moment was packed with time, with rustling needle-stick movements.</p>
      
      <p class="indent">She began to feel her body, grew aware of bindings on wrists and ankles, a gag in her mouth. She was on her side, hands tied
         behind her. She tested the bindings, realized they were krimskell fiber, would only claw tighter as she pulled.
      </p>
      
      <p class="indent">And now, she remembered.</p>
      
      <p class="indent">There had been movement in the darkness of her bedroom, something wet and pungent slapped against her face, filling her mouth,
         hands grasping for her. She had gasped – one indrawn breath – sensing the narcotic in the wetness. Consciousness had receded,
         sinking her into a black bin of terror.
      </p>
      
      <p class="indent"><em>It has come,</em> she thought. <em>How simple it was to subdue the Bene Gesserit. All it took was treachery. Hawat was right.</em></p>
      
      <p class="indent">She forced herself not to pull on her bindings.</p>
      
      <p class="indent"><a id="page182"/><em>This is not my bedroom,</em> she thought. <em>They’ve taken me someplace else.</em></p>
      
      <p class="indent">Slowly, she marshaled the inner calmness.</p>
      
      <p class="indent">She grew aware of the smell of her own stale sweat with its chemical infusion of fear.</p>
      
      <p class="indent"><em>Where is Paul?</em> she asked herself. <em>My son – what have they done to him?</em></p>
      
      <p class="indent"><em>Calmness.</em></p>
      
      <p class="indent">She forced herself to it, using the ancient routines.</p>
      
      <p class="indent">But terror remained so near.</p>
      
      <p class="indent"><em>Leto? Where are you, Leto?</em></p>
      
      <p class="indent">She sensed a diminishing in the dark. It began with shadows. Dimensions separated, became new thorns of awareness. White.
         A line under a door.
      </p>
      
      <p class="indent"><em>‘I’m on the floor.</em></p>
      
      <p class="indent">People walking. She sensed it through the floor. Jessica squeezed back the memory of terror. <em>I must remain calm, alert, and prepared. I may get only one chance.</em> Again, she forced the inner calmness.
      </p>
      
      <p class="indent">The ungainly thumping of her heartbeats evened, shaping out time. She counted back. <em>I was unconscious about an hour.</em> She closed her eyes, focused her awareness onto the approaching footsteps.
      </p>
      
      <p class="indent"><em>Four people.</em></p>
      
      <p class="indent">She counted the differences in their steps.</p>
      
      <p class="indent"><em>I must pretend I’m still unconscious.</em> She relaxed against the cold floor, testing her body’s readiness, heard a door open, sensed increased light through her eyelids.
      </p>
      
      <p class="indent">Feet approached: someone standing over her.</p>
      
      <p class="indent">‘You are awake,’ rumbled a basso voice. ‘Do not pretend.’</p>
      
      <p class="indent">She opened her eyes.</p>
      
      <p class="indent">The Baron Vladimir Harkonnen stood over her. Around them, she recognized the cellar room where Paul had slept, saw his cot
         at one side – empty. Suspensor lamps were brought in by guards, distributed near the open door. There was a glare of light
         in the hallway beyond that hurt her eyes.
      </p>
      
      <p class="indent">She looked up at the Baron. He wore a yellow cape that bulged over his portable suspensors. The fat cheeks were two cherubic
         mounds beneath spider-black eyes.
      </p>
      
      <p class="indent"><a id="page183"/>‘The drug was timed,’ he rumbled. ‘We knew to the minute when you’d be coming out of it.’
      </p>
      
      <p class="indent"><em>How could that be?</em> she wondered. <em>They’d have to know my exact weight, my metabolism, my … Yueh!</em></p>
      
      <p class="indent">‘Such a pity you must remain gagged,’ the Baron said. ‘We could have such an interesting conversation.’</p>
      
      <p class="indent"><em>Yueh’s the only one it could be,</em> she thought. <em>How?</em></p>
      
      <p class="indent">The Baron glanced behind him at the door. ‘Come in, Piter.’</p>
      
      <p class="indent">She had never before seen the man who entered to stand beside the Baron, but the face was known – and the man: <em>Piter de Vries, the Mentat-Assassin.</em> She studied him – hawk features, blue-ink eyes that suggested he was a native of Arrakis, but subtleties of movement and
         stance told her he was not. And his flesh was too well firmed with water. He was tall, though slender, and something about
         him suggested effeminacy.
      </p>
      
      <p class="indent">‘Such a pity we cannot have our conversation, my dear Lady Jessica,’ the Baron said. ‘However, I’m aware of your abilities.’
         He glanced at the Mentat. ‘Isn’t that true, Piter?’
      </p>
      
      <p class="indent">As you say, Baron,’ the man said.</p>
      
      <p class="indent">The voice was tenor. It touched her spine with a wash of coldness. She had never heard such a chill voice. To one with the
         Bene Gesserit training the voice screamed: <em>Killer!</em></p>
      
      <p class="indent">‘I have a surprise for Piter,’ the Baron said. ‘He thinks he has come here to collect his reward – you, Lady Jessica. But
         I wish to demonstrate a thing: that he does not really want you.’
      </p>
      
      <p class="indent">‘You play with me, Baron?’ Piter asked, and he smiled.</p>
      
      <p class="indent">Seeing that smile, Jessica wondered that the Baron did not leap to defend himself from this Piter. Then she corrected herself.
         The Baron could not read that smile. He did not have the Training.
      </p>
      
      <p class="indent">‘In many ways, Piter is quite naive,’ the Baron said. ‘He doesn’t admit to himself what a deadly creature you are, Lady Jessica.
         I’d show him, but it’d be a foolish risk.’ The Baron smiled at Piter, whose face had become a waiting mask. ‘I know what Piter
         really wants. Piter wants power.’
      </p>
      
      <p class="indent">‘You promised I could have <em>her,’</em> Piter said. The tenor voice had lost some of its cold reserve. Jessica heard the clue-tones in the man’s voice, allowed herself
         <a id="page184"/>an inward shudder. <em>How could the Baron have made such an animal out of a Mentat?</em></p>
      
      <p class="indent">‘I give you a choice, Piter,’ the Baron said.</p>
      
      <p class="indent">‘What choice?’</p>
      
      <p class="indent">The Baron snapped fat fingers. ‘This woman and exile from the Imperium, or the Duchy of Atreides on Arrakis to rule as you
         see fit in my name.’ Jessica watched the Baron’s spider eyes study Piter.
      </p>
      
      <p class="indent">‘You could be Duke here in all but name,’ the Baron said.</p>
      
      <p class="indent"><em>Is my Leto dead, then?</em> Jessica asked herself. She felt a silent wail begin somewhere in her mind.
      </p>
      
      <p class="indent">The Baron kept his attention on the Mentat. ‘Understand yourself, Piter. You want her because she was a Duke’s woman, a symbol
         of his power – beautiful, useful, exquisitely trained for her role. But an entire duchy, Piter! That’s more than a symbol;
         that’s the reality. With it you could have many women … and more.’
      </p>
      
      <p class="indent">‘You do not joke with Piter?’</p>
      
      <p class="indent">The Baron turned with that dancing lightness the suspensors gave him. ‘Joke? I? Remember – I am giving up the boy. You heard
         what the traitor said about the lad’s training. They are alike, this mother and son – deadly.’ The Baron smiled. ‘I must go
         now. I will send in the guard I’ve reserved for this moment. He’s stone deaf. His orders will be to convey you on the first
         leg of your journey into exile. He will subdue this woman if he sees her gain control of you. He’ll not permit you to untie
         her gag until you’re off Arrakis. If you choose not to leave … he has other orders.’
      </p>
      
      <p class="indent">‘You don’t have to leave,’ Piter said. ‘I’ve chosen.’</p>
      
      <p class="indent">‘Ah, hah!’ the Baron chortled. ‘Such quick decision can mean only one thing.’</p>
      
      <p class="indent">‘I will take the duchy,’ Piter said.</p>
      
      <p class="indent">And Jessica thought: <em>Doesn’t Piter know the Baron’s lying to him? But – how could he know? He’s a twisted Mentat.</em></p>
      
      <p class="indent">The Baron glanced down at Jessica. ‘Is it not wonderful that I know Piter so well? I wagered with my Master at Arms that this
         would be Piter’s choice. Hah! Well, I leave now. This is much better. Ah-h, much better. You understand, Lady Jessica? I <a id="page185"/>hold no rancor toward you. It’s a necessity. Much better this way. Yes. And I’ve not <em>actually</em> ordered you destroyed. When it’s asked of me what happened to you, I can shrug it off in all truth.’
      </p>
      
      <p class="indent">‘You leave it to me then?’ Piter asked.</p>
      
      <p class="indent">‘The guard I send you will take your orders,’ the Baron said. ‘Whatever’s done I leave to you.’ He stared at Piter. ‘Yes.
         There will be no blood on my hands here. It’s your decision. Yes. I know nothing of it. You will wait until I’ve gone before
         doing whatever you must do. Yes. Well … ah, yes. Yes. Good.’
      </p>
      
      <p class="indent"><em>He fears the questioning of a Truthsayer,</em> Jessica thought. <em>Who? Ah-h-h, the Reverend Mother Gaius Helen, of course! If he knows he must face her questions, then the Emperor is in on
            this for sure. Ah-h-h-h, my poor Leto.</em></p>
      
      <p class="indent">With one last glance at Jessica, the Baron turned, went out the door. She followed him with her eyes, thinking: <em>It’s as the Reverend Mother warned – too potent an adversary.</em></p>
      
      <p class="indent">Two Harkonnen troopers entered. Another, his face a scarred mask, followed and stood in the doorway with drawn lasgun.</p>
      
      <p class="indent"><em>The deaf one,</em> Jessica thought, studying the scarred face. <em>The Baron knows I could use the Voice on any other man.</em></p>
      
      <p class="indent">Scarface looked at Piter. ‘We’ve the boy on a litter outside. What are your orders?’</p>
      
      <p class="indent">Piter spoke to Jessica. ‘I’d thought of binding you by a threat held over your son, but I begin to see that would not have
         worked. I let emotion cloud reason. Bad policy for a Mentat.’ He looked at the first pair of troopers, turning so the deaf
         one could read his lips: ‘Take them into the desert as the traitor suggested for the boy. His plan is a good one. The worms
         will destroy all evidence. Their bodies must never be found.’
      </p>
      
      <p class="indent">‘You don’t wish to dispatch them yourself?’ Scarface asked.</p>
      
      <p class="indent"><em>He reads lips,</em> Jessica thought.
      </p>
      
      <p class="indent">‘I follow my Baron’s example,’ Piter said. ‘Take them where the traitor said.’</p>
      
      <p class="indent">Jessica heard the harsh Mentat control in Piter’s voice, thought: <em>He, too, fears the Truthsayer.</em></p>
      
      <p class="indent">Piter shrugged, turned, and went through the doorway. He hesitated there, and Jessica thought he might turn back for a last
         look at her, but he went out without turning.
      </p>
      
      <p class="indent"><a id="page186"/>‘Me, I wouldn’t like the thought of facing that Truthsayer after this night’s work,’ Scarface said.
      </p>
      
      <p class="indent">‘You ain’t likely ever to run into that old witch,’ one of the other troopers said. He went around to Jessica’s head, bent
         over her. ‘It ain’t getting our work done standing around here chattering. Take her feet and—’
      </p>
      
      <p class="indent">‘Why’n’t we kill ‘em here?’ Scarface asked.</p>
      
      <p class="indent">‘Too messy,’ the first one said. ‘Unless you wants to strangle ‘em. Me, I likes a nice straightforward job. Drop ‘em on the
         desert like that traitor said, cut ‘em once or twice, leave the evidence for the worms. Nothing to clean up afterward.’
      </p>
      
      <p class="indent">‘Yeah … well, I guess you’re right,’ Scarface said.</p>
      
      <p class="indent">Jessica listened to them, watching, registering. But the gag blocked her Voice, and there was the deaf one to consider.</p>
      
      <p class="indent">Scarface holstered his lasgun, took her feet. They lifted her like a sack of grain, maneuvered her through the door and dumped
         her onto a suspensor-buoyed litter with another bound figure. As they turned her, fitting her to the litter, she saw her companion’s
         face – Paul! He was bound, but not gagged. His face was no more than ten centimeters from hers, eyes closed, his breathing
         even.
      </p>
      
      <p class="indent"><em>Is he drugged?</em> she wondered.
      </p>
      
      <p class="indent">The troopers lifted the litter, and Paul’s eyes opened the smallest fraction – dark slits staring at her.</p>
      
      <p class="indent"><em>He mustn’t try the Voice!</em> she prayed. <em>The deaf guard!</em></p>
      
      <p class="indent">Paul’s eyes closed.</p>
      
      <p class="indent">He had been practicing the awareness-breathing, calming his mind, listening to their captors. The deaf one posed a problem,
         but Paul contained his despair. The mind-calming Bene Gesserit regimen his mother had taught him kept him poised, ready to
         expand any opportunity.
      </p>
      
      <p class="indent">Paul allowed himself another slit-eyed inspection of his mother’s face. She appeared unharmed. Gagged, though.</p>
      
      <p class="indent">He wondered who could’ve captured her. His own captivity was plain enough – to bed with a capsule prescribed by Yueh, awaking
         to find himself bound to this litter. Perhaps a similar thing had befallen her. Logic said the traitor was Yueh, but he <a id="page187"/>held final decision in abeyance. There was no understanding it – a Suk doctor a traitor.
      </p>
      
      <p class="indent">The litter tipped slightly as the Harkonnen troopers maneuvered it through a doorway into starlit night. A suspensor-buoy
         rasped against the doorway. Then they were on sand, feet grating in it. A ’thopter wing loomed overhead, blotting the stars.
         The litter settled to the ground.
      </p>
      
      <p class="indent">Paul’s eyes adjusted to the faint light. He recognized the deaf trooper as the man who opened the ’thopter door, peered inside
         at the green gloom illuminated by the instrument panel.
      </p>
      
      <p class="indent">‘This the ’thopter we’re supposed to use?’ he asked, and turned to watch his companion’s lips.</p>
      
      <p class="indent">‘It’s the one the traitor said was fixed for desert work,’ the other said.</p>
      
      <p class="indent">Scarface nodded. ‘But it’s one of them little liaison jobs. Ain’t room in there for more’n them an’ two of us.’</p>
      
      <p class="indent">‘Two’s enough,’ said the litter-bearer, moving up close and presenting his lips for reading. ‘We can take care of it from
         here on, Kinet.’
      </p>
      
      <p class="indent">‘The Baron he told me to make sure what happened to them two,’ Scarface said.</p>
      
      <p class="indent">‘What you so worried about?’ asked another trooper from behind the litter-bearer.</p>
      
      <p class="indent">‘She is a Bene Gesserit witch,’ the deaf one said. ‘They have powers.’</p>
      
      <p class="indent">‘Ah-h-h …’ The litter-bearer made the sign of the fist at his ear. ‘One of them, eh? Know whatcha mean.’</p>
      
      <p class="indent">The trooper behind him grunted. ‘She’ll be worm meat soon enough. Don’t suppose even a Bene Gesserit witch has powers over
         one of them big worms. Eh, Czigo?’ He nudged the litter-bearer.
      </p>
      
      <p class="indent">‘Yee-up,’ the litter-bearer said. He returned to the litter, took Jessica’s shoulders. ‘C’mon, Kinet. You can go along if
         you wants to make sure what happens.’
      </p>
      
      <p class="indent">‘It is nice of you to invite me, Czigo,’ Scarface said.</p>
      
      <p class="indent">Jessica felt herself lifted, the wing shadow spinning – stars. She was pushed into the rear of the ’thopter, her <em>krimskell</em> fiber bindings examined, and she was strapped down. Paul was <a id="page188"/>jammed in beside her, strapped securely, and she noted his bonds were simple rope.
      </p>
      
      <p class="indent">Scarface, the deaf one they called Kinet, took his place in front. The litter-bearer, the one they called Czigo, came around
         and took the other front seat.
      </p>
      
      <p class="indent">Kinet closed his door, bent to the controls. The ’thopter took off in a wing-tucked surge, headed south over the Shield Wall.
         Czigo tapped his companion’s shoulder, said: ‘Whyn’t you turn around and keep an eye on them two?’
      </p>
      
      <p class="indent">‘Sure you know the way to go?’ Kinet watched Czigo’s lips.</p>
      
      <p class="indent">‘I listened to the traitor same’s you.’</p>
      
      <p class="indent">Kinet swiveled his seat. Jessica saw the glint of starlight on a lasgun in his hand. The ’thopter’s light-walled interior
         seemed to collect illumination as her eyes adjusted, but the guard’s scarred face remained dim. Jessica tested her seat belt,
         found it loose. She felt roughness in the strap against her left arm, realized the strap had been almost severed, would snap
         at a sudden jerk.
      </p>
      
      <p class="indent"><em>Has someone been at this ’thopter, preparing it for us?</em> she wondered. <em>Who?</em> Slowly, she twisted her bound feet clear of Paul’s.
      </p>
      
      <p class="indent">‘Sure do seem a shame to waste a good-looking woman like this,’ Scarface said. ‘You ever have any highborn types?’ He turned
         to look at the pilot.
      </p>
      
      <p class="indent">‘Bene Gesserit ain’t all highborn,’ the pilot said.</p>
      
      <p class="indent">‘But they all look heighty.’</p>
      
      <p class="indent"><em>He can see me plain enough,</em> Jessica thought. She brought her bound legs up onto the seat, curled into a sinuous ball, staring at Scarface.
      </p>
      
      <p class="indent">‘Real pretty, she is,’ Kinet said. He wet his lips with his tongue. ‘Sure do seem a shame.’ He looked at Czigo.</p>
      
      <p class="indent">‘You thinking what I think you’re thinking?’ the pilot asked.</p>
      
      <p class="indent">‘Who’d be to know?’ the guard asked. ‘Afterward …’ He shrugged. ‘I just never had me no highborns. Might never got a chance
         like this one again.’
      </p>
      
      <p class="indent">You lay a hand on my mother …’ Paul grated. He glared at Scarface.</p>
      
      <p class="indent">‘Hey!’ the pilot laughed. ‘Cub’s got a bark. Ain’t got no bite, though.’</p>
      
      <p class="indent"><a id="page189"/>And Jessica thought: <em>Paul’s pitching his voice too high. It may work, though.</em></p>
      
      <p class="indent">They flew on in silence.</p>
      
      <p class="indent"><em>These poor fools,</em> Jessica thought, studying her guards and reviewing the Baron’s words. <em>They’ll be killed as soon as they report success on their mission. The Baron wants no witnesses.</em></p>
      
      <p class="indent">The ’thopter banked over the southern rim of the Shield Wall, and Jessica saw a moonshadowed expanse of sand beneath them.</p>
      
      <p class="indent">‘This oughta be far enough,’ the pilot said. ‘The traitor said to put ‘em on the sand anywhere near the Shield Wall.’ He dipped
         the craft toward the dunes in a long, falling stoop, brought it up stiffly over the desert surface.
      </p>
      
      <p class="indent">Jessica saw Paul begin taking the rhythmic breaths of the calming exercise. He closed his eyes, opened them. Jessica stared,
         helpless to aid him. <em>He hasn’t mastered the Voice yet,</em> she thought, <em>if he fails …</em></p>
      
      <p class="indent">The ’thopter touched sand with a soft lurch, and Jessica, looking north back across the Shield Wall, saw a shadow of wings
         settle out of sight up there.
      </p>
      
      <p class="indent"><em>Someone’s following us!</em> she thought. <em>Who! Then: The ones the Baron set to watch this pair. And there’ll be watchers for the watchers, too.</em></p>
      
      <p class="indent">Czigo shut off his wing rotors. Silence flooded in upon them.</p>
      
      <p class="indent">Jessica turned her head. She could see out the window beyond Scarface a dim glow of light from a rising moon, a frosted rim
         of rock rising from the desert. Sandblast ridges streaked its sides.
      </p>
      
      <p class="indent">Paul cleared his throat.</p>
      
      <p class="indent">The pilot said: ‘Now, Kinet?’</p>
      
      <p class="indent">‘I dunno, Czigo.’</p>
      
      <p class="indent">Czigo turned, said: ‘Ah-h-h, look.’ He reached out for Jessica’s skirt.</p>
      
      <p class="indent">‘Remove her gag,’ Paul commanded.</p>
      
      <p class="indent">Jessica felt the words rolling in the air. The tone, the timbre excellent – imperative, very sharp. A slightly lower pitch
         would have been better, but it could still fall within this man’s spectrum.
      </p>
      
      <p class="indent">Czigo shifted his hand up to the band around Jessica’s mouth, slipped the knot on the gag.</p>
      
      <p class="indent"><a id="page190"/>‘Stop that!’ Kinet ordered.
      </p>
      
      <p class="indent">‘Ah, shut your trap,’ Czigo said. ‘Her hands’re tied.’ He freed the knot and the binding dropped. His eyes glittered as he
         studied Jessica.
      </p>
      
      <p class="indent">Kinet put a hand on the pilot’s arm. ‘Look, Czigo, no need to …’</p>
      
      <p class="indent">Jessica twisted her neck, spat out the gag. She pitched her voice in low, intimate tones. ‘Gentlemen! No need <em>to fight</em> over me.’ At the same time, she writhed sinuously for Kinet’s benefit.
      </p>
      
      <p class="indent">She saw them grow tense, knowing that in this instant they were convinced of the need to fight over her. Their disagreement
         required no other reason. In their minds, they <em>were</em> fighting over her.
      </p>
      
      <p class="indent">She held her face high in the instrument glow to be sure Kinet would read her lips, said: ‘You mustn’t disagree.’ They drew
         farther apart, glanced warily at each other. ‘Is any woman worth fighting over?’ she asked.
      </p>
      
      <p class="indent">By uttering the words, by being there, she made herself infinitely worth their fighting.</p>
      
      <p class="indent">Paul clamped his lips tightly closed, forced himself to be silent. There had been the one chance for him to succeed with the
         Voice. Now – everything depended on his mother whose experience went so far beyond his own.
      </p>
      
      <p class="indent">‘Yeah,’ Scarface said. ‘No need to fight over …’</p>
      
      <p class="indent">His hand flashed toward the pilot’s neck. The blow was met by a splash of metal that caught the arm and in the same motion
         slammed into Kinet’s chest.
      </p>
      
      <p class="indent">Scarface groaned, sagged backward against the door.</p>
      
      <p class="indent">‘Thought I was some dummy didn’t know that trick,’ Czigo said. He brought back his hand, revealing the knife. It glittered
         in reflected moonlight.
      </p>
      
      <p class="indent">‘Now for the cub,’ he said and leaned toward Paul.</p>
      
      <p class="indent">‘No need for that,’Jessica murmured.</p>
      
      <p class="indent">Czigo hesitated.</p>
      
      <p class="indent">‘Wouldn’t you rather have me cooperative?’ Jessica asked. ‘Give the boy a chance.’ Her lip curled in a sneer. ‘Little enough
         chance he’d have out there in that sand. Give him that and …’ She smiled. ‘You could find yourself well rewarded.’
      </p>
      
      <p class="indent"><a id="page191"/>Czigo glanced left, right, returned his attention to Jessica. ‘I’ve heard me what can happen to a man in this desert,’ he
         said. ‘Boy might find the knife a kindness.’
      </p>
      
      <p class="indent">‘Is it so much I ask?’Jessica pleaded.</p>
      
      <p class="indent">‘You’re trying to trick me,’ Czigo muttered.</p>
      
      <p class="indent">‘I don’t want to see my son die,’Jessica said. ‘Is that a trick?’</p>
      
      <p class="indent">Czigo moved back, elbowed the door latch. He grabbed Paul, dragged him across the seat, pushed him half out the door and held
         the knife poised. ‘What’ll y’ do, cub, if I cut y’r bonds?’
      </p>
      
      <p class="indent">‘He’ll leave here immediately and head for those rocks,’ Jessica said.</p>
      
      <p class="indent">‘Is that what y’ll do, cub?’ Czigo asked.</p>
      
      <p class="indent">Paul’s voice was properly surly. ‘Yes.’</p>
      
      <p class="indent">The knife moved down, slashed the bindings of his legs. Paul felt the hand on his back to hurl him down onto the sand, feigned
         a lurch against the door-frame for purchase, turned as though to catch himself, lashed out with his right foot.
      </p>
      
      <p class="indent">The toe was aimed with a precision that did credit to his long years of training, as though all of that training focused on
         this instant. Almost every muscle of his body cooperated in the placement of it. The tip struck the soft part of Czigo’s abdomen
         just below the sternum, slammed upward with terrible force over the liver and through the diaphragm to crush the right ventricle
         of the man’s heart.
      </p>
      
      <p class="indent">With one gurgling scream, the guard jerked backward across the seats. Paul, unable to use his hands, continued his tumble
         onto the sand, landing with a roll that took up the force and brought him back to his feet in one motion. He drove back into
         the cabin, found the knife and held it in his teeth while his mother sawed her bonds. She took the blade and freed his hands.
      </p>
      
      <p class="indent">‘I could’ve handled him,’ she said. ‘He’d have had to cut my bindings. That was a foolish risk.’</p>
      
      <p class="indent">‘I saw the opening and used it,’ he said.</p>
      
      <p class="indent">She heard the harsh control in his voice, said: Yueh’s house sign is scrawled on the ceiling of this cabin.’</p>
      
      <p class="indent">He looked up, saw the curling symbol.</p>
      
      <p class="indent"><a id="page192"/>‘Get out and let us study the craft,’ she said. ‘There’s a bundle under the pilot’s seat. I felt it when we got in.’
      </p>
      
      <p class="indent">‘Bomb?’</p>
      
      <p class="indent">‘Doubt it. There’s something peculiar here.’</p>
      
      <p class="indent">Paul leaped out to the sand and Jessica followed. She turned, reached under the seat for the strange bundle, seeing Czigo’s
         feet close to her face, feeling dampness on the bundle as she removed it, realizing the dampness was the pilot’s blood.
      </p>
      
      <p class="indent"><em>Waste of moisture,</em> she thought, knowing that this was Arrakeen thinking.
      </p>
      
      <p class="indent">Paul stared around them, saw the rock scarp lifting out of the desert like a beach rising from the sea, wind-carved palisades
         beyond. He turned back as his mother lifted the bundle from the ’thopter, saw her stare across the dunes toward the Shield
         Wall. He looked to see what drew her attention, saw another ’thopter swooping toward them, realized they’d not have time to
         clear the bodies out of this ’thopter and escape.
      </p>
      
      <p class="indent">‘Run, Paul!’Jessica shouted. ‘It’s Harkonnens!’</p>
      
      <blockquote class="blockquote">
         <p class="noindent">Arrakis teaches the attitude of the knife – chopping off what’s incomplete and saying: ‘Now, it’s complete because it’s ended
            here.’
         </p>
         <p class="right">—from ‘Collected Sayings of Muad’Dib’ by the Princess Irulan</p>
      </blockquote>
      
      <p class="noindent">A man in Harkonnen uniform skidded to a stop at the end of the hall, stared in at Yueh, taking in at a single glance Mapes’
         body, the sprawled form of the Duke, Yueh standing there. The man held a lasgun in his right hand. There was a casual air
         of brutality about him, a sense of toughness and poise that sent a shiver through Yueh.
      </p>
      
      <p class="indent"><em>Sardaukar,</em> Yueh thought. <em>A Bashar by the look of him. Probably one of the Emperor’s own sent here to keep an eye on things. No matter what the uniform,
            there’s no disguising them.</em></p>
      
      <p class="indent">‘You’re Yueh,’ the man said. He looked speculatively at the Suk School ring on the Doctor’s hair, stared once at the diamond
         tattoo and then met Yueh’s eyes.
      </p>
      
      <p class="indent">‘I am Yueh,’ the Doctor said.</p>
      
      <p class="indent">‘You can relax, Yueh,’ the man said. ‘When you dropped <a id="page193"/>the house shields we came right in. Everything’s under control here. Is this the Duke?’
      </p>
      
      <p class="indent">‘This is the Duke.’</p>
      
      <p class="indent">‘Dead?’</p>
      
      <p class="indent">‘Merely unconscious. I suggest you tie him.’</p>
      
      <p class="indent">‘Did you do for these others?’ He glanced back down the hall where Mapes’ body lay.</p>
      
      <p class="indent">‘More’s the pity,’ Yueh muttered.</p>
      
      <p class="indent">‘Pity!’ the Sardaukar sneered. He advanced, looked down at Leto. ‘So that’s the great Red Duke.’</p>
      
      <p class="indent"><em>If I had doubts about what this man is, that would end them,</em> Yueh thought. <em>Only the Emperor calls the Atreides the Red Dukes.</em></p>
      
      <p class="indent">The Sardaukar reached down, cut the red hawk insignia from Leto’s uniform. ‘Little souvenir,’ he said. ‘Where’s the ducal
         signet ring?’
      </p>
      
      <p class="indent">‘He doesn’t have it on him,’ Yueh said.</p>
      
      <p class="indent">‘I can see that!’ the Sardaukar snapped.</p>
      
      <p class="indent">Yueh stiffened, swallowed. <em>If they press me, bring in a Truthsayer, they’ll find out about the ring, about the ’thopter I prepared – all will fail.</em></p>
      
      <p class="indent">‘Sometimes the Duke sent the ring with a messenger as surety that an order came directly from him,’ Yueh said.</p>
      
      <p class="indent">‘Must be damned trusted messengers,’ the Sardaukar muttered.</p>
      
      <p class="indent">‘Aren’t you going to tie him?’ Yueh ventured.</p>
      
      <p class="indent">‘How long’ll he be unconscious?’</p>
      
      <p class="indent">‘Two hours or so. I wasn’t as precise with his dosage as I was for the woman and boy.’</p>
      
      <p class="indent">The Sardaukar spurned the Duke with his toe. ‘This was nothing to fear even when awake. When will the woman and boy awaken?’</p>
      
      <p class="indent">‘About ten minutes.’</p>
      
      <p class="indent">‘So soon?’</p>
      
      <p class="indent">‘I was told the Baron would arrive immediately behind his men.’</p>
      
      <p class="indent">‘So he will. You’ll wait outside, Yueh.’ He shot a hard glance at Yueh. ‘Now!’</p>
      
      <p class="indent">Yueh glanced at Leto. ‘What about …’</p>
      
      <p class="indent">‘He’ll be delivered all properly trussed like a roast for the <a id="page194"/>oven.’ Again, the Sardaukar looked at the diamond tattoo on Yueh’s forehead. ‘You’re known; you’ll be safe enough in the halls.
         We’ve no more time for chit-chat, traitor. I hear the others coming.’
      </p>
      
      <p class="indent"><em>Traitor,</em> Yueh thought. He lowered his gaze, pressed past the Sardaukar, knowing this as a foretaste of how history would remember
         him: <em>Yueh the traitor.</em></p>
      
      <p class="indent">He passed more bodies on his way to the front entrance and glanced at them, fearful that one might be Paul or Jessica. All
         were house troopers or wore Harkonnen uniform.
      </p>
      
      <p class="indent">Harkonnen guards came alert, staring at him as he emerged from the front entrance into flame-lighted night. The palms along
         the road had been fired to illuminate the house. Black smoke from the flammables used to ignite the trees poured upward through
         orange flames.
      </p>
      
      <p class="indent">‘It’s the traitor,’ someone said.</p>
      
      <p class="indent">‘The Baron will want to see you soon,’ another said.</p>
      
      <p class="indent"><em>I must get to the ’thopter,</em> Yueh thought. <em>I must put the ducal signet where Paul will find it.</em> And fear struck him: <em>If Idaho suspects me or grows impatient – if he doesn’t wait and go exactly where I told him – Jessica and Paul will not be
            saved from the carnage. I’ll be denied even the smallest relief from my act.</em></p>
      
      <p class="indent">The Harkonnen guard released his arm, said: ‘Wait over there out of the way.’</p>
      
      <p class="indent">Abruptly, Yueh saw himself as cast away in this place of destruction, spared nothing, given not the smallest pity. <em>Idaho must not fail!</em></p>
      
      <p class="indent">Another guard bumped into him, barked: ‘Stay out of the way, you!’</p>
      
      <p class="indent"><em>Even when they’ve profited by me they despise me,</em> Yueh thought. He straightened himself as he was pushed aside, regained some of his dignity.
      </p>
      
      <p class="indent">‘Wait for the Baron!’ a guard officer snarled.</p>
      
      <p class="indent">Yueh nodded, walked with controlled casualness along the front of the house, turned the corner into shadows out of sight of
         the burning palms. Quickly, every step betraying his anxiety, Yueh made for the rear yard beneath the conservatory where <a id="page195"/>the ’thopter waited – the craft they had placed there to carry away Paul and his mother.
      </p>
      
      <p class="indent">A guard stood at the open rear door of the house, his attention focused on the lighted hall and men banging through there,
         searching from room to room.
      </p>
      
      <p class="indent">How confident they were!</p>
      
      <p class="indent">Yueh hugged the shadows, worked his way around the ’thopter, eased open the door on the side away from the guard. He felt
         under the front seats for the Fremkit he had hidden there, lifted a flap and slipped in the ducal signet. He felt the crinkling
         of the spice paper there, the note he had written, pressed the ring into the paper. He removed his hand, resealed the pack.
      </p>
      
      <p class="indent">Softly, Yueh closed the ’thopter door, worked his way back to the corner of the house and around toward the flaming trees.</p>
      
      <p class="indent"><em>Now, it is done,</em> he thought.
      </p>
      
      <p class="indent">Once more, he emerged into the light of the blazing palms. He pulled his cloak around him, stared at the flames. <em>Soon I will know. Soon I will see the Baron and I will know. And the Baron – he will encounter a small tooth.</em></p>
      
      <blockquote class="blockquote">
         <p class="noindent">There is a legend that the instant the Duke Leto Atreides died a meteor streaked across the skies above his ancestral palace
            on Caladan.
         </p>
         <p class="right">—from ‘Introduction to A Child’s History of Muad’Dib’ by the Princess Irulan</p>
      </blockquote>
      
      <p class="noindent">The Baron Vladimir Harkonnen stood at a viewport of the grounded lighter he was using as a command post. Out the port he saw
         the flame-lighted night of Arrakeen. His attention focused on the distant Shield Wall where his secret weapon was doing its
         work.
      </p>
      
      <p class="indent">Explosive artillery.</p>
      
      <p class="indent">The guns nibbled at the caves where the Duke’s fighting men had retreated for a last-ditch stand. Slowly measured bites of
         orange glare, showers of rock and dust in the brief illumination – and the Duke’s men were being sealed off to die by starvation,
         caught like animals in their burrows.
      </p>
      
      <p class="indent">The Baron could feel the distant chomping – a drumbeat <a id="page196"/>carried to him through the ship’s metal: <em>broomp … broomp.</em> Then: <em>BROOMP-broomp!</em></p>
      
      <p class="indent"><em>Who would think of reviving artillery in this day of shields?</em> The thought was a chuckle in his mind. <em>But it was predictable the Duke’s men would run for those caves. And the Emperor will appreciate my cleverness in preserving
            the lives of our mutual force.</em></p>
      
      <p class="indent">He adjusted one of the little suspensors that guarded his fat body against the pull of gravity. A smile creased his mouth,
         pulled at the lines of his jowls.
      </p>
      
      <p class="indent"><em>A pity to waste such fighting men as the Duke’s,</em> he thought. He smiled more broadly, laughing at himself. <em>Pity should be cruel!</em> He nodded. Failure was, by definition, expendable. The whole universe sat there, open to the man who could make the right
         decisions. The uncertain rabbits had to be exposed, made to run for their burrows. Else how could you control them and breed
         them? He pictured his fighting men as bees routing the rabbits. And he thought: <em>The day hums sweetly when you have enough bees working for you.</em></p>
      
      <p class="indent">A door opened behind him. The Baron studied the reflection in the night-blackened viewport before turning.</p>
      
      <p class="indent">Piter de Vries advanced into the chamber followed by Umman Kudu, the captain of the Baron’s personal guard. There was a motion
         of men just outside the door, the mutton faces of his guard, their expressions carefully sheeplike in his presence.
      </p>
      
      <p class="indent">The Baron turned.</p>
      
      <p class="indent">Piter touched finger to forelock in his mocking salute. ‘Good news, m’Lord. The Sardaukar have brought in the Duke.’</p>
      
      <p class="indent">‘Of course they have,’ the Baron rumbled.</p>
      
      <p class="indent">He studied the somber mask of villainy on Piter’s effeminate face. And the eyes: those shaded slits of bluest blue-in-blue.</p>
      
      <p class="indent"><em>Soon I must remove him,</em> the Baron thought. <em>He has almost outlasted his usefulness, almost reached the point of positive danger to my person. First, though, he must make
            the people of Arrakis hate him. Then – they will welcome my darling Feyd-Rautha as a savior.</em></p>
      
      <p class="indent">The Baron shifted his attention to the guard captain – Umman Kudu: scissors line of jaw muscles, chin like a boot toe – a
         man to be trusted because the captain’s vices were known.
      </p>
      
      <p class="indent"><a id="page197"/>‘First, where is the traitor who gave me the Duke?’ the Baron asked. ‘I must give the traitor his reward.’
      </p>
      
      <p class="indent">Piter turned on one toe, motioned to the guard outside.</p>
      
      <p class="indent">A bit of black movement there and Yueh walked through. His motions were stiff and stringy. The mustache drooped beside his
         purple lips. Only the old eyes seemed alive. Yueh came to a stop three paces into the room, obeying a motion from Piter, and
         stood there staring across the open space at the Baron.
      </p>
      
      <p class="indent">‘Ah-h-h, Dr Yueh.’</p>
      
      <p class="indent">‘M’Lord Harkonnen.’</p>
      
      <p class="indent">‘You’ve given us the Duke, I hear.’</p>
      
      <p class="indent">‘My half of the bargain, m’Lord.’</p>
      
      <p class="indent">The Baron looked at Piter.</p>
      
      <p class="indent">Piter nodded.</p>
      
      <p class="indent">The Baron looked back at Yueh. ‘The letter of the bargain, eh? And I …’ He spat the words out: ‘What was I to do in return?’</p>
      
      <p class="indent">‘You remember quite well, m’Lord Harkonnen.’</p>
      
      <p class="indent">And Yueh allowed himself to think now, hearing the loud silence of clocks in his mind. He had seen the subtle betrayals in
         the Baron’s manner. Wanna was indeed dead – gone far beyond their reach. Otherwise, there’d still be a hold on the weak doctor.
         The Baron’s manner showed there was no hold; it was ended.
      </p>
      
      <p class="indent">‘Do I?’ the Baron asked.</p>
      
      <p class="indent">‘You promised to deliver my Wanna from her agony.’</p>
      
      <p class="indent">The Baron nodded. ‘Oh, yes. Now, I remember. So I did. That was my promise. That was how we bent the Imperial Conditioning.
         You couldn’t endure seeing your Bene Gesserit witch grovel in Piter’s pain amplifiers. Well, the Baron Vladimir Harkonnen
         always keeps his promises. I told you I’d free her from the agony and permit you to join her. So be it.’ He waved a hand at
         Piter.
      </p>
      
      <p class="indent">Piter’s blue eyes took on a glazed look. His movement was catlike in its sudden fluidity. The knife in his hand glistened
         like a claw as it flashed into Yueh’s back.
      </p>
      
      <p class="indent">The old man stiffened, never taking his attention from the Baron.</p>
      
      <p class="indent"><a id="page198"/>‘So join her!’ the Baron spat.
      </p>
      
      <p class="indent">Yueh stood, swaying. His lips moved with careful precision, and his voice came in oddly measured cadence: ‘You … think … you
         … de … feated … me. You … think … I … did … not … know … what … I … bought … for … my … Wanna.’
      </p>
      
      <p class="indent">He toppled. No bending or softening. It was like a tree falling.</p>
      
      <p class="indent">‘So join her,’ the Baron repeated. But his words were like a weak echo.</p>
      
      <p class="indent">Yueh had filled him with a sense of foreboding. He whipped his attention to Piter, watched the man wipe the blade on a scrap
         of cloth, watched the creamy look of satisfaction in the blue eyes.
      </p>
      
      <p class="indent"><em>So that’s how he kills by his own hand,</em> the Baron thought. <em>It’s well to know.</em></p>
      
      <p class="indent">‘He <em>did</em> give us the Duke?’ the Baron asked.
      </p>
      
      <p class="indent">‘Of a certainty, my Lord,’ Piter said.</p>
      
      <p class="indent">‘Then get him in here!’</p>
      
      <p class="indent">Piter glanced at the guard captain, who whirled to obey.</p>
      
      <p class="indent">The Baron looked down at Yueh. From the way the man had fallen, you could suspect oak in him instead of bones.</p>
      
      <p class="indent">‘I never could bring myself to trust a traitor,’ the Baron said. ‘Not even a traitor I created.’</p>
      
      <p class="indent">He glanced at the night-shrouded viewport. That black bag of stillness out there was his, the Baron knew. There was no more
         crump of artillery against the Shield Wall caves; the burrow traps were sealed off. Quite suddenly, the Baron’s mind could
         conceive of nothing more beautiful than that utter emptiness of black. Unless it were white on the black. Plated white on
         the black. Porcelain white.
      </p>
      
      <p class="indent">But there was still the feeling of doubt.</p>
      
      <p class="indent">What had the old fool of a doctor meant? Of course, he’d probably known what would happen to him in the end. But that bit
         about thinking he’d been defeated: <em>‘You think you defeated me.’</em></p>
      
      <p class="indent">What had he meant?</p>
      
      <p class="indent">The Duke Leto Atreides came through the door. His arms were bound in chains, the eagle face streaked with dirt. His <a id="page199"/>uniform was torn where someone had ripped off his insignia. There were tatters at his waist where the shield belt had been
         removed without first freeing the uniform ties. The Duke’s eyes held a glazed insane look.
      </p>
      
      <p class="indent">‘Wel-l-l-l,’ the Baron said. He hesitated, drawing in a deep breath. He knew he had spoken too loudly. This moment, long-envisioned,
         had lost some of its savor.
      </p>
      
      <p class="indent"><em>Damn that cursed doctor through all eternity!</em></p>
      
      <p class="indent">‘I believe the good Duke is drugged,’ Piter said. ‘That’s how Yueh caught him for us.’ Piter turned to the Duke. ‘Aren’t you
         drugged, my dear Duke?’
      </p>
      
      <p class="indent">The voice was far away. Leto could feel the chains, the ache of muscles, his cracked lips, his burning cheeks, the dry taste
         of thirst whispering its grit in his mouth. But sounds were dull, hidden by a cottony blanket. And he saw only dim shapes
         through the blanket.
      </p>
      
      <p class="indent">‘What of the woman and the boy, Piter?’ the Baron asked. ‘Any word yet?’</p>
      
      <p class="indent">Piter’s tongue darted over his lips.</p>
      
      <p class="indent">‘You’ve heard something!’ the Baron snapped. ‘What?’</p>
      
      <p class="indent">Piter glanced at the guard captain, back to the Baron. ‘The men who were sent to do the job, m’Lord – they’ve … ah … been
         … ah … found.’
      </p>
      
      <p class="indent">‘Well, they report everything satisfactory?’</p>
      
      <p class="indent">‘They’re dead, m’Lord.’</p>
      
      <p class="indent">‘Of course they are! What I want to know is—’</p>
      
      <p class="indent">‘They were dead when found, m’Lord.’</p>
      
      <p class="indent">The Baron’s face went livid. ‘And the woman and boy?’</p>
      
      <p class="indent">‘No sign, m’Lord, but there was a worm. It came while the scene was being investigated. Perhaps it’s as we wished – an accident.
         Possibly—’
      </p>
      
      <p class="indent">‘We do not deal in possibilities, Piter. What of the missing ’thopter? Does that suggest anything to my Mentat?’</p>
      
      <p class="indent">‘One of the Duke’s men obviously escaped in it, m’Lord. Killed our pilot and escaped.’</p>
      
      <p class="indent">‘Which of the Duke’s men?’</p>
      
      <p class="indent">‘It was a clean, silent killing, m’Lord. Hawat, perhaps, or that Halleck one. Possibly Idaho. Or any top lieutenant.’</p>
      
      <p class="indent"><a id="page200"/>‘Possibilities,’ the Baron muttered. He glanced at the swaying, drugged figure of the Duke.
      </p>
      
      <p class="indent">‘The situation is in hand, m’Lord,’ Piter said.</p>
      
      <p class="indent">‘No, it isn’t! Where is that stupid planetologist? Where is this man Kynes?’</p>
      
      <p class="indent">‘We’ve word where to find him and he’s been sent for, m’Lord.’</p>
      
      <p class="indent">‘I don’t like the way the Emperor’s servant is helping us,’ the Baron muttered.</p>
      
      <p class="indent">They were words through a cottony blanket, but some of them burned in Leto’s mind. <em>Woman and boy – no sign.</em> Paul and Jessica had escaped. And the fate of Hawat, Halleck, and Idaho remained an unknown. There was still hope.
      </p>
      
      <p class="indent">‘Where is the ducal signet ring?’ the Baron demanded. ‘His finger is bare.’</p>
      
      <p class="indent">‘The Sardaukar say it was not on him when he was taken, my Lord,’ the guard captain said.</p>
      
      <p class="indent">‘You killed the doctor too soon,’ the Baron said. ‘That was a mistake. You should’ve warned me, Piter. You moved too precipitately
         for the good of our enterprise.’ He scowled. ‘Possibilities!’
      </p>
      
      <p class="indent">The thought hung like a sine wave in Leto’s mind: <em>Paul and Jessica have escaped!</em> And there was something else in his memory: a bargain. He could almost remember it.
      </p>
      
      <p class="indent"><em>The tooth!</em></p>
      
      <p class="indent">He remembered part of it now: <em>a pill of poison gas shaped into a false tooth.</em></p>
      
      <p class="indent">Someone had told him to remember the tooth. The tooth was in his mouth. He could feel its shape with his tongue. All he had
         to do was bite sharply on it.
      </p>
      
      <p class="indent"><em>Not yet!</em></p>
      
      <p class="indent">The someone had told him to wait until he was near the Baron. Who had told him? He couldn’t remember.</p>
      
      <p class="indent">‘How long will he remain drugged like this?’ the Baron asked.</p>
      
      <p class="indent">‘Perhaps another hour, m’Lord.’</p>
      
      <p class="indent">‘Perhaps,’ the Baron muttered. Again, he turned to the night-blackened window. ‘I am hungry.’</p>
      
      <p class="indent"><em>That’s the Baron, that fuzzy gray shape there,</em> Leto thought. The <a id="page201"/>shape danced back and forth, swaying with the movement of the room. And the room expanded and contracted. It grew brighter
         and darker. It folded into blackness and faded.
      </p>
      
      <p class="indent">Time became a sequence of layers for the Duke. He drifted up through them. <em>I must wait.</em></p>
      
      <p class="indent">There was a table. Leto saw the table quite clearly. And a gross, fat man on the other side of the table, the remains of a
         meal in front of him. Leto felt himself sitting in a chair across from the fat man, felt the chains, the straps that held
         his tingling body in the chair. He was aware there had been a passage of time, but its length escaped him.
      </p>
      
      <p class="indent">‘I believe he’s coming around, Baron.’</p>
      
      <p class="indent"><em>A silky voice, that one. That was Piter.</em></p>
      
      <p class="indent">‘So I see, Piter.’</p>
      
      <p class="indent"><em>A rumbling basso: the Baron.</em></p>
      
      <p class="indent">Leto sensed increasing definition in his surroundings. The chair beneath him took on firmness, the bindings were sharper.</p>
      
      <p class="indent">And he saw the Baron clearly now. Leto watched the movements of the man’s hands: compulsive touchings – the edge of a plate,
         the handle of a spoon, a finger tracing the fold of a jowl.
      </p>
      
      <p class="indent">Leto watched the moving hand, fascinated by it.</p>
      
      <p class="indent">‘You can hear me, Duke Leto,’ the Baron said. ‘I know you can hear me. We want to know from you where to find your concubine
         and the child you sired on her.’
      </p>
      
      <p class="indent">No sign escaped Leto, but the words were a wash of calmness through him. <em>It’s true, then: they don’t have Paul and Jessica.</em></p>
      
      <p class="indent">‘This is not a child’s game we play,’ the Baron rumbled. ‘You must know that.’ He leaned toward Leto, studying the face. It
         pained the Baron that this could not be handled privately, just between the two of them. To have others see royalty in such
         straits – it set a bad precedent.
      </p>
      
      <p class="indent">Leto could feel strength returning. And now, the memory of the false tooth stood out in his mind like a steeple in a flat
         landscape. The nerve-shaped capsule within that tooth – the poison gas – he remembered who had put the deadly weapon in his
         mouth.
      </p>
      
      <p class="indent"><em>Yueh.</em></p>
      
      <p class="indent">Drug-fogged memory of seeing a limp corpse dragged past <a id="page202"/>him in this room hung like a vapor in Leto’s mind. He knew it had been Yueh.
      </p>
      
      <p class="indent">‘Do you hear that noise, Duke Leto?’ the Baron asked.</p>
      
      <p class="indent">Leto grew conscious of a frog sound, the burred mewling of someone’s agony.</p>
      
      <p class="indent">‘We caught one of your men disguised as a Fremen,’ the Baron said. ‘We penetrated the disguise quite easily: the eyes, you
         know. He insists he was sent among the Fremen to spy on them. I’ve lived for a time on this planet, cher cousin. One does
         not spy on those ragged scum of the desert. Tell me, did you buy their help? Did you send your woman and son to them?’
      </p>
      
      <p class="indent">Leto felt fear tighten his chest. <em>If Yueh sent them to the desert folk … the search won’t stop until they’re found.</em></p>
      
      <p class="indent">‘Come, come,’ the Baron said. We don’t have much time and pain is quick. Please don’t bring it to this, my dear Duke.’ The
         Baron looked up at Piter who stood at Leto’s shoulder. ‘Piter doesn’t have all his tools here, but I’m sure he could improvise.’
      </p>
      
      <p class="indent">‘Improvisation is sometimes the best, Baron.’</p>
      
      <p class="indent"><em>That silky, insinuating voice!</em> Leto heard it at his ear.
      </p>
      
      <p class="indent">‘You had an emergency plan,’ the Baron said. ‘Where have your woman and the boy been sent?’ He looked at Leto’s hand. ‘Your
         ring is missing. Does the boy have it?’
      </p>
      
      <p class="indent">The Baron looked up, stared into Leto’s eyes.</p>
      
      <p class="indent">‘You don’t answer,’ he said. Will you force me to do a thing I do not want to do? Piter will use simple, direct methods. I
         agree they’re sometimes the best, but it’s not good that <em>you</em> should be subjected to such things.’
      </p>
      
      <p class="indent">‘Hot tallow on the back, perhaps, or on the eyelids,’ Piter said. ‘Perhaps on other portions of the body. It’s especially
         effective when the subject doesn’t know where the tallow will fall next. It’s a good method and there’s a sort of beauty in
         the pattern of pus-white blisters on naked skin, eh, Baron?’
      </p>
      
      <p class="indent">‘Exquisite,’ the Baron said, and his voice sounded sour.</p>
      
      <p class="indent"><em>Those touching fingers!</em> Leto watched the fat hands, the glittering jewels on baby-fat hands – their compulsive wandering.
      </p>
      
      <p class="indent">The sounds of agony coming through the door behind him gnawed at the Duke’s nerves. <em>Who is it they caught?</em> he wondered. <em>Could it have been Idaho?</em></p>
      
      <p class="indent"><a id="page203"/>‘Believe me, cher cousin,’ the Baron said. ‘I do not want it to come to this.’
      </p>
      
      <p class="indent">‘You think of nerve couriers racing to summon help that cannot come,’ Piter said. ‘There’s artistry in this, you know.’</p>
      
      <p class="indent">‘You’re a superb artist,’ the Baron growled. ‘Now, have the decency to be silent.’</p>
      
      <p class="indent">Leto suddenly recalled a thing Gurney Halleck had said once, seeing a picture of the Baron: ‘“ <em>And I stood upon the sand of the sea and saw a beast rise up out of the sea … and upon his heads the name of blasphemy</em>.”’
      </p>
      
      <p class="indent">‘We waste time, Baron,’ Piter said.</p>
      
      <p class="indent">‘Perhaps.’</p>
      
      <p class="indent">The Baron nodded. You know, my dear Leto, you’ll tell us in the end where they are. There’s a level of pain that’ll buy you.’</p>
      
      <p class="indent"><em>He’s most likely correct,</em> Leto thought. <em>Were it not for the tooth … and the fact that I truly don’t know where they are.</em></p>
      
      <p class="indent">The Baron picked up a sliver of meat, pressed the morsel into his mouth, chewed slowly, swallowed. <em>We must try a new tack,</em> he thought.
      </p>
      
      <p class="indent">‘Observe this prize person who denies he’s for hire,’ the Baron said. ‘Observe him, Piter.’</p>
      
      <p class="indent">And the Baron thought: <em>Yes! See him there, this man who believes he cannot be bought. See him detained there by a million shares of himself sold
            in dribbles every second of his life! If you took him up now and shook him, he’d rattle inside. Emptied! Sold out! What difference
            how he dies now?</em></p>
      
      <p class="indent">The frog sounds in the background stopped.</p>
      
      <p class="indent">The Baron saw Umman Kudu, the guard captain, appear in the doorway across the room, shake his head. The captive hadn’t produced
         the needed information. Another failure. Time to quit stalling with this fool Duke, this stupid soft fool who didn’t realize
         how much hell there was so near him – only a nerve’s thickness away.
      </p>
      
      <p class="indent">This thought calmed the Baron, overcoming his reluctance to have a royal person subjected to pain. He saw himself suddenly
         as a surgeon exercising endless supple scissor dissections – cutting away the masks from fools, exposing the hell beneath.
      </p>
      
      <p class="indent"><em>Rabbits, all of them!</em></p>
      
      <p class="indent">And how they cowered when they saw the carnivore!</p>
      
      <p class="indent"><a id="page204"/>Leto stared across the table, wondering why he waited. The tooth would end it all quickly. Still – it had been good, much
         of this life. He found himself remembering an antenna kite up-dangling in the shell-blue sky of Caladan, and Paul laughing
         with joy at the sight of it. And he remembered sunrise here on Arrakis – colored strata of the Shield Wall mellowed by dust
         haze.
      </p>
      
      <p class="indent">‘Too bad,’ the Baron muttered. He pushed himself back from the table, stood up lightly in his suspensors and hesitated, seeing
         a change come over the Duke. He saw the man draw in a deep breath, the jawline stiffen, the ripple of a muscle there as the
         Duke clamped his mouth shut.
      </p>
      
      <p class="indent"><em>How he fears me!</em> the Baron thought.
      </p>
      
      <p class="indent">Shocked by fear that the Baron might escape him, Leto bit hard on the capsule tooth, felt it break. He opened his mouth, expelled
         the biting vapor he could taste as it formed on his tongue. The Baron grew smaller, a figure seen in a tightening tunnel.
         Leto heard a gasp beside his ear – the silky-voiced one: Piter.
      </p>
      
      <p class="indent"><em>It got him, too!</em></p>
      
      <p class="indent">‘Piter! What’s wrong?’</p>
      
      <p class="indent">The rumbling voice was far away.</p>
      
      <p class="indent">Leto sensed memories rolling in his mind – the old toothless mutterings of hags. The room, the table, the Baron, a pair of
         terrified eyes – blue within blue, the eyes – all compressed around him in ruined symmetry.
      </p>
      
      <p class="indent">There was a man with a boot-toe chin, a toy man falling. The toy man had a broken nose slanted to the left: an offbeat metronome
         caught forever at the start of an upward stroke. Leto heard the crash of crockery – so distant – a roaring in his ears. His
         mind was a bin without end, catching everything. Everything that had ever been: every shout, every whisper, every … silence.
      </p>
      
      <p class="indent">One thought remained to him. Leto saw it in formless light on rays of black: <em>The day the flesh shapes and the flesh the day shapes.</em> The thought struck him with a sense of fullness he knew he could never explain.
      </p>
      
      <p class="indent">Silence.</p>
      
      <p class="indent"><a id="page205"/>The Baron stood with his back against his private door, his own bolt hole behind the table. He had slammed it on a room full
         of dead men. His senses took in guards swarming around him. <em>Did I breathe it?</em> he asked himself. <em>Whatever it was in there, did it get me, too?</em></p>
      
      <p class="indent">Sounds returned to him … and reason. He heard someone shouting orders – gas masks … keep a door closed … get blowers going.</p>
      
      <p class="indent"><em>The others fell quickly,</em> he thought. I’m still standing. I’m still breathing. <em>Merciless hell! That was close!</em></p>
      
      <p class="indent">He could analyze it now. His shield had been activated, set low but still enough to slow molecular interchange across the
         field barrier. And he had been pushing himself away from the table … that and Piter’s shocked gasp which had brought the guard
         captain darting forward into his own doom.
      </p>
      
      <p class="indent">Chance and the warning in a dying man’s gasp – these had saved him.</p>
      
      <p class="indent">The Baron felt no gratitude to Piter. The fool had got himself killed. And that stupid guard captain! He’d said he scoped
         everyone before bringing them into the Baron’s presence! How had it been possible for the Duke … ? No warning. Not even from
         the poison snooper over the table – until it was too late. How?
      </p>
      
      <p class="indent"><em>Well, no matter now,</em> the Baron thought, his mind firming. <em>The next guard captain will begin by finding answers to these questions.</em></p>
      
      <p class="indent">He grew aware of more activity down the hall – around the corner at the other door to that room of death. The Baron pushed
         himself away from his own door, studied the lackeys around him. They stood there staring, silent, waiting for the Baron’s
         reaction.
      </p>
      
      <p class="indent"><em>Would the Baron be angry?</em></p>
      
      <p class="indent">And the Baron realized only a few seconds had passed since his flight from that terrible room.</p>
      
      <p class="indent">Some of the guards had weapons leveled at the door. Some were directing their ferocity toward the empty hall that stretched
         away toward the noises around the corner to their right.
      </p>
      
      <p class="indent">A man came striding around that corner, gas mask dangling by its straps at his neck, his eyes intent on the overhead poison
         <a id="page206"/>snoopers that lined this corridor. He was yellow-haired, flat of face with green eyes. Crisp lines radiated from his thick-lipped
         mouth. He looked like some water creature misplaced among those who walked the land.
      </p>
      
      <p class="indent">The Baron stared at the approaching man, recalling the name: Nefud. Iakin Nefud. Guard corporal. Nefud was addicted to semuta,
         the drug-music combination that played itself in the deepest consciousness. A useful item of information, that.
      </p>
      
      <p class="indent">The man stopped in front of the Baron, saluted. ‘Corridor’s clear, m’Lord. I was outside watching and saw that it must be
         poison gas. Ventilators in your room were pulling air in from these corridors.’ He glanced up at the snooper over the Baron’s
         head. ‘None of the stuff escaped. We have the room cleaned out now. What are your orders?’
      </p>
      
      <p class="indent">The Baron recognized the man’s voice – the one who’d been shouting orders. <em>Efficient, this corporal,</em> he thought.
      </p>
      
      <p class="indent">‘They’re all dead in there?’ the Baron asked.</p>
      
      <p class="indent">‘Yes, m’Lord.’</p>
      
      <p class="indent"><em>Well, we must adjust,</em> the Baron thought.
      </p>
      
      <p class="indent">‘First,’ he said, ‘let me congratulate you, Nefud. You’re the new captain of my guard. And I hope you’ll take to heart the
         lesson to be learned from the fate of your predecessor.’
      </p>
      
      <p class="indent">The Baron watched the awareness grow in his newly promoted guardsman. Nefud knew he’d never again be without his semuta.</p>
      
      <p class="indent">Nefud nodded. ‘My Lord knows I’ll devote myself entirely to his safety.’</p>
      
      <p class="indent">‘Yes. Well, to business. I suspect the Duke had something in his mouth. You will find out what that something was, how it
         was used, who helped him put it there. You’ll take every precaution—’
      </p>
      
      <p class="indent">He broke off, his chain of thought shattered by a disturbance in the corridor behind him – guards at the door to the lift
         from the lower levels of the frigate trying to hold back a tall colonel bashar who had just emerged from the lift.
      </p>
      
      <p class="indent">The Baron couldn’t place the colonel bashar’s face: thin with mouth like a slash in leather, twin ink spots for eyes.</p>
      
      <p class="indent"><a id="page207"/>‘Get your hands off me, you pack of carrion-eaters!’ the man roared, and he dashed the guards aside.
      </p>
      
      <p class="indent"><em>Ak-h-h, one of the Sardaukar,</em> the Baron thought.
      </p>
      
      <p class="indent">The colonel bashar came striding toward the Baron, whose eyes went to slits of apprehension. The Sardaukar officers filled
         him with unease. They all seemed to look like relatives of the Duke … the late Duke. And their manners with the Baron!
      </p>
      
      <p class="indent">The colonel bashar planted himself half a pace in front of the Baron, hands on hips. The guard hovered behind him in twitching
         uncertainty.
      </p>
      
      <p class="indent">The Baron noted the absence of salute, the disdain in the Sardaukar’s manner, and his unease grew. There was only the one
         legion of them locally – ten brigades – reinforcing the Harkonnen legions, but the Baron did not fool himself. That one legion
         was perfectly capable of turning on the Harkonnens and overcoming them.
      </p>
      
      <p class="indent">‘Tell your men they are not to prevent me from seeing you, Baron,’ the Sardaukar growled. ‘My men brought you the Atreides
         Duke before I could discuss his fate with you. We will discuss it now.’
      </p>
      
      <p class="indent"><em>I must not lose face before my men,</em> the Baron thought.
      </p>
      
      <p class="indent">‘So?’ It was a coldly controlled word, and the Baron felt proud of it.</p>
      
      <p class="indent">‘My Emperor has charged me to make certain his royal cousin dies cleanly without agony,’ the colonel bashar said.</p>
      
      <p class="indent">‘Such were the Imperial orders to me,’ the Baron lied. ‘Did you think I’d disobey?’</p>
      
      <p class="indent">‘I’m to report to my Emperor what I see with my own eyes,’ the Sardaukar said.</p>
      
      <p class="indent">‘The Duke’s already dead,’ the Baron snapped, and he waved a hand to dismiss the fellow.</p>
      
      <p class="indent">The colonel bashar remained planted facing the Baron. Not by flicker of eye or muscle did he acknowledge he had been dismissed,
         ‘How?’ he growled.
      </p>
      
      <p class="indent"><em>Really!</em> the Baron thought. <em>This is too much.</em></p>
      
      <p class="indent">‘By his own hand, if you must know,’ the Baron said. ‘He took poison.’</p>
      
      <p class="indent">‘I will see the body now,’ the colonel bashar said.</p>
      
      <p class="indent"><a id="page208"/>The Baron raised his gaze to the ceiling in feigned exasperation while his thoughts raced. <em>Damnation! This sharp-eyed Sardaukar will see the room before a thing’s been changed!</em></p>
      
      <p class="indent">‘Now,’ the Sardaukar growled. ‘I’ll see it with my own eyes.’</p>
      
      <p class="indent">There was no preventing it, the Baron realized. The Sardaukar would see all. He’d know the Duke had killed Harkonnen men …
         that the Baron most likely had escaped by a narrow margin. There was the evidence of the dinner remnants on the table, and
         the dead Duke across from it with destruction around him.
      </p>
      
      <p class="indent">No preventing it at all.</p>
      
      <p class="indent">‘I’ll not be put off,’ the colonel bashar snarled.</p>
      
      <p class="indent">‘You’re not being put off,’ the Baron said, and he stared into the Sardaukar’s obsidian eyes. ‘I hide nothing from my Emperor.’
         He nodded to Nefud. ‘The colonel bashar is to see everything, at once. Take him in by the door where you stood, Nefud.’
      </p>
      
      <p class="indent">‘This way, sir,’ Nefud said.</p>
      
      <p class="indent">Slowly, insolently, the Sardaukar moved around the Baron, shouldered a way through the guardsmen.</p>
      
      <p class="indent"><em>Insufferable,</em> the Baron thought. <em>Now, the Emperor will know how I slipped up. He’ll recognize it as a sign of weakness.</em></p>
      
      <p class="indent">And it was agonizing to realize that the Emperor and his Sardaukar were alike in their disdain for weakness. The Baron chewed
         at his lower lip, consoling himself that the Emperor, at least, had not learned of the Atreides raid on Giedi Prime, the destruction
         of the Harkonnen spice stores there.
      </p>
      
      <p class="indent"><em>Damn that slippery Duke!</em></p>
      
      <p class="indent">The Baron watched the retreating backs – the arrogant Sardaukar and the stocky, efficient Nefud.</p>
      
      <p class="indent"><em>We must adjust,</em> the Baron thought. <em>I‘ll have to put Rabban over this damnable planet once more. Without restraint. I must spend my own Harkonnen blood to put
            Arrakis into a proper condition for accepting Feyd-Rautha. Damn that Piter! He would get himself killed before I was through
            with him.</em></p>
      
      <p class="indent">The Baron sighed.</p>
      
      <p class="indent"><em>And I must send at once to Tleilax for a new Mentat. They undoubtedly have the new one ready for me by now.</em></p>
      
      <p class="indent"><a id="page209"/>One of the guardsmen beside him coughed.
      </p>
      
      <p class="indent">The Baron turned toward the man. ‘I am hungry.’</p>
      
      <p class="indent">‘Yes, m’Lord.’</p>
      
      <p class="indent">‘And I wish to be diverted while you’re clearing out that room and studying its secrets for me,’ the Baron rumbled.</p>
      
      <p class="indent">The guardsman lowered his eyes. ‘What diversion does m’Lord wish?’</p>
      
      <p class="indent">‘I’ll be in my sleeping chambers,’ the Baron said. ‘Bring me that young fellow we bought on Gamont, the one with the lovely
         eyes. Drug him well. I don’t feel like wrestling.’
      </p>
      
      <p class="indent">‘Yes, m’Lord.’</p>
      
      <p class="indent">The Baron turned away, began moving with his bouncing, suspensor-buoyed pace toward his chambers. <em>Yes,</em> he thought. <em>The one with the lovely eyes, the one who looks so much like the young Paul Atreides.</em></p>
      
      <blockquote class="linegroup">
         <p class="line1">O Seas of Caladan,</p>
         
         <p class="line1">O people of Duke Leto—</p>
         
         <p class="line1">Citadel of Leto fallen,</p>
         
         <p class="line1">Fallen forever …</p>
      <p class="line">—from ‘Songs of Muad’Dib’ by the Princess Irulan</p>
         
      </blockquote>
      
      
      <p class="noindent">Paul felt that all his past, every experience before this night, had become sand curling in an hourglass. He sat near his
         mother hugging his knees within a small fabric and plastic hutment – a stilltent – that had come, like the Fremen clothing
         they now wore, from the pack left in the ’thopter.
      </p>
      
      <p class="indent">There was no doubt in Paul’s mind who had put the Fremkit there, who had directed the course of the ’thopter carrying them
         captive.
      </p>
      
      <p class="indent"><em>Yueh.</em></p>
      
      <p class="indent">The traitor doctor had sent them directly into the hands of Duncan Idaho.</p>
      
      <p class="indent">Paul stared out the transparent end of the stilltent at the moonshadowed rocks that ringed this place where Idaho had hidden
         them.
      </p>
      
      <p class="indent"><em>Hiding like a child when I’m now the Duke,</em> Paul thought. He felt <a id="page210"/>the thought gall him, but could not deny the wisdom in what they did.
      </p>
      
      <p class="indent">Something had happened to his awareness this night – he saw with sharpened clarity every circumstance and occurrence around
         him. He felt unable to stop the inflow of data or the cold precision with which each new item was added to his knowledge and
         the computation was centered in his awareness. It was Mentat power and more.
      </p>
      
      <p class="indent">Paul thought back to the moment of impotent rage as the strange ’thopter dived out of the night onto them, stooping like a
         giant hawk above the desert with wind screaming through its wings. The thing in Paul’s mind had happened then. The ’thopter
         had skidded and slewed across a sand ridge toward the running figures – his mother and himself. Paul remembered how the smell
         of burned sulfur from abrasion of ’thopter skids against sand had drifted across them.
      </p>
      
      <p class="indent">His mother, he knew, had turned, expected to meet a lasgun in the hands of Harkonnen mercenaries, and had recognized Duncan
         Idaho leaning out the ’thopter’s open door shouting: ‘Hurry! There’s wormsign south of you!’
      </p>
      
      <p class="indent">But Paul had known as he turned who piloted the ’thopter. An accumulation of minutiae in the way it was flown, the dash of
         the landing – clues so small even his mother hadn’t detected them – had told Paul <em>precisely</em> who sat at those controls.
      </p>
      
      <p class="indent">Across the stilltent from Paul, Jessica stirred, said: ‘There can be only one explanation. The Harkonnens held Yueh’s wife.
         He hated the Harkonnens! I cannot be wrong about that. You read his note. But why has he saved us from the carnage?’
      </p>
      
      <p class="indent"><em>She is only now seeing it and that poorly,</em> Paul thought. The thought was a shock. He had known this fact as a by-the-way thing while reading the note that had accompanied
         the ducal signet in the pack.
      </p>
      
      <p class="indent">‘Do not try to forgive me,’ Yueh had written. ‘I do not want your forgiveness. I already have enough burdens. What I have
         done was done without malice or hope of another’s understanding. It is my own tahaddi al-burhan, my ultimate test. I give
         you the Atreides ducal signet as token that I write truly. By the time you read this, Duke Leto will be dead. Take consolation
         <a id="page211"/>from my assurance that he did not die alone, that one we hate above all others died with him.’
      </p>
      
      <p class="indent">It had not been addressed or signed, but there’d been no mistaking the familiar scrawl – Yueh’s.</p>
      
      <p class="indent">Remembering the letter, Paul re-experienced the distress of that moment – a thing sharp and strange that seemed to happen
         outside his new mental alertness. He had read that his father was dead, known the truth of the words, but had felt them as
         no more than another datum to be entered in his mind and used.
      </p>
      
      <p class="indent"><em>I loved my father,</em> Paul thought, and knew this for truth. <em>I should mourn him. I should feel something.</em></p>
      
      <p class="indent">But he felt nothing except: <em>Here’s an important fact.</em></p>
      
      <p class="indent">It was one with all the other facts.</p>
      
      <p class="indent">All the while his mind was adding sense impressions, extrapolating, computing.</p>
      
      <p class="indent">Halleck’s words came back to Paul: <em>‘Mood’s a thing for cattle or for making love. You fight when the necessity arises, no matter your mood.’</em></p>
      
      <p class="indent"><em>Perhaps that’s it,</em> Paul thought. <em>I’ll mourn my father later … when there’s time.</em></p>
      
      <p class="indent">But he felt no letup in the cold precision of his being. He sensed that his new awareness was only a beginning, that it was
         growing. The sense of terrible purpose he’d first experienced in his ordeal with the Reverend Mother Gaius Helen Mohiam pervaded
         him. His right hand – the hand of remembered pain – tingled and throbbed.
      </p>
      
      <p class="indent"><em>Is this what it is to be their Kwisatz Haderach?</em> he wondered.
      </p>
      
      <p class="indent">‘For a while, I thought Hawat had failed us again,’ Jessica said. ‘I thought perhaps Yueh wasn’t a Suk doctor.’</p>
      
      <p class="indent">‘He was everything we thought him … and more,’ Paul said. And he thought: <em>Why is she so slow seeing these things?</em> He said, ‘If Idaho doesn’t get through to Kynes, we’ll be—
      </p>
      
      <p class="indent">‘He’s not our only hope,’ she said.</p>
      
      <p class="indent">‘Such was not my suggestion,’ he said.</p>
      
      <p class="indent">She heard the steel in his voice, the sense of command, and stared across the grey darkness of the stilltent at him. Paul
         was a silhouette against moonfrosted rocks seen through the tent’s transparent end.
      </p>
      
      <p class="indent"><a id="page212"/>‘Others among your father’s men will have escaped,’ she said. ‘We must regather them, find—’
      </p>
      
      <p class="indent">‘We will depend upon ourselves,’ he said. ‘Our immediate concern is our family atomics. We must get them before the Harkonnens
         can search them out.
      </p>
      
      <p class="indent">‘Not likely they’ll be found,’ she said, ‘the way they were hidden.’</p>
      
      <p class="indent">‘It must not be left to chance.’</p>
      
      <p class="indent">And she thought: <em>Blackmail with the family atomics as a threat to the planet and its spice – that’s what he has in mind. But all he can hope
            for then is escape into renegade anonymity.</em></p>
      
      <p class="indent">His mother’s words had provoked another train of thought in Paul – a duke’s concern for all the people they’d lost this night.
         <em>People are the true strength of a Great House,</em> Paul thought. And he remembered Hawat’s words: <em>‘Parting with people is a sadness; a place is only a place.’</em></p>
      
      <p class="indent">‘They’re using Sardaukar,’ Jessica said. ‘We must wait until the Sardaukar have been withdrawn.’</p>
      
      <p class="indent">‘They think us caught between the desert and the Sardaukar,’ Paul said. ‘They intend that there be no Atreides survivors –
         total extermination. Do not count on any of our people escaping.’
      </p>
      
      <p class="indent">‘They cannot go on indefinitely risking exposure of the Emperor’s part in this.’</p>
      
      <p class="indent">‘Can’t they?’</p>
      
      <p class="indent">‘Some of our people are bound to escape.’</p>
      
      <p class="indent">‘Are they?’</p>
      
      <p class="indent">Jessica turned away, frightened of the bitter strength in her son’s voice, hearing the precise assessment of chances. She
         sensed that his mind had leaped ahead of her, that it now saw more in some respects than she did. She had helped train the
         intelligence which did this, but now she found herself fearful of it. Her thoughts turned, seeking toward the lost sanctuary
         of her Duke, and tears burned her eyes.
      </p>
      
      <p class="indent"><em>This is the way it had to be, Leto,</em> she thought. <em>‘A time of love and a time of grief.’</em> She rested her hand on her abdomen, awareness focused on the embryo there. <em>I have the Atreides daughter I was ordered to produce, but the Reverend Mother was wrong: a daughter</em> <a id="page213"/><em>wouldn’t have saved my Leto. This child is only life reaching for the future in the midst of death. I conceived out of instinct
            and not out of obedience.</em></p>
      
      <p class="indent">‘Try the communinet receiver again,’ Paul said.</p>
      
      <p class="indent"><em>The mind goes on working no matter how we try to hold it back,</em> she thought.
      </p>
      
      <p class="indent">Jessica found the tiny receiver Idaho had left for them, flipped its switch. A green light glowed on the instrument’s face.
         Tinny screeching came from its speaker. She reduced the volume, hunted across the bands. A voice speaking Atreides battle
         language came into the tent.
      </p>
      
      <p class="indent">‘… back and regroup at the ridge. Fedor reports no survivors in Carthag and the Guild Bank has been sacked.’</p>
      
      <p class="indent"><em>Carthag!</em>Jessica thought. <em>That was a Harkonnen hotbed.</em></p>
      
      <p class="indent">‘They’re Sardaukar,’ the voice said. ‘Watch out for Sardaukar in Atreides uniforms. They’re …’</p>
      
      <p class="indent">A roaring filled the speaker, then silence.</p>
      
      <p class="indent">‘Try the other bands,’ Paul said.</p>
      
      <p class="indent">‘Do you realize what that means?’Jessica asked.</p>
      
      <p class="indent">‘I expected it. They want the Guild to blame us for destruction of their bank. With the Guild against us, we’re trapped on
         Arrakis. Try the other bands.’
      </p>
      
      <p class="indent">She weighed his words: <em>‘I expected it.’</em> What had happened to him? Slowly, Jessica returned to the instrument. As she moved the bandslide, they caught glimpses of
         violence in the few voices calling out in Atreides battle language: ‘… fall back …’ ‘… try to regroup at …’’… trapped in a
         cave at …’
      </p>
      
      <p class="indent">And there was no mistaking the victorious exultation in the Harkonnen gibberish that poured from the other bands. Sharp commands,
         battle reports. There wasn’t enough of it for Jessica to register and break the language, but the tone was obvious.
      </p>
      
      <p class="indent">Harkonnen victory.</p>
      
      <p class="indent">Paul shook the pack beside him, hearing the two literjons of water gurgle there. He took a deep breath, looked up through
         the transparent end of the tent at the rock escarpment outlined against the stars. His left hand felt the sphincter-seal of
         the tent’s entrance. ‘It’ll be dawn soon,’ he said. ‘We can wait through the day for Idaho, but not through another night.
         In the desert, you must travel by night and rest in shade through the day.’
      </p>
      
      <p class="indent"><a id="page214"/>Remembered lore insinuated itself into Jessica’s mind: <em>Without a stillsuit, a man sitting in shade on the desert needs five liters of water a day to maintain body weight.</em> She felt the slick-soft skin of the stillsuit against her body, thinking how their lives depended on these garments.
      </p>
      
      <p class="indent">‘If we leave here, Idaho can’t find us,’ she said.</p>
      
      <p class="indent">‘There are ways to make any man talk,’ he said. ‘If Idaho hasn’t returned by dawn, we must consider the possibility he has
         been captured. How long do you think he could hold out?’
      </p>
      
      <p class="indent">The question required no answer, and she sat in silence.</p>
      
      <p class="indent">Paul lifted the seal on the pack, pulled out a tiny micromanual with glowtab and magnifier. Green and orange letters leaped
         up at him from the pages: ‘literjons, stilltent, energy caps, recaths, sandsnork, binoculars, stillsuit repkit, baradye pistol,
         sinkchart, filt-plugs, paracompass, maker hooks, thumpers, Fremkit, fire pillar …’
      </p>
      
      <p class="indent">So many things for survival on the desert.</p>
      
      <p class="indent">Presently, he put the manual aside on the tent floor.</p>
      
      <p class="indent">‘Where can we possibly go?’Jessica asked.</p>
      
      <p class="indent">‘My father spoke <em>of desert power,’</em> Paul said. ‘The Harkonnens cannot rule this planet without it. They’ve never ruled this planet, nor shall they. Not even
         with ten thousand legions of Sardaukar.’
      </p>
      
      <p class="indent">‘Paul, you can’t think that—’</p>
      
      <p class="indent">‘We’ve all the evidence in our hands,’ he said. ‘Right here in this tent – the tent itself, this pack and its contents, these
         stillsuits. We know the Guild wants a prohibitive price for weather satellites. We know that—’
      </p>
      
      <p class="indent">‘What’ve weather satellites to do with it?’ she asked. ‘They couldn’t possibly …’ She broke off.</p>
      
      <p class="indent">Paul sensed the hyperalertness of his mind reading her reactions, computing on minutiae. ‘You see it now,’ he said. ‘Satellites
         watch the terrain below. There are things in the deep desert that will not bear frequent inspection.’
      </p>
      
      <p class="indent">‘You’re suggesting the Guild itself controls this planet?’</p>
      
      <p class="indent">She was so slow.</p>
      
      <p class="indent">‘No!’ he said. ‘The Fremen! They’re paying the Guild for privacy, paying in a coin that’s freely available to anyone with
         <a id="page215"/>desert power – spice. This is more than a second-approximation answer; it’s the straight-line computation. Depend on it.’
      </p>
      
      <p class="indent">‘Paul,’ Jessica said, ‘you’re not a Mentat yet; you can’t know for sure how—’</p>
      
      <p class="indent">‘I’ll never be a Mentat,’ he said. ‘I’m something else … a freak.’</p>
      
      <p class="indent">‘Paul! How can you say such—’</p>
      
      <p class="indent">‘Leave me alone!’</p>
      
      <p class="indent">He turned away from her, looking out into the night. <em>Why can’t I mourn?</em> he wondered. He felt that every fiber of his being craved this release, but it would be denied him forever.
      </p>
      
      <p class="indent">Jessica had never heard such distress in her son’s voice. She wanted to reach out to him, hold him, comfort him, help him
         – but she sensed there was nothing she could do. He had to solve this problem by himself.
      </p>
      
      <p class="indent">The glowing tab of the Fremkit manual between them on the tent floor caught her eye. She lifted it, glanced at the flyleaf,
         reading: ‘Manual of “The Friendly Desert,” the place full of life. Here are the ayat and burhan of Life. Believe, and al-Lat
         shall never burn you.’
      </p>
      
      <p class="indent"><em>It reads like the Azhar Book,</em> she thought, recalling her studies of the Great Secrets. <em>Has a Manipulator of Religions been on Arrakis?</em></p>
      
      <p class="indent">Paul lifted the paracompass from the pack, returned it, said: ‘Think of all these special-application Fremen machines. They
         show unrivaled sophistication. Admit it, the culture that made these things betrays depths no one suspected.’
      </p>
      
      <p class="indent">Hesitating, still worried by the harshness in his voice, Jessica returned to the book, studied an illustrated constellation
         from the Arrakeen sky: ‘Muad’Dib: The Mouse,’ and noted that the tail pointed north.
      </p>
      
      <p class="indent">Paul stared into the tent’s darkness at the dimly discerned movements of his mother revealed by the manual’s glowtab. <em>Now is the time to carry out my father ‘s wish,</em> he thought. <em>I must give her his message now while she has time for grief. Grief would inconvenience us later.</em> And he found himself shocked by precise logic.
      </p>
      
      <p class="indent">‘Mother,’ he said.</p>
      
      <p class="indent">‘Yes?’</p>
      
      <p class="indent"><a id="page216"/>She heard the change in his voice, felt coldness in her entrails at the sound. Never had she heard such harsh control.
      </p>
      
      <p class="indent">‘My father is dead,’ he said.</p>
      
      <p class="indent">She searching within herself for the coupling of fact and fact and fact – the Bene Gesserit way of assessing data – and it
         came to her: the sensation of terrifying loss. Jessica nodded, unable to speak.
      </p>
      
      <p class="indent">‘My father charged me once,’ Paul said, ‘to give you a message if anything happened to him. He feared you might believe he
         distrusted you.’
      </p>
      
      <p class="indent"><em>That useless suspicion,</em> she thought.
      </p>
      
      <p class="indent">‘He wanted you to know he never suspected you,’ Paul said, and explained the deception, adding: ‘He wanted you to know he
         always trusted you completely, always loved you and cherished you. He said he would sooner have mistrusted himself and he
         had but one regret – that he never made you his Duchess.’
      </p>
      
      <p class="indent">She brushed the tears coursing down her cheeks, thought: <em>What a stupid waste of the body’s water!</em> But she knew this thought for what it was – the attempt to retreat from grief into anger. <em>Leto, my Leto,</em> she thought. <em>What terrible things we do to those we love!</em> With a violent motion, she extinguished the little manual’s glowtab.
      </p>
      
      <p class="indent">Sobs shook her.</p>
      
      <p class="indent">Paul heard his mother’s grief and felt the emptiness within himself. <em>I have no grief,</em> he thought. <em>Why? Why?</em> He felt the inability to grieve as a terrible flaw.
      </p>
      
      <p class="indent"><em>A time to get and a time to lose,’</em> Jessica thought, quoting to herself from the O.C. Bible. <em>‘A time to keep and a time to cast away; a time for love and a time to hate; a time of war and a time of peace.’</em></p>
      
      <p class="indent">Paul’s mind had gone on in its chilling precision. He saw the avenues ahead of them on this hostile planet. Without even the
         safety valve of dreaming, he focused his prescient awareness, seeing it as a computation of most probable futures, but with
         something more, an edge of mystery – as though his mind dipped into some timeless stratum and sampled the winds of the future.
      </p>
      
      <p class="indent">Abruptly, as though he had found a necessary key, Paul’s <a id="page217"/>mind climbed another notch in awareness. He felt himself clinging to this new level, clutching at a precarious hold and peering
         about. It was as though he existed within a globe with avenues radiating away in all directions … yet this only approximated
         the sensation.
      </p>
      
      <p class="indent">He remembered once seeing a gauze kerchief blowing in the wind and now he sensed the future as though it twisted across some
         surface as undulant and impermanent as that of the windblown kerchief.
      </p>
      
      <p class="indent">He saw people.</p>
      
      <p class="indent">He felt the heat and cold of uncounted probabilities.</p>
      
      <p class="indent">He knew names and places, experienced emotions without number, reviewed data of innumerable unexplored crannies. There was
         time to probe and test and taste, but no time to shape.
      </p>
      
      <p class="indent">The thing was a spectrum of possibilities from the most remote past to the most remote future – from the most probable to
         the most improbable. He saw his own death in countless ways. He saw new planets, new cultures.
      </p>
      
      <p class="indent">People.</p>
      
      <p class="indent">People.</p>
      
      <p class="indent">He saw them in such swarms they could not be listed, yet his mind catalogued them.</p>
      
      <p class="indent">Even the Guildsmen.</p>
      
      <p class="indent">And he thought: <em>The Guild – there’d be a way for us, my strangeness accepted as a familiar thing of high value, always with an assured supply
            of the now-necessary spice.</em></p>
      
      <p class="indent">But the idea of living out his life in the mind-groping-ahead-through-possible-futures that guided hurtling spaceships appalled
         him. It <em>was</em> a way, though. And in meeting the <em>possible future</em> that contained Guildsmen he recognized his own strangeness.
      </p>
      
      <p class="indent"><em>I have another kind of sight. I see another kind of terrain: the available paths.</em></p>
      
      <p class="indent">The awareness conveyed both reassurance and alarm – so many places on that other kind of terrain dipped or turned out of his
         sight.
      </p>
      
      <p class="indent"><a id="page218"/>As swiftly as it had come, the sensation slipped away from him, and he realized the entire experience had taken the space
         of a heartbeat.
      </p>
      
      <p class="indent">Yet, his own personal awareness had been turned over, illuminated in a terrifying way. He stared around him.</p>
      
      <p class="indent">Night still covered the stilltent within its rock-enclosed hideaway. His mother’s grief could still be heard.</p>
      
      <p class="indent">His own lack of grief could still be felt … that hollow place somewhere separated from his mind, which went on in its steady
         pace – dealing with data, evaluating, computing, submitting answers in something like the Mentat way.
      </p>
      
      <p class="indent">And now he saw that he had a wealth of data few such minds ever before had encompassed. But this made the empty place within
         him no easier to bear. He felt that something must shatter. It was as though a clockwork control for a bomb had been set to
         ticking within him. It went on about its business no matter what he wanted. It recorded minuscule shadings of difference around
         him – a slight change in moisture, a fractional fall in temperature, the progress of an insect across their stilltent roof,
         the solemn approach of dawn in the starlight patch of sky he could see out the tent’s transparent end.
      </p>
      
      <p class="indent">The emptiness was unbearable. Knowing how the clockwork had been set in motion made no difference. He could look to his own
         past and see the start of it – the training, the sharpening of talents, the refined pressures of sophisticated disciplines,
         even exposure to the O.C. Bible at a critical moment … and, lastly, the heavy intake of spice. And he could look ahead – the
         most terrifying direction – to see where it all pointed.
      </p>
      
      <p class="indent"><em>‘I’m a monster!</em> he thought. <em>A freak!</em></p>
      
      <p class="indent">‘No,’ he said. Then: ‘No. No! NO!’</p>
      
      <p class="indent">He found that he was pounding the tent floor with his fists. (The implacable part of him recorded this as an interesting emotional
         datum and fed it into computation.)
      </p>
      
      <p class="indent">‘Paul!’</p>
      
      <p class="indent">His mother was beside him, holding his hands, her face a gray blob peering at him. ‘Paul, what’s wrong?’</p>
      
      <p class="indent">‘You!’ he said.</p>
      
      <p class="indent">‘I’m here, Paul,’ she said. ‘It’s all right.’</p>
      
      <p class="indent"><a id="page219"/>‘What have you done to me?’ he demanded.
      </p>
      
      <p class="indent">In a burst of clarity, she sensed some of the roots in the question, said: ‘I gave birth to you.’</p>
      
      <p class="indent">It was, from instinct as much as her own subtle knowledge, the precisely correct answer to calm him. He felt her hands holding
         him, focused on the dim outline of her face. (Certain gene traces in her facial structure were noted in the new way by his
         onflowing mind, the clues added to other data, and a final-summation answer put forward.)
      </p>
      
      <p class="indent">‘Let go of me,’ he said.</p>
      
      <p class="indent">She heard the iron in his voice, obeyed. ‘Do you want to tell me what’s wrong, Paul?’</p>
      
      <p class="indent">‘Did you know what you were doing when you trained me?’ he asked.</p>
      
      <p class="indent"><em>There’s no more childhood in his voice,</em> she thought. And she said: ‘I hoped the thing any parent hopes – that you’d be … superior, different.’
      </p>
      
      <p class="indent">‘Different?’</p>
      
      <p class="indent">She heard the bitterness in his tone, said: ‘Paul, I—’</p>
      
      <p class="indent">‘You didn’t want a son!’ he said. ‘You wanted a Kwisatz Haderach! You wanted a male Bene Gesserit!’</p>
      
      <p class="indent">She recoiled from his bitterness. ‘But Paul …’</p>
      
      <p class="indent">‘Did you ever consult my father in this?’</p>
      
      <p class="indent">She spoke gently out of the freshness of her grief: ‘Whatever you are, Paul, the heredity is as much your father as me.’</p>
      
      <p class="indent">‘But not the training,’ he said. ‘Not the things that … awakened … the sleeper.’</p>
      
      <p class="indent">‘Sleeper?’</p>
      
      <p class="indent">‘It’s here.’ He put a hand on his head and then to his breast. ‘In me. It goes on and on and on and on and—’</p>
      
      <p class="indent">‘Paul!’</p>
      
      <p class="indent">She had heard the hysteria edging his voice.</p>
      
      <p class="indent">‘Listen to me,’ he said. ‘You wanted the Reverend Mother to hear about my dreams? You listen in her place now. I’ve just had
         a <em>waking</em> dream. Do you know why?’
      </p>
      
      <p class="indent">‘You must calm yourself,’ she said. ‘If there’s—’</p>
      
      <p class="indent">‘The spice,’ he said. ‘It’s in everything here – the air, the soil, <a id="page220"/>the food. The <em>geriatric</em> spice. It’s like the Truthsayer drug. It’s a poison!’
      </p>
      
      <p class="indent">She stiffened.</p>
      
      <p class="indent">His voice lowered and he repeated: ‘A poison – so subtle, so insidious … so irreversible. It won’t even kill you unless you
         stop taking it. We can’t leave Arrakis unless we take part of Arrakis with us.’
      </p>
      
      <p class="indent">The terrifying <em>presence</em> of his voice brooked no dispute.
      </p>
      
      <p class="indent">‘You and the spice,’ Paul said. ‘The spice changes anyone who gets this much of it, but thanks to <em>you,</em> I could bring the change to consciousness. I don’t get to leave it in the unconscious where its disturbance can be blanked
         out. I can <em>see</em> it.’
      </p>
      
      <p class="indent">‘Paul, you—’</p>
      
      <p class="indent">‘I <em>see</em> it!’ he repeated.
      </p>
      
      <p class="indent">She heard madness in his voice, didn’t know what to do.</p>
      
      <p class="indent">But he spoke again, and she heard the iron control return to him: ‘We’re trapped here.’</p>
      
      <p class="indent"><em>We’re trapped here,</em> she agreed.
      </p>
      
      <p class="indent">And she accepted the truth of his words. No pressure of the Bene Gesserit, no trickery or artifice could pry them completely
         free from Arrakis: the spice was addictive. Her body had known the fact long before her mind awakened to it.
      </p>
      
      <p class="indent"><em>So here we live out our lives,</em> she thought, <em>on this hell planet. The place is prepared for us, if we can evade the Harkonnens. And there’s no doubt of my course: a broodmare
            preserving an important bloodline for the Bene Gesserit Plan.</em></p>
      
      <p class="indent">‘I must tell you about my waking dream,’ Paul said. (Now there was fury in his voice.) ‘To be sure you accept what I say,
         I’ll tell you first I know you’ll bear a daughter, my sister, here on Arrakis.’
      </p>
      
      <p class="indent">Jessica placed her hands against the tent floor, pressed back against the curving fabric wall to still a pang of fear. She
         knew her pregnancy could not show yet. Only her own Bene Gesserit training had allowed her to read the first faint signals
         of her body, to know of the embryo only a few weeks old.
      </p>
      
      <p class="indent">‘Only to serve,’ Jessica whispered, clinging to the Bene Gesserit motto. ‘We exist only to serve.’</p>
      
      <p class="indent"><a id="page221"/>‘We’ll find a home among the Fremen,’ Paul said, ‘where your Missionaria Protectiva has bought us a bolt hole.’
      </p>
      
      <p class="indent"><em>They’ve prepared a way for us in the desert,</em> Jessica told herself. <em>But how can he know of the Missionaria Protectiva?</em> She found it increasingly difficult to subdue her terror at the overpowering strangeness in Paul.
      </p>
      
      <p class="indent">He studied the dark shadow of her, seeing her fear and every reaction with his new awareness as though she were outlined in
         blinding light. A beginning of compassion for her crept over him.
      </p>
      
      <p class="indent">‘The things that can happen here, I cannot begin to tell you,’ he said. ‘I cannot even begin to tell myself, although I’ve
         seen them. This <em>sense</em> of the future – I seem to have no control over it. The thing just happens. The immediate future – say, a year – I can see
         some of that … a <em>road</em> as broad as our Central Avenue on Caladan. Some places I don’t see … shadowed places … as though it went behind a hill’ (and
         again he thought of the surface of a blowing kerchief) ‘… and there are branchings …’
      </p>
      
      <p class="indent">He fell silent as memory of that <em>seeing</em> filled him. No prescient dream, no experience of his life had quite prepared him for the totality with which the veil had
         been ripped away to reveal naked time.
      </p>
      
      <p class="indent">Recalling the experience, he recognized his own terrible purpose – the pressure of his life spreading outward like an expanding
         bubble … time retreating before it …
      </p>
      
      <p class="indent">Jessica found the tent’s glowtab control, activated it.</p>
      
      <p class="indent">Dim green light drove back the shadows, easing her fear. She looked at Paul’s face, his eyes – the inward stare. And she knew
         where she had seen such a look before: pictured in records of disasters – on the faces of children who experienced starvation
         or terrible injury. The eyes were like pits, mouth a straight line, cheeks indrawn.
      </p>
      
      <p class="indent"><em>It’s the look of terrible awareness,</em> she thought, <em>of someone forced to the knowledge of his own mortality.</em></p>
      
      <p class="indent">He was, indeed, no longer a child.</p>
      
      <p class="indent">The underlying import of his words began to take over in her <a id="page222"/>mind, pushing all else aside. Paul could see ahead, a way of escape for them.
      </p>
      
      <p class="indent">‘There’s a way to evade the Harkonnens,’ she said.</p>
      
      <p class="indent">‘The Harkonnens!’ he sneered. ‘Put those twisted humans out of your mind.’ He stared at his mother, studying the lines of
         her face in the light of the glowtab. The lines betrayed her.
      </p>
      
      <p class="indent">She said: ‘You shouldn’t refer to people as humans without—’</p>
      
      <p class="indent">‘Don’t be so sure you know where to draw the line,’ he said. ‘We carry our past with us. And, mother mine, there’s a thing
         you don’t know and should – <em>we</em> are Harkonnens.’
      </p>
      
      <p class="indent">Her mind did a terrifying thing: it blanked out as though it needed to shut off all sensation. But Paul’s voice went on at
         that implacable pace, dragging her with it.
      </p>
      
      <p class="indent">‘When next you find a mirror, study your face – study mine now. The traces are there if you don’t blind yourself. Look at
         my hands, the set of my bones. And if none of this convinces you, then take my word for it. I’ve walked the future, I’ve looked
         at a record, I’ve seen a place, I have all the data. We’re Harkonnens.’
      </p>
      
      <p class="indent">‘A … renegade branch of the family,’ she said. ‘That’s it, isn’t it? Some Harkonnen cousin who—’</p>
      
      <p class="indent">‘You’re the Baron’s own daughter,’ he said, and watched the way she pressed her hands to her mouth. ‘The Baron sampled many
         pleasures in his youth, and once permitted himself to be seduced. But it was for the genetic purposes of the Bene Gesserit,
         by one of <em>you.’</em></p>
      
      <p class="indent">The way he said <em>you</em> struck her like a slap. But it set her mind to working and she could not deny his words. So many blank ends of meaning in
         her past reached out now and linked. The daughter the Bene Gesserit wanted – it wasn’t to end the old Atreides-Harkonnen feud,
         but to fix some genetic factor in their lines. <em>What?</em> She groped for an answer.
      </p>
      
      <p class="indent">As though he saw inside her mind, Paul said: ‘They thought they were reaching for me. But I’m not what they expected, and
         I’ve arrived before my time. And <em>they</em> don’t know it.’
      </p>
      
      <p class="indent">Jessica pressed her hands to her mouth.</p>
      
      <p class="indent"><em>Great Mother! He’s the Kwisatz Haderach!</em></p>
      
      <p class="indent">She felt exposed and naked before him, realizing then that he <a id="page223"/>saw her with eyes from which little could be hidden. And <em>that,</em> she knew, was the basis of her fear.
      </p>
      
      <p class="indent">‘You’re thinking I’m the Kwisatz Haderach,’ he said. ‘Put that out of your mind. I’m something unexpected.’</p>
      
      <p class="indent"><em>I must get word out to one of the schools,</em> she thought. <em>The mating index may show what has happened.</em></p>
      
      <p class="indent">‘They won’t learn about me until it’s too late,’ he said.</p>
      
      <p class="indent">She sought to divert him, lowered her hands and said: ‘We’ll find a place among the Fremen?’</p>
      
      <p class="indent">‘The Fremen have a saying they credit to Shai-hulud, Old Father Eternity,’ he said. ‘They say: “Be prepared to appreciate
         what you meet.”’
      </p>
      
      <p class="indent">And he thought: <em>Yes, mother mine – among the Fremen. You’ll acquire the blue eyes and a callus beside your lovely nose from the filter tube
            to your stillsuit … and you’ll bear my sister: St Alia of the Knife.</em></p>
      
      <p class="indent">‘If you’re not the Kwisatz Haderach,’Jessica said, ‘what—’</p>
      
      <p class="indent">‘You couldn’t possibly know,’ he said. ‘You won’t believe it until you see it.’</p>
      
      <p class="indent">And he thought: <em>I’m a seed.</em></p>
      
      <p class="indent">He suddenly saw how fertile was the ground into which he had fallen, and with this realization, the terrible purpose filled
         him, creeping through the empty place within, threatening to choke him with grief.
      </p>
      
      <p class="indent">He had seen two main branchings along the way ahead – in one he confronted an evil old Baron and said: ‘Hello, Grandfather.’
         The thought of that path and what lay along it sickened him.
      </p>
      
      <p class="indent">The other path held long patches of gray obscurity except for peaks of violence. He had seen a warrior religion there, a fire
         spreading across the universe with the Atreides green and black banner waving at the head of fanatic legions drunk on spice
         liquor. Gurney Halleck and a few others of his father’s men – a pitiful few – were among them, all marked by the hawk symbol
         from the shrine of his father’s skull.
      </p>
      
      <p class="indent">‘I can’t go that way,’ he muttered. ‘That’s what the old witches of your schools really want.’</p>
      
      <p class="indent">‘I don’t understand you, Paul,’ his mother said.</p>
      
      <p class="indent">He remained silent, thinking like the seed he was, thinking <a id="page224"/>with the race consciousness he had first experienced as terrible purpose. He found that he no longer could hate the Bene Gesserit
         or the Emperor or even the Harkonnens. They were all caught up in the need of their race to renew its scattered inheritance,
         to cross and mingle and infuse their bloodlines in a great new pooling of genes. And the race knew only one sure way for this
         – the ancient way, the tried and certain way that rolled over everything in its path: jihad.
      </p>
      
      <p class="indent"><em>Surely I cannot choose that way,</em> he thought.
      </p>
      
      <p class="indent">But he saw again in his mind’s eye the shrine of his father’s skull and the violence with the green and black banner waving
         in its midst.
      </p>
      
      <p class="indent">Jessica cleared her throat, worried by his silence. ‘Then … the Fremen will give us sanctuary?’</p>
      
      <p class="indent">He looked up, staring across the green-lighted tent at the inbred, patrician lines of her face. ‘Yes,’ he said. ‘That’s one
         of the ways.’ He nodded. ‘Yes. They’ll call me … Muad’Dib, “The One Who Points the Way.” Yes that’s what they’ll call me.’
      </p>
      
      <p class="indent">And he closed his eyes, thinking: <em>Now, my father, I can mourn you.</em> And he felt the tears coursing down his cheeks.
      </p>
   </body>
</html>
`,sd=new DOMParser,_c=sd.parseFromString(Nc.replaceAll(/<\?xml (.*)\?>/g,""),"text/xml"),ws=Array.from(_c.body.children),ad=e=>sd.parseFromString(e.replaceAll(/<\?xml (.*)\?>/g,""),"text/xml"),zc=e=>{var s;const n=(s=ad(e).querySelector("rootfile"))==null?void 0:s.getAttribute("full-path");if(!n)throw new Error("No full-path attribute found in container.xml");return n},od=e=>new Promise((t,n)=>{const s=new FileReader;s.onload=a=>{var i;const o=(i=a==null?void 0:a.target)==null?void 0:i.result;if(!o){console.log("File is empty"),n(new Error("File is empty"));return}t(o)},s.onerror=n,s.readAsText(e)}),id=async e=>fetch(e).then(t=>{if(!t.ok)throw new Error(`File does not exist: ${e}`);return t.blob()}).catch(t=>{throw console.error(t),t}),Wc=async()=>{const e=await id("epub/dune-v2/META-INF/container.xml");try{const t=await od(e);return zc(t)}catch(t){console.error("Error reading file:",t)}},Mc=async e=>{var n;const t=await id(`epub/dune-v2/${e}`);try{const s=await od(t),o=(n=ad(s).querySelector("manifest"))==null?void 0:n.children;if(!o)throw new Error(`No manifest found in ${e}`);return o}catch(s){console.error("Error reading file:",s)}},Yc=async()=>{const e=await Wc();if(console.log({rootFilePath:e}),!e){console.error("No root file path found");return}const t=await Mc(e);if(!t){console.error("No manifest found");return}const n=Array.from(t).filter(o=>o.getAttribute("media-type")==="application/xhtml+xml").map(o=>o.getAttribute("href")),s=e.split("/").slice(0,-1).join("/"),a=n.map(o=>`${s}/${o}`);console.log(a)};Yc();function Oc(){const e=+(localStorage.getItem("sentenceIndex")||0),[t,n]=et.useState(e),s=et.useCallback(c=>{(c.key==="ArrowRight"||c.key===" ")&&n(w=>Math.min(ws.length-1,w+1)),c.key==="ArrowLeft"&&n(w=>Math.max(0,w-1))},[]);et.useEffect(()=>(document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)),[s]),et.useEffect(()=>{localStorage.setItem("sentenceIndex",t.toString())},[t]);const a=c=>{const v=c.length*40,k=c.endsWith(",")?200:0,B=c.endsWith(";")||c.endsWith(".")||c.endsWith('."')||c.endsWith(".’")||c.endsWith("!")||c.endsWith('!"')||c.endsWith("!’")||c.endsWith("?")||c.endsWith('?"')||c.endsWith("?’")?350:0,u=c.endsWith("…")?1e3:0;return 150+v+k+B+u},o=c=>c.startsWith("<em>"),i=c=>c.endsWith("</em>")||c.endsWith("</em>,")||c.endsWith("</em>."),r=c=>c.nodeName==="p"?l(c.innerHTML):c.nodeName==="blockquote"?Array.from(c.children).map(v=>l(v.innerHTML)).join("<br> "):c.innerHTML,l=c=>c.replaceAll("…",". . .").replaceAll(/<em xmlns=["'].*["']>/g,"<em>").replaceAll(/<a xmlns=["'].*["'] id=["'].*["']><\/a>/g,"");let d=0,m=!1;const f=r(ws[t]).split(" ").filter(c=>c!=="");return Ce.jsxs("div",{className:"absolute top-0 left-0 right-0 bottom-0 bg-cover bg-[url('/dune-wallpaper.jpg')] bg-center text-center text-white font-dm-serif p-8 text-2xl leading-normal sm:text-5xl sm:leading-tight",children:[Ce.jsx("div",{className:"flex content-center h-full",children:Ce.jsx("div",{className:`max-w-[800px] m-auto select-none node-${ws[t].nodeName}`,children:f.map((c,w)=>{let v=c;o(c)&&(m=!0),m&&(v=`<em>${c}</em>`),i(c)&&(m=!1);const k=w===0?"":f[w-1];return d+=a(k),Ce.jsx(Bc,{delay:d,word:v},`${t}-${w}-${c}`)})})}),Ce.jsx("div",{className:"fixed bottom-0 left-0 right-0 h-1",children:Ce.jsx("div",{className:"h-full bg-white opacity-50 transition-all rounded",style:{width:`${t/(ws.length-1)*100}%`}})})]})}Ka.createRoot(document.getElementById("root")).render(Ce.jsx(Oc,{}));
