import{o as B,E as U}from"./RkIcayXh.js";import{_ as F}from"./BFARai62.js";import{_ as L}from"./t-qc3aWD.js";import{u as N}from"./Cw83A_A0.js";import{_ as x,o as n,c as r,a as t,K as $,g as T,m as y,aT as I,p as M,N as j,e as D,w as f,i as s,q as k,a8 as S,n as E,F as m,r as A,t as g,b as u,d as h,l as V}from"./hp5d10Ce.js";import{u as q}from"./DywMN9It.js";import"./DhrOFAGE.js";const G=["src"],H={__name:"Avatar",props:{avatarSrc:{type:String,required:!0},profileUrl:{type:String,required:!0}},setup(d,{expose:e}){const c=()=>{$("/person")};return e({navigateToProfile:c}),(p,l)=>(n(),r("div",{onClick:c},[t("img",{src:d.avatarSrc,alt:"Profile Avatar",class:"avatar"},null,8,G)]))}},W=x(H,[["__scopeId","data-v-aa7524b2"]]),P={class:"flex flex-col lg:flex-row justify-between items-center my-5"},K={class:"flex w-full lg:w-auto items-center justify-between"},R={class:"block lg:hidden"},Y={fill:"currentColor",class:"w-4 h-4",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},J={"fill-rule":"evenodd","clip-rule":"evenodd",d:"M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"},O={"fill-rule":"evenodd",d:"M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"},Q={class:"flex flex-col lg:flex-row lg:gap-3"},X=["href"],Z=["href"],tt={key:0,class:"flex w-32 gap-4 items-center"},et={key:1,class:"hidden lg:flex items-center gap-4"},at="#c8c8c8",st=T({__name:"Navbar",setup(d){const e=q(),c=[{title:"换脸",path:"/swap"},{title:"充值",path:"/pricing"},{title:"关于",path:"/about"},{title:"反馈",path:"/contact"}],p=[{title:"换脸",path:"/login"},{title:"充值",path:"/login"},{title:"关于",path:"/login"},{title:"反馈",path:"/login"}],l=y(!1);I();const{apiBaseUrl:C}=N(),v=async()=>{const w=e.user;try{const a=await fetch(C.value+"auth/get_userinfo",{method:"GET",headers:{Authorization:`Bearer ${w}`}}),o=await a.json();if(a.ok){e.username=o.username,e.signature=o.signature,o.email!=null&&(e.email=o.email),e.times=o.times;let _="data:image/png;base64,"+o.avatar;const i=y(_);e.avatar=_}}catch{}};M(()=>{e.restoreState(),e.isAuthenticated&&v()}),j(()=>{e.restoreState(),e.isAuthenticated&&v()});function z(){e.logout(),$("/")}return(w,a)=>{const o=U,b=F,_=L;return n(),D(_,null,{default:f(()=>[t("header",P,[t("div",K,[a[2]||(a[2]=t("a",{href:"/",class:"text-lg"},[t("span",{class:"font-bold text-slate-800"},"Face"),t("span",{class:"text-slate-500"},"swap")],-1)),t("div",R,[t("button",{onClick:a[0]||(a[0]=i=>l.value=!s(l)),class:"text-gray-800"},[(n(),r("svg",Y,[a[1]||(a[1]=t("title",null,"Menu",-1)),k(t("path",J,null,512),[[S,s(l)]]),k(t("path",O,null,512),[[S,!s(l)]])]))])])]),t("nav",{class:E(["w-full lg:w-auto mt-2 lg:flex lg:mt-0",{block:s(l),hidden:!s(l)}])},[t("ul",Q,[s(e).isAuthenticated?(n(),r(m,{key:0},A(c,i=>t("li",null,[t("a",{href:i.path,class:"flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"},g(i.title),9,X)])),64)):(n(),r(m,{key:1},A(p,i=>t("li",null,[t("a",{href:i.path,class:"flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"},g(i.title),9,Z)])),64))])],2),t("div",null,[s(e).isAuthenticated?(n(),r("div",tt,[u(W,{avatarSrc:s(e).avatar,class:"hover:scale-125",profileUrl:"/person"},null,8,["avatarSrc"]),t("button",{onClick:z},[u(o,{color:at,class:"rounded-full",style:{"font-size":"24px"}},{default:f(()=>[u(s(B))]),_:1})])])):(n(),r("div",et,[a[4]||(a[4]=t("a",{href:"/login"},"登录",-1)),u(b,{href:"/register",size:"md"},{default:f(()=>a[3]||(a[3]=[h("注册")])),_:1})]))])])]),_:1})}}}),nt={},ot={class:"my-20"},rt={class:"text-center text-sm text-slate-500"};function lt(d,e){return n(),r("footer",ot,[t("p",rt," Copyright © "+g(new Date().getFullYear())+" Faceswap. All rights reserved. ",1),e[0]||(e[0]=t("p",{class:"text-center text-xs text-slate-500 mt-1"},[h(" Made by "),t("a",{href:"https://github.com/Gr33nW33n",target:"_blank",rel:"noopener",class:"hover:underline"}," Gr33nW33n "),h(" with attribution to "),t("a",{href:"https://web3templates.com",target:"_blank",rel:"noopener",class:"hover:underline"}," Web3Templates ")],-1))])}const it=x(nt,[["render",lt]]),ct={};function ut(d,e){const c=st,p=it;return n(),r(m,null,[u(c),V(d.$slots,"default"),u(p)],64)}const xt=x(ct,[["render",ut]]);export{xt as default};