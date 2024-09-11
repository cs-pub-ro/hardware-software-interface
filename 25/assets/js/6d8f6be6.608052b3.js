"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[5798],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),f=a,y=c["".concat(l,".").concat(f)]||c[f]||d[f]||o;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(8168),a=(t(6540),t(5680));const o={},i="Solution",s={unversionedId:"Lab 12 - Capture The Flag/CTF/Drills/Tasks/Bonus - ROP/solution/README",id:"Lab 12 - Capture The Flag/CTF/Drills/Tasks/Bonus - ROP/solution/README",title:"Solution",description:"Idea: The function that needs to be called is special_function() with arguments 6 and 9.",source:"@site/docs/Lab 12 - Capture The Flag/CTF/Drills/Tasks/Bonus - ROP/solution/README.md",sourceDirName:"Lab 12 - Capture The Flag/CTF/Drills/Tasks/Bonus - ROP/solution",slug:"/Lab 12 - Capture The Flag/CTF/Drills/Tasks/Bonus - ROP/solution/",permalink:"/hardware-software-interface/25/Lab 12 - Capture The Flag/CTF/Drills/Tasks/Bonus - ROP/solution/",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"solution"},"Solution"),(0,a.yg)("p",null,"Idea: The function that needs to be called is ",(0,a.yg)("inlineCode",{parentName:"p"},"special_function()")," with arguments 6 and 9.\nThe binary is a 64-bits ELF, therefore the parameters are no longer taken from the stack - they are taken from registers esi and edi;\nin order to set these registers, you need to execute 2 gadgets.\nBy using commands like ",(0,a.yg)("inlineCode",{parentName:"p"},'ropsearch "pop rsi"')," and ",(0,a.yg)("inlineCode",{parentName:"p"},'ropsearch "pop rdi"')," in ",(0,a.yg)("inlineCode",{parentName:"p"},"GDB peda"),", you will find gadgets ",(0,a.yg)("inlineCode",{parentName:"p"},"pop rsi; pop r15; ret")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"pop rdi; ret"),".\nWe first need to overwrite the return address with the address of the first gadget, followed by 2 8-bytes values (rsi and r15, which is not relevant);\nthe value of rsi needs to be the value of the second argument;\nthese values are followed by the address of the second gadget and the value of rdi - the first argument of the function.\nFinally, we jump to the address of ",(0,a.yg)("inlineCode",{parentName:"p"},"special_function()"),", which you can find by using ",(0,a.yg)("inlineCode",{parentName:"p"},"gdb")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"print special_function"),"."),(0,a.yg)("p",null,"The command below might need to be modified."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'python3 -c \'import sys; sys.stdout.buffer.write(b"A"*24 + b"\\xe1\\x13\\x40\\x00\\x00\\x00\\x00\\x00" + b"\\x09\\x00\\x00\\x00\\x00\\x00\\x00\\x00" + b"\\x00\\x00\\x00\\x00\\x00\\x00\\x00\\x00" + b"\\xe3\\x13\\x40\\x00\\x00\\x00\\x00\\x00" + b"\\x06\\x00\\x00\\x00\\x00\\x00\\x00\\x00" + b"\\x0b\\x13\\x40\\x00\\x00\\x00\\x00\\x00")\' | ./rop\n')),(0,a.yg)("p",null,"Note: in this version of the compiled binary, the address of the function is not ",(0,a.yg)("inlineCode",{parentName:"p"},"0x40130b"),", but it is ",(0,a.yg)("inlineCode",{parentName:"p"},"0x40130a"),".\nHowever, because ",(0,a.yg)("inlineCode",{parentName:"p"},"fgets()")," will read ",(0,a.yg)("inlineCode",{parentName:"p"},"0x0a")," as a newline (",(0,a.yg)("inlineCode",{parentName:"p"},"\\n"),") character, the payload will only work if we increment the last address to ",(0,a.yg)("inlineCode",{parentName:"p"},"0x0b"),"."))}d.isMDXComponent=!0}}]);