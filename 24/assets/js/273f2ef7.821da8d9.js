"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[6459],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>f});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,f=p["".concat(l,".").concat(d)]||p[d]||y[d]||s;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6841:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(8168),a=(t(6540),t(5680));const s={},o="Mul-arrays",i={unversionedId:"Lab 7 - Structures, vectors and strings/Arrays/Drills/Tasks/Mul Arrays/README",id:"Lab 7 - Structures, vectors and strings/Arrays/Drills/Tasks/Mul Arrays/README",title:"Mul-arrays",description:"You will solve the exercises starting from the mul_arrays.asm file located in the drills/tasks/mul-arrays directory.",source:"@site/docs/Lab 7 - Structures, vectors and strings/Arrays/Drills/Tasks/Mul Arrays/README.md",sourceDirName:"Lab 7 - Structures, vectors and strings/Arrays/Drills/Tasks/Mul Arrays",slug:"/Lab 7 - Structures, vectors and strings/Arrays/Drills/Tasks/Mul Arrays/",permalink:"/hardware-software-interface/24/Lab 7 - Structures, vectors and strings/Arrays/Drills/Tasks/Mul Arrays/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Finding a Substring in a String",permalink:"/hardware-software-interface/24/Lab 7 - Structures, vectors and strings/Arrays/Drills/Tasks/Find Substring/"},next:{title:"Courses",permalink:"/hardware-software-interface/24/Lab 7 - Structures, vectors and strings/Arrays/Drills/Tasks/Courses/"}},l={},c=[],u={toc:c},p="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"mul-arrays"},"Mul-arrays"),(0,a.yg)("p",null,"You will solve the exercises starting from the ",(0,a.yg)("inlineCode",{parentName:"p"},"mul_arrays.asm")," file located in the ",(0,a.yg)("inlineCode",{parentName:"p"},"drills/tasks/mul-arrays")," directory.\nWrite the Assembly instructions through which, for each pair of one-byte elements with identical indexes from ",(0,a.yg)("inlineCode",{parentName:"p"},"array1")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"array2"),", their product is saved in ",(0,a.yg)("inlineCode",{parentName:"p"},"array3"),".\nThen print ",(0,a.yg)("inlineCode",{parentName:"p"},"array3"),"."),(0,a.yg)("p",null,"The program's output after a correct solution should be:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Assembly"},"The array that results from the product of the corresponding elements in array1 and array2 is:\n405 12801 1330 59397 2024 6151 280 8449 289 48385\n")),(0,a.yg)("p",null,"Follow the comments marked with ",(0,a.yg)("strong",{parentName:"p"},"TODO"),"."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"IMPORTANT"),": The product should be computed between two one-byte numbers.\nTherefore, the result is stored on two bytes."),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/24/Lab%207%20-%20Structures,%20vectors%20and%20strings/Arrays/Reading/"},"this")," reading material."))}y.isMDXComponent=!0}}]);