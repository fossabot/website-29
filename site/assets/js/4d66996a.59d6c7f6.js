"use strict";(self.webpackChunk_project_hami_website=self.webpackChunk_project_hami_website||[]).push([[7805],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>p});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),m=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=m(e.components);return r.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(t),p=n,h=u["".concat(o,".").concat(p)]||u[p]||d[p]||l;return t?r.createElement(h,s(s({ref:a},c),{},{components:t})):r.createElement(h,s({ref:a},c))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,s=new Array(l);s[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var m=2;m<l;m++)s[m]=t[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8292:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=t(7462),n=(t(7294),t(3905));const l={title:"Releases"},s=void 0,i={unversionedId:"releases",id:"releases",title:"Releases",description:"Release Notes and Assets",source:"@site/docs/releases.md",sourceDirName:".",slug:"/releases",permalink:"/docs/next/releases",draft:!1,editUrl:"https://github.com/karmada-io/website/edit/main/docs/releases.md",tags:[],version:"current",lastUpdatedBy:"limengxuan",lastUpdatedAt:1713177637,formattedLastUpdatedAt:"Apr 15, 2024",frontMatter:{title:"Releases"},sidebar:"docs",previous:{title:"FAQ(Frequently Asked Questions)",permalink:"/docs/next/faq/"}},o={},m=[{value:"Release Notes and Assets",id:"release-notes-and-assets",level:2},{value:"Release Management",id:"release-management",level:2},{value:"Release Timelines",id:"release-timelines",level:3},{value:"MAJOR release",id:"major-release",level:3},{value:"MINOR release",id:"minor-release",level:3},{value:"PATCH release",id:"patch-release",level:3},{value:"Versioning",id:"versioning",level:3},{value:"Issues",id:"issues",level:3},{value:"Branches and PRs",id:"branches-and-prs",level:3},{value:"Release Planning",id:"release-planning",level:3},{value:"Release Artifacts",id:"release-artifacts",level:3}],c={toc:m};function d(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"release-notes-and-assets"},"Release Notes and Assets"),(0,n.kt)("p",null,"Release notes are available on GitHub at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/karmada-io/karmada/releases"},"https://github.com/karmada-io/karmada/releases"),"."),(0,n.kt)("h2",{id:"release-management"},"Release Management"),(0,n.kt)("p",null,"This section provides guidelines on release timelines and release branch maintenance."),(0,n.kt)("h3",{id:"release-timelines"},"Release Timelines"),(0,n.kt)("p",null,"Karmada uses the Semantic Versioning schema. Karmada v1.0.0 was released in December 2021. This project follows a given version number MAJOR.MINOR.PATCH."),(0,n.kt)("h3",{id:"major-release"},"MAJOR release"),(0,n.kt)("p",null,"Major releases contain large features, design and architectural changes, and may include incompatible API changes. Major releases are low frequency and stable over a long period of time."),(0,n.kt)("h3",{id:"minor-release"},"MINOR release"),(0,n.kt)("p",null,"Minor releases contain features, enhancements, and fixes that are introduced in a backwards-compatible manner. Since Karmada is a fast growing project and features continue to iterate rapidly, having a minor release approximately every few months helps balance speed and stability."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Roughly every 3 months")),(0,n.kt)("h3",{id:"patch-release"},"PATCH release"),(0,n.kt)("p",null,"Patch releases are for backwards-compatible bug fixes and very minor enhancements which do not impact stability or compatibility. Typically only critical fixes are selected for patch releases. Usually there will be at least one patch release in a minor release cycle."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When critical fixes are required, or roughly each month")),(0,n.kt)("h3",{id:"versioning"},"Versioning"),(0,n.kt)("p",null,"Karmada uses GitHub tags to manage versions. New releases and release candidates are published using the wildcard tag",(0,n.kt)("inlineCode",{parentName:"p"},"v<major>.<minor>.<patch>"),"."),(0,n.kt)("p",null,"Whenever a PR is merged into the master branch, CI will pull the latest code, generate an image and upload it to the mirror repository. The latest image of Karmada components can usually be downloaded online using the latest tag.\nWhenever a release is released, the image will also be released, and the tag is the same as the tag of the release above."),(0,n.kt)("h3",{id:"issues"},"Issues"),(0,n.kt)("p",null,"Non-critical issues and features are always added to the next minor release milestone, by default."),(0,n.kt)("p",null,"Critical issues, with no work-arounds, are added to the next patch release."),(0,n.kt)("h3",{id:"branches-and-prs"},"Branches and PRs"),(0,n.kt)("p",null,"Release branches and PRs are managed as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All changes are always first committed to ",(0,n.kt)("inlineCode",{parentName:"li"},"master"),"."),(0,n.kt)("li",{parentName:"ul"},"Branches are created for each major or minor release."),(0,n.kt)("li",{parentName:"ul"},"The branch name will contain the version, for example release-1.2."),(0,n.kt)("li",{parentName:"ul"},"Patch releases are created from a release branch."),(0,n.kt)("li",{parentName:"ul"},"For critical fixes that need to be included in a patch release, PRs should always be first merged to master and then cherry-picked to the release branch. PRs need to be guaranteed to have a release note written and these descriptions will be reflected in the next patch release.\nThe cherry-pick process of PRs is executed through the script. See usage ",(0,n.kt)("a",{parentName:"li",href:"https://karmada.io/docs/contributor/cherry-picks"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},"For complex changes, specially critical bugfixes, separate PRs may be required for master and release branches."),(0,n.kt)("li",{parentName:"ul"},"The milestone mark (for example v1.4) will be added to PRs which means changes in PRs are one of the contents of the corresponding release."),(0,n.kt)("li",{parentName:"ul"},"During PR review, the Assignee selection is used to indicate the reviewer.")),(0,n.kt)("h3",{id:"release-planning"},"Release Planning"),(0,n.kt)("p",null,"A minor release will contain a mix of features, enhancements, and bug fixes."),(0,n.kt)("p",null,"Major features follow the Karmada Design Proposal process. You can refer to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/karmada-io/karmada/tree/master/docs/proposals/resource-interpreter-webhook"},"here")," as a proposal example."),(0,n.kt)("p",null,"During the start of a release, there may be many issues assigned to the release milestone. The priorities for the release are discussed in the bi-weekly community meetings.\nAs the release progresses several issues may be moved to the next milestone. Hence, if an issue is important it is important to advocate its priority early in the release cycle."),(0,n.kt)("h3",{id:"release-artifacts"},"Release Artifacts"),(0,n.kt)("p",null,"The Karmada container images are availble at ",(0,n.kt)("inlineCode",{parentName:"p"},"dockerHub"),".\nYou can visit ",(0,n.kt)("inlineCode",{parentName:"p"},"https://hub.docker.com/r/karmada/<component_name>")," to see the details of images.\nFor example, ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/karmada/karmada-controller-manager"},"here")," for karmada-controller-manager."),(0,n.kt)("p",null,"Since v1.2.0, the following artifacts are uploaded:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"crds.tar.gz"),(0,n.kt)("li",{parentName:"ul"},"karmada-chart-v<version_number>.tgz"),(0,n.kt)("li",{parentName:"ul"},"karmadactl-darwin-amd64.tgz"),(0,n.kt)("li",{parentName:"ul"},"karmadactl-darwin-amd64.tgz.sha256"),(0,n.kt)("li",{parentName:"ul"},"karmadactl-darwin-arm64.tgz"),(0,n.kt)("li",{parentName:"ul"},"karmadactl-darwin-arm64.tgz.sha256"),(0,n.kt)("li",{parentName:"ul"},"karmadactl-linux-amd64.tgz"),(0,n.kt)("li",{parentName:"ul"},"karmadactl-linux-amd64.tgz.sha256"),(0,n.kt)("li",{parentName:"ul"},"karmadactl-linux-arm64.tgz"),(0,n.kt)("li",{parentName:"ul"},"karmadactl-linux-arm64.tgz.sha256"),(0,n.kt)("li",{parentName:"ul"},"kubectl-karmada-darwin-amd64.tgz"),(0,n.kt)("li",{parentName:"ul"},"kubectl-karmada-darwin-amd64.tgz.sha256"),(0,n.kt)("li",{parentName:"ul"},"kubectl-karmada-darwin-arm64.tgz"),(0,n.kt)("li",{parentName:"ul"},"kubectl-karmada-darwin-arm64.tgz.sha256"),(0,n.kt)("li",{parentName:"ul"},"kubectl-karmada-linux-amd64.tgz"),(0,n.kt)("li",{parentName:"ul"},"kubectl-karmada-linux-amd64.tgz.sha256"),(0,n.kt)("li",{parentName:"ul"},"kubectl-karmada-linux-arm64.tgz"),(0,n.kt)("li",{parentName:"ul"},"kubectl-karmada-linux-arm64.tgz.sha256"),(0,n.kt)("li",{parentName:"ul"},"Source code(zip)"),(0,n.kt)("li",{parentName:"ul"},"Source code(tar.gz)")),(0,n.kt)("p",null,"You can visit ",(0,n.kt)("inlineCode",{parentName:"p"},"https://github.com/karmada-io/karmada/releases/download/v<version_number>/<artifact_name>")," to download the artifacts above."),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://github.com/karmada-io/karmada/releases/download/v1.3.0/karmadactl-darwin-amd64.tgz\n")))}d.isMDXComponent=!0}}]);