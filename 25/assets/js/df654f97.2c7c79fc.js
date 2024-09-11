"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[4896],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>f});var n=t(6540);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(t),c=s,f=m["".concat(u,".").concat(c)]||m[c]||d[c]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=c;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[m]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9496:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(8168),s=(t(6540),t(5680));const a={},i="Sum of first N natural numbers squared",o={unversionedId:"Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Sum of first N numbers squared/README",id:"Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Sum of first N numbers squared/README",title:"Sum of first N natural numbers squared",description:"You will solve this exercise starting from the sum_n.asm file located in the drills/tasks/sum-squared/support directory.",source:"@site/docs/Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Sum of first N numbers squared/README.md",sourceDirName:"Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Sum of first N numbers squared",slug:"/Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Sum of first N numbers squared/",permalink:"/hardware-software-interface/25/Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Sum of first N numbers squared/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Multiplying Two Numbers",permalink:"/hardware-software-interface/25/Lab 6 - Registers and Memory Addressing/Registers/Drills/Tasks/Multiply/"},next:{title:"Memory Addressing",permalink:"/hardware-software-interface/25/Lab 6 - Registers and Memory Addressing/Memory Addressing/"}},u={},l=[],p={toc:l},m="wrapper";function d(e){let{components:r,...t}=e;return(0,s.yg)(m,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"sum-of-first-n-natural-numbers-squared"},"Sum of first N natural numbers squared"),(0,s.yg)("p",null,"You will solve this exercise starting from the ",(0,s.yg)("inlineCode",{parentName:"p"},"sum_n.asm")," file located in the ",(0,s.yg)("inlineCode",{parentName:"p"},"drills/tasks/sum-squared/support")," directory."),(0,s.yg)("p",null,"In the ",(0,s.yg)("inlineCode",{parentName:"p"},"sum_n.asm")," program, the sum of the first ",(0,s.yg)("inlineCode",{parentName:"p"},"num")," natural numbers is calculated."),(0,s.yg)("p",null,"Follow the code, observe the constructions and registers specific to working with bytes.\nRun the code."),(0,s.yg)("blockquote",null,(0,s.yg)("p",{parentName:"blockquote"},(0,s.yg)("strong",{parentName:"p"},"IMPORTANT"),": Proceed to the next step only after you have understood very well what the code does.\nIt will be difficult for you to do the next exercise if you have difficulties understanding the current one.")),(0,s.yg)("p",null,"Start with the program ",(0,s.yg)("inlineCode",{parentName:"p"},"sum_n.asm")," and create a program ",(0,s.yg)("inlineCode",{parentName:"p"},"sum_n_square.asm")," that calculates the sum of squares of the first ",(0,s.yg)("inlineCode",{parentName:"p"},"num")," natural numbers (",(0,s.yg)("inlineCode",{parentName:"p"},"num")," <= 100)."),(0,s.yg)("blockquote",null,(0,s.yg)("p",{parentName:"blockquote"},(0,s.yg)("strong",{parentName:"p"},"TIP"),": You will use the ",(0,s.yg)("inlineCode",{parentName:"p"},"eax")," and ",(0,s.yg)("inlineCode",{parentName:"p"},"edx")," registers for multiplication to compute the squares (using the ",(0,s.yg)("inlineCode",{parentName:"p"},"mul")," instruction).\nTherefore, you cannot easily use the ",(0,s.yg)("inlineCode",{parentName:"p"},"eax")," register to store the sum of squares. To retain the sum of squares, you have two options:"),(0,s.yg)("ol",{parentName:"blockquote"},(0,s.yg)("li",{parentName:"ol"},"(easier) Use the ",(0,s.yg)("inlineCode",{parentName:"li"},"ebx")," register to store the sum of squares."),(0,s.yg)("li",{parentName:"ol"},"(more complex) Before performing operations on the ",(0,s.yg)("inlineCode",{parentName:"li"},"eax")," register, save its value on the stack (using the ",(0,s.yg)("inlineCode",{parentName:"li"},"push")," instruction), then perform the necessary operations, and finally restore the saved value (using the ",(0,s.yg)("inlineCode",{parentName:"li"},"pop")," instruction).")),(0,s.yg)("p",{parentName:"blockquote"},(0,s.yg)("strong",{parentName:"p"},"NOTE"),": For verification, the sum of squares of the first 100 natural numbers is ",(0,s.yg)("inlineCode",{parentName:"p"},"338350"),".")),(0,s.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,s.yg)("a",{parentName:"p",href:"/hardware-software-interface/25/Lab%206%20-%20Registers%20and%20Memory%20Addressing/Registers/Reading/"},"this")," reading material."))}d.isMDXComponent=!0}}]);