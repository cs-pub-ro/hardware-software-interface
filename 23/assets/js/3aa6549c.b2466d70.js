"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[61],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9769:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const a={},i="Conditional jumps",l={unversionedId:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Conditional Jumps/README",id:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Conditional Jumps/README",title:"Conditional jumps",description:"You will solve the exercises starting from the hello_world.asm file located in the drills/tasks/conditional-jumps directory.",source:"@site/docs/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Conditional Jumps/README.md",sourceDirName:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Conditional Jumps",slug:"/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Conditional Jumps/",permalink:"/hardware-software-interface/23/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Conditional Jumps/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tasks",permalink:"/hardware-software-interface/23/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/"},next:{title:"Grumpy Jumps",permalink:"/hardware-software-interface/23/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Grumpy Jumps/"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"conditional-jumps"},"Conditional jumps"),(0,o.yg)("p",null,"You will solve the exercises starting from the ",(0,o.yg)("inlineCode",{parentName:"p"},"hello_world.asm")," file located in the ",(0,o.yg)("inlineCode",{parentName:"p"},"drills/tasks/conditional-jumps")," directory."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Modify the program so that the message is displayed only if the content of the ",(0,o.yg)("inlineCode",{parentName:"p"},"eax")," register is greater than that of ",(0,o.yg)("inlineCode",{parentName:"p"},"ebx"),".\nAlso, modify the values of the registers to continue displaying the message ",(0,o.yg)("inlineCode",{parentName:"p"},'"Hello, World!"'),".")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Modify the program to also display ",(0,o.yg)("inlineCode",{parentName:"p"},'"Goodbye, World!"')," at the end.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Using jump instructions, modify the program to display ",(0,o.yg)("inlineCode",{parentName:"p"},'"Hello, World!"')," N times, where N is given through the ",(0,o.yg)("inlineCode",{parentName:"p"},"ecx")," register.\nAvoid infinite looping."))),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"TIP"),": After successful completion, the program should display:"),(0,o.yg)("pre",{parentName:"blockquote"},(0,o.yg)("code",{parentName:"pre",className:"language-c"},"Hello, World!\nHello, World!\nHello, World!\nHello, World!\nHello, World!\nHello, World!\nGoodbye, World!\n"))),(0,o.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,o.yg)("a",{parentName:"p",href:"/hardware-software-interface/23/Lab%205%20-%20Introduction%20to%20Assembly%20Language/x86%20Architecture%20Family/Reading/"},"this")," reading material."))}m.isMDXComponent=!0}}]);