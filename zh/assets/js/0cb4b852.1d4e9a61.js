"use strict";(self.webpackChunk_project_hami_website=self.webpackChunk_project_hami_website||[]).push([[494],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=l,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return r?a.createElement(h,n(n({ref:t},c),{},{components:r})):a.createElement(h,n({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,n=new Array(i);n[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,n[1]=s;for(var u=2;u<i;u++)n[u]=r[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8744:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(7462),l=(r(7294),r(3905));const i={title:"Key Features"},n=void 0,s={unversionedId:"key-features/features",id:"key-features/features",title:"Key Features",description:"Cross-cloud multi-cluster multi-mode management",source:"@site/docs/key-features/features.md",sourceDirName:"key-features",slug:"/key-features/features",permalink:"/zh/docs/next/key-features/features",draft:!1,editUrl:"https://github.com/karmada-io/website/edit/main/docs/key-features/features.md",tags:[],version:"current",lastUpdatedBy:"limengxuan",lastUpdatedAt:1713177637,formattedLastUpdatedAt:"2024\u5e744\u670815\u65e5",frontMatter:{title:"Key Features"},sidebar:"docs",previous:{title:"Architecture",permalink:"/zh/docs/next/core-concepts/architecture"},next:{title:"Deploy HAMi using helm",permalink:"/zh/docs/next/get-started/nginx-example"}},o={},u=[{value:"Cross-cloud multi-cluster multi-mode management",id:"cross-cloud-multi-cluster-multi-mode-management",level:2},{value:"Multi-policy multi-cluster scheduling",id:"multi-policy-multi-cluster-scheduling",level:2},{value:"Cross-cluster failover of applications",id:"cross-cluster-failover-of-applications",level:2},{value:"Global Uniform Resource View",id:"global-uniform-resource-view",level:2},{value:"Separating the concerns of different roles",id:"separating-the-concerns-of-different-roles",level:2},{value:"Cross-cluster service governance",id:"cross-cluster-service-governance",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"cross-cloud-multi-cluster-multi-mode-management"},"Cross-cloud multi-cluster multi-mode management"),(0,l.kt)("p",null,"Karmada supports:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Safe isolation:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Create a namespace for each cluster, prefixed with ",(0,l.kt)("inlineCode",{parentName:"li"},"karmada-es-"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hami.io/docs/userguide/clustermanager/cluster-registration"},"Multi-mode")," connection:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Push: Karmada is directly connected to the cluster kube-apiserver."),(0,l.kt)("li",{parentName:"ul"},"Pull: Deploy one agent component in the cluster, Karmada delegates tasks to the agent component."))),(0,l.kt)("li",{parentName:"ul"},"Multi-cloud support(Only if compliant with Kubernetes specifications):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Support various public cloud vendors."),(0,l.kt)("li",{parentName:"ul"},"Support for private cloud."),(0,l.kt)("li",{parentName:"ul"},"Support self-built clusters.")))),(0,l.kt)("p",null,"The overall relationship between the member cluster and the control plane is shown in the following figure:  "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"overall-relationship.png",src:r(345).Z,width:"850",height:"857"})),(0,l.kt)("h2",{id:"multi-policy-multi-cluster-scheduling"},"Multi-policy multi-cluster scheduling"),(0,l.kt)("p",null,"Karmada supports:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cluster distribution capability under ",(0,l.kt)("a",{parentName:"li",href:"https://hami.io/docs/userguide/scheduling/resource-propagating"},"different scheduling strategies"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ClusterAffinity: Oriented scheduling based on ClusterName, Label, Field."),(0,l.kt)("li",{parentName:"ul"},"Toleration: Scheduling based on Taint and Toleration."),(0,l.kt)("li",{parentName:"ul"},"SpreadConstraint: Scheduling based on cluster topology."),(0,l.kt)("li",{parentName:"ul"},"ReplicasScheduling: Replication mode and split mode for instanced workloads."))),(0,l.kt)("li",{parentName:"ul"},"Differential configuration(",(0,l.kt)("a",{parentName:"li",href:"https://hami.io/docs/userguide/scheduling/override-policy"},"OverridePolicy"),"):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ImageOverrider: Differentiated configuration of mirrors."),(0,l.kt)("li",{parentName:"ul"},"ArgsOverrider: Differentiated configuration of execution parameters."),(0,l.kt)("li",{parentName:"ul"},"CommandOverrider: Differentiated configuration for execution commands."),(0,l.kt)("li",{parentName:"ul"},"PlainText: Customized Differentiation Configuration."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hami.io/docs/userguide/scheduling/descheduler"},"Support reschedule")," with following components:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Descheduler(karmada-descheduler): Trigger rescheduling based on instance state changes in member clusters."),(0,l.kt)("li",{parentName:"ul"},"Scheduler-estimator(karmada-scheduler-estimator): Provides the scheduler with a more precise desired state of the running instances of the member cluster.")))),(0,l.kt)("p",null,"Much like k8s scheduling, Karmada support different scheduling policy. The overall scheduling process is shown in the figure below:  "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"overall-relationship.png",src:r(8671).Z,width:"802",height:"730"})),(0,l.kt)("p",null,"If one cluster does not have enough resource to accommodate their pods, Karamda will reschedule the pods. The overall rescheduling process is shown in the following figure:  "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"overall-relationship.png",src:r(113).Z,width:"1072",height:"514"})),(0,l.kt)("h2",{id:"cross-cluster-failover-of-applications"},"Cross-cluster failover of applications"),(0,l.kt)("p",null,"Karmada supports:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hami.io/docs/userguide/failover/"},"Cluster failover"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Karmada supports users to set distribution policies, and automatically migrates the faulty cluster replicas in a centralized or decentralized manner after a cluster failure."))),(0,l.kt)("li",{parentName:"ul"},"Cluster taint settings:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"When the user sets a taint for the cluster and the resource distribution strategy cannot tolerate the taint, Karmada will also automatically trigger the migration of the cluster replicas."))),(0,l.kt)("li",{parentName:"ul"},"Uninterrupted service:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"During the replicas migration process, Karmada can ensure that the service replicas does not drop to zero, thereby ensuring that the service will not be interrupted.")))),(0,l.kt)("p",null,"Karmada supports failover for clusters, one cluster failure will cause failover of replicas as follows:  "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"overall-relationship.png",src:r(9378).Z,width:"866",height:"771"})),(0,l.kt)("h2",{id:"global-uniform-resource-view"},"Global Uniform Resource View"),(0,l.kt)("p",null,"Karmada supports:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hami.io/docs/userguide/globalview/customizing-resource-interpreter"},"Resource status collection and aggregation"),": Collect and aggregate state into resource templates with the help of the Resource Interpreter.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"User-defined resource, triggering webhook remote calls."),(0,l.kt)("li",{parentName:"ul"},"Fixed encoding in Karmada for some common resource types."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hami.io/docs/userguide/globalview/aggregated-api-endpoint"},"Unified resource management"),": Unified management for ",(0,l.kt)("inlineCode",{parentName:"li"},"create"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"update"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"delete"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"query"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hami.io/docs/userguide/globalview/proxy-global-resource"},"Unified operations"),": Exec operations command(",(0,l.kt)("inlineCode",{parentName:"li"},"describe"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"exec"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"logs"),") in one k8s context."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hami.io/docs/tutorials/karmada-search/"},"Global search for resources and events"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Cache query: global fuzzy search and global precise search are supported."),(0,l.kt)("li",{parentName:"ul"},"Third-party storage: Search engine (Elasticsearch or OpenSearch), relational database, graph database are supported.")))),(0,l.kt)("p",null,"Users can access and operate all member clusters via karmada-apiserver:  "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"overall-relationship.png",src:r(5672).Z,width:"727",height:"771"})),(0,l.kt)("p",null,"Users also can check and search all member clusters resources via karmada-apiserver:  "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"overall-relationship.png",src:r(5757).Z,width:"912",height:"807"})),(0,l.kt)("h2",{id:"separating-the-concerns-of-different-roles"},"Separating the concerns of different roles"),(0,l.kt)("p",null,"karmada supports:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hami.io/docs/userguide/roleseparation/unifiedAuth"},"Unified authentication"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Aggregate API unified access entry."),(0,l.kt)("li",{parentName:"ul"},"Access control is consistent with member clusters."))),(0,l.kt)("li",{parentName:"ul"},"Unified resource quota(",(0,l.kt)("inlineCode",{parentName:"li"},"FederatedResourceQuota"),"):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Globally configures the ResourceQuota of each member cluster."),(0,l.kt)("li",{parentName:"ul"},"Configure ResourceQuota at the federation level."),(0,l.kt)("li",{parentName:"ul"},"Collects the resource usage of each member cluster in real time."))),(0,l.kt)("li",{parentName:"ul"},"Reusable scheduling strategy:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Resource templates are decoupled from scheduling policies, plug and play.")))),(0,l.kt)("p",null,"Users can access all member clusters with unified authentication:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"overall-relationship.png",src:r(478).Z,width:"1348",height:"226"})),(0,l.kt)("p",null,"Users also can defined global resource quota via ",(0,l.kt)("inlineCode",{parentName:"p"},"FederatedResourceQuota"),":  "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"overall-relationship.png",src:r(380).Z,width:"776",height:"526"})),(0,l.kt)("h2",{id:"cross-cluster-service-governance"},"Cross-cluster service governance"),(0,l.kt)("p",null,"karmada supports:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hami.io/docs/userguide/service/multi-cluster-service"},"Multi-cluster service discovery"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"With ServiceExport and ServiceImport, achieving cross-cluster service discovery."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://hami.io/docs/userguide/network/working-with-submariner"},"Multi-cluster network support"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"Submariner")," to open up the container network between clusters.")))),(0,l.kt)("p",null,"Users can enable service governance for cross-cluster with Karmada:  "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"overall-relationship.png",src:r(3781).Z,width:"954",height:"819"})))}p.isMDXComponent=!0},9378:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cluster-failover-4527349d188b9c732580a232470f7834.png"},345:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/overall-relationship-cde752160503e461af54c7c221080b27.png"},113:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/overall-rescheduling-7149500b33d9b282a68d4d75f9175757.png"},8671:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/overall-scheduling-cefc9e72c4fbdd86ee20ba60fb0ba487.png"},3781:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/service-governance-004a840ce72211900882774757ad4cb9.png"},478:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/unified-access-060eca86fb7fb8934578a2745b2ce58b.png"},5672:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/unified-operation-7f401934c5de8931d79dcd62c193e132.png"},380:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/unified-resourcequota-aa45c5fcab9df0a50fa655735065e43f.png"},5757:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/unified-search-8e00131f34e7571a3e9f21bc0d9690d8.png"}}]);