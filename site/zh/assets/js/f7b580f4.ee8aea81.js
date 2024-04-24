"use strict";(self.webpackChunk_project_hami_website=self.webpackChunk_project_hami_website||[]).push([[8514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||c[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={title:"GitHub Workflow",description:"An overview of the GitHub workflow used by the Karmada project. It includes some tips and suggestions on things such as keeping your local environment in sync with upstream and commit hygiene."},i=void 0,l={unversionedId:"contributor/github-workflow",id:"contributor/github-workflow",title:"GitHub Workflow",description:"An overview of the GitHub workflow used by the Karmada project. It includes some tips and suggestions on things such as keeping your local environment in sync with upstream and commit hygiene.",source:"@site/docs/contributor/github-workflow.md",sourceDirName:"contributor",slug:"/contributor/github-workflow",permalink:"/zh/docs/next/contributor/github-workflow",draft:!1,editUrl:"https://github.com/karmada-io/website/edit/main/docs/contributor/github-workflow.md",tags:[],version:"current",lastUpdatedBy:"limengxuan",lastUpdatedAt:1713177637,formattedLastUpdatedAt:"2024\u5e744\u670815\u65e5",frontMatter:{title:"GitHub Workflow",description:"An overview of the GitHub workflow used by the Karmada project. It includes some tips and suggestions on things such as keeping your local environment in sync with upstream and commit hygiene."},sidebar:"docs",previous:{title:"How to cherry-pick PRs",permalink:"/zh/docs/next/contributor/cherry-picks"},next:{title:"How to manage lifted codes",permalink:"/zh/docs/next/contributor/lifted"}},s={},m=[{value:"1 Fork in the cloud",id:"1-fork-in-the-cloud",level:3},{value:"2 Clone fork to local storage",id:"2-clone-fork-to-local-storage",level:3},{value:"3 Branch",id:"3-branch",level:3},{value:"4 Keep your branch in sync",id:"4-keep-your-branch-in-sync",level:3},{value:"5 Commit",id:"5-commit",level:3},{value:"6 Push",id:"6-push",level:3},{value:"7 Create a pull request",id:"7-create-a-pull-request",level:3},{value:"Get a code review",id:"get-a-code-review",level:4},{value:"Squash commits",id:"squash-commits",level:4},{value:"Merging a commit",id:"merging-a-commit",level:3},{value:"Reverting a commit",id:"reverting-a-commit",level:3}],u={toc:m};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This doc is lifted from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/community/blob/master/contributors/guide/github-workflow.md"},"Kubernetes github-workflow"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Git workflow",src:n(8674).Z,width:"1736",height:"1026"})),(0,a.kt)("h3",{id:"1-fork-in-the-cloud"},"1 Fork in the cloud"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Visit ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/karmada-io/karmada"},"https://github.com/karmada-io/karmada")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Fork")," button (top right) to establish a cloud-based fork.")),(0,a.kt)("h3",{id:"2-clone-fork-to-local-storage"},"2 Clone fork to local storage"),(0,a.kt)("p",null,"Per Go's ",(0,a.kt)("a",{parentName:"p",href:"https://golang.org/doc/code.html#Workspaces"},"workspace instructions"),", place Karmada' code on your\n",(0,a.kt)("inlineCode",{parentName:"p"},"GOPATH")," using the following cloning procedure."),(0,a.kt)("p",null,"Define a local working directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# If your GOPATH has multiple paths, pick\n# just one and use it instead of $GOPATH here.\n# You must follow exactly this pattern,\n# neither `$GOPATH/src/github.com/${your github profile name/`\n# nor any other pattern will work.\nexport working_dir="$(go env GOPATH)/src/github.com/karmada-io"\n')),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," to match your github profile name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"export user={your github profile name}\n")),(0,a.kt)("p",null,"Both ",(0,a.kt)("inlineCode",{parentName:"p"},"$working_dir")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"$user")," are mentioned in the figure above."),(0,a.kt)("p",null,"Create your clone:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir -p $working_dir\ncd $working_dir\ngit clone https://github.com/$user/karmada.git\n# or: git clone git@github.com:$user/karmada.git\n\ncd $working_dir/karmada\ngit remote add upstream https://github.com/karmada-io/karmada.git\n# or: git remote add upstream git@github.com:karmada-io/karmada.git\n\n# Never push to upstream master\ngit remote set-url --push upstream no_push\n\n# Confirm that your remotes make sense:\ngit remote -v\n")),(0,a.kt)("h3",{id:"3-branch"},"3 Branch"),(0,a.kt)("p",null,"Get your local master up to date:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Depending on which repository you are working from,\n# the default branch may be called 'main' instead of 'master'.\n\ncd $working_dir/karmada\ngit fetch upstream\ngit checkout master\ngit rebase upstream/master\n")),(0,a.kt)("p",null,"Branch from it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout -b myfeature\n")),(0,a.kt)("p",null,"Then edit code on the ",(0,a.kt)("inlineCode",{parentName:"p"},"myfeature")," branch."),(0,a.kt)("h3",{id:"4-keep-your-branch-in-sync"},"4 Keep your branch in sync"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Depending on which repository you are working from,\n# the default branch may be called 'main' instead of 'master'.\n\n# While on your myfeature branch\ngit fetch upstream\ngit rebase upstream/master\n")),(0,a.kt)("p",null,"Please don't use ",(0,a.kt)("inlineCode",{parentName:"p"},"git pull")," instead of the above ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"rebase"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"git pull"),"\ndoes a merge, which leaves merge commits. These make the commit history messy\nand violate the principle that commits ought to be individually understandable\nand useful (see below). You can also consider changing your ",(0,a.kt)("inlineCode",{parentName:"p"},".git/config")," file via\n",(0,a.kt)("inlineCode",{parentName:"p"},"git config branch.autoSetupRebase always")," to change the behavior of ",(0,a.kt)("inlineCode",{parentName:"p"},"git pull"),", or another non-merge option such as ",(0,a.kt)("inlineCode",{parentName:"p"},"git pull --rebase"),"."),(0,a.kt)("h3",{id:"5-commit"},"5 Commit"),(0,a.kt)("p",null,"Commit your changes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git commit --signoff\n")),(0,a.kt)("p",null,"Likely you go back and edit/build/test some more then ",(0,a.kt)("inlineCode",{parentName:"p"},"commit --amend"),"\nin a few cycles."),(0,a.kt)("h3",{id:"6-push"},"6 Push"),(0,a.kt)("p",null,"When ready to review (or just to establish an offsite backup of your work),\npush your branch to your fork on ",(0,a.kt)("inlineCode",{parentName:"p"},"github.com"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git push -f ${your_remote_name} myfeature\n")),(0,a.kt)("h3",{id:"7-create-a-pull-request"},"7 Create a pull request"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Visit your fork at ",(0,a.kt)("inlineCode",{parentName:"li"},"https://github.com/$user/karmada")),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("inlineCode",{parentName:"li"},"Compare & Pull Request")," button next to your ",(0,a.kt)("inlineCode",{parentName:"li"},"myfeature")," branch.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If you have upstream write access"),", please refrain from using the GitHub UI for\ncreating PRs, because GitHub will create the PR branch inside the main\nrepository rather than inside your fork."),(0,a.kt)("h4",{id:"get-a-code-review"},"Get a code review"),(0,a.kt)("p",null,"Once your pull request has been opened it will be assigned to one or more\nreviewers.  Those reviewers will do a thorough code review, looking for\ncorrectness, bugs, opportunities for improvement, documentation and comments,\nand style."),(0,a.kt)("p",null,"Commit changes made in response to review comments to the same branch on your\nfork."),(0,a.kt)("p",null,"Very small PRs are easy to review.  Very large PRs are very difficult to review."),(0,a.kt)("h4",{id:"squash-commits"},"Squash commits"),(0,a.kt)("p",null,"After a review, prepare your PR for merging by squashing your commits."),(0,a.kt)("p",null,"All commits left on your branch after a review should represent meaningful milestones or units of work. Use commits to add clarity to the development and review process."),(0,a.kt)("p",null,"Before merging a PR, squash the following kinds of commits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixes/review feedback"),(0,a.kt)("li",{parentName:"ul"},"Typos"),(0,a.kt)("li",{parentName:"ul"},"Merges and rebases"),(0,a.kt)("li",{parentName:"ul"},"Work in progress")),(0,a.kt)("p",null,"Aim to have every commit in a PR compile and pass tests independently if you can, but it's not a requirement. In particular, ",(0,a.kt)("inlineCode",{parentName:"p"},"merge")," commits must be removed, as they will not pass tests."),(0,a.kt)("p",null,"To squash your commits, perform an ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History"},"interactive\nrebase"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check your git branch:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"git status\n")))),(0,a.kt)("p",null,"Output is similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"On branch your-contribution\nYour branch is up to date with 'origin/your-contribution'.\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start an interactive rebase using a specific commit hash, or count backwards from your last commit using ",(0,a.kt)("inlineCode",{parentName:"p"},"HEAD~<n>"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"<n>")," represents the number of commits to include in the rebase."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"git rebase -i HEAD~3\n")))),(0,a.kt)("p",null,"Output is similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'pick 2ebe926 Original commit\npick 31f33e9 Address feedback\npick b0315fe Second unit of work\n\n# Rebase 7c34fc9..b0315ff onto 7c34fc9 (3 commands)\n#\n# Commands:\n# p, pick <commit> = use commit\n# r, reword <commit> = use commit, but edit the commit message\n# e, edit <commit> = use commit, but stop for amending\n# s, squash <commit> = use commit, but meld into previous commit\n# f, fixup <commit> = like "squash", but discard this commit\'s log message\n\n...\n\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use a command line text editor to change the word ",(0,a.kt)("inlineCode",{parentName:"p"},"pick")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"squash")," for the commits you want to squash, then save your changes and continue the rebase:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"pick 2ebe926 Original commit\nsquash 31f33e9 Address feedback\npick b0315fe Second unit of work\n\n...\n\n")))),(0,a.kt)("p",null,"Output (after saving changes) is similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[detached HEAD 61fdded] Second unit of work\n Date: Thu Mar 5 19:01:32 2020 +0100\n 2 files changed, 15 insertions(+), 1 deletion(-)\n\n ...\n\nSuccessfully rebased and updated refs/heads/master.\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Force push your changes to your remote branch:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"git push --force\n")))),(0,a.kt)("p",null,"For mass automated fixups (e.g. automated doc formatting), use one or more\ncommits for the changes to tooling and a final commit to apply the fixup en\nmasse. This makes reviews easier."),(0,a.kt)("h3",{id:"merging-a-commit"},"Merging a commit"),(0,a.kt)("p",null,"Once you've received review and approval, your commits are squashed, your PR is ready for merging."),(0,a.kt)("p",null,"Merging happens automatically after both a  Reviewer and Approver have approved the PR. If you haven't squashed your commits, they may ask you to do so before approving a PR."),(0,a.kt)("h3",{id:"reverting-a-commit"},"Reverting a commit"),(0,a.kt)("p",null,"In case you wish to revert a commit, use the following instructions."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If you have upstream write access"),", please refrain from using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Revert")," button in the GitHub UI for creating the PR, because GitHub\nwill create the PR branch inside the main repository rather than inside your fork."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create a branch and sync it with upstream."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Depending on which repository you are working from,\n# the default branch may be called 'main' instead of 'master'.\n\n# create a branch\ngit checkout -b myrevert\n\n# sync the branch with upstream\ngit fetch upstream\ngit rebase upstream/master\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the commit you wish to revert is a:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"merge commit:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# SHA is the hash of the merge commit you wish to revert\ngit revert -m 1 SHA\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"single commit:")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# SHA is the hash of the single commit you wish to revert\ngit revert SHA\n"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This will create a new commit reverting the changes. Push this new commit to your remote."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git push ${your_remote_name} myrevert\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#7-create-a-pull-request"},"Create a Pull Request")," using this branch.")))}c.isMDXComponent=!0},8674:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/git_workflow-1393ff8892894802bcc20dbd8e9d9e7c.png"}}]);