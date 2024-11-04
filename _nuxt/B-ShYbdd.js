import{_ as $}from"./Cvpy_CI0.js";import C from"./neHLR0Nb.js";import{g as w,o as b,c as B,l as E,n as N,m as u,p as S,a as t,q as f,v as y,i as g,s as v,b as m,w as p,d as x,e as q}from"./hp5d10Ce.js";import{u as L}from"./Cw83A_A0.js";import{E as k}from"./QBwLtVxC.js";import{u as V}from"./DywMN9It.js";import{_ as z}from"./t-qc3aWD.js";import"./RkIcayXh.js";const j=w({__name:"Button",props:{size:{default:"md"},block:{type:Boolean},styleName:{default:"primary"},className:{}},setup(_){const r={md:"px-5 py-2.5",lg:"px-6 py-3"},s={outline:"border-2 border-black hover:bg-black text-black hover:text-white",primary:"bg-black text-white hover:bg-slate-900  border-2 border-transparent"};return(o,n)=>(b(),B("button",{class:N(["rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",o.block&&"w-full",r[o.size],s[o.styleName],o.className])},[E(o.$slots,"default")],2))}}),A={id:"form",class:"needs-validation",novalidate:""},I={class:"mb-5"},T={class:"mb-5"},U={class:"mb-3"},M={__name:"Contactform",setup(_){const r=u(!1);S(()=>{const i=document.getElementById("form");document.getElementById("result"),i.addEventListener("submit",function(e){if(e.preventDefault(),i.classList.add("was-validated"),!i.checkValidity()){i.querySelectorAll(":invalid")[0].focus();return}r.value=!0,r.value&&h()})});const{apiBaseUrl:s}=L(),o=V(),n=u(""),a=u(""),l=u(""),h=async()=>{if(!r.value)return;r.value=!1;const i=o.user;try{const e=await fetch(s.value+"issues/new",{method:"POST",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"},body:JSON.stringify({email:n.value,body:a.value,callname:l.value})}),c=e.json();if(e.ok)k({duration:1e3,message:"反馈已提交",type:"success"}),a.value="",l.value="",n.value="";else throw k.error("反馈失败o(╥﹏╥)o"),new Error(c.msg)}catch(e){console.error("Login error:",e)}};return(i,e)=>{const c=j;return b(),B("form",A,[e[9]||(e[9]=t("input",{type:"checkbox",class:"hidden",style:{display:"none"},name:"botcheck"},null,-1)),t("div",I,[f(t("input",{type:"text",placeholder:"称谓","onUpdate:modelValue":e[0]||(e[0]=d=>v(l)?l.value=d:null),required:"",class:"w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100",name:"name"},null,512),[[y,g(l)]]),e[3]||(e[3]=t("div",{class:"empty-feedback invalid-feedback text-red-400 text-sm mt-1"}," 请提供您的称呼 ",-1))]),t("div",T,[e[4]||(e[4]=t("label",{for:"email_address",class:"sr-only"},"邮箱地址",-1)),f(t("input",{id:"email_address",type:"email","onUpdate:modelValue":e[1]||(e[1]=d=>v(n)?n.value=d:null),placeholder:"邮箱地址",name:"email",required:"",class:"w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"},null,512),[[y,g(n)]]),e[5]||(e[5]=t("div",{class:"empty-feedback text-red-400 text-sm mt-1"}," 请提供您的邮箱地址。 ",-1)),e[6]||(e[6]=t("div",{class:"invalid-feedback text-red-400 text-sm mt-1"}," 请提供有效的邮箱地址。 ",-1))]),t("div",U,[f(t("textarea",{name:"message","onUpdate:modelValue":e[2]||(e[2]=d=>v(a)?a.value=d:null),required:"",placeholder:"您的反馈信息",class:"w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"},null,512),[[y,g(a)]]),e[7]||(e[7]=t("div",{class:"empty-feedback invalid-feedback text-red-400 text-sm mt-1"}," 输入您的反馈信息 ",-1))]),m(c,{type:"submit",size:"lg",block:""},{default:p(()=>e[8]||(e[8]=[x("提交反馈")])),_:1}),e[10]||(e[10]=t("div",{id:"result",class:"mt-3 text-center"},null,-1))])}}},D={class:"grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16"},O={class:"mt-5"},F={class:"flex items-center mt-2 space-x-2 text-gray-600"},J={class:"flex items-center mt-2 space-x-2 text-gray-600"},Y=w({__name:"contact",setup(_){return(r,s)=>{const o=$,n=C,a=M,l=z;return b(),q(l,null,{default:p(()=>[m(o,null,{title:p(()=>s[0]||(s[0]=[x("反馈")])),desc:p(()=>s[1]||(s[1]=[x("我们衷心等待您的建议")])),_:1}),t("div",D,[t("div",null,[s[4]||(s[4]=t("h2",{class:"font-medium text-2xl text-gray-800"}," 联系FaceSwap的创建者 ",-1)),s[5]||(s[5]=t("p",{class:"text-lg leading-relaxed text-slate-500 mt-3"}," 你有什么想告诉我们的吗？我在这里随时恭候，您可以选择联系下方的地址，也可以填写右边的表单，我们会及时回复。 ",-1)),t("div",O,[t("div",F,[m(n,{class:"text-gray-400 w-4 h-4",name:"uil:map-marker"}),s[2]||(s[2]=t("span",null,"湖北，武汉，珞珈山职业技术学校",-1))]),t("div",J,[m(n,{class:"text-gray-400 w-4 h-4",name:"uil:envelope"}),s[3]||(s[3]=t("a",{href:"mailto:jakobaichmayr@gmail.com"},"1321533477@qq.com",-1))])])]),t("div",null,[m(a)])])]),_:1})}}});export{Y as default};