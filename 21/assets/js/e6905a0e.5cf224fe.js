"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[1774],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(t),y=i,d=g["".concat(l,".").concat(y)]||g[y]||u[y]||a;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5442:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(8168),i=(t(6540),t(5680));const a={},o="Displaying the Reversed String",s={unversionedId:"Lab 9 - Functions/Functions/Drills/Tasks/Printing a String in Reverse/README",id:"Lab 9 - Functions/Functions/Drills/Tasks/Printing a String in Reverse/README",title:"Displaying the Reversed String",description:"In the file printrevstring.asm, add the reverse_string function so that you have a listing similar to the one below:",source:"@site/docs/Lab 9 - Functions/Functions/Drills/Tasks/Printing a String in Reverse/README.md",sourceDirName:"Lab 9 - Functions/Functions/Drills/Tasks/Printing a String in Reverse",slug:"/Lab 9 - Functions/Functions/Drills/Tasks/Printing a String in Reverse/",permalink:"/hardware-software-interface/21/Lab 9 - Functions/Functions/Drills/Tasks/Printing a String in Reverse/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Displaying the Length of a String",permalink:"/hardware-software-interface/21/Lab 9 - Functions/Functions/Drills/Tasks/Printing the length of a String/"},next:{title:"Implementing the toupper Function",permalink:"/hardware-software-interface/21/Lab 9 - Functions/Functions/Drills/Tasks/To Upper/"}},l={},p=[],c={toc:p},g="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(g,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"displaying-the-reversed-string"},"Displaying the Reversed String"),(0,i.yg)("p",null,"In the file ",(0,i.yg)("inlineCode",{parentName:"p"},"print_rev_string.asm"),", add the ",(0,i.yg)("inlineCode",{parentName:"p"},"reverse_string")," function so that you have a listing similar to the one below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Assembly"},"[...]\nsection .text\nglobal main\n\nreverse_string:\n    push ebp\n    mov ebp, esp\n\n    mov eax, dword [ebp+8]\n    mov ecx, dword [ebp+12]\n    add eax, ecx\n    dec eax\n    mov edx, dword [ebp+16]\n\ncopy_one_byte:\n    mov bl, byte [eax]\n    mov byte [edx], bl\n    dec eax\n    inc edx\n    loopnz copy_one_byte\n\n    inc edx\n    mov byte [edx], 0\n\n    leave\n    ret\n\nmain:\n    push ebp\n    mov ebp, esp\n[...]\n")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"IMPORTANT:"),"  When copying the ",(0,i.yg)("inlineCode",{parentName:"p"},"reverse_string")," function into your program, remember that the function starts at the ",(0,i.yg)("inlineCode",{parentName:"p"},"reverse_string")," label and ends at the ",(0,i.yg)("inlineCode",{parentName:"p"},"main")," label. The ",(0,i.yg)("inlineCode",{parentName:"p"},"copy_one_byte")," label is part of the ",(0,i.yg)("inlineCode",{parentName:"p"},"reverse_string")," function.")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"reverse_string")," function reverses a string and has the following signature: ",(0,i.yg)("inlineCode",{parentName:"p"},"void reverse_string(const char *src, size_t len, char *dst);"),". This means that the first ",(0,i.yg)("inlineCode",{parentName:"p"},"len")," characters of the ",(0,i.yg)("inlineCode",{parentName:"p"},"src")," string are reversed into the ",(0,i.yg)("inlineCode",{parentName:"p"},"dst")," string."),(0,i.yg)("p",null,"Reverse the ",(0,i.yg)("inlineCode",{parentName:"p"},"mystring")," string into a new string and display that new string."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"NOTE:"),"  To define a new string, we recommend using the following construction in the data section:"),(0,i.yg)("pre",{parentName:"blockquote"},(0,i.yg)("code",{parentName:"pre",className:"language-Assembly"},"store_string times 64 db 0\n")),(0,i.yg)("p",{parentName:"blockquote"},"This creates a string of 64 zero bytes, enough to store the reverse of the string.\nThe equivalent C function call is ",(0,i.yg)("inlineCode",{parentName:"p"},"reverse_string(mystring, ecx, store_string);"),". We assume that the length of the string is calculated and stored in the ",(0,i.yg)("inlineCode",{parentName:"p"},"ecx")," register."),(0,i.yg)("p",{parentName:"blockquote"},"You cannot directly use the value of ",(0,i.yg)("inlineCode",{parentName:"p"},"ecx")," in its current form. After the ",(0,i.yg)("inlineCode",{parentName:"p"},"printf")," function call for displaying the length, the value of ",(0,i.yg)("inlineCode",{parentName:"p"},"ecx")," is lost. To retain it, you have two options:"),(0,i.yg)("ol",{parentName:"blockquote"},(0,i.yg)("li",{parentName:"ol"},"Store the value of the ",(0,i.yg)("inlineCode",{parentName:"li"},"ecx")," register on the stack beforehand (using ",(0,i.yg)("inlineCode",{parentName:"li"},"push ecx")," before the ",(0,i.yg)("inlineCode",{parentName:"li"},"printf")," call) and then restore it after the ",(0,i.yg)("inlineCode",{parentName:"li"},"printf")," call (using ",(0,i.yg)("inlineCode",{parentName:"li"},"pop ecx"),")."),(0,i.yg)("li",{parentName:"ol"},"Store the value of the ",(0,i.yg)("inlineCode",{parentName:"li"},"ecx")," register in a global variable, which you define in the ",(0,i.yg)("inlineCode",{parentName:"li"},".data")," section.")),(0,i.yg)("p",{parentName:"blockquote"},"You cannot use another register because there is a high chance that even that register will be modified by the ",(0,i.yg)("inlineCode",{parentName:"p"},"printf")," call to display the length of the string.")))}u.isMDXComponent=!0}}]);