"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[9486],{5680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>m});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,m=u["".concat(c,".").concat(g)]||u[g]||y[g]||o;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4033:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(8168),a=(t(6540),t(5680));const o={},i="Iterating through an Integer Array",s={unversionedId:"Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Iterating through an Integer Array/README",id:"Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Iterating through an Integer Array/README",title:"Iterating through an Integer Array",description:"You will solve this exercise starting from the iterate.c file located in the drills/tasks/iterate/support directory.",source:"@site/docs/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Iterating through an Integer Array/README.md",sourceDirName:"Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Iterating through an Integer Array",slug:"/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Iterating through an Integer Array/",permalink:"/hardware-software-interface/24/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Iterating through an Integer Array/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tasks",permalink:"/hardware-software-interface/24/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/"},next:{title:"Deleting the First Occurrence of a Pattern from a String",permalink:"/hardware-software-interface/24/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Deleting the First Occurrence of a Pattern from a String/"}},c={},p=[],l={toc:p},u="wrapper";function y(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"iterating-through-an-integer-array"},"Iterating through an Integer Array"),(0,a.yg)("p",null,"You will solve this exercise starting from the ",(0,a.yg)("inlineCode",{parentName:"p"},"iterate.c")," file located in the ",(0,a.yg)("inlineCode",{parentName:"p"},"drills/tasks/iterate/support")," directory."),(0,a.yg)("p",null,"Here is the given piece of C code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},"#include <stdio.h>\n\nint main() {\n    int v[] = {0xCAFEBABE, 0xDEADBEEF, 0x0B00B135, 0xBAADF00D, 0xDEADC0DE};\n\n    return 0;\n}\n")),(0,a.yg)("p",null,"Display the addresses of the elements in the ",(0,a.yg)("inlineCode",{parentName:"p"},"v")," array along with their values.\nIterate through the addresses in ",(0,a.yg)("inlineCode",{parentName:"p"},"v")," byte by byte, two bytes at a time, and four bytes at a time."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"TIP:")," You can iterate through memory byte by byte starting from a specific address using a pointer of type ",(0,a.yg)("inlineCode",{parentName:"p"},"unsigned char*")," (since the ",(0,a.yg)("inlineCode",{parentName:"p"},"char")," type is represented by one byte)."),(0,a.yg)("pre",{parentName:"blockquote"},(0,a.yg)("code",{parentName:"pre",className:"language-c"},"unsigned char *char_ptr = v;\n")),(0,a.yg)("p",{parentName:"blockquote"},"For displaying the address and the value, you can use:"),(0,a.yg)("pre",{parentName:"blockquote"},(0,a.yg)("code",{parentName:"pre",className:"language-c"},'printf("%p -> 0x%x\\n", char_ptr, *char_ptr);\n'))),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/24/Lab%202%20-%20Memory%20Operations.%20Introduction%20to%20GDB/Memory%20Operations/Reading/#pointers-to-arrays"},"this")," reading material."))}y.isMDXComponent=!0}}]);