"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[449],{5680:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>m});var a=t(6540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),l=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):f(f({},r),e)),t},s=function(e){var r=l(e.components);return a.createElement(u.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=l(t),d=n,m=c["".concat(u,".").concat(d)]||c[d]||p[d]||o;return t?a.createElement(m,f(f({ref:r},s),{},{components:t})):a.createElement(m,f({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,f=new Array(o);f[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[c]="string"==typeof e?e:n,f[1]=i;for(var l=2;l<o;l++)f[l]=t[l];return a.createElement.apply(null,f)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4068:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>f,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(8168),n=(t(6540),t(5680));const o={},f="Buffer in the `.data` Section",i={unversionedId:"Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Drills/Tasks/Data Buffer/README",id:"Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Drills/Tasks/Data Buffer/README",title:"Buffer in the `.data` Section",description:"Navigate to the drills/tasks/data-buffer/support/ directory in the laboratory's resource archive and open the data_buffer.asm file.",source:"@site/docs/Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Drills/Tasks/Data Buffer/README.md",sourceDirName:"Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Drills/Tasks/Data Buffer",slug:"/Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Drills/Tasks/Data Buffer/",permalink:"/hardware-software-interface/23/Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Drills/Tasks/Data Buffer/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tasks",permalink:"/hardware-software-interface/23/Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Drills/Tasks/"},next:{title:"Buffer on stack",permalink:"/hardware-software-interface/23/Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Drills/Tasks/Stack Buffer/"}},u={},l=[],s={toc:l},c="wrapper";function p(e){let{components:r,...t}=e;return(0,n.yg)(c,(0,a.A)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"buffer-in-the-data-section"},"Buffer in the ",(0,n.yg)("inlineCode",{parentName:"h1"},".data")," Section"),(0,n.yg)("p",null,"Navigate to the ",(0,n.yg)("inlineCode",{parentName:"p"},"drills/tasks/data-buffer/support/")," directory in the laboratory's resource archive and open the ",(0,n.yg)("inlineCode",{parentName:"p"},"data_buffer.asm")," file.\nThis file contains a program that populates a buffer with information and then displays it."),(0,n.yg)("p",null,"Carefully review the program, then compile it using the command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"make\n")),(0,n.yg)("p",null,"Notice that after running the above compilation command, both an object file and an executable file are generated. You can verify this by running the command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"ls\n")),(0,n.yg)("p",null,"Run the program using the executable file, using the command:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"./data_buffer\n")),(0,n.yg)("p",null,"Observe the behavior of the program based on its code."))}p.isMDXComponent=!0}}]);