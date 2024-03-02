"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[427],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>g});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,g=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return t?n.createElement(g,i(i({ref:r},p),{},{components:t})):n.createElement(g,i({ref:r},p))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},839:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(8168),a=(t(6540),t(5680));const o={},i="**Deleting the First Occurrence of a Pattern from a String**",s={unversionedId:"Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Deleting the First Occurrence of a Pattern from a String/README",id:"Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Deleting the First Occurrence of a Pattern from a String/README",title:"**Deleting the First Occurrence of a Pattern from a String**",description:"You will solve the exercise starting from the delete-first.c file located in the drills/tasks/delete-first/support directory.",source:"@site/docs/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Deleting the First Occurrence of a Pattern from a String/README.md",sourceDirName:"Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Deleting the First Occurrence of a Pattern from a String",slug:"/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Deleting the First Occurrence of a Pattern from a String/",permalink:"/hardware-software-interface/5/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Deleting the First Occurrence of a Pattern from a String/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"**Iterating through an Integer Array**",permalink:"/hardware-software-interface/5/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Iterating through an Integer Array/"},next:{title:"**Pixels**",permalink:"/hardware-software-interface/5/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Drills/Tasks/Pixels/"}},c={},l=[],p={toc:l},u="wrapper";function f(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"deleting-the-first-occurrence-of-a-pattern-from-a-string"},(0,a.yg)("strong",{parentName:"h1"},"Deleting the First Occurrence of a Pattern from a String")),(0,a.yg)("p",null,"You will solve the exercise starting from the ",(0,a.yg)("strong",{parentName:"p"},"delete-first.c")," file located in the ",(0,a.yg)("strong",{parentName:"p"},"drills/tasks/delete-first/support")," directory."),(0,a.yg)("p",null,"Given a string and a pattern, implement the ",(0,a.yg)("inlineCode",{parentName:"p"},"delete_first(char *s, char *pattern)")," function that returns the string obtained by removing the first occurrence of the pattern in ",(0,a.yg)("inlineCode",{parentName:"p"},"s"),"."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"NOTE:")," For ",(0,a.yg)("inlineCode",{parentName:"p"},'s = "Ana are mere"')," and ",(0,a.yg)("inlineCode",{parentName:"p"},'pattern = "re"'),', the function should return the string "Ana a mere".'),(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"IMPORTANT:")," Warning"),(0,a.yg)("pre",{parentName:"blockquote"},(0,a.yg)("code",{parentName:"pre",className:"language-c"},'char *s = "Ana are mere" allocates the string in a read-only memory area (immutable content);\nchar s[] = "Ana are mere" allocates the string in a read-write memory area (modifiable content);\n'))))}f.isMDXComponent=!0}}]);