var Nl={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(self,()=>(()=>{var t={492:(l,f,p)=>{p.r(f),p.d(f,{afterMain:()=>_e,afterRead:()=>A,afterWrite:()=>at,applyStyles:()=>Ti,arrow:()=>hr,auto:()=>b,basePlacements:()=>v,beforeMain:()=>M,beforeRead:()=>S,beforeWrite:()=>Ae,bottom:()=>C,clippingParents:()=>a,computeStyles:()=>xi,createPopper:()=>Al,createPopperBase:()=>Tl,createPopperLite:()=>Ol,detectOverflow:()=>Nt,end:()=>r,eventListeners:()=>Ni,flip:()=>vr,hide:()=>wr,left:()=>w,main:()=>ae,modifierPhases:()=>tn,offset:()=>Cr,placements:()=>y,popper:()=>h,popperGenerator:()=>Un,popperOffsets:()=>Mi,preventOverflow:()=>br,read:()=>x,reference:()=>d,right:()=>_,start:()=>c,top:()=>m,variationPlacements:()=>g,viewport:()=>u,write:()=>At});var m="top",C="bottom",_="right",w="left",b="auto",v=[m,C,_,w],c="start",r="end",a="clippingParents",u="viewport",h="popper",d="reference",g=v.reduce(function(E,I){return E.concat([I+"-"+c,I+"-"+r])},[]),y=[].concat(v,[b]).reduce(function(E,I){return E.concat([I,I+"-"+c,I+"-"+r])},[]),S="beforeRead",x="read",A="afterRead",M="beforeMain",ae="main",_e="afterMain",Ae="beforeWrite",At="write",at="afterWrite",tn=[S,x,A,M,ae,_e,Ae,At,at];function Fe(E){return E?(E.nodeName||"").toLowerCase():null}function Se(E){if(E==null)return window;if(E.toString()!=="[object Window]"){var I=E.ownerDocument;return I&&I.defaultView||window}return E}function lt(E){return E instanceof Se(E).Element||E instanceof Element}function Oe(E){return E instanceof Se(E).HTMLElement||E instanceof HTMLElement}function Si(E){return typeof ShadowRoot<"u"&&(E instanceof Se(E).ShadowRoot||E instanceof ShadowRoot)}const Ti={name:"applyStyles",enabled:!0,phase:"write",fn:function(E){var I=E.state;Object.keys(I.elements).forEach(function(T){var O=I.styles[T]||{},R=I.attributes[T]||{},k=I.elements[T];Oe(k)&&Fe(k)&&(Object.assign(k.style,O),Object.keys(R).forEach(function(D){var P=R[D];P===!1?k.removeAttribute(D):k.setAttribute(D,P===!0?"":P)}))})},effect:function(E){var I=E.state,T={popper:{position:I.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(I.elements.popper.style,T.popper),I.styles=T,I.elements.arrow&&Object.assign(I.elements.arrow.style,T.arrow),function(){Object.keys(I.elements).forEach(function(O){var R=I.elements[O],k=I.attributes[O]||{},D=Object.keys(I.styles.hasOwnProperty(O)?I.styles[O]:T[O]).reduce(function(P,L){return P[L]="",P},{});Oe(R)&&Fe(R)&&(Object.assign(R.style,D),Object.keys(k).forEach(function(P){R.removeAttribute(P)}))})}},requires:["computeStyles"]};function Ue(E){return E.split("-")[0]}var ct=Math.max,Dn=Math.min,Ot=Math.round;function Ai(){var E=navigator.userAgentData;return E!=null&&E.brands&&Array.isArray(E.brands)?E.brands.map(function(I){return I.brand+"/"+I.version}).join(" "):navigator.userAgent}function or(){return!/^((?!chrome|android).)*safari/i.test(Ai())}function kt(E,I,T){I===void 0&&(I=!1),T===void 0&&(T=!1);var O=E.getBoundingClientRect(),R=1,k=1;I&&Oe(E)&&(R=E.offsetWidth>0&&Ot(O.width)/E.offsetWidth||1,k=E.offsetHeight>0&&Ot(O.height)/E.offsetHeight||1);var D=(lt(E)?Se(E):window).visualViewport,P=!or()&&T,L=(O.left+(P&&D?D.offsetLeft:0))/R,U=(O.top+(P&&D?D.offsetTop:0))/k,F=O.width/R,B=O.height/k;return{width:F,height:B,top:U,right:L+F,bottom:U+B,left:L,x:L,y:U}}function Oi(E){var I=kt(E),T=E.offsetWidth,O=E.offsetHeight;return Math.abs(I.width-T)<=1&&(T=I.width),Math.abs(I.height-O)<=1&&(O=I.height),{x:E.offsetLeft,y:E.offsetTop,width:T,height:O}}function ar(E,I){var T=I.getRootNode&&I.getRootNode();if(E.contains(I))return!0;if(T&&Si(T)){var O=I;do{if(O&&E.isSameNode(O))return!0;O=O.parentNode||O.host}while(O)}return!1}function je(E){return Se(E).getComputedStyle(E)}function yl(E){return["table","td","th"].indexOf(Fe(E))>=0}function Je(E){return((lt(E)?E.ownerDocument:E.document)||window.document).documentElement}function Mn(E){return Fe(E)==="html"?E:E.assignedSlot||E.parentNode||(Si(E)?E.host:null)||Je(E)}function lr(E){return Oe(E)&&je(E).position!=="fixed"?E.offsetParent:null}function nn(E){for(var I=Se(E),T=lr(E);T&&yl(T)&&je(T).position==="static";)T=lr(T);return T&&(Fe(T)==="html"||Fe(T)==="body"&&je(T).position==="static")?I:T||function(O){var R=/firefox/i.test(Ai());if(/Trident/i.test(Ai())&&Oe(O)&&je(O).position==="fixed")return null;var k=Mn(O);for(Si(k)&&(k=k.host);Oe(k)&&["html","body"].indexOf(Fe(k))<0;){var D=je(k);if(D.transform!=="none"||D.perspective!=="none"||D.contain==="paint"||["transform","perspective"].indexOf(D.willChange)!==-1||R&&D.willChange==="filter"||R&&D.filter&&D.filter!=="none")return k;k=k.parentNode}return null}(E)||I}function ki(E){return["top","bottom"].indexOf(E)>=0?"x":"y"}function sn(E,I,T){return ct(E,Dn(I,T))}function cr(E){return Object.assign({},{top:0,right:0,bottom:0,left:0},E)}function ur(E,I){return I.reduce(function(T,O){return T[O]=E,T},{})}const hr={name:"arrow",enabled:!0,phase:"main",fn:function(E){var I,T=E.state,O=E.name,R=E.options,k=T.elements.arrow,D=T.modifiersData.popperOffsets,P=Ue(T.placement),L=ki(P),U=[w,_].indexOf(P)>=0?"height":"width";if(k&&D){var F=function(te,X){return cr(typeof(te=typeof te=="function"?te(Object.assign({},X.rects,{placement:X.placement})):te)!="number"?te:ur(te,v))}(R.padding,T),B=Oi(k),ie=L==="y"?m:w,z=L==="y"?C:_,se=T.rects.reference[U]+T.rects.reference[L]-D[L]-T.rects.popper[U],ee=D[L]-T.rects.reference[L],$=nn(k),ue=$?L==="y"?$.clientHeight||0:$.clientWidth||0:0,ce=se/2-ee/2,Y=F[ie],J=ue-B[U]-F[z],q=ue/2-B[U]/2+ce,G=sn(Y,q,J),Q=L;T.modifiersData[O]=((I={})[Q]=G,I.centerOffset=G-q,I)}},effect:function(E){var I=E.state,T=E.options.element,O=T===void 0?"[data-popper-arrow]":T;O!=null&&(typeof O!="string"||(O=I.elements.popper.querySelector(O)))&&ar(I.elements.popper,O)&&(I.elements.arrow=O)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function xt(E){return E.split("-")[1]}var wl={top:"auto",right:"auto",bottom:"auto",left:"auto"};function dr(E){var I,T=E.popper,O=E.popperRect,R=E.placement,k=E.variation,D=E.offsets,P=E.position,L=E.gpuAcceleration,U=E.adaptive,F=E.roundOffsets,B=E.isFixed,ie=D.x,z=ie===void 0?0:ie,se=D.y,ee=se===void 0?0:se,$=typeof F=="function"?F({x:z,y:ee}):{x:z,y:ee};z=$.x,ee=$.y;var ue=D.hasOwnProperty("x"),ce=D.hasOwnProperty("y"),Y=w,J=m,q=window;if(U){var G=nn(T),Q="clientHeight",te="clientWidth";G===Se(T)&&je(G=Je(T)).position!=="static"&&P==="absolute"&&(Q="scrollHeight",te="scrollWidth"),(R===m||(R===w||R===_)&&k===r)&&(J=C,ee-=(B&&G===q&&q.visualViewport?q.visualViewport.height:G[Q])-O.height,ee*=L?1:-1),(R===w||(R===m||R===C)&&k===r)&&(Y=_,z-=(B&&G===q&&q.visualViewport?q.visualViewport.width:G[te])-O.width,z*=L?1:-1)}var X,de=Object.assign({position:P},U&&wl),Ce=F===!0?function(ke,xe){var We=ke.x,He=ke.y,fe=xe.devicePixelRatio||1;return{x:Ot(We*fe)/fe||0,y:Ot(He*fe)/fe||0}}({x:z,y:ee},Se(T)):{x:z,y:ee};return z=Ce.x,ee=Ce.y,L?Object.assign({},de,((X={})[J]=ce?"0":"",X[Y]=ue?"0":"",X.transform=(q.devicePixelRatio||1)<=1?"translate("+z+"px, "+ee+"px)":"translate3d("+z+"px, "+ee+"px, 0)",X)):Object.assign({},de,((I={})[J]=ce?ee+"px":"",I[Y]=ue?z+"px":"",I.transform="",I))}const xi={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(E){var I=E.state,T=E.options,O=T.gpuAcceleration,R=O===void 0||O,k=T.adaptive,D=k===void 0||k,P=T.roundOffsets,L=P===void 0||P,U={placement:Ue(I.placement),variation:xt(I.placement),popper:I.elements.popper,popperRect:I.rects.popper,gpuAcceleration:R,isFixed:I.options.strategy==="fixed"};I.modifiersData.popperOffsets!=null&&(I.styles.popper=Object.assign({},I.styles.popper,dr(Object.assign({},U,{offsets:I.modifiersData.popperOffsets,position:I.options.strategy,adaptive:D,roundOffsets:L})))),I.modifiersData.arrow!=null&&(I.styles.arrow=Object.assign({},I.styles.arrow,dr(Object.assign({},U,{offsets:I.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:L})))),I.attributes.popper=Object.assign({},I.attributes.popper,{"data-popper-placement":I.placement})},data:{}};var Bn={passive:!0};const Ni={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(E){var I=E.state,T=E.instance,O=E.options,R=O.scroll,k=R===void 0||R,D=O.resize,P=D===void 0||D,L=Se(I.elements.popper),U=[].concat(I.scrollParents.reference,I.scrollParents.popper);return k&&U.forEach(function(F){F.addEventListener("scroll",T.update,Bn)}),P&&L.addEventListener("resize",T.update,Bn),function(){k&&U.forEach(function(F){F.removeEventListener("scroll",T.update,Bn)}),P&&L.removeEventListener("resize",T.update,Bn)}},data:{}};var Cl={left:"right",right:"left",bottom:"top",top:"bottom"};function Fn(E){return E.replace(/left|right|bottom|top/g,function(I){return Cl[I]})}var bl={start:"end",end:"start"};function fr(E){return E.replace(/start|end/g,function(I){return bl[I]})}function Pi(E){var I=Se(E);return{scrollLeft:I.pageXOffset,scrollTop:I.pageYOffset}}function Li(E){return kt(Je(E)).left+Pi(E).scrollLeft}function Ri(E){var I=je(E),T=I.overflow,O=I.overflowX,R=I.overflowY;return/auto|scroll|overlay|hidden/.test(T+R+O)}function pr(E){return["html","body","#document"].indexOf(Fe(E))>=0?E.ownerDocument.body:Oe(E)&&Ri(E)?E:pr(Mn(E))}function rn(E,I){var T;I===void 0&&(I=[]);var O=pr(E),R=O===((T=E.ownerDocument)==null?void 0:T.body),k=Se(O),D=R?[k].concat(k.visualViewport||[],Ri(O)?O:[]):O,P=I.concat(D);return R?P:P.concat(rn(Mn(D)))}function Di(E){return Object.assign({},E,{left:E.x,top:E.y,right:E.x+E.width,bottom:E.y+E.height})}function mr(E,I,T){return I===u?Di(function(O,R){var k=Se(O),D=Je(O),P=k.visualViewport,L=D.clientWidth,U=D.clientHeight,F=0,B=0;if(P){L=P.width,U=P.height;var ie=or();(ie||!ie&&R==="fixed")&&(F=P.offsetLeft,B=P.offsetTop)}return{width:L,height:U,x:F+Li(O),y:B}}(E,T)):lt(I)?function(O,R){var k=kt(O,!1,R==="fixed");return k.top=k.top+O.clientTop,k.left=k.left+O.clientLeft,k.bottom=k.top+O.clientHeight,k.right=k.left+O.clientWidth,k.width=O.clientWidth,k.height=O.clientHeight,k.x=k.left,k.y=k.top,k}(I,T):Di(function(O){var R,k=Je(O),D=Pi(O),P=(R=O.ownerDocument)==null?void 0:R.body,L=ct(k.scrollWidth,k.clientWidth,P?P.scrollWidth:0,P?P.clientWidth:0),U=ct(k.scrollHeight,k.clientHeight,P?P.scrollHeight:0,P?P.clientHeight:0),F=-D.scrollLeft+Li(O),B=-D.scrollTop;return je(P||k).direction==="rtl"&&(F+=ct(k.clientWidth,P?P.clientWidth:0)-L),{width:L,height:U,x:F,y:B}}(Je(E)))}function Il(E,I,T,O){var R=I==="clippingParents"?function(L){var U=rn(Mn(L)),F=["absolute","fixed"].indexOf(je(L).position)>=0&&Oe(L)?nn(L):L;return lt(F)?U.filter(function(B){return lt(B)&&ar(B,F)&&Fe(B)!=="body"}):[]}(E):[].concat(I),k=[].concat(R,[T]),D=k[0],P=k.reduce(function(L,U){var F=mr(E,U,O);return L.top=ct(F.top,L.top),L.right=Dn(F.right,L.right),L.bottom=Dn(F.bottom,L.bottom),L.left=ct(F.left,L.left),L},mr(E,D,O));return P.width=P.right-P.left,P.height=P.bottom-P.top,P.x=P.left,P.y=P.top,P}function gr(E){var I,T=E.reference,O=E.element,R=E.placement,k=R?Ue(R):null,D=R?xt(R):null,P=T.x+T.width/2-O.width/2,L=T.y+T.height/2-O.height/2;switch(k){case m:I={x:P,y:T.y-O.height};break;case C:I={x:P,y:T.y+T.height};break;case _:I={x:T.x+T.width,y:L};break;case w:I={x:T.x-O.width,y:L};break;default:I={x:T.x,y:T.y}}var U=k?ki(k):null;if(U!=null){var F=U==="y"?"height":"width";switch(D){case c:I[U]=I[U]-(T[F]/2-O[F]/2);break;case r:I[U]=I[U]+(T[F]/2-O[F]/2)}}return I}function Nt(E,I){I===void 0&&(I={});var T=I,O=T.placement,R=O===void 0?E.placement:O,k=T.strategy,D=k===void 0?E.strategy:k,P=T.boundary,L=P===void 0?a:P,U=T.rootBoundary,F=U===void 0?u:U,B=T.elementContext,ie=B===void 0?h:B,z=T.altBoundary,se=z!==void 0&&z,ee=T.padding,$=ee===void 0?0:ee,ue=cr(typeof $!="number"?$:ur($,v)),ce=ie===h?d:h,Y=E.rects.popper,J=E.elements[se?ce:ie],q=Il(lt(J)?J:J.contextElement||Je(E.elements.popper),L,F,D),G=kt(E.elements.reference),Q=gr({reference:G,element:Y,strategy:"absolute",placement:R}),te=Di(Object.assign({},Y,Q)),X=ie===h?te:G,de={top:q.top-X.top+ue.top,bottom:X.bottom-q.bottom+ue.bottom,left:q.left-X.left+ue.left,right:X.right-q.right+ue.right},Ce=E.modifiersData.offset;if(ie===h&&Ce){var ke=Ce[R];Object.keys(de).forEach(function(xe){var We=[_,C].indexOf(xe)>=0?1:-1,He=[m,C].indexOf(xe)>=0?"y":"x";de[xe]+=ke[He]*We})}return de}const vr={name:"flip",enabled:!0,phase:"main",fn:function(E){var I=E.state,T=E.options,O=E.name;if(!I.modifiersData[O]._skip){for(var R=T.mainAxis,k=R===void 0||R,D=T.altAxis,P=D===void 0||D,L=T.fallbackPlacements,U=T.padding,F=T.boundary,B=T.rootBoundary,ie=T.altBoundary,z=T.flipVariations,se=z===void 0||z,ee=T.allowedAutoPlacements,$=I.options.placement,ue=Ue($),ce=L||(ue===$||!se?[Fn($)]:function(Ne){if(Ue(Ne)===b)return[];var Pe=Fn(Ne);return[fr(Ne),Pe,fr(Pe)]}($)),Y=[$].concat(ce).reduce(function(Ne,Pe){return Ne.concat(Ue(Pe)===b?function(Lt,Xe){Xe===void 0&&(Xe={});var Le=Xe,qn=Le.placement,$n=Le.boundary,Rt=Le.rootBoundary,Bi=Le.padding,Fi=Le.flipVariations,Dt=Le.allowedAutoPlacements,Ui=Dt===void 0?y:Dt,on=xt(qn),jn=on?Fi?g:g.filter(function(qe){return xt(qe)===on}):v,Mt=jn.filter(function(qe){return Ui.indexOf(qe)>=0});Mt.length===0&&(Mt=jn);var Bt=Mt.reduce(function(qe,ht){return qe[ht]=Nt(Lt,{placement:ht,boundary:$n,rootBoundary:Rt,padding:Bi})[Ue(ht)],qe},{});return Object.keys(Bt).sort(function(qe,ht){return Bt[qe]-Bt[ht]})}(I,{placement:Pe,boundary:F,rootBoundary:B,padding:U,flipVariations:se,allowedAutoPlacements:ee}):Pe)},[]),J=I.rects.reference,q=I.rects.popper,G=new Map,Q=!0,te=Y[0],X=0;X<Y.length;X++){var de=Y[X],Ce=Ue(de),ke=xt(de)===c,xe=[m,C].indexOf(Ce)>=0,We=xe?"width":"height",He=Nt(I,{placement:de,boundary:F,rootBoundary:B,altBoundary:ie,padding:U}),fe=xe?ke?_:w:ke?C:m;J[We]>q[We]&&(fe=Fn(fe));var Qe=Fn(fe),ut=[];if(k&&ut.push(He[Ce]<=0),P&&ut.push(He[fe]<=0,He[Qe]<=0),ut.every(function(Ne){return Ne})){te=de,Q=!1;break}G.set(de,ut)}if(Q)for(var Hn=function(Ne){var Pe=Y.find(function(Lt){var Xe=G.get(Lt);if(Xe)return Xe.slice(0,Ne).every(function(Le){return Le})});if(Pe)return te=Pe,"break"},Pt=se?3:1;Pt>0&&Hn(Pt)!=="break";Pt--);I.placement!==te&&(I.modifiersData[O]._skip=!0,I.placement=te,I.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function _r(E,I,T){return T===void 0&&(T={x:0,y:0}),{top:E.top-I.height-T.y,right:E.right-I.width+T.x,bottom:E.bottom-I.height+T.y,left:E.left-I.width-T.x}}function yr(E){return[m,_,C,w].some(function(I){return E[I]>=0})}const wr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(E){var I=E.state,T=E.name,O=I.rects.reference,R=I.rects.popper,k=I.modifiersData.preventOverflow,D=Nt(I,{elementContext:"reference"}),P=Nt(I,{altBoundary:!0}),L=_r(D,O),U=_r(P,R,k),F=yr(L),B=yr(U);I.modifiersData[T]={referenceClippingOffsets:L,popperEscapeOffsets:U,isReferenceHidden:F,hasPopperEscaped:B},I.attributes.popper=Object.assign({},I.attributes.popper,{"data-popper-reference-hidden":F,"data-popper-escaped":B})}},Cr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(E){var I=E.state,T=E.options,O=E.name,R=T.offset,k=R===void 0?[0,0]:R,D=y.reduce(function(F,B){return F[B]=function(ie,z,se){var ee=Ue(ie),$=[w,m].indexOf(ee)>=0?-1:1,ue=typeof se=="function"?se(Object.assign({},z,{placement:ie})):se,ce=ue[0],Y=ue[1];return ce=ce||0,Y=(Y||0)*$,[w,_].indexOf(ee)>=0?{x:Y,y:ce}:{x:ce,y:Y}}(B,I.rects,k),F},{}),P=D[I.placement],L=P.x,U=P.y;I.modifiersData.popperOffsets!=null&&(I.modifiersData.popperOffsets.x+=L,I.modifiersData.popperOffsets.y+=U),I.modifiersData[O]=D}},Mi={name:"popperOffsets",enabled:!0,phase:"read",fn:function(E){var I=E.state,T=E.name;I.modifiersData[T]=gr({reference:I.rects.reference,element:I.rects.popper,strategy:"absolute",placement:I.placement})},data:{}},br={name:"preventOverflow",enabled:!0,phase:"main",fn:function(E){var I=E.state,T=E.options,O=E.name,R=T.mainAxis,k=R===void 0||R,D=T.altAxis,P=D!==void 0&&D,L=T.boundary,U=T.rootBoundary,F=T.altBoundary,B=T.padding,ie=T.tether,z=ie===void 0||ie,se=T.tetherOffset,ee=se===void 0?0:se,$=Nt(I,{boundary:L,rootBoundary:U,padding:B,altBoundary:F}),ue=Ue(I.placement),ce=xt(I.placement),Y=!ce,J=ki(ue),q=J==="x"?"y":"x",G=I.modifiersData.popperOffsets,Q=I.rects.reference,te=I.rects.popper,X=typeof ee=="function"?ee(Object.assign({},I.rects,{placement:I.placement})):ee,de=typeof X=="number"?{mainAxis:X,altAxis:X}:Object.assign({mainAxis:0,altAxis:0},X),Ce=I.modifiersData.offset?I.modifiersData.offset[I.placement]:null,ke={x:0,y:0};if(G){if(k){var xe,We=J==="y"?m:w,He=J==="y"?C:_,fe=J==="y"?"height":"width",Qe=G[J],ut=Qe+$[We],Hn=Qe-$[He],Pt=z?-te[fe]/2:0,Ne=ce===c?Q[fe]:te[fe],Pe=ce===c?-te[fe]:-Q[fe],Lt=I.elements.arrow,Xe=z&&Lt?Oi(Lt):{width:0,height:0},Le=I.modifiersData["arrow#persistent"]?I.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},qn=Le[We],$n=Le[He],Rt=sn(0,Q[fe],Xe[fe]),Bi=Y?Q[fe]/2-Pt-Rt-qn-de.mainAxis:Ne-Rt-qn-de.mainAxis,Fi=Y?-Q[fe]/2+Pt+Rt+$n+de.mainAxis:Pe+Rt+$n+de.mainAxis,Dt=I.elements.arrow&&nn(I.elements.arrow),Ui=Dt?J==="y"?Dt.clientTop||0:Dt.clientLeft||0:0,on=(xe=Ce==null?void 0:Ce[J])!=null?xe:0,jn=Qe+Fi-on,Mt=sn(z?Dn(ut,Qe+Bi-on-Ui):ut,Qe,z?ct(Hn,jn):Hn);G[J]=Mt,ke[J]=Mt-Qe}if(P){var Bt,qe=J==="x"?m:w,ht=J==="x"?C:_,dt=G[q],Wn=q==="y"?"height":"width",Sr=dt+$[qe],Tr=dt-$[ht],Hi=[m,w].indexOf(ue)!==-1,Ar=(Bt=Ce==null?void 0:Ce[q])!=null?Bt:0,Or=Hi?Sr:dt-Q[Wn]-te[Wn]-Ar+de.altAxis,kr=Hi?dt+Q[Wn]+te[Wn]-Ar-de.altAxis:Tr,xr=z&&Hi?function(kl,xl,qi){var Nr=sn(kl,xl,qi);return Nr>qi?qi:Nr}(Or,dt,kr):sn(z?Or:Sr,dt,z?kr:Tr);G[q]=xr,ke[q]=xr-dt}I.modifiersData[O]=ke}},requiresIfExists:["offset"]};function El(E,I,T){T===void 0&&(T=!1);var O,R,k=Oe(I),D=Oe(I)&&function(B){var ie=B.getBoundingClientRect(),z=Ot(ie.width)/B.offsetWidth||1,se=Ot(ie.height)/B.offsetHeight||1;return z!==1||se!==1}(I),P=Je(I),L=kt(E,D,T),U={scrollLeft:0,scrollTop:0},F={x:0,y:0};return(k||!k&&!T)&&((Fe(I)!=="body"||Ri(P))&&(U=(O=I)!==Se(O)&&Oe(O)?{scrollLeft:(R=O).scrollLeft,scrollTop:R.scrollTop}:Pi(O)),Oe(I)?((F=kt(I,!0)).x+=I.clientLeft,F.y+=I.clientTop):P&&(F.x=Li(P))),{x:L.left+U.scrollLeft-F.x,y:L.top+U.scrollTop-F.y,width:L.width,height:L.height}}function Sl(E){var I=new Map,T=new Set,O=[];function R(k){T.add(k.name),[].concat(k.requires||[],k.requiresIfExists||[]).forEach(function(D){if(!T.has(D)){var P=I.get(D);P&&R(P)}}),O.push(k)}return E.forEach(function(k){I.set(k.name,k)}),E.forEach(function(k){T.has(k.name)||R(k)}),O}var Ir={placement:"bottom",modifiers:[],strategy:"absolute"};function Er(){for(var E=arguments.length,I=new Array(E),T=0;T<E;T++)I[T]=arguments[T];return!I.some(function(O){return!(O&&typeof O.getBoundingClientRect=="function")})}function Un(E){E===void 0&&(E={});var I=E,T=I.defaultModifiers,O=T===void 0?[]:T,R=I.defaultOptions,k=R===void 0?Ir:R;return function(D,P,L){L===void 0&&(L=k);var U,F,B={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ir,k),modifiersData:{},elements:{reference:D,popper:P},attributes:{},styles:{}},ie=[],z=!1,se={state:B,setOptions:function($){var ue=typeof $=="function"?$(B.options):$;ee(),B.options=Object.assign({},k,B.options,ue),B.scrollParents={reference:lt(D)?rn(D):D.contextElement?rn(D.contextElement):[],popper:rn(P)};var ce,Y,J=function(q){var G=Sl(q);return tn.reduce(function(Q,te){return Q.concat(G.filter(function(X){return X.phase===te}))},[])}((ce=[].concat(O,B.options.modifiers),Y=ce.reduce(function(q,G){var Q=q[G.name];return q[G.name]=Q?Object.assign({},Q,G,{options:Object.assign({},Q.options,G.options),data:Object.assign({},Q.data,G.data)}):G,q},{}),Object.keys(Y).map(function(q){return Y[q]})));return B.orderedModifiers=J.filter(function(q){return q.enabled}),B.orderedModifiers.forEach(function(q){var G=q.name,Q=q.options,te=Q===void 0?{}:Q,X=q.effect;if(typeof X=="function"){var de=X({state:B,name:G,instance:se,options:te}),Ce=function(){};ie.push(de||Ce)}}),se.update()},forceUpdate:function(){if(!z){var $=B.elements,ue=$.reference,ce=$.popper;if(Er(ue,ce)){B.rects={reference:El(ue,nn(ce),B.options.strategy==="fixed"),popper:Oi(ce)},B.reset=!1,B.placement=B.options.placement,B.orderedModifiers.forEach(function(X){return B.modifiersData[X.name]=Object.assign({},X.data)});for(var Y=0;Y<B.orderedModifiers.length;Y++)if(B.reset!==!0){var J=B.orderedModifiers[Y],q=J.fn,G=J.options,Q=G===void 0?{}:G,te=J.name;typeof q=="function"&&(B=q({state:B,options:Q,name:te,instance:se})||B)}else B.reset=!1,Y=-1}}},update:(U=function(){return new Promise(function($){se.forceUpdate(),$(B)})},function(){return F||(F=new Promise(function($){Promise.resolve().then(function(){F=void 0,$(U())})})),F}),destroy:function(){ee(),z=!0}};if(!Er(D,P))return se;function ee(){ie.forEach(function($){return $()}),ie=[]}return se.setOptions(L).then(function($){!z&&L.onFirstUpdate&&L.onFirstUpdate($)}),se}}var Tl=Un(),Al=Un({defaultModifiers:[Ni,Mi,xi,Ti,Cr,vr,br,hr,wr]}),Ol=Un({defaultModifiers:[Ni,Mi,xi,Ti]})},190:(l,f)=>{Object.defineProperty(f,"__esModule",{value:!0}),f.COMBO_BOX_ACCESSIBILITY_KEY_SET=f.SELECT_ACCESSIBILITY_KEY_SET=f.TABS_ACCESSIBILITY_KEY_SET=f.OVERLAY_ACCESSIBILITY_KEY_SET=f.DROPDOWN_ACCESSIBILITY_KEY_SET=f.POSITIONS=void 0,f.POSITIONS={auto:"auto","auto-start":"auto-start","auto-end":"auto-end",top:"top","top-left":"top-start","top-right":"top-end",bottom:"bottom","bottom-left":"bottom-start","bottom-right":"bottom-end",right:"right","right-start":"right-start","right-end":"right-end",left:"left","left-start":"left-start","left-end":"left-end"},f.DROPDOWN_ACCESSIBILITY_KEY_SET=["Escape","ArrowUp","ArrowDown","Home","End","Enter"],f.OVERLAY_ACCESSIBILITY_KEY_SET=["Escape","Tab"],f.TABS_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End"],f.SELECT_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter","Tab"],f.COMBO_BOX_ACCESSIBILITY_KEY_SET=["ArrowUp","ArrowLeft","ArrowDown","ArrowRight","Home","End","Escape","Enter"]},460:function(l,f,p){/*
 * HSAccordion
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(b,v){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,r){c.__proto__=r}||function(c,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(c[a]=r[a])},m(b,v)},function(b,v){if(typeof v!="function"&&v!==null)throw new TypeError("Class extends value "+String(v)+" is not a constructor or null");function c(){this.constructor=b}m(b,v),b.prototype=v===null?Object.create(v):(c.prototype=v.prototype,new c)});Object.defineProperty(f,"__esModule",{value:!0});var _=p(969),w=function(b){function v(c,r,a){var u=b.call(this,c,r,a)||this;return u.toggle=u.el.querySelector(".hs-accordion-toggle")||null,u.content=u.el.querySelector(".hs-accordion-content")||null,u.group=u.el.closest(".hs-accordion-group")||null,u.isAlwaysOpened=u.group.hasAttribute("data-hs-accordion-always-open")||!1,u.toggle&&u.content&&u.init(),u}return C(v,b),v.prototype.init=function(){var c=this;this.createCollection(window.$hsAccordionCollection,this),this.toggle.addEventListener("click",function(){c.el.classList.contains("active")?c.hide():c.show()})},v.prototype.show=function(){var c=this;if(this.group&&!this.isAlwaysOpened&&this.group.querySelector(".hs-accordion.active")&&this.group.querySelector(".hs-accordion.active")!==this.el&&window.$hsAccordionCollection.find(function(r){return r.element.el===c.group.querySelector(".hs-accordion.active")}).element.hide(),this.el.classList.contains("active"))return!1;this.el.classList.add("active"),this.content.style.display="block",this.content.style.height="0",setTimeout(function(){c.content.style.height="".concat(c.content.scrollHeight,"px")}),(0,_.afterTransition)(this.content,function(){c.content.style.display="block",c.content.style.height="",c.fireEvent("open",c.el),(0,_.dispatch)("open.hs.accordion",c.el,c.el)})},v.prototype.hide=function(){var c=this;if(!this.el.classList.contains("active"))return!1;this.el.classList.remove("active"),this.content.style.height="".concat(this.content.scrollHeight,"px"),setTimeout(function(){c.content.style.height="0"}),(0,_.afterTransition)(this.content,function(){c.content.style.display="",c.content.style.height="0",c.fireEvent("close",c.el),(0,_.dispatch)("close.hs.accordion",c.el,c.el)})},v.getInstance=function(c,r){var a=window.$hsAccordionCollection.find(function(u){return u.element.el===(typeof c=="string"?document.querySelector(c):c)});return a?r?a:a.element.el:null},v.show=function(c){var r=window.$hsAccordionCollection.find(function(a){return a.element.el===(typeof c=="string"?document.querySelector(c):c)});r&&r.element.content.style.display!=="block"&&r.element.show()},v.hide=function(c){var r=window.$hsAccordionCollection.find(function(a){return a.element.el===(typeof c=="string"?document.querySelector(c):c)});r&&r.element.content.style.display==="block"&&r.element.hide()},v.autoInit=function(){window.$hsAccordionCollection||(window.$hsAccordionCollection=[]),document.querySelectorAll(".hs-accordion:not(.--prevent-on-load-init)").forEach(function(c){window.$hsAccordionCollection.find(function(r){var a;return((a=r==null?void 0:r.element)===null||a===void 0?void 0:a.el)===c})||new v(c)})},v.on=function(c,r,a){var u=window.$hsAccordionCollection.find(function(h){return h.element.el===(typeof r=="string"?document.querySelector(r):r)});u&&(u.element.events[c]=a)},v}(p(737).default);window.addEventListener("load",function(){w.autoInit()}),typeof window<"u"&&(window.HSAccordion=w),f.default=w},737:(l,f)=>{/*
 * HSBasePlugin
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */Object.defineProperty(f,"__esModule",{value:!0});var p=function(){function m(C,_,w){this.el=C,this.options=_,this.events=w,this.el=C,this.options=_,this.events={}}return m.prototype.createCollection=function(C,_){var w;C.push({id:((w=_==null?void 0:_.el)===null||w===void 0?void 0:w.id)||C.length+1,element:_})},m.prototype.fireEvent=function(C,_){if(_===void 0&&(_=null),this.events.hasOwnProperty(C))return this.events[C](_)},m.prototype.on=function(C,_){this.events[C]=_},m}();f.default=p},629:function(l,f,p){/*
 * HSCarousel
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(b,v){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,r){c.__proto__=r}||function(c,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(c[a]=r[a])},m(b,v)},function(b,v){if(typeof v!="function"&&v!==null)throw new TypeError("Class extends value "+String(v)+" is not a constructor or null");function c(){this.constructor=b}m(b,v),b.prototype=v===null?Object.create(v):(c.prototype=v.prototype,new c)}),_=this&&this.__assign||function(){return _=Object.assign||function(b){for(var v,c=1,r=arguments.length;c<r;c++)for(var a in v=arguments[c])Object.prototype.hasOwnProperty.call(v,a)&&(b[a]=v[a]);return b},_.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0});var w=function(b){function v(c,r){var a,u,h,d=b.call(this,c,r)||this,g=c.getAttribute("data-hs-carousel"),y=g?JSON.parse(g):{},S=_(_({},y),r);return d.currentIndex=S.currentIndex||0,d.loadingClasses=S.loadingClasses?"".concat(S.loadingClasses).split(","):null,d.loadingClassesRemove=!((a=d.loadingClasses)===null||a===void 0)&&a[0]?d.loadingClasses[0].split(" "):"opacity-0",d.loadingClassesAdd=!((u=d.loadingClasses)===null||u===void 0)&&u[1]?d.loadingClasses[1].split(" "):"",d.afterLoadingClassesAdd=!((h=d.loadingClasses)===null||h===void 0)&&h[2]?d.loadingClasses[2].split(" "):"",d.isAutoPlay=S.isAutoPlay!==void 0&&S.isAutoPlay,d.speed=S.speed||4e3,d.isInfiniteLoop=S.isInfiniteLoop===void 0||S.isInfiniteLoop,d.inner=d.el.querySelector(".hs-carousel-body")||null,d.slides=d.el.querySelectorAll(".hs-carousel-slide")||[],d.prev=d.el.querySelector(".hs-carousel-prev")||null,d.next=d.el.querySelector(".hs-carousel-next")||null,d.dots=d.el.querySelectorAll(".hs-carousel-pagination > *")||null,d.sliderWidth=d.inner.parentElement.clientWidth,d.touchX={start:0,end:0},d.init(),d}return C(v,b),v.prototype.init=function(){var c,r,a=this;this.createCollection(window.$hsCarouselCollection,this),this.inner&&(this.calculateWidth(),this.loadingClassesRemove&&(typeof this.loadingClassesRemove=="string"?this.inner.classList.remove(this.loadingClassesRemove):(c=this.inner.classList).remove.apply(c,this.loadingClassesRemove)),this.loadingClassesAdd&&(typeof this.loadingClassesAdd=="string"?this.inner.classList.add(this.loadingClassesAdd):(r=this.inner.classList).add.apply(r,this.loadingClassesAdd))),this.prev&&this.prev.addEventListener("click",function(){a.goToPrev(),a.isAutoPlay&&(a.resetTimer(),a.setTimer())}),this.next&&this.next.addEventListener("click",function(){a.goToNext(),a.isAutoPlay&&(a.resetTimer(),a.setTimer())}),this.dots&&this.dots.forEach(function(u,h){return u.addEventListener("click",function(){a.goTo(h),a.isAutoPlay&&(a.resetTimer(),a.setTimer())})}),this.slides.length&&(this.addCurrentClass(),this.isInfiniteLoop||this.addDisabledClass(),this.isAutoPlay&&this.autoPlay()),this.inner&&this.afterLoadingClassesAdd&&setTimeout(function(){var u;typeof a.afterLoadingClassesAdd=="string"?a.inner.classList.add(a.afterLoadingClassesAdd):(u=a.inner.classList).add.apply(u,a.afterLoadingClassesAdd)}),this.el.classList.add("init"),this.el.addEventListener("touchstart",function(u){a.touchX.start=u.changedTouches[0].screenX}),this.el.addEventListener("touchend",function(u){a.touchX.end=u.changedTouches[0].screenX,a.detectDirection()}),this.observeResize()},v.prototype.observeResize=function(){var c=this;new ResizeObserver(function(){return c.recalculateWidth()}).observe(document.querySelector("body"))},v.prototype.calculateWidth=function(){var c=this;this.inner.style.width="".concat(this.sliderWidth*this.slides.length,"px"),this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.slides.forEach(function(r){r.style.width="".concat(c.sliderWidth,"px")})},v.prototype.addCurrentClass=function(){var c=this;this.slides.forEach(function(r,a){a===c.currentIndex?r.classList.add("active"):r.classList.remove("active")}),this.dots&&this.dots.forEach(function(r,a){a===c.currentIndex?r.classList.add("active"):r.classList.remove("active")})},v.prototype.addDisabledClass=function(){if(!this.prev||!this.next)return!1;this.currentIndex===0?(this.next.classList.remove("disabled"),this.prev.classList.add("disabled")):this.currentIndex===this.slides.length-1?(this.prev.classList.remove("disabled"),this.next.classList.add("disabled")):(this.prev.classList.remove("disabled"),this.next.classList.remove("disabled"))},v.prototype.autoPlay=function(){this.setTimer()},v.prototype.setTimer=function(){var c=this;this.timer=setInterval(function(){c.currentIndex===c.slides.length-1?c.goTo(0):c.goToNext()},this.speed)},v.prototype.resetTimer=function(){clearInterval(this.timer)},v.prototype.detectDirection=function(){var c=this.touchX,r=c.start,a=c.end;a<r&&this.goToNext(),a>r&&this.goToPrev()},v.prototype.recalculateWidth=function(){this.sliderWidth=this.inner.parentElement.clientWidth,this.calculateWidth()},v.prototype.goToPrev=function(){this.currentIndex===0&&this.isInfiniteLoop?(this.currentIndex=this.slides.length-1,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass()):this.currentIndex!==0&&(this.currentIndex-=1,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass(),this.addDisabledClass())},v.prototype.goToNext=function(){this.currentIndex===this.slides.length-1&&this.isInfiniteLoop?(this.currentIndex=0,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass()):this.currentIndex<this.slides.length-1&&(this.currentIndex+=1,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass(),this.addDisabledClass())},v.prototype.goTo=function(c){this.currentIndex=c,this.inner.style.transform="translate(-".concat(this.currentIndex*this.sliderWidth,"px, 0px)"),this.addCurrentClass(),this.isInfiniteLoop||this.addDisabledClass()},v.getInstance=function(c,r){var a=window.$hsCarouselCollection.find(function(u){return u.element.el===(typeof c=="string"?document.querySelector(c):c)});return a?r?a:a.element:null},v.autoInit=function(){window.$hsCarouselCollection||(window.$hsCarouselCollection=[]),document.querySelectorAll("[data-hs-carousel]:not(.--prevent-on-load-init)").forEach(function(c){window.$hsCarouselCollection.find(function(r){var a;return((a=r==null?void 0:r.element)===null||a===void 0?void 0:a.el)===c})||new v(c)})},v}(p(737).default);window.addEventListener("load",function(){w.autoInit()}),window.addEventListener("resize",function(){if(!window.$hsCarouselCollection)return!1;window.$hsCarouselCollection.forEach(function(b){b.element.recalculateWidth()})}),typeof window<"u"&&(window.HSCarousel=w),f.default=w},652:function(l,f,p){/*
 * HSCollapse
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(b,v){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,r){c.__proto__=r}||function(c,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(c[a]=r[a])},m(b,v)},function(b,v){if(typeof v!="function"&&v!==null)throw new TypeError("Class extends value "+String(v)+" is not a constructor or null");function c(){this.constructor=b}m(b,v),b.prototype=v===null?Object.create(v):(c.prototype=v.prototype,new c)});Object.defineProperty(f,"__esModule",{value:!0});var _=p(969),w=function(b){function v(c,r,a){var u=b.call(this,c,r,a)||this;return u.contentId=u.el.dataset.hsCollapse,u.content=document.querySelector(u.contentId),u.animationInProcess=!1,u.content&&u.init(),u}return C(v,b),v.prototype.init=function(){var c=this;this.createCollection(window.$hsCollapseCollection,this),this.el.addEventListener("click",function(){c.content.classList.contains("open")?c.hide():c.show()})},v.prototype.hideAllMegaMenuItems=function(){this.content.querySelectorAll(".hs-mega-menu-content.block").forEach(function(c){c.classList.remove("block"),c.classList.add("hidden")})},v.prototype.show=function(){var c=this;if(this.animationInProcess||this.el.classList.contains("open"))return!1;this.animationInProcess=!0,this.el.classList.add("open"),this.content.classList.add("open"),this.content.classList.remove("hidden"),this.content.style.height="0",setTimeout(function(){c.content.style.height="".concat(c.content.scrollHeight,"px")}),(0,_.afterTransition)(this.content,function(){c.content.style.height="",c.fireEvent("open",c.el),(0,_.dispatch)("open.hs.collapse",c.el,c.el),c.animationInProcess=!1})},v.prototype.hide=function(){var c=this;if(this.animationInProcess||!this.el.classList.contains("open"))return!1;this.animationInProcess=!0,this.el.classList.remove("open"),this.content.style.height="".concat(this.content.scrollHeight,"px"),setTimeout(function(){c.content.style.height="0"}),this.content.classList.remove("open"),(0,_.afterTransition)(this.content,function(){c.content.classList.add("hidden"),c.content.style.height="",c.fireEvent("hide",c.el),(0,_.dispatch)("hide.hs.collapse",c.el,c.el),c.animationInProcess=!1}),this.content.querySelectorAll(".hs-mega-menu-content.block").length&&this.hideAllMegaMenuItems()},v.getInstance=function(c,r){r===void 0&&(r=!1);var a=window.$hsCollapseCollection.find(function(u){return u.element.el===(typeof c=="string"?document.querySelector(c):c)});return a?r?a:a.element.el:null},v.autoInit=function(){window.$hsCollapseCollection||(window.$hsCollapseCollection=[]),document.querySelectorAll(".hs-collapse-toggle:not(.--prevent-on-load-init)").forEach(function(c){window.$hsCollapseCollection.find(function(r){var a;return((a=r==null?void 0:r.element)===null||a===void 0?void 0:a.el)===c})||new v(c)})},v.show=function(c){var r=window.$hsCollapseCollection.find(function(a){return a.element.el===(typeof c=="string"?document.querySelector(c):c)});r&&r.element.content.classList.contains("hidden")&&r.element.show()},v.hide=function(c){var r=window.$hsCollapseCollection.find(function(a){return a.element.el===(typeof c=="string"?document.querySelector(c):c)});r&&!r.element.content.classList.contains("hidden")&&r.element.hide()},v.on=function(c,r,a){var u=window.$hsCollapseCollection.find(function(h){return h.element.el===(typeof r=="string"?document.querySelector(r):r)});u&&(u.element.events[c]=a)},v}(p(737).default);window.addEventListener("load",function(){w.autoInit()}),typeof window<"u"&&(window.HSCollapse=w),f.default=w},413:function(l,f,p){/*
 * HSCopyMarkup
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(v,c){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(r[u]=a[u])},m(v,c)},function(v,c){if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");function r(){this.constructor=v}m(v,c),v.prototype=c===null?Object.create(c):(r.prototype=c.prototype,new r)}),_=this&&this.__assign||function(){return _=Object.assign||function(v){for(var c,r=1,a=arguments.length;r<a;r++)for(var u in c=arguments[r])Object.prototype.hasOwnProperty.call(c,u)&&(v[u]=c[u]);return v},_.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0});var w=p(969),b=function(v){function c(r,a){var u=v.call(this,r,a)||this,h=r.getAttribute("data-hs-copy-markup"),d=h?JSON.parse(h):{},g=_(_({},d),a);return u.targetSelector=(g==null?void 0:g.targetSelector)||null,u.wrapperSelector=(g==null?void 0:g.wrapperSelector)||null,u.limit=(g==null?void 0:g.limit)||null,u.items=[],u.targetSelector&&u.init(),u}return C(c,v),c.prototype.init=function(){var r=this;this.createCollection(window.$hsCopyMarkupCollection,this),this.setTarget(),this.setWrapper(),this.addPredefinedItems(),this.el.addEventListener("click",function(){return r.copy()})},c.prototype.copy=function(){if(this.limit&&this.items.length>=this.limit)return!1;this.el.hasAttribute("disabled")&&this.el.setAttribute("disabled","");var r=this.target.cloneNode(!0);this.addToItems(r),this.limit&&this.items.length>=this.limit&&this.el.setAttribute("disabled","disabled"),this.fireEvent("copy",r),(0,w.dispatch)("copy.hs.copyMarkup",r,r)},c.prototype.addPredefinedItems=function(){var r=this;Array.from(this.wrapper.children).filter(function(a){return!a.classList.contains("[--ignore-for-count]")}).forEach(function(a){r.addToItems(a)})},c.prototype.setTarget=function(){var r=typeof this.targetSelector=="string"?document.querySelector(this.targetSelector).cloneNode(!0):this.targetSelector.cloneNode(!0);r.removeAttribute("id"),this.target=r},c.prototype.setWrapper=function(){this.wrapper=typeof this.wrapperSelector=="string"?document.querySelector(this.wrapperSelector):this.wrapperSelector},c.prototype.addToItems=function(r){var a=this,u=r.querySelector("[data-hs-copy-markup-delete-item]");this.wrapper?this.wrapper.append(r):this.el.before(r),u&&u.addEventListener("click",function(){return a.delete(r)}),this.items.push(r)},c.prototype.delete=function(r){var a=this.items.indexOf(r);a!==-1&&this.items.splice(a,1),r.remove(),this.fireEvent("delete",r),(0,w.dispatch)("delete.hs.copyMarkup",r,r)},c.getInstance=function(r,a){var u=window.$hsCopyMarkupCollection.find(function(h){return h.element.el===(typeof r=="string"?document.querySelector(r):r)});return u?a?u:u.element:null},c.autoInit=function(){window.$hsCopyMarkupCollection||(window.$hsCopyMarkupCollection=[]),document.querySelectorAll("[data-hs-copy-markup]:not(.--prevent-on-load-init)").forEach(function(r){if(!window.$hsCopyMarkupCollection.find(function(h){var d;return((d=h==null?void 0:h.element)===null||d===void 0?void 0:d.el)===r})){var a=r.getAttribute("data-hs-copy-markup"),u=a?JSON.parse(a):{};new c(r,u)}})},c}(p(737).default);window.addEventListener("load",function(){b.autoInit()}),typeof window<"u"&&(window.HSCopyMarkup=b),f.default=b},610:function(l,f,p){/*
 * HSDropdown
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(a,u){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,d){h.__proto__=d}||function(h,d){for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&(h[g]=d[g])},m(a,u)},function(a,u){if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");function h(){this.constructor=a}m(a,u),a.prototype=u===null?Object.create(u):(h.prototype=u.prototype,new h)}),_=this&&this.__spreadArray||function(a,u,h){if(h||arguments.length===2)for(var d,g=0,y=u.length;g<y;g++)!d&&g in u||(d||(d=Array.prototype.slice.call(u,0,g)),d[g]=u[g]);return a.concat(d||Array.prototype.slice.call(u))};Object.defineProperty(f,"__esModule",{value:!0});var w=p(969),b=p(492),v=p(737),c=p(190),r=function(a){function u(h,d,g){var y=a.call(this,h,d,g)||this;return y.toggle=y.el.querySelector(":scope > .hs-dropdown-toggle")||y.el.children[0],y.menu=y.el.querySelector(":scope > .hs-dropdown-menu"),y.eventMode=(0,w.getClassProperty)(y.el,"--trigger","click"),y.closeMode=(0,w.getClassProperty)(y.el,"--auto-close","true"),y.animationInProcess=!1,y.toggle&&y.menu&&y.init(),y}return C(u,a),u.prototype.init=function(){var h=this;if(this.createCollection(window.$hsDropdownCollection,this),this.toggle.disabled)return!1;this.toggle.addEventListener("click",function(){return h.onClickHandler()}),(0,w.isIOS)()||(0,w.isIpadOS)()||(this.el.addEventListener("mouseenter",function(){return h.onMouseEnterHandler()}),this.el.addEventListener("mouseleave",function(){return h.onMouseLeaveHandler()}))},u.prototype.resizeHandler=function(){this.eventMode=(0,w.getClassProperty)(this.el,"--trigger","click")},u.prototype.onClickHandler=function(){this.el.classList.contains("open")&&!this.menu.classList.contains("hidden")?this.close():this.open()},u.prototype.onMouseEnterHandler=function(){if(this.eventMode!=="hover")return!1;this.el._popper&&this.forceClearState(),!this.el.classList.contains("open")&&this.menu.classList.contains("hidden")&&this.open()},u.prototype.onMouseLeaveHandler=function(){if(this.eventMode!=="hover")return!1;this.el.classList.contains("open")&&!this.menu.classList.contains("hidden")&&this.close()},u.prototype.destroyPopper=function(){this.menu.classList.remove("block"),this.menu.classList.add("hidden"),this.menu.style.inset=null,this.menu.style.position=null,this.el&&this.el._popper&&this.el._popper.destroy(),this.animationInProcess=!1},u.prototype.absoluteStrategyModifiers=function(){var h=this;return[{name:"applyStyles",fn:function(d){var g=(window.getComputedStyle(h.el).getPropertyValue("--strategy")||"absolute").replace(" ",""),y=(window.getComputedStyle(h.el).getPropertyValue("--adaptive")||"adaptive").replace(" ","");d.state.elements.popper.style.position=g,d.state.elements.popper.style.transform=y==="adaptive"?d.state.styles.popper.transform:null,d.state.elements.popper.style.top=null,d.state.elements.popper.style.bottom=null,d.state.elements.popper.style.left=null,d.state.elements.popper.style.right=null,d.state.elements.popper.style.margin=0}},{name:"computeStyles",options:{adaptive:!1}}]},u.prototype.open=function(){var h=this;if(this.el.classList.contains("open")||this.animationInProcess)return!1;this.animationInProcess=!0;var d=(window.getComputedStyle(this.el).getPropertyValue("--placement")||"").replace(" ",""),g=(window.getComputedStyle(this.el).getPropertyValue("--flip")||"true").replace(" ",""),y=(window.getComputedStyle(this.el).getPropertyValue("--strategy")||"fixed").replace(" ",""),S=parseInt((window.getComputedStyle(this.el).getPropertyValue("--offset")||"10").replace(" ",""));y!=="static"&&(this.el._popper=(0,b.createPopper)(this.el,this.menu,{placement:c.POSITIONS[d]||"bottom-start",strategy:y,modifiers:_(_([],y!=="fixed"?this.absoluteStrategyModifiers():[],!0),[{name:"flip",enabled:g==="true"},{name:"offset",options:{offset:[0,S]}}],!1)})),this.menu.style.margin=null,this.menu.classList.remove("hidden"),this.menu.classList.add("block"),setTimeout(function(){h.el.classList.add("open"),h.animationInProcess=!1}),this.fireEvent("open",this.el),(0,w.dispatch)("open.hs.dropdown",this.el,this.el)},u.prototype.close=function(h){var d=this;if(h===void 0&&(h=!0),this.animationInProcess||!this.el.classList.contains("open"))return!1;if(this.animationInProcess=!0,h){var g=this.el.querySelector("[data-hs-dropdown-transition]")||this.menu;(0,w.afterTransition)(g,function(){return d.destroyPopper()})}else this.destroyPopper();this.menu.style.margin=null,this.el.classList.remove("open"),this.fireEvent("close",this.el),(0,w.dispatch)("close.hs.dropdown",this.el,this.el)},u.prototype.forceClearState=function(){this.destroyPopper(),this.menu.style.margin=null,this.el.classList.remove("open")},u.getInstance=function(h,d){var g=window.$hsDropdownCollection.find(function(y){return y.element.el===(typeof h=="string"?document.querySelector(h):h)});return g?d?g:g.element.el:null},u.autoInit=function(){if(window.$hsDropdownCollection||(window.$hsDropdownCollection=[]),document.querySelectorAll(".hs-dropdown:not(.--prevent-on-load-init)").forEach(function(d){window.$hsDropdownCollection.find(function(g){var y;return((y=g==null?void 0:g.element)===null||y===void 0?void 0:y.el)===d})||new u(d)}),window.$hsDropdownCollection){document.addEventListener("keydown",function(d){return u.accessibility(d)}),window.addEventListener("click",function(d){var g=d.target;u.closeCurrentlyOpened(g)});var h=window.innerWidth;window.addEventListener("resize",function(){window.innerWidth!==h&&(h=innerWidth,u.closeCurrentlyOpened(null,!1))})}},u.open=function(h){var d=window.$hsDropdownCollection.find(function(g){return g.element.el===(typeof h=="string"?document.querySelector(h):h)});d&&d.element.menu.classList.contains("hidden")&&d.element.open()},u.close=function(h){var d=window.$hsDropdownCollection.find(function(g){return g.element.el===(typeof h=="string"?document.querySelector(h):h)});d&&!d.element.menu.classList.contains("hidden")&&d.element.close()},u.accessibility=function(h){this.history=w.menuSearchHistory;var d=window.$hsDropdownCollection.find(function(g){return g.element.el.classList.contains("open")});if(d&&(c.DROPDOWN_ACCESSIBILITY_KEY_SET.includes(h.code)||h.code.length===4&&h.code[h.code.length-1].match(/^[A-Z]*$/))&&!h.metaKey&&!d.element.menu.querySelector("input:focus"))switch(console.log("Key code:",h.code),h.code){case"Escape":d.element.menu.querySelector(".hs-select.active")||(h.preventDefault(),this.onEscape(h));break;case"Enter":d.element.menu.querySelector(".hs-select button:focus")||d.element.menu.querySelector(".hs-collapse-toggle:focus")||this.onEnter(h);break;case"ArrowUp":h.preventDefault(),this.onArrow();break;case"ArrowDown":h.preventDefault(),this.onArrow(!1);break;case"Home":h.preventDefault(),this.onStartEnd();break;case"End":h.preventDefault(),this.onStartEnd(!1);break;default:h.preventDefault(),this.onFirstLetter(h.key)}},u.onEscape=function(h){var d=h.target.closest(".hs-dropdown.open");if(window.$hsDropdownCollection.find(function(y){return y.element.el===d})){var g=window.$hsDropdownCollection.find(function(y){return y.element.el===d});g&&(g.element.close(),g.element.toggle.focus())}else this.closeCurrentlyOpened()},u.onEnter=function(h){var d=h.target.parentElement;if(window.$hsDropdownCollection.find(function(y){return y.element.el===d})){h.preventDefault();var g=window.$hsDropdownCollection.find(function(y){return y.element.el===d});g&&g.element.open()}},u.onArrow=function(h){h===void 0&&(h=!0);var d=window.$hsDropdownCollection.find(function(A){return A.element.el.classList.contains("open")});if(d){var g=d.element.menu;if(!g)return!1;var y=(h?Array.from(g.querySelectorAll("a:not([hidden]), .hs-dropdown > button:not([hidden])")).reverse():Array.from(g.querySelectorAll("a:not([hidden]), .hs-dropdown > button:not([hidden])"))).filter(function(A){return!A.classList.contains("disabled")}),S=g.querySelector("a:focus, button:focus"),x=y.findIndex(function(A){return A===S});x+1<y.length&&x++,y[x].focus()}},u.onStartEnd=function(h){h===void 0&&(h=!0);var d=window.$hsDropdownCollection.find(function(S){return S.element.el.classList.contains("open")});if(d){var g=d.element.menu;if(!g)return!1;var y=(h?Array.from(g.querySelectorAll("a")):Array.from(g.querySelectorAll("a")).reverse()).filter(function(S){return!S.classList.contains("disabled")});y.length&&y[0].focus()}},u.onFirstLetter=function(h){var d=this,g=window.$hsDropdownCollection.find(function(M){return M.element.el.classList.contains("open")});if(g){var y=g.element.menu;if(!y)return!1;var S=Array.from(y.querySelectorAll("a")),x=function(){return S.findIndex(function(M,ae){return M.innerText.toLowerCase().charAt(0)===h.toLowerCase()&&d.history.existsInHistory(ae)})},A=x();A===-1&&(this.history.clearHistory(),A=x()),A!==-1&&(S[A].focus(),this.history.addHistory(A))}},u.closeCurrentlyOpened=function(h,d){h===void 0&&(h=null),d===void 0&&(d=!0);var g=h&&h.closest(".hs-dropdown")&&h.closest(".hs-dropdown").parentElement.closest(".hs-dropdown")?h.closest(".hs-dropdown").parentElement.closest(".hs-dropdown"):null,y=g?window.$hsDropdownCollection.filter(function(S){return S.element.el.classList.contains("open")&&S.element.menu.closest(".hs-dropdown").parentElement.closest(".hs-dropdown")===g}):window.$hsDropdownCollection.filter(function(S){return S.element.el.classList.contains("open")});h&&h.closest(".hs-dropdown")&&(0,w.getClassPropertyAlt)(h.closest(".hs-dropdown"),"--auto-close")==="inside"&&(y=y.filter(function(S){return S.element.el!==h.closest(".hs-dropdown")})),y&&y.forEach(function(S){if(S.element.closeMode==="false"||S.element.closeMode==="outside")return!1;S.element.close(d)})},u.on=function(h,d,g){var y=window.$hsDropdownCollection.find(function(S){return S.element.el===(typeof d=="string"?document.querySelector(d):d)});y&&(y.element.events[h]=g)},u}(v.default);window.addEventListener("load",function(){r.autoInit()}),window.addEventListener("resize",function(){window.$hsDropdownCollection||(window.$hsDropdownCollection=[]),window.$hsDropdownCollection.forEach(function(a){return a.element.resizeHandler()})}),typeof window<"u"&&(window.HSDropdown=r),f.default=r},371:function(l,f,p){/*
 * HSInputNumber
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(b,v){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,r){c.__proto__=r}||function(c,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(c[a]=r[a])},m(b,v)},function(b,v){if(typeof v!="function"&&v!==null)throw new TypeError("Class extends value "+String(v)+" is not a constructor or null");function c(){this.constructor=b}m(b,v),b.prototype=v===null?Object.create(v):(c.prototype=v.prototype,new c)});Object.defineProperty(f,"__esModule",{value:!0});var _=p(969),w=function(b){function v(c,r){var a=b.call(this,c,r)||this;return a.input=a.el.querySelector("[data-hs-input-number-input]")||null,a.increment=a.el.querySelector("[data-hs-input-number-increment]")||null,a.decrement=a.el.querySelector("[data-hs-input-number-decrement]")||null,a.inputValue=a.input?parseInt(a.input.value):0,a.init(),a}return C(v,b),v.prototype.init=function(){this.createCollection(window.$hsInputNumberCollection,this),this.input&&this.increment&&this.build()},v.prototype.build=function(){this.input&&this.buildInput(),this.increment&&this.buildIncrement(),this.decrement&&this.buildDecrement(),this.inputValue<=0&&(this.inputValue=0,this.input.value="0",this.changeValue()),this.input.hasAttribute("disabled")&&this.disableButtons()},v.prototype.buildInput=function(){var c=this;this.input.addEventListener("input",function(){return c.changeValue()})},v.prototype.buildIncrement=function(){var c=this;this.increment.addEventListener("click",function(){c.changeValue("increment")})},v.prototype.buildDecrement=function(){var c=this;this.decrement.addEventListener("click",function(){c.changeValue("decrement")})},v.prototype.changeValue=function(c){c===void 0&&(c="none");var r={inputValue:this.inputValue};switch(c){case"increment":this.inputValue+=1,this.input.value=this.inputValue.toString();break;case"decrement":this.inputValue-=this.inputValue<=0?0:1,this.input.value=this.inputValue.toString();break;default:this.inputValue=parseInt(this.input.value)<=0?0:parseInt(this.input.value),this.inputValue<=0&&(this.input.value=this.inputValue.toString())}r.inputValue=this.inputValue,this.inputValue===0?(this.el.classList.add("disabled"),this.decrement&&this.disableButtons("decrement")):(this.el.classList.remove("disabled"),this.decrement&&this.enableButtons("decrement")),this.fireEvent("change",r),(0,_.dispatch)("change.hs.inputNumber",this.el,r)},v.prototype.disableButtons=function(c){c===void 0&&(c="all"),c==="all"?(this.increment.tagName!=="BUTTON"&&this.increment.tagName!=="INPUT"||this.increment.setAttribute("disabled","disabled"),this.decrement.tagName!=="BUTTON"&&this.decrement.tagName!=="INPUT"||this.decrement.setAttribute("disabled","disabled")):c==="increment"?this.increment.tagName!=="BUTTON"&&this.increment.tagName!=="INPUT"||this.increment.setAttribute("disabled","disabled"):c==="decrement"&&(this.decrement.tagName!=="BUTTON"&&this.decrement.tagName!=="INPUT"||this.decrement.setAttribute("disabled","disabled"))},v.prototype.enableButtons=function(c){c===void 0&&(c="all"),c==="all"?(this.increment.tagName!=="BUTTON"&&this.increment.tagName!=="INPUT"||this.increment.removeAttribute("disabled"),this.decrement.tagName!=="BUTTON"&&this.decrement.tagName!=="INPUT"||this.decrement.removeAttribute("disabled")):c==="increment"?this.increment.tagName!=="BUTTON"&&this.increment.tagName!=="INPUT"||this.increment.removeAttribute("disabled"):c==="decrement"&&(this.decrement.tagName!=="BUTTON"&&this.decrement.tagName!=="INPUT"||this.decrement.removeAttribute("disabled"))},v.getInstance=function(c,r){var a=window.$hsInputNumberCollection.find(function(u){return u.element.el===(typeof c=="string"?document.querySelector(c):c)});return a?r?a:a.element:null},v.autoInit=function(){window.$hsInputNumberCollection||(window.$hsInputNumberCollection=[]),document.querySelectorAll("[data-hs-input-number]:not(.--prevent-on-load-init)").forEach(function(c){window.$hsInputNumberCollection.find(function(r){var a;return((a=r==null?void 0:r.element)===null||a===void 0?void 0:a.el)===c})||new v(c)})},v}(p(737).default);window.addEventListener("load",function(){w.autoInit()}),typeof window<"u"&&(window.HSInputNumber=w),f.default=w},770:function(l,f,p){/*
 * HSOverlay
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(v,c){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(r[u]=a[u])},m(v,c)},function(v,c){if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");function r(){this.constructor=v}m(v,c),v.prototype=c===null?Object.create(c):(r.prototype=c.prototype,new r)}),_=this&&this.__assign||function(){return _=Object.assign||function(v){for(var c,r=1,a=arguments.length;r<a;r++)for(var u in c=arguments[r])Object.prototype.hasOwnProperty.call(c,u)&&(v[u]=c[u]);return v},_.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0});var w=p(969),b=function(v){function c(r,a,u){var h,d,g=v.call(this,r,a,u)||this,y=r.getAttribute("data-hs-overlay-options"),S=y?JSON.parse(y):{},x=_(_({},S),a);return g.hiddenClass=(x==null?void 0:x.hiddenClass)||"hidden",g.isClosePrev=(h=x==null?void 0:x.isClosePrev)===null||h===void 0||h,g.backdropClasses=(d=x==null?void 0:x.backdropClasses)!==null&&d!==void 0?d:"transition duration fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 hs-overlay-backdrop",g.openNextOverlay=!1,g.autoHide=null,g.overlayId=g.el.getAttribute("data-hs-overlay"),g.overlay=document.querySelector(g.overlayId),g.overlay&&(g.isCloseWhenClickInside=(0,w.getClassProperty)(g.overlay,"--close-when-click-inside","false")||"false",g.isTabAccessibilityLimited=(0,w.getClassProperty)(g.overlay,"--tab-accessibility-limited","true")||"true",g.hasAutofocus=(0,w.getClassProperty)(g.overlay,"--has-autofocus","true")||"true",g.hasAbilityToCloseOnBackdropClick=g.overlay.getAttribute("data-hs-overlay-keyboard")||"true"),g.overlay&&g.init(),g}return C(c,v),c.prototype.init=function(){var r=this;this.createCollection(window.$hsOverlayCollection,this),this.el.addEventListener("click",function(){r.overlay.classList.contains(r.hiddenClass)?r.open():r.close()}),this.overlay.addEventListener("click",function(a){a.target.id&&"#".concat(a.target.id)===r.overlayId&&r.isCloseWhenClickInside==="true"&&r.hasAbilityToCloseOnBackdropClick==="true"&&r.close()})},c.prototype.hideAuto=function(){var r=this,a=parseInt((0,w.getClassProperty)(this.overlay,"--auto-hide","0"));a&&(this.autoHide=setTimeout(function(){r.close()},a))},c.prototype.checkTimer=function(){this.autoHide&&(clearTimeout(this.autoHide),this.autoHide=null)},c.prototype.buildBackdrop=function(){var r=this,a=this.overlay.classList.value.split(" "),u=parseInt(window.getComputedStyle(this.overlay).getPropertyValue("z-index")),h=this.overlay.getAttribute("data-hs-overlay-backdrop-container")||!1,d=document.createElement("div"),g=this.backdropClasses,y=(0,w.getClassProperty)(this.overlay,"--overlay-backdrop","true")!=="static",S=(0,w.getClassProperty)(this.overlay,"--overlay-backdrop","true")==="false";d.id="".concat(this.overlay.id,"-backdrop"),"style"in d&&(d.style.zIndex="".concat(u-1));for(var x=0,A=a;x<A.length;x++){var M=A[x];(M.startsWith("hs-overlay-backdrop-open:")||M.includes(":hs-overlay-backdrop-open:"))&&(g+=" ".concat(M))}S||(h&&((d=document.querySelector(h).cloneNode(!0)).classList.remove("hidden"),g="".concat(d.classList.toString()),d.classList.value=""),y&&d.addEventListener("click",function(){return r.close()},!0),d.setAttribute("data-hs-overlay-backdrop-template",""),document.body.appendChild(d),setTimeout(function(){d.classList.value=g}))},c.prototype.destroyBackdrop=function(){var r=document.querySelector("#".concat(this.overlay.id,"-backdrop"));r&&(this.openNextOverlay&&(r.style.transitionDuration="".concat(1.8*parseFloat(window.getComputedStyle(r).transitionDuration.replace(/[^\d.-]/g,"")),"s")),r.classList.add("opacity-0"),(0,w.afterTransition)(r,function(){r.remove()}))},c.prototype.focusElement=function(){var r=this.overlay.querySelector("[autofocus]");if(!r)return!1;r.focus()},c.prototype.open=function(){var r=this;if(!this.overlay)return!1;var a=window.$hsOverlayCollection.find(function(h){return h.element.overlay===document.querySelector(".hs-overlay.open")}),u=(0,w.getClassProperty)(this.overlay,"--body-scroll","false")!=="true";if(this.isClosePrev&&a)return this.openNextOverlay=!0,a.element.close().then(function(){r.open(),r.openNextOverlay=!1});u&&(document.body.style.overflow="hidden"),this.buildBackdrop(),this.checkTimer(),this.hideAuto(),this.overlay.classList.remove(this.hiddenClass),this.overlay.setAttribute("aria-overlay","true"),this.overlay.setAttribute("tabindex","-1"),setTimeout(function(){if(r.overlay.classList.contains(r.hiddenClass))return!1;r.overlay.classList.add("open"),r.fireEvent("open",r.el),(0,w.dispatch)("open.hs.overlay",r.el,r.el),r.hasAutofocus==="true"&&r.focusElement()},50)},c.prototype.close=function(){var r=this;return new Promise(function(a){if(!r.overlay)return!1;r.overlay.classList.remove("open"),r.overlay.removeAttribute("aria-overlay"),r.overlay.removeAttribute("tabindex"),(0,w.afterTransition)(r.overlay,function(){if(r.overlay.classList.contains("open"))return!1;r.overlay.classList.add(r.hiddenClass),r.destroyBackdrop(),r.fireEvent("close",r.el),(0,w.dispatch)("close.hs.overlay",r.el,r.el),document.body.style.overflow="",a(r.overlay)})})},c.getInstance=function(r,a){var u=window.$hsOverlayCollection.find(function(h){return h.element.el===(typeof r=="string"?document.querySelector(r):r)||h.element.overlay===(typeof r=="string"?document.querySelector(r):r)});return u?a?u:u.element.el:null},c.autoInit=function(){window.$hsOverlayCollection||(window.$hsOverlayCollection=[]),document.querySelectorAll("[data-hs-overlay]:not(.--prevent-on-load-init)").forEach(function(r){window.$hsOverlayCollection.find(function(a){var u;return((u=a==null?void 0:a.element)===null||u===void 0?void 0:u.el)===r})||new c(r)}),window.$hsOverlayCollection&&document.addEventListener("keydown",function(r){return c.accessibility(r)})},c.open=function(r){var a=window.$hsOverlayCollection.find(function(u){return u.element.el===(typeof r=="string"?document.querySelector(r):r)||u.element.overlay===(typeof r=="string"?document.querySelector(r):r)});a&&a.element.overlay.classList.contains(a.element.hiddenClass)&&a.element.open()},c.close=function(r){var a=window.$hsOverlayCollection.find(function(u){return u.element.el===(typeof r=="string"?document.querySelector(r):r)||u.element.overlay===(typeof r=="string"?document.querySelector(r):r)});a&&!a.element.overlay.classList.contains(a.element.hiddenClass)&&a.element.close()},c.accessibility=function(r){var a,u,h=window.$hsOverlayCollection.filter(function(x){return x.element.overlay.classList.contains("open")}),d=h[h.length-1],g=(u=(a=d==null?void 0:d.element)===null||a===void 0?void 0:a.overlay)===null||u===void 0?void 0:u.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),y=[];g!=null&&g.length&&g.forEach(function(x){(0,w.isParentOrElementHidden)(x)||y.push(x)});var S=d&&!r.metaKey;if(S&&d.element.isTabAccessibilityLimited==="false"&&r.code==="Tab")return!1;S&&y.length&&r.code==="Tab"&&(r.preventDefault(),this.onTab(d,y)),S&&r.code==="Escape"&&(r.preventDefault(),this.onEscape(d))},c.onEscape=function(r){r&&r.element.close()},c.onTab=function(r,a){if(!a.length)return!1;var u=r.element.overlay.querySelector(":focus"),h=Array.from(a).indexOf(u);h>-1?a[(h+1)%a.length].focus():a[0].focus()},c.on=function(r,a,u){var h=window.$hsOverlayCollection.find(function(d){return d.element.el===(typeof a=="string"?document.querySelector(a):a)||d.element.overlay===(typeof a=="string"?document.querySelector(a):a)});h&&(h.element.events[r]=u)},c}(p(737).default);window.addEventListener("load",function(){b.autoInit()}),typeof window<"u"&&(window.HSOverlay=b),f.default=b},659:function(l,f,p){/*
 * HSPinInput
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(v,c){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(r[u]=a[u])},m(v,c)},function(v,c){if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");function r(){this.constructor=v}m(v,c),v.prototype=c===null?Object.create(c):(r.prototype=c.prototype,new r)}),_=this&&this.__assign||function(){return _=Object.assign||function(v){for(var c,r=1,a=arguments.length;r<a;r++)for(var u in c=arguments[r])Object.prototype.hasOwnProperty.call(c,u)&&(v[u]=c[u]);return v},_.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0});var w=p(969),b=function(v){function c(r,a){var u=v.call(this,r,a)||this,h=r.getAttribute("data-hs-pin-input"),d=h?JSON.parse(h):{},g=_(_({},d),a);return u.items=u.el.querySelectorAll("[data-hs-pin-input-item]"),u.currentItem=null,u.currentValue=new Array(u.items.length).fill(""),u.placeholders=[],u.availableCharsRE=new RegExp((g==null?void 0:g.availableCharsRE)||"^[a-zA-Z0-9]+$"),u.init(),u}return C(c,v),c.prototype.init=function(){this.createCollection(window.$hsPinInputCollection,this),this.items.length&&this.build()},c.prototype.build=function(){this.buildInputItems()},c.prototype.buildInputItems=function(){var r=this;this.items.forEach(function(a,u){r.placeholders.push(a.getAttribute("placeholder")||""),a.hasAttribute("autofocus")&&r.onFocusIn(u),a.addEventListener("input",function(h){return r.onInput(h,u)}),a.addEventListener("paste",function(h){return r.onPaste(h)}),a.addEventListener("keydown",function(h){return r.onKeydown(h,u)}),a.addEventListener("focusin",function(){return r.onFocusIn(u)}),a.addEventListener("focusout",function(){return r.onFocusOut(u)})})},c.prototype.checkIfNumber=function(r){return r.match(this.availableCharsRE)},c.prototype.autoFillAll=function(r){var a=this;Array.from(r).forEach(function(u,h){if(!(a!=null&&a.items[h]))return!1;a.items[h].value=u,a.items[h].dispatchEvent(new Event("input",{bubbles:!0}))})},c.prototype.setCurrentValue=function(){this.currentValue=Array.from(this.items).map(function(r){return r.value})},c.prototype.toggleCompleted=function(){this.currentValue.includes("")?this.el.classList.remove("active"):this.el.classList.add("active")},c.prototype.onInput=function(r,a){var u=r.target.value;if(this.currentItem=r.target,this.currentItem.value="",this.currentItem.value=u[u.length-1],!this.checkIfNumber(this.currentItem.value))return this.currentItem.value=this.currentValue[a]||"",!1;if(this.setCurrentValue(),this.currentItem.value){if(a<this.items.length-1&&this.items[a+1].focus(),!this.currentValue.includes("")){var h={currentValue:this.currentValue};this.fireEvent("completed",h),(0,w.dispatch)("completed.hs.pinInput",this.el,h)}this.toggleCompleted()}else a>0&&this.items[a-1].focus()},c.prototype.onKeydown=function(r,a){r.key==="Backspace"&&a>0&&(this.items[a].value===""?(this.items[a-1].value="",this.items[a-1].focus()):this.items[a].value=""),this.setCurrentValue(),this.toggleCompleted()},c.prototype.onFocusIn=function(r){this.items[r].setAttribute("placeholder","")},c.prototype.onFocusOut=function(r){this.items[r].setAttribute("placeholder",this.placeholders[r])},c.prototype.onPaste=function(r){var a=this;r.preventDefault(),this.items.forEach(function(u){document.activeElement===u&&a.autoFillAll(r.clipboardData.getData("text"))})},c.getInstance=function(r,a){var u=window.$hsPinInputCollection.find(function(h){return h.element.el===(typeof r=="string"?document.querySelector(r):r)});return u?a?u:u.element:null},c.autoInit=function(){window.$hsPinInputCollection||(window.$hsPinInputCollection=[]),document.querySelectorAll("[data-hs-pin-input]:not(.--prevent-on-load-init)").forEach(function(r){window.$hsPinInputCollection.find(function(a){var u;return((u=a==null?void 0:a.element)===null||u===void 0?void 0:u.el)===r})||new c(r)})},c}(p(737).default);window.addEventListener("load",function(){b.autoInit()}),typeof window<"u"&&(window.HSPinInput=b),f.default=b},139:function(l,f,p){/*
 * HSRemoveElement
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(v,c){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(r[u]=a[u])},m(v,c)},function(v,c){if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");function r(){this.constructor=v}m(v,c),v.prototype=c===null?Object.create(c):(r.prototype=c.prototype,new r)}),_=this&&this.__assign||function(){return _=Object.assign||function(v){for(var c,r=1,a=arguments.length;r<a;r++)for(var u in c=arguments[r])Object.prototype.hasOwnProperty.call(c,u)&&(v[u]=c[u]);return v},_.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0});var w=p(969),b=function(v){function c(r,a){var u=v.call(this,r,a)||this,h=r.getAttribute("data-hs-remove-element-options"),d=h?JSON.parse(h):{},g=_(_({},d),a);return u.removeTargetId=u.el.getAttribute("data-hs-remove-element"),u.removeTarget=document.querySelector(u.removeTargetId),u.removeTargetAnimationClass=(g==null?void 0:g.removeTargetAnimationClass)||"hs-removing",u.removeTarget&&u.init(),u}return C(c,v),c.prototype.init=function(){var r=this;this.createCollection(window.$hsRemoveElementCollection,this),this.el.addEventListener("click",function(){return r.remove()})},c.prototype.remove=function(){var r=this;if(!this.removeTarget)return!1;this.removeTarget.classList.add(this.removeTargetAnimationClass),(0,w.afterTransition)(this.removeTarget,function(){r.removeTarget.remove()})},c.autoInit=function(){window.$hsRemoveElementCollection||(window.$hsRemoveElementCollection=[]),document.querySelectorAll("[data-hs-remove-element]:not(.--prevent-on-load-init)").forEach(function(r){window.$hsRemoveElementCollection.find(function(a){var u;return((u=a==null?void 0:a.element)===null||u===void 0?void 0:u.el)===r})||new c(r)})},c}(p(737).default);window.addEventListener("load",function(){b.autoInit()}),typeof window<"u"&&(window.HSRemoveElement=b),f.default=b},591:function(l,f,p){/*
 * HSScrollspy
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(b,v){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,r){c.__proto__=r}||function(c,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(c[a]=r[a])},m(b,v)},function(b,v){if(typeof v!="function"&&v!==null)throw new TypeError("Class extends value "+String(v)+" is not a constructor or null");function c(){this.constructor=b}m(b,v),b.prototype=v===null?Object.create(v):(c.prototype=v.prototype,new c)});Object.defineProperty(f,"__esModule",{value:!0});var _=p(969),w=function(b){function v(c,r){r===void 0&&(r={});var a=b.call(this,c,r)||this;return a.activeSection=null,a.contentId=a.el.getAttribute("data-hs-scrollspy"),a.content=document.querySelector(a.contentId),a.links=a.el.querySelectorAll("[href]"),a.sections=[],a.scrollableId=a.el.getAttribute("data-hs-scrollspy-scrollable-parent"),a.scrollable=a.scrollableId?document.querySelector(a.scrollableId):document,a.init(),a}return C(v,b),v.prototype.init=function(){var c=this;this.createCollection(window.$hsScrollspyCollection,this),this.links.forEach(function(r){c.sections.push(c.scrollable.querySelector(r.getAttribute("href")))}),Array.from(this.sections).forEach(function(r){if(!r.getAttribute("id"))return!1;c.scrollable.addEventListener("scroll",function(a){return c.update(a,r)})}),this.links.forEach(function(r){r.addEventListener("click",function(a){if(a.preventDefault(),r.getAttribute("href")==="javascript:;")return!1;c.scrollTo(r)})})},v.prototype.update=function(c,r){var a=parseInt((0,_.getClassProperty)(this.el,"--scrollspy-offset","0")),u=parseInt((0,_.getClassProperty)(r,"--scrollspy-offset"))||a,h=c.target===document?0:parseInt(String(c.target.getBoundingClientRect().top)),d=parseInt(String(r.getBoundingClientRect().top))-u-h,g=r.offsetHeight;if(d<=0&&d+g>0){if(this.activeSection===r)return!1;this.links.forEach(function(A){A.classList.remove("active")});var y=this.el.querySelector('[href="#'.concat(r.getAttribute("id"),'"]'));if(y){y.classList.add("active");var S=y.closest("[data-hs-scrollspy-group]");if(S){var x=S.querySelector("[href]");x&&x.classList.add("active")}}this.activeSection=r}},v.prototype.scrollTo=function(c){var r=c.getAttribute("href"),a=document.querySelector(r),u=parseInt((0,_.getClassProperty)(this.el,"--scrollspy-offset","0")),h=parseInt((0,_.getClassProperty)(a,"--scrollspy-offset"))||u,d=this.scrollable===document?0:this.scrollable.offsetTop,g=a.offsetTop-h-d,y=this.scrollable===document?window:this.scrollable,S=function(){window.history.replaceState(null,null,c.getAttribute("href")),"scrollTo"in y&&y.scrollTo({top:g,left:0,behavior:"smooth"})},x=this.fireEvent("beforeScroll",this.el);(0,_.dispatch)("beforeScroll.hs.scrollspy",this.el,this.el),x instanceof Promise?x.then(function(){return S()}):S()},v.getInstance=function(c,r){r===void 0&&(r=!1);var a=window.$hsScrollspyCollection.find(function(u){return u.element.el===(typeof c=="string"?document.querySelector(c):c)});return a?r?a:a.element.el:null},v.autoInit=function(){window.$hsScrollspyCollection||(window.$hsScrollspyCollection=[]),document.querySelectorAll("[data-hs-scrollspy]:not(.--prevent-on-load-init)").forEach(function(c){window.$hsScrollspyCollection.find(function(r){var a;return((a=r==null?void 0:r.element)===null||a===void 0?void 0:a.el)===c})||new v(c)})},v}(p(737).default);window.addEventListener("load",function(){w.autoInit()}),typeof window<"u"&&(window.HSScrollspy=w),f.default=w},961:function(l,f,p){/*
 * HSTogglePassword
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(r,a){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,h){u.__proto__=h}||function(u,h){for(var d in h)Object.prototype.hasOwnProperty.call(h,d)&&(u[d]=h[d])},m(r,a)},function(r,a){if(typeof a!="function"&&a!==null)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function u(){this.constructor=r}m(r,a),r.prototype=a===null?Object.create(a):(u.prototype=a.prototype,new u)}),_=this&&this.__assign||function(){return _=Object.assign||function(r){for(var a,u=1,h=arguments.length;u<h;u++)for(var d in a=arguments[u])Object.prototype.hasOwnProperty.call(a,d)&&(r[d]=a[d]);return r},_.apply(this,arguments)},w=this&&this.__awaiter||function(r,a,u,h){return new(u||(u=Promise))(function(d,g){function y(A){try{x(h.next(A))}catch(M){g(M)}}function S(A){try{x(h.throw(A))}catch(M){g(M)}}function x(A){var M;A.done?d(A.value):(M=A.value,M instanceof u?M:new u(function(ae){ae(M)})).then(y,S)}x((h=h.apply(r,a||[])).next())})},b=this&&this.__generator||function(r,a){var u,h,d,g,y={label:0,sent:function(){if(1&d[0])throw d[1];return d[1]},trys:[],ops:[]};return g={next:S(0),throw:S(1),return:S(2)},typeof Symbol=="function"&&(g[Symbol.iterator]=function(){return this}),g;function S(x){return function(A){return function(M){if(u)throw new TypeError("Generator is already executing.");for(;g&&(g=0,M[0]&&(y=0)),y;)try{if(u=1,h&&(d=2&M[0]?h.return:M[0]?h.throw||((d=h.return)&&d.call(h),0):h.next)&&!(d=d.call(h,M[1])).done)return d;switch(h=0,d&&(M=[2&M[0],d.value]),M[0]){case 0:case 1:d=M;break;case 4:return y.label++,{value:M[1],done:!1};case 5:y.label++,h=M[1],M=[0];continue;case 7:M=y.ops.pop(),y.trys.pop();continue;default:if(d=y.trys,!((d=d.length>0&&d[d.length-1])||M[0]!==6&&M[0]!==2)){y=0;continue}if(M[0]===3&&(!d||M[1]>d[0]&&M[1]<d[3])){y.label=M[1];break}if(M[0]===6&&y.label<d[1]){y.label=d[1],d=M;break}if(d&&y.label<d[2]){y.label=d[2],y.ops.push(M);break}d[2]&&y.ops.pop(),y.trys.pop();continue}M=a.call(r,y)}catch(ae){M=[6,ae],h=0}finally{u=d=0}if(5&M[0])throw M[1];return{value:M[0]?M[1]:void 0,done:!0}}([x,A])}}};Object.defineProperty(f,"__esModule",{value:!0});var v=p(969),c=function(r){function a(u,h){var d=r.call(this,u,h)||this,g=u.getAttribute("data-hs-search-by-json"),y=g?JSON.parse(g):{},S=_(_({},y),h);return d.jsonUrl=S.jsonUrl,d.minChars=S.minChars||3,d.dropdownTemplate=S.dropdownTemplate||"<div></div>",d.dropdownClasses=S.dropdownClasses||"absolute top-full z-[1] w-full bg-white border border-gray-200 rounded-md hidden mt-2",d.dropdownItemTemplate=S.dropdownItemTemplate||"<div></div>",d.dropdownItemTemplatesByType=S.dropdownItemTemplatesByType||null,d.dropdownItemClasses=S.dropdownItemClasses||"py-2 px-4 w-full cursor-pointer text-sm hover:bg-gray-300 hover:text-black",d.highlightedTextTagName=S.highlightedTextTagName||"u",d.highlightedTextClasses=S.highlightedTextClasses||"bg-green-200",d.jsonUrl&&d.fetchData().then(function(){return d.init()}),d}return C(a,r),a.prototype.init=function(){var u=this;this.createCollection(window.$hsSearchByJsonCollection,this),this.buildDropdown(),this.el.addEventListener("input",(0,v.debounce)(function(h){u.val=h.target.value,u.val.length>u.minChars?u.searchData(u.val):u.result=[],u.result.length?u.dropdown.classList.remove("hidden"):u.dropdown.classList.add("hidden"),u.buildItems(),console.log("result:",u.result)}))},a.prototype.fetchData=function(){return w(this,void 0,void 0,function(){var u=this;return b(this,function(h){switch(h.label){case 0:return[4,fetch(this.jsonUrl).then(function(d){return d.json()}).then(function(d){return u.json=d})];case 1:return h.sent(),[2]}})})},a.prototype.searchData=function(u){this.result=this.json.filter(function(h){var d=u.toLowerCase(),g=h.title.toLowerCase(),y=h.description.toLowerCase();return g.includes(d)||y.includes(d)})},a.prototype.buildDropdown=function(){this.dropdown=(0,v.htmlToElement)(this.dropdownTemplate),this.dropdownClasses&&(0,v.classToClassList)(this.dropdownClasses,this.dropdown),this.el.after(this.dropdown)},a.prototype.buildItems=function(){var u=this;this.dropdown.innerHTML="",this.result.forEach(function(h){var d=(0,v.htmlToElement)('<a class="block" href="'.concat(h.url,'" target="_blank"></a>'));d.append(u.itemTemplate(h)),u.dropdown.append(d)})},a.prototype.itemTemplate=function(u){var h=new RegExp(this.val,"gi"),d=u.title.replace(h,"<".concat(this.highlightedTextTagName,' class="inline-block ').concat(this.highlightedTextClasses,'">').concat(this.val,"</").concat(this.highlightedTextTagName,">")),g=u.description.replace(h,"<".concat(this.highlightedTextTagName,' class="inline-block ').concat(this.highlightedTextClasses,'">').concat(this.val,"</").concat(this.highlightedTextTagName,">")),y=this.dropdownItemTemplatesByType?this.dropdownItemTemplatesByType.find(function(ae){return ae.type===u.type}):null,S=y?(0,v.htmlToElement)(y.markup):(0,v.htmlToElement)(this.dropdownItemTemplate);this.dropdownItemClasses&&(0,v.classToClassList)(this.dropdownItemClasses,S);var x=S.querySelector("[data-title]");x?x.append((0,v.htmlToElement)("<span>".concat(d,"</span>"))):S.append((0,v.htmlToElement)("<span>".concat(d,"</span>")));var A=S.querySelector("[data-description]");if(A)A.append((0,v.htmlToElement)("<span>".concat(g,"</span>")));else if(!y){var M=(0,v.htmlToElement)("<br />");S.append(M),S.append((0,v.htmlToElement)("<span>".concat(g,"</span>")))}return S},a.getInstance=function(u){var h=window.$hsSearchByJsonCollection.find(function(d){return d.element.el===(typeof u=="string"?document.querySelector(u):u)});return h?h.element:null},a.autoInit=function(){window.$hsSearchByJsonCollection||(window.$hsSearchByJsonCollection=[]),document.querySelectorAll("[data-hs-search-by-json]:not(.--prevent-on-load-init)").forEach(function(u){window.$hsSearchByJsonCollection.find(function(h){var d;return((d=h==null?void 0:h.element)===null||d===void 0?void 0:d.el)===u})||new a(u)})},a}(p(737).default);window.addEventListener("load",function(){c.autoInit()}),typeof window<"u"&&(window.HSSearchByJson=c),f.default=c},233:function(l,f,p){/*
 * HSSelect
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(a,u){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,d){h.__proto__=d}||function(h,d){for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&(h[g]=d[g])},m(a,u)},function(a,u){if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");function h(){this.constructor=a}m(a,u),a.prototype=u===null?Object.create(u):(h.prototype=u.prototype,new h)}),_=this&&this.__assign||function(){return _=Object.assign||function(a){for(var u,h=1,d=arguments.length;h<d;h++)for(var g in u=arguments[h])Object.prototype.hasOwnProperty.call(u,g)&&(a[g]=u[g]);return a},_.apply(this,arguments)},w=this&&this.__spreadArray||function(a,u,h){if(h||arguments.length===2)for(var d,g=0,y=u.length;g<y;g++)!d&&g in u||(d||(d=Array.prototype.slice.call(u,0,g)),d[g]=u[g]);return a.concat(d||Array.prototype.slice.call(u))};Object.defineProperty(f,"__esModule",{value:!0});var b=p(969),v=p(737),c=p(190),r=function(a){function u(h,d){var g,y=a.call(this,h,d)||this,S=h.getAttribute("data-hs-select"),x=S?JSON.parse(S):{},A=_(_({},x),d);return y.value=(A==null?void 0:A.value)||y.el.value||null,y.placeholder=(A==null?void 0:A.placeholder)||"Select...",y.hasSearch=(A==null?void 0:A.hasSearch)||!1,y.mode=(A==null?void 0:A.mode)||"default",y.viewport=(A==null?void 0:A.viewport)!==void 0?document.querySelector(A==null?void 0:A.viewport):null,y.isOpened=!!(A!=null&&A.isOpened)||!1,y.isMultiple=y.el.hasAttribute("multiple")||!1,y.isDisabled=y.el.hasAttribute("disabled")||!1,y.toggleTag=(A==null?void 0:A.toggleTag)||null,y.toggleClasses=(A==null?void 0:A.toggleClasses)||null,y.toggleCountText=(A==null?void 0:A.toggleCountText)||null,y.toggleCountTextMinItems=(A==null?void 0:A.toggleCountTextMinItems)||1,y.tagsClasses=(A==null?void 0:A.tagsClasses)||null,y.tagsItemTemplate=(A==null?void 0:A.tagsItemTemplate)||null,y.tagsItemClasses=(A==null?void 0:A.tagsItemClasses)||null,y.tagsInputClasses=(A==null?void 0:A.tagsInputClasses)||null,y.dropdownTag=(A==null?void 0:A.dropdownTag)||null,y.dropdownClasses=(A==null?void 0:A.dropdownClasses)||null,y.dropdownDirectionClasses=(A==null?void 0:A.dropdownDirectionClasses)||null,y.dropdownSpace=(A==null?void 0:A.dropdownSpace)||10,y.searchWrapperTemplate=(A==null?void 0:A.searchWrapperTemplate)||null,y.searchWrapperClasses=(A==null?void 0:A.searchWrapperClasses)||"bg-white p-2 sticky top-0",y.searchClasses=(A==null?void 0:A.searchClasses)||"block w-[calc(100%-2rem)] text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 py-2 px-3 my-2 mx-4",y.searchPlaceholder=(A==null?void 0:A.searchPlaceholder)||"Search...",y.searchNoResultText=(A==null?void 0:A.searchNoResultText)||"No options found...",y.searchNoResultClasses=(A==null?void 0:A.searchNoResultClasses)||"px-4 text-sm",y.optionTemplate=(A==null?void 0:A.optionTemplate)||null,y.optionTag=(A==null?void 0:A.optionTag)||null,y.optionClasses=(A==null?void 0:A.optionClasses)||null,y.descriptionClasses=(A==null?void 0:A.descriptionClasses)||null,y.iconClasses=(A==null?void 0:A.iconClasses)||null,y.isAddTagOnEnter=(g=A==null?void 0:A.isAddTagOnEnter)===null||g===void 0||g,y.animationInProcess=!1,y.selectOptions=[],y.init(),y}return C(u,a),u.prototype.init=function(){this.createCollection(window.$hsSelectCollection,this),this.build()},u.prototype.build=function(){var h=this;if(this.el.style.display="none",this.el.children&&Array.from(this.el.children).filter(function(y){return y.value&&y.value!==""}).forEach(function(y){var S=y.getAttribute("data-hs-select-option");h.selectOptions=w(w([],h.selectOptions,!0),[{title:y.textContent,val:y.value,options:S!=="undefined"?JSON.parse(S):null}],!1)}),this.isMultiple){var d=Array.from(this.el.options).filter(function(y){return y.selected});if(d){var g=[];d.forEach(function(y){g.push(y.value)}),this.value=g}}this.buildWrapper(),this.mode==="tags"?this.buildTags():this.buildToggle(),this.buildDropdown()},u.prototype.buildWrapper=function(){this.wrapper=document.createElement("div"),this.wrapper.classList.add("hs-select","relative"),this.el.before(this.wrapper),this.wrapper.append(this.el)},u.prototype.buildToggle=function(){var h,d,g,y=this;this.toggleTextWrapper=document.createElement("span"),this.toggleTextWrapper.classList.add("truncate"),this.toggle=(0,b.htmlToElement)(this.toggleTag||"<div></div>"),d=this.toggle.querySelector("[data-icon]"),g=this.toggle.querySelector("[data-title]"),!this.isMultiple&&d&&this.setToggleIcon(),!this.isMultiple&&g&&this.setToggleTitle(),this.isMultiple?this.toggleTextWrapper.innerHTML=this.value.length?this.stringFromValue():this.placeholder:this.toggleTextWrapper.innerHTML=((h=this.getItemByValue(this.value))===null||h===void 0?void 0:h.title)||this.placeholder,g||this.toggle.append(this.toggleTextWrapper),this.toggleClasses&&(0,b.classToClassList)(this.toggleClasses,this.toggle),this.isDisabled&&this.toggle.classList.add("disabled"),this.wrapper&&this.wrapper.append(this.toggle),this.toggle.addEventListener("click",function(){if(y.isDisabled)return!1;y.isOpened?y.close():y.open()})},u.prototype.setToggleIcon=function(){var h,d,g=this.toggle.querySelector("[data-icon]");if(g.innerHTML="",g){var y=(0,b.htmlToElement)(((d=(h=this.getItemByValue(this.value))===null||h===void 0?void 0:h.options)===null||d===void 0?void 0:d.icon)||"");g.append(y),y?g.classList.remove("hidden"):g.classList.add("hidden")}},u.prototype.setToggleTitle=function(){var h,d=this.toggle.querySelector("[data-title]");if(d.classList.add("truncate"),d.innerHTML="",d){var g=((h=this.getItemByValue(this.value))===null||h===void 0?void 0:h.title)||this.placeholder;d.innerHTML=g,this.toggle.append(d)}},u.prototype.buildTags=function(){this.tags=document.createElement("div"),this.tags.classList.add("flex"),this.tagsClasses&&(0,b.classToClassList)(this.tagsClasses,this.tags),this.buildTagsInput(),this.buildTagsItems(),this.setTagsItems(),this.wrapper&&this.wrapper.append(this.tags)},u.prototype.buildTagsItems=function(){this.tagsItems=document.createElement("div"),this.tagsItems.classList.add("flex","flex-wrap","flex-0","items-center"),this.setTagsItems(),this.tags.append(this.tagsItems)},u.prototype.buildTagsItem=function(h){var d,g,y,S,x,A,M,ae=this,_e=this.getItemByValue(h),Ae=document.createElement("div");if(this.tagsItemClasses&&(0,b.classToClassList)(this.tagsItemClasses,Ae),this.tagsItemTemplate&&(S=(0,b.htmlToElement)(this.tagsItemTemplate),Ae.append(S)),(d=_e==null?void 0:_e.options)===null||d===void 0?void 0:d.icon){var At=(0,b.htmlToElement)((g=_e==null?void 0:_e.options)===null||g===void 0?void 0:g.icon);(M=S?S.querySelector("[data-icon]"):document.createElement("span")).append(At),S||Ae.append(M)}S&&S.querySelector("[data-icon]")&&!(!((y=_e==null?void 0:_e.options)===null||y===void 0)&&y.icon)&&S.querySelector("[data-icon]").classList.add("hidden"),(x=S?S.querySelector("[data-title]"):document.createElement("span")).textContent=_e.title||"",S||Ae.append(x),S?A=S.querySelector("[data-remove]"):((A=document.createElement("span")).textContent="X",Ae.append(A)),A.addEventListener("click",function(){ae.value=ae.value.filter(function(at){return at!==h}),ae.unselectMultipleItems(),ae.setTagsItems(),ae.selectMultipleItems()}),this.tagsItems.append(Ae)},u.prototype.getItemByValue=function(h){return this.selectOptions.find(function(d){return d.val===h})},u.prototype.setTagsItems=function(){var h=this;this.tagsItems.innerHTML="",this.value&&(this.value.forEach(function(d){h.buildTagsItem(d)}),this.tagsInput.readOnly=!0),this.value.length||(this.tagsInput.placeholder=this.placeholder,this.tagsInput.readOnly=!1)},u.prototype.buildTagsInput=function(){var h=this;this.tagsInput=document.createElement("input"),this.tagsInput.placeholder=this.placeholder,this.tagsInputClasses&&(0,b.classToClassList)(this.tagsInputClasses,this.tagsInput),this.tagsInput.addEventListener("focus",function(){return h.open()}),this.tagsInput.addEventListener("input",(0,b.debounce)(function(d){return h.searchOptions(d.target.value)})),this.tagsInput.addEventListener("keydown",function(d){if(d.key==="Enter"&&h.isAddTagOnEnter){var g=d.target.value;if(h.selectOptions.find(function(y){return y.val===g}))return!1;h.addSelectOption(g,g),h.buildOption(g,g),h.dropdown.querySelector('[data-value="'.concat(g,'"]')).click(),h.resetTagsInputField(),h.close()}}),this.tags.append(this.tagsInput)},u.prototype.buildDropdown=function(){var h=this;this.dropdown=(0,b.htmlToElement)(this.dropdownTag||"<div></div>"),this.dropdown.classList.add("absolute","top-full"),this.isOpened||this.dropdown.classList.add("hidden"),this.dropdownClasses&&(0,b.classToClassList)(this.dropdownClasses,this.dropdown),this.wrapper&&this.wrapper.append(this.dropdown),this.dropdown&&this.hasSearch&&this.buildSearch(),this.selectOptions&&this.selectOptions.forEach(function(d,g){return h.buildOption(d.title,d.val,d.options,"".concat(g))})},u.prototype.buildSearch=function(){var h,d=this;this.searchWrapper=(0,b.htmlToElement)(this.searchWrapperTemplate||"<div></div>"),this.searchWrapperClasses&&(0,b.classToClassList)(this.searchWrapperClasses,this.searchWrapper),h=this.searchWrapper.querySelector("[data-input]"),this.search=(0,b.htmlToElement)('<input type="text" />'),this.search.placeholder=this.searchPlaceholder,this.searchClasses&&(0,b.classToClassList)(this.searchClasses,this.search),this.search.addEventListener("input",(0,b.debounce)(function(g){return d.searchOptions(g.target.value)})),h?h.append(this.search):this.searchWrapper.append(this.search),this.dropdown.append(this.searchWrapper)},u.prototype.buildOption=function(h,d,g,y){var S=this;y===void 0&&(y="1");var x=null,A=(0,b.htmlToElement)(this.optionTag||"<div></div>");if(A.setAttribute("data-value",d),A.setAttribute("data-title-value",h),A.setAttribute("tabIndex",y),A.classList.add("cursor-pointer"),this.optionTemplate&&(x=(0,b.htmlToElement)(this.optionTemplate),A.append(x)),x?x.querySelector("[data-title]").textContent=h||"":A.textContent=h||"",g){if(g.icon){var M=(0,b.htmlToElement)(g.icon);if(M.classList.add("mw-full"),x)x.querySelector("[data-icon]").append(M);else{var ae=(0,b.htmlToElement)("<div></div>");this.iconClasses&&(0,b.classToClassList)(this.iconClasses,ae),ae.append(M),A.append(ae)}}if(g.description)if(x)x.querySelector("[data-description]").append(g.description);else{var _e=(0,b.htmlToElement)("<div></div>");_e.textContent=g.description,this.descriptionClasses&&(0,b.classToClassList)(this.descriptionClasses,_e),A.append(_e)}}x&&x.querySelector("[data-icon]")&&!g&&!(g!=null&&g.icon)&&x.querySelector("[data-icon]").classList.add("hidden"),this.value&&(this.isMultiple?this.value.includes(d):this.value===d)&&A.classList.add("selected"),A.addEventListener("click",function(){return S.onSelectOption(d)}),this.optionClasses&&(0,b.classToClassList)(this.optionClasses,A),this.dropdown&&this.dropdown.append(A)},u.prototype.destroyOption=function(h){var d=this.dropdown.querySelector('[data-value="'.concat(h,'"]'));if(!d)return!1;d.remove()},u.prototype.buildOriginalOption=function(h,d,g){var y=(0,b.htmlToElement)("<option></option>");y.setAttribute("value",d),y.setAttribute("data-hs-select-option",JSON.stringify(g)),y.innerText=h,this.el.append(y)},u.prototype.destroyOriginalOption=function(h){var d=this.el.querySelector('[value="'.concat(h,'"]'));if(!d)return!1;d.remove()},u.prototype.onSelectOption=function(h){this.clearSelections(),this.isMultiple?(this.value=this.value.includes(h)?Array.from(this.value).filter(function(d){return d!==h}):w(w([],Array.from(this.value),!0),[h],!1),this.selectMultipleItems(),this.setNewValue()):(this.value=h,this.selectSingleItem(),this.setNewValue()),this.fireEvent("change",this.value),(0,b.dispatch)("change.hs.select",this.el,this.value),this.mode==="tags"&&this.resetTagsInputField(),this.isMultiple||(this.toggle.querySelector("[data-icon]")&&this.setToggleIcon(),this.toggle.querySelector("[data-title]")&&this.setToggleTitle(),this.close()),this.value.length||this.mode!=="tags"||(this.tagsInput.placeholder=this.placeholder)},u.prototype.addSelectOption=function(h,d,g){this.selectOptions=w(w([],this.selectOptions,!0),[{title:h,val:d,options:g}],!1)},u.prototype.removeSelectOption=function(h){if(!this.selectOptions.some(function(d){return d.val===h}))return!1;this.selectOptions=this.selectOptions.filter(function(d){return d.val!==h})},u.prototype.resetTagsInputField=function(){this.tagsInput.value="",this.tagsInput.placeholder="",this.searchOptions("")},u.prototype.clearSelections=function(){Array.from(this.dropdown.children).forEach(function(h){h.classList.contains("selected")&&h.classList.remove("selected")}),Array.from(this.el.children).forEach(function(h){h.selected&&(h.selected=!1)})},u.prototype.setNewValue=function(){this.mode==="tags"?this.setTagsItems():this.value.length?this.toggleTextWrapper.innerHTML=this.stringFromValue():this.toggleTextWrapper.innerHTML=this.placeholder},u.prototype.stringFromValue=function(){var h=this,d=[];return this.selectOptions.forEach(function(g){h.isMultiple?h.value.includes(g.val)&&d.push(g.title):h.value===g.val&&d.push(g.title)}),this.toggleCountText&&this.toggleCountText!==""&&d.length>=this.toggleCountTextMinItems?"".concat(d.length," ").concat(this.toggleCountText):d.join(", ")},u.prototype.selectSingleItem=function(){var h=this;Array.from(this.el.children).find(function(d){return h.value===d.value}).selected=!0,Array.from(this.dropdown.children).find(function(d){return h.value===d.getAttribute("data-value")}).classList.add("selected")},u.prototype.selectMultipleItems=function(){var h=this;Array.from(this.dropdown.children).filter(function(d){return h.value.includes(d.getAttribute("data-value"))}).forEach(function(d){return d.classList.add("selected")}),Array.from(this.el.children).filter(function(d){return h.value.includes(d.value)}).forEach(function(d){return d.selected=!0})},u.prototype.unselectMultipleItems=function(){Array.from(this.dropdown.children).forEach(function(h){return h.classList.remove("selected")}),Array.from(this.el.children).forEach(function(h){return h.selected=!1})},u.prototype.searchOptions=function(h){this.searchNoResult&&(this.searchNoResult.remove(),this.searchNoResult=null),this.searchNoResult=(0,b.htmlToElement)("<span></span>"),this.searchNoResult.innerText=this.searchNoResultText,(0,b.classToClassList)(this.searchNoResultClasses,this.searchNoResult);var d=this.dropdown.querySelectorAll("[data-value]"),g=!1;d.forEach(function(y){y.getAttribute("data-title-value").toLowerCase().includes(h.toLowerCase())?(y.classList.remove("hidden"),g=!0):y.classList.add("hidden")}),g||this.dropdown.append(this.searchNoResult)},u.prototype.eraseToggleIcon=function(){var h=this.toggle.querySelector("[data-icon]");h&&(h.innerHTML=null,h.classList.add("hidden"))},u.prototype.eraseToggleTitle=function(){var h=this.toggle.querySelector("[data-title]");h?h.innerHTML=this.placeholder:this.toggleTextWrapper.innerHTML=this.placeholder},u.prototype.destroy=function(){var h=this.el.parentElement.parentElement;this.el.classList.remove("hidden"),this.el.style.display="",h.prepend(this.el),h.querySelector(".hs-select").remove(),this.wrapper=null},u.prototype.open=function(){var h=this;if(this.animationInProcess)return!1;this.animationInProcess=!0,this.dropdown.classList.remove("hidden"),this.recalculateDirection(),setTimeout(function(){h.wrapper.classList.add("active"),h.dropdown.classList.add("opened"),h.hasSearch&&h.search.focus(),h.animationInProcess=!1}),this.isOpened=!0},u.prototype.close=function(){var h,d,g,y=this;if(this.animationInProcess)return!1;this.animationInProcess=!0,this.wrapper.classList.remove("active"),this.dropdown.classList.remove("opened","bottom-full","top-full"),!((h=this.dropdownDirectionClasses)===null||h===void 0)&&h.bottom&&this.dropdown.classList.remove(this.dropdownDirectionClasses.bottom),!((d=this.dropdownDirectionClasses)===null||d===void 0)&&d.top&&this.dropdown.classList.remove(this.dropdownDirectionClasses.top),this.dropdown.style.marginTop="",this.dropdown.style.marginBottom="",(0,b.afterTransition)(this.dropdown,function(){y.dropdown.classList.add("hidden"),y.hasSearch&&(y.search.value="",y.search.dispatchEvent(new Event("input",{bubbles:!0})),y.search.blur()),y.animationInProcess=!1}),(g=this.dropdown.querySelector(".hs-select-option-highlighted"))===null||g===void 0||g.classList.remove("hs-select-option-highlighted"),this.isOpened=!1},u.prototype.addOption=function(h){var d=this,g="".concat(this.selectOptions.length),y=function(S){var x=S.title,A=S.val,M=S.options;d.selectOptions.some(function(ae){return ae.val===A})||(d.addSelectOption(x,A,M),d.buildOption(x,A,M,g),d.buildOriginalOption(x,A,M))};Array.isArray(h)?h.forEach(function(S){y(S)}):y(h)},u.prototype.removeOption=function(h){var d=this,g=function(y){d.selectOptions.some(function(S){return S.val===y})&&(d.removeSelectOption(y),d.destroyOption(y),d.destroyOriginalOption(y),d.value===y&&(d.value=null,d.eraseToggleTitle(),d.eraseToggleIcon()))};Array.isArray(h)?h.forEach(function(y){g(y)}):g(h)},u.prototype.recalculateDirection=function(){var h,d,g,y;(0,b.isEnoughSpace)(this.dropdown,this.toggle||this.tagsInput,"bottom",this.dropdownSpace,this.viewport)?(this.dropdown.classList.remove("bottom-full"),!((h=this.dropdownDirectionClasses)===null||h===void 0)&&h.bottom&&this.dropdown.classList.remove(this.dropdownDirectionClasses.bottom),this.dropdown.style.marginBottom="",this.dropdown.classList.add("top-full"),!((d=this.dropdownDirectionClasses)===null||d===void 0)&&d.top&&this.dropdown.classList.add(this.dropdownDirectionClasses.top),this.dropdown.style.marginTop="".concat(this.dropdownSpace,"px")):(this.dropdown.classList.remove("top-full"),!((g=this.dropdownDirectionClasses)===null||g===void 0)&&g.top&&this.dropdown.classList.remove(this.dropdownDirectionClasses.top),this.dropdown.style.marginTop="",this.dropdown.classList.add("bottom-full"),!((y=this.dropdownDirectionClasses)===null||y===void 0)&&y.bottom&&this.dropdown.classList.add(this.dropdownDirectionClasses.bottom),this.dropdown.style.marginBottom="".concat(this.dropdownSpace,"px"))},u.getInstance=function(h,d){var g=window.$hsSelectCollection.find(function(y){return y.element.el===(typeof h=="string"?document.querySelector(h):h)});return g?d?g:g.element:null},u.autoInit=function(){window.$hsSelectCollection||(window.$hsSelectCollection=[]),document.querySelectorAll("[data-hs-select]:not(.--prevent-on-load-init)").forEach(function(h){if(!window.$hsSelectCollection.find(function(y){var S;return((S=y==null?void 0:y.element)===null||S===void 0?void 0:S.el)===h})){var d=h.getAttribute("data-hs-select"),g=d?JSON.parse(d):{};new u(h,g)}}),window.$hsSelectCollection&&(window.addEventListener("click",function(h){var d=h.target;u.closeCurrentlyOpened(d)}),document.addEventListener("keydown",function(h){return u.accessibility(h)}))},u.close=function(h){var d=window.$hsSelectCollection.find(function(g){return g.element.el===(typeof h=="string"?document.querySelector(h):h)});d&&d.element.isOpened&&d.element.close()},u.closeCurrentlyOpened=function(h){if(h===void 0&&(h=null),!h.closest(".hs-select.active")){var d=window.$hsSelectCollection.filter(function(g){return g.element.isOpened})||null;d&&d.forEach(function(g){g.element.close()})}},u.accessibility=function(h){var d=window.$hsSelectCollection.find(function(g){return g.element.isOpened});if(d&&c.SELECT_ACCESSIBILITY_KEY_SET.includes(h.code)&&!h.metaKey)switch(console.log(d),console.log("Key code:",h.code),h.code){case"Escape":h.preventDefault(),this.onEscape();break;case"ArrowUp":h.preventDefault(),this.onArrow();break;case"ArrowDown":h.preventDefault(),this.onArrow(!1);break;case"Tab":h.preventDefault(),this.onTab(h.shiftKey);break;case"Home":h.preventDefault(),this.onStartEnd();break;case"End":h.preventDefault(),this.onStartEnd(!1);break;case"Enter":h.preventDefault(),this.onEnter(h)}},u.onEscape=function(){var h=window.$hsSelectCollection.find(function(d){return d.element.isOpened});h&&h.element.close()},u.onArrow=function(h){h===void 0&&(h=!0);var d=window.$hsSelectCollection.find(function(A){return A.element.isOpened});if(d){var g=d.element.dropdown;if(!g)return!1;var y=(h?Array.from(g.querySelectorAll(":scope > *:not(.hidden)")).reverse():Array.from(g.querySelectorAll(":scope > *:not(.hidden)"))).filter(function(A){return!A.classList.contains("disabled")}),S=g.querySelector(".hs-select-option-highlighted");S||y[0].classList.add("hs-select-option-highlighted");var x=y.findIndex(function(A){return A===S});x+1<y.length&&x++,y[x].focus(),S&&S.classList.remove("hs-select-option-highlighted"),y[x].classList.add("hs-select-option-highlighted")}},u.onTab=function(h){h===void 0&&(h=!0);var d=window.$hsSelectCollection.find(function(A){return A.element.isOpened});if(d){var g=d.element.dropdown;if(!g)return!1;var y=(h?Array.from(g.querySelectorAll(":scope >  *:not(.hidden)")).reverse():Array.from(g.querySelectorAll(":scope >  *:not(.hidden)"))).filter(function(A){return!A.classList.contains("disabled")}),S=g.querySelector(".hs-select-option-highlighted");S||y[0].classList.add("hs-select-option-highlighted");var x=y.findIndex(function(A){return A===S});if(!(x+1<y.length))return S&&S.classList.remove("hs-select-option-highlighted"),d.element.close(),d.element.toggle.focus(),!1;y[++x].focus(),S&&S.classList.remove("hs-select-option-highlighted"),y[x].classList.add("hs-select-option-highlighted")}},u.onStartEnd=function(h){h===void 0&&(h=!0);var d=window.$hsSelectCollection.find(function(x){return x.element.isOpened});if(d){var g=d.element.dropdown;if(!g)return!1;var y=(h?Array.from(g.querySelectorAll(":scope >  *:not(.hidden)")):Array.from(g.querySelectorAll(":scope >  *:not(.hidden)")).reverse()).filter(function(x){return!x.classList.contains("disabled")}),S=g.querySelector(".hs-select-option-highlighted");y.length&&(y[0].focus(),S&&S.classList.remove("hs-select-option-highlighted"),y[0].classList.add("hs-select-option-highlighted"))}},u.onEnter=function(h){var d=h.target.previousSibling;if(window.$hsSelectCollection.find(function(S){return S.element.el===d})){var g=window.$hsSelectCollection.find(function(S){return S.element.isOpened}),y=window.$hsSelectCollection.find(function(S){return S.element.el===d});g.element.close(),y.element.open()}else(y=window.$hsSelectCollection.find(function(S){return S.element.isOpened}))&&y.element.onSelectOption(h.target.dataset.value||"")},u}(v.default);window.addEventListener("load",function(){r.autoInit()}),document.addEventListener("scroll",function(){if(!window.$hsSelectCollection)return!1;var a=window.$hsSelectCollection.find(function(u){return u.element.isOpened});a&&a.element.recalculateDirection()}),typeof window<"u"&&(window.HSSelect=r),f.default=r},957:function(l,f,p){/*
 * HSStepper
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(v,c){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(r[u]=a[u])},m(v,c)},function(v,c){if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");function r(){this.constructor=v}m(v,c),v.prototype=c===null?Object.create(c):(r.prototype=c.prototype,new r)}),_=this&&this.__assign||function(){return _=Object.assign||function(v){for(var c,r=1,a=arguments.length;r<a;r++)for(var u in c=arguments[r])Object.prototype.hasOwnProperty.call(c,u)&&(v[u]=c[u]);return v},_.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0});var w=p(969),b=function(v){function c(r,a){var u=v.call(this,r,a)||this,h=r.getAttribute("data-hs-stepper"),d=h?JSON.parse(h):{},g=_(_({},d),a);return u.currentIndex=(g==null?void 0:g.currentIndex)||1,u.mode=(g==null?void 0:g.mode)||"linear",u.isCompleted=(g==null?void 0:g.isCompleted)!==void 0&&(g==null?void 0:g.isCompleted),u.totalSteps=1,u.navItems=[],u.contentItems=[],u.init(),u}return C(c,v),c.prototype.init=function(){this.createCollection(window.$hsStepperCollection,this),this.buildNav(),this.buildContent(),this.buildButtons(),this.setTotalSteps()},c.prototype.getUncompletedSteps=function(r){return r===void 0&&(r=!1),this.navItems.filter(function(a){var u=a.isCompleted,h=a.isSkip;return r?!u||h:!u&&!h})},c.prototype.setTotalSteps=function(){var r=this;this.navItems.forEach(function(a){var u=a.index;u>r.totalSteps&&(r.totalSteps=u)})},c.prototype.buildNav=function(){var r=this;this.el.querySelectorAll("[data-hs-stepper-nav-item]").forEach(function(a){return r.addNavItem(a)}),this.navItems.forEach(function(a){return r.buildNavItem(a)})},c.prototype.buildNavItem=function(r){var a=this,u=r.index,h=r.isDisabled,d=r.el;u===this.currentIndex&&this.setCurrentNavItem(),(this.mode!=="linear"||h)&&d.addEventListener("click",function(){return a.handleNavItemClick(r)})},c.prototype.addNavItem=function(r){var a=JSON.parse(r.getAttribute("data-hs-stepper-nav-item")),u=a.index,h=a.isFinal,d=h!==void 0&&h,g=a.isCompleted,y=g!==void 0&&g,S=a.isSkip,x=S!==void 0&&S,A=a.isOptional,M=A!==void 0&&A,ae=a.isDisabled,_e=ae!==void 0&&ae,Ae=a.isProcessed,At=Ae!==void 0&&Ae,at=a.hasError,tn=at!==void 0&&at;y&&r.classList.add("success"),x&&r.classList.add("skipped"),_e&&(r.tagName!=="BUTTON"&&r.tagName!=="INPUT"||r.setAttribute("disabled","disabled"),r.classList.add("disabled")),tn&&r.classList.add("error"),this.navItems.push({index:u,isFinal:d,isCompleted:y,isSkip:x,isOptional:M,isDisabled:_e,isProcessed:At,hasError:tn,el:r})},c.prototype.setCurrentNavItem=function(){var r=this;this.navItems.forEach(function(a){var u=a.index,h=a.el;u===r.currentIndex?r.setCurrentNavItemActions(h):r.unsetCurrentNavItemActions(h)})},c.prototype.setCurrentNavItemActions=function(r){r.classList.add("active"),this.fireEvent("active",this.currentIndex),(0,w.dispatch)("active.hs.stepper",this.el,this.currentIndex)},c.prototype.getNavItem=function(r){return r===void 0&&(r=this.currentIndex),this.navItems.find(function(a){return a.index===r})},c.prototype.setProcessedNavItemActions=function(r){r.isProcessed=!0,r.el.classList.add("processed")},c.prototype.setErrorNavItemActions=function(r){r.hasError=!0,r.el.classList.add("error")},c.prototype.unsetCurrentNavItemActions=function(r){r.classList.remove("active")},c.prototype.handleNavItemClick=function(r){var a=r.index;this.currentIndex=a,this.setCurrentNavItem(),this.setCurrentContentItem(),this.checkForTheFirstStep()},c.prototype.buildContent=function(){var r=this;this.el.querySelectorAll("[data-hs-stepper-content-item]").forEach(function(a){return r.addContentItem(a)}),this.navItems.forEach(function(a){return r.buildContentItem(a)})},c.prototype.buildContentItem=function(r){r.index===this.currentIndex&&this.setCurrentContentItem()},c.prototype.addContentItem=function(r){var a=JSON.parse(r.getAttribute("data-hs-stepper-content-item")),u=a.index,h=a.isFinal,d=h!==void 0&&h,g=a.isCompleted,y=g!==void 0&&g,S=a.isSkip,x=S!==void 0&&S;y&&r.classList.add("success"),x&&r.classList.add("skipped"),this.contentItems.push({index:u,isFinal:d,isCompleted:y,isSkip:x,el:r})},c.prototype.setCurrentContentItem=function(){var r=this;if(this.isCompleted){var a=this.contentItems.find(function(h){return h.isFinal}),u=this.contentItems.filter(function(h){return!h.isFinal});return a.el.style.display="",u.forEach(function(h){return h.el.style.display="none"}),!1}this.contentItems.forEach(function(h){var d=h.index,g=h.el;d===r.currentIndex?r.setCurrentContentItemActions(g):r.unsetCurrentContentItemActions(g)})},c.prototype.hideAllContentItems=function(){this.contentItems.forEach(function(r){return r.el.style.display="none"})},c.prototype.setCurrentContentItemActions=function(r){r.style.display=""},c.prototype.unsetCurrentContentItemActions=function(r){r.style.display="none"},c.prototype.disableAll=function(){var r=this.getNavItem(this.currentIndex);r.hasError=!1,r.isCompleted=!1,r.isDisabled=!1,r.el.classList.remove("error","success"),this.disableButtons()},c.prototype.disableNavItemActions=function(r){r.isDisabled=!0,r.el.classList.add("disabled")},c.prototype.enableNavItemActions=function(r){r.isDisabled=!1,r.el.classList.remove("disabled")},c.prototype.buildButtons=function(){this.backBtn=this.el.querySelector("[data-hs-stepper-back-btn]"),this.nextBtn=this.el.querySelector("[data-hs-stepper-next-btn]"),this.skipBtn=this.el.querySelector("[data-hs-stepper-skip-btn]"),this.completeStepBtn=this.el.querySelector("[data-hs-stepper-complete-step-btn]"),this.finishBtn=this.el.querySelector("[data-hs-stepper-finish-btn]"),this.resetBtn=this.el.querySelector("[data-hs-stepper-reset-btn]"),this.buildBackButton(),this.buildNextButton(),this.buildSkipButton(),this.buildCompleteStepButton(),this.buildFinishButton(),this.buildResetButton()},c.prototype.buildBackButton=function(){var r=this;this.backBtn&&(this.checkForTheFirstStep(),this.backBtn.addEventListener("click",function(){if(r.handleBackButtonClick(),r.mode==="linear"){var a=r.navItems.find(function(h){return h.index===r.currentIndex}),u=r.contentItems.find(function(h){return h.index===r.currentIndex});if(!a||!u)return;a.isCompleted&&(a.isCompleted=!1,a.isSkip=!1,a.el.classList.remove("success","skipped")),u.isCompleted&&(u.isCompleted=!1,u.isSkip=!1,u.el.classList.remove("success","skipped")),r.mode==="linear"&&r.currentIndex!==r.totalSteps&&(r.nextBtn&&(r.nextBtn.style.display=""),r.completeStepBtn&&(r.completeStepBtn.style.display="")),r.showSkipButton(),r.showFinishButton(),r.showCompleteStepButton()}}))},c.prototype.handleBackButtonClick=function(){this.currentIndex!==1&&(this.mode==="linear"&&this.removeOptionalClasses(),this.currentIndex--,this.mode==="linear"&&this.removeOptionalClasses(),this.setCurrentNavItem(),this.setCurrentContentItem(),this.checkForTheFirstStep(),this.completeStepBtn&&this.changeTextAndDisableCompleteButtonIfStepCompleted(),this.fireEvent("back",this.currentIndex),(0,w.dispatch)("back.hs.stepper",this.el,this.currentIndex))},c.prototype.checkForTheFirstStep=function(){this.currentIndex===1?this.setToDisabled(this.backBtn):this.setToNonDisabled(this.backBtn)},c.prototype.setToDisabled=function(r){r.tagName!=="BUTTON"&&r.tagName!=="INPUT"||r.setAttribute("disabled","disabled"),r.classList.add("disabled")},c.prototype.setToNonDisabled=function(r){r.tagName!=="BUTTON"&&r.tagName!=="INPUT"||r.removeAttribute("disabled"),r.classList.remove("disabled")},c.prototype.buildNextButton=function(){var r=this;this.nextBtn&&this.nextBtn.addEventListener("click",function(){var a;if(r.fireEvent("beforeNext",r.currentIndex),(0,w.dispatch)("beforeNext.hs.stepper",r.el,r.currentIndex),(a=r.getNavItem(r.currentIndex))===null||a===void 0?void 0:a.isProcessed)return r.disableAll(),!1;r.goToNext()})},c.prototype.unsetProcessedNavItemActions=function(r){r.isProcessed=!1,r.el.classList.remove("processed")},c.prototype.handleNextButtonClick=function(r){if(r===void 0&&(r=!0),r)this.currentIndex===this.totalSteps?this.currentIndex=1:this.currentIndex++;else{var a=this.getUncompletedSteps();if(a.length===1){var u=a[0].index;this.currentIndex=u}else{if(this.currentIndex===this.totalSteps)return;this.currentIndex++}}this.mode==="linear"&&this.removeOptionalClasses(),this.setCurrentNavItem(),this.setCurrentContentItem(),this.checkForTheFirstStep(),this.completeStepBtn&&this.changeTextAndDisableCompleteButtonIfStepCompleted(),this.showSkipButton(),this.showFinishButton(),this.showCompleteStepButton(),this.fireEvent("next",this.currentIndex),(0,w.dispatch)("next.hs.stepper",this.el,this.currentIndex)},c.prototype.removeOptionalClasses=function(){var r=this,a=this.navItems.find(function(h){return h.index===r.currentIndex}),u=this.contentItems.find(function(h){return h.index===r.currentIndex});a.isSkip=!1,a.hasError=!1,a.isDisabled=!1,u.isSkip=!1,a.el.classList.remove("skipped","success","error"),u.el.classList.remove("skipped","success","error")},c.prototype.buildSkipButton=function(){var r=this;this.skipBtn&&(this.showSkipButton(),this.skipBtn.addEventListener("click",function(){r.handleSkipButtonClick(),r.mode==="linear"&&r.currentIndex===r.totalSteps&&(r.nextBtn&&(r.nextBtn.style.display="none"),r.completeStepBtn&&(r.completeStepBtn.style.display="none"),r.finishBtn&&(r.finishBtn.style.display=""))}))},c.prototype.setSkipItem=function(r){var a=this,u=this.navItems.find(function(d){return d.index===(r||a.currentIndex)}),h=this.contentItems.find(function(d){return d.index===(r||a.currentIndex)});u&&h&&(this.setSkipItemActions(u),this.setSkipItemActions(h))},c.prototype.setSkipItemActions=function(r){r.isSkip=!0,r.el.classList.add("skipped")},c.prototype.showSkipButton=function(){var r=this;if(this.skipBtn){var a=this.navItems.find(function(u){return u.index===r.currentIndex}).isOptional;this.skipBtn.style.display=a?"":"none"}},c.prototype.handleSkipButtonClick=function(){this.setSkipItem(),this.handleNextButtonClick(),this.fireEvent("skip",this.currentIndex),(0,w.dispatch)("skip.hs.stepper",this.el,this.currentIndex)},c.prototype.buildCompleteStepButton=function(){var r=this;this.completeStepBtn&&(this.completeStepBtnDefaultText=this.completeStepBtn.innerText,this.completeStepBtn.addEventListener("click",function(){return r.handleCompleteStepButtonClick()}))},c.prototype.changeTextAndDisableCompleteButtonIfStepCompleted=function(){var r=this,a=this.navItems.find(function(h){return h.index===r.currentIndex}),u=JSON.parse(this.completeStepBtn.getAttribute("data-hs-stepper-complete-step-btn")).completedText;a&&(a.isCompleted?(this.completeStepBtn.innerText=u||this.completeStepBtnDefaultText,this.completeStepBtn.setAttribute("disabled","disabled"),this.completeStepBtn.classList.add("disabled")):(this.completeStepBtn.innerText=this.completeStepBtnDefaultText,this.completeStepBtn.removeAttribute("disabled"),this.completeStepBtn.classList.remove("disabled")))},c.prototype.setCompleteItem=function(r){var a=this,u=this.navItems.find(function(d){return d.index===(r||a.currentIndex)}),h=this.contentItems.find(function(d){return d.index===(r||a.currentIndex)});u&&h&&(this.setCompleteItemActions(u),this.setCompleteItemActions(h))},c.prototype.setCompleteItemActions=function(r){r.isCompleted=!0,r.el.classList.add("success")},c.prototype.showCompleteStepButton=function(){this.completeStepBtn&&(this.getUncompletedSteps().length===1?this.completeStepBtn.style.display="none":this.completeStepBtn.style.display="")},c.prototype.handleCompleteStepButtonClick=function(){this.setCompleteItem(),this.fireEvent("complete",this.currentIndex),(0,w.dispatch)("complete.hs.stepper",this.el,this.currentIndex),this.handleNextButtonClick(!1),this.showFinishButton(),this.showCompleteStepButton(),this.checkForTheFirstStep(),this.completeStepBtn&&this.changeTextAndDisableCompleteButtonIfStepCompleted(),this.showSkipButton()},c.prototype.buildFinishButton=function(){var r=this;this.finishBtn&&(this.isCompleted&&this.setCompleted(),this.finishBtn.addEventListener("click",function(){return r.handleFinishButtonClick()}))},c.prototype.setCompleted=function(){this.el.classList.add("completed")},c.prototype.unsetCompleted=function(){this.el.classList.remove("completed")},c.prototype.showFinishButton=function(){this.finishBtn&&(this.getUncompletedSteps().length===1?this.finishBtn.style.display="":this.finishBtn.style.display="none")},c.prototype.handleFinishButtonClick=function(){var r=this,a=this.getUncompletedSteps(),u=this.getUncompletedSteps(!0),h=this.contentItems.find(function(g){return g.isFinal}).el;a.length&&a.forEach(function(g){var y=g.index;return r.setCompleteItem(y)}),this.currentIndex=this.totalSteps,this.setCurrentNavItem(),this.hideAllContentItems();var d=this.navItems.find(function(g){return g.index===r.currentIndex});(d?d.el:null).classList.remove("active"),h.style.display="block",this.backBtn&&(this.backBtn.style.display="none"),this.nextBtn&&(this.nextBtn.style.display="none"),this.skipBtn&&(this.skipBtn.style.display="none"),this.completeStepBtn&&(this.completeStepBtn.style.display="none"),this.finishBtn&&(this.finishBtn.style.display="none"),this.resetBtn&&(this.resetBtn.style.display=""),u.length<=1&&(this.isCompleted=!0,this.setCompleted()),this.fireEvent("finish",this.currentIndex),(0,w.dispatch)("finish.hs.stepper",this.el,this.currentIndex)},c.prototype.buildResetButton=function(){var r=this;this.resetBtn&&this.resetBtn.addEventListener("click",function(){return r.handleResetButtonClick()})},c.prototype.handleResetButtonClick=function(){var r=this;this.backBtn&&(this.backBtn.style.display=""),this.nextBtn&&(this.nextBtn.style.display=""),this.completeStepBtn&&(this.completeStepBtn.style.display="",this.completeStepBtn.innerText=this.completeStepBtnDefaultText,this.completeStepBtn.removeAttribute("disabled"),this.completeStepBtn.classList.remove("disabled")),this.resetBtn&&(this.resetBtn.style.display="none"),this.navItems.forEach(function(a){var u=a.el;a.isSkip=!1,a.isCompleted=!1,r.unsetCurrentNavItemActions(u),u.classList.remove("success","skipped")}),this.contentItems.forEach(function(a){var u=a.el;a.isSkip=!1,a.isCompleted=!1,r.unsetCurrentContentItemActions(u),u.classList.remove("success","skipped")}),this.currentIndex=1,this.setCurrentNavItem(),this.setCurrentContentItem(),this.showFinishButton(),this.showCompleteStepButton(),this.checkForTheFirstStep(),this.unsetCompleted(),this.isCompleted=!1,this.fireEvent("reset",this.currentIndex),(0,w.dispatch)("reset.hs.stepper",this.el,this.currentIndex)},c.prototype.setProcessedNavItem=function(r){var a=this.getNavItem(r);a&&this.setProcessedNavItemActions(a)},c.prototype.unsetProcessedNavItem=function(r){var a=this.getNavItem(r);a&&this.unsetProcessedNavItemActions(a)},c.prototype.goToNext=function(){this.mode==="linear"&&this.setCompleteItem(),this.handleNextButtonClick(this.mode!=="linear"),this.mode==="linear"&&this.currentIndex===this.totalSteps&&(this.nextBtn&&(this.nextBtn.style.display="none"),this.completeStepBtn&&(this.completeStepBtn.style.display="none"))},c.prototype.disableButtons=function(){this.backBtn&&this.setToDisabled(this.backBtn),this.nextBtn&&this.setToDisabled(this.nextBtn)},c.prototype.enableButtons=function(){this.backBtn&&this.setToNonDisabled(this.backBtn),this.nextBtn&&this.setToNonDisabled(this.nextBtn)},c.prototype.setErrorNavItem=function(r){var a=this.getNavItem(r);a&&this.setErrorNavItemActions(a)},c.getInstance=function(r,a){var u=window.$hsStepperCollection.find(function(h){return h.element.el===(typeof r=="string"?document.querySelector(r):r)});return u?a?u:u.element:null},c.autoInit=function(){window.$hsStepperCollection||(window.$hsStepperCollection=[]),document.querySelectorAll("[data-hs-stepper]:not(.--prevent-on-load-init)").forEach(function(r){window.$hsStepperCollection.find(function(a){var u;return((u=a==null?void 0:a.element)===null||u===void 0?void 0:u.el)===r})||new c(r)})},c}(p(737).default);window.addEventListener("load",function(){b.autoInit()}),typeof window<"u"&&(window.HSStepper=b),f.default=b},983:function(l,f,p){/*
 * HSStrongPassword
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(v,c){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(r[u]=a[u])},m(v,c)},function(v,c){if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");function r(){this.constructor=v}m(v,c),v.prototype=c===null?Object.create(c):(r.prototype=c.prototype,new r)}),_=this&&this.__assign||function(){return _=Object.assign||function(v){for(var c,r=1,a=arguments.length;r<a;r++)for(var u in c=arguments[r])Object.prototype.hasOwnProperty.call(c,u)&&(v[u]=c[u]);return v},_.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0});var w=p(969),b=function(v){function c(r,a){var u=v.call(this,r,a)||this;u.isOpened=!1,u.strength=0,u.passedRules=new Set;var h=r.getAttribute("data-hs-strong-password"),d=h?JSON.parse(h):{},g=_(_({},d),a);return u.target=g!=null&&g.target?typeof(g==null?void 0:g.target)=="string"?document.querySelector(g.target):g.target:null,u.hints=g!=null&&g.hints?typeof(g==null?void 0:g.hints)=="string"?document.querySelector(g.hints):g.hints:null,u.stripClasses=(g==null?void 0:g.stripClasses)||null,u.minLength=(g==null?void 0:g.minLength)||6,u.mode=(g==null?void 0:g.mode)||"default",u.popoverSpace=(g==null?void 0:g.popoverSpace)||10,u.checksExclude=(g==null?void 0:g.checksExclude)||[],u.availableChecks=["lowercase","uppercase","numbers","special-characters","min-length"].filter(function(y){return!u.checksExclude.includes(y)}),u.specialCharactersSet=(g==null?void 0:g.specialCharactersSet)||"!\"#$%&'()*+,-./:;<=>?@[\\\\\\]^_`{|}~",u.target&&u.init(),u}return C(c,v),c.prototype.init=function(){this.createCollection(window.$hsStrongPasswordCollection,this),this.availableChecks.length&&this.build()},c.prototype.build=function(){var r=this;this.buildStrips(),this.hints&&this.buildHints(),this.setStrength(this.target.value),this.target.addEventListener("input",function(a){r.setStrength(a.target.value)})},c.prototype.buildStrips=function(){if(this.el.innerHTML="",this.stripClasses)for(var r=0;r<this.availableChecks.length;r++){var a=(0,w.htmlToElement)("<div></div>");(0,w.classToClassList)(this.stripClasses,a),this.el.append(a)}},c.prototype.buildHints=function(){var r=this;this.weakness=this.hints.querySelector("[data-hs-strong-password-hints-weakness-text]")||null,this.rules=Array.from(this.hints.querySelectorAll("[data-hs-strong-password-hints-rule-text]"))||null,this.rules.forEach(function(a){var u,h=a.getAttribute("data-hs-strong-password-hints-rule-text");!((u=r.checksExclude)===null||u===void 0)&&u.includes(h)&&a.remove()}),this.weakness&&this.buildWeakness(),this.rules&&this.buildRules(),this.mode==="popover"&&(this.target.addEventListener("focus",function(){r.isOpened=!0,r.hints.classList.remove("hidden"),r.hints.classList.add("block"),r.recalculateDirection()}),this.target.addEventListener("blur",function(){r.isOpened=!1,r.hints.classList.remove("block","bottom-full","top-full"),r.hints.classList.add("hidden"),r.hints.style.marginTop="",r.hints.style.marginBottom=""}))},c.prototype.buildWeakness=function(){var r=this;this.checkStrength(this.target.value),this.setWeaknessText(),this.target.addEventListener("input",function(){return setTimeout(function(){return r.setWeaknessText()})})},c.prototype.buildRules=function(){var r=this;this.setRulesText(),this.target.addEventListener("input",function(){return setTimeout(function(){return r.setRulesText()})})},c.prototype.setWeaknessText=function(){var r=this.weakness.getAttribute("data-hs-strong-password-hints-weakness-text"),a=JSON.parse(r);this.weakness.textContent=a[this.strength]},c.prototype.setRulesText=function(){var r=this;this.rules.forEach(function(a){var u=a.getAttribute("data-hs-strong-password-hints-rule-text");r.checkIfPassed(a,r.passedRules.has(u))})},c.prototype.togglePopover=function(){var r=this.el.querySelector(".popover");r&&r.classList.toggle("show")},c.prototype.checkStrength=function(r){var a=new Set,u={lowercase:/[a-z]+/,uppercase:/[A-Z]+/,numbers:/[0-9]+/,"special-characters":new RegExp("[".concat(this.specialCharactersSet,"]"))},h=0;return this.availableChecks.includes("lowercase")&&r.match(u.lowercase)&&(h+=1,a.add("lowercase")),this.availableChecks.includes("uppercase")&&r.match(u.uppercase)&&(h+=1,a.add("uppercase")),this.availableChecks.includes("numbers")&&r.match(u.numbers)&&(h+=1,a.add("numbers")),this.availableChecks.includes("special-characters")&&r.match(u["special-characters"])&&(h+=1,a.add("special-characters")),this.availableChecks.includes("min-length")&&r.length>=this.minLength&&(h+=1,a.add("min-length")),r.length||(h=0),h===this.availableChecks.length?this.el.classList.add("accepted"):this.el.classList.remove("accepted"),this.strength=h,this.passedRules=a,{strength:this.strength,rules:this.passedRules}},c.prototype.checkIfPassed=function(r,a){a===void 0&&(a=!1);var u=r.querySelector("[data-check]"),h=r.querySelector("[data-uncheck]");a?(r.classList.add("active"),u.classList.remove("hidden"),h.classList.add("hidden")):(r.classList.remove("active"),u.classList.add("hidden"),h.classList.remove("hidden"))},c.prototype.setStrength=function(r){var a=this.checkStrength(r),u=a.strength,h={strength:u,rules:a.rules};this.hideStrips(u),this.fireEvent("change",h),(0,w.dispatch)("change.hs.strongPassword",this.el,h)},c.prototype.hideStrips=function(r){Array.from(this.el.children).forEach(function(a,u){u<r?a.classList.add("passed"):a.classList.remove("passed")})},c.prototype.recalculateDirection=function(){(0,w.isEnoughSpace)(this.hints,this.target,"bottom",this.popoverSpace)?(this.hints.classList.remove("bottom-full"),this.hints.classList.add("top-full"),this.hints.style.marginBottom="",this.hints.style.marginTop="".concat(this.popoverSpace,"px")):(this.hints.classList.remove("top-full"),this.hints.classList.add("bottom-full"),this.hints.style.marginTop="",this.hints.style.marginBottom="".concat(this.popoverSpace,"px"))},c.getInstance=function(r){var a=window.$hsStrongPasswordCollection.find(function(u){return u.element.el===(typeof r=="string"?document.querySelector(r):r)});return a?a.element:null},c.autoInit=function(){window.$hsStrongPasswordCollection||(window.$hsStrongPasswordCollection=[]),document.querySelectorAll("[data-hs-strong-password]:not(.--prevent-on-load-init)").forEach(function(r){if(!window.$hsStrongPasswordCollection.find(function(h){var d;return((d=h==null?void 0:h.element)===null||d===void 0?void 0:d.el)===r})){var a=r.getAttribute("data-hs-strong-password"),u=a?JSON.parse(a):{};new c(r,u)}})},c}(p(737).default);window.addEventListener("load",function(){b.autoInit()}),document.addEventListener("scroll",function(){if(!window.$hsStrongPasswordCollection)return!1;var v=window.$hsStrongPasswordCollection.find(function(c){return c.element.isOpened});v&&v.element.recalculateDirection()}),typeof window<"u"&&(window.HSStrongPassword=b),f.default=b},949:function(l,f,p){/*
 * HSTabs
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(c,r){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,u){a.__proto__=u}||function(a,u){for(var h in u)Object.prototype.hasOwnProperty.call(u,h)&&(a[h]=u[h])},m(c,r)},function(c,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function a(){this.constructor=c}m(c,r),c.prototype=r===null?Object.create(r):(a.prototype=r.prototype,new a)});Object.defineProperty(f,"__esModule",{value:!0});var _=p(969),w=p(737),b=p(190),v=function(c){function r(a,u,h){var d=c.call(this,a,u,h)||this;return d.toggles=d.el.querySelectorAll("[data-hs-tab]"),d.extraToggleId=d.el.getAttribute("hs-data-tab-select"),d.extraToggle=document.querySelector(d.extraToggleId),d.current=Array.from(d.toggles).find(function(g){return g.classList.contains("active")}),d.currentContentId=d.current.getAttribute("data-hs-tab"),d.currentContent=document.querySelector(d.currentContentId),d.prev=null,d.prevContentId=null,d.prevContent=null,d.init(),d}return C(r,c),r.prototype.init=function(){var a=this;this.createCollection(window.$hsTabsCollection,this),this.toggles.forEach(function(u){u.addEventListener("click",function(){return a.open(u)})}),this.extraToggle&&this.extraToggle.addEventListener("change",function(u){return a.change(u)})},r.prototype.open=function(a){this.prev=this.current,this.prevContentId=this.currentContentId,this.prevContent=this.currentContent,this.current=a,this.currentContentId=this.current.getAttribute("data-hs-tab"),this.currentContent=document.querySelector(this.currentContentId),this.prev.classList.remove("active"),this.prevContent.classList.add("hidden"),this.current.classList.add("active"),this.currentContent.classList.remove("hidden"),this.fireEvent("change",{el:a,prev:this.prevContentId,current:this.currentContentId}),(0,_.dispatch)("change.hs.tab",a,{el:a,prev:this.prevContentId,current:this.currentContentId})},r.prototype.change=function(a){var u=document.querySelector('[data-hs-tab="'.concat(a.target.value,'"]'));u&&u.click()},r.getInstance=function(a,u){var h=window.$hsTabsCollection.find(function(d){return d.element.el===(typeof a=="string"?document.querySelector(a):a)});return h?u?h:h.element:null},r.autoInit=function(){window.$hsTabsCollection||(window.$hsTabsCollection=[]),document.querySelectorAll('[role="tablist"]:not(select):not(.--prevent-on-load-init)').forEach(function(a){window.$hsTabsCollection.find(function(u){var h;return((h=u==null?void 0:u.element)===null||h===void 0?void 0:h.el)===a})||new r(a)}),window.$hsTabsCollection&&document.addEventListener("keydown",function(a){return r.accessibility(a)})},r.open=function(a){var u=window.$hsTabsCollection.find(function(d){return Array.from(d.element.toggles).includes(typeof a=="string"?document.querySelector(a):a)}),h=Array.from(u.element.toggles).find(function(d){return d===(typeof a=="string"?document.querySelector(a):a)});h&&!h.classList.contains("active")&&u.element.open(h)},r.accessibility=function(a){var u=document.querySelector("[data-hs-tab]:focus");if(u&&b.TABS_ACCESSIBILITY_KEY_SET.includes(a.code)&&!a.metaKey){var h=u.closest('[role="tablist"]').getAttribute("data-hs-tabs-vertical");switch(a.preventDefault(),console.log("Key code:",a.code),a.code){case(h==="true"?"ArrowUp":"ArrowLeft"):this.onArrow();break;case(h==="true"?"ArrowDown":"ArrowRight"):this.onArrow(!1);break;case"Home":this.onStartEnd();break;case"End":this.onStartEnd(!1)}}},r.onArrow=function(a){a===void 0&&(a=!0);var u=document.querySelector("[data-hs-tab]:focus").closest('[role="tablist"]'),h=window.$hsTabsCollection.find(function(S){return S.element.el===u});if(h){var d=a?Array.from(h.element.toggles).reverse():Array.from(h.element.toggles),g=d.find(function(S){return document.activeElement===S}),y=d.findIndex(function(S){return S===g});d[y=y+1<d.length?y+1:0].focus(),d[y].click()}},r.onStartEnd=function(a){a===void 0&&(a=!0);var u=document.querySelector("[data-hs-tab]:focus").closest('[role="tablist"]'),h=window.$hsTabsCollection.find(function(g){return g.element.el===u});if(h){var d=a?Array.from(h.element.toggles):Array.from(h.element.toggles).reverse();d.length&&(d[0].focus(),d[0].click())}},r.on=function(a,u,h){var d=window.$hsTabsCollection.find(function(g){return Array.from(g.element.toggles).includes(typeof u=="string"?document.querySelector(u):u)});d&&(d.element.events[a]=h)},r}(w.default);window.addEventListener("load",function(){v.autoInit()}),typeof window<"u"&&(window.HSTabs=v),f.default=v},557:function(l,f,p){var m,C=this&&this.__extends||(m=function(b,v){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,r){c.__proto__=r}||function(c,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(c[a]=r[a])},m(b,v)},function(b,v){if(typeof v!="function"&&v!==null)throw new TypeError("Class extends value "+String(v)+" is not a constructor or null");function c(){this.constructor=b}m(b,v),b.prototype=v===null?Object.create(v):(c.prototype=v.prototype,new c)}),_=this&&this.__assign||function(){return _=Object.assign||function(b){for(var v,c=1,r=arguments.length;c<r;c++)for(var a in v=arguments[c])Object.prototype.hasOwnProperty.call(v,a)&&(b[a]=v[a]);return b},_.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0});var w=function(b){function v(c,r){var a=b.call(this,c,r)||this,u=c.getAttribute("data-hs-theme-switch"),h=u?JSON.parse(u):{},d=_(_({},h),r);return a.theme=(d==null?void 0:d.theme)||localStorage.getItem("hs_theme")||"default",a.themeSet=["dark","light","default"],a.init(),a}return C(v,b),v.prototype.init=function(){this.createCollection(window.$hsThemeSwitchCollection,this),this.theme!=="default"&&this.setAppearance()},v.prototype.setResetStyles=function(){var c=document.createElement("style");return c.innerText="*{transition: unset !important;}",c.setAttribute("data-hs-appearance-onload-styles",""),document.head.appendChild(c),c},v.prototype.setAppearance=function(c,r,a){c===void 0&&(c=this.theme),r===void 0&&(r=!0),a===void 0&&(a=!0);var u=this.setResetStyles(),h=document.querySelector("html");r&&localStorage.setItem("hs_theme",c),c==="auto"&&(c=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"default"),h.classList.remove("dark","default","auto"),h.classList.add(c),setTimeout(function(){return u.remove()}),a&&window.dispatchEvent(new CustomEvent("on-hs-appearance-change",{detail:c}))},v.getInstance=function(c){var r=window.$hsThemeSwitchCollection.find(function(a){return a.element.el===(typeof c=="string"?document.querySelector(c):c)});return r?r.element:null},v.autoInit=function(){window.$hsThemeSwitchCollection||(window.$hsThemeSwitchCollection=[]),document.querySelectorAll("[data-hs-theme-switch]:not(.--prevent-on-load-init)").forEach(function(c){if(!window.$hsThemeSwitchCollection.find(function(a){var u;return((u=a==null?void 0:a.element)===null||u===void 0?void 0:u.el)===c})){var r=new v(c);r.el.checked=r.theme==="dark",r.el.addEventListener("change",function(a){r.setAppearance(a.target.checked?"dark":"default")})}}),document.querySelectorAll("[data-hs-theme-click-value]:not(.--prevent-on-load-init)").forEach(function(c){var r=c.getAttribute("data-hs-theme-click-value"),a=new v(c);a.el.addEventListener("click",function(){return a.setAppearance(r)})})},v}(p(737).default);window.addEventListener("load",function(){w.autoInit()}),window.$hsThemeSwitchCollection&&window.addEventListener("on-hs-appearance-change",function(b){window.$hsThemeSwitchCollection.forEach(function(v){v.element.el.checked=b.detail==="dark"})}),typeof window<"u"&&(window.HSThemeSwitch=w),f.default=w},87:function(l,f,p){/*
 * HSToggleCount
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(b,v){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,r){c.__proto__=r}||function(c,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(c[a]=r[a])},m(b,v)},function(b,v){if(typeof v!="function"&&v!==null)throw new TypeError("Class extends value "+String(v)+" is not a constructor or null");function c(){this.constructor=b}m(b,v),b.prototype=v===null?Object.create(v):(c.prototype=v.prototype,new c)}),_=this&&this.__assign||function(){return _=Object.assign||function(b){for(var v,c=1,r=arguments.length;c<r;c++)for(var a in v=arguments[c])Object.prototype.hasOwnProperty.call(v,a)&&(b[a]=v[a]);return b},_.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0});var w=function(b){function v(c,r){var a=b.call(this,c,r)||this,u=c.getAttribute("data-hs-toggle-count"),h=u?JSON.parse(u):{},d=_(_({},h),r);return a.target=d!=null&&d.target?typeof(d==null?void 0:d.target)=="string"?document.querySelector(d.target):d.target:null,a.min=(d==null?void 0:d.min)||0,a.max=(d==null?void 0:d.max)||0,a.duration=(d==null?void 0:d.duration)||700,a.isChecked=a.target.checked||!1,a.target&&a.init(),a}return C(v,b),v.prototype.init=function(){var c=this;this.createCollection(window.$hsToggleCountCollection,this),this.isChecked&&(this.el.innerText=String(this.max)),this.target.addEventListener("change",function(){c.isChecked=!c.isChecked,c.toggle()})},v.prototype.toggle=function(){this.isChecked?this.countUp():this.countDown()},v.prototype.animate=function(c,r){var a=this,u=0,h=function(d){u||(u=d);var g=Math.min((d-u)/a.duration,1);a.el.innerText=String(Math.floor(g*(r-c)+c)),g<1&&window.requestAnimationFrame(h)};window.requestAnimationFrame(h)},v.prototype.countUp=function(){this.animate(this.min,this.max)},v.prototype.countDown=function(){this.animate(this.max,this.min)},v.getInstance=function(c,r){var a=window.$hsToggleCountCollection.find(function(u){return u.element.el===(typeof c=="string"?document.querySelector(c):c)});return a?r?a:a.element:null},v.autoInit=function(){window.$hsToggleCountCollection||(window.$hsToggleCountCollection=[]),document.querySelectorAll("[data-hs-toggle-count]:not(.--prevent-on-load-init)").forEach(function(c){window.$hsToggleCountCollection.find(function(r){var a;return((a=r==null?void 0:r.element)===null||a===void 0?void 0:a.el)===c})||new v(c)})},v}(p(737).default);window.addEventListener("load",function(){w.autoInit()}),typeof window<"u"&&(window.HSToggleCount=w),f.default=w},366:function(l,f,p){/*
 * HSTogglePassword
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(v,c){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&(r[u]=a[u])},m(v,c)},function(v,c){if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");function r(){this.constructor=v}m(v,c),v.prototype=c===null?Object.create(c):(r.prototype=c.prototype,new r)}),_=this&&this.__assign||function(){return _=Object.assign||function(v){for(var c,r=1,a=arguments.length;r<a;r++)for(var u in c=arguments[r])Object.prototype.hasOwnProperty.call(c,u)&&(v[u]=c[u]);return v},_.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0});var w=p(969),b=function(v){function c(r,a){var u=v.call(this,r,a)||this,h=r.getAttribute("data-hs-toggle-password"),d=h?JSON.parse(h):{},g=_(_({},d),a),y=[];return g!=null&&g.target&&typeof(g==null?void 0:g.target)=="string"?(g==null?void 0:g.target.split(",")).forEach(function(S){y.push(document.querySelector(S))}):g!=null&&g.target&&typeof(g==null?void 0:g.target)=="object"?g.target.forEach(function(S){return y.push(document.querySelector(S))}):g.target.forEach(function(S){return y.push(S)}),u.target=y,u.isShown=!!u.el.hasAttribute("type")&&u.el.checked,u.eventType=(0,w.isFormElement)(u.el)?"change":"click",u.isMultiple=u.target.length>1&&!!u.el.closest("[data-hs-toggle-password-group]"),u.target&&u.init(),u}return C(c,v),c.prototype.init=function(){var r=this;this.createCollection(window.$hsTogglePasswordCollection,this),this.isShown?this.show():this.hide(),this.el.addEventListener(this.eventType,function(){r.isShown?r.hide():r.show(),r.fireEvent("toggle",r.target),(0,w.dispatch)("toggle.hs.toggle-select",r.el,r.target)})},c.prototype.getMultipleToggles=function(){var r=this.el.closest("[data-hs-toggle-password-group]").querySelectorAll("[data-hs-toggle-password]"),a=[];return r.forEach(function(u){a.push(c.getInstance(u))}),a},c.prototype.show=function(){this.isMultiple?(this.getMultipleToggles().forEach(function(r){return!!r&&(r.isShown=!0)}),this.el.closest("[data-hs-toggle-password-group]").classList.add("active")):(this.isShown=!0,this.el.classList.add("active")),this.target.forEach(function(r){r.type="text"})},c.prototype.hide=function(){this.isMultiple?(this.getMultipleToggles().forEach(function(r){return!!r&&(r.isShown=!1)}),this.el.closest("[data-hs-toggle-password-group]").classList.remove("active")):(this.isShown=!1,this.el.classList.remove("active")),this.target.forEach(function(r){r.type="password"})},c.getInstance=function(r,a){var u=window.$hsTogglePasswordCollection.find(function(h){return h.element.el===(typeof r=="string"?document.querySelector(r):r)});return u?a?u:u.element:null},c.autoInit=function(){window.$hsTogglePasswordCollection||(window.$hsTogglePasswordCollection=[]),document.querySelectorAll("[data-hs-toggle-password]:not(.--prevent-on-load-init)").forEach(function(r){window.$hsTogglePasswordCollection.find(function(a){var u;return((u=a==null?void 0:a.element)===null||u===void 0?void 0:u.el)===r})||new c(r)})},c}(p(737).default);window.addEventListener("load",function(){b.autoInit()}),typeof window<"u"&&(window.HSTogglePassword=b),f.default=b},679:function(l,f,p){/*
 * HSTooltip
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */var m,C=this&&this.__extends||(m=function(u,h){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,g){d.__proto__=g}||function(d,g){for(var y in g)Object.prototype.hasOwnProperty.call(g,y)&&(d[y]=g[y])},m(u,h)},function(u,h){if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");function d(){this.constructor=u}m(u,h),u.prototype=h===null?Object.create(h):(d.prototype=h.prototype,new d)}),_=this&&this.__assign||function(){return _=Object.assign||function(u){for(var h,d=1,g=arguments.length;d<g;d++)for(var y in h=arguments[d])Object.prototype.hasOwnProperty.call(h,y)&&(u[y]=h[y]);return u},_.apply(this,arguments)},w=this&&this.__spreadArray||function(u,h,d){if(d||arguments.length===2)for(var g,y=0,S=h.length;y<S;y++)!g&&y in h||(g||(g=Array.prototype.slice.call(h,0,y)),g[y]=h[y]);return u.concat(g||Array.prototype.slice.call(h))};Object.defineProperty(f,"__esModule",{value:!0});var b=p(492),v=p(969),c=p(737),r=p(190),a=function(u){function h(d,g,y){var S=u.call(this,d,g,y)||this;return S.el&&(S.toggle=S.el.querySelector(".hs-tooltip-toggle")||S.el,S.content=S.el.querySelector(".hs-tooltip-content"),S.eventMode=(0,v.getClassProperty)(S.el,"--trigger")||"hover",S.preventPopper=(0,v.getClassProperty)(S.el,"--prevent-popper","false"),S.placement=(0,v.getClassProperty)(S.el,"--placement"),S.strategy=(0,v.getClassProperty)(S.el,"--strategy")),S.el&&S.toggle&&S.content&&S.init(),S}return C(h,u),h.prototype.init=function(){var d=this;this.createCollection(window.$hsTooltipCollection,this),this.eventMode==="click"?this.toggle.addEventListener("click",function(){return d.click()}):this.eventMode==="focus"?this.toggle.addEventListener("click",function(){return d.focus()}):this.eventMode==="hover"&&(this.toggle.addEventListener("mouseenter",function(){return d.enter()}),this.toggle.addEventListener("mouseleave",function(){return d.leave()})),this.preventPopper==="false"&&this.buildPopper()},h.prototype.enter=function(){this.show()},h.prototype.leave=function(){this.hide()},h.prototype.click=function(){var d=this;if(this.el.classList.contains("show"))return!1;this.show();var g=function(){setTimeout(function(){d.hide(),d.toggle.removeEventListener("click",g,!0),d.toggle.removeEventListener("blur",g,!0)})};this.toggle.addEventListener("click",g,!0),this.toggle.addEventListener("blur",g,!0)},h.prototype.focus=function(){var d=this;this.show();var g=function(){d.hide(),d.toggle.removeEventListener("blur",g,!0)};this.toggle.addEventListener("blur",g,!0)},h.prototype.buildPopper=function(){this.popperInstance=(0,b.createPopper)(this.toggle,this.content,{placement:r.POSITIONS[this.placement]||"top",strategy:this.strategy||"fixed",modifiers:[{name:"offset",options:{offset:[0,5]}}]})},h.prototype.show=function(){var d=this;this.content.classList.remove("hidden"),this.preventPopper==="false"&&(this.popperInstance.setOptions(function(g){return _(_({},g),{modifiers:w(w([],g.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this.popperInstance.update()),setTimeout(function(){d.el.classList.add("show"),d.fireEvent("show",d.el),(0,v.dispatch)("show.hs.tooltip",d.el,d.el)})},h.prototype.hide=function(){var d=this;this.el.classList.remove("show"),this.preventPopper==="false"&&this.popperInstance.setOptions(function(g){return _(_({},g),{modifiers:w(w([],g.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this.fireEvent("hide",this.el),(0,v.dispatch)("hide.hs.tooltip",this.el,this.el),(0,v.afterTransition)(this.content,function(){if(d.el.classList.contains("show"))return!1;d.content.classList.add("hidden")})},h.getInstance=function(d,g){g===void 0&&(g=!1);var y=window.$hsTooltipCollection.find(function(S){return S.element.el===(typeof d=="string"?document.querySelector(d):d)});return y?g?y:y.element.el:null},h.autoInit=function(){window.$hsTooltipCollection||(window.$hsTooltipCollection=[]),document.querySelectorAll(".hs-tooltip").forEach(function(d){window.$hsTooltipCollection.find(function(g){var y;return((y=g==null?void 0:g.element)===null||y===void 0?void 0:y.el)===d})||new h(d)})},h.show=function(d){var g=window.$hsTooltipCollection.find(function(y){return y.element.el===(typeof d=="string"?document.querySelector(d):d)});if(g)switch(g.element.eventMode){case"click":g.element.click();break;case"focus":g.element.focus();break;default:g.element.enter()}},h.hide=function(d){var g=window.$hsTooltipCollection.find(function(y){return y.element.el===(typeof d=="string"?document.querySelector(d):d)});g&&g.element.hide()},h.on=function(d,g,y){var S=window.$hsTooltipCollection.find(function(x){return x.element.el===(typeof g=="string"?document.querySelector(g):g)});S&&(S.element.events[d]=y)},h}(c.default);window.addEventListener("load",function(){a.autoInit()}),typeof window<"u"&&(window.HSTooltip=a),f.default=a},362:(l,f,p)=>{Object.defineProperty(f,"__esModule",{value:!0}),f.COLLECTIONS=void 0;var m=p(413),C=p(460),_=p(629),w=p(652),b=p(610),v=p(371),c=p(770),r=p(659),a=p(139),u=p(591),h=p(233),d=p(957),g=p(983),y=p(949),S=p(87),x=p(366),A=p(679);f.COLLECTIONS=[{key:"copy-markup",fn:m.default},{key:"accordion",fn:C.default},{key:"carousel",fn:_.default},{key:"collapse",fn:w.default},{key:"dropdown",fn:b.default},{key:"input-number",fn:v.default},{key:"overlay",fn:c.default},{key:"pin-input",fn:r.default},{key:"remove-element",fn:a.default},{key:"scrollspy",fn:u.default},{key:"select",fn:h.default},{key:"stepper",fn:d.default},{key:"strong-password",fn:g.default},{key:"tabs",fn:y.default},{key:"toggle-count",fn:S.default},{key:"toggle-password",fn:x.default},{key:"tooltip",fn:A.default}]},313:(l,f,p)=>{/*
 * HSStaticMethods
 * @version: 2.0.3
 * @author: HTMLStream
 * @license: Licensed under MIT (https://preline.co/docs/license.html)
 * Copyright 2023 HTMLStream
 */Object.defineProperty(f,"__esModule",{value:!0});var m=p(969),C=p(362),_={getClassProperty:m.getClassProperty,afterTransition:m.afterTransition,autoInit:function(w){w===void 0&&(w="all"),w==="all"?C.COLLECTIONS.forEach(function(b){var v=b.fn;v==null||v.autoInit()}):C.COLLECTIONS.forEach(function(b){var v=b.key,c=b.fn;w.includes(v)&&(c==null||c.autoInit())})}};typeof window<"u"&&(window.HSStaticMethods=_),f.default=_},969:function(l,f){var p=this;Object.defineProperty(f,"__esModule",{value:!0}),f.menuSearchHistory=f.classToClassList=f.htmlToElement=f.afterTransition=f.dispatch=f.debounce=f.isFormElement=f.isParentOrElementHidden=f.isEnoughSpace=f.isIpadOS=f.isIOS=f.getClassPropertyAlt=f.getClassProperty=void 0,f.getClassProperty=function(C,_,w){return w===void 0&&(w=""),(window.getComputedStyle(C).getPropertyValue(_)||w).replace(" ","")},f.getClassPropertyAlt=function(C,_,w){w===void 0&&(w="");var b="";return C.classList.forEach(function(v){v.includes(_)&&(b=v)}),b.match(/:(.*)]/)?b.match(/:(.*)]/)[1]:w},f.isIOS=function(){return!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)},f.isIpadOS=function(){return navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform)},f.isEnoughSpace=function(C,_,w,b,v){w===void 0&&(w="auto"),b===void 0&&(b=10),v===void 0&&(v=null);var c=_.getBoundingClientRect(),r=v?v.getBoundingClientRect():null,a=window.innerHeight,u=r?c.top-r.top:c.top,h=(v?r.bottom:a)-c.bottom,d=C.clientHeight+b;return w==="bottom"?h>=d:w==="top"?u>=d:u>=d||h>=d},f.isFormElement=function(C){return C instanceof HTMLInputElement||C instanceof HTMLTextAreaElement||C instanceof HTMLSelectElement};var m=function(C){return!!C&&(window.getComputedStyle(C).display==="none"||m(C.parentElement))};f.isParentOrElementHidden=m,f.debounce=function(C,_){var w;return _===void 0&&(_=200),function(){for(var b=[],v=0;v<arguments.length;v++)b[v]=arguments[v];clearTimeout(w),w=setTimeout(function(){C.apply(p,b)},_)}},f.dispatch=function(C,_,w){w===void 0&&(w=null);var b=new CustomEvent(C,{detail:{payload:w},bubbles:!0,cancelable:!0,composed:!1});_.dispatchEvent(b)},f.afterTransition=function(C,_){var w=function(){_(),C.removeEventListener("transitionend",w,!0)};window.getComputedStyle(C,null).getPropertyValue("transition")!=="all 0s ease 0s"?C.addEventListener("transitionend",w,!0):_()},f.htmlToElement=function(C){var _=document.createElement("template");return C=C.trim(),_.innerHTML=C,_.content.firstChild},f.classToClassList=function(C,_,w){w===void 0&&(w=" "),C.split(w).forEach(function(b){return _.classList.add(b)})},f.menuSearchHistory={historyIndex:-1,addHistory:function(C){this.historyIndex=C},existsInHistory:function(C){return C>this.historyIndex},clearHistory:function(){this.historyIndex=-1}}}},i={};function s(l){var f=i[l];if(f!==void 0)return f.exports;var p=i[l]={exports:{}};return t[l].call(p.exports,p,p.exports,s),p.exports}s.d=(l,f)=>{for(var p in f)s.o(f,p)&&!s.o(l,p)&&Object.defineProperty(l,p,{enumerable:!0,get:f[p]})},s.o=(l,f)=>Object.prototype.hasOwnProperty.call(l,f),s.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var o={};return(()=>{var l=o;Object.defineProperty(l,"__esModule",{value:!0}),l.HSStaticMethods=l.HSTooltip=l.HSTogglePassword=l.HSToggleCount=l.HSThemeSwitch=l.HSTabs=l.HSStrongPassword=l.HSStepper=l.HSSelect=l.HSScrollspy=l.HSSearchByJson=l.HSRemoveElement=l.HSPinInput=l.HSOverlay=l.HSInputNumber=l.HSDropdown=l.HSCollapse=l.HSCarousel=l.HSAccordion=l.HSCopyMarkup=void 0;var f=s(413);Object.defineProperty(l,"HSCopyMarkup",{enumerable:!0,get:function(){return f.default}});var p=s(460);Object.defineProperty(l,"HSAccordion",{enumerable:!0,get:function(){return p.default}});var m=s(629);Object.defineProperty(l,"HSCarousel",{enumerable:!0,get:function(){return m.default}});var C=s(652);Object.defineProperty(l,"HSCollapse",{enumerable:!0,get:function(){return C.default}});var _=s(610);Object.defineProperty(l,"HSDropdown",{enumerable:!0,get:function(){return _.default}});var w=s(371);Object.defineProperty(l,"HSInputNumber",{enumerable:!0,get:function(){return w.default}});var b=s(770);Object.defineProperty(l,"HSOverlay",{enumerable:!0,get:function(){return b.default}});var v=s(659);Object.defineProperty(l,"HSPinInput",{enumerable:!0,get:function(){return v.default}});var c=s(139);Object.defineProperty(l,"HSRemoveElement",{enumerable:!0,get:function(){return c.default}});var r=s(961);Object.defineProperty(l,"HSSearchByJson",{enumerable:!0,get:function(){return r.default}});var a=s(591);Object.defineProperty(l,"HSScrollspy",{enumerable:!0,get:function(){return a.default}});var u=s(233);Object.defineProperty(l,"HSSelect",{enumerable:!0,get:function(){return u.default}});var h=s(957);Object.defineProperty(l,"HSStepper",{enumerable:!0,get:function(){return h.default}});var d=s(983);Object.defineProperty(l,"HSStrongPassword",{enumerable:!0,get:function(){return d.default}});var g=s(949);Object.defineProperty(l,"HSTabs",{enumerable:!0,get:function(){return g.default}});var y=s(557);Object.defineProperty(l,"HSThemeSwitch",{enumerable:!0,get:function(){return y.default}});var S=s(87);Object.defineProperty(l,"HSToggleCount",{enumerable:!0,get:function(){return S.default}});var x=s(366);Object.defineProperty(l,"HSTogglePassword",{enumerable:!0,get:function(){return x.default}});var A=s(679);Object.defineProperty(l,"HSTooltip",{enumerable:!0,get:function(){return A.default}});var M=s(313);Object.defineProperty(l,"HSStaticMethods",{enumerable:!0,get:function(){return M.default}})})(),o})())})(Nl);/**
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
 */const No={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const N=function(n,e){if(!n)throw Xt(e)},Xt=function(n){return new Error("Firebase Database ("+No.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Po=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Pl=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],l=n[t++],f=n[t++],p=((s&7)<<18|(o&63)<<12|(l&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const o=n[t++],l=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|l&63)}}return e.join("")},bs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],l=s+1<n.length,f=l?n[s+1]:0,p=s+2<n.length,m=p?n[s+2]:0,C=o>>2,_=(o&3)<<4|f>>4;let w=(f&15)<<2|m>>6,b=m&63;p||(b=64,l||(w=64)),i.push(t[C],t[_],t[w],t[b])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Po(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Pl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],f=s<n.length?t[n.charAt(s)]:0;++s;const m=s<n.length?t[n.charAt(s)]:64;++s;const _=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||f==null||m==null||_==null)throw new Ll;const w=o<<2|f>>4;if(i.push(w),m!==64){const b=f<<4&240|m>>2;if(i.push(b),_!==64){const v=m<<6&192|_;i.push(v)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ll extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lo=function(n){const e=Po(n);return bs.encodeByteArray(e,!0)},Yn=function(n){return Lo(n).replace(/\./g,"")},Jn=function(n){try{return bs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rl(n){return Ro(void 0,n)}function Ro(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Dl(t)||(n[t]=Ro(n[t],e[t]));return n}function Dl(n){return n!=="__proto__"}/**
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
 */function Ml(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bl=()=>Ml().__FIREBASE_DEFAULTS__,Fl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ul=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Jn(n[1]);return e&&JSON.parse(e)},Is=()=>{try{return Bl()||Fl()||Ul()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Hl=n=>{var e,t;return(t=(e=Is())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ql=n=>{const e=Hl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Do=()=>{var n;return(n=Is())===null||n===void 0?void 0:n.config},$l=n=>{var e;return(e=Is())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Es{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function jl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n),f="";return[Yn(JSON.stringify(t)),Yn(JSON.stringify(l)),f].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ss(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function Wl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Mo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bo(){return No.NODE_ADMIN===!0}function Vl(){try{return typeof indexedDB=="object"}catch{return!1}}function zl(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const Gl="FirebaseError";class Et extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Gl,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,An.prototype.create)}}class An{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],l=o?Kl(o,i):"Error",f=`${this.serviceName}: ${l} (${s}).`;return new Et(s,f,i)}}function Kl(n,e){return n.replace(Yl,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Yl=/\{\$([^}]+)}/g;/**
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
 */function vn(n){return JSON.parse(n)}function ve(n){return JSON.stringify(n)}/**
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
 */const Fo=function(n){let e={},t={},i={},s="";try{const o=n.split(".");e=vn(Jn(o[0])||""),t=vn(Jn(o[1])||""),s=o[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Jl=function(n){const e=Fo(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Ql=function(n){const e=Fo(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ke(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Gt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Pr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Qn(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function ns(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const o=n[s],l=e[s];if(Lr(o)&&Lr(l)){if(!ns(o,l))return!1}else if(o!==l)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Lr(n){return n!==null&&typeof n=="object"}/**
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
 */function Ts(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Xl{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)i[_]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let _=0;_<16;_++)i[_]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let _=16;_<80;_++){const w=i[_-3]^i[_-8]^i[_-14]^i[_-16];i[_]=(w<<1|w>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],l=this.chain_[2],f=this.chain_[3],p=this.chain_[4],m,C;for(let _=0;_<80;_++){_<40?_<20?(m=f^o&(l^f),C=1518500249):(m=o^l^f,C=1859775393):_<60?(m=o&l|f&(o|l),C=2400959708):(m=o^l^f,C=3395469782);const w=(s<<5|s>>>27)+m+p+C+i[_]&4294967295;p=f,f=l,l=(o<<30|o>>>2)&4294967295,o=s,s=w}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const o=this.buf_;let l=this.inbuf_;for(;s<t;){if(l===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(o[l]=e.charCodeAt(s),++l,++s,l===this.blockSize){this.compress_(o),l=0;break}}else for(;s<t;)if(o[l]=e[s],++l,++s,l===this.blockSize){this.compress_(o),l=0;break}}this.inbuf_=l,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let o=24;o>=0;o-=8)e[i]=this.chain_[s]>>o&255,++i;return e}}function Zl(n,e){const t=new ec(n,e);return t.subscribe.bind(t)}class ec{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");tc(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=$i),s.error===void 0&&(s.error=$i),s.complete===void 0&&(s.complete=$i);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tc(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function $i(){}function Uo(n,e){return`${n} failed: ${e} argument `}/**
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
 */const nc=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const o=s-55296;i++,N(i<n.length,"Surrogate pair missing trail surrogate.");const l=n.charCodeAt(i)-56320;s=65536+(o<<10)+l}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},mi=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ot(n){return n&&n._delegate?n._delegate:n}class _t{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ft="[DEFAULT]";/**
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
 */class ic{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Es;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rc(e))try{this.getOrInitializeService({instanceIdentifier:ft})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ft){return this.instances.has(e)}getOptions(e=ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[o,l]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(o);i===f&&l.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&e(l,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:sc(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ft){return this.component?this.component.multipleInstances?e:ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sc(n){return n===ft?void 0:n}function rc(n){return n.instantiationMode==="EAGER"}/**
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
 */class oc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ic(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const ac={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},lc=ne.INFO,cc={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},uc=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=cc[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class As{constructor(e){this.name=e,this._logLevel=lc,this._logHandler=uc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ac[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const hc=(n,e)=>e.some(t=>n instanceof t);let Rr,Dr;function dc(){return Rr||(Rr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fc(){return Dr||(Dr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ho=new WeakMap,is=new WeakMap,qo=new WeakMap,ji=new WeakMap,Os=new WeakMap;function pc(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{t(et(n.result)),s()},l=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&Ho.set(t,n)}).catch(()=>{}),Os.set(e,n),e}function mc(n){if(is.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{t(),s()},l=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});is.set(n,e)}let ss={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return is.get(n);if(e==="objectStoreNames")return n.objectStoreNames||qo.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return et(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gc(n){ss=n(ss)}function vc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Wi(this),e,...t);return qo.set(i,e.sort?e.sort():[e]),et(i)}:fc().includes(n)?function(...e){return n.apply(Wi(this),e),et(Ho.get(this))}:function(...e){return et(n.apply(Wi(this),e))}}function _c(n){return typeof n=="function"?vc(n):(n instanceof IDBTransaction&&mc(n),hc(n,dc())?new Proxy(n,ss):n)}function et(n){if(n instanceof IDBRequest)return pc(n);if(ji.has(n))return ji.get(n);const e=_c(n);return e!==n&&(ji.set(n,e),Os.set(e,n)),e}const Wi=n=>Os.get(n);function yc(n,e,{blocked:t,upgrade:i,blocking:s,terminated:o}={}){const l=indexedDB.open(n,e),f=et(l);return i&&l.addEventListener("upgradeneeded",p=>{i(et(l.result),p.oldVersion,p.newVersion,et(l.transaction),p)}),t&&l.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{o&&p.addEventListener("close",()=>o()),s&&p.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),f}const wc=["get","getKey","getAll","getAllKeys","count"],Cc=["put","add","delete","clear"],Vi=new Map;function Mr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Vi.get(e))return Vi.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Cc.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||wc.includes(t)))return;const o=async function(l,...f){const p=this.transaction(l,s?"readwrite":"readonly");let m=p.store;return i&&(m=m.index(f.shift())),(await Promise.all([m[t](...f),s&&p.done]))[0]};return Vi.set(e,o),o}gc(n=>({...n,get:(e,t,i)=>Mr(e,t)||n.get(e,t,i),has:(e,t)=>!!Mr(e,t)||n.has(e,t)}));/**
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
 */class bc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ic(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Ic(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rs="@firebase/app",Br="0.9.26";/**
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
 */const yt=new As("@firebase/app"),Ec="@firebase/app-compat",Sc="@firebase/analytics-compat",Tc="@firebase/analytics",Ac="@firebase/app-check-compat",Oc="@firebase/app-check",kc="@firebase/auth",xc="@firebase/auth-compat",Nc="@firebase/database",Pc="@firebase/database-compat",Lc="@firebase/functions",Rc="@firebase/functions-compat",Dc="@firebase/installations",Mc="@firebase/installations-compat",Bc="@firebase/messaging",Fc="@firebase/messaging-compat",Uc="@firebase/performance",Hc="@firebase/performance-compat",qc="@firebase/remote-config",$c="@firebase/remote-config-compat",jc="@firebase/storage",Wc="@firebase/storage-compat",Vc="@firebase/firestore",zc="@firebase/firestore-compat",Gc="firebase",Kc="10.7.2";/**
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
 */const os="[DEFAULT]",Yc={[rs]:"fire-core",[Ec]:"fire-core-compat",[Tc]:"fire-analytics",[Sc]:"fire-analytics-compat",[Oc]:"fire-app-check",[Ac]:"fire-app-check-compat",[kc]:"fire-auth",[xc]:"fire-auth-compat",[Nc]:"fire-rtdb",[Pc]:"fire-rtdb-compat",[Lc]:"fire-fn",[Rc]:"fire-fn-compat",[Dc]:"fire-iid",[Mc]:"fire-iid-compat",[Bc]:"fire-fcm",[Fc]:"fire-fcm-compat",[Uc]:"fire-perf",[Hc]:"fire-perf-compat",[qc]:"fire-rc",[$c]:"fire-rc-compat",[jc]:"fire-gcs",[Wc]:"fire-gcs-compat",[Vc]:"fire-fst",[zc]:"fire-fst-compat","fire-js":"fire-js",[Gc]:"fire-js-all"};/**
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
 */const Xn=new Map,as=new Map;function Jc(n,e){try{n.container.addComponent(e)}catch(t){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kt(n){const e=n.name;if(as.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;as.set(e,n);for(const t of Xn.values())Jc(t,n);return!0}function Qc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Xc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},tt=new An("app","Firebase",Xc);/**
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
 */class Zc{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tt.create("app-deleted",{appName:this._name})}}/**
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
 */const gi=Kc;function $o(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:os,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw tt.create("bad-app-name",{appName:String(s)});if(t||(t=Do()),!t)throw tt.create("no-options");const o=Xn.get(s);if(o){if(ns(t,o.options)&&ns(i,o.config))return o;throw tt.create("duplicate-app",{appName:s})}const l=new oc(s);for(const p of as.values())l.addComponent(p);const f=new Zc(t,i,l);return Xn.set(s,f),f}function eu(n=os){const e=Xn.get(n);if(!e&&n===os&&Do())return $o();if(!e)throw tt.create("no-app",{appName:n});return e}function nt(n,e,t){var i;let s=(i=Yc[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const o=s.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const f=[`Unable to register library "${s}" with version "${e}":`];o&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&f.push("and"),l&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(f.join(" "));return}Kt(new _t(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const tu="firebase-heartbeat-database",nu=1,_n="firebase-heartbeat-store";let zi=null;function jo(){return zi||(zi=yc(tu,nu,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(_n)}catch(t){console.warn(t)}}}}).catch(n=>{throw tt.create("idb-open",{originalErrorMessage:n.message})})),zi}async function iu(n){try{return await(await jo()).transaction(_n).objectStore(_n).get(Wo(n))}catch(e){if(e instanceof Et)yt.warn(e.message);else{const t=tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yt.warn(t.message)}}}async function Fr(n,e){try{const i=(await jo()).transaction(_n,"readwrite");await i.objectStore(_n).put(e,Wo(n)),await i.done}catch(t){if(t instanceof Et)yt.warn(t.message);else{const i=tt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});yt.warn(i.message)}}}function Wo(n){return`${n.name}!${n.options.appId}`}/**
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
 */const su=1024,ru=30*24*60*60*1e3;class ou{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lu(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ur();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const f=new Date(l.date).valueOf();return Date.now()-f<=ru}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ur(),{heartbeatsToSend:i,unsentEntries:s}=au(this._heartbeatsCache.heartbeats),o=Yn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Ur(){return new Date().toISOString().substring(0,10)}function au(n,e=su){const t=[];let i=n.slice();for(const s of n){const o=t.find(l=>l.agent===s.agent);if(o){if(o.dates.push(s.date),Hr(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Hr(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class lu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vl()?zl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await iu(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Hr(n){return Yn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function cu(n){Kt(new _t("platform-logger",e=>new bc(e),"PRIVATE")),Kt(new _t("heartbeat",e=>new ou(e),"PRIVATE")),nt(rs,Br,n),nt(rs,Br,"esm2017"),nt("fire-js","")}cu("");var uu="firebase",hu="10.7.2";/**
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
 */nt(uu,hu,"app");const qr="@firebase/database",$r="1.0.2";/**
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
 */let Vo="";function du(n){Vo=n}/**
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
 */class fu{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:vn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class pu{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ke(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const zo=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fu(e)}}catch{}return new pu},mt=zo("localStorage"),ls=zo("sessionStorage");/**
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
 */const qt=new As("@firebase/database"),mu=function(){let n=1;return function(){return n++}}(),Go=function(n){const e=nc(n),t=new Xl;t.update(e);const i=t.digest();return bs.encodeByteArray(i)},On=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=On.apply(null,i):typeof i=="object"?e+=ve(i):e+=i,e+=" "}return e};let vt=null,jr=!0;const gu=function(n,e){N(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(qt.logLevel=ne.VERBOSE,vt=qt.log.bind(qt),e&&ls.set("logging_enabled",!0)):typeof n=="function"?vt=n:(vt=null,ls.remove("logging_enabled"))},ye=function(...n){if(jr===!0&&(jr=!1,vt===null&&ls.get("logging_enabled")===!0&&gu(!0)),vt){const e=On.apply(null,n);vt(e)}},kn=function(n){return function(...e){ye(n,...e)}},cs=function(...n){const e="FIREBASE INTERNAL ERROR: "+On(...n);qt.error(e)},Ge=function(...n){const e=`FIREBASE FATAL ERROR: ${On(...n)}`;throw qt.error(e),new Error(e)},Te=function(...n){const e="FIREBASE WARNING: "+On(...n);qt.warn(e)},vu=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Te("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ko=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},_u=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Yt="[MIN_NAME]",wt="[MAX_NAME]",Zt=function(n,e){if(n===e)return 0;if(n===Yt||e===wt)return-1;if(e===Yt||n===wt)return 1;{const t=Wr(n),i=Wr(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},yu=function(n,e){return n===e?0:n<e?-1:1},an=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ve(e))},ks=function(n){if(typeof n!="object"||n===null)return ve(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=ve(e[i]),t+=":",t+=ks(n[e[i]]);return t+="}",t},Yo=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Ee(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Jo=function(n){N(!Ko(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,o,l,f,p;n===0?(o=0,l=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(f=Math.min(Math.floor(Math.log(n)/Math.LN2),i),o=f+i,l=Math.round(n*Math.pow(2,t-f)-Math.pow(2,t))):(o=0,l=Math.round(n/Math.pow(2,1-i-t))));const m=[];for(p=t;p;p-=1)m.push(l%2?1:0),l=Math.floor(l/2);for(p=e;p;p-=1)m.push(o%2?1:0),o=Math.floor(o/2);m.push(s?1:0),m.reverse();const C=m.join("");let _="";for(p=0;p<64;p+=8){let w=parseInt(C.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),_=_+w}return _.toLowerCase()},wu=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Cu=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bu(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Iu=new RegExp("^-?(0*)\\d{1,10}$"),Eu=-2147483648,Su=2147483647,Wr=function(n){if(Iu.test(n)){const e=Number(n);if(e>=Eu&&e<=Su)return e}return null},xn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Te("Exception was thrown by user callback.",t),e},Math.floor(0))}},Tu=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},hn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Au{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Te(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Ou{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Te(e)}}class $t{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$t.OWNER="owner";/**
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
 */const xs="5",Qo="v",Xo="s",Zo="r",ea="f",ta=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,na="ls",ia="p",us="ac",sa="websocket",ra="long_polling";/**
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
 */class oa{constructor(e,t,i,s,o=!1,l="",f=!1,p=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=o,this.persistenceKey=l,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=mt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&mt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ku(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function aa(n,e,t){N(typeof e=="string","typeof type must == string"),N(typeof t=="object","typeof params must == object");let i;if(e===sa)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ra)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ku(n)&&(t.ns=n.namespace);const s=[];return Ee(t,(o,l)=>{s.push(o+"="+l)}),i+s.join("&")}/**
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
 */class xu{constructor(){this.counters_={}}incrementCounter(e,t=1){Ke(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Rl(this.counters_)}}/**
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
 */const Gi={},Ki={};function Ns(n){const e=n.toString();return Gi[e]||(Gi[e]=new xu),Gi[e]}function Nu(n,e){const t=n.toString();return Ki[t]||(Ki[t]=e()),Ki[t]}/**
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
 */class Pu{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&xn(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Vr="start",Lu="close",Ru="pLPCommand",Du="pRTLPCB",la="id",ca="pw",ua="ser",Mu="cb",Bu="seg",Fu="ts",Uu="d",Hu="dframe",ha=1870,da=30,qu=ha-da,$u=25e3,ju=3e4;class Ut{constructor(e,t,i,s,o,l,f){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=o,this.transportSessionId=l,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=kn(e),this.stats_=Ns(t),this.urlFn=p=>(this.appCheckToken&&(p[us]=this.appCheckToken),aa(t,ra,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Pu(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ju)),_u(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ps((...o)=>{const[l,f,p,m,C]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,l===Vr)this.id=f,this.password=p;else if(l===Lu)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+l)},(...o)=>{const[l,f]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(l,f)},()=>{this.onClosed_()},this.urlFn);const i={};i[Vr]="t",i[ua]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Mu]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Qo]=xs,this.transportSessionId&&(i[Xo]=this.transportSessionId),this.lastSessionId&&(i[na]=this.lastSessionId),this.applicationId&&(i[ia]=this.applicationId),this.appCheckToken&&(i[us]=this.appCheckToken),typeof location<"u"&&location.hostname&&ta.test(location.hostname)&&(i[Zo]=ea);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ut.forceAllow_=!0}static forceDisallow(){Ut.forceDisallow_=!0}static isAvailable(){return Ut.forceAllow_?!0:!Ut.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wu()&&!Cu()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ve(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Lo(t),s=Yo(i,qu);for(let o=0;o<s.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[o]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Hu]="t",i[la]=e,i[ca]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ve(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ps{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mu(),window[Ru+this.uniqueCallbackIdentifier]=e,window[Du+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ps.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const l="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(l),this.myIFrame.doc.close()}catch(f){ye("frame writing exception"),f.stack&&ye(f.stack),ye(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ye("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[la]=this.myID,e[ca]=this.myPW,e[ua]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+da+i.length<=ha;){const l=this.pendingSegs.shift();i=i+"&"+Bu+s+"="+l.seg+"&"+Fu+s+"="+l.ts+"&"+Uu+s+"="+l.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor($u)),o=()=>{clearTimeout(s),i()};this.addTag(e,o)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Wu=16384,Vu=45e3;let Zn=null;typeof MozWebSocket<"u"?Zn=MozWebSocket:typeof WebSocket<"u"&&(Zn=WebSocket);class Re{constructor(e,t,i,s,o,l,f){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=kn(this.connId),this.stats_=Ns(t),this.connURL=Re.connectionURL_(t,l,f,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,o){const l={};return l[Qo]=xs,typeof location<"u"&&location.hostname&&ta.test(location.hostname)&&(l[Zo]=ea),t&&(l[Xo]=t),i&&(l[na]=i),s&&(l[us]=s),o&&(l[ia]=o),aa(e,sa,l)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,mt.set("previous_websocket_failure",!0);try{let i;Bo(),this.mySock=new Zn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Re.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Zn!==null&&!Re.forceDisallow_}static previouslyFailed(){return mt.isInMemoryStorage||mt.get("previous_websocket_failure")===!0}markConnectionHealthy(){mt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=vn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=ve(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Yo(t,Wu);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Vu))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Re.responsesRequiredToBeHealthy=2;Re.healthyTimeout=3e4;/**
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
 */class yn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ut,Re]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Re&&Re.isAvailable();let i=t&&!Re.previouslyFailed();if(e.webSocketOnly&&(t||Te("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Re];else{const s=this.transports_=[];for(const o of yn.ALL_TRANSPORTS)o&&o.isAvailable()&&s.push(o);yn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yn.globalTransportInitialized_=!1;/**
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
 */const zu=6e4,Gu=5e3,Ku=10*1024,Yu=100*1024,Yi="t",zr="d",Ju="s",Gr="r",Qu="e",Kr="o",Yr="a",Jr="n",Qr="p",Xu="h";class Zu{constructor(e,t,i,s,o,l,f,p,m,C){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=o,this.onMessage_=l,this.onReady_=f,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=C,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=kn("c:"+this.id+":"),this.transportManager_=new yn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=hn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Yu?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ku?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Yi in e){const t=e[Yi];t===Yr?this.upgradeIfSecondaryHealthy_():t===Gr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Kr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=an("t",e),i=an("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Yr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Jr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=an("t",e),i=an("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=an(Yi,e);if(zr in e){const i=e[zr];if(t===Xu){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Jr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ju?this.onConnectionShutdown_(i):t===Gr?this.onReset_(i):t===Qu?cs("Server Error: "+i):t===Kr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):cs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),xs!==i&&Te("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),hn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zu))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):hn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Gu))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(mt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class fa{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class pa{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let o=0;o<s.length;o++)if(s[o].callback===t&&(!i||i===s[o].context)){s.splice(o,1);return}}validateEventType_(e){N(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ei extends pa{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ss()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ei}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Xr=32,Zr=768;class re{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function K(){return new re("")}function W(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function st(n){return n.pieces_.length-n.pieceNum_}function oe(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new re(n.pieces_,e)}function ma(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function eh(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ga(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function va(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new re(e,0)}function pe(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof re)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new re(t,0)}function V(n){return n.pieceNum_>=n.pieces_.length}function be(n,e){const t=W(n),i=W(e);if(t===null)return e;if(t===i)return be(oe(n),oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Ls(n,e){if(st(n)!==st(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function De(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(st(n)>st(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class th{constructor(e,t){this.errorPrefix_=t,this.parts_=ga(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=mi(this.parts_[i]);_a(this)}}function nh(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=mi(e),_a(n)}function ih(n){const e=n.parts_.pop();n.byteLength_-=mi(e),n.parts_.length>0&&(n.byteLength_-=1)}function _a(n){if(n.byteLength_>Zr)throw new Error(n.errorPrefix_+"has a key path longer than "+Zr+" bytes ("+n.byteLength_+").");if(n.parts_.length>Xr)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xr+") or object contains a cycle "+pt(n))}function pt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Rs extends pa{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Rs}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ln=1e3,sh=60*5*1e3,eo=30*1e3,rh=1.3,oh=3e4,ah="server_kill",to=3;class ze extends fa{constructor(e,t,i,s,o,l,f,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=o,this.authTokenProvider_=l,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=ze.nextPersistentConnectionId_++,this.log_=kn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ln,this.maxReconnectDelay_=sh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p&&!Bo())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ei.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,o={r:s,a:e,b:t};this.log_(ve(o)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Es,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:l=>{const f=l.d;l.s==="ok"?t.resolve(f):t.reject(f)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),t.promise}listen(e,t,i,s){this.initConnection_();const o=e._queryIdentifier,l=e._path.toString();this.log_("Listen called for "+l+" "+o),this.listens.has(l)||this.listens.set(l,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(l).has(o),"listen() called twice for same path/queryId.");const f={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(l).set(o,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const o={p:i},l="q";e.tag&&(o.q=t._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(l,o,f=>{const p=f.d,m=f.s;ze.warnOnListenWarnings_(p,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",f),m!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ke(e,"w")){const i=Gt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',o=t._path.toString();Te(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ql(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=eo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Jl(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const o=s.s,l=s.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,l))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const o={p:e},l="n";s&&(o.q=i,o.t=s),this.sendRequest(l,o)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const o={p:t,d:i};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,l=>{s&&setTimeout(()=>{s(l.s,l.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,o){this.initConnection_();const l={p:t,d:i};o!==void 0&&(l.h=o),this.outstandingPuts_.push({action:e,request:l,onComplete:s}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,o=>{this.log_(t+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(o.s,o.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const o=i.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):cs("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ln,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ln,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>oh&&(this.reconnectDelay_=ln),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*rh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ze.nextConnectionId_++,o=this.lastSessionId;let l=!1,f=null;const p=function(){f?f.close():(l=!0,i())},m=function(_){N(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(_)};this.realtime_={close:p,sendRequest:m};const C=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,w]=await Promise.all([this.authTokenProvider_.getToken(C),this.appCheckTokenProvider_.getToken(C)]);l?ye("getToken() completed but was canceled"):(ye("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=w&&w.token,f=new Zu(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,b=>{Te(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(ah)},o))}catch(_){this.log_("Failed to get token: "+_),l||(this.repoInfo_.nodeAdmin&&Te(_),p())}}}interrupt(e){ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pr(this.interruptReasons_)&&(this.reconnectDelay_=ln,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(o=>ks(o)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new re(e).toString();let s;if(this.listens.has(i)){const o=this.listens.get(i);s=o.get(t),o.delete(t),o.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){ye("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=to&&(this.reconnectDelay_=eo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ye("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=to&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Vo.replace(/\./g,"-")]=1,Ss()?e["framework.cordova"]=1:Mo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ei.getInstance().currentlyOnline();return Pr(this.interruptReasons_)&&e}}ze.nextPersistentConnectionId_=0;ze.nextConnectionId_=0;/**
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
 */class j{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new j(e,t)}}/**
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
 */class vi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new j(Yt,e),s=new j(Yt,t);return this.compare(i,s)!==0}minPost(){return j.MIN}}/**
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
 */let Vn;class ya extends vi{static get __EMPTY_NODE(){return Vn}static set __EMPTY_NODE(e){Vn=e}compare(e,t){return Zt(e.name,t.name)}isDefinedOn(e){throw Xt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return j.MIN}maxPost(){return new j(wt,Vn)}makePost(e,t){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Vn)}toString(){return".key"}}const jt=new ya;/**
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
 */class zn{constructor(e,t,i,s,o=null){this.isReverse_=s,this.resultGenerator_=o,this.nodeStack_=[];let l=1;for(;!e.isEmpty();)if(e=e,l=t?i(e.key,t):1,s&&(l*=-1),l<0)this.isReverse_?e=e.left:e=e.right;else if(l===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,t,i,s,o){this.key=e,this.value=t,this.color=i??ge.RED,this.left=s??Ie.EMPTY_NODE,this.right=o??Ie.EMPTY_NODE}copy(e,t,i,s,o){return new ge(e??this.key,t??this.value,i??this.color,s??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const o=i(e,s.key);return o<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):o===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ie.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Ie.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class lh{copy(e,t,i,s,o){return this}insert(e,t,i){return new ge(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ie{constructor(e,t=Ie.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ie(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new Ie(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new zn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new zn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new zn(this.root_,null,this.comparator_,!0,e)}}Ie.EMPTY_NODE=new lh;/**
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
 */function ch(n,e){return Zt(n.name,e.name)}function Ds(n,e){return Zt(n,e)}/**
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
 */let hs;function uh(n){hs=n}const wa=function(n){return typeof n=="number"?"number:"+Jo(n):"string:"+n},Ca=function(n){if(n.isLeafNode()){const e=n.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ke(e,".sv"),"Priority must be a string or number.")}else N(n===hs||n.isEmpty(),"priority of unexpected type.");N(n===hs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let no;class me{constructor(e,t=me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ca(this.priorityNode_)}static set __childrenNodeConstructor(e){no=e}static get __childrenNodeConstructor(){return no}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:W(e)===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=W(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(N(i!==".priority"||st(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,me.__childrenNodeConstructor.EMPTY_NODE.updateChild(oe(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wa(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Jo(this.value_):e+=this.value_,this.lazyHash_=Go(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof me.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=me.VALUE_TYPE_ORDER.indexOf(t),o=me.VALUE_TYPE_ORDER.indexOf(i);return N(s>=0,"Unknown leaf type: "+t),N(o>=0,"Unknown leaf type: "+i),s===o?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ba,Ia;function hh(n){ba=n}function dh(n){Ia=n}class fh extends vi{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),o=i.compareTo(s);return o===0?Zt(e.name,t.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return j.MIN}maxPost(){return new j(wt,new me("[PRIORITY-POST]",Ia))}makePost(e,t){const i=ba(e);return new j(t,new me("[PRIORITY-POST]",i))}toString(){return".priority"}}const he=new fh;/**
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
 */const ph=Math.log(2);class mh{constructor(e){const t=o=>parseInt(Math.log(o)/ph,10),i=o=>parseInt(Array(o+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ti=function(n,e,t,i){n.sort(e);const s=function(p,m){const C=m-p;let _,w;if(C===0)return null;if(C===1)return _=n[p],w=t?t(_):_,new ge(w,_.node,ge.BLACK,null,null);{const b=parseInt(C/2,10)+p,v=s(p,b),c=s(b+1,m);return _=n[b],w=t?t(_):_,new ge(w,_.node,ge.BLACK,v,c)}},o=function(p){let m=null,C=null,_=n.length;const w=function(v,c){const r=_-v,a=_;_-=v;const u=s(r+1,a),h=n[r],d=t?t(h):h;b(new ge(d,h.node,c,null,u))},b=function(v){m?(m.left=v,m=v):(C=v,m=v)};for(let v=0;v<p.count;++v){const c=p.nextBitIsOne(),r=Math.pow(2,p.count-(v+1));c?w(r,ge.BLACK):(w(r,ge.BLACK),w(r,ge.RED))}return C},l=new mh(n.length),f=o(l);return new Ie(i||e,f)};/**
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
 */let Ji;const Ft={};class Ve{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return N(Ft&&he,"ChildrenNode.ts has not been loaded"),Ji=Ji||new Ve({".priority":Ft},{".priority":he}),Ji}get(e){const t=Gt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ie?t:null}hasIndex(e){return Ke(this.indexSet_,e.toString())}addIndex(e,t){N(e!==jt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const o=t.getIterator(j.Wrap);let l=o.getNext();for(;l;)s=s||e.isDefinedOn(l.node),i.push(l),l=o.getNext();let f;s?f=ti(i,e.getCompare()):f=Ft;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const C=Object.assign({},this.indexes_);return C[p]=f,new Ve(C,m)}addToIndexes(e,t){const i=Qn(this.indexes_,(s,o)=>{const l=Gt(this.indexSet_,o);if(N(l,"Missing index implementation for "+o),s===Ft)if(l.isDefinedOn(e.node)){const f=[],p=t.getIterator(j.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&f.push(m),m=p.getNext();return f.push(e),ti(f,l.getCompare())}else return Ft;else{const f=t.get(e.name);let p=s;return f&&(p=p.remove(new j(e.name,f))),p.insert(e,e.node)}});return new Ve(i,this.indexSet_)}removeFromIndexes(e,t){const i=Qn(this.indexes_,s=>{if(s===Ft)return s;{const o=t.get(e.name);return o?s.remove(new j(e.name,o)):s}});return new Ve(i,this.indexSet_)}}/**
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
 */let cn;class H{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Ca(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return cn||(cn=new H(new Ie(Ds),null,Ve.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||cn}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?cn:t}}getChild(e){const t=W(e);return t===null?this:this.getImmediateChild(t).getChild(oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(N(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new j(e,t);let s,o;t.isEmpty()?(s=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),o=this.indexMap_.addToIndexes(i,this.children_));const l=s.isEmpty()?cn:this.priorityNode_;return new H(s,l,o)}}updateChild(e,t){const i=W(e);if(i===null)return t;{N(W(e)!==".priority"||st(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(oe(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,o=!0;if(this.forEachChild(he,(l,f)=>{t[l]=f.val(e),i++,o&&H.INTEGER_REGEXP_.test(l)?s=Math.max(s,Number(l)):o=!1}),!e&&o&&s<2*i){const l=[];for(const f in t)l[f]=t[f];return l}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+wa(this.getPriority().val())+":"),this.forEachChild(he,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Go(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const o=s.getPredecessorKey(new j(e,t));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new j(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new j(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,j.Wrap);let o=s.peek();for(;o!=null&&t.compare(o,e)<0;)s.getNext(),o=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let o=s.peek();for(;o!=null&&t.compare(o,e)>0;)s.getNext(),o=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Nn?-1:0}withIndex(e){if(e===jt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===jt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(he),s=t.getIterator(he);let o=i.getNext(),l=s.getNext();for(;o&&l;){if(o.name!==l.name||!o.node.equals(l.node))return!1;o=i.getNext(),l=s.getNext()}return o===null&&l===null}else return!1;else return!1}}resolveIndex_(e){return e===jt?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gh extends H{constructor(){super(new Ie(Ds),H.EMPTY_NODE,Ve.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Nn=new gh;Object.defineProperties(j,{MIN:{value:new j(Yt,H.EMPTY_NODE)},MAX:{value:new j(wt,Nn)}});ya.__EMPTY_NODE=H.EMPTY_NODE;me.__childrenNodeConstructor=H;uh(Nn);dh(Nn);/**
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
 */const vh=!0;function we(n,e=null){if(n===null)return H.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new me(t,we(e))}if(!(n instanceof Array)&&vh){const t=[];let i=!1;if(Ee(n,(l,f)=>{if(l.substring(0,1)!=="."){const p=we(f);p.isEmpty()||(i=i||!p.getPriority().isEmpty(),t.push(new j(l,p)))}}),t.length===0)return H.EMPTY_NODE;const o=ti(t,ch,l=>l.name,Ds);if(i){const l=ti(t,he.getCompare());return new H(o,we(e),new Ve({".priority":l},{".priority":he}))}else return new H(o,we(e),Ve.Default)}else{let t=H.EMPTY_NODE;return Ee(n,(i,s)=>{if(Ke(n,i)&&i.substring(0,1)!=="."){const o=we(s);(o.isLeafNode()||!o.isEmpty())&&(t=t.updateImmediateChild(i,o))}}),t.updatePriority(we(e))}}hh(we);/**
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
 */class _h extends vi{constructor(e){super(),this.indexPath_=e,N(!V(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),o=i.compareTo(s);return o===0?Zt(e.name,t.name):o}makePost(e,t){const i=we(e),s=H.EMPTY_NODE.updateChild(this.indexPath_,i);return new j(t,s)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Nn);return new j(wt,e)}toString(){return ga(this.indexPath_,0).join("/")}}/**
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
 */class yh extends vi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Zt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,t){const i=we(e);return new j(t,i)}toString(){return".value"}}const wh=new yh;/**
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
 */function Ea(n){return{type:"value",snapshotNode:n}}function Jt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function wn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Cn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Ch(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Ms{constructor(e){this.index_=e}updateChild(e,t,i,s,o,l){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(t);return f.getChild(s).equals(i.getChild(s))&&f.isEmpty()===i.isEmpty()||(l!=null&&(i.isEmpty()?e.hasChild(t)?l.trackChildChange(wn(t,f)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?l.trackChildChange(Jt(t,i)):l.trackChildChange(Cn(t,i,f))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(he,(s,o)=>{t.hasChild(s)||i.trackChildChange(wn(s,o))}),t.isLeafNode()||t.forEachChild(he,(s,o)=>{if(e.hasChild(s)){const l=e.getImmediateChild(s);l.equals(o)||i.trackChildChange(Cn(s,o,l))}else i.trackChildChange(Jt(s,o))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class bn{constructor(e){this.indexedFilter_=new Ms(e.getIndex()),this.index_=e.getIndex(),this.startPost_=bn.getStartPost_(e),this.endPost_=bn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,o,l){return this.matches(new j(t,i))||(i=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,o,l)}updateFullNode(e,t,i){t.isLeafNode()&&(t=H.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(H.EMPTY_NODE);const o=this;return t.forEachChild(he,(l,f)=>{o.matches(new j(l,f))||(s=s.updateImmediateChild(l,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class bh{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new bn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,o,l){return this.rangedFilter_.matches(new j(t,i))||(i=H.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,o,l):this.fullLimitUpdateChild_(e,t,i,o,l)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=H.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let l=0;for(;o.hasNext()&&l<this.limit_;){const f=o.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))s=s.updateImmediateChild(f.name,f.node),l++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(H.EMPTY_NODE);let o;this.reverse_?o=s.getReverseIterator(this.index_):o=s.getIterator(this.index_);let l=0;for(;o.hasNext();){const f=o.getNext();l<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?l++:s=s.updateImmediateChild(f.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,o){let l;if(this.reverse_){const _=this.index_.getCompare();l=(w,b)=>_(b,w)}else l=this.index_.getCompare();const f=e;N(f.numChildren()===this.limit_,"");const p=new j(t,i),m=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),C=this.rangedFilter_.matches(p);if(f.hasChild(t)){const _=f.getImmediateChild(t);let w=s.getChildAfterChild(this.index_,m,this.reverse_);for(;w!=null&&(w.name===t||f.hasChild(w.name));)w=s.getChildAfterChild(this.index_,w,this.reverse_);const b=w==null?1:l(w,p);if(C&&!i.isEmpty()&&b>=0)return o!=null&&o.trackChildChange(Cn(t,i,_)),f.updateImmediateChild(t,i);{o!=null&&o.trackChildChange(wn(t,_));const c=f.updateImmediateChild(t,H.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(o!=null&&o.trackChildChange(Jt(w.name,w.node)),c.updateImmediateChild(w.name,w.node)):c}}else return i.isEmpty()?e:C&&l(m,p)>=0?(o!=null&&(o.trackChildChange(wn(m.name,m.node)),o.trackChildChange(Jt(t,i))),f.updateImmediateChild(t,i).updateImmediateChild(m.name,H.EMPTY_NODE)):e}}/**
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
 */class Bs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yt}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new Bs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ih(n){return n.loadsAllData()?new Ms(n.getIndex()):n.hasLimit()?new bh(n):new bn(n)}function io(n){const e={};if(n.isDefault())return e;let t;if(n.index_===he?t="$priority":n.index_===wh?t="$value":n.index_===jt?t="$key":(N(n.index_ instanceof _h,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ve(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=ve(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+ve(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=ve(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+ve(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function so(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==he&&(e.i=n.index_.toString()),e}/**
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
 */class ni extends fa{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=kn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const l=ni.getListenId_(e,i),f={};this.listens_[l]=f;const p=io(e._queryParams);this.restRequest_(o+".json",p,(m,C)=>{let _=C;if(m===404&&(_=null,m=null),m===null&&this.onDataUpdate_(o,_,!1,i),Gt(this.listens_,l)===f){let w;m?m===401?w="permission_denied":w="rest_error:"+m:w="ok",s(w,null)}})}unlisten(e,t){const i=ni.getListenId_(e,t);delete this.listens_[i]}get(e){const t=io(e._queryParams),i=e._path.toString(),s=new Es;return this.restRequest_(i+".json",t,(o,l)=>{let f=l;o===404&&(f=null,o=null),o===null?(this.onDataUpdate_(i,f,!1,null),s.resolve(f)):s.reject(new Error(f))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,o])=>{s&&s.accessToken&&(t.auth=s.accessToken),o&&o.token&&(t.ac=o.token);const l=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ts(t);this.log_("Sending REST request for "+l);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(i&&f.readyState===4){this.log_("REST Response for "+l+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=vn(f.responseText)}catch{Te("Failed to parse JSON response for "+l+": "+f.responseText)}i(null,p)}else f.status!==401&&f.status!==404&&Te("Got unsuccessful REST response for "+l+" Status: "+f.status),i(f.status);i=null}},f.open("GET",l,!0),f.send()})}}/**
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
 */class Eh{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function ii(){return{value:null,children:new Map}}function Sa(n,e,t){if(V(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=W(e);n.children.has(i)||n.children.set(i,ii());const s=n.children.get(i);e=oe(e),Sa(s,e,t)}}function ds(n,e,t){n.value!==null?t(e,n.value):Sh(n,(i,s)=>{const o=new re(e.toString()+"/"+i);ds(s,o,t)})}function Sh(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class Th{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ee(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const ro=10*1e3,Ah=30*1e3,Oh=5*60*1e3;class kh{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Th(e);const i=ro+(Ah-ro)*Math.random();hn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Ee(e,(s,o)=>{o>0&&Ke(this.statsToReport_,s)&&(t[s]=o,i=!0)}),i&&this.server_.reportStats(t),hn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Oh))}}/**
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
 */var Me;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Me||(Me={}));function Ta(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Us(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class si{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Me.ACK_USER_WRITE,this.source=Ta()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new re(e));return new si(K(),t,this.revert)}}else return N(W(this.path)===e,"operationForChild called for unrelated child."),new si(oe(this.path),this.affectedTree,this.revert)}}/**
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
 */class In{constructor(e,t){this.source=e,this.path=t,this.type=Me.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new In(this.source,K()):new In(this.source,oe(this.path))}}/**
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
 */class Ct{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Me.OVERWRITE}operationForChild(e){return V(this.path)?new Ct(this.source,K(),this.snap.getImmediateChild(e)):new Ct(this.source,oe(this.path),this.snap)}}/**
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
 */class En{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Me.MERGE}operationForChild(e){if(V(this.path)){const t=this.children.subtree(new re(e));return t.isEmpty()?null:t.value?new Ct(this.source,K(),t.value):new En(this.source,K(),t)}else return N(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new En(this.source,oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class bt{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const t=W(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class xh{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Nh(n,e,t,i){const s=[],o=[];return e.forEach(l=>{l.type==="child_changed"&&n.index_.indexedValueChanged(l.oldSnap,l.snapshotNode)&&o.push(Ch(l.childName,l.snapshotNode))}),un(n,s,"child_removed",e,i,t),un(n,s,"child_added",e,i,t),un(n,s,"child_moved",o,i,t),un(n,s,"child_changed",e,i,t),un(n,s,"value",e,i,t),s}function un(n,e,t,i,s,o){const l=i.filter(f=>f.type===t);l.sort((f,p)=>Lh(n,f,p)),l.forEach(f=>{const p=Ph(n,f,o);s.forEach(m=>{m.respondsTo(f.type)&&e.push(m.createEvent(p,n.query_))})})}function Ph(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Lh(n,e,t){if(e.childName==null||t.childName==null)throw Xt("Should only compare child_ events.");const i=new j(e.childName,e.snapshotNode),s=new j(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function _i(n,e){return{eventCache:n,serverCache:e}}function dn(n,e,t,i){return _i(new bt(e,t,i),n.serverCache)}function Aa(n,e,t,i){return _i(n.eventCache,new bt(e,t,i))}function fs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function It(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Qi;const Rh=()=>(Qi||(Qi=new Ie(yu)),Qi);class le{constructor(e,t=Rh()){this.value=e,this.children=t}static fromObject(e){let t=new le(null);return Ee(e,(i,s)=>{t=t.set(new re(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:K(),value:this.value};if(V(e))return null;{const i=W(e),s=this.children.get(i);if(s!==null){const o=s.findRootMostMatchingPathAndValue(oe(e),t);return o!=null?{path:pe(new re(i),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const t=W(e),i=this.children.get(t);return i!==null?i.subtree(oe(e)):new le(null)}}set(e,t){if(V(e))return new le(t,this.children);{const i=W(e),o=(this.children.get(i)||new le(null)).set(oe(e),t),l=this.children.insert(i,o);return new le(this.value,l)}}remove(e){if(V(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const t=W(e),i=this.children.get(t);if(i){const s=i.remove(oe(e));let o;return s.isEmpty()?o=this.children.remove(t):o=this.children.insert(t,s),this.value===null&&o.isEmpty()?new le(null):new le(this.value,o)}else return this}}get(e){if(V(e))return this.value;{const t=W(e),i=this.children.get(t);return i?i.get(oe(e)):null}}setTree(e,t){if(V(e))return t;{const i=W(e),o=(this.children.get(i)||new le(null)).setTree(oe(e),t);let l;return o.isEmpty()?l=this.children.remove(i):l=this.children.insert(i,o),new le(this.value,l)}}fold(e){return this.fold_(K(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,o)=>{i[s]=o.fold_(pe(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,K(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(V(e))return null;{const o=W(e),l=this.children.get(o);return l?l.findOnPath_(oe(e),pe(t,o),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,K(),t)}foreachOnPath_(e,t,i){if(V(e))return this;{this.value&&i(t,this.value);const s=W(e),o=this.children.get(s);return o?o.foreachOnPath_(oe(e),pe(t,s),i):new le(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(pe(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class Be{constructor(e){this.writeTree_=e}static empty(){return new Be(new le(null))}}function fn(n,e,t){if(V(e))return new Be(new le(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let o=i.value;const l=be(s,e);return o=o.updateChild(l,t),new Be(n.writeTree_.set(s,o))}else{const s=new le(t),o=n.writeTree_.setTree(e,s);return new Be(o)}}}function oo(n,e,t){let i=n;return Ee(t,(s,o)=>{i=fn(i,pe(e,s),o)}),i}function ao(n,e){if(V(e))return Be.empty();{const t=n.writeTree_.setTree(e,new le(null));return new Be(t)}}function ps(n,e){return St(n,e)!=null}function St(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(be(t.path,e)):null}function lo(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(he,(i,s)=>{e.push(new j(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new j(i,s.value))}),e}function it(n,e){if(V(e))return n;{const t=St(n,e);return t!=null?new Be(new le(t)):new Be(n.writeTree_.subtree(e))}}function ms(n){return n.writeTree_.isEmpty()}function Qt(n,e){return Oa(K(),n.writeTree_,e)}function Oa(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,o)=>{s===".priority"?(N(o.value!==null,"Priority writes must always be leaf nodes"),i=o.value):t=Oa(pe(n,s),o,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(pe(n,".priority"),i)),t}}/**
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
 */function Hs(n,e){return Pa(e,n)}function Dh(n,e,t,i,s){N(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=fn(n.visibleWrites,e,t)),n.lastWriteId=i}function Mh(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Bh(n,e){const t=n.allWrites.findIndex(f=>f.writeId===e);N(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,o=!1,l=n.allWrites.length-1;for(;s&&l>=0;){const f=n.allWrites[l];f.visible&&(l>=t&&Fh(f,i.path)?s=!1:De(i.path,f.path)&&(o=!0)),l--}if(s){if(o)return Uh(n),!0;if(i.snap)n.visibleWrites=ao(n.visibleWrites,i.path);else{const f=i.children;Ee(f,p=>{n.visibleWrites=ao(n.visibleWrites,pe(i.path,p))})}return!0}else return!1}function Fh(n,e){if(n.snap)return De(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&De(pe(n.path,t),e))return!0;return!1}function Uh(n){n.visibleWrites=ka(n.allWrites,Hh,K()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Hh(n){return n.visible}function ka(n,e,t){let i=Be.empty();for(let s=0;s<n.length;++s){const o=n[s];if(e(o)){const l=o.path;let f;if(o.snap)De(t,l)?(f=be(t,l),i=fn(i,f,o.snap)):De(l,t)&&(f=be(l,t),i=fn(i,K(),o.snap.getChild(f)));else if(o.children){if(De(t,l))f=be(t,l),i=oo(i,f,o.children);else if(De(l,t))if(f=be(l,t),V(f))i=oo(i,K(),o.children);else{const p=Gt(o.children,W(f));if(p){const m=p.getChild(oe(f));i=fn(i,K(),m)}}}else throw Xt("WriteRecord should have .snap or .children")}}return i}function xa(n,e,t,i,s){if(!i&&!s){const o=St(n.visibleWrites,e);if(o!=null)return o;{const l=it(n.visibleWrites,e);if(ms(l))return t;if(t==null&&!ps(l,K()))return null;{const f=t||H.EMPTY_NODE;return Qt(l,f)}}}else{const o=it(n.visibleWrites,e);if(!s&&ms(o))return t;if(!s&&t==null&&!ps(o,K()))return null;{const l=function(m){return(m.visible||s)&&(!i||!~i.indexOf(m.writeId))&&(De(m.path,e)||De(e,m.path))},f=ka(n.allWrites,l,e),p=t||H.EMPTY_NODE;return Qt(f,p)}}}function qh(n,e,t){let i=H.EMPTY_NODE;const s=St(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(he,(o,l)=>{i=i.updateImmediateChild(o,l)}),i;if(t){const o=it(n.visibleWrites,e);return t.forEachChild(he,(l,f)=>{const p=Qt(it(o,new re(l)),f);i=i.updateImmediateChild(l,p)}),lo(o).forEach(l=>{i=i.updateImmediateChild(l.name,l.node)}),i}else{const o=it(n.visibleWrites,e);return lo(o).forEach(l=>{i=i.updateImmediateChild(l.name,l.node)}),i}}function $h(n,e,t,i,s){N(i||s,"Either existingEventSnap or existingServerSnap must exist");const o=pe(e,t);if(ps(n.visibleWrites,o))return null;{const l=it(n.visibleWrites,o);return ms(l)?s.getChild(t):Qt(l,s.getChild(t))}}function jh(n,e,t,i){const s=pe(e,t),o=St(n.visibleWrites,s);if(o!=null)return o;if(i.isCompleteForChild(t)){const l=it(n.visibleWrites,s);return Qt(l,i.getNode().getImmediateChild(t))}else return null}function Wh(n,e){return St(n.visibleWrites,e)}function Vh(n,e,t,i,s,o,l){let f;const p=it(n.visibleWrites,e),m=St(p,K());if(m!=null)f=m;else if(t!=null)f=Qt(p,t);else return[];if(f=f.withIndex(l),!f.isEmpty()&&!f.isLeafNode()){const C=[],_=l.getCompare(),w=o?f.getReverseIteratorFrom(i,l):f.getIteratorFrom(i,l);let b=w.getNext();for(;b&&C.length<s;)_(b,i)!==0&&C.push(b),b=w.getNext();return C}else return[]}function zh(){return{visibleWrites:Be.empty(),allWrites:[],lastWriteId:-1}}function ri(n,e,t,i){return xa(n.writeTree,n.treePath,e,t,i)}function qs(n,e){return qh(n.writeTree,n.treePath,e)}function co(n,e,t,i){return $h(n.writeTree,n.treePath,e,t,i)}function oi(n,e){return Wh(n.writeTree,pe(n.treePath,e))}function Gh(n,e,t,i,s,o){return Vh(n.writeTree,n.treePath,e,t,i,s,o)}function $s(n,e,t){return jh(n.writeTree,n.treePath,e,t)}function Na(n,e){return Pa(pe(n.treePath,e),n.writeTree)}function Pa(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Kh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;N(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),N(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const o=s.type;if(t==="child_added"&&o==="child_removed")this.changeMap.set(i,Cn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&o==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&o==="child_changed")this.changeMap.set(i,wn(i,s.oldSnap));else if(t==="child_changed"&&o==="child_added")this.changeMap.set(i,Jt(i,e.snapshotNode));else if(t==="child_changed"&&o==="child_changed")this.changeMap.set(i,Cn(i,e.snapshotNode,s.oldSnap));else throw Xt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Yh{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const La=new Yh;class js{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new bt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $s(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:It(this.viewCache_),o=Gh(this.writes_,s,t,1,i,e);return o.length===0?null:o[0]}}/**
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
 */function Jh(n){return{filter:n}}function Qh(n,e){N(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Xh(n,e,t,i,s){const o=new Kh;let l,f;if(t.type===Me.OVERWRITE){const m=t;m.source.fromUser?l=gs(n,e,m.path,m.snap,i,s,o):(N(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered()&&!V(m.path),l=ai(n,e,m.path,m.snap,i,s,f,o))}else if(t.type===Me.MERGE){const m=t;m.source.fromUser?l=ed(n,e,m.path,m.children,i,s,o):(N(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered(),l=vs(n,e,m.path,m.children,i,s,f,o))}else if(t.type===Me.ACK_USER_WRITE){const m=t;m.revert?l=id(n,e,m.path,i,s,o):l=td(n,e,m.path,m.affectedTree,i,s,o)}else if(t.type===Me.LISTEN_COMPLETE)l=nd(n,e,t.path,i,o);else throw Xt("Unknown operation type: "+t.type);const p=o.getChanges();return Zh(e,l,p),{viewCache:l,changes:p}}function Zh(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=fs(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&t.push(Ea(fs(e)))}}function Ra(n,e,t,i,s,o){const l=e.eventCache;if(oi(i,t)!=null)return e;{let f,p;if(V(t))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=It(e),C=m instanceof H?m:H.EMPTY_NODE,_=qs(i,C);f=n.filter.updateFullNode(e.eventCache.getNode(),_,o)}else{const m=ri(i,It(e));f=n.filter.updateFullNode(e.eventCache.getNode(),m,o)}else{const m=W(t);if(m===".priority"){N(st(t)===1,"Can't have a priority with additional path components");const C=l.getNode();p=e.serverCache.getNode();const _=co(i,t,C,p);_!=null?f=n.filter.updatePriority(C,_):f=l.getNode()}else{const C=oe(t);let _;if(l.isCompleteForChild(m)){p=e.serverCache.getNode();const w=co(i,t,l.getNode(),p);w!=null?_=l.getNode().getImmediateChild(m).updateChild(C,w):_=l.getNode().getImmediateChild(m)}else _=$s(i,m,e.serverCache);_!=null?f=n.filter.updateChild(l.getNode(),m,_,C,s,o):f=l.getNode()}}return dn(e,f,l.isFullyInitialized()||V(t),n.filter.filtersNodes())}}function ai(n,e,t,i,s,o,l,f){const p=e.serverCache;let m;const C=l?n.filter:n.filter.getIndexedFilter();if(V(t))m=C.updateFullNode(p.getNode(),i,null);else if(C.filtersNodes()&&!p.isFiltered()){const b=p.getNode().updateChild(t,i);m=C.updateFullNode(p.getNode(),b,null)}else{const b=W(t);if(!p.isCompleteForPath(t)&&st(t)>1)return e;const v=oe(t),r=p.getNode().getImmediateChild(b).updateChild(v,i);b===".priority"?m=C.updatePriority(p.getNode(),r):m=C.updateChild(p.getNode(),b,r,v,La,null)}const _=Aa(e,m,p.isFullyInitialized()||V(t),C.filtersNodes()),w=new js(s,_,o);return Ra(n,_,t,s,w,f)}function gs(n,e,t,i,s,o,l){const f=e.eventCache;let p,m;const C=new js(s,e,o);if(V(t))m=n.filter.updateFullNode(e.eventCache.getNode(),i,l),p=dn(e,m,!0,n.filter.filtersNodes());else{const _=W(t);if(_===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),i),p=dn(e,m,f.isFullyInitialized(),f.isFiltered());else{const w=oe(t),b=f.getNode().getImmediateChild(_);let v;if(V(w))v=i;else{const c=C.getCompleteChild(_);c!=null?ma(w)===".priority"&&c.getChild(va(w)).isEmpty()?v=c:v=c.updateChild(w,i):v=H.EMPTY_NODE}if(b.equals(v))p=e;else{const c=n.filter.updateChild(f.getNode(),_,v,w,C,l);p=dn(e,c,f.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function uo(n,e){return n.eventCache.isCompleteForChild(e)}function ed(n,e,t,i,s,o,l){let f=e;return i.foreach((p,m)=>{const C=pe(t,p);uo(e,W(C))&&(f=gs(n,f,C,m,s,o,l))}),i.foreach((p,m)=>{const C=pe(t,p);uo(e,W(C))||(f=gs(n,f,C,m,s,o,l))}),f}function ho(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function vs(n,e,t,i,s,o,l,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;V(t)?m=i:m=new le(null).setTree(t,i);const C=e.serverCache.getNode();return m.children.inorderTraversal((_,w)=>{if(C.hasChild(_)){const b=e.serverCache.getNode().getImmediateChild(_),v=ho(n,b,w);p=ai(n,p,new re(_),v,s,o,l,f)}}),m.children.inorderTraversal((_,w)=>{const b=!e.serverCache.isCompleteForChild(_)&&w.value===null;if(!C.hasChild(_)&&!b){const v=e.serverCache.getNode().getImmediateChild(_),c=ho(n,v,w);p=ai(n,p,new re(_),c,s,o,l,f)}}),p}function td(n,e,t,i,s,o,l){if(oi(s,t)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(i.value!=null){if(V(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return ai(n,e,t,p.getNode().getChild(t),s,o,f,l);if(V(t)){let m=new le(null);return p.getNode().forEachChild(jt,(C,_)=>{m=m.set(new re(C),_)}),vs(n,e,t,m,s,o,f,l)}else return e}else{let m=new le(null);return i.foreach((C,_)=>{const w=pe(t,C);p.isCompleteForPath(w)&&(m=m.set(C,p.getNode().getChild(w)))}),vs(n,e,t,m,s,o,f,l)}}function nd(n,e,t,i,s){const o=e.serverCache,l=Aa(e,o.getNode(),o.isFullyInitialized()||V(t),o.isFiltered());return Ra(n,l,t,i,La,s)}function id(n,e,t,i,s,o){let l;if(oi(i,t)!=null)return e;{const f=new js(i,e,s),p=e.eventCache.getNode();let m;if(V(t)||W(t)===".priority"){let C;if(e.serverCache.isFullyInitialized())C=ri(i,It(e));else{const _=e.serverCache.getNode();N(_ instanceof H,"serverChildren would be complete if leaf node"),C=qs(i,_)}C=C,m=n.filter.updateFullNode(p,C,o)}else{const C=W(t);let _=$s(i,C,e.serverCache);_==null&&e.serverCache.isCompleteForChild(C)&&(_=p.getImmediateChild(C)),_!=null?m=n.filter.updateChild(p,C,_,oe(t),f,o):e.eventCache.getNode().hasChild(C)?m=n.filter.updateChild(p,C,H.EMPTY_NODE,oe(t),f,o):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(l=ri(i,It(e)),l.isLeafNode()&&(m=n.filter.updateFullNode(m,l,o)))}return l=e.serverCache.isFullyInitialized()||oi(i,K())!=null,dn(e,m,l,n.filter.filtersNodes())}}/**
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
 */class sd{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Ms(i.getIndex()),o=Ih(i);this.processor_=Jh(o);const l=t.serverCache,f=t.eventCache,p=s.updateFullNode(H.EMPTY_NODE,l.getNode(),null),m=o.updateFullNode(H.EMPTY_NODE,f.getNode(),null),C=new bt(p,l.isFullyInitialized(),s.filtersNodes()),_=new bt(m,f.isFullyInitialized(),o.filtersNodes());this.viewCache_=_i(_,C),this.eventGenerator_=new xh(this.query_)}get query(){return this.query_}}function rd(n){return n.viewCache_.serverCache.getNode()}function od(n,e){const t=It(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!V(e)&&!t.getImmediateChild(W(e)).isEmpty())?t.getChild(e):null}function fo(n){return n.eventRegistrations_.length===0}function ad(n,e){n.eventRegistrations_.push(e)}function po(n,e,t){const i=[];if(t){N(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(o=>{const l=o.createCancelEvent(t,s);l&&i.push(l)})}if(e){let s=[];for(let o=0;o<n.eventRegistrations_.length;++o){const l=n.eventRegistrations_[o];if(!l.matches(e))s.push(l);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(o+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function mo(n,e,t,i){e.type===Me.MERGE&&e.source.queryId!==null&&(N(It(n.viewCache_),"We should always have a full cache before handling merges"),N(fs(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,o=Xh(n.processor_,s,e,t,i);return Qh(n.processor_,o.viewCache),N(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=o.viewCache,Da(n,o.changes,o.viewCache.eventCache.getNode(),null)}function ld(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(he,(o,l)=>{i.push(Jt(o,l))}),t.isFullyInitialized()&&i.push(Ea(t.getNode())),Da(n,i,t.getNode(),e)}function Da(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Nh(n.eventGenerator_,e,t,s)}/**
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
 */let li;class cd{constructor(){this.views=new Map}}function ud(n){N(!li,"__referenceConstructor has already been defined"),li=n}function hd(){return N(li,"Reference.ts has not been loaded"),li}function dd(n){return n.views.size===0}function Ws(n,e,t,i){const s=e.source.queryId;if(s!==null){const o=n.views.get(s);return N(o!=null,"SyncTree gave us an op for an invalid query."),mo(o,e,t,i)}else{let o=[];for(const l of n.views.values())o=o.concat(mo(l,e,t,i));return o}}function fd(n,e,t,i,s){const o=e._queryIdentifier,l=n.views.get(o);if(!l){let f=ri(t,s?i:null),p=!1;f?p=!0:i instanceof H?(f=qs(t,i),p=!1):(f=H.EMPTY_NODE,p=!1);const m=_i(new bt(f,p,!1),new bt(i,s,!1));return new sd(e,m)}return l}function pd(n,e,t,i,s,o){const l=fd(n,e,i,s,o);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,l),ad(l,t),ld(l,t)}function md(n,e,t,i){const s=e._queryIdentifier,o=[];let l=[];const f=rt(n);if(s==="default")for(const[p,m]of n.views.entries())l=l.concat(po(m,t,i)),fo(m)&&(n.views.delete(p),m.query._queryParams.loadsAllData()||o.push(m.query));else{const p=n.views.get(s);p&&(l=l.concat(po(p,t,i)),fo(p)&&(n.views.delete(s),p.query._queryParams.loadsAllData()||o.push(p.query)))}return f&&!rt(n)&&o.push(new(hd())(e._repo,e._path)),{removed:o,events:l}}function Ma(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Wt(n,e){let t=null;for(const i of n.views.values())t=t||od(i,e);return t}function Ba(n,e){if(e._queryParams.loadsAllData())return yi(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Fa(n,e){return Ba(n,e)!=null}function rt(n){return yi(n)!=null}function yi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ci;function gd(n){N(!ci,"__referenceConstructor has already been defined"),ci=n}function vd(){return N(ci,"Reference.ts has not been loaded"),ci}let _d=1;class go{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=zh(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yd(n,e,t,i,s){return Dh(n.pendingWriteTree_,e,t,i,s),s?Pn(n,new Ct(Ta(),e,t)):[]}function Ht(n,e,t=!1){const i=Mh(n.pendingWriteTree_,e);if(Bh(n.pendingWriteTree_,e)){let o=new le(null);return i.snap!=null?o=o.set(K(),!0):Ee(i.children,l=>{o=o.set(new re(l),!0)}),Pn(n,new si(i.path,o,t))}else return[]}function wi(n,e,t){return Pn(n,new Ct(Fs(),e,t))}function wd(n,e,t){const i=le.fromObject(t);return Pn(n,new En(Fs(),e,i))}function Cd(n,e){return Pn(n,new In(Fs(),e))}function bd(n,e,t){const i=Vs(n,t);if(i){const s=zs(i),o=s.path,l=s.queryId,f=be(o,e),p=new In(Us(l),f);return Gs(n,o,p)}else return[]}function _s(n,e,t,i,s=!1){const o=e._path,l=n.syncPointTree_.get(o);let f=[];if(l&&(e._queryIdentifier==="default"||Fa(l,e))){const p=md(l,e,t,i);dd(l)&&(n.syncPointTree_=n.syncPointTree_.remove(o));const m=p.removed;if(f=p.events,!s){const C=m.findIndex(w=>w._queryParams.loadsAllData())!==-1,_=n.syncPointTree_.findOnPath(o,(w,b)=>rt(b));if(C&&!_){const w=n.syncPointTree_.subtree(o);if(!w.isEmpty()){const b=Sd(w);for(let v=0;v<b.length;++v){const c=b[v],r=c.query,a=$a(n,c);n.listenProvider_.startListening(pn(r),ui(n,r),a.hashFn,a.onComplete)}}}!_&&m.length>0&&!i&&(C?n.listenProvider_.stopListening(pn(e),null):m.forEach(w=>{const b=n.queryToTagMap.get(Ci(w));n.listenProvider_.stopListening(pn(w),b)}))}Td(n,m)}return f}function Id(n,e,t,i){const s=Vs(n,i);if(s!=null){const o=zs(s),l=o.path,f=o.queryId,p=be(l,e),m=new Ct(Us(f),p,t);return Gs(n,l,m)}else return[]}function Ed(n,e,t,i){const s=Vs(n,i);if(s){const o=zs(s),l=o.path,f=o.queryId,p=be(l,e),m=le.fromObject(t),C=new En(Us(f),p,m);return Gs(n,l,C)}else return[]}function vo(n,e,t,i=!1){const s=e._path;let o=null,l=!1;n.syncPointTree_.foreachOnPath(s,(w,b)=>{const v=be(w,s);o=o||Wt(b,v),l=l||rt(b)});let f=n.syncPointTree_.get(s);f?(l=l||rt(f),o=o||Wt(f,K())):(f=new cd,n.syncPointTree_=n.syncPointTree_.set(s,f));let p;o!=null?p=!0:(p=!1,o=H.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((b,v)=>{const c=Wt(v,K());c&&(o=o.updateImmediateChild(b,c))}));const m=Fa(f,e);if(!m&&!e._queryParams.loadsAllData()){const w=Ci(e);N(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const b=Ad();n.queryToTagMap.set(w,b),n.tagToQueryMap.set(b,w)}const C=Hs(n.pendingWriteTree_,s);let _=pd(f,e,t,C,o,p);if(!m&&!l&&!i){const w=Ba(f,e);_=_.concat(Od(n,e,w))}return _}function Ua(n,e,t){const s=n.pendingWriteTree_,o=n.syncPointTree_.findOnPath(e,(l,f)=>{const p=be(l,e),m=Wt(f,p);if(m)return m});return xa(s,e,o,t,!0)}function Pn(n,e){return Ha(e,n.syncPointTree_,null,Hs(n.pendingWriteTree_,K()))}function Ha(n,e,t,i){if(V(n.path))return qa(n,e,t,i);{const s=e.get(K());t==null&&s!=null&&(t=Wt(s,K()));let o=[];const l=W(n.path),f=n.operationForChild(l),p=e.children.get(l);if(p&&f){const m=t?t.getImmediateChild(l):null,C=Na(i,l);o=o.concat(Ha(f,p,m,C))}return s&&(o=o.concat(Ws(s,n,i,t))),o}}function qa(n,e,t,i){const s=e.get(K());t==null&&s!=null&&(t=Wt(s,K()));let o=[];return e.children.inorderTraversal((l,f)=>{const p=t?t.getImmediateChild(l):null,m=Na(i,l),C=n.operationForChild(l);C&&(o=o.concat(qa(C,f,p,m)))}),s&&(o=o.concat(Ws(s,n,i,t))),o}function $a(n,e){const t=e.query,i=ui(n,t);return{hashFn:()=>(rd(e)||H.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?bd(n,t._path,i):Cd(n,t._path);{const o=bu(s,t);return _s(n,t,null,o)}}}}function ui(n,e){const t=Ci(e);return n.queryToTagMap.get(t)}function Ci(n){return n._path.toString()+"$"+n._queryIdentifier}function Vs(n,e){return n.tagToQueryMap.get(e)}function zs(n){const e=n.indexOf("$");return N(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new re(n.substr(0,e))}}function Gs(n,e,t){const i=n.syncPointTree_.get(e);N(i,"Missing sync point for query tag that we're tracking");const s=Hs(n.pendingWriteTree_,e);return Ws(i,t,s,null)}function Sd(n){return n.fold((e,t,i)=>{if(t&&rt(t))return[yi(t)];{let s=[];return t&&(s=Ma(t)),Ee(i,(o,l)=>{s=s.concat(l)}),s}})}function pn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(vd())(n._repo,n._path):n}function Td(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Ci(i),o=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(o)}}}function Ad(){return _d++}function Od(n,e,t){const i=e._path,s=ui(n,e),o=$a(n,t),l=n.listenProvider_.startListening(pn(e),s,o.hashFn,o.onComplete),f=n.syncPointTree_.subtree(i);if(s)N(!rt(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((m,C,_)=>{if(!V(m)&&C&&rt(C))return[yi(C).query];{let w=[];return C&&(w=w.concat(Ma(C).map(b=>b.query))),Ee(_,(b,v)=>{w=w.concat(v)}),w}});for(let m=0;m<p.length;++m){const C=p[m];n.listenProvider_.stopListening(pn(C),ui(n,C))}}return l}/**
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
 */class Ks{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ks(t)}node(){return this.node_}}class Ys{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=pe(this.path_,e);return new Ys(this.syncTree_,t)}node(){return Ua(this.syncTree_,this.path_)}}const kd=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},_o=function(n,e,t){if(!n||typeof n!="object")return n;if(N(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return xd(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Nd(n[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},xd=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:N(!1,"Unexpected server value: "+n)}},Nd=function(n,e,t){n.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&N(!1,"Unexpected increment value: "+i);const s=e.node();if(N(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const l=s.getValue();return typeof l!="number"?i:l+i},Pd=function(n,e,t,i){return Js(e,new Ys(t,n),i)},Ld=function(n,e,t){return Js(n,new Ks(e),t)};function Js(n,e,t){const i=n.getPriority().val(),s=_o(i,e.getImmediateChild(".priority"),t);let o;if(n.isLeafNode()){const l=n,f=_o(l.getValue(),e,t);return f!==l.getValue()||s!==l.getPriority().val()?new me(f,we(s)):n}else{const l=n;return o=l,s!==l.getPriority().val()&&(o=o.updatePriority(new me(s))),l.forEachChild(he,(f,p)=>{const m=Js(p,e.getImmediateChild(f),t);m!==p&&(o=o.updateImmediateChild(f,m))}),o}}/**
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
 */class Qs{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Xs(n,e){let t=e instanceof re?e:new re(e),i=n,s=W(t);for(;s!==null;){const o=Gt(i.node.children,s)||{children:{},childCount:0};i=new Qs(s,i,o),t=oe(t),s=W(t)}return i}function en(n){return n.node.value}function ja(n,e){n.node.value=e,ys(n)}function Wa(n){return n.node.childCount>0}function Rd(n){return en(n)===void 0&&!Wa(n)}function bi(n,e){Ee(n.node.children,(t,i)=>{e(new Qs(t,n,i))})}function Va(n,e,t,i){t&&!i&&e(n),bi(n,s=>{Va(s,e,!0,i)}),t&&i&&e(n)}function Dd(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ln(n){return new re(n.parent===null?n.name:Ln(n.parent)+"/"+n.name)}function ys(n){n.parent!==null&&Md(n.parent,n.name,n)}function Md(n,e,t){const i=Rd(t),s=Ke(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ys(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ys(n))}/**
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
 */const Bd=/[\[\].#$\/\u0000-\u001F\u007F]/,Fd=/[\[\].#$\u0000-\u001F\u007F]/,Xi=10*1024*1024,za=function(n){return typeof n=="string"&&n.length!==0&&!Bd.test(n)},Ga=function(n){return typeof n=="string"&&n.length!==0&&!Fd.test(n)},Ud=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ga(n)},Ka=function(n,e,t){const i=t instanceof re?new th(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+pt(i));if(typeof e=="function")throw new Error(n+"contains a function "+pt(i)+" with contents = "+e.toString());if(Ko(e))throw new Error(n+"contains "+e.toString()+" "+pt(i));if(typeof e=="string"&&e.length>Xi/3&&mi(e)>Xi)throw new Error(n+"contains a string greater than "+Xi+" utf8 bytes "+pt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,o=!1;if(Ee(e,(l,f)=>{if(l===".value")s=!0;else if(l!==".priority"&&l!==".sv"&&(o=!0,!za(l)))throw new Error(n+" contains an invalid key ("+l+") "+pt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nh(i,l),Ka(n,f,i),ih(i)}),s&&o)throw new Error(n+' contains ".value" child '+pt(i)+" in addition to actual children.")}},Ya=function(n,e,t,i){if(!(i&&t===void 0)&&!Ga(t))throw new Error(Uo(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Hd=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ya(n,e,t,i)},qd=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!za(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Ud(t))throw new Error(Uo(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class $d{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ja(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],o=s.getPath();t!==null&&!Ls(o,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:o}),t.events.push(s)}t&&n.eventLists_.push(t)}function Qa(n,e,t){Ja(n,t),Xa(n,i=>Ls(i,e))}function Tt(n,e,t){Ja(n,t),Xa(n,i=>De(i,e)||De(e,i))}function Xa(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const o=s.path;e(o)?(jd(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function jd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();vt&&ye("event: "+t.toString()),xn(i)}}}/**
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
 */const Wd="repo_interrupt",Vd=25;class zd{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $d,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ii(),this.transactionQueueTree_=new Qs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Gd(n,e,t){if(n.stats_=Ns(n.repoInfo_),n.forceRestClient_||Tu())n.server_=new ni(n.repoInfo_,(i,s,o,l)=>{yo(n,i,s,o,l)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>wo(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new ze(n.repoInfo_,e,(i,s,o,l)=>{yo(n,i,s,o,l)},i=>{wo(n,i)},i=>{Yd(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Nu(n.repoInfo_,()=>new kh(n.stats_,n.server_)),n.infoData_=new Eh,n.infoSyncTree_=new go({startListening:(i,s,o,l)=>{let f=[];const p=n.infoData_.getNode(i._path);return p.isEmpty()||(f=wi(n.infoSyncTree_,i._path,p),setTimeout(()=>{l("ok")},0)),f},stopListening:()=>{}}),Zs(n,"connected",!1),n.serverSyncTree_=new go({startListening:(i,s,o,l)=>(n.server_.listen(i,o,s,(f,p)=>{const m=l(f,p);Tt(n.eventQueue_,i._path,m)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Kd(n){const t=n.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Za(n){return kd({timestamp:Kd(n)})}function yo(n,e,t,i,s){n.dataUpdateCount++;const o=new re(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let l=[];if(s)if(i){const p=Qn(t,m=>we(m));l=Ed(n.serverSyncTree_,o,p,s)}else{const p=we(t);l=Id(n.serverSyncTree_,o,p,s)}else if(i){const p=Qn(t,m=>we(m));l=wd(n.serverSyncTree_,o,p)}else{const p=we(t);l=wi(n.serverSyncTree_,o,p)}let f=o;l.length>0&&(f=tr(n,o)),Tt(n.eventQueue_,f,l)}function wo(n,e){Zs(n,"connected",e),e===!1&&Qd(n)}function Yd(n,e){Ee(e,(t,i)=>{Zs(n,t,i)})}function Zs(n,e,t){const i=new re("/.info/"+e),s=we(t);n.infoData_.updateSnapshot(i,s);const o=wi(n.infoSyncTree_,i,s);Tt(n.eventQueue_,i,o)}function Jd(n){return n.nextWriteId_++}function Qd(n){el(n,"onDisconnectEvents");const e=Za(n),t=ii();ds(n.onDisconnect_,K(),(s,o)=>{const l=Pd(s,o,n.serverSyncTree_,e);Sa(t,s,l)});let i=[];ds(t,K(),(s,o)=>{i=i.concat(wi(n.serverSyncTree_,s,o));const l=nf(n,s);tr(n,l)}),n.onDisconnect_=ii(),Tt(n.eventQueue_,K(),i)}function Xd(n,e,t){let i;W(e._path)===".info"?i=vo(n.infoSyncTree_,e,t):i=vo(n.serverSyncTree_,e,t),Qa(n.eventQueue_,e._path,i)}function Co(n,e,t){let i;W(e._path)===".info"?i=_s(n.infoSyncTree_,e,t):i=_s(n.serverSyncTree_,e,t),Qa(n.eventQueue_,e._path,i)}function Zd(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Wd)}function el(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ye(t,...e)}function tl(n,e,t){return Ua(n.serverSyncTree_,e,t)||H.EMPTY_NODE}function er(n,e=n.transactionQueueTree_){if(e||Ii(n,e),en(e)){const t=il(n,e);N(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&ef(n,Ln(e),t)}else Wa(e)&&bi(e,t=>{er(n,t)})}function ef(n,e,t){const i=t.map(m=>m.currentWriteId),s=tl(n,e,i);let o=s;const l=s.hash();for(let m=0;m<t.length;m++){const C=t[m];N(C.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),C.status=1,C.retryCount++;const _=be(e,C.path);o=o.updateChild(_,C.currentOutputSnapshotRaw)}const f=o.val(!0),p=e;n.server_.put(p.toString(),f,m=>{el(n,"transaction put response",{path:p.toString(),status:m});let C=[];if(m==="ok"){const _=[];for(let w=0;w<t.length;w++)t[w].status=2,C=C.concat(Ht(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&_.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();Ii(n,Xs(n.transactionQueueTree_,e)),er(n,n.transactionQueueTree_),Tt(n.eventQueue_,e,C);for(let w=0;w<_.length;w++)xn(_[w])}else{if(m==="datastale")for(let _=0;_<t.length;_++)t[_].status===3?t[_].status=4:t[_].status=0;else{Te("transaction at "+p.toString()+" failed: "+m);for(let _=0;_<t.length;_++)t[_].status=4,t[_].abortReason=m}tr(n,e)}},l)}function tr(n,e){const t=nl(n,e),i=Ln(t),s=il(n,t);return tf(n,s,i),i}function tf(n,e,t){if(e.length===0)return;const i=[];let s=[];const l=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],m=be(t,p.path);let C=!1,_;if(N(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)C=!0,_=p.abortReason,s=s.concat(Ht(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=Vd)C=!0,_="maxretry",s=s.concat(Ht(n.serverSyncTree_,p.currentWriteId,!0));else{const w=tl(n,p.path,l);p.currentInputSnapshot=w;const b=e[f].update(w.val());if(b!==void 0){Ka("transaction failed: Data returned ",b,p.path);let v=we(b);typeof b=="object"&&b!=null&&Ke(b,".priority")||(v=v.updatePriority(w.getPriority()));const r=p.currentWriteId,a=Za(n),u=Ld(v,w,a);p.currentOutputSnapshotRaw=v,p.currentOutputSnapshotResolved=u,p.currentWriteId=Jd(n),l.splice(l.indexOf(r),1),s=s.concat(yd(n.serverSyncTree_,p.path,u,p.currentWriteId,p.applyLocally)),s=s.concat(Ht(n.serverSyncTree_,r,!0))}else C=!0,_="nodata",s=s.concat(Ht(n.serverSyncTree_,p.currentWriteId,!0))}Tt(n.eventQueue_,t,s),s=[],C&&(e[f].status=2,function(w){setTimeout(w,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(_==="nodata"?i.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):i.push(()=>e[f].onComplete(new Error(_),!1,null))))}Ii(n,n.transactionQueueTree_);for(let f=0;f<i.length;f++)xn(i[f]);er(n,n.transactionQueueTree_)}function nl(n,e){let t,i=n.transactionQueueTree_;for(t=W(e);t!==null&&en(i)===void 0;)i=Xs(i,t),e=oe(e),t=W(e);return i}function il(n,e){const t=[];return sl(n,e,t),t.sort((i,s)=>i.order-s.order),t}function sl(n,e,t){const i=en(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);bi(e,s=>{sl(n,s,t)})}function Ii(n,e){const t=en(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,ja(e,t.length>0?t:void 0)}bi(e,i=>{Ii(n,i)})}function nf(n,e){const t=Ln(nl(n,e)),i=Xs(n.transactionQueueTree_,e);return Dd(i,s=>{Zi(n,s)}),Zi(n,i),Va(i,s=>{Zi(n,s)}),t}function Zi(n,e){const t=en(e);if(t){const i=[];let s=[],o=-1;for(let l=0;l<t.length;l++)t[l].status===3||(t[l].status===1?(N(o===l-1,"All SENT items should be at beginning of queue."),o=l,t[l].status=3,t[l].abortReason="set"):(N(t[l].status===0,"Unexpected transaction status in abort"),t[l].unwatcher(),s=s.concat(Ht(n.serverSyncTree_,t[l].currentWriteId,!0)),t[l].onComplete&&i.push(t[l].onComplete.bind(null,new Error("set"),!1,null))));o===-1?ja(e,void 0):t.length=o+1,Tt(n.eventQueue_,Ln(e),s);for(let l=0;l<i.length;l++)xn(i[l])}}/**
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
 */function sf(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function rf(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Te(`Invalid query segment '${t}' in query '${n}'`)}return e}const bo=function(n,e){const t=of(n),i=t.namespace;t.domain==="firebase.com"&&Ge(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ge("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||vu();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new oa(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new re(t.pathString)}},of=function(n){let e="",t="",i="",s="",o="",l=!0,f="https",p=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(f=n.substring(0,m-1),n=n.substring(m+2));let C=n.indexOf("/");C===-1&&(C=n.length);let _=n.indexOf("?");_===-1&&(_=n.length),e=n.substring(0,Math.min(C,_)),C<_&&(s=sf(n.substring(C,_)));const w=rf(n.substring(Math.min(n.length,_)));m=e.indexOf(":"),m>=0?(l=f==="https"||f==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const b=e.slice(0,m);if(b.toLowerCase()==="localhost")t="localhost";else if(b.split(".").length<=2)t=b;else{const v=e.indexOf(".");i=e.substring(0,v).toLowerCase(),t=e.substring(v+1),o=i}"ns"in w&&(o=w.ns)}return{host:e,port:p,domain:t,subdomain:i,secure:l,scheme:f,pathString:s,namespace:o}};/**
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
 */class rl{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class ol{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class af{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class nr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return V(this._path)?null:ma(this._path)}get ref(){return new Ye(this._repo,this._path)}get _queryIdentifier(){const e=so(this._queryParams),t=ks(e);return t==="{}"?"default":t}get _queryObject(){return so(this._queryParams)}isEqual(e){if(e=ot(e),!(e instanceof nr))return!1;const t=this._repo===e._repo,i=Ls(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+eh(this._path)}}class Ye extends nr{constructor(e,t){super(e,t,new Bs,!1)}get parent(){const e=va(this._path);return e===null?null:new Ye(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Sn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new re(e),i=hi(this.ref,e);return new Sn(this._node.getChild(t),i,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Sn(s,hi(this.ref,i),he)))}hasChild(e){const t=new re(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function lf(n,e){return n=ot(n),n._checkNotDeleted("ref"),e!==void 0?hi(n._root,e):n._root}function hi(n,e){return n=ot(n),W(n._path)===null?Hd("child","path",e,!1):Ya("child","path",e,!1),new Ye(n._repo,pe(n._path,e))}class ir{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new rl("value",this,new Sn(e.snapshotNode,new Ye(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ol(this,e,t):null}matches(e){return e instanceof ir?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class sr{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ol(this,e,t):null}createEvent(e,t){N(e.childName!=null,"Child events should have a childName.");const i=hi(new Ye(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new rl(e.type,this,new Sn(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof sr?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function cf(n,e,t,i,s){let o;if(typeof i=="object"&&(o=void 0,s=i),typeof i=="function"&&(o=i),s&&s.onlyOnce){const p=t,m=(C,_)=>{Co(n._repo,n,f),p(C,_)};m.userCallback=t.userCallback,m.context=t.context,t=m}const l=new af(t,o||void 0),f=e==="value"?new ir(l):new sr(e,l);return Xd(n._repo,n,f),()=>Co(n._repo,n,f)}function uf(n,e,t,i){return cf(n,"value",e,t,i)}ud(Ye);gd(Ye);/**
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
 */const hf="FIREBASE_DATABASE_EMULATOR_HOST",ws={};let df=!1;function ff(n,e,t,i){n.repoInfo_=new oa(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function pf(n,e,t,i,s){let o=i||n.options.databaseURL;o===void 0&&(n.options.projectId||Ge("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ye("Using default host for project ",n.options.projectId),o=`${n.options.projectId}-default-rtdb.firebaseio.com`);let l=bo(o,s),f=l.repoInfo,p,m;typeof process<"u"&&process.env&&(m=process.env[hf]),m?(p=!0,o=`http://${m}?ns=${f.namespace}`,l=bo(o,s),f=l.repoInfo):p=!l.repoInfo.secure;const C=s&&p?new $t($t.OWNER):new Ou(n.name,n.options,e);qd("Invalid Firebase Database URL",l),V(l.path)||Ge("Database URL must point to the root of a Firebase Database (not including a child path).");const _=gf(f,n,C,new Au(n.name,t));return new vf(_,n)}function mf(n,e){const t=ws[e];(!t||t[n.key]!==n)&&Ge(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Zd(n),delete t[n.key]}function gf(n,e,t,i){let s=ws[e.name];s||(s={},ws[e.name]=s);let o=s[n.toURLString()];return o&&Ge("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new zd(n,df,t,i),s[n.toURLString()]=o,o}class vf{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Gd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ye(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mf(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ge("Cannot call "+e+" on a deleted database.")}}function _f(n=eu(),e){const t=Qc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=ql("database");i&&yf(t,...i)}return t}function yf(n,e,t,i={}){n=ot(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Ge("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let o;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ge('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new $t($t.OWNER);else if(i.mockUserToken){const l=typeof i.mockUserToken=="string"?i.mockUserToken:jl(i.mockUserToken,n.app.options.projectId);o=new $t(l)}ff(s,e,t,o)}/**
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
 */function wf(n){du(gi),Kt(new _t("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return pf(i,s,o,t)},"PUBLIC").setMultipleInstances(!0)),nt(qr,$r,n),nt(qr,$r,"esm2017")}ze.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ze.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};wf();function al(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function ll(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cf=ll,cl=new An("auth","Firebase",ll());/**
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
 */const di=new As("@firebase/auth");function bf(n,...e){di.logLevel<=ne.WARN&&di.warn(`Auth (${gi}): ${n}`,...e)}function Kn(n,...e){di.logLevel<=ne.ERROR&&di.error(`Auth (${gi}): ${n}`,...e)}/**
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
 */function Io(n,...e){throw rr(n,...e)}function ul(n,...e){return rr(n,...e)}function If(n,e,t){const i=Object.assign(Object.assign({},Cf()),{[e]:t});return new An("auth","Firebase",i).create(e,{appName:n.name})}function rr(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return cl.create(n,...e)}function Z(n,e,...t){if(!n)throw rr(e,...t)}function mn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Kn(e),new Error(e)}function fi(n,e){n||mn(e)}function Ef(){return Eo()==="http:"||Eo()==="https:"}function Eo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Sf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ef()||Wl()||"connection"in navigator)?navigator.onLine:!0}function Tf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Rn{constructor(e,t){this.shortDelay=e,this.longDelay=t,fi(t>e,"Short delay should be less than long delay!"),this.isMobile=Ss()||Mo()}get(){return Sf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Af(n,e){fi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class hl{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Of={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kf=new Rn(3e4,6e4);function dl(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ei(n,e,t,i,s={}){return fl(n,s,async()=>{let o={},l={};i&&(e==="GET"?l=i:o={body:JSON.stringify(i)});const f=Ts(Object.assign({key:n.config.apiKey},l)).slice(1),p=await n._getAdditionalHeaders();return p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode),hl.fetch()(pl(n,n.config.apiHost,t,f),Object.assign({method:e,headers:p,referrerPolicy:"no-referrer"},o))})}async function fl(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Of),e);try{const s=new xf(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw Gn(n,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const f=o.ok?l.errorMessage:l.error.message,[p,m]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gn(n,"credential-already-in-use",l);if(p==="EMAIL_EXISTS")throw Gn(n,"email-already-in-use",l);if(p==="USER_DISABLED")throw Gn(n,"user-disabled",l);const C=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw If(n,C,m);Io(n,C)}}catch(s){if(s instanceof Et)throw s;Io(n,"network-request-failed",{message:String(s)})}}function pl(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Af(n.config,s):`${n.config.apiScheme}://${s}`}class xf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ul(this.auth,"network-request-failed")),kf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=ul(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */async function Nf(n,e){return Ei(n,"POST","/v1/accounts:delete",e)}async function Pf(n,e){return Ei(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function gn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lf(n,e=!1){const t=ot(n),i=await t.getIdToken(e),s=ml(i);Z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:gn(es(s.auth_time)),issuedAtTime:gn(es(s.iat)),expirationTime:gn(es(s.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function es(n){return Number(n)*1e3}function ml(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Kn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Jn(t);return s?JSON.parse(s):(Kn("Failed to decode base64 JWT payload"),null)}catch(s){return Kn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Rf(n){const e=ml(n);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Cs(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Et&&Df(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Df({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Mf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gn(this.lastLoginAt),this.creationTime=gn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pi(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Cs(n,Pf(t,{idToken:i}));Z(s==null?void 0:s.users.length,t,"internal-error");const o=s.users[0];n._notifyReloadListener(o);const l=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Uf(o.providerUserInfo):[],f=Ff(n.providerData,l),p=n.isAnonymous,m=!(n.email&&o.passwordHash)&&!(f!=null&&f.length),C=p?m:!1,_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new gl(o.createdAt,o.lastLoginAt),isAnonymous:C};Object.assign(n,_)}async function Bf(n){const e=ot(n);await pi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ff(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Uf(n){return n.map(e=>{var{providerId:t}=e,i=al(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Hf(n,e){const t=await fl(n,{},async()=>{const i=Ts({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,l=pl(n,s,"/v1/token",`key=${o}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",hl.fetch()(l,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qf(n,e){return Ei(n,"POST","/v2/accounts:revokeToken",dl(n,e))}/**
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
 */class Tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:o}=await Hf(e,t);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:o}=t,l=new Tn;return i&&(Z(typeof i=="string","internal-error",{appName:e}),l.refreshToken=i),s&&(Z(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),o&&(Z(typeof o=="number","internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tn,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function Ze(n,e){Z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Vt{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,o=al(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new gl(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Cs(this,this.stsTokenManager.getToken(this.auth,e));return Z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Lf(this,e)}reload(){return Bf(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await pi(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Cs(this,Nf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,o,l,f,p,m,C;const _=(i=t.displayName)!==null&&i!==void 0?i:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,b=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,v=(l=t.photoURL)!==null&&l!==void 0?l:void 0,c=(f=t.tenantId)!==null&&f!==void 0?f:void 0,r=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,a=(m=t.createdAt)!==null&&m!==void 0?m:void 0,u=(C=t.lastLoginAt)!==null&&C!==void 0?C:void 0,{uid:h,emailVerified:d,isAnonymous:g,providerData:y,stsTokenManager:S}=t;Z(h&&S,e,"internal-error");const x=Tn.fromJSON(this.name,S);Z(typeof h=="string",e,"internal-error"),Ze(_,e.name),Ze(w,e.name),Z(typeof d=="boolean",e,"internal-error"),Z(typeof g=="boolean",e,"internal-error"),Ze(b,e.name),Ze(v,e.name),Ze(c,e.name),Ze(r,e.name),Ze(a,e.name),Ze(u,e.name);const A=new Vt({uid:h,auth:e,email:w,emailVerified:d,displayName:_,isAnonymous:g,photoURL:v,phoneNumber:b,tenantId:c,stsTokenManager:x,createdAt:a,lastLoginAt:u});return y&&Array.isArray(y)&&(A.providerData=y.map(M=>Object.assign({},M))),r&&(A._redirectEventId=r),A}static async _fromIdTokenResponse(e,t,i=!1){const s=new Tn;s.updateFromServerResponse(t);const o=new Vt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await pi(o),o}}/**
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
 */const So=new Map;function gt(n){fi(n instanceof Function,"Expected a class definition");let e=So.get(n);return e?(fi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,So.set(n,e),e)}/**
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
 */class vl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}vl.type="NONE";const To=vl;/**
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
 */function ts(n,e,t){return`firebase:${n}:${e}:${t}`}class zt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=ts(this.userKey,s.apiKey,o),this.fullPersistenceKey=ts("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new zt(gt(To),e,i);const s=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let o=s[0]||gt(To);const l=ts(i,e.config.apiKey,e.name);let f=null;for(const m of t)try{const C=await m._get(l);if(C){const _=Vt._fromJSON(e,C);m!==o&&(f=_),o=m;break}}catch{}const p=s.filter(m=>m._shouldAllowMigration);return!o._shouldAllowMigration||!p.length?new zt(o,e,i):(o=p[0],f&&await o._set(l,f.toJSON()),await Promise.all(t.map(async m=>{if(m!==o)try{await m._remove(l)}catch{}})),new zt(o,e,i))}}/**
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
 */function Ao(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($f(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gf(e))return"Blackberry";if(Kf(e))return"Webos";if(jf(e))return"Safari";if((e.includes("chrome/")||Wf(e))&&!e.includes("edge/"))return"Chrome";if(zf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function $f(n=$e()){return/firefox\//i.test(n)}function jf(n=$e()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wf(n=$e()){return/crios\//i.test(n)}function Vf(n=$e()){return/iemobile/i.test(n)}function zf(n=$e()){return/android/i.test(n)}function Gf(n=$e()){return/blackberry/i.test(n)}function Kf(n=$e()){return/webos/i.test(n)}/**
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
 */function _l(n,e=[]){let t;switch(n){case"Browser":t=Ao($e());break;case"Worker":t=`${Ao($e())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${gi}/${i}`}/**
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
 */class Yf{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=o=>new Promise((l,f)=>{try{const p=e(o);l(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Jf(n,e={}){return Ei(n,"GET","/v2/passwordPolicy",dl(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Qf=6;class Xf{constructor(e){var t,i,s,o;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=l.minPasswordLength)!==null&&t!==void 0?t:Qf,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,o,l,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(s=p.containsLowercaseLetter)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsUppercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsNumericCharacter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class Zf{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oo(this),this.idTokenSubscription=new Oo(this),this.beforeStateQueue=new Yf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gt(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await zt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!l||l===f)&&(p!=null&&p.user)&&(s=p.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await pi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ot(e):null;return t&&Z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jf(this),t=new Xf(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new An("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await qf(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gt(e)||this._popupRedirectResolver;Z(t,this,"argument-error"),this.redirectPersistenceManager=await zt.create(this,[gt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let l=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(f,this,"internal-error"),f.then(()=>{l||o(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,s);return()=>{l=!0,p()}}else{const p=e.addObserver(t);return()=>{l=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_l(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&bf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ep(n){return ot(n)}class Oo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zl(t=>this.observer=t)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function tp(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(gt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}new Rn(3e4,6e4);/**
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
 */new Rn(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
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
 */new Rn(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
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
 */new Rn(5e3,15e3);var ko="@firebase/auth",xo="1.5.1";/**
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
 */class np{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ip(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sp(n){Kt(new _t("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:l,authDomain:f}=i.options;Z(l&&!l.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:l,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_l(n)},m=new Zf(i,s,o,p);return tp(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Kt(new _t("auth-internal",e=>{const t=ep(e.getProvider("auth").getImmediate());return(i=>new np(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(ko,xo,ip(n)),nt(ko,xo,"esm2017")}/**
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
 */const rp=5*60;$l("authIdTokenMaxAge");sp("Browser");const op={apiKey:"AIzaSyCEg1CTlYi7p0aelJQkSHl5tYOYxiqS7dM",authDomain:"ma-shopify-apps.firebaseapp.com",databaseURL:"https://ma-shopify-apps-default-rtdb.firebaseio.com",projectId:"ma-shopify-apps",storageBucket:"ma-shopify-apps.appspot.com",messagingSenderId:"229141588998",appId:"1:229141588998:web:c9c646ce1067d5c964e787",measurementId:"G-0H5VZ3S4EG"},ap=$o(op),lp=_f(ap),cp={dbWatch:function(n,e){const t=lf(lp,n);uf(t,i=>{e(i.val())})}};window.$fb=cp;
