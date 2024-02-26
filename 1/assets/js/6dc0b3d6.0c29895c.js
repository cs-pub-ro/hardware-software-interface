"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[907],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6776:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(8168),a=(r(6540),r(5680));const i={},o="Length and Equality with Bitwise Operations",s={unversionedId:"Lab 1 - Number Representation/Pointers in C/Drills/Tasks/Length and Equality with Bitwise Operations/README",id:"Lab 1 - Number Representation/Pointers in C/Drills/Tasks/Length and Equality with Bitwise Operations/README",title:"Length and Equality with Bitwise Operations",description:"You will solve the exercise starting from the file len_xor.c located in the directory drills/tasks/len-xor/support/.",source:"@site/docs/Lab 1 - Number Representation/Pointers in C/Drills/Tasks/Length and Equality with Bitwise Operations/README.md",sourceDirName:"Lab 1 - Number Representation/Pointers in C/Drills/Tasks/Length and Equality with Bitwise Operations",slug:"/Lab 1 - Number Representation/Pointers in C/Drills/Tasks/Length and Equality with Bitwise Operations/",permalink:"/hardware-software-interface/1/Lab 1 - Number Representation/Pointers in C/Drills/Tasks/Length and Equality with Bitwise Operations/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tasks",permalink:"/hardware-software-interface/1/Lab 1 - Number Representation/Pointers in C/Drills/Tasks/"},next:{title:"Reversing a String",permalink:"/hardware-software-interface/1/Lab 1 - Number Representation/Pointers in C/Drills/Tasks/Mirror/"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"length-and-equality-with-bitwise-operations"},"Length and Equality with Bitwise Operations"),(0,a.yg)("p",null,"You will solve the exercise starting from the file ",(0,a.yg)("inlineCode",{parentName:"p"},"len_xor.c")," located in the directory ",(0,a.yg)("inlineCode",{parentName:"p"},"drills/tasks/len-xor/support/"),"."),(0,a.yg)("p",null,"For a given string of characters, display:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"the length of the string"),(0,a.yg)("li",{parentName:"ul"},"the address of each character at position i that is equal to the character at position $i + 2^i$ (if $i + 2^i$ exceeds the size of the string, use the modulo operation)")),(0,a.yg)("p",null,"Use pointer operations and bitwise operations as much as possible!"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"NOTE"),": Do not use functions such as ",(0,a.yg)("inlineCode",{parentName:"p"},"strlen()"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"sizeof()"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"pow()"),", and do not check equality using ",(0,a.yg)("inlineCode",{parentName:"p"},"=="),".\nAlso, do not access string elements in the form of ",(0,a.yg)("inlineCode",{parentName:"p"},"s[i]"),".")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"TIP"),': For the string "aac":'),(0,a.yg)("pre",{parentName:"blockquote"},(0,a.yg)("code",{parentName:"pre",className:"language-text"},"length = 3\nAddress of a: 0x564c364482a0\nAddress of a: 0x564c364482a1\n")),(0,a.yg)("p",{parentName:"blockquote"},'For the string "ababababacccbacbacbacbacbabc":'),(0,a.yg)("pre",{parentName:"blockquote"},(0,a.yg)("code",{parentName:"pre",className:"language-text"},"length = 28\nAddress of b: 0x563f0da6f2a1\nAddress of a: 0x563f0da6f2a2\nAddress of c: 0x563f0da6f2a9\nAddress of a: 0x563f0da6f2b0\nAddress of b: 0x563f0da6f2b2\nAddress of b: 0x563f0da6f2b5\nAddress of c: 0x563f0da6f2b7\nAddress of a: 0x563f0da6f2b9\n")),(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"The above addresses are illustrative!"))),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/1/Lab%201%20-%20Number%20Representation/Pointers%20in%20C/Reading/"},"this")," reading material."))}d.isMDXComponent=!0}}]);