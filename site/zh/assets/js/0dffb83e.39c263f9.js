"use strict";(self.webpackChunk_project_hami_website=self.webpackChunk_project_hami_website||[]).push([[5075],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(f,i(i({ref:t},s),{},{components:a})):r.createElement(f,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3208:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={title:"Karmada Roadmap"},i="Karmada Roadmap",o={unversionedId:"roadmap",id:"roadmap",title:"Karmada Roadmap",description:"This document defines a high level roadmap for Karmada development and upcoming releases.",source:"@site/docs/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/zh/docs/next/roadmap",draft:!1,editUrl:"https://github.com/karmada-io/website/edit/main/docs/roadmap.md",tags:[],version:"current",lastUpdatedBy:"limengxuan",lastUpdatedAt:1713177637,formattedLastUpdatedAt:"2024\u5e744\u670815\u65e5",frontMatter:{title:"Karmada Roadmap"}},u={},p=[{value:"2022 H1",id:"2022-h1",level:2},{value:"2022 H2",id:"2022-h2",level:2}],s={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"karmada-roadmap"},"Karmada Roadmap"),(0,n.kt)("p",null,"This document defines a high level roadmap for Karmada development and upcoming releases.\nCommunity and contributor involvement is vital for successfully implementing all desired items for each release.\nWe hope that the items listed below will inspire further engagement from the community to keep karmada progressing and shipping exciting and valuable features."),(0,n.kt)("h2",{id:"2022-h1"},"2022 H1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Multi-cluster HA scheduling policy",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"spread by region"),(0,n.kt)("li",{parentName:"ul"},"spread by zone"),(0,n.kt)("li",{parentName:"ul"},"spread by provider"))),(0,n.kt)("li",{parentName:"ul"},"Multi-cluster Ingress"),(0,n.kt)("li",{parentName:"ul"},"Multi-cluster HPA (Horizontal Pod Autoscaling)"),(0,n.kt)("li",{parentName:"ul"},"Federated resource quota"),(0,n.kt)("li",{parentName:"ul"},"API reference"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://karmada.io/"},"Karmada website")," refactor"),(0,n.kt)("li",{parentName:"ul"},"Policy-based governance, risk, and compliance"),(0,n.kt)("li",{parentName:"ul"},"Multi-cluster DNS (cluster identity)"),(0,n.kt)("li",{parentName:"ul"},"Global search across clusters"),(0,n.kt)("li",{parentName:"ul"},"Scheduling re-balancing")),(0,n.kt)("h2",{id:"2022-h2"},"2022 H2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Karmada Dashboard - alpha release"),(0,n.kt)("li",{parentName:"ul"},"Karmada scalability baseline (performance report)"),(0,n.kt)("li",{parentName:"ul"},"Cluster addons"),(0,n.kt)("li",{parentName:"ul"},"Helm chart propagation"),(0,n.kt)("li",{parentName:"ul"},"Multi-cluster events"),(0,n.kt)("li",{parentName:"ul"},"Multi-cluster Operator specifications"),(0,n.kt)("li",{parentName:"ul"},"Multi-cluster Application"),(0,n.kt)("li",{parentName:"ul"},"Multi-cluster monitoring"),(0,n.kt)("li",{parentName:"ul"},"Multi-cluster logging"),(0,n.kt)("li",{parentName:"ul"},"Multi-cluster storage"),(0,n.kt)("li",{parentName:"ul"},"Multi-cluster RBAC"),(0,n.kt)("li",{parentName:"ul"},"Multi-cluster networking"),(0,n.kt)("li",{parentName:"ul"},"Data migration across clusters"),(0,n.kt)("li",{parentName:"ul"},"Multi-cluster workflow"),(0,n.kt)("li",{parentName:"ul"},"Integration with ecosystem"),(0,n.kt)("li",{parentName:"ul"},"Cluster lifecycle management"),(0,n.kt)("li",{parentName:"ul"},"Image registry across clouds"),(0,n.kt)("li",{parentName:"ul"},"Multi-cluster Service Mesh solutions")))}c.isMDXComponent=!0}}]);