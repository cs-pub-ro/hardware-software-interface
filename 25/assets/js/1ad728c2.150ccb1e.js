"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[451],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=f(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,d=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var f={};for(var l in t)hasOwnProperty.call(t,l)&&(f[l]=t[l]);f.originalType=e,f[c]="string"==typeof e?e:a,i[1]=f;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3146:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>f,toc:()=>s});var n=r(8168),a=(r(6540),r(5680));const o={},i="Introduction to Buffers",f={unversionedId:"Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Reading/README",id:"Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Reading/README",title:"Introduction to Buffers",description:"This laboratory aims to present the concept of buffers in C and assembly language along with their specific operations, as well as the vulnerabilities they pose and how they can be exploited by a potential attacker using a program to attack a system or obtain information to which they would not normally have access.",source:"@site/docs/Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Reading/README.md",sourceDirName:"Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Reading",slug:"/Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Reading/",permalink:"/hardware-software-interface/25/Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Reading/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Introduction to Buffers",permalink:"/hardware-software-interface/25/Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/"},next:{title:"Drills",permalink:"/hardware-software-interface/25/Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Drills/"}},l={},s=[{value:"Objectives",id:"objectives",level:2},{value:"Buffer. Buffer Overflow",id:"buffer-buffer-overflow",level:2},{value:"What is a Buffer?",id:"what-is-a-buffer",level:3},{value:"What is a Buffer Overflow?",id:"what-is-a-buffer-overflow",level:3},{value:"How to make a Buffer Overflow?",id:"how-to-make-a-buffer-overflow",level:3},{value:"Infrastructure Preparation",id:"infrastructure-preparation",level:3}],u={toc:s},c="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"introduction-to-buffers"},"Introduction to Buffers"),(0,a.yg)("p",null,"This laboratory aims to present the concept of buffers in C and assembly language along with their specific operations, as well as the vulnerabilities they pose and how they can be exploited by a potential attacker using a program to attack a system or obtain information to which they would not normally have access."),(0,a.yg)("h2",{id:"objectives"},"Objectives"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Introducing the concepts of buffers and buffer overflow"),(0,a.yg)("li",{parentName:"ul"},"Examples of buffer overflow attacks"),(0,a.yg)("li",{parentName:"ul"},"Presentation of ways to secure programs to prevent buffer overflow attacks")),(0,a.yg)("h2",{id:"buffer-buffer-overflow"},"Buffer. Buffer Overflow"),(0,a.yg)("h3",{id:"what-is-a-buffer"},"What is a Buffer?"),(0,a.yg)("p",null,"A buffer is a memory area defined by a start address and a size.\nLet N be the size of the buffer, for example, the number of elements.\nThe total size of the buffer is N times the size of one element.\nA string is a specific case of a buffer."),(0,a.yg)("h3",{id:"what-is-a-buffer-overflow"},"What is a Buffer Overflow?"),(0,a.yg)("p",null,"A buffer overflow occurs when the upper limit of a buffer is exceeded during traversal, for example, the position of the last element (v","[N - 1]",").\nA buffer overflow is a specific case of an ",(0,a.yg)("em",{parentName:"p"},"index out of bounds"),", where the vector can be accessed using negative indices.\nMany functions in C do not check the size of the buffers they work with, leading to buffer overflow errors when called.\nSome examples of such functions are:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"http://www.cplusplus.com/reference/cstring/memcpy/"},"memcpy")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.cplusplus.com/reference/cstring/strcpy/"},"strcpy")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"http://www.cplusplus.com/reference/cstdio/fgets/"},"fgets"))),(0,a.yg)("p",null,"A classic example of a buffer overflow is shown in the following code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-C"},"char buffer[32];\nfgets(buffer, 64, stdin);\n")),(0,a.yg)("p",null,"Executing this code will result in a buffer overflow, potentially leading to a ",(0,a.yg)("em",{parentName:"p"},"Segmentation Fault")," error, although this is not guaranteed.\nEverything depends on the buffer's position in the stack and what will be overwritten by the 32 bytes that exceed the buffer's size.\nMore details on what will be overwritten and how this will be done will be discovered when solving the proposed exercises."),(0,a.yg)("h3",{id:"how-to-make-a-buffer-overflow"},"How to make a Buffer Overflow?"),(0,a.yg)("p",null,'In the previous example we see that we can use a buffer to write more than "we should".\nBut what exactly can we do with this?\nIn the following example we can use ',(0,a.yg)("em",{parentName:"p"},"fgets()")," to overwrite ",(0,a.yg)("em",{parentName:"p"},"very_important_var")," and enter ",(0,a.yg)("em",{parentName:"p"},"jackpot()")," function.\nAll we have to do is change the value of ",(0,a.yg)("em",{parentName:"p"},"very_important_var")," to ",(0,a.yg)("em",{parentName:"p"},"0xDEADCODE"),", when reading the buffer."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-C"},"int very_important_var = 0xDEADBEEF;\nchar buffer[32];\nfgets(buffer, 64, stdin);\nif (very_important_var == 0xDEADC0DE) {\n    jackpot();\n}\n")),(0,a.yg)("h3",{id:"infrastructure-preparation"},"Infrastructure Preparation"),(0,a.yg)("p",null,"Throughout the laboratory, in the command-line, we will use:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"nasm")," assembler"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"gcc")," command as a linker"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"objdump")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"ghidra")," for disassembling object and executable files"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"gdb")," for dynamic analysis, investigation, and debugging")),(0,a.yg)("p",null,"This setup will allow us to perform assembly programming, linking, disassembly, and dynamic analysis using the specified tools in the command-line environment."))}p.isMDXComponent=!0}}]);