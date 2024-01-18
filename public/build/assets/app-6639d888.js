var zn=!1,qn=!1,Ee=[],Gn=-1;function Nl(t){Al(t)}function Al(t){Ee.includes(t)||Ee.push(t),Rl()}function Dr(t){let e=Ee.indexOf(t);e!==-1&&e>Gn&&Ee.splice(e,1)}function Rl(){!qn&&!zn&&(zn=!0,queueMicrotask(Ol))}function Ol(){zn=!1,qn=!0;for(let t=0;t<Ee.length;t++)Ee[t](),Gn=t;Ee.length=0,Gn=-1,qn=!1}var Ge,Ke,St,Mr,Kn=!0;function Pl(t){Kn=!1,t(),Kn=!0}function kl(t){Ge=t.reactive,St=t.release,Ke=e=>t.effect(e,{scheduler:n=>{Kn?Nl(n):n()}}),Mr=t.raw}function Rs(t){Ke=t}function Dl(t){let e=()=>{};return[i=>{let s=Ke(i);return t._x_effects||(t._x_effects=new Set,t._x_runEffects=()=>{t._x_effects.forEach(r=>r())}),t._x_effects.add(s),e=()=>{s!==void 0&&(t._x_effects.delete(s),St(s))},s},()=>{e()}]}function at(t,e,n={}){t.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0,cancelable:!0}))}function ue(t,e){if(typeof ShadowRoot=="function"&&t instanceof ShadowRoot){Array.from(t.children).forEach(s=>ue(s,e));return}let n=!1;if(e(t,()=>n=!0),n)return;let i=t.firstElementChild;for(;i;)ue(i,e),i=i.nextElementSibling}function te(t,...e){console.warn(`Alpine Warning: ${t}`,...e)}var Os=!1;function Ml(){Os&&te("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."),Os=!0,document.body||te("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),at(document,"alpine:init"),at(document,"alpine:initializing"),Di(),Bl(e=>ne(e,ue)),Oi(e=>Ri(e)),zr((e,n)=>{Bi(e,n).forEach(i=>i())});let t=e=>!fn(e.parentElement,!0);Array.from(document.querySelectorAll(Br().join(","))).filter(t).forEach(e=>{ne(e)}),at(document,"alpine:initialized")}var Ai=[],Lr=[];function Fr(){return Ai.map(t=>t())}function Br(){return Ai.concat(Lr).map(t=>t())}function Wr(t){Ai.push(t)}function $r(t){Lr.push(t)}function fn(t,e=!1){return _n(t,n=>{if((e?Br():Fr()).some(s=>n.matches(s)))return!0})}function _n(t,e){if(t){if(e(t))return t;if(t._x_teleportBack&&(t=t._x_teleportBack),!!t.parentElement)return _n(t.parentElement,e)}}function Ll(t){return Fr().some(e=>t.matches(e))}var Ur=[];function Fl(t){Ur.push(t)}function ne(t,e=ue,n=()=>{}){Zl(()=>{e(t,(i,s)=>{n(i,s),Ur.forEach(r=>r(i,s)),Bi(i,i.attributes).forEach(r=>r()),i._x_ignore&&s()})})}function Ri(t){ue(t,e=>{Gr(e),Wl(e)})}var Hr=[],Vr=[],jr=[];function Bl(t){jr.push(t)}function Oi(t,e){typeof e=="function"?(t._x_cleanups||(t._x_cleanups=[]),t._x_cleanups.push(e)):(e=t,Vr.push(e))}function zr(t){Hr.push(t)}function qr(t,e,n){t._x_attributeCleanups||(t._x_attributeCleanups={}),t._x_attributeCleanups[e]||(t._x_attributeCleanups[e]=[]),t._x_attributeCleanups[e].push(n)}function Gr(t,e){t._x_attributeCleanups&&Object.entries(t._x_attributeCleanups).forEach(([n,i])=>{(e===void 0||e.includes(n))&&(i.forEach(s=>s()),delete t._x_attributeCleanups[n])})}function Wl(t){if(t._x_cleanups)for(;t._x_cleanups.length;)t._x_cleanups.pop()()}var Pi=new MutationObserver(Li),ki=!1;function Di(){Pi.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),ki=!0}function Kr(){$l(),Pi.disconnect(),ki=!1}var lt=[],An=!1;function $l(){lt=lt.concat(Pi.takeRecords()),lt.length&&!An&&(An=!0,queueMicrotask(()=>{Ul(),An=!1}))}function Ul(){Li(lt),lt.length=0}function D(t){if(!ki)return t();Kr();let e=t();return Di(),e}var Mi=!1,qt=[];function Hl(){Mi=!0}function Vl(){Mi=!1,Li(qt),qt=[]}function Li(t){if(Mi){qt=qt.concat(t);return}let e=[],n=[],i=new Map,s=new Map;for(let r=0;r<t.length;r++)if(!t[r].target._x_ignoreMutationObserver&&(t[r].type==="childList"&&(t[r].addedNodes.forEach(o=>o.nodeType===1&&e.push(o)),t[r].removedNodes.forEach(o=>o.nodeType===1&&n.push(o))),t[r].type==="attributes")){let o=t[r].target,a=t[r].attributeName,l=t[r].oldValue,c=()=>{i.has(o)||i.set(o,[]),i.get(o).push({name:a,value:o.getAttribute(a)})},h=()=>{s.has(o)||s.set(o,[]),s.get(o).push(a)};o.hasAttribute(a)&&l===null?c():o.hasAttribute(a)?(h(),c()):h()}s.forEach((r,o)=>{Gr(o,r)}),i.forEach((r,o)=>{Hr.forEach(a=>a(o,r))});for(let r of n)e.includes(r)||(Vr.forEach(o=>o(r)),Ri(r));e.forEach(r=>{r._x_ignoreSelf=!0,r._x_ignore=!0});for(let r of e)n.includes(r)||r.isConnected&&(delete r._x_ignoreSelf,delete r._x_ignore,jr.forEach(o=>o(r)),r._x_ignore=!0,r._x_ignoreSelf=!0);e.forEach(r=>{delete r._x_ignoreSelf,delete r._x_ignore}),e=null,n=null,i=null,s=null}function Yr(t){return xt(Ue(t))}function Tt(t,e,n){return t._x_dataStack=[e,...Ue(n||t)],()=>{t._x_dataStack=t._x_dataStack.filter(i=>i!==e)}}function Ue(t){return t._x_dataStack?t._x_dataStack:typeof ShadowRoot=="function"&&t instanceof ShadowRoot?Ue(t.host):t.parentNode?Ue(t.parentNode):[]}function xt(t){return new Proxy({objects:t},jl)}var jl={ownKeys({objects:t}){return Array.from(new Set(t.flatMap(e=>Object.keys(e))))},has({objects:t},e){return e==Symbol.unscopables?!1:t.some(n=>Object.prototype.hasOwnProperty.call(n,e))},get({objects:t},e,n){return e=="toJSON"?zl:Reflect.get(t.find(i=>Object.prototype.hasOwnProperty.call(i,e))||{},e,n)},set({objects:t},e,n,i){const s=t.find(o=>Object.prototype.hasOwnProperty.call(o,e))||t[t.length-1],r=Object.getOwnPropertyDescriptor(s,e);return r!=null&&r.set&&(r!=null&&r.get)?Reflect.set(s,e,n,i):Reflect.set(s,e,n)}};function zl(){return Reflect.ownKeys(this).reduce((e,n)=>(e[n]=Reflect.get(this,n),e),{})}function Qr(t){let e=i=>typeof i=="object"&&!Array.isArray(i)&&i!==null,n=(i,s="")=>{Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(([r,{value:o,enumerable:a}])=>{if(a===!1||o===void 0)return;let l=s===""?r:`${s}.${r}`;typeof o=="object"&&o!==null&&o._x_interceptor?i[r]=o.initialize(t,l,r):e(o)&&o!==i&&!(o instanceof Element)&&n(o,l)})};return n(t)}function Jr(t,e=()=>{}){let n={initialValue:void 0,_x_interceptor:!0,initialize(i,s,r){return t(this.initialValue,()=>ql(i,s),o=>Yn(i,s,o),s,r)}};return e(n),i=>{if(typeof i=="object"&&i!==null&&i._x_interceptor){let s=n.initialize.bind(n);n.initialize=(r,o,a)=>{let l=i.initialize(r,o,a);return n.initialValue=l,s(r,o,a)}}else n.initialValue=i;return n}}function ql(t,e){return e.split(".").reduce((n,i)=>n[i],t)}function Yn(t,e,n){if(typeof e=="string"&&(e=e.split(".")),e.length===1)t[e[0]]=n;else{if(e.length===0)throw error;return t[e[0]]||(t[e[0]]={}),Yn(t[e[0]],e.slice(1),n)}}var Xr={};function J(t,e){Xr[t]=e}function Qn(t,e){return Object.entries(Xr).forEach(([n,i])=>{let s=null;function r(){if(s)return s;{let[o,a]=so(e);return s={interceptor:Jr,...o},Oi(e,a),s}}Object.defineProperty(t,`$${n}`,{get(){return i(e,r())},enumerable:!1})}),t}function Gl(t,e,n,...i){try{return n(...i)}catch(s){_t(s,t,e)}}function _t(t,e,n=void 0){Object.assign(t,{el:e,expression:n}),console.warn(`Alpine Expression Error: ${t.message}

${n?'Expression: "'+n+`"

`:""}`,e),setTimeout(()=>{throw t},0)}var jt=!0;function Zr(t){let e=jt;jt=!1;let n=t();return jt=e,n}function Ce(t,e,n={}){let i;return $(t,e)(s=>i=s,n),i}function $(...t){return eo(...t)}var eo=to;function Kl(t){eo=t}function to(t,e){let n={};Qn(n,t);let i=[n,...Ue(t)],s=typeof e=="function"?Yl(i,e):Jl(i,e,t);return Gl.bind(null,t,e,s)}function Yl(t,e){return(n=()=>{},{scope:i={},params:s=[]}={})=>{let r=e.apply(xt([i,...t]),s);Gt(n,r)}}var Rn={};function Ql(t,e){if(Rn[t])return Rn[t];let n=Object.getPrototypeOf(async function(){}).constructor,i=/^[\n\s]*if.*\(.*\)/.test(t.trim())||/^(let|const)\s/.test(t.trim())?`(async()=>{ ${t} })()`:t,r=(()=>{try{let o=new n(["__self","scope"],`with (scope) { __self.result = ${i} }; __self.finished = true; return __self.result;`);return Object.defineProperty(o,"name",{value:`[Alpine] ${t}`}),o}catch(o){return _t(o,e,t),Promise.resolve()}})();return Rn[t]=r,r}function Jl(t,e,n){let i=Ql(e,n);return(s=()=>{},{scope:r={},params:o=[]}={})=>{i.result=void 0,i.finished=!1;let a=xt([r,...t]);if(typeof i=="function"){let l=i(i,a).catch(c=>_t(c,n,e));i.finished?(Gt(s,i.result,a,o,n),i.result=void 0):l.then(c=>{Gt(s,c,a,o,n)}).catch(c=>_t(c,n,e)).finally(()=>i.result=void 0)}}}function Gt(t,e,n,i,s){if(jt&&typeof e=="function"){let r=e.apply(n,i);r instanceof Promise?r.then(o=>Gt(t,o,n,i)).catch(o=>_t(o,s,e)):t(r)}else typeof e=="object"&&e instanceof Promise?e.then(r=>t(r)):t(e)}var Fi="x-";function Ye(t=""){return Fi+t}function Xl(t){Fi=t}var Jn={};function O(t,e){return Jn[t]=e,{before(n){if(!Jn[n]){console.warn("Cannot find directive `${directive}`. `${name}` will use the default order of execution");return}const i=ye.indexOf(n);ye.splice(i>=0?i:ye.indexOf("DEFAULT"),0,t)}}}function Bi(t,e,n){if(e=Array.from(e),t._x_virtualDirectives){let r=Object.entries(t._x_virtualDirectives).map(([a,l])=>({name:a,value:l})),o=no(r);r=r.map(a=>o.find(l=>l.name===a.name)?{name:`x-bind:${a.name}`,value:`"${a.value}"`}:a),e=e.concat(r)}let i={};return e.map(ao((r,o)=>i[r]=o)).filter(co).map(tc(i,n)).sort(nc).map(r=>ec(t,r))}function no(t){return Array.from(t).map(ao()).filter(e=>!co(e))}var Xn=!1,ot=new Map,io=Symbol();function Zl(t){Xn=!0;let e=Symbol();io=e,ot.set(e,[]);let n=()=>{for(;ot.get(e).length;)ot.get(e).shift()();ot.delete(e)},i=()=>{Xn=!1,n()};t(n),i()}function so(t){let e=[],n=a=>e.push(a),[i,s]=Dl(t);return e.push(s),[{Alpine:At,effect:i,cleanup:n,evaluateLater:$.bind($,t),evaluate:Ce.bind(Ce,t)},()=>e.forEach(a=>a())]}function ec(t,e){let n=()=>{},i=Jn[e.type]||n,[s,r]=so(t);qr(t,e.original,r);let o=()=>{t._x_ignore||t._x_ignoreSelf||(i.inline&&i.inline(t,e,s),i=i.bind(i,t,e,s),Xn?ot.get(io).push(i):i())};return o.runCleanups=r,o}var ro=(t,e)=>({name:n,value:i})=>(n.startsWith(t)&&(n=n.replace(t,e)),{name:n,value:i}),oo=t=>t;function ao(t=()=>{}){return({name:e,value:n})=>{let{name:i,value:s}=lo.reduce((r,o)=>o(r),{name:e,value:n});return i!==e&&t(i,e),{name:i,value:s}}}var lo=[];function Wi(t){lo.push(t)}function co({name:t}){return uo().test(t)}var uo=()=>new RegExp(`^${Fi}([^:^.]+)\\b`);function tc(t,e){return({name:n,value:i})=>{let s=n.match(uo()),r=n.match(/:([a-zA-Z0-9\-_:]+)/),o=n.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],a=e||t[n]||n;return{type:s?s[1]:null,value:r?r[1]:null,modifiers:o.map(l=>l.replace(".","")),expression:i,original:a}}}var Zn="DEFAULT",ye=["ignore","ref","data","id","anchor","bind","init","for","model","modelable","transition","show","if",Zn,"teleport"];function nc(t,e){let n=ye.indexOf(t.type)===-1?Zn:t.type,i=ye.indexOf(e.type)===-1?Zn:e.type;return ye.indexOf(n)-ye.indexOf(i)}var ei=[],$i=!1;function Ui(t=()=>{}){return queueMicrotask(()=>{$i||setTimeout(()=>{ti()})}),new Promise(e=>{ei.push(()=>{t(),e()})})}function ti(){for($i=!1;ei.length;)ei.shift()()}function ic(){$i=!0}function Hi(t,e){return Array.isArray(e)?Ps(t,e.join(" ")):typeof e=="object"&&e!==null?sc(t,e):typeof e=="function"?Hi(t,e()):Ps(t,e)}function Ps(t,e){let n=s=>s.split(" ").filter(r=>!t.classList.contains(r)).filter(Boolean),i=s=>(t.classList.add(...s),()=>{t.classList.remove(...s)});return e=e===!0?e="":e||"",i(n(e))}function sc(t,e){let n=a=>a.split(" ").filter(Boolean),i=Object.entries(e).flatMap(([a,l])=>l?n(a):!1).filter(Boolean),s=Object.entries(e).flatMap(([a,l])=>l?!1:n(a)).filter(Boolean),r=[],o=[];return s.forEach(a=>{t.classList.contains(a)&&(t.classList.remove(a),o.push(a))}),i.forEach(a=>{t.classList.contains(a)||(t.classList.add(a),r.push(a))}),()=>{o.forEach(a=>t.classList.add(a)),r.forEach(a=>t.classList.remove(a))}}function pn(t,e){return typeof e=="object"&&e!==null?rc(t,e):oc(t,e)}function rc(t,e){let n={};return Object.entries(e).forEach(([i,s])=>{n[i]=t.style[i],i.startsWith("--")||(i=ac(i)),t.style.setProperty(i,s)}),setTimeout(()=>{t.style.length===0&&t.removeAttribute("style")}),()=>{pn(t,n)}}function oc(t,e){let n=t.getAttribute("style",e);return t.setAttribute("style",e),()=>{t.setAttribute("style",n||"")}}function ac(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function ni(t,e=()=>{}){let n=!1;return function(){n?e.apply(this,arguments):(n=!0,t.apply(this,arguments))}}O("transition",(t,{value:e,modifiers:n,expression:i},{evaluate:s})=>{typeof i=="function"&&(i=s(i)),i!==!1&&(!i||typeof i=="boolean"?cc(t,n,e):lc(t,i,e))});function lc(t,e,n){ho(t,Hi,""),{enter:s=>{t._x_transition.enter.during=s},"enter-start":s=>{t._x_transition.enter.start=s},"enter-end":s=>{t._x_transition.enter.end=s},leave:s=>{t._x_transition.leave.during=s},"leave-start":s=>{t._x_transition.leave.start=s},"leave-end":s=>{t._x_transition.leave.end=s}}[n](e)}function cc(t,e,n){ho(t,pn);let i=!e.includes("in")&&!e.includes("out")&&!n,s=i||e.includes("in")||["enter"].includes(n),r=i||e.includes("out")||["leave"].includes(n);e.includes("in")&&!i&&(e=e.filter((C,A)=>A<e.indexOf("out"))),e.includes("out")&&!i&&(e=e.filter((C,A)=>A>e.indexOf("out")));let o=!e.includes("opacity")&&!e.includes("scale"),a=o||e.includes("opacity"),l=o||e.includes("scale"),c=a?0:1,h=l?et(e,"scale",95)/100:1,u=et(e,"delay",0)/1e3,d=et(e,"origin","center"),_="opacity, transform",g=et(e,"duration",150)/1e3,w=et(e,"duration",75)/1e3,p="cubic-bezier(0.4, 0.0, 0.2, 1)";s&&(t._x_transition.enter.during={transformOrigin:d,transitionDelay:`${u}s`,transitionProperty:_,transitionDuration:`${g}s`,transitionTimingFunction:p},t._x_transition.enter.start={opacity:c,transform:`scale(${h})`},t._x_transition.enter.end={opacity:1,transform:"scale(1)"}),r&&(t._x_transition.leave.during={transformOrigin:d,transitionDelay:`${u}s`,transitionProperty:_,transitionDuration:`${w}s`,transitionTimingFunction:p},t._x_transition.leave.start={opacity:1,transform:"scale(1)"},t._x_transition.leave.end={opacity:c,transform:`scale(${h})`})}function ho(t,e,n={}){t._x_transition||(t._x_transition={enter:{during:n,start:n,end:n},leave:{during:n,start:n,end:n},in(i=()=>{},s=()=>{}){ii(t,e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},i,s)},out(i=()=>{},s=()=>{}){ii(t,e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},i,s)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(t,e,n,i){const s=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let r=()=>s(n);if(e){t._x_transition&&(t._x_transition.enter||t._x_transition.leave)?t._x_transition.enter&&(Object.entries(t._x_transition.enter.during).length||Object.entries(t._x_transition.enter.start).length||Object.entries(t._x_transition.enter.end).length)?t._x_transition.in(n):r():t._x_transition?t._x_transition.in(n):r();return}t._x_hidePromise=t._x_transition?new Promise((o,a)=>{t._x_transition.out(()=>{},()=>o(i)),t._x_transitioning&&t._x_transitioning.beforeCancel(()=>a({isFromCancelledTransition:!0}))}):Promise.resolve(i),queueMicrotask(()=>{let o=fo(t);o?(o._x_hideChildren||(o._x_hideChildren=[]),o._x_hideChildren.push(t)):s(()=>{let a=l=>{let c=Promise.all([l._x_hidePromise,...(l._x_hideChildren||[]).map(a)]).then(([h])=>h());return delete l._x_hidePromise,delete l._x_hideChildren,c};a(t).catch(l=>{if(!l.isFromCancelledTransition)throw l})})})};function fo(t){let e=t.parentNode;if(e)return e._x_hidePromise?e:fo(e)}function ii(t,e,{during:n,start:i,end:s}={},r=()=>{},o=()=>{}){if(t._x_transitioning&&t._x_transitioning.cancel(),Object.keys(n).length===0&&Object.keys(i).length===0&&Object.keys(s).length===0){r(),o();return}let a,l,c;uc(t,{start(){a=e(t,i)},during(){l=e(t,n)},before:r,end(){a(),c=e(t,s)},after:o,cleanup(){l(),c()}})}function uc(t,e){let n,i,s,r=ni(()=>{D(()=>{n=!0,i||e.before(),s||(e.end(),ti()),e.after(),t.isConnected&&e.cleanup(),delete t._x_transitioning})});t._x_transitioning={beforeCancels:[],beforeCancel(o){this.beforeCancels.push(o)},cancel:ni(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();r()}),finish:r},D(()=>{e.start(),e.during()}),ic(),requestAnimationFrame(()=>{if(n)return;let o=Number(getComputedStyle(t).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,a=Number(getComputedStyle(t).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;o===0&&(o=Number(getComputedStyle(t).animationDuration.replace("s",""))*1e3),D(()=>{e.before()}),i=!0,requestAnimationFrame(()=>{n||(D(()=>{e.end()}),ti(),setTimeout(t._x_transitioning.finish,o+a),s=!0)})})}function et(t,e,n){if(t.indexOf(e)===-1)return n;const i=t[t.indexOf(e)+1];if(!i||e==="scale"&&isNaN(i))return n;if(e==="duration"||e==="delay"){let s=i.match(/([0-9]+)ms/);if(s)return s[1]}return e==="origin"&&["top","right","left","center","bottom"].includes(t[t.indexOf(e)+2])?[i,t[t.indexOf(e)+2]].join(" "):i}var he=!1;function Nt(t,e=()=>{}){return(...n)=>he?e(...n):t(...n)}function hc(t){return(...e)=>he&&t(...e)}var _o=[];function po(t){_o.push(t)}function dc(t,e){_o.forEach(n=>n(t,e)),he=!0,go(()=>{ne(e,(n,i)=>{i(n,()=>{})})}),he=!1}var si=!1;function fc(t,e){e._x_dataStack||(e._x_dataStack=t._x_dataStack),he=!0,si=!0,go(()=>{_c(e)}),he=!1,si=!1}function _c(t){let e=!1;ne(t,(i,s)=>{ue(i,(r,o)=>{if(e&&Ll(r))return o();e=!0,s(r,o)})})}function go(t){let e=Ke;Rs((n,i)=>{let s=e(n);return St(s),()=>{}}),t(),Rs(e)}function mo(t,e,n,i=[]){switch(t._x_bindings||(t._x_bindings=Ge({})),t._x_bindings[e]=n,e=i.includes("camel")?bc(e):e,e){case"value":pc(t,n);break;case"style":mc(t,n);break;case"class":gc(t,n);break;case"selected":case"checked":yc(t,e,n);break;default:yo(t,e,n);break}}function pc(t,e){if(t.type==="radio")t.attributes.value===void 0&&(t.value=e),window.fromModel&&(typeof e=="boolean"?t.checked=zt(t.value)===e:t.checked=ks(t.value,e));else if(t.type==="checkbox")Number.isInteger(e)?t.value=e:!Array.isArray(e)&&typeof e!="boolean"&&![null,void 0].includes(e)?t.value=String(e):Array.isArray(e)?t.checked=e.some(n=>ks(n,t.value)):t.checked=!!e;else if(t.tagName==="SELECT")Cc(t,e);else{if(t.value===e)return;t.value=e===void 0?"":e}}function gc(t,e){t._x_undoAddedClasses&&t._x_undoAddedClasses(),t._x_undoAddedClasses=Hi(t,e)}function mc(t,e){t._x_undoAddedStyles&&t._x_undoAddedStyles(),t._x_undoAddedStyles=pn(t,e)}function yc(t,e,n){yo(t,e,n),Ec(t,e,n)}function yo(t,e,n){[null,void 0,!1].includes(n)&&wc(e)?t.removeAttribute(e):(vo(e)&&(n=e),vc(t,e,n))}function vc(t,e,n){t.getAttribute(e)!=n&&t.setAttribute(e,n)}function Ec(t,e,n){t[e]!==n&&(t[e]=n)}function Cc(t,e){const n=[].concat(e).map(i=>i+"");Array.from(t.options).forEach(i=>{i.selected=n.includes(i.value)})}function bc(t){return t.toLowerCase().replace(/-(\w)/g,(e,n)=>n.toUpperCase())}function ks(t,e){return t==e}function zt(t){return[1,"1","true","on","yes",!0].includes(t)?!0:[0,"0","false","off","no",!1].includes(t)?!1:t?!!t:null}function vo(t){return["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(t)}function wc(t){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(t)}function Ic(t,e,n){return t._x_bindings&&t._x_bindings[e]!==void 0?t._x_bindings[e]:Eo(t,e,n)}function Sc(t,e,n,i=!0){if(t._x_bindings&&t._x_bindings[e]!==void 0)return t._x_bindings[e];if(t._x_inlineBindings&&t._x_inlineBindings[e]!==void 0){let s=t._x_inlineBindings[e];return s.extract=i,Zr(()=>Ce(t,s.expression))}return Eo(t,e,n)}function Eo(t,e,n){let i=t.getAttribute(e);return i===null?typeof n=="function"?n():n:i===""?!0:vo(e)?!![e,"true"].includes(i):i}function Co(t,e){var n;return function(){var i=this,s=arguments,r=function(){n=null,t.apply(i,s)};clearTimeout(n),n=setTimeout(r,e)}}function bo(t,e){let n;return function(){let i=this,s=arguments;n||(t.apply(i,s),n=!0,setTimeout(()=>n=!1,e))}}function wo({get:t,set:e},{get:n,set:i}){let s=!0,r,o=Ke(()=>{const a=t(),l=n();if(s)i(On(a)),s=!1,r=JSON.stringify(a);else{const c=JSON.stringify(a);c!==r?(i(On(a)),r=c):(e(On(l)),r=JSON.stringify(l))}JSON.stringify(n()),JSON.stringify(t())});return()=>{St(o)}}function On(t){return typeof t=="object"?JSON.parse(JSON.stringify(t)):t}function Tc(t){(Array.isArray(t)?t:[t]).forEach(n=>n(At))}var pe={},Ds=!1;function xc(t,e){if(Ds||(pe=Ge(pe),Ds=!0),e===void 0)return pe[t];pe[t]=e,typeof e=="object"&&e!==null&&e.hasOwnProperty("init")&&typeof e.init=="function"&&pe[t].init(),Qr(pe[t])}function Nc(){return pe}var Io={};function Ac(t,e){let n=typeof e!="function"?()=>e:e;return t instanceof Element?So(t,n()):(Io[t]=n,()=>{})}function Rc(t){return Object.entries(Io).forEach(([e,n])=>{Object.defineProperty(t,e,{get(){return(...i)=>n(...i)}})}),t}function So(t,e,n){let i=[];for(;i.length;)i.pop()();let s=Object.entries(e).map(([o,a])=>({name:o,value:a})),r=no(s);return s=s.map(o=>r.find(a=>a.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),Bi(t,s,n).map(o=>{i.push(o.runCleanups),o()}),()=>{for(;i.length;)i.pop()()}}var To={};function Oc(t,e){To[t]=e}function Pc(t,e){return Object.entries(To).forEach(([n,i])=>{Object.defineProperty(t,n,{get(){return(...s)=>i.bind(e)(...s)},enumerable:!1})}),t}var kc={get reactive(){return Ge},get release(){return St},get effect(){return Ke},get raw(){return Mr},version:"3.13.3",flushAndStopDeferringMutations:Vl,dontAutoEvaluateFunctions:Zr,disableEffectScheduling:Pl,startObservingMutations:Di,stopObservingMutations:Kr,setReactivityEngine:kl,onAttributeRemoved:qr,onAttributesAdded:zr,closestDataStack:Ue,skipDuringClone:Nt,onlyDuringClone:hc,addRootSelector:Wr,addInitSelector:$r,interceptClone:po,addScopeToNode:Tt,deferMutations:Hl,mapAttributes:Wi,evaluateLater:$,interceptInit:Fl,setEvaluator:Kl,mergeProxies:xt,extractProp:Sc,findClosest:_n,onElRemoved:Oi,closestRoot:fn,destroyTree:Ri,interceptor:Jr,transition:ii,setStyles:pn,mutateDom:D,directive:O,entangle:wo,throttle:bo,debounce:Co,evaluate:Ce,initTree:ne,nextTick:Ui,prefixed:Ye,prefix:Xl,plugin:Tc,magic:J,store:xc,start:Ml,clone:fc,cloneNode:dc,bound:Ic,$data:Yr,walk:ue,data:Oc,bind:Ac},At=kc;function Dc(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}var Mc=Object.freeze({}),Lc=Object.prototype.hasOwnProperty,gn=(t,e)=>Lc.call(t,e),be=Array.isArray,ct=t=>xo(t)==="[object Map]",Fc=t=>typeof t=="string",Vi=t=>typeof t=="symbol",mn=t=>t!==null&&typeof t=="object",Bc=Object.prototype.toString,xo=t=>Bc.call(t),No=t=>xo(t).slice(8,-1),ji=t=>Fc(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Wc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$c=Wc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ao=(t,e)=>t!==e&&(t===t||e===e),ri=new WeakMap,tt=[],X,we=Symbol("iterate"),oi=Symbol("Map key iterate");function Uc(t){return t&&t._isEffect===!0}function Hc(t,e=Mc){Uc(t)&&(t=t.raw);const n=zc(t,e);return e.lazy||n(),n}function Vc(t){t.active&&(Ro(t),t.options.onStop&&t.options.onStop(),t.active=!1)}var jc=0;function zc(t,e){const n=function(){if(!n.active)return t();if(!tt.includes(n)){Ro(n);try{return Gc(),tt.push(n),X=n,t()}finally{tt.pop(),Oo(),X=tt[tt.length-1]}}};return n.id=jc++,n.allowRecurse=!!e.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=t,n.deps=[],n.options=e,n}function Ro(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}var He=!0,zi=[];function qc(){zi.push(He),He=!1}function Gc(){zi.push(He),He=!0}function Oo(){const t=zi.pop();He=t===void 0?!0:t}function Q(t,e,n){if(!He||X===void 0)return;let i=ri.get(t);i||ri.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=new Set),s.has(X)||(s.add(X),X.deps.push(s),X.options.onTrack&&X.options.onTrack({effect:X,target:t,type:e,key:n}))}function de(t,e,n,i,s,r){const o=ri.get(t);if(!o)return;const a=new Set,l=h=>{h&&h.forEach(u=>{(u!==X||u.allowRecurse)&&a.add(u)})};if(e==="clear")o.forEach(l);else if(n==="length"&&be(t))o.forEach((h,u)=>{(u==="length"||u>=i)&&l(h)});else switch(n!==void 0&&l(o.get(n)),e){case"add":be(t)?ji(n)&&l(o.get("length")):(l(o.get(we)),ct(t)&&l(o.get(oi)));break;case"delete":be(t)||(l(o.get(we)),ct(t)&&l(o.get(oi)));break;case"set":ct(t)&&l(o.get(we));break}const c=h=>{h.options.onTrigger&&h.options.onTrigger({effect:h,target:t,key:n,type:e,newValue:i,oldValue:s,oldTarget:r}),h.options.scheduler?h.options.scheduler(h):h()};a.forEach(c)}var Kc=Dc("__proto__,__v_isRef,__isVue"),Po=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Vi)),Yc=ko(),Qc=ko(!0),Ms=Jc();function Jc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=N(this);for(let r=0,o=this.length;r<o;r++)Q(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(N)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){qc();const i=N(this)[e].apply(this,n);return Oo(),i}}),t}function ko(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&r===(t?e?fu:Fo:e?du:Lo).get(i))return i;const o=be(i);if(!t&&o&&gn(Ms,s))return Reflect.get(Ms,s,r);const a=Reflect.get(i,s,r);return(Vi(s)?Po.has(s):Kc(s))||(t||Q(i,"get",s),e)?a:ai(a)?!o||!ji(s)?a.value:a:mn(a)?t?Bo(a):Yi(a):a}}var Xc=Zc();function Zc(t=!1){return function(n,i,s,r){let o=n[i];if(!t&&(s=N(s),o=N(o),!be(n)&&ai(o)&&!ai(s)))return o.value=s,!0;const a=be(n)&&ji(i)?Number(i)<n.length:gn(n,i),l=Reflect.set(n,i,s,r);return n===N(r)&&(a?Ao(s,o)&&de(n,"set",i,s,o):de(n,"add",i,s)),l}}function eu(t,e){const n=gn(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&de(t,"delete",e,void 0,i),s}function tu(t,e){const n=Reflect.has(t,e);return(!Vi(e)||!Po.has(e))&&Q(t,"has",e),n}function nu(t){return Q(t,"iterate",be(t)?"length":we),Reflect.ownKeys(t)}var iu={get:Yc,set:Xc,deleteProperty:eu,has:tu,ownKeys:nu},su={get:Qc,set(t,e){return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},qi=t=>mn(t)?Yi(t):t,Gi=t=>mn(t)?Bo(t):t,Ki=t=>t,yn=t=>Reflect.getPrototypeOf(t);function Ft(t,e,n=!1,i=!1){t=t.__v_raw;const s=N(t),r=N(e);e!==r&&!n&&Q(s,"get",e),!n&&Q(s,"get",r);const{has:o}=yn(s),a=i?Ki:n?Gi:qi;if(o.call(s,e))return a(t.get(e));if(o.call(s,r))return a(t.get(r));t!==s&&t.get(e)}function Bt(t,e=!1){const n=this.__v_raw,i=N(n),s=N(t);return t!==s&&!e&&Q(i,"has",t),!e&&Q(i,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function Wt(t,e=!1){return t=t.__v_raw,!e&&Q(N(t),"iterate",we),Reflect.get(t,"size",t)}function Ls(t){t=N(t);const e=N(this);return yn(e).has.call(e,t)||(e.add(t),de(e,"add",t,t)),this}function Fs(t,e){e=N(e);const n=N(this),{has:i,get:s}=yn(n);let r=i.call(n,t);r?Mo(n,i,t):(t=N(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?Ao(e,o)&&de(n,"set",t,e,o):de(n,"add",t,e),this}function Bs(t){const e=N(this),{has:n,get:i}=yn(e);let s=n.call(e,t);s?Mo(e,n,t):(t=N(t),s=n.call(e,t));const r=i?i.call(e,t):void 0,o=e.delete(t);return s&&de(e,"delete",t,void 0,r),o}function Ws(){const t=N(this),e=t.size!==0,n=ct(t)?new Map(t):new Set(t),i=t.clear();return e&&de(t,"clear",void 0,void 0,n),i}function $t(t,e){return function(i,s){const r=this,o=r.__v_raw,a=N(o),l=e?Ki:t?Gi:qi;return!t&&Q(a,"iterate",we),o.forEach((c,h)=>i.call(s,l(c),l(h),r))}}function Ut(t,e,n){return function(...i){const s=this.__v_raw,r=N(s),o=ct(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),h=n?Ki:e?Gi:qi;return!e&&Q(r,"iterate",l?oi:we),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function oe(t){return function(...e){{const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${$c(t)} operation ${n}failed: target is readonly.`,N(this))}return t==="delete"?!1:this}}function ru(){const t={get(r){return Ft(this,r)},get size(){return Wt(this)},has:Bt,add:Ls,set:Fs,delete:Bs,clear:Ws,forEach:$t(!1,!1)},e={get(r){return Ft(this,r,!1,!0)},get size(){return Wt(this)},has:Bt,add:Ls,set:Fs,delete:Bs,clear:Ws,forEach:$t(!1,!0)},n={get(r){return Ft(this,r,!0)},get size(){return Wt(this,!0)},has(r){return Bt.call(this,r,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:$t(!0,!1)},i={get(r){return Ft(this,r,!0,!0)},get size(){return Wt(this,!0)},has(r){return Bt.call(this,r,!0)},add:oe("add"),set:oe("set"),delete:oe("delete"),clear:oe("clear"),forEach:$t(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ut(r,!1,!1),n[r]=Ut(r,!0,!1),e[r]=Ut(r,!1,!0),i[r]=Ut(r,!0,!0)}),[t,n,e,i]}var[ou,au,lu,cu]=ru();function Do(t,e){const n=e?t?cu:lu:t?au:ou;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(gn(n,s)&&s in i?n:i,s,r)}var uu={get:Do(!1,!1)},hu={get:Do(!0,!1)};function Mo(t,e,n){const i=N(n);if(i!==n&&e.call(t,i)){const s=No(t);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Lo=new WeakMap,du=new WeakMap,Fo=new WeakMap,fu=new WeakMap;function _u(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pu(t){return t.__v_skip||!Object.isExtensible(t)?0:_u(No(t))}function Yi(t){return t&&t.__v_isReadonly?t:Wo(t,!1,iu,uu,Lo)}function Bo(t){return Wo(t,!0,su,hu,Fo)}function Wo(t,e,n,i,s){if(!mn(t))return console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=pu(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function N(t){return t&&N(t.__v_raw)||t}function ai(t){return!!(t&&t.__v_isRef===!0)}J("nextTick",()=>Ui);J("dispatch",t=>at.bind(at,t));J("watch",(t,{evaluateLater:e,effect:n})=>(i,s)=>{let r=e(i),o=!0,a,l=n(()=>r(c=>{JSON.stringify(c),o?a=c:queueMicrotask(()=>{s(c,a),a=c}),o=!1}));t._x_effects.delete(l)});J("store",Nc);J("data",t=>Yr(t));J("root",t=>fn(t));J("refs",t=>(t._x_refs_proxy||(t._x_refs_proxy=xt(gu(t))),t._x_refs_proxy));function gu(t){let e=[],n=t;for(;n;)n._x_refs&&e.push(n._x_refs),n=n.parentNode;return e}var Pn={};function $o(t){return Pn[t]||(Pn[t]=0),++Pn[t]}function mu(t,e){return _n(t,n=>{if(n._x_ids&&n._x_ids[e])return!0})}function yu(t,e){t._x_ids||(t._x_ids={}),t._x_ids[e]||(t._x_ids[e]=$o(e))}J("id",t=>(e,n=null)=>{let i=mu(t,e),s=i?i._x_ids[e]:$o(e);return n?`${e}-${s}-${n}`:`${e}-${s}`});J("el",t=>t);Uo("Focus","focus","focus");Uo("Persist","persist","persist");function Uo(t,e,n){J(e,i=>te(`You can't use [$${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`,i))}O("modelable",(t,{expression:e},{effect:n,evaluateLater:i,cleanup:s})=>{let r=i(e),o=()=>{let h;return r(u=>h=u),h},a=i(`${e} = __placeholder`),l=h=>a(()=>{},{scope:{__placeholder:h}}),c=o();l(c),queueMicrotask(()=>{if(!t._x_model)return;t._x_removeModelListeners.default();let h=t._x_model.get,u=t._x_model.set,d=wo({get(){return h()},set(_){u(_)}},{get(){return o()},set(_){l(_)}});s(d)})});O("teleport",(t,{modifiers:e,expression:n},{cleanup:i})=>{t.tagName.toLowerCase()!=="template"&&te("x-teleport can only be used on a <template> tag",t);let s=$s(n),r=t.content.cloneNode(!0).firstElementChild;t._x_teleport=r,r._x_teleportBack=t,t.setAttribute("data-teleport-template",!0),r.setAttribute("data-teleport-target",!0),t._x_forwardEvents&&t._x_forwardEvents.forEach(a=>{r.addEventListener(a,l=>{l.stopPropagation(),t.dispatchEvent(new l.constructor(l.type,l))})}),Tt(r,{},t);let o=(a,l,c)=>{c.includes("prepend")?l.parentNode.insertBefore(a,l):c.includes("append")?l.parentNode.insertBefore(a,l.nextSibling):l.appendChild(a)};D(()=>{o(r,s,e),ne(r),r._x_ignore=!0}),t._x_teleportPutBack=()=>{let a=$s(n);D(()=>{o(t._x_teleport,a,e)})},i(()=>r.remove())});var vu=document.createElement("div");function $s(t){let e=Nt(()=>document.querySelector(t),()=>vu)();return e||te(`Cannot find x-teleport element for selector: "${t}"`),e}var Ho=()=>{};Ho.inline=(t,{modifiers:e},{cleanup:n})=>{e.includes("self")?t._x_ignoreSelf=!0:t._x_ignore=!0,n(()=>{e.includes("self")?delete t._x_ignoreSelf:delete t._x_ignore})};O("ignore",Ho);O("effect",Nt((t,{expression:e},{effect:n})=>{n($(t,e))}));function li(t,e,n,i){let s=t,r=l=>i(l),o={},a=(l,c)=>h=>c(l,h);if(n.includes("dot")&&(e=Eu(e)),n.includes("camel")&&(e=Cu(e)),n.includes("passive")&&(o.passive=!0),n.includes("capture")&&(o.capture=!0),n.includes("window")&&(s=window),n.includes("document")&&(s=document),n.includes("debounce")){let l=n[n.indexOf("debounce")+1]||"invalid-wait",c=Kt(l.split("ms")[0])?Number(l.split("ms")[0]):250;r=Co(r,c)}if(n.includes("throttle")){let l=n[n.indexOf("throttle")+1]||"invalid-wait",c=Kt(l.split("ms")[0])?Number(l.split("ms")[0]):250;r=bo(r,c)}return n.includes("prevent")&&(r=a(r,(l,c)=>{c.preventDefault(),l(c)})),n.includes("stop")&&(r=a(r,(l,c)=>{c.stopPropagation(),l(c)})),n.includes("self")&&(r=a(r,(l,c)=>{c.target===t&&l(c)})),(n.includes("away")||n.includes("outside"))&&(s=document,r=a(r,(l,c)=>{t.contains(c.target)||c.target.isConnected!==!1&&(t.offsetWidth<1&&t.offsetHeight<1||t._x_isShown!==!1&&l(c))})),n.includes("once")&&(r=a(r,(l,c)=>{l(c),s.removeEventListener(e,r,o)})),r=a(r,(l,c)=>{wu(e)&&Iu(c,n)||l(c)}),s.addEventListener(e,r,o),()=>{s.removeEventListener(e,r,o)}}function Eu(t){return t.replace(/-/g,".")}function Cu(t){return t.toLowerCase().replace(/-(\w)/g,(e,n)=>n.toUpperCase())}function Kt(t){return!Array.isArray(t)&&!isNaN(t)}function bu(t){return[" ","_"].includes(t)?t:t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function wu(t){return["keydown","keyup"].includes(t)}function Iu(t,e){let n=e.filter(r=>!["window","document","prevent","stop","once","capture"].includes(r));if(n.includes("debounce")){let r=n.indexOf("debounce");n.splice(r,Kt((n[r+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.includes("throttle")){let r=n.indexOf("throttle");n.splice(r,Kt((n[r+1]||"invalid-wait").split("ms")[0])?2:1)}if(n.length===0||n.length===1&&Us(t.key).includes(n[0]))return!1;const s=["ctrl","shift","alt","meta","cmd","super"].filter(r=>n.includes(r));return n=n.filter(r=>!s.includes(r)),!(s.length>0&&s.filter(o=>((o==="cmd"||o==="super")&&(o="meta"),t[`${o}Key`])).length===s.length&&Us(t.key).includes(n[0]))}function Us(t){if(!t)return[];t=bu(t);let e={ctrl:"control",slash:"/",space:" ",spacebar:" ",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",equal:"=",minus:"-",underscore:"_"};return e[t]=t,Object.keys(e).map(n=>{if(e[n]===t)return n}).filter(n=>n)}O("model",(t,{modifiers:e,expression:n},{effect:i,cleanup:s})=>{let r=t;e.includes("parent")&&(r=t.parentNode);let o=$(r,n),a;typeof n=="string"?a=$(r,`${n} = __placeholder`):typeof n=="function"&&typeof n()=="string"?a=$(r,`${n()} = __placeholder`):a=()=>{};let l=()=>{let d;return o(_=>d=_),Hs(d)?d.get():d},c=d=>{let _;o(g=>_=g),Hs(_)?_.set(d):a(()=>{},{scope:{__placeholder:d}})};typeof n=="string"&&t.type==="radio"&&D(()=>{t.hasAttribute("name")||t.setAttribute("name",n)});var h=t.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(t.type)||e.includes("lazy")?"change":"input";let u=he?()=>{}:li(t,h,e,d=>{c(Su(t,e,d,l()))});if(e.includes("fill")&&([null,""].includes(l())||t.type==="checkbox"&&Array.isArray(l()))&&t.dispatchEvent(new Event(h,{})),t._x_removeModelListeners||(t._x_removeModelListeners={}),t._x_removeModelListeners.default=u,s(()=>t._x_removeModelListeners.default()),t.form){let d=li(t.form,"reset",[],_=>{Ui(()=>t._x_model&&t._x_model.set(t.value))});s(()=>d())}t._x_model={get(){return l()},set(d){c(d)}},t._x_forceModelUpdate=d=>{d===void 0&&typeof n=="string"&&n.match(/\./)&&(d=""),window.fromModel=!0,D(()=>mo(t,"value",d)),delete window.fromModel},i(()=>{let d=l();e.includes("unintrusive")&&document.activeElement.isSameNode(t)||t._x_forceModelUpdate(d)})});function Su(t,e,n,i){return D(()=>{if(n instanceof CustomEvent&&n.detail!==void 0)return n.detail!==null&&n.detail!==void 0?n.detail:n.target.value;if(t.type==="checkbox")if(Array.isArray(i)){let s=null;return e.includes("number")?s=kn(n.target.value):e.includes("boolean")?s=zt(n.target.value):s=n.target.value,n.target.checked?i.concat([s]):i.filter(r=>!Tu(r,s))}else return n.target.checked;else return t.tagName.toLowerCase()==="select"&&t.multiple?e.includes("number")?Array.from(n.target.selectedOptions).map(s=>{let r=s.value||s.text;return kn(r)}):e.includes("boolean")?Array.from(n.target.selectedOptions).map(s=>{let r=s.value||s.text;return zt(r)}):Array.from(n.target.selectedOptions).map(s=>s.value||s.text):e.includes("number")?kn(n.target.value):e.includes("boolean")?zt(n.target.value):e.includes("trim")?n.target.value.trim():n.target.value})}function kn(t){let e=t?parseFloat(t):null;return xu(e)?e:t}function Tu(t,e){return t==e}function xu(t){return!Array.isArray(t)&&!isNaN(t)}function Hs(t){return t!==null&&typeof t=="object"&&typeof t.get=="function"&&typeof t.set=="function"}O("cloak",t=>queueMicrotask(()=>D(()=>t.removeAttribute(Ye("cloak")))));$r(()=>`[${Ye("init")}]`);O("init",Nt((t,{expression:e},{evaluate:n})=>typeof e=="string"?!!e.trim()&&n(e,{},!1):n(e,{},!1)));O("text",(t,{expression:e},{effect:n,evaluateLater:i})=>{let s=i(e);n(()=>{s(r=>{D(()=>{t.textContent=r})})})});O("html",(t,{expression:e},{effect:n,evaluateLater:i})=>{let s=i(e);n(()=>{s(r=>{D(()=>{t.innerHTML=r,t._x_ignoreSelf=!0,ne(t),delete t._x_ignoreSelf})})})});Wi(ro(":",oo(Ye("bind:"))));var Vo=(t,{value:e,modifiers:n,expression:i,original:s},{effect:r})=>{if(!e){let a={};Rc(a),$(t,i)(c=>{So(t,c,s)},{scope:a});return}if(e==="key")return Nu(t,i);if(t._x_inlineBindings&&t._x_inlineBindings[e]&&t._x_inlineBindings[e].extract)return;let o=$(t,i);r(()=>o(a=>{a===void 0&&typeof i=="string"&&i.match(/\./)&&(a=""),D(()=>mo(t,e,a,n))}))};Vo.inline=(t,{value:e,modifiers:n,expression:i})=>{e&&(t._x_inlineBindings||(t._x_inlineBindings={}),t._x_inlineBindings[e]={expression:i,extract:!1})};O("bind",Vo);function Nu(t,e){t._x_keyExpression=e}Wr(()=>`[${Ye("data")}]`);O("data",(t,{expression:e},{cleanup:n})=>{if(Au(t))return;e=e===""?"{}":e;let i={};Qn(i,t);let s={};Pc(s,i);let r=Ce(t,e,{scope:s});(r===void 0||r===!0)&&(r={}),Qn(r,t);let o=Ge(r);Qr(o);let a=Tt(t,o);o.init&&Ce(t,o.init),n(()=>{o.destroy&&Ce(t,o.destroy),a()})});po((t,e)=>{t._x_dataStack&&(e._x_dataStack=t._x_dataStack,e.setAttribute("data-has-alpine-state",!0))});function Au(t){return he?si?!0:t.hasAttribute("data-has-alpine-state"):!1}O("show",(t,{modifiers:e,expression:n},{effect:i})=>{let s=$(t,n);t._x_doHide||(t._x_doHide=()=>{D(()=>{t.style.setProperty("display","none",e.includes("important")?"important":void 0)})}),t._x_doShow||(t._x_doShow=()=>{D(()=>{t.style.length===1&&t.style.display==="none"?t.removeAttribute("style"):t.style.removeProperty("display")})});let r=()=>{t._x_doHide(),t._x_isShown=!1},o=()=>{t._x_doShow(),t._x_isShown=!0},a=()=>setTimeout(o),l=ni(u=>u?o():r(),u=>{typeof t._x_toggleAndCascadeWithTransitions=="function"?t._x_toggleAndCascadeWithTransitions(t,u,o,r):u?a():r()}),c,h=!0;i(()=>s(u=>{!h&&u===c||(e.includes("immediate")&&(u?a():r()),l(u),c=u,h=!1)}))});O("for",(t,{expression:e},{effect:n,cleanup:i})=>{let s=Ou(e),r=$(t,s.items),o=$(t,t._x_keyExpression||"index");t._x_prevKeys=[],t._x_lookup={},n(()=>Ru(t,s,r,o)),i(()=>{Object.values(t._x_lookup).forEach(a=>a.remove()),delete t._x_prevKeys,delete t._x_lookup})});function Ru(t,e,n,i){let s=o=>typeof o=="object"&&!Array.isArray(o),r=t;n(o=>{Pu(o)&&o>=0&&(o=Array.from(Array(o).keys(),p=>p+1)),o===void 0&&(o=[]);let a=t._x_lookup,l=t._x_prevKeys,c=[],h=[];if(s(o))o=Object.entries(o).map(([p,C])=>{let A=Vs(e,C,p,o);i(P=>h.push(P),{scope:{index:p,...A}}),c.push(A)});else for(let p=0;p<o.length;p++){let C=Vs(e,o[p],p,o);i(A=>h.push(A),{scope:{index:p,...C}}),c.push(C)}let u=[],d=[],_=[],g=[];for(let p=0;p<l.length;p++){let C=l[p];h.indexOf(C)===-1&&_.push(C)}l=l.filter(p=>!_.includes(p));let w="template";for(let p=0;p<h.length;p++){let C=h[p],A=l.indexOf(C);if(A===-1)l.splice(p,0,C),u.push([w,p]);else if(A!==p){let P=l.splice(p,1)[0],U=l.splice(A-1,1)[0];l.splice(p,0,U),l.splice(A,0,P),d.push([P,U])}else g.push(C);w=C}for(let p=0;p<_.length;p++){let C=_[p];a[C]._x_effects&&a[C]._x_effects.forEach(Dr),a[C].remove(),a[C]=null,delete a[C]}for(let p=0;p<d.length;p++){let[C,A]=d[p],P=a[C],U=a[A],Pe=document.createElement("div");D(()=>{U||te('x-for ":key" is undefined or invalid',r),U.after(Pe),P.after(U),U._x_currentIfEl&&U.after(U._x_currentIfEl),Pe.before(P),P._x_currentIfEl&&P.after(P._x_currentIfEl),Pe.remove()}),U._x_refreshXForScope(c[h.indexOf(A)])}for(let p=0;p<u.length;p++){let[C,A]=u[p],P=C==="template"?r:a[C];P._x_currentIfEl&&(P=P._x_currentIfEl);let U=c[A],Pe=h[A],Ze=document.importNode(r.content,!0).firstElementChild,As=Ge(U);Tt(Ze,As,r),Ze._x_refreshXForScope=Sl=>{Object.entries(Sl).forEach(([Tl,xl])=>{As[Tl]=xl})},D(()=>{P.after(Ze),ne(Ze)}),typeof Pe=="object"&&te("x-for key cannot be an object, it must be a string or an integer",r),a[Pe]=Ze}for(let p=0;p<g.length;p++)a[g[p]]._x_refreshXForScope(c[h.indexOf(g[p])]);r._x_prevKeys=h})}function Ou(t){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=/^\s*\(|\)\s*$/g,i=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,s=t.match(i);if(!s)return;let r={};r.items=s[2].trim();let o=s[1].replace(n,"").trim(),a=o.match(e);return a?(r.item=o.replace(e,"").trim(),r.index=a[1].trim(),a[2]&&(r.collection=a[2].trim())):r.item=o,r}function Vs(t,e,n,i){let s={};return/^\[.*\]$/.test(t.item)&&Array.isArray(e)?t.item.replace("[","").replace("]","").split(",").map(o=>o.trim()).forEach((o,a)=>{s[o]=e[a]}):/^\{.*\}$/.test(t.item)&&!Array.isArray(e)&&typeof e=="object"?t.item.replace("{","").replace("}","").split(",").map(o=>o.trim()).forEach(o=>{s[o]=e[o]}):s[t.item]=e,t.index&&(s[t.index]=n),t.collection&&(s[t.collection]=i),s}function Pu(t){return!Array.isArray(t)&&!isNaN(t)}function jo(){}jo.inline=(t,{expression:e},{cleanup:n})=>{let i=fn(t);i._x_refs||(i._x_refs={}),i._x_refs[e]=t,n(()=>delete i._x_refs[e])};O("ref",jo);O("if",(t,{expression:e},{effect:n,cleanup:i})=>{t.tagName.toLowerCase()!=="template"&&te("x-if can only be used on a <template> tag",t);let s=$(t,e),r=()=>{if(t._x_currentIfEl)return t._x_currentIfEl;let a=t.content.cloneNode(!0).firstElementChild;return Tt(a,{},t),D(()=>{t.after(a),ne(a)}),t._x_currentIfEl=a,t._x_undoIf=()=>{ue(a,l=>{l._x_effects&&l._x_effects.forEach(Dr)}),a.remove(),delete t._x_currentIfEl},a},o=()=>{t._x_undoIf&&(t._x_undoIf(),delete t._x_undoIf)};n(()=>s(a=>{a?r():o()})),i(()=>t._x_undoIf&&t._x_undoIf())});O("id",(t,{expression:e},{evaluate:n})=>{n(e).forEach(s=>yu(t,s))});Wi(ro("@",oo(Ye("on:"))));O("on",Nt((t,{value:e,modifiers:n,expression:i},{cleanup:s})=>{let r=i?$(t,i):()=>{};t.tagName.toLowerCase()==="template"&&(t._x_forwardEvents||(t._x_forwardEvents=[]),t._x_forwardEvents.includes(e)||t._x_forwardEvents.push(e));let o=li(t,e,n,a=>{r(()=>{},{scope:{$event:a},params:[a]})});s(()=>o())}));vn("Collapse","collapse","collapse");vn("Intersect","intersect","intersect");vn("Focus","trap","focus");vn("Mask","mask","mask");function vn(t,e,n){O(e,i=>te(`You can't use [x-${e}] without first installing the "${t}" plugin here: https://alpinejs.dev/plugins/${n}`,i))}At.setEvaluator(to);At.setReactivityEngine({reactive:Yi,effect:Hc,release:Vc,raw:N});var ku=At,zo=ku;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(t,e){if(!t)throw Qe(e)},Qe=function(t){return new Error("Firebase Database ("+qo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Du=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Qi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),i.push(n[h],n[u],n[d],n[_])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Go(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Du(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new Mu;const d=r<<2|a>>4;if(i.push(d),c!==64){const _=a<<4&240|c>>2;if(i.push(_),u!==64){const g=c<<6&192|u;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Mu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ko=function(t){const e=Go(t);return Qi.encodeByteArray(e,!0)},Yt=function(t){return Ko(t).replace(/\./g,"")},ci=function(t){try{return Qi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){return Yo(void 0,t)}function Yo(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Fu(n)||(t[n]=Yo(t[n],e[n]));return t}function Fu(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=()=>Bu().__FIREBASE_DEFAULTS__,$u=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Uu=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ci(t[1]);return e&&JSON.parse(e)},Qo=()=>{try{return Wu()||$u()||Uu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hu=t=>{var e,n;return(n=(e=Qo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vu=t=>{const e=Hu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Jo=()=>{var t;return(t=Qo())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Yt(JSON.stringify(n)),Yt(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zu())}function qu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zo(){return qo.NODE_ADMIN===!0}function Gu(){try{return typeof indexedDB=="object"}catch{return!1}}function Ku(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="FirebaseError";class Rt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Yu,Object.setPrototypeOf(this,Rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ea.prototype.create)}}class ea{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Qu(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Rt(s,a,i)}}function Qu(t,e){return t.replace(Ju,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Ju=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){return JSON.parse(t)}function F(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=pt(ci(r[0])||""),n=pt(ci(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Xu=function(t){const e=ta(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Zu=function(t){const e=ta(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ve(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function js(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qt(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function ui(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(zs(r)&&zs(o)){if(!ui(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function zs(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)i[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function na(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,f(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},En=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t){return t&&t._delegate?t._delegate:t}class gt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ji;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rh(e))try{this.getOrInitializeService({instanceIdentifier:ge})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ge){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ge){return this.instances.has(e)}getOptions(e=ge){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:sh(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ge){return this.component?this.component.multipleInstances?e:ge:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sh(t){return t===ge?void 0:t}function rh(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ih(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(S||(S={}));const ah={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},lh=S.INFO,ch={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},uh=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=ch[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ia{constructor(e){this.name=e,this._logLevel=lh,this._logHandler=uh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ah[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const hh=(t,e)=>e.some(n=>t instanceof n);let qs,Gs;function dh(){return qs||(qs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fh(){return Gs||(Gs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sa=new WeakMap,hi=new WeakMap,ra=new WeakMap,Dn=new WeakMap,Xi=new WeakMap;function _h(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ae(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sa.set(n,t)}).catch(()=>{}),Xi.set(e,t),e}function ph(t){if(hi.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});hi.set(t,e)}let di={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ra.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ae(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gh(t){di=t(di)}function mh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Mn(this),e,...n);return ra.set(i,e.sort?e.sort():[e]),ae(i)}:fh().includes(t)?function(...e){return t.apply(Mn(this),e),ae(sa.get(this))}:function(...e){return ae(t.apply(Mn(this),e))}}function yh(t){return typeof t=="function"?mh(t):(t instanceof IDBTransaction&&ph(t),hh(t,dh())?new Proxy(t,di):t)}function ae(t){if(t instanceof IDBRequest)return _h(t);if(Dn.has(t))return Dn.get(t);const e=yh(t);return e!==t&&(Dn.set(t,e),Xi.set(e,t)),e}const Mn=t=>Xi.get(t);function vh(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=ae(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ae(o.result),l.oldVersion,l.newVersion,ae(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Eh=["get","getKey","getAll","getAllKeys","count"],Ch=["put","add","delete","clear"],Ln=new Map;function Ks(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ln.get(e))return Ln.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Ch.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Eh.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Ln.set(e,r),r}gh(t=>({...t,get:(e,n,i)=>Ks(e,n)||t.get(e,n,i),has:(e,n)=>!!Ks(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wh(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function wh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fi="@firebase/app",Ys="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=new ia("@firebase/app"),Ih="@firebase/app-compat",Sh="@firebase/analytics-compat",Th="@firebase/analytics",xh="@firebase/app-check-compat",Nh="@firebase/app-check",Ah="@firebase/auth",Rh="@firebase/auth-compat",Oh="@firebase/database",Ph="@firebase/database-compat",kh="@firebase/functions",Dh="@firebase/functions-compat",Mh="@firebase/installations",Lh="@firebase/installations-compat",Fh="@firebase/messaging",Bh="@firebase/messaging-compat",Wh="@firebase/performance",$h="@firebase/performance-compat",Uh="@firebase/remote-config",Hh="@firebase/remote-config-compat",Vh="@firebase/storage",jh="@firebase/storage-compat",zh="@firebase/firestore",qh="@firebase/firestore-compat",Gh="firebase",Kh="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i="[DEFAULT]",Yh={[fi]:"fire-core",[Ih]:"fire-core-compat",[Th]:"fire-analytics",[Sh]:"fire-analytics-compat",[Nh]:"fire-app-check",[xh]:"fire-app-check-compat",[Ah]:"fire-auth",[Rh]:"fire-auth-compat",[Oh]:"fire-rtdb",[Ph]:"fire-rtdb-compat",[kh]:"fire-fn",[Dh]:"fire-fn-compat",[Mh]:"fire-iid",[Lh]:"fire-iid-compat",[Fh]:"fire-fcm",[Bh]:"fire-fcm-compat",[Wh]:"fire-perf",[$h]:"fire-perf-compat",[Uh]:"fire-rc",[Hh]:"fire-rc-compat",[Vh]:"fire-gcs",[jh]:"fire-gcs-compat",[zh]:"fire-fst",[qh]:"fire-fst-compat","fire-js":"fire-js",[Gh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Map,pi=new Map;function Qh(t,e){try{t.container.addComponent(e)}catch(n){Se.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xt(t){const e=t.name;if(pi.has(e))return Se.debug(`There were multiple attempts to register component ${e}.`),!1;pi.set(e,t);for(const n of Jt.values())Qh(n,t);return!0}function Jh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},le=new ea("app","Firebase",Xh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw le.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=Kh;function oa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:_i,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw le.create("bad-app-name",{appName:String(s)});if(n||(n=Jo()),!n)throw le.create("no-options");const r=Jt.get(s);if(r){if(ui(n,r.options)&&ui(i,r.config))return r;throw le.create("duplicate-app",{appName:s})}const o=new oh(s);for(const l of pi.values())o.addComponent(l);const a=new Zh(n,i,o);return Jt.set(s,a),a}function td(t=_i){const e=Jt.get(t);if(!e&&t===_i&&Jo())return oa();if(!e)throw le.create("no-app",{appName:t});return e}function Le(t,e,n){var i;let s=(i=Yh[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Se.warn(a.join(" "));return}Xt(new gt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="firebase-heartbeat-database",id=1,mt="firebase-heartbeat-store";let Fn=null;function aa(){return Fn||(Fn=vh(nd,id,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(mt)}}}).catch(t=>{throw le.create("idb-open",{originalErrorMessage:t.message})})),Fn}async function sd(t){try{return await(await aa()).transaction(mt).objectStore(mt).get(la(t))}catch(e){if(e instanceof Rt)Se.warn(e.message);else{const n=le.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Se.warn(n.message)}}}async function Qs(t,e){try{const i=(await aa()).transaction(mt,"readwrite");await i.objectStore(mt).put(e,la(t)),await i.done}catch(n){if(n instanceof Rt)Se.warn(n.message);else{const i=le.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Se.warn(i.message)}}}function la(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=1024,od=30*24*60*60*1e3;class ad{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cd(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Js();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=od}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Js(),{heartbeatsToSend:i,unsentEntries:s}=ld(this._heartbeatsCache.heartbeats),r=Yt(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Js(){return new Date().toISOString().substring(0,10)}function ld(t,e=rd){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Xs(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xs(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class cd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gu()?Ku().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sd(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qs(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qs(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xs(t){return Yt(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t){Xt(new gt("platform-logger",e=>new bh(e),"PRIVATE")),Xt(new gt("heartbeat",e=>new ad(e),"PRIVATE")),Le(fi,Ys,t),Le(fi,Ys,"esm2017"),Le("fire-js","")}ud("");var hd="firebase",dd="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le(hd,dd,"app");const Zs="@firebase/database",er="1.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca="";function fd(t){ca=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),F(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:pt(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return se(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _d(e)}}catch{}return new pd},ve=ua("localStorage"),gi=ua("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=new ia("@firebase/database"),gd=function(){let t=1;return function(){return t++}}(),ha=function(t){const e=nh(t),n=new th;n.update(e);const i=n.digest();return Qi.encodeByteArray(i)},Ot=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ot.apply(null,i):typeof i=="object"?e+=F(i):e+=i,e+=" "}return e};let Ie=null,tr=!0;const md=function(t,e){f(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Fe.logLevel=S.VERBOSE,Ie=Fe.log.bind(Fe),e&&gi.set("logging_enabled",!0)):typeof t=="function"?Ie=t:(Ie=null,gi.remove("logging_enabled"))},B=function(...t){if(tr===!0&&(tr=!1,Ie===null&&gi.get("logging_enabled")===!0&&md(!0)),Ie){const e=Ot.apply(null,t);Ie(e)}},Pt=function(t){return function(...e){B(t,...e)}},mi=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ot(...t);Fe.error(e)},ie=function(...t){const e=`FIREBASE FATAL ERROR: ${Ot(...t)}`;throw Fe.error(e),new Error(e)},z=function(...t){const e="FIREBASE WARNING: "+Ot(...t);Fe.warn(e)},yd=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},da=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},vd=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},je="[MIN_NAME]",Te="[MAX_NAME]",Je=function(t,e){if(t===e)return 0;if(t===je||e===Te)return-1;if(e===je||t===Te)return 1;{const n=nr(t),i=nr(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Ed=function(t,e){return t===e?0:t<e?-1:1},nt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+F(e))},Zi=function(t){if(typeof t!="object"||t===null)return F(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=F(e[i]),n+=":",n+=Zi(t[e[i]]);return n+="}",n},fa=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function j(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _a=function(t){f(!da(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},Cd=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},bd=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wd(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Id=new RegExp("^-?(0*)\\d{1,10}$"),Sd=-2147483648,Td=2147483647,nr=function(t){if(Id.test(t)){const e=Number(t);if(e>=Sd&&e<=Td)return e}return null},kt=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw z("Exception was thrown by user callback.",n),e},Math.floor(0))}},xd=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ut=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){z(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(B("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',z(e)}}class Be{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Be.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="5",pa="v",ga="s",ma="r",ya="f",va=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ea="ls",Ca="p",yi="ac",ba="websocket",wa="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ve.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ve.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Rd(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Sa(t,e,n){f(typeof e=="string","typeof type must == string"),f(typeof n=="object","typeof params must == object");let i;if(e===ba)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===wa)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Rd(t)&&(n.ns=t.namespace);const s=[];return j(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.counters_={}}incrementCounter(e,n=1){se(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Lu(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn={},Wn={};function ts(t){const e=t.toString();return Bn[e]||(Bn[e]=new Od),Bn[e]}function Pd(t,e){const n=t.toString();return Wn[n]||(Wn[n]=e()),Wn[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&kt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="start",Dd="close",Md="pLPCommand",Ld="pRTLPCB",Ta="id",xa="pw",Na="ser",Fd="cb",Bd="seg",Wd="ts",$d="d",Ud="dframe",Aa=1870,Ra=30,Hd=Aa-Ra,Vd=25e3,jd=3e4;class De{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pt(e),this.stats_=ts(n),this.urlFn=l=>(this.appCheckToken&&(l[yi]=this.appCheckToken),Sa(n,wa,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new kd(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jd)),vd(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ns((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ir)this.id=a,this.password=l;else if(o===Dd)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[ir]="t",i[Na]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Fd]=this.scriptTagHolder.uniqueCallbackIdentifier),i[pa]=es,this.transportSessionId&&(i[ga]=this.transportSessionId),this.lastSessionId&&(i[Ea]=this.lastSessionId),this.applicationId&&(i[Ca]=this.applicationId),this.appCheckToken&&(i[yi]=this.appCheckToken),typeof location<"u"&&location.hostname&&va.test(location.hostname)&&(i[ma]=ya);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){De.forceAllow_=!0}static forceDisallow(){De.forceDisallow_=!0}static isAvailable(){return De.forceAllow_?!0:!De.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Cd()&&!bd()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=F(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Ko(n),s=fa(i,Hd);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Ud]="t",i[Ta]=e,i[xa]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=F(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ns{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gd(),window[Md+this.uniqueCallbackIdentifier]=e,window[Ld+this.uniqueCallbackIdentifier]=n,this.myIFrame=ns.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){B("frame writing exception"),a.stack&&B(a.stack),B(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||B("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ta]=this.myID,e[xa]=this.myPW,e[Na]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ra+i.length<=Aa;){const o=this.pendingSegs.shift();i=i+"&"+Bd+s+"="+o.seg+"&"+Wd+s+"="+o.ts+"&"+$d+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Vd)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{B("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=16384,qd=45e3;let Zt=null;typeof MozWebSocket<"u"?Zt=MozWebSocket:typeof WebSocket<"u"&&(Zt=WebSocket);class q{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pt(this.connId),this.stats_=ts(n),this.connURL=q.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[pa]=es,typeof location<"u"&&location.hostname&&va.test(location.hostname)&&(o[ma]=ya),n&&(o[ga]=n),i&&(o[Ea]=i),s&&(o[yi]=s),r&&(o[Ca]=r),Sa(e,ba,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ve.set("previous_websocket_failure",!0);try{let i;Zo(),this.mySock=new Zt(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){q.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Zt!==null&&!q.forceDisallow_}static previouslyFailed(){return ve.isInMemoryStorage||ve.get("previous_websocket_failure")===!0}markConnectionHealthy(){ve.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=pt(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=F(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=fa(n,zd);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qd))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}q.responsesRequiredToBeHealthy=2;q.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[De,q]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=q&&q.isAvailable();let i=n&&!q.previouslyFailed();if(e.webSocketOnly&&(n||z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[q];else{const s=this.transports_=[];for(const r of yt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);yt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=6e4,Kd=5e3,Yd=10*1024,Qd=100*1024,$n="t",sr="d",Jd="s",rr="r",Xd="e",or="o",ar="a",lr="n",cr="p",Zd="h";class ef{constructor(e,n,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pt("c:"+this.id+":"),this.transportManager_=new yt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ut(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Qd?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Yd?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($n in e){const n=e[$n];n===ar?this.upgradeIfSecondaryHealthy_():n===rr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===or&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=nt("t",e),i=nt("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:cr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ar,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:lr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=nt("t",e),i=nt("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=nt($n,e);if(sr in e){const i=e[sr];if(n===Zd){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===lr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Jd?this.onConnectionShutdown_(i):n===rr?this.onReset_(i):n===Xd?mi("Server Error: "+i):n===or?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mi("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),es!==i&&z("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),ut(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Gd))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ut(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Kd))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:cr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ve.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Pa{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new en}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=32,hr=768;class I{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function b(){return new I("")}function v(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fe(t){return t.pieces_.length-t.pieceNum_}function T(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new I(t.pieces_,e)}function ka(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function tf(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Da(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ma(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new I(e,0)}function k(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof I)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new I(n,0)}function E(t){return t.pieceNum_>=t.pieces_.length}function H(t,e){const n=v(t),i=v(e);if(n===null)return e;if(n===i)return H(T(t),T(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function is(t,e){if(fe(t)!==fe(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function G(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(fe(t)>fe(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class nf{constructor(e,n){this.errorPrefix_=n,this.parts_=Da(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=En(this.parts_[i]);La(this)}}function sf(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=En(e),La(t)}function rf(t){const e=t.parts_.pop();t.byteLength_-=En(e),t.parts_.length>0&&(t.byteLength_-=1)}function La(t){if(t.byteLength_>hr)throw new Error(t.errorPrefix_+"has a key path longer than "+hr+" bytes ("+t.byteLength_+").");if(t.parts_.length>ur)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ur+") or object contains a cycle "+me(t))}function me(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends Pa{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new ss}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=1e3,of=60*5*1e3,dr=30*1e3,af=1.3,lf=3e4,cf="server_kill",fr=3;class ee extends Oa{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ee.nextPersistentConnectionId_++,this.log_=Pt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=it,this.maxReconnectDelay_=of,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Zo())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ss.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&en.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(F(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Ji,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ee.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&se(e,"w")){const i=Ve(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();z(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Zu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=dr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Xu(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+F(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):mi("Unrecognized action received from server: "+F(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=it,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=it,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lf&&(this.reconnectDelay_=it),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*af)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ee.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?B("getToken() completed but was canceled"):(B("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new ef(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,_=>{z(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(cf)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&z(u),l())}}}interrupt(e){B("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){B("Resuming connection for reason: "+e),delete this.interruptReasons_[e],js(this.interruptReasons_)&&(this.reconnectDelay_=it,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>Zi(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new I(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){B("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=fr&&(this.reconnectDelay_=dr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){B("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=fr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ca.replace(/\./g,"-")]=1,Xo()?e["framework.cordova"]=1:qu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=en.getInstance().currentlyOnline();return js(this.interruptReasons_)&&e}}ee.nextPersistentConnectionId_=0;ee.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new y(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new y(je,e),s=new y(je,n);return this.compare(i,s)!==0}minPost(){return y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ht;class Fa extends bn{static get __EMPTY_NODE(){return Ht}static set __EMPTY_NODE(e){Ht=e}compare(e,n){return Je(e.name,n.name)}isDefinedOn(e){throw Qe("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return y.MIN}maxPost(){return new y(Te,Ht)}makePost(e,n){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new y(e,Ht)}toString(){return".key"}}const We=new Fa;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class L{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??L.RED,this.left=s??V.EMPTY_NODE,this.right=r??V.EMPTY_NODE}copy(e,n,i,s,r){return new L(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return V.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return V.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,L.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,L.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}L.RED=!0;L.BLACK=!1;class uf{copy(e,n,i,s,r){return this}insert(e,n,i){return new L(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class V{constructor(e,n=V.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new V(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,L.BLACK,null,null))}remove(e){return new V(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,L.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Vt(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Vt(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Vt(this.root_,null,this.comparator_,!0,e)}}V.EMPTY_NODE=new uf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t,e){return Je(t.name,e.name)}function rs(t,e){return Je(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vi;function df(t){vi=t}const Ba=function(t){return typeof t=="number"?"number:"+_a(t):"string:"+t},Wa=function(t){if(t.isLeafNode()){const e=t.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&se(e,".sv"),"Priority must be a string or number.")}else f(t===vi||t.isEmpty(),"priority of unexpected type.");f(t===vi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _r;class M{constructor(e,n=M.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Wa(this.priorityNode_)}static set __childrenNodeConstructor(e){_r=e}static get __childrenNodeConstructor(){return _r}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new M(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:M.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return E(e)?this:v(e)===".priority"?this.priorityNode_:M.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:M.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=v(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||fe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,M.__childrenNodeConstructor.EMPTY_NODE.updateChild(T(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ba(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_a(this.value_):e+=this.value_,this.lazyHash_=ha(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===M.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof M.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=M.VALUE_TYPE_ORDER.indexOf(n),r=M.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+n),f(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}M.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $a,Ua;function ff(t){$a=t}function _f(t){Ua=t}class pf extends bn{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Je(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return y.MIN}maxPost(){return new y(Te,new M("[PRIORITY-POST]",Ua))}makePost(e,n){const i=$a(e);return new y(n,new M("[PRIORITY-POST]",i))}toString(){return".priority"}}const R=new pf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=Math.log(2);class mf{constructor(e){const n=r=>parseInt(Math.log(r)/gf,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const tn=function(t,e,n,i){t.sort(e);const s=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=t[l],d=n?n(u):u,new L(d,u.node,L.BLACK,null,null);{const _=parseInt(h/2,10)+l,g=s(l,_),w=s(_+1,c);return u=t[_],d=n?n(u):u,new L(d,u.node,L.BLACK,g,w)}},r=function(l){let c=null,h=null,u=t.length;const d=function(g,w){const p=u-g,C=u;u-=g;const A=s(p+1,C),P=t[p],U=n?n(P):P;_(new L(U,P.node,w,null,A))},_=function(g){c?(c.left=g,c=g):(h=g,c=g)};for(let g=0;g<l.count;++g){const w=l.nextBitIsOne(),p=Math.pow(2,l.count-(g+1));w?d(p,L.BLACK):(d(p,L.BLACK),d(p,L.RED))}return h},o=new mf(t.length),a=r(o);return new V(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un;const ke={};class Z{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return f(ke&&R,"ChildrenNode.ts has not been loaded"),Un=Un||new Z({".priority":ke},{".priority":R}),Un}get(e){const n=Ve(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof V?n:null}hasIndex(e){return se(this.indexSet_,e.toString())}addIndex(e,n){f(e!==We,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(y.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=tn(i,e.getCompare()):a=ke;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Z(h,c)}addToIndexes(e,n){const i=Qt(this.indexes_,(s,r)=>{const o=Ve(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),s===ke)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),tn(a,o.getCompare())}else return ke;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new y(e.name,a))),l.insert(e,e.node)}});return new Z(i,this.indexSet_)}removeFromIndexes(e,n){const i=Qt(this.indexes_,s=>{if(s===ke)return s;{const r=n.get(e.name);return r?s.remove(new y(e.name,r)):s}});return new Z(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let st;class m{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Wa(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return st||(st=new m(new V(rs),null,Z.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||st}updatePriority(e){return this.children_.isEmpty()?this:new m(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?st:n}}getChild(e){const n=v(e);return n===null?this:this.getImmediateChild(n).getChild(T(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(f(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new y(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?st:this.priorityNode_;return new m(s,o,r)}}updateChild(e,n){const i=v(e);if(i===null)return n;{f(v(e)!==".priority"||fe(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(T(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(R,(o,a)=>{n[o]=a.val(e),i++,r&&m.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ba(this.getPriority().val())+":"),this.forEachChild(R,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":ha(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new y(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new y(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,y.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,y.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Dt?-1:0}withIndex(e){if(e===We||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new m(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===We||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(R),s=n.getIterator(R);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===We?null:this.indexMap_.get(e.toString())}}m.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yf extends m{constructor(){super(new V(rs),m.EMPTY_NODE,Z.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return m.EMPTY_NODE}isEmpty(){return!1}}const Dt=new yf;Object.defineProperties(y,{MIN:{value:new y(je,m.EMPTY_NODE)},MAX:{value:new y(Te,Dt)}});Fa.__EMPTY_NODE=m.EMPTY_NODE;M.__childrenNodeConstructor=m;df(Dt);_f(Dt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf=!0;function W(t,e=null){if(t===null)return m.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new M(n,W(e))}if(!(t instanceof Array)&&vf){const n=[];let i=!1;if(j(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=W(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new y(o,l)))}}),n.length===0)return m.EMPTY_NODE;const r=tn(n,hf,o=>o.name,rs);if(i){const o=tn(n,R.getCompare());return new m(r,W(e),new Z({".priority":o},{".priority":R}))}else return new m(r,W(e),Z.Default)}else{let n=m.EMPTY_NODE;return j(t,(i,s)=>{if(se(t,i)&&i.substring(0,1)!=="."){const r=W(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(W(e))}}ff(W);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef extends bn{constructor(e){super(),this.indexPath_=e,f(!E(e)&&v(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Je(e.name,n.name):r}makePost(e,n){const i=W(e),s=m.EMPTY_NODE.updateChild(this.indexPath_,i);return new y(n,s)}maxPost(){const e=m.EMPTY_NODE.updateChild(this.indexPath_,Dt);return new y(Te,e)}toString(){return Da(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf extends bn{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Je(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return y.MIN}maxPost(){return y.MAX}makePost(e,n){const i=W(e);return new y(n,i)}toString(){return".value"}}const bf=new Cf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){return{type:"value",snapshotNode:t}}function ze(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vt(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Et(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function wf(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(vt(n,a)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ze(n,i)):o.trackChildChange(Et(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(R,(s,r)=>{n.hasChild(s)||i.trackChildChange(vt(s,r))}),n.isLeafNode()||n.forEachChild(R,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Et(s,r,o))}else i.trackChildChange(ze(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?m.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.indexedFilter_=new os(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ct.getStartPost_(e),this.endPost_=Ct.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new y(n,i))||(i=m.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=m.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(m.EMPTY_NODE);const r=this;return n.forEachChild(R,(o,a)=>{r.matches(new y(o,a))||(s=s.updateImmediateChild(o,m.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ct(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new y(n,i))||(i=m.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=m.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=m.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(m.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,m.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,_)=>u(_,d)}else o=this.index_.getCompare();const a=e;f(a.numChildren()===this.limit_,"");const l=new y(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(h&&!i.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Et(n,i,u)),a.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(vt(n,u));const w=a.updateImmediateChild(n,m.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(ze(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(vt(c.name,c.node)),r.trackChildChange(ze(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,m.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=R}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:je}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Te}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===R}copy(){const e=new as;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Sf(t){return t.loadsAllData()?new os(t.getIndex()):t.hasLimit()?new If(t):new Ct(t)}function pr(t){const e={};if(t.isDefault())return e;let n;if(t.index_===R?n="$priority":t.index_===bf?n="$value":t.index_===We?n="$key":(f(t.index_ instanceof Ef,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=F(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=F(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+F(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=F(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+F(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function gr(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==R&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Oa{constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Pt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=nn.getListenId_(e,i),a={};this.listens_[o]=a;const l=pr(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),Ve(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,n){const i=nn.getListenId_(e,n);delete this.listens_[i]}get(e){const n=pr(e._queryParams),i=e._path.toString(),s=new Ji;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+eh(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=pt(a.responseText)}catch{z("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&z("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.rootNode_=m.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return{value:null,children:new Map}}function Va(t,e,n){if(E(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=v(e);t.children.has(i)||t.children.set(i,sn());const s=t.children.get(i);e=T(e),Va(s,e,n)}}function Ei(t,e,n){t.value!==null?n(e,t.value):xf(t,(i,s)=>{const r=new I(e.toString()+"/"+i);Ei(s,r,n)})}function xf(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&j(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=10*1e3,Af=30*1e3,Rf=5*60*1e3;class Of{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Nf(e);const i=mr+(Af-mr)*Math.random();ut(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;j(e,(s,r)=>{r>0&&se(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),ut(this.reportStats_.bind(this),Math.floor(Math.random()*2*Rf))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(K||(K={}));function ja(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ls(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cs(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=K.ACK_USER_WRITE,this.source=ja()}operationForChild(e){if(E(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new I(e));return new rn(b(),n,this.revert)}}else return f(v(this.path)===e,"operationForChild called for unrelated child."),new rn(T(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){this.source=e,this.path=n,this.type=K.LISTEN_COMPLETE}operationForChild(e){return E(this.path)?new bt(this.source,b()):new bt(this.source,T(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=K.OVERWRITE}operationForChild(e){return E(this.path)?new xe(this.source,b(),this.snap.getImmediateChild(e)):new xe(this.source,T(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=K.MERGE}operationForChild(e){if(E(this.path)){const n=this.children.subtree(new I(e));return n.isEmpty()?null:n.value?new xe(this.source,b(),n.value):new wt(this.source,b(),n)}else return f(v(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new wt(this.source,T(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(E(e))return this.isFullyInitialized()&&!this.filtered_;const n=v(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function kf(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(wf(o.childName,o.snapshotNode))}),rt(t,s,"child_removed",e,i,n),rt(t,s,"child_added",e,i,n),rt(t,s,"child_moved",r,i,n),rt(t,s,"child_changed",e,i,n),rt(t,s,"value",e,i,n),s}function rt(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Mf(t,a,l)),o.forEach(a=>{const l=Df(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Df(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Mf(t,e,n){if(e.childName==null||n.childName==null)throw Qe("Should only compare child_ events.");const i=new y(e.childName,e.snapshotNode),s=new y(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,e){return{eventCache:t,serverCache:e}}function ht(t,e,n,i){return wn(new Ne(e,n,i),t.serverCache)}function za(t,e,n,i){return wn(t.eventCache,new Ne(e,n,i))}function Ci(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ae(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hn;const Lf=()=>(Hn||(Hn=new V(Ed)),Hn);class x{constructor(e,n=Lf()){this.value=e,this.children=n}static fromObject(e){let n=new x(null);return j(e,(i,s)=>{n=n.set(new I(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:b(),value:this.value};if(E(e))return null;{const i=v(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(T(e),n);return r!=null?{path:k(new I(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(E(e))return this;{const n=v(e),i=this.children.get(n);return i!==null?i.subtree(T(e)):new x(null)}}set(e,n){if(E(e))return new x(n,this.children);{const i=v(e),r=(this.children.get(i)||new x(null)).set(T(e),n),o=this.children.insert(i,r);return new x(this.value,o)}}remove(e){if(E(e))return this.children.isEmpty()?new x(null):new x(null,this.children);{const n=v(e),i=this.children.get(n);if(i){const s=i.remove(T(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new x(null):new x(this.value,r)}else return this}}get(e){if(E(e))return this.value;{const n=v(e),i=this.children.get(n);return i?i.get(T(e)):null}}setTree(e,n){if(E(e))return n;{const i=v(e),r=(this.children.get(i)||new x(null)).setTree(T(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new x(this.value,o)}}fold(e){return this.fold_(b(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(k(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,b(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(E(e))return null;{const r=v(e),o=this.children.get(r);return o?o.findOnPath_(T(e),k(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,b(),n)}foreachOnPath_(e,n,i){if(E(e))return this;{this.value&&i(n,this.value);const s=v(e),r=this.children.get(s);return r?r.foreachOnPath_(T(e),k(n,s),i):new x(null)}}foreach(e){this.foreach_(b(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(k(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.writeTree_=e}static empty(){return new Y(new x(null))}}function dt(t,e,n){if(E(e))return new Y(new x(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=H(s,e);return r=r.updateChild(o,n),new Y(t.writeTree_.set(s,r))}else{const s=new x(n),r=t.writeTree_.setTree(e,s);return new Y(r)}}}function yr(t,e,n){let i=t;return j(n,(s,r)=>{i=dt(i,k(e,s),r)}),i}function vr(t,e){if(E(e))return Y.empty();{const n=t.writeTree_.setTree(e,new x(null));return new Y(n)}}function bi(t,e){return Re(t,e)!=null}function Re(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(H(n.path,e)):null}function Er(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(R,(i,s)=>{e.push(new y(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new y(i,s.value))}),e}function ce(t,e){if(E(e))return t;{const n=Re(t,e);return n!=null?new Y(new x(n)):new Y(t.writeTree_.subtree(e))}}function wi(t){return t.writeTree_.isEmpty()}function qe(t,e){return qa(b(),t.writeTree_,e)}function qa(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=qa(k(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(k(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t,e){return Qa(e,t)}function Ff(t,e,n,i,s){f(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=dt(t.visibleWrites,e,n)),t.lastWriteId=i}function Bf(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Wf(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);f(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&$f(a,i.path)?s=!1:G(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Uf(t),!0;if(i.snap)t.visibleWrites=vr(t.visibleWrites,i.path);else{const a=i.children;j(a,l=>{t.visibleWrites=vr(t.visibleWrites,k(i.path,l))})}return!0}else return!1}function $f(t,e){if(t.snap)return G(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&G(k(t.path,n),e))return!0;return!1}function Uf(t){t.visibleWrites=Ga(t.allWrites,Hf,b()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Hf(t){return t.visible}function Ga(t,e,n){let i=Y.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)G(n,o)?(a=H(n,o),i=dt(i,a,r.snap)):G(o,n)&&(a=H(o,n),i=dt(i,b(),r.snap.getChild(a)));else if(r.children){if(G(n,o))a=H(n,o),i=yr(i,a,r.children);else if(G(o,n))if(a=H(o,n),E(a))i=yr(i,b(),r.children);else{const l=Ve(r.children,v(a));if(l){const c=l.getChild(T(a));i=dt(i,b(),c)}}}else throw Qe("WriteRecord should have .snap or .children")}}return i}function Ka(t,e,n,i,s){if(!i&&!s){const r=Re(t.visibleWrites,e);if(r!=null)return r;{const o=ce(t.visibleWrites,e);if(wi(o))return n;if(n==null&&!bi(o,b()))return null;{const a=n||m.EMPTY_NODE;return qe(o,a)}}}else{const r=ce(t.visibleWrites,e);if(!s&&wi(r))return n;if(!s&&n==null&&!bi(r,b()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(G(c.path,e)||G(e,c.path))},a=Ga(t.allWrites,o,e),l=n||m.EMPTY_NODE;return qe(a,l)}}}function Vf(t,e,n){let i=m.EMPTY_NODE;const s=Re(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(R,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=ce(t.visibleWrites,e);return n.forEachChild(R,(o,a)=>{const l=qe(ce(r,new I(o)),a);i=i.updateImmediateChild(o,l)}),Er(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=ce(t.visibleWrites,e);return Er(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function jf(t,e,n,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=k(e,n);if(bi(t.visibleWrites,r))return null;{const o=ce(t.visibleWrites,r);return wi(o)?s.getChild(n):qe(o,s.getChild(n))}}function zf(t,e,n,i){const s=k(e,n),r=Re(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=ce(t.visibleWrites,s);return qe(o,i.getNode().getImmediateChild(n))}else return null}function qf(t,e){return Re(t.visibleWrites,e)}function Gf(t,e,n,i,s,r,o){let a;const l=ce(t.visibleWrites,e),c=Re(l,b());if(c!=null)a=c;else if(n!=null)a=qe(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let _=d.getNext();for(;_&&h.length<s;)u(_,i)!==0&&h.push(_),_=d.getNext();return h}else return[]}function Kf(){return{visibleWrites:Y.empty(),allWrites:[],lastWriteId:-1}}function on(t,e,n,i){return Ka(t.writeTree,t.treePath,e,n,i)}function hs(t,e){return Vf(t.writeTree,t.treePath,e)}function Cr(t,e,n,i){return jf(t.writeTree,t.treePath,e,n,i)}function an(t,e){return qf(t.writeTree,k(t.treePath,e))}function Yf(t,e,n,i,s,r){return Gf(t.writeTree,t.treePath,e,n,i,s,r)}function ds(t,e,n){return zf(t.writeTree,t.treePath,e,n)}function Ya(t,e){return Qa(k(t.treePath,e),t.writeTree)}function Qa(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;f(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,Et(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,vt(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,ze(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,Et(i,e.snapshotNode,s.oldSnap));else throw Qe("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Ja=new Jf;class fs{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ne(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ds(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ae(this.viewCache_),r=Yf(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(t){return{filter:t}}function Zf(t,e){f(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function e_(t,e,n,i,s){const r=new Qf;let o,a;if(n.type===K.OVERWRITE){const c=n;c.source.fromUser?o=Ii(t,e,c.path,c.snap,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!E(c.path),o=ln(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===K.MERGE){const c=n;c.source.fromUser?o=n_(t,e,c.path,c.children,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Si(t,e,c.path,c.children,i,s,a,r))}else if(n.type===K.ACK_USER_WRITE){const c=n;c.revert?o=r_(t,e,c.path,i,s,r):o=i_(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===K.LISTEN_COMPLETE)o=s_(t,e,n.path,i,r);else throw Qe("Unknown operation type: "+n.type);const l=r.getChanges();return t_(e,o,l),{viewCache:o,changes:l}}function t_(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ci(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Ha(Ci(e)))}}function Xa(t,e,n,i,s,r){const o=e.eventCache;if(an(i,n)!=null)return e;{let a,l;if(E(n))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ae(e),h=c instanceof m?c:m.EMPTY_NODE,u=hs(i,h);a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=on(i,Ae(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=v(n);if(c===".priority"){f(fe(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=Cr(i,n,h,l);u!=null?a=t.filter.updatePriority(h,u):a=o.getNode()}else{const h=T(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Cr(i,n,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=ds(i,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return ht(e,a,o.isFullyInitialized()||E(n),t.filter.filtersNodes())}}function ln(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(E(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),_,null)}else{const _=v(n);if(!l.isCompleteForPath(n)&&fe(n)>1)return e;const g=T(n),p=l.getNode().getImmediateChild(_).updateChild(g,i);_===".priority"?c=h.updatePriority(l.getNode(),p):c=h.updateChild(l.getNode(),_,p,g,Ja,null)}const u=za(e,c,l.isFullyInitialized()||E(n),h.filtersNodes()),d=new fs(s,u,r);return Xa(t,u,n,s,d,a)}function Ii(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const h=new fs(s,e,r);if(E(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ht(e,c,!0,t.filter.filtersNodes());else{const u=v(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=ht(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=T(n),_=a.getNode().getImmediateChild(u);let g;if(E(d))g=i;else{const w=h.getCompleteChild(u);w!=null?ka(d)===".priority"&&w.getChild(Ma(d)).isEmpty()?g=w:g=w.updateChild(d,i):g=m.EMPTY_NODE}if(_.equals(g))l=e;else{const w=t.filter.updateChild(a.getNode(),u,g,d,h,o);l=ht(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function br(t,e){return t.eventCache.isCompleteForChild(e)}function n_(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=k(n,l);br(e,v(h))&&(a=Ii(t,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=k(n,l);br(e,v(h))||(a=Ii(t,a,h,c,s,r,o))}),a}function wr(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Si(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;E(n)?c=i:c=new x(null).setTree(n,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),g=wr(t,_,d);l=ln(t,l,new I(u),g,s,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const _=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!_){const g=e.serverCache.getNode().getImmediateChild(u),w=wr(t,g,d);l=ln(t,l,new I(u),w,s,r,o,a)}}),l}function i_(t,e,n,i,s,r,o){if(an(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(E(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ln(t,e,n,l.getNode().getChild(n),s,r,a,o);if(E(n)){let c=new x(null);return l.getNode().forEachChild(We,(h,u)=>{c=c.set(new I(h),u)}),Si(t,e,n,c,s,r,a,o)}else return e}else{let c=new x(null);return i.foreach((h,u)=>{const d=k(n,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),Si(t,e,n,c,s,r,a,o)}}function s_(t,e,n,i,s){const r=e.serverCache,o=za(e,r.getNode(),r.isFullyInitialized()||E(n),r.isFiltered());return Xa(t,o,n,i,Ja,s)}function r_(t,e,n,i,s,r){let o;if(an(i,n)!=null)return e;{const a=new fs(i,e,s),l=e.eventCache.getNode();let c;if(E(n)||v(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=on(i,Ae(e));else{const u=e.serverCache.getNode();f(u instanceof m,"serverChildren would be complete if leaf node"),h=hs(i,u)}h=h,c=t.filter.updateFullNode(l,h,r)}else{const h=v(n);let u=ds(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=t.filter.updateChild(l,h,u,T(n),a,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,m.EMPTY_NODE,T(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=on(i,Ae(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||an(i,b())!=null,ht(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new os(i.getIndex()),r=Sf(i);this.processor_=Xf(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(m.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(m.EMPTY_NODE,a.getNode(),null),h=new Ne(l,o.isFullyInitialized(),s.filtersNodes()),u=new Ne(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=wn(u,h),this.eventGenerator_=new Pf(this.query_)}get query(){return this.query_}}function a_(t){return t.viewCache_.serverCache.getNode()}function l_(t,e){const n=Ae(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!E(e)&&!n.getImmediateChild(v(e)).isEmpty())?n.getChild(e):null}function Ir(t){return t.eventRegistrations_.length===0}function c_(t,e){t.eventRegistrations_.push(e)}function Sr(t,e,n){const i=[];if(n){f(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function Tr(t,e,n,i){e.type===K.MERGE&&e.source.queryId!==null&&(f(Ae(t.viewCache_),"We should always have a full cache before handling merges"),f(Ci(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=e_(t.processor_,s,e,n,i);return Zf(t.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Za(t,r.changes,r.viewCache.eventCache.getNode(),null)}function u_(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(R,(r,o)=>{i.push(ze(r,o))}),n.isFullyInitialized()&&i.push(Ha(n.getNode())),Za(t,i,n.getNode(),e)}function Za(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return kf(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cn;class h_{constructor(){this.views=new Map}}function d_(t){f(!cn,"__referenceConstructor has already been defined"),cn=t}function f_(){return f(cn,"Reference.ts has not been loaded"),cn}function __(t){return t.views.size===0}function _s(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return f(r!=null,"SyncTree gave us an op for an invalid query."),Tr(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Tr(o,e,n,i));return r}}function p_(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=on(n,s?i:null),l=!1;a?l=!0:i instanceof m?(a=hs(n,i),l=!1):(a=m.EMPTY_NODE,l=!1);const c=wn(new Ne(a,l,!1),new Ne(i,s,!1));return new o_(e,c)}return o}function g_(t,e,n,i,s,r){const o=p_(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),c_(o,n),u_(o,n)}function m_(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=_e(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(Sr(c,n,i)),Ir(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(Sr(l,n,i)),Ir(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!_e(t)&&r.push(new(f_())(e._repo,e._path)),{removed:r,events:o}}function el(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function $e(t,e){let n=null;for(const i of t.views.values())n=n||l_(i,e);return n}function tl(t,e){if(e._queryParams.loadsAllData())return In(t);{const i=e._queryIdentifier;return t.views.get(i)}}function nl(t,e){return tl(t,e)!=null}function _e(t){return In(t)!=null}function In(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un;function y_(t){f(!un,"__referenceConstructor has already been defined"),un=t}function v_(){return f(un,"Reference.ts has not been loaded"),un}let E_=1;class xr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new x(null),this.pendingWriteTree_=Kf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function C_(t,e,n,i,s){return Ff(t.pendingWriteTree_,e,n,i,s),s?Mt(t,new xe(ja(),e,n)):[]}function Me(t,e,n=!1){const i=Bf(t.pendingWriteTree_,e);if(Wf(t.pendingWriteTree_,e)){let r=new x(null);return i.snap!=null?r=r.set(b(),!0):j(i.children,o=>{r=r.set(new I(o),!0)}),Mt(t,new rn(i.path,r,n))}else return[]}function Sn(t,e,n){return Mt(t,new xe(ls(),e,n))}function b_(t,e,n){const i=x.fromObject(n);return Mt(t,new wt(ls(),e,i))}function w_(t,e){return Mt(t,new bt(ls(),e))}function I_(t,e,n){const i=ps(t,n);if(i){const s=gs(i),r=s.path,o=s.queryId,a=H(r,e),l=new bt(cs(o),a);return ms(t,r,l)}else return[]}function Ti(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||nl(o,e))){const l=m_(o,e,n,i);__(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(d,_)=>_e(_));if(h&&!u){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=x_(d);for(let g=0;g<_.length;++g){const w=_[g],p=w.query,C=ol(t,w);t.listenProvider_.startListening(ft(p),hn(t,p),C.hashFn,C.onComplete)}}}!u&&c.length>0&&!i&&(h?t.listenProvider_.stopListening(ft(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(Tn(d));t.listenProvider_.stopListening(ft(d),_)}))}N_(t,c)}return a}function S_(t,e,n,i){const s=ps(t,i);if(s!=null){const r=gs(s),o=r.path,a=r.queryId,l=H(o,e),c=new xe(cs(a),l,n);return ms(t,o,c)}else return[]}function T_(t,e,n,i){const s=ps(t,i);if(s){const r=gs(s),o=r.path,a=r.queryId,l=H(o,e),c=x.fromObject(n),h=new wt(cs(a),l,c);return ms(t,o,h)}else return[]}function Nr(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(d,_)=>{const g=H(d,s);r=r||$e(_,g),o=o||_e(_)});let a=t.syncPointTree_.get(s);a?(o=o||_e(a),r=r||$e(a,b())):(a=new h_,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=m.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((_,g)=>{const w=$e(g,b());w&&(r=r.updateImmediateChild(_,w))}));const c=nl(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Tn(e);f(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=A_();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const h=us(t.pendingWriteTree_,s);let u=g_(a,e,n,h,r,l);if(!c&&!o&&!i){const d=tl(a,e);u=u.concat(R_(t,e,d))}return u}function il(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=H(o,e),c=$e(a,l);if(c)return c});return Ka(s,e,r,n,!0)}function Mt(t,e){return sl(e,t.syncPointTree_,null,us(t.pendingWriteTree_,b()))}function sl(t,e,n,i){if(E(t.path))return rl(t,e,n,i);{const s=e.get(b());n==null&&s!=null&&(n=$e(s,b()));let r=[];const o=v(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=Ya(i,o);r=r.concat(sl(a,l,c,h))}return s&&(r=r.concat(_s(s,t,i,n))),r}}function rl(t,e,n,i){const s=e.get(b());n==null&&s!=null&&(n=$e(s,b()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Ya(i,o),h=t.operationForChild(o);h&&(r=r.concat(rl(h,a,l,c)))}),s&&(r=r.concat(_s(s,t,i,n))),r}function ol(t,e){const n=e.query,i=hn(t,n);return{hashFn:()=>(a_(e)||m.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?I_(t,n._path,i):w_(t,n._path);{const r=wd(s,n);return Ti(t,n,null,r)}}}}function hn(t,e){const n=Tn(e);return t.queryToTagMap.get(n)}function Tn(t){return t._path.toString()+"$"+t._queryIdentifier}function ps(t,e){return t.tagToQueryMap.get(e)}function gs(t){const e=t.indexOf("$");return f(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new I(t.substr(0,e))}}function ms(t,e,n){const i=t.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");const s=us(t.pendingWriteTree_,e);return _s(i,n,s,null)}function x_(t){return t.fold((e,n,i)=>{if(n&&_e(n))return[In(n)];{let s=[];return n&&(s=el(n)),j(i,(r,o)=>{s=s.concat(o)}),s}})}function ft(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(v_())(t._repo,t._path):t}function N_(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=Tn(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function A_(){return E_++}function R_(t,e,n){const i=e._path,s=hn(t,e),r=ol(t,n),o=t.listenProvider_.startListening(ft(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)f(!_e(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!E(c)&&h&&_e(h))return[In(h).query];{let d=[];return h&&(d=d.concat(el(h).map(_=>_.query))),j(u,(_,g)=>{d=d.concat(g)}),d}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(ft(h),hn(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ys(n)}node(){return this.node_}}class vs{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=k(this.path_,e);return new vs(this.syncTree_,n)}node(){return il(this.syncTree_,this.path_)}}const O_=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ar=function(t,e,n){if(!t||typeof t!="object")return t;if(f(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return P_(t[".sv"],e,n);if(typeof t[".sv"]=="object")return k_(t[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},P_=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:f(!1,"Unexpected server value: "+t)}},k_=function(t,e,n){t.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=e.node();if(f(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},D_=function(t,e,n,i){return Es(e,new vs(n,t),i)},M_=function(t,e,n){return Es(t,new ys(e),n)};function Es(t,e,n){const i=t.getPriority().val(),s=Ar(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ar(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new M(a,W(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new M(s))),o.forEachChild(R,(a,l)=>{const c=Es(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function bs(t,e){let n=e instanceof I?e:new I(e),i=t,s=v(n);for(;s!==null;){const r=Ve(i.node.children,s)||{children:{},childCount:0};i=new Cs(s,i,r),n=T(n),s=v(n)}return i}function Xe(t){return t.node.value}function al(t,e){t.node.value=e,xi(t)}function ll(t){return t.node.childCount>0}function L_(t){return Xe(t)===void 0&&!ll(t)}function xn(t,e){j(t.node.children,(n,i)=>{e(new Cs(n,t,i))})}function cl(t,e,n,i){n&&!i&&e(t),xn(t,s=>{cl(s,e,!0,i)}),n&&i&&e(t)}function F_(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Lt(t){return new I(t.parent===null?t.name:Lt(t.parent)+"/"+t.name)}function xi(t){t.parent!==null&&B_(t.parent,t.name,t)}function B_(t,e,n){const i=L_(n),s=se(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,xi(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,xi(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=/[\[\].#$\/\u0000-\u001F\u007F]/,$_=/[\[\].#$\u0000-\u001F\u007F]/,Vn=10*1024*1024,ul=function(t){return typeof t=="string"&&t.length!==0&&!W_.test(t)},hl=function(t){return typeof t=="string"&&t.length!==0&&!$_.test(t)},U_=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),hl(t)},dl=function(t,e,n){const i=n instanceof I?new nf(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+me(i));if(typeof e=="function")throw new Error(t+"contains a function "+me(i)+" with contents = "+e.toString());if(da(e))throw new Error(t+"contains "+e.toString()+" "+me(i));if(typeof e=="string"&&e.length>Vn/3&&En(e)>Vn)throw new Error(t+"contains a string greater than "+Vn+" utf8 bytes "+me(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(j(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ul(o)))throw new Error(t+" contains an invalid key ("+o+") "+me(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sf(i,o),dl(t,a,i),rf(i)}),s&&r)throw new Error(t+' contains ".value" child '+me(i)+" in addition to actual children.")}},fl=function(t,e,n,i){if(!(i&&n===void 0)&&!hl(n))throw new Error(na(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},H_=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),fl(t,e,n,i)},V_=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ul(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!U_(n))throw new Error(na(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _l(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!is(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function pl(t,e,n){_l(t,n),gl(t,i=>is(i,e))}function Oe(t,e,n){_l(t,n),gl(t,i=>G(i,e)||G(e,i))}function gl(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(z_(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function z_(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Ie&&B("event: "+n.toString()),kt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="repo_interrupt",G_=25;class K_{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new j_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=sn(),this.transactionQueueTree_=new Cs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Y_(t,e,n){if(t.stats_=ts(t.repoInfo_),t.forceRestClient_||xd())t.server_=new nn(t.repoInfo_,(i,s,r,o)=>{Rr(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Or(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{F(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new ee(t.repoInfo_,e,(i,s,r,o)=>{Rr(t,i,s,r,o)},i=>{Or(t,i)},i=>{J_(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Pd(t.repoInfo_,()=>new Of(t.stats_,t.server_)),t.infoData_=new Tf,t.infoSyncTree_=new xr({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Sn(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ws(t,"connected",!1),t.serverSyncTree_=new xr({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Oe(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Q_(t){const n=t.infoData_.getNode(new I(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ml(t){return O_({timestamp:Q_(t)})}function Rr(t,e,n,i,s){t.dataUpdateCount++;const r=new I(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Qt(n,c=>W(c));o=T_(t.serverSyncTree_,r,l,s)}else{const l=W(n);o=S_(t.serverSyncTree_,r,l,s)}else if(i){const l=Qt(n,c=>W(c));o=b_(t.serverSyncTree_,r,l)}else{const l=W(n);o=Sn(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ss(t,r)),Oe(t.eventQueue_,a,o)}function Or(t,e){ws(t,"connected",e),e===!1&&Z_(t)}function J_(t,e){j(e,(n,i)=>{ws(t,n,i)})}function ws(t,e,n){const i=new I("/.info/"+e),s=W(n);t.infoData_.updateSnapshot(i,s);const r=Sn(t.infoSyncTree_,i,s);Oe(t.eventQueue_,i,r)}function X_(t){return t.nextWriteId_++}function Z_(t){yl(t,"onDisconnectEvents");const e=ml(t),n=sn();Ei(t.onDisconnect_,b(),(s,r)=>{const o=D_(s,r,t.serverSyncTree_,e);Va(n,s,o)});let i=[];Ei(n,b(),(s,r)=>{i=i.concat(Sn(t.serverSyncTree_,s,r));const o=sp(t,s);Ss(t,o)}),t.onDisconnect_=sn(),Oe(t.eventQueue_,b(),i)}function ep(t,e,n){let i;v(e._path)===".info"?i=Nr(t.infoSyncTree_,e,n):i=Nr(t.serverSyncTree_,e,n),pl(t.eventQueue_,e._path,i)}function Pr(t,e,n){let i;v(e._path)===".info"?i=Ti(t.infoSyncTree_,e,n):i=Ti(t.serverSyncTree_,e,n),pl(t.eventQueue_,e._path,i)}function tp(t){t.persistentConnection_&&t.persistentConnection_.interrupt(q_)}function yl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),B(n,...e)}function vl(t,e,n){return il(t.serverSyncTree_,e,n)||m.EMPTY_NODE}function Is(t,e=t.transactionQueueTree_){if(e||Nn(t,e),Xe(e)){const n=Cl(t,e);f(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&np(t,Lt(e),n)}else ll(e)&&xn(e,n=>{Is(t,n)})}function np(t,e,n){const i=n.map(c=>c.currentWriteId),s=vl(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const h=n[c];f(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=H(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{yl(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(Me(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Nn(t,bs(t.transactionQueueTree_,e)),Is(t,t.transactionQueueTree_),Oe(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)kt(u[d])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{z("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Ss(t,e)}},o)}function Ss(t,e){const n=El(t,e),i=Lt(n),s=Cl(t,n);return ip(t,s,i),i}function ip(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=H(n,l.path);let h=!1,u;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(Me(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=G_)h=!0,u="maxretry",s=s.concat(Me(t.serverSyncTree_,l.currentWriteId,!0));else{const d=vl(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){dl("transaction failed: Data returned ",_,l.path);let g=W(_);typeof _=="object"&&_!=null&&se(_,".priority")||(g=g.updatePriority(d.getPriority()));const p=l.currentWriteId,C=ml(t),A=M_(g,d,C);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=A,l.currentWriteId=X_(t),o.splice(o.indexOf(p),1),s=s.concat(C_(t.serverSyncTree_,l.path,A,l.currentWriteId,l.applyLocally)),s=s.concat(Me(t.serverSyncTree_,p,!0))}else h=!0,u="nodata",s=s.concat(Me(t.serverSyncTree_,l.currentWriteId,!0))}Oe(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}Nn(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)kt(i[a]);Is(t,t.transactionQueueTree_)}function El(t,e){let n,i=t.transactionQueueTree_;for(n=v(e);n!==null&&Xe(i)===void 0;)i=bs(i,n),e=T(e),n=v(e);return i}function Cl(t,e){const n=[];return bl(t,e,n),n.sort((i,s)=>i.order-s.order),n}function bl(t,e,n){const i=Xe(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);xn(e,s=>{bl(t,s,n)})}function Nn(t,e){const n=Xe(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,al(e,n.length>0?n:void 0)}xn(e,i=>{Nn(t,i)})}function sp(t,e){const n=Lt(El(t,e)),i=bs(t.transactionQueueTree_,e);return F_(i,s=>{jn(t,s)}),jn(t,i),cl(i,s=>{jn(t,s)}),n}function jn(t,e){const n=Xe(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(f(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Me(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?al(e,void 0):n.length=r+1,Oe(t.eventQueue_,Lt(e),s);for(let o=0;o<i.length;o++)kt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function op(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):z(`Invalid query segment '${n}' in query '${t}'`)}return e}const kr=function(t,e){const n=ap(t),i=n.namespace;n.domain==="firebase.com"&&ie(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&ie("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||yd();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ia(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new I(n.pathString)}},ap=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(s=rp(t.substring(h,u)));const d=op(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+F(this.snapshot.exportVal())}}class Il{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return E(this._path)?null:ka(this._path)}get ref(){return new re(this._repo,this._path)}get _queryIdentifier(){const e=gr(this._queryParams),n=Zi(e);return n==="{}"?"default":n}get _queryObject(){return gr(this._queryParams)}isEqual(e){if(e=Cn(e),!(e instanceof Ts))return!1;const n=this._repo===e._repo,i=is(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+tf(this._path)}}class re extends Ts{constructor(e,n){super(e,n,new as,!1)}get parent(){const e=Ma(this._path);return e===null?null:new re(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class It{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new I(e),i=dn(this.ref,e);return new It(this._node.getChild(n),i,R)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new It(s,dn(this.ref,i),R)))}hasChild(e){const n=new I(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function cp(t,e){return t=Cn(t),t._checkNotDeleted("ref"),e!==void 0?dn(t._root,e):t._root}function dn(t,e){return t=Cn(t),v(t._path)===null?H_("child","path",e,!1):fl("child","path",e,!1),new re(t._repo,k(t._path,e))}class xs{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new wl("value",this,new It(e.snapshotNode,new re(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Il(this,e,n):null}matches(e){return e instanceof xs?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ns{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Il(this,e,n):null}createEvent(e,n){f(e.childName!=null,"Child events should have a childName.");const i=dn(new re(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new wl(e.type,this,new It(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ns?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function up(t,e,n,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=n,c=(h,u)=>{Pr(t._repo,t,a),l(h,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new lp(n,r||void 0),a=e==="value"?new xs(o):new Ns(e,o);return ep(t._repo,t,a),()=>Pr(t._repo,t,a)}function hp(t,e,n,i){return up(t,"value",e,n,i)}d_(re);y_(re);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="FIREBASE_DATABASE_EMULATOR_HOST",Ni={};let fp=!1;function _p(t,e,n,i){t.repoInfo_=new Ia(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function pp(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||ie("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),B("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=kr(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[dp]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=kr(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const h=s&&l?new Be(Be.OWNER):new Ad(t.name,t.options,e);V_("Invalid Firebase Database URL",o),E(o.path)||ie("Database URL must point to the root of a Firebase Database (not including a child path).");const u=mp(a,t,h,new Nd(t.name,n));return new yp(u,t)}function gp(t,e){const n=Ni[e];(!n||n[t.key]!==t)&&ie(`Database ${e}(${t.repoInfo_}) has already been deleted.`),tp(t),delete n[t.key]}function mp(t,e,n,i){let s=Ni[e.name];s||(s={},Ni[e.name]=s);let r=s[t.toURLString()];return r&&ie("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new K_(t,fp,n,i),s[t.toURLString()]=r,r}class yp{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Y_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new re(this._repo,b())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gp(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ie("Cannot call "+e+" on a deleted database.")}}function vp(t=td(),e){const n=Jh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=Vu("database");i&&Ep(n,...i)}return n}function Ep(t,e,n,i={}){t=Cn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ie("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&ie('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Be(Be.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:ju(i.mockUserToken,t.app.options.projectId);r=new Be(o)}_p(s,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t){fd(ed),Xt(new gt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return pp(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),Le(Zs,er,t),Le(Zs,er,"esm2017")}ee.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ee.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Cp();const bp={apiKey:"AIzaSyCEg1CTlYi7p0aelJQkSHl5tYOYxiqS7dM",authDomain:"ma-shopify-apps.firebaseapp.com",databaseURL:"https://ma-shopify-apps-default-rtdb.firebaseio.com",projectId:"ma-shopify-apps",storageBucket:"ma-shopify-apps.appspot.com",messagingSenderId:"229141588998",appId:"1:229141588998:web:c9c646ce1067d5c964e787",measurementId:"G-0H5VZ3S4EG"},wp=oa(bp),Ip=vp(wp),Sp={dbWatch:function(t,e){const n=cp(Ip,t);hp(n,i=>{e(i.val())})}};window.Alpine=zo;zo.start();window.$fb=Sp;
