(()=>{var e={};e.id=362,e.ids=[362],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10324:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/rbuddhdev/Downloads/lead-dashboard/src/app/leads/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/rbuddhdev/Downloads/lead-dashboard/src/app/leads/page.tsx","default")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},39230:(e,t,a)=>{Promise.resolve().then(a.bind(a,60928))},43958:(e,t,a)=>{Promise.resolve().then(a.bind(a,10324))},44493:(e,t,a)=>{"use strict";a.d(t,{BT:()=>l,Wu:()=>d,ZB:()=>n,Zp:()=>o,aR:()=>i});var r=a(60687);a(43210);var s=a(4780);function o({className:e,...t}){return(0,r.jsx)("div",{"data-slot":"card",className:(0,s.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...t})}function i({className:e,...t}){return(0,r.jsx)("div",{"data-slot":"card-header",className:(0,s.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...t})}function n({className:e,...t}){return(0,r.jsx)("div",{"data-slot":"card-title",className:(0,s.cn)("leading-none font-semibold",e),...t})}function l({className:e,...t}){return(0,r.jsx)("div",{"data-slot":"card-description",className:(0,s.cn)("text-muted-foreground text-sm",e),...t})}function d({className:e,...t}){return(0,r.jsx)("div",{"data-slot":"card-content",className:(0,s.cn)("px-6",e),...t})}},60928:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ew});var r,s=a(60687),o=a(36779),i=a(70640),n=a(44493),l=a(43210),d=a(14163),c=l.forwardRef((e,t)=>(0,s.jsx)(d.sG.label,{...e,ref:t,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));c.displayName="Label";var u=a(4780);function p({className:e,...t}){return(0,s.jsx)(c,{"data-slot":"label",className:(0,u.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",e),...t})}var m=a(35950),f=a(48716);let h={data:""},g=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||h,x=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,b=/\/\*[^]*?\*\/|  +/g,v=/\n+/g,y=(e,t)=>{let a="",r="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?a=o+" "+i+";":r+="f"==o[1]?y(i,o):o+"{"+y(i,"k"==o[1]?"":t)+"}":"object"==typeof i?r+=y(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=y.p?y.p(o,i):o+":"+i+";")}return a+(t&&s?t+"{"+s+"}":s)+r},w={},j=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+j(e[a]);return t}return e},N=(e,t,a,r,s)=>{let o=j(e),i=w[o]||(w[o]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(o));if(!w[i]){let t=o!==e?e:(e=>{let t,a,r=[{}];for(;t=x.exec(e.replace(b,""));)t[4]?r.shift():t[3]?(a=t[3].replace(v," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(v," ").trim();return r[0]})(e);w[i]=y(s?{["@keyframes "+i]:t}:t,a?"":"."+i)}let n=a&&w.g?w.g:null;return a&&(w.g=w[i]),((e,t,a,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=a?e+t.data:t.data+e)})(w[i],t,r,n),i},k=(e,t,a)=>e.reduce((e,r,s)=>{let o=t[s];if(o&&o.call){let e=o(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":y(e,""):!1===e?"":e}return e+r+(null==o?"":o)},"");function E(e){let t=this||{},a=e.call?e(t.p):e;return N(a.unshift?a.raw?k(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,g(t.target),t.g,t.o,t.k)}E.bind({g:1});let P,D,C,O=E.bind({k:1});function $(e,t){let a=this||{};return function(){let r=arguments;function s(o,i){let n=Object.assign({},o),l=n.className||s.className;a.p=Object.assign({theme:D&&D()},n),a.o=/ *go\d+/.test(l),n.className=E.apply(a,r)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),C&&d[0]&&C(n),P(d,n)}return t?t(s):s}}var _=e=>"function"==typeof e,A=(e,t)=>_(e)?e(t):e,S=(()=>{let e=0;return()=>(++e).toString()})(),F=(()=>{let e;return()=>e})(),T=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return T(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},z=[],I={toasts:[],pausedAt:void 0},q=e=>{I=T(I,e),z.forEach(e=>{e(I)})},M={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},G=(e={})=>{let[t,a]=(0,l.useState)(I),r=(0,l.useRef)(I);(0,l.useEffect)(()=>(r.current!==I&&a(I),z.push(a),()=>{let e=z.indexOf(a);e>-1&&z.splice(e,1)}),[]);let s=t.toasts.map(t=>{var a,r,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||M[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...t,toasts:s}},H=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||S()}),R=e=>(t,a)=>{let r=H(t,e,a);return q({type:2,toast:r}),r.id},U=(e,t)=>R("blank")(e,t);U.error=R("error"),U.success=R("success"),U.loading=R("loading"),U.custom=R("custom"),U.dismiss=e=>{q({type:3,toastId:e})},U.remove=e=>q({type:4,toastId:e}),U.promise=(e,t,a)=>{let r=U.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?A(t.success,e):void 0;return s?U.success(s,{id:r,...a,...null==a?void 0:a.success}):U.dismiss(r),e}).catch(e=>{let s=t.error?A(t.error,e):void 0;s?U.error(s,{id:r,...a,...null==a?void 0:a.error}):U.dismiss(r)}),e};var B=(e,t)=>{q({type:1,toast:{id:e,height:t}})},L=()=>{q({type:5,time:Date.now()})},J=new Map,Z=1e3,K=(e,t=Z)=>{if(J.has(e))return;let a=setTimeout(()=>{J.delete(e),q({type:4,toastId:e})},t);J.set(e,a)},W=e=>{let{toasts:t,pausedAt:a}=G(e);(0,l.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&U.dismiss(t.id);return}return setTimeout(()=>U.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,l.useCallback)(()=>{a&&q({type:6,time:Date.now()})},[a]),s=(0,l.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:s=8,defaultPosition:o}=a||{},i=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+s,0)},[t]);return(0,l.useEffect)(()=>{t.forEach(e=>{if(e.dismissed)K(e.id,e.removeDelay);else{let t=J.get(e.id);t&&(clearTimeout(t),J.delete(e.id))}})},[t]),{toasts:t,handlers:{updateHeight:B,startPause:L,endPause:r,calculateOffset:s}}},Q=O`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,V=O`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,X=O`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Y=$("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Q} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${V} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${X} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ee=O`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,et=$("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ee} 1s linear infinite;
`,ea=O`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,er=O`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,es=$("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ea} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${er} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,eo=$("div")`
  position: absolute;
`,ei=$("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,en=O`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,el=$("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${en} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ed=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?l.createElement(el,null,t):t:"blank"===a?null:l.createElement(ei,null,l.createElement(et,{...r}),"loading"!==a&&l.createElement(eo,null,"error"===a?l.createElement(Y,{...r}):l.createElement(es,{...r})))},ec=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,eu=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ep=$("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,em=$("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ef=(e,t)=>{let a=e.includes("top")?1:-1,[r,s]=F()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ec(a),eu(a)];return{animation:t?`${O(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${O(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},eh=l.memo(({toast:e,position:t,style:a,children:r})=>{let s=e.height?ef(e.position||t||"top-center",e.visible):{opacity:0},o=l.createElement(ed,{toast:e}),i=l.createElement(em,{...e.ariaProps},A(e.message,e));return l.createElement(ep,{className:e.className,style:{...s,...a,...e.style}},"function"==typeof r?r({icon:o,message:i}):l.createElement(l.Fragment,null,o,i))});r=l.createElement,y.p=void 0,P=r,D=void 0,C=void 0;var eg=({id:e,className:t,style:a,onHeightUpdate:r,children:s})=>{let o=l.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return l.createElement("div",{ref:o,className:t,style:a},s)},ex=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:F()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},eb=E`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ev=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:s,containerStyle:o,containerClassName:i})=>{let{toasts:n,handlers:d}=W(a);return l.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:i,onMouseEnter:d.startPause,onMouseLeave:d.endPause},n.map(a=>{let o=a.position||t,i=ex(o,d.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return l.createElement(eg,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?eb:"",style:i},"custom"===a.type?A(a.message,a):s?s(a):l.createElement(eh,{toast:a,position:o}))}))};let ey=[{value:"Hilton aims to enhance its hospitality footprint by driving corporate partnerships, expanding event bookings, and improving guest experience through digital innovations.Key goals:Attract HR and admin decision-makers for bulk/corporate travel packagesPromote conference/event hosting solutionsTarget finance teams to drive cost-effective lodging solutionsUse data to personalize offers for frequent business travelers",label:"Hilton"},{value:"Dell Technologies aims to be a global leader in digital transformation by providing scalable, secure, and innovative technology solutions. Its business objectives are to:Expand its B2B customer base through strategic partnerships.Deliver AI-powered and sustainable computing solutions across industries.Accelerate enterprise adoption of Dell’s laptops, desktops, and cloud infrastructure.Strengthen relationships with IT decision-makers and tech leaders in medium to large companies.Provide tailored solutions that match the scale and workflow of enterprise clients.",label:"Dell"}];function ew(){let[e,t]=(0,l.useState)(null),[a,r]=(0,l.useState)(""),[d,c]=(0,l.useState)(""),[u,h]=(0,l.useState)(null),[g,x]=(0,l.useState)(!1),b=async s=>{if(s.preventDefault(),!e||!a||!d){U.error("Please fill in all fields.");return}x(!0),h(null),U.promise(new Promise(async(s,o)=>{try{let o=await fetch("https://904e-49-248-229-115.ngrok-free.app/v1/ai-engine/generate/scoring/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({businessObject:e,campaignObject:a,fields:d})});if(!o.ok)throw Error(`Network response was not ok: ${o.status} ${o.statusText}`);let i=await o.json(),n=Object.keys(i.data).map(e=>({title:e,count:i.data[e]}));t(""),r(""),c(""),h(n),s(n)}catch(e){console.error("Error submitting data:",e),o(e)}finally{x(!1)}}),{loading:"Processing...",success:()=>"Successfully scored fields!",error:e=>`Error: ${e.message}`})};return(0,s.jsxs)(f.GB,{children:[(0,s.jsx)(ev,{position:"top-center",reverseOrder:!1}),(0,s.jsx)(o.G,{}),(0,s.jsxs)(f.sF,{children:[(0,s.jsxs)("header",{className:"flex h-14 items-center gap-3 px-5 py-3 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg",children:[(0,s.jsx)(f.x2,{className:"-ml-1"}),(0,s.jsx)(m.w,{orientation:"vertical",className:"h-5 border-white opacity-80"}),(0,s.jsx)(i.Qp,{className:"animate-fade-in",children:(0,s.jsxs)(i.AB,{className:"flex items-center gap-2 text-sm",children:[(0,s.jsx)(i.J5,{children:(0,s.jsx)(i.w1,{href:"#",className:"hover:underline",children:"Lead Validations"})}),(0,s.jsx)(i.tH,{className:"opacity-70"}),(0,s.jsx)(i.J5,{children:(0,s.jsx)(i.tJ,{className:"font-medium",children:"Field Score"})})]})})]}),(0,s.jsxs)("div",{className:"flex flex-1 flex-col gap-6 p-6 bg-gray-50",children:[(0,s.jsxs)("form",{onSubmit:b,className:"flex flex-col gap-6 bg-white p-6 rounded-lg shadow-lg",children:[(0,s.jsx)("h1",{className:"text-xl font-bold text-gray-800",children:"Define Weightage for Fields"}),(0,s.jsx)("div",{className:"flex gap-6",children:(0,s.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,s.jsx)(p,{htmlFor:"businessObjective",className:"text-sm font-semibold",children:"Select Client"}),(0,s.jsxs)("select",{className:"text-sm px-2 py-2 border border-gray-300 rounded-md",onChange:e=>t(e.target.value),value:e,children:[(0,s.jsx)("option",{value:"",children:"Select Client"}),ey.map(e=>(0,s.jsx)("option",{value:e.value,children:e.label},e.value))]})]})}),(0,s.jsxs)("div",{className:"flex gap-6",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,s.jsx)(p,{htmlFor:"textArea1",className:"text-sm font-semibold",children:"Campaign Objective"}),(0,s.jsx)("textarea",{value:a,onChange:e=>r(e.target.value),className:"w-full border p-4 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500",rows:4,placeholder:"Enter Campaign Objective here..."})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-2 w-full",children:[(0,s.jsx)(p,{htmlFor:"textArea2",className:"text-sm font-semibold",children:"Fields"}),(0,s.jsx)("textarea",{value:d,onChange:e=>c(e.target.value),className:"w-full border p-4 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500",rows:4,placeholder:"Enter Fields here..."})]})]}),(0,s.jsx)("button",{type:"submit",className:"w-36 ml-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700",disabled:g,children:"Submit"})]}),u&&(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Field Scores"}),(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",children:u.map((e,t)=>(0,s.jsx)(n.Zp,{className:"bg-white p-4 rounded-lg shadow-lg hover:shadow-xl",children:(0,s.jsxs)(n.aR,{className:"flex items-center justify-between",children:[(0,s.jsx)("span",{className:"text-sm font-semibold text-gray-600",children:e.title}),(0,s.jsx)("p",{className:"text-xl font-bold text-blue-600",children:e.count})]})},t))})]})]})]})]})}},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},79551:e=>{"use strict";e.exports=require("url")},85653:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var r=a(65239),s=a(48088),o=a(88170),i=a.n(o),n=a(30893),l={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);a.d(t,l);let d={children:["",{children:["leads",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,10324)),"/Users/rbuddhdev/Downloads/lead-dashboard/src/app/leads/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,94431)),"/Users/rbuddhdev/Downloads/lead-dashboard/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,57398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(a.t.bind(a,89999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(a.t.bind(a,65284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,c=["/Users/rbuddhdev/Downloads/lead-dashboard/src/app/leads/page.tsx"],u={require:a,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/leads/page",pathname:"/leads",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[447,169,587,113],()=>a(85653));module.exports=r})();