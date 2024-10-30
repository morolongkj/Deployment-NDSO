import{a as oe,b as Ve,c as $e,d as g,g as V,p as Xe,q as $,r as X}from"./chunk-KALLYKT4.js";import{Da as ne,Ga as Ie,H as be,Ha as re,Ia as Se,Ja as b,La as se,M as Me,Ma as N,Na as O,Oa as ke,Pa as Ce,Qa as Le,Ra as xe,Sa as _e,T as De,Ta as je,Ua as Fe,Va as M,Ya as L,Z as Ae,a as z,b as Ee,ca as E,cb as Ue,fa as p,fb as I,ia as v,k as Te,ka as l,la as R,ma as C,mb as Be,s as Re,sa as te,t as ee,ua as Pe,uc as ze,va as Ne,wa as Oe,x as k}from"./chunk-MLHGNWXV.js";var _=class{},G=class{},D=class e{constructor(n){this.normalizedNames=new Map,this.lazyUpdate=null,n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let s=t.slice(0,r),o=s.toLowerCase(),i=t.slice(r+1).trim();this.maybeSetNormalizedName(s,o),this.headers.has(o)?this.headers.get(o).push(i):this.headers.set(o,[i])}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,t);let s=(n.op==="a"?this.headers.get(t):void 0)||[];s.push(...r),this.headers.set(t,s);break;case"d":let o=n.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let i=this.headers.get(t);if(!i)return;i=i.filter(c=>o.indexOf(c)===-1),i.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,i)}break}}setHeaderEntries(n,t){let r=(Array.isArray(t)?t:[t]).map(o=>o.toString()),s=n.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(n,s)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var ae=class{encodeKey(n){return Je(n)}encodeValue(n){return Je(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function yt(e,n){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(s=>{let o=s.indexOf("="),[i,c]=o==-1?[n.decodeKey(s),""]:[n.decodeKey(s.slice(0,o)),n.decodeValue(s.slice(o+1))],a=t.get(i)||[];a.push(c),t.set(i,a)}),t}var mt=/%(\d[a-f0-9])/gi,gt={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Je(e){return encodeURIComponent(e).replace(mt,(n,t)=>gt[t]??n)}function J(e){return`${e}`}var T=class e{constructor(n={}){if(this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new ae,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=yt(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{let r=n.fromObject[t],s=Array.isArray(r)?r.map(J):[J(r)];this.map.set(t,s)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){let t=[];return Object.keys(n).forEach(r=>{let s=n[r];Array.isArray(s)?s.forEach(o=>{t.push({param:r,value:o,op:"a"})}):t.push({param:r,value:s,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let t=(n.op==="a"?this.map.get(n.param):void 0)||[];t.push(J(n.value)),this.map.set(n.param,t);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],s=r.indexOf(J(n.value));s!==-1&&r.splice(s,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};var ce=class{constructor(){this.map=new Map}set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};function vt(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ge(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Ke(e){return typeof Blob<"u"&&e instanceof Blob}function qe(e){return typeof FormData<"u"&&e instanceof FormData}function wt(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var x=class e{constructor(n,t,r,s){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=n.toUpperCase();let o;if(vt(this.method)||s?(this.body=r!==void 0?r:null,o=s):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new D,this.context??=new ce,!this.params)this.params=new T,this.urlWithParams=t;else{let i=this.params.toString();if(i.length===0)this.urlWithParams=t;else{let c=t.indexOf("?"),a=c===-1?"?":c<t.length-1?"&":"";this.urlWithParams=t+a+i}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ge(this.body)||Ke(this.body)||qe(this.body)||wt(this.body)?this.body:this.body instanceof T?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||qe(this.body)?null:Ke(this.body)?this.body.type||null:Ge(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof T?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(n={}){let t=n.method||this.method,r=n.url||this.url,s=n.responseType||this.responseType,o=n.transferCache??this.transferCache,i=n.body!==void 0?n.body:this.body,c=n.withCredentials??this.withCredentials,a=n.reportProgress??this.reportProgress,d=n.headers||this.headers,y=n.params||this.params,f=n.context??this.context;return n.setHeaders!==void 0&&(d=Object.keys(n.setHeaders).reduce((A,w)=>A.set(w,n.setHeaders[w]),d)),n.setParams&&(y=Object.keys(n.setParams).reduce((A,w)=>A.set(w,n.setParams[w]),y)),new e(t,r,i,{params:y,headers:d,context:f,reportProgress:a,responseType:s,withCredentials:c,transferCache:o})}},S=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(S||{}),j=class{constructor(n,t=W.Ok,r="OK"){this.headers=n.headers||new D,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}},le=class e extends j{constructor(n={}){super(n),this.type=S.ResponseHeader}clone(n={}){return new e({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},K=class e extends j{constructor(n={}){super(n),this.type=S.Response,this.body=n.body!==void 0?n.body:null}clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},q=class extends j{constructor(n){super(n,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},W=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(W||{});function ie(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Et=(()=>{class e{constructor(t){this.handler=t}request(t,r,s={}){let o;if(t instanceof x)o=t;else{let a;s.headers instanceof D?a=s.headers:a=new D(s.headers);let d;s.params&&(s.params instanceof T?d=s.params:d=new T({fromObject:s.params})),o=new x(t,r,s.body!==void 0?s.body:null,{headers:a,context:s.context,params:d,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let i=ee(o).pipe(Me(a=>this.handler.handle(a)));if(t instanceof x||s.observe==="events")return i;let c=i.pipe(be(a=>a instanceof K));switch(s.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return c.pipe(k(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return c.pipe(k(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return c.pipe(k(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return c.pipe(k(a=>a.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new T().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,s={}){return this.request("PATCH",t,ie(s,r))}post(t,r,s={}){return this.request("POST",t,ie(s,r))}put(t,r,s={}){return this.request("PUT",t,ie(s,r))}static{this.\u0275fac=function(r){return new(r||e)(l(_))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac})}}return e})();function Tt(e,n){return n(e)}function Rt(e,n,t){return(r,s)=>Oe(t,()=>n(r,o=>e(o,s)))}var wn=new v(""),de=new v(""),bt=new v(""),Mt=new v("");var We=(()=>{class e extends _{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null,this.pendingTasks=R(Be);let s=R(Mt,{optional:!0});this.backend=s??t}handle(t){if(this.chain===null){let s=Array.from(new Set([...this.injector.get(de),...this.injector.get(bt,[])]));this.chain=s.reduceRight((o,i)=>Rt(o,i,this.injector),Tt)}let r=this.pendingTasks.add();return this.chain(t,s=>this.backend.handle(s)).pipe(De(()=>this.pendingTasks.remove(r)))}static{this.\u0275fac=function(r){return new(r||e)(l(G),l(Ne))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac})}}return e})();var Dt=/^\)\]\}',?\n/;function At(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}var Ze=(()=>{class e{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new E(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?Re(r.\u0275loadImpl()):ee(null)).pipe(Ae(()=>new Te(o=>{let i=r.build();if(i.open(t.method,t.urlWithParams),t.withCredentials&&(i.withCredentials=!0),t.headers.forEach((u,h)=>i.setRequestHeader(u,h.join(","))),t.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let u=t.detectContentTypeHeader();u!==null&&i.setRequestHeader("Content-Type",u)}if(t.responseType){let u=t.responseType.toLowerCase();i.responseType=u!=="json"?u:"text"}let c=t.serializeBody(),a=null,d=()=>{if(a!==null)return a;let u=i.statusText||"OK",h=new D(i.getAllResponseHeaders()),P=At(i)||t.url;return a=new le({headers:h,status:i.status,statusText:u,url:P}),a},y=()=>{let{headers:u,status:h,statusText:P,url:we}=d(),m=null;h!==W.NoContent&&(m=typeof i.response>"u"?i.responseText:i.response),h===0&&(h=m?W.Ok:0);let H=h>=200&&h<300;if(t.responseType==="json"&&typeof m=="string"){let it=m;m=m.replace(Dt,"");try{m=m!==""?JSON.parse(m):null}catch(at){m=it,H&&(H=!1,m={error:at,text:m})}}H?(o.next(new K({body:m,headers:u,status:h,statusText:P,url:we||void 0})),o.complete()):o.error(new q({error:m,headers:u,status:h,statusText:P,url:we||void 0}))},f=u=>{let{url:h}=d(),P=new q({error:u,status:i.status||0,statusText:i.statusText||"Unknown Error",url:h||void 0});o.error(P)},A=!1,w=u=>{A||(o.next(d()),A=!0);let h={type:S.DownloadProgress,loaded:u.loaded};u.lengthComputable&&(h.total=u.total),t.responseType==="text"&&i.responseText&&(h.partialText=i.responseText),o.next(h)},ve=u=>{let h={type:S.UploadProgress,loaded:u.loaded};u.lengthComputable&&(h.total=u.total),o.next(h)};return i.addEventListener("load",y),i.addEventListener("error",f),i.addEventListener("timeout",f),i.addEventListener("abort",f),t.reportProgress&&(i.addEventListener("progress",w),c!==null&&i.upload&&i.upload.addEventListener("progress",ve)),i.send(c),o.next({type:S.Sent}),()=>{i.removeEventListener("error",f),i.removeEventListener("abort",f),i.removeEventListener("load",y),i.removeEventListener("timeout",f),t.reportProgress&&(i.removeEventListener("progress",w),c!==null&&i.upload&&i.upload.removeEventListener("progress",ve)),i.readyState!==i.DONE&&i.abort()}})))}static{this.\u0275fac=function(r){return new(r||e)(l(X))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac})}}return e})(),Ye=new v(""),Pt="XSRF-TOKEN",Nt=new v("",{providedIn:"root",factory:()=>Pt}),Ot="X-XSRF-TOKEN",It=new v("",{providedIn:"root",factory:()=>Ot}),Z=class{},St=(()=>{class e{constructor(t,r,s){this.doc=t,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=V(t,this.cookieName),this.lastCookieString=t),this.lastToken}static{this.\u0275fac=function(r){return new(r||e)(l(g),l(b),l(Nt))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac})}}return e})();function kt(e,n){let t=e.url.toLowerCase();if(!R(Ye)||e.method==="GET"||e.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return n(e);let r=R(Z).getToken(),s=R(It);return r!=null&&!e.headers.has(s)&&(e=e.clone({headers:e.headers.set(s,r)})),n(e)}var Qe=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(Qe||{});function Ct(e,n){return{\u0275kind:e,\u0275providers:n}}function En(...e){let n=[Et,Ze,We,{provide:_,useExisting:We},{provide:G,useExisting:Ze},{provide:de,useValue:kt,multi:!0},{provide:Ye,useValue:!0},{provide:Z,useClass:St}];for(let t of e)n.push(...t.\u0275providers);return te(n)}function Tn(e){return Ct(Qe.Interceptors,e.map(n=>({provide:de,useValue:n,multi:!0})))}var fe=class extends $e{constructor(){super(...arguments),this.supportsDOMEvents=!0}},pe=class e extends fe{static makeCurrent(){Ve(new e)}onAndCancel(n,t,r){return n.addEventListener(t,r),()=>{n.removeEventListener(t,r)}}dispatchEvent(n,t){n.dispatchEvent(t)}remove(n){n.parentNode&&n.parentNode.removeChild(n)}createElement(n,t){return t=t||this.getDefaultDocument(),t.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,t){return t==="window"?window:t==="document"?n:t==="body"?n.body:null}getBaseHref(n){let t=xt();return t==null?null:_t(t)}resetBaseElement(){F=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return V(document.cookie,n)}},F=null;function xt(){return F=F||document.querySelector("base"),F?F.getAttribute("href"):null}function _t(e){return new URL(e,document.baseURI).pathname}var jt=(()=>{class e{build(){return new XMLHttpRequest}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac})}}return e})(),ye=new v(""),nt=(()=>{class e{constructor(t,r){this._zone=r,this._eventNameToPlugin=new Map,t.forEach(s=>{s.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,r,s){return this._findPluginFor(r).addEventListener(t,r,s)}getZone(){return this._zone}_findPluginFor(t){let r=this._eventNameToPlugin.get(t);if(r)return r;if(r=this._plugins.find(o=>o.supports(t)),!r)throw new E(5101,!1);return this._eventNameToPlugin.set(t,r),r}static{this.\u0275fac=function(r){return new(r||e)(l(ye),l(I))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac})}}return e})(),Y=class{constructor(n){this._doc=n}},ue="ng-app-id",rt=(()=>{class e{constructor(t,r,s,o={}){this.doc=t,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=$(o),this.resetHostNodes()}addStyles(t){for(let r of t)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(t){for(let r of t)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let t=this.styleNodesInDOM;t&&(t.forEach(r=>r.remove()),t.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(t){this.hostNodes.add(t);for(let r of this.getAllStyles())this.addStyleToHost(t,r)}removeHost(t){this.hostNodes.delete(t)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(t){for(let r of this.hostNodes)this.addStyleToHost(r,t)}onStyleRemoved(t){let r=this.styleRef;r.get(t)?.elements?.forEach(s=>s.remove()),r.delete(t)}collectServerRenderedStyles(){let t=this.doc.head?.querySelectorAll(`style[${ue}="${this.appId}"]`);if(t?.length){let r=new Map;return t.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(t,r){let s=this.styleRef;if(s.has(t)){let o=s.get(t);return o.usage+=r,o.usage}return s.set(t,{usage:r,elements:[]}),r}getStyleElement(t,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===t)return s.delete(r),o.removeAttribute(ue),o;{let i=this.doc.createElement("style");return this.nonce&&i.setAttribute("nonce",this.nonce),i.textContent=r,this.platformIsServer&&i.setAttribute(ue,this.appId),t.appendChild(i),i}}addStyleToHost(t,r){let s=this.getStyleElement(t,r),o=this.styleRef,i=o.get(r)?.elements;i?i.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let t=this.hostNodes;t.clear(),t.add(this.doc.head)}static{this.\u0275fac=function(r){return new(r||e)(l(g),l(re),l(se,8),l(b))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac})}}return e})(),he={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},ge=/%COMP%/g,st="%COMP%",Ft=`_nghost-${st}`,Ut=`_ngcontent-${st}`,Bt=!0,zt=new v("",{providedIn:"root",factory:()=>Bt});function Vt(e){return Ut.replace(ge,e)}function $t(e){return Ft.replace(ge,e)}function ot(e,n){return n.map(t=>t.replace(ge,e))}var He=(()=>{class e{constructor(t,r,s,o,i,c,a,d=null){this.eventManager=t,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=i,this.platformId=c,this.ngZone=a,this.nonce=d,this.rendererByCompId=new Map,this.platformIsServer=$(c),this.defaultRenderer=new U(t,i,a,this.platformIsServer)}createRenderer(t,r){if(!t||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===C.ShadowDom&&(r=Ee(z({},r),{encapsulation:C.Emulated}));let s=this.getOrCreateRenderer(t,r);return s instanceof Q?s.applyToHost(t):s instanceof B&&s.applyStyles(),s}getOrCreateRenderer(t,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let i=this.doc,c=this.ngZone,a=this.eventManager,d=this.sharedStylesHost,y=this.removeStylesOnCompDestroy,f=this.platformIsServer;switch(r.encapsulation){case C.Emulated:o=new Q(a,d,r,this.appId,y,i,c,f);break;case C.ShadowDom:return new me(a,d,t,r,i,c,this.nonce,f);default:o=new B(a,d,r,y,i,c,f);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(r){return new(r||e)(l(nt),l(rt),l(re),l(zt),l(g),l(b),l(I),l(se))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac})}}return e})(),U=class{constructor(n,t,r,s){this.eventManager=n,this.doc=t,this.ngZone=r,this.platformIsServer=s,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(n,t){return t?this.doc.createElementNS(he[t]||t,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,t){(et(n)?n.content:n).appendChild(t)}insertBefore(n,t,r){n&&(et(n)?n.content:n).insertBefore(t,r)}removeChild(n,t){n&&n.removeChild(t)}selectRootElement(n,t){let r=typeof n=="string"?this.doc.querySelector(n):n;if(!r)throw new E(-5104,!1);return t||(r.textContent=""),r}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,t,r,s){if(s){t=s+":"+t;let o=he[s];o?n.setAttributeNS(o,t,r):n.setAttribute(t,r)}else n.setAttribute(t,r)}removeAttribute(n,t,r){if(r){let s=he[r];s?n.removeAttributeNS(s,t):n.removeAttribute(`${r}:${t}`)}else n.removeAttribute(t)}addClass(n,t){n.classList.add(t)}removeClass(n,t){n.classList.remove(t)}setStyle(n,t,r,s){s&(L.DashCase|L.Important)?n.style.setProperty(t,r,s&L.Important?"important":""):n.style[t]=r}removeStyle(n,t,r){r&L.DashCase?n.style.removeProperty(t):n.style[t]=""}setProperty(n,t,r){n!=null&&(n[t]=r)}setValue(n,t){n.nodeValue=t}listen(n,t,r){if(typeof n=="string"&&(n=oe().getGlobalEventTarget(this.doc,n),!n))throw new Error(`Unsupported event target ${n} for event ${t}`);return this.eventManager.addEventListener(n,t,this.decoratePreventDefault(r))}decoratePreventDefault(n){return t=>{if(t==="__ngUnwrap__")return n;(this.platformIsServer?this.ngZone.runGuarded(()=>n(t)):n(t))===!1&&t.preventDefault()}}};function et(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var me=class extends U{constructor(n,t,r,s,o,i,c,a){super(n,o,i,a),this.sharedStylesHost=t,this.hostEl=r,this.shadowRoot=r.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=ot(s.id,s.styles);for(let y of d){let f=document.createElement("style");c&&f.setAttribute("nonce",c),f.textContent=y,this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,t){return super.appendChild(this.nodeOrShadowRoot(n),t)}insertBefore(n,t,r){return super.insertBefore(this.nodeOrShadowRoot(n),t,r)}removeChild(n,t){return super.removeChild(this.nodeOrShadowRoot(n),t)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},B=class extends U{constructor(n,t,r,s,o,i,c,a){super(n,o,i,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=s,this.styles=a?ot(a,r.styles):r.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Q=class extends B{constructor(n,t,r,s,o,i,c,a){let d=s+"-"+r.id;super(n,t,r,o,i,c,a,d),this.contentAttr=Vt(d),this.hostAttr=$t(d)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,t){let r=super.createElement(n,t);return super.setAttribute(r,this.contentAttr,""),r}},Xt=(()=>{class e extends Y{constructor(t){super(t)}supports(t){return!0}addEventListener(t,r,s){return t.addEventListener(r,s,!1),()=>this.removeEventListener(t,r,s)}removeEventListener(t,r,s){return t.removeEventListener(r,s)}static{this.\u0275fac=function(r){return new(r||e)(l(g))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac})}}return e})(),tt=["alt","control","meta","shift"],Jt={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Gt={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},Kt=(()=>{class e extends Y{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,r,s){let o=e.parseEventName(r),i=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>oe().onAndCancel(t,o.domEventName,i))}static parseEventName(t){let r=t.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),i="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),i="code."),tt.forEach(d=>{let y=r.indexOf(d);y>-1&&(r.splice(y,1),i+=d+".")}),i+=o,r.length!=0||o.length===0)return null;let a={};return a.domEventName=s,a.fullKey=i,a}static matchEventFullKeyCode(t,r){let s=Jt[t.key]||t.key,o="";return r.indexOf("code.")>-1&&(s=t.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),tt.forEach(i=>{if(i!==s){let c=Gt[i];c(t)&&(o+=i+".")}}),o+=s,o===r)}static eventCallback(t,r,s){return o=>{e.matchEventFullKeyCode(o,t)&&s.runGuarded(()=>r(o))}}static _normalizeKey(t){return t==="esc"?"escape":t}static{this.\u0275fac=function(r){return new(r||e)(l(g))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac})}}return e})();function Jn(e,n){return ze(z({rootComponent:e},qt(n)))}function qt(e){return{appProviders:[...Ht,...e?.providers??[]],platformProviders:Qt}}function Wt(){pe.makeCurrent()}function Zt(){return new ne}function Yt(){return Ie(document),document}var Qt=[{provide:b,useValue:Xe},{provide:Se,useValue:Wt,multi:!0},{provide:g,useFactory:Yt,deps:[]}];var Ht=[{provide:Pe,useValue:"root"},{provide:ne,useFactory:Zt,deps:[]},{provide:ye,useClass:Xt,multi:!0,deps:[g,I,b]},{provide:ye,useClass:Kt,multi:!0,deps:[g]},He,rt,nt,{provide:Ue,useExisting:He},{provide:X,useClass:jt,deps:[]},[]];var Gn=(()=>{class e{constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static{this.\u0275fac=function(r){return new(r||e)(l(g))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var en=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=p({token:e,factory:function(r){let s=null;return r?s=new(r||e):s=l(tn),s},providedIn:"root"})}}return e})(),tn=(()=>{class e extends en{constructor(t){super(),this._doc=t}sanitize(t,r){if(r==null)return null;switch(t){case M.NONE:return r;case M.HTML:return O(r,"HTML")?N(r):Fe(this._doc,String(r)).toString();case M.STYLE:return O(r,"Style")?N(r):r;case M.SCRIPT:if(O(r,"Script"))return N(r);throw new E(5200,!1);case M.URL:return O(r,"URL")?N(r):je(String(r));case M.RESOURCE_URL:if(O(r,"ResourceURL"))return N(r);throw new E(5201,!1);default:throw new E(5202,!1)}}bypassSecurityTrustHtml(t){return ke(t)}bypassSecurityTrustStyle(t){return Ce(t)}bypassSecurityTrustScript(t){return Le(t)}bypassSecurityTrustUrl(t){return xe(t)}bypassSecurityTrustResourceUrl(t){return _e(t)}static{this.\u0275fac=function(r){return new(r||e)(l(g))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{T as a,S as b,Et as c,wn as d,En as e,Tn as f,He as g,Jn as h,Gn as i,en as j};
