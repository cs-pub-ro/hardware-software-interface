"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[8703],{5680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>f});var r=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,f=c["".concat(s,".").concat(h)]||c[h]||u[h]||a;return n?r.createElement(f,o(o({ref:t},g),{},{components:n})):r.createElement(f,o({ref:t},g))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(8168),i=(n(6540),n(5680));const a={},o="Displaying the Length of a String",l={unversionedId:"Lab 9 - Functions/Functions/Drills/Tasks/Printing the length of a String/README",id:"Lab 9 - Functions/Functions/Drills/Tasks/Printing the length of a String/README",title:"Displaying the Length of a String",description:"The program printstringlen.asm displays the length of a string using the PRINTF32 macro. The calculation of the length of the mystring string occurs within the program (it is already implemented).",source:"@site/docs/Lab 9 - Functions/Functions/Drills/Tasks/Printing the length of a String/README.md",sourceDirName:"Lab 9 - Functions/Functions/Drills/Tasks/Printing the length of a String",slug:"/Lab 9 - Functions/Functions/Drills/Tasks/Printing the length of a String/",permalink:"/hardware-software-interface/21/Lab 9 - Functions/Functions/Drills/Tasks/Printing the length of a String/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Displaying a String",permalink:"/hardware-software-interface/21/Lab 9 - Functions/Functions/Drills/Tasks/Printing a String/"},next:{title:"Displaying the Reversed String",permalink:"/hardware-software-interface/21/Lab 9 - Functions/Functions/Drills/Tasks/Printing a String in Reverse/"}},s={},p=[],g={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(c,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"displaying-the-length-of-a-string"},"Displaying the Length of a String"),(0,i.yg)("p",null,"The program ",(0,i.yg)("inlineCode",{parentName:"p"},"print_string_len.asm")," displays the length of a string using the ",(0,i.yg)("inlineCode",{parentName:"p"},"PRINTF32")," macro. The calculation of the length of the ",(0,i.yg)("inlineCode",{parentName:"p"},"mystring")," string occurs within the program (it is already implemented)."),(0,i.yg)("p",null,"Implement the program to display the length of the string using the ",(0,i.yg)("inlineCode",{parentName:"p"},"printf")," function."),(0,i.yg)("p",null,"At the end, you will have the length of the string displayed twice: initially with the ",(0,i.yg)("inlineCode",{parentName:"p"},"PRINTF32")," macro and then with the external function call ",(0,i.yg)("inlineCode",{parentName:"p"},"printf"),"."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"NOTE:"),"  Consider that the ",(0,i.yg)("inlineCode",{parentName:"p"},"printf")," call is of the form ",(0,i.yg)("inlineCode",{parentName:"p"},'printf("String length is %u\\n", len);'),". You need to construct the stack for this call."),(0,i.yg)("p",{parentName:"blockquote"},"The steps to follow are:"),(0,i.yg)("ol",{parentName:"blockquote"},(0,i.yg)("li",{parentName:"ol"},"Mark the symbol ",(0,i.yg)("inlineCode",{parentName:"li"},"printf")," as external."),(0,i.yg)("li",{parentName:"ol"},"Define the format string ",(0,i.yg)("inlineCode",{parentName:"li"},'"String length is %u", 10, 0'),"."),(0,i.yg)("li",{parentName:"ol"},"Make the function call to ",(0,i.yg)("inlineCode",{parentName:"li"},"printf"),", i.e.:",(0,i.yg)("ol",{parentName:"li"},(0,i.yg)("li",{parentName:"ol"},"Put the two arguments on the stack: the format string and the length."),(0,i.yg)("li",{parentName:"ol"},"Call ",(0,i.yg)("inlineCode",{parentName:"li"},"printf")," using ",(0,i.yg)("inlineCode",{parentName:"li"},"call"),"."),(0,i.yg)("li",{parentName:"ol"},"Restore the stack.")))),(0,i.yg)("p",{parentName:"blockquote"},"The length of the string is found in the ",(0,i.yg)("inlineCode",{parentName:"p"},"ecx")," register.")))}u.isMDXComponent=!0}}]);