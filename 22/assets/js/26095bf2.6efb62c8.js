"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[8127],{5680:(e,r,t)=>{t.d(r,{xA:()=>g,yg:()=>y});var a=t(6540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},g=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),f=c(t),p=n,y=f["".concat(s,".").concat(p)]||f[p]||u[p]||o;return t?a.createElement(y,i(i({ref:r},g),{},{components:t})):a.createElement(y,i({ref:r},g))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[f]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5230:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(8168),n=(t(6540),t(5680));const o={},i="Carry Flag - Overflow Flag",l={unversionedId:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Carry Flag - Overflow Flag/README",id:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Carry Flag - Overflow Flag/README",title:"Carry Flag - Overflow Flag",description:"You will solve this exercises starting from the of.asm, cf.asm and cf_of.asm files located in the drills/tasks/cf-of directory.",source:"@site/docs/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Carry Flag - Overflow Flag/README.md",sourceDirName:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Carry Flag - Overflow Flag",slug:"/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Carry Flag - Overflow Flag/",permalink:"/hardware-software-interface/22/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Carry Flag - Overflow Flag/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Fibonacci",permalink:"/hardware-software-interface/22/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Fibonacci/"},next:{title:"Lab 6 - Registers and Memory Addressing",permalink:"/hardware-software-interface/22/Lab 6 - Registers and Memory Addressing/"}},s={},c=[],g={toc:c},f="wrapper";function u(e){let{components:r,...t}=e;return(0,n.yg)(f,(0,a.A)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"carry-flag---overflow-flag"},"Carry Flag - Overflow Flag"),(0,n.yg)("p",null,"You will solve this exercises starting from the ",(0,n.yg)("inlineCode",{parentName:"p"},"of.asm"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"cf.asm")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"cf_of.asm")," files located in the ",(0,n.yg)("inlineCode",{parentName:"p"},"drills/tasks/cf-of")," directory."),(0,n.yg)("p",null,"Using the ",(0,n.yg)("inlineCode",{parentName:"p"},"add")," instruction on the ",(0,n.yg)("inlineCode",{parentName:"p"},"al")," register:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Set the ",(0,n.yg)("inlineCode",{parentName:"p"},"OF")," flag")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Set the ",(0,n.yg)("inlineCode",{parentName:"p"},"CF")," flag")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Set both flags simultaneously."))),(0,n.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,n.yg)("a",{parentName:"p",href:"/hardware-software-interface/22/Lab%205%20-%20Introduction%20to%20Assembly%20Language/x86%20Architecture%20Family/Reading/"},"this")," reading material."))}u.isMDXComponent=!0}}]);