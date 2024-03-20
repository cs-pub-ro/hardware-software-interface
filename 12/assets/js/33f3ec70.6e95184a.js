"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[1117],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,g=p["".concat(c,".").concat(f)]||p[f]||y[f]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(8168),a=(r(6540),r(5680));const i={},o="BONUS 2: Fibonacci",l={unversionedId:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Fibonacci/README",id:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Fibonacci/README",title:"BONUS 2: Fibonacci",description:"You will solve this exercise starting from the `fibonacci.asm` file located in the `drills/tasks/fibonacci` directory.",source:"@site/docs/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Fibonacci/README.md",sourceDirName:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Fibonacci",slug:"/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Fibonacci/",permalink:"/hardware-software-interface/12/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Fibonacci/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"BONUS 1: Min",permalink:"/hardware-software-interface/12/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Min/"},next:{title:"BONUS 3: Carry Flag - Overflow Flag",permalink:"/hardware-software-interface/12/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/Tasks/Carry Flag - Overflow Flag/"}},c={},s=[],u={toc:s},p="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"bonus-2-fibonacci"},"BONUS 2: Fibonacci"),(0,a.yg)("p",null,"You will solve this exercise starting from the ",(0,a.yg)("inlineCode",{parentName:"p"},"fibonacci.asm")," file located in the ",(0,a.yg)("inlineCode",{parentName:"p"},"drills/tasks/fibonacci")," directory."),(0,a.yg)("p",null,"Calculate the Nth Fibonacci number, where N is given through the ",(0,a.yg)("inlineCode",{parentName:"p"},"EAX")," register."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"NOTE"),": The fibonacci series goes as follows : ",(0,a.yg)("inlineCode",{parentName:"p"},"0, 1, 1, 2, 3, ...")," where each element ",(0,a.yg)("inlineCode",{parentName:"p"},"f[i] = f[i-2] + f[i-1]"),", except for the first two elements.")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"TIP"),": For example, if the value stored in ",(0,a.yg)("inlineCode",{parentName:"p"},"EAX")," is equal to ",(0,a.yg)("inlineCode",{parentName:"p"},"5"),", a correct solution will display ",(0,a.yg)("inlineCode",{parentName:"p"},"3")," and for ",(0,a.yg)("inlineCode",{parentName:"p"},"7"),", it will display ",(0,a.yg)("inlineCode",{parentName:"p"},"8"),".")),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/12/Lab%205%20-%20Introduction%20to%20Assembly%20Language/x86%20Architecture%20Family/Reading/"},"this")," reading material."))}y.isMDXComponent=!0}}]);