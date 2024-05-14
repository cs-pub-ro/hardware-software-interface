"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[5614],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>g});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),y=a,g=c["".concat(l,".").concat(y)]||c[y]||m[y]||o;return t?n.createElement(g,i(i({ref:r},p),{},{components:t})):n.createElement(g,i({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5133:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(8168),a=(t(6540),t(5680));const o={},i="Grumpy Jumps",s={unversionedId:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Grumpy Jumps/README",id:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Grumpy Jumps/README",title:"Grumpy Jumps",description:"You will solve the exercises starting from the grumpy_jumps.asm file located in the drills/tasks/grumpy-jumps directory.",source:"@site/docs/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Grumpy Jumps/README.md",sourceDirName:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Grumpy Jumps",slug:"/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Grumpy Jumps/",permalink:"/hardware-software-interface/23/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Grumpy Jumps/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Conditional jumps",permalink:"/hardware-software-interface/23/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Conditional Jumps/"},next:{title:"Sets",permalink:"/hardware-software-interface/23/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Sets/"}},l={},u=[],p={toc:u},c="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(c,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"grumpy-jumps"},"Grumpy Jumps"),(0,a.yg)("p",null,"You will solve the exercises starting from the ",(0,a.yg)("inlineCode",{parentName:"p"},"grumpy_jumps.asm")," file located in the ",(0,a.yg)("inlineCode",{parentName:"p"},"drills/tasks/grumpy-jumps")," directory."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Modify the values of the ",(0,a.yg)("inlineCode",{parentName:"p"},"eax")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"ebx")," registers so that when the program is run, the message ",(0,a.yg)("inlineCode",{parentName:"p"},"Well done!")," is displayed.\nFollow the ",(0,a.yg)("inlineCode",{parentName:"p"},"TODO")," comments.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Why does the wrong message still appear?\nModify the source so that the wrong message is not displayed anymore."))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"TIP"),": To determine the necessary values for the ",(0,a.yg)("inlineCode",{parentName:"p"},"eax")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"ebx")," registers, we recommend using GDB.")),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/23/Lab%205%20-%20Introduction%20to%20Assembly%20Language/x86%20Architecture%20Family/Reading/"},"this")," reading material."))}m.isMDXComponent=!0}}]);