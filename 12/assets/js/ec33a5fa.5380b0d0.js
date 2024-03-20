"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[5720],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,m=d["".concat(l,".").concat(u)]||d[u]||f[u]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(8168),n=(r(6540),r(5680));const o={},i="Rotations",s={unversionedId:"Lab 1 - Number Representation/Binary and Hexadecimal/Drills/Tasks/Rotations/README",id:"Lab 1 - Number Representation/Binary and Hexadecimal/Drills/Tasks/Rotations/README",title:"Rotations",description:"You will solve the exercise starting from the file rotations.c located in the directory drills/tasks/rotations/.",source:"@site/docs/Lab 1 - Number Representation/Binary and Hexadecimal/Drills/Tasks/Rotations/README.md",sourceDirName:"Lab 1 - Number Representation/Binary and Hexadecimal/Drills/Tasks/Rotations",slug:"/Lab 1 - Number Representation/Binary and Hexadecimal/Drills/Tasks/Rotations/",permalink:"/hardware-software-interface/12/Lab 1 - Number Representation/Binary and Hexadecimal/Drills/Tasks/Rotations/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Conversions",permalink:"/hardware-software-interface/12/Lab 1 - Number Representation/Binary and Hexadecimal/Drills/Tasks/Conversions/"},next:{title:"Binary Even and Hexadecimal Odd",permalink:"/hardware-software-interface/12/Lab 1 - Number Representation/Binary and Hexadecimal/Drills/Tasks/Binary Even and Hexadecimal Odd/"}},l={},c=[],p={toc:c},d="wrapper";function f(e){let{components:t,...o}=e;return(0,n.yg)(d,(0,a.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"rotations"},"Rotations"),(0,n.yg)("p",null,"You will solve the exercise starting from the file ",(0,n.yg)("inlineCode",{parentName:"p"},"rotations.c")," located in the directory ",(0,n.yg)("inlineCode",{parentName:"p"},"drills/tasks/rotations/"),"."),(0,n.yg)("p",null,"Implement left and right rotations for 32-bit integers in C."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"TIP"),": The rotation operation (also known as circular shift) is similar to the shift operation, with the only difference being that the empty space generated by the shift is filled with the discarded bit."),(0,n.yg)("p",{parentName:"blockquote"},"Example of ",(0,n.yg)("strong",{parentName:"p"},"left")," rotation by ",(0,n.yg)("strong",{parentName:"p"},"one")," bit:"),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("img",{alt:"Left Logical Rotation",src:r(3304).A})),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"NOTE"),":"),(0,n.yg)("pre",{parentName:"blockquote"},(0,n.yg)("code",{parentName:"pre",className:"language-c"},"rotate_left(0x80000000, 1)   = 1\nrotate_right(0x00000001, 16) = 65536\n"))),(0,n.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,n.yg)("a",{parentName:"p",href:"/hardware-software-interface/12/Lab%201%20-%20Number%20Representation/Binary%20and%20Hexadecimal/Reading/#logical-shifts"},"this")," reading material."))}f.isMDXComponent=!0},3304:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/left-logical-rotation-f0583e0d308391ed199c78ffeddb9ffa.svg"}}]);