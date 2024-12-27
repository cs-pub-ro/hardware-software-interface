"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[2990],{5680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>y});var t=a(6540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),m=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=m(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(a),d=r,y=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return a?t.createElement(y,l(l({ref:n},c),{},{components:a})):t.createElement(y,l({ref:n},c))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9958:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var t=a(8168),r=(a(6540),a(5680));const i={},l="Maximum Calculation in C with Call from Assembly",o={unversionedId:"Lab 10 - C - Assembly Interaction/Stack Handling/Drills/Tasks/Max Assembly Calls/README",id:"Lab 10 - C - Assembly Interaction/Stack Handling/Drills/Tasks/Max Assembly Calls/README",title:"Maximum Calculation in C with Call from Assembly",description:"Navigate to drills/tasks/max-assembly-calls/support/ and open main.asm",source:"@site/docs/Lab 10 - C - Assembly Interaction/Stack Handling/Drills/Tasks/Max Assembly Calls/README.md",sourceDirName:"Lab 10 - C - Assembly Interaction/Stack Handling/Drills/Tasks/Max Assembly Calls",slug:"/Lab 10 - C - Assembly Interaction/Stack Handling/Drills/Tasks/Max Assembly Calls/",permalink:"/hardware-software-interface/24/Lab 10 - C - Assembly Interaction/Stack Handling/Drills/Tasks/Max Assembly Calls/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Maximum Calculation in Assembly with Call from C",permalink:"/hardware-software-interface/24/Lab 10 - C - Assembly Interaction/Stack Handling/Drills/Tasks/Max C Calls/"},next:{title:"Maximum Computation in Assembly with 64-bit C Call",permalink:"/hardware-software-interface/24/Lab 10 - C - Assembly Interaction/Stack Handling/Drills/Tasks/Max C Calls x64/"}},s={},m=[],c={toc:m},p="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(p,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"maximum-calculation-in-c-with-call-from-assembly"},"Maximum Calculation in C with Call from Assembly"),(0,r.yg)("p",null,"Navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"drills/tasks/max-assembly-calls/support/")," and open ",(0,r.yg)("inlineCode",{parentName:"p"},"main.asm")),(0,r.yg)("p",null,"In this directory you can find an implementation of calculating the maximum of a number where the ",(0,r.yg)("inlineCode",{parentName:"p"},"main()")," function is defined in assembly language from which the ",(0,r.yg)("inlineCode",{parentName:"p"},"get_max()")," function defined in C is called."),(0,r.yg)("p",null,"Trace the code in the two files and how the function arguments and return value are passed."),(0,r.yg)("p",null,"Compile and run the program."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"IMPORTANT:"),"\nPay attention to understanding the code before proceeding to the next exercise.")),(0,r.yg)("h1",{id:"extending-maximum-computation-in-c-with-call-from-assembly"},"Extending Maximum Computation in C with Call from Assembly"),(0,r.yg)("p",null,"Extend the program from the previous exercise (in assembly language and C) so that the ",(0,r.yg)("inlineCode",{parentName:"p"},"get_max()")," function now has the signature ",(0,r.yg)("inlineCode",{parentName:"p"},"unsigned int get_max(unsigned int *arr, unsigned int len, unsigned int *pos)"),".\nThe third argument to the function is the address where the position in the vector on which the maximum is found will be held."),(0,r.yg)("p",null,"The position in the vector on which the maximum is found will also be displayed on display."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"TIP:"),"\nTo hold the position, it is best to define a global variable in the assembly file (",(0,r.yg)("inlineCode",{parentName:"p"},"main.asm"),") in the ",(0,r.yg)("inlineCode",{parentName:"p"},".data")," section, of the form"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-Assembly"},"pos: dd 0\n")),(0,r.yg)("p",{parentName:"blockquote"},"This variable you will pass (by address) to the ",(0,r.yg)("inlineCode",{parentName:"p"},"get_max")," call and by value to the ",(0,r.yg)("inlineCode",{parentName:"p"},"printf()")," call for display."),(0,r.yg)("p",{parentName:"blockquote"},"For display modify the ",(0,r.yg)("inlineCode",{parentName:"p"},"print_format")," string and the ",(0,r.yg)("inlineCode",{parentName:"p"},"printf()")," call in the assembly file (",(0,r.yg)("inlineCode",{parentName:"p"},"main.asm"),") to allow two values to be displayed: maximum and position."),(0,r.yg)("p",{parentName:"blockquote"},"If you're having difficulties solving this exercise, go through ",(0,r.yg)("a",{parentName:"p",href:"/hardware-software-interface/24/Lab%2010%20-%20C%20-%20Assembly%20Interaction/Stack%20Handling/Reading/#passing-parameters-from-c-to-the-assembly-procedure"},"this relevant section")," reading material.")))}u.isMDXComponent=!0}}]);