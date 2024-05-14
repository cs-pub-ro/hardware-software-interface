"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[8428],{5680:(e,r,t)=>{t.d(r,{xA:()=>d,yg:()=>g});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(t),y=o,g=c["".concat(p,".").concat(y)]||c[y]||u[y]||a;return t?n.createElement(g,i(i({ref:r},d),{},{components:t})):n.createElement(g,i({ref:r},d))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},4920:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(8168),o=(t(6540),t(5680));const a={},i="Loop",s={unversionedId:"Lab 6 - Registers and Memory Addressing/Memory Addressing/Guides/Loop/README",id:"Lab 6 - Registers and Memory Addressing/Memory Addressing/Guides/Loop/README",title:"Loop",description:"To follow this guide, you'll need to use the loop.asm file located in the guides/loop/support directory.",source:"@site/docs/Lab 6 - Registers and Memory Addressing/Memory Addressing/Guides/Loop/README.md",sourceDirName:"Lab 6 - Registers and Memory Addressing/Memory Addressing/Guides/Loop",slug:"/Lab 6 - Registers and Memory Addressing/Memory Addressing/Guides/Loop/",permalink:"/hardware-software-interface/23/Lab 6 - Registers and Memory Addressing/Memory Addressing/Guides/Loop/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Declarations",permalink:"/hardware-software-interface/23/Lab 6 - Registers and Memory Addressing/Memory Addressing/Guides/Declarations/"},next:{title:"Drills",permalink:"/hardware-software-interface/23/Lab 6 - Registers and Memory Addressing/Memory Addressing/Drills/"}},p={},l=[],d={toc:l},c="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(c,(0,n.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"loop"},"Loop"),(0,o.yg)("p",null,"To follow this guide, you'll need to use the ",(0,o.yg)("inlineCode",{parentName:"p"},"loop.asm")," file located in the ",(0,o.yg)("inlineCode",{parentName:"p"},"guides/loop/support")," directory."),(0,o.yg)("p",null,"This program illustrates how to use the ",(0,o.yg)("inlineCode",{parentName:"p"},"loop")," instruction, as well as how to index an array of ",(0,o.yg)("inlineCode",{parentName:"p"},"dwords"),"."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"Note"),": The ",(0,o.yg)("inlineCode",{parentName:"p"},"loop")," instruction jumps to the given label when the ",(0,o.yg)("inlineCode",{parentName:"p"},"count")," register is not equal to 0.\nIn the case of ",(0,o.yg)("inlineCode",{parentName:"p"},"x86")," the ",(0,o.yg)("inlineCode",{parentName:"p"},"count")," register is ",(0,o.yg)("inlineCode",{parentName:"p"},"ecx"),"."),(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"Note"),": For a detailed description of the ",(0,o.yg)("inlineCode",{parentName:"p"},"loop")," instruction check out the ",(0,o.yg)("a",{parentName:"p",href:"https://www.felixcloutier.com/x86/loop:loopcc"},"documentation"),".")))}u.isMDXComponent=!0}}]);