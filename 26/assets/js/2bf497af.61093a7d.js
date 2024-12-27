"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[4740],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>f});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,f=u["".concat(s,".").concat(d)]||u[d]||y[d]||a;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4471:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(8168),i=(t(6540),t(5680));const a={},o="Fixing the Entry Point 1",l={unversionedId:"Lab 12 - Linking/Drills/Tasks/Entry Point Fixing 1/README",id:"Lab 12 - Linking/Drills/Tasks/Entry Point Fixing 1/README",title:"Fixing the Entry Point 1",description:"Access the directory drills/tasks/entry-fix-1/support/.",source:"@site/docs/Lab 12 - Linking/Drills/Tasks/Entry Point Fixing 1/README.md",sourceDirName:"Lab 12 - Linking/Drills/Tasks/Entry Point Fixing 1",slug:"/Lab 12 - Linking/Drills/Tasks/Entry Point Fixing 1/",permalink:"/hardware-software-interface/26/Lab 12 - Linking/Drills/Tasks/Entry Point Fixing 1/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Linking Multiple Files",permalink:"/hardware-software-interface/26/Lab 12 - Linking/Drills/Tasks/Multiple File Linking/"},next:{title:"Fixing the Entry Point",permalink:"/hardware-software-interface/26/Lab 12 - Linking/Drills/Tasks/Entry Point Fixing 2/"}},s={},c=[],p={toc:c},u="wrapper";function y(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"fixing-the-entry-point-1"},"Fixing the Entry Point 1"),(0,i.yg)("p",null,"Access the directory ",(0,i.yg)("inlineCode",{parentName:"p"},"drills/tasks/entry-fix-1/support/"),".\nWe want to track issues with defining the ",(0,i.yg)("inlineCode",{parentName:"p"},"main()")," function."),(0,i.yg)("p",null,"Go to the subdirectory ",(0,i.yg)("inlineCode",{parentName:"p"},"a-c/"),".\nRun the ",(0,i.yg)("inlineCode",{parentName:"p"},"make")," command, interpret the encountered error, and resolve it by editing the ",(0,i.yg)("inlineCode",{parentName:"p"},"hello.c")," file."),(0,i.yg)("p",null,"Go to the subdirectory ",(0,i.yg)("inlineCode",{parentName:"p"},"b-asm/"),".\nRun the ",(0,i.yg)("inlineCode",{parentName:"p"},"make")," command, interpret the encountered error, and resolve it by editing the ",(0,i.yg)("inlineCode",{parentName:"p"},"hello.asm")," file."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Bonus"),": In the subdirectories ",(0,i.yg)("inlineCode",{parentName:"p"},"c-extra-nolibc/")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"d-extra-libc/"),", find solutions that do not modify the source code of ",(0,i.yg)("inlineCode",{parentName:"p"},"hello.c"),".\nThese solutions instead modify the build system to use a different function, other than ",(0,i.yg)("inlineCode",{parentName:"p"},"main()"),", as the program's entry point."),(0,i.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,i.yg)("a",{parentName:"p",href:"/hardware-software-interface/26/Lab%2012%20-%20Linking/Reading/"},"this")," reading material."))}y.isMDXComponent=!0}}]);