"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[6130],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),g=i,y=m["".concat(l,".").concat(g)]||m[g]||u[g]||a;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8569:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(8168),i=(t(6540),t(5680));const a={},o="Discovering Assembly",s={unversionedId:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Guides/Discovering Assembly/README",id:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Guides/Discovering Assembly/README",title:"Discovering Assembly",description:"To follow this guide, you will need to navigate to the guides/discovering-assembly/support directory.",source:"@site/docs/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Guides/Discovering Assembly/README.md",sourceDirName:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Guides/Discovering Assembly",slug:"/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Guides/Discovering Assembly/",permalink:"/hardware-software-interface/24/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Guides/Discovering Assembly/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"First look at Assembly instructions",permalink:"/hardware-software-interface/24/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Guides/First look at assembly instructions/"},next:{title:"Drills",permalink:"/hardware-software-interface/24/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/"}},l={},p=[],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(m,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"discovering-assembly"},"Discovering Assembly"),(0,i.yg)("p",null,"To follow this guide, you will need to navigate to the ",(0,i.yg)("inlineCode",{parentName:"p"},"guides/discovering-assembly/support")," directory."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Open the ",(0,i.yg)("inlineCode",{parentName:"p"},"ex1.asm")," file and read the comments.\nAssemble it by using the ",(0,i.yg)("inlineCode",{parentName:"p"},"make")," utility and run it.\nUsing gdb, go through the program line by line (the ",(0,i.yg)("inlineCode",{parentName:"p"},"start")," command followed by ",(0,i.yg)("inlineCode",{parentName:"p"},"next"),") and observe the changes in register values after executing the ",(0,i.yg)("inlineCode",{parentName:"p"},"mov")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"add")," instructions.\nIgnore the sequence of ",(0,i.yg)("inlineCode",{parentName:"p"},"PRINTF32")," instructions.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Open the ",(0,i.yg)("inlineCode",{parentName:"p"},"ex2.asm")," file and read the comments.\nAssemble it by using the ",(0,i.yg)("inlineCode",{parentName:"p"},"make")," utility and run it.\nUsing gdb, observe the change in the ",(0,i.yg)("inlineCode",{parentName:"p"},"eip")," register when executing the ",(0,i.yg)("inlineCode",{parentName:"p"},"jmp")," instruction.\nTo skip the ",(0,i.yg)("inlineCode",{parentName:"p"},"PRINTF32")," instructions, add a breakpoint at the ",(0,i.yg)("inlineCode",{parentName:"p"},"jump_incoming")," label (the ",(0,i.yg)("inlineCode",{parentName:"p"},"break")," command followed by ",(0,i.yg)("inlineCode",{parentName:"p"},"run"),").")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Open the ",(0,i.yg)("inlineCode",{parentName:"p"},"ex3.asm")," file and read the comments.\nAssemble it by using the ",(0,i.yg)("inlineCode",{parentName:"p"},"make")," utility and run it.\nUsing gdb, navigate through the program using breakpoints.\nFollow the program flow.\nWhy is ",(0,i.yg)("inlineCode",{parentName:"p"},"15")," displayed first and then ",(0,i.yg)("inlineCode",{parentName:"p"},"3"),"?\nBecause of the jump at line 9.\nWhere does the jump at line 25 point to?\nTo the ",(0,i.yg)("inlineCode",{parentName:"p"},"zone1")," label.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Open the ",(0,i.yg)("inlineCode",{parentName:"p"},"ex4.asm")," file and read the comments.\nAssemble it by using the ",(0,i.yg)("inlineCode",{parentName:"p"},"make")," utility and run it.\nUsing gdb, go through the program.\nWhy isn't the jump at line 12 taken?\nBecause the ",(0,i.yg)("inlineCode",{parentName:"p"},"je")," instruction jumps if the ",(0,i.yg)("inlineCode",{parentName:"p"},"ZF")," bit in the ",(0,i.yg)("inlineCode",{parentName:"p"},"FLAGS")," register is set.\nThis bit is set by the ",(0,i.yg)("inlineCode",{parentName:"p"},"cmp")," instruction, which calculates the difference between the values of the ",(0,i.yg)("inlineCode",{parentName:"p"},"eax")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"ebx")," registers without storing the result.\nHowever, the ",(0,i.yg)("inlineCode",{parentName:"p"},"add")," instruction at line 11 clears this flag because the result of the operation is different from 0."))))}u.isMDXComponent=!0}}]);