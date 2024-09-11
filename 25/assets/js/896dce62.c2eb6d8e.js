"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[2804],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>f});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),g=a,f=c["".concat(s,".").concat(g)]||c[g]||d[g]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(8168),a=(r(6540),r(5680));const o={},i="CTF",l={unversionedId:"Lab 12 - Capture The Flag/CTF/Reading/README",id:"Lab 12 - Capture The Flag/CTF/Reading/README",title:"CTF",description:"In this laboratory, you will have to apply most of the concepts presented throughout this course under the format of Capture-The-Flag tasks.",source:"@site/docs/Lab 12 - Capture The Flag/CTF/Reading/README.md",sourceDirName:"Lab 12 - Capture The Flag/CTF/Reading",slug:"/Lab 12 - Capture The Flag/CTF/Reading/",permalink:"/hardware-software-interface/25/Lab 12 - Capture The Flag/CTF/Reading/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"CTF",permalink:"/hardware-software-interface/25/Lab 12 - Capture The Flag/CTF/"},next:{title:"Drills",permalink:"/hardware-software-interface/25/Lab 12 - Capture The Flag/CTF/Drills/"}},s={},p=[{value:"Return Oriented Programming",id:"return-oriented-programming",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"ctf"},"CTF"),(0,a.yg)("p",null,"In this laboratory, you will have to apply most of the concepts presented throughout this course under the format of ",(0,a.yg)("inlineCode",{parentName:"p"},"Capture-The-Flag")," tasks.\nThese tasks will test your understanding and mastery of specific static and dynamic analysis methods and tools, the compilation process, assembly language - syntax, registers, memory handling, functions, - as well as your ability to identify and exploit simple buffer overflow vulnerabilities."),(0,a.yg)("h2",{id:"return-oriented-programming"},"Return Oriented Programming"),(0,a.yg)("p",null,"For the bonus exercise, you will have to use Return Oriented Programming (ROP).\nThis is a technique in which, if we have the ability to overwrite the return address, we execute ",(0,a.yg)("inlineCode",{parentName:"p"},"gadgets"),".\nThese ",(0,a.yg)("inlineCode",{parentName:"p"},"gadgets")," are simply portions of the existing code that end with a ",(0,a.yg)("inlineCode",{parentName:"p"},"ret")," instruction."),(0,a.yg)("p",null,"To determine the address of a gadget in a binary, there is the tool ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/JonathanSalwan/ROPgadget"},"ROPgadget"),".\nAlternatively, in ",(0,a.yg)("inlineCode",{parentName:"p"},"pwndbg"),", you can use a command like ",(0,a.yg)("inlineCode",{parentName:"p"},'rop --grep "pop rsi"'),"."))}d.isMDXComponent=!0}}]);