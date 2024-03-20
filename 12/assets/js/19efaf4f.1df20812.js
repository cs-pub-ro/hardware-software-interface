"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[8007],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),y=a,d=c["".concat(l,".").concat(y)]||c[y]||g[y]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},6291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(8168),a=(n(6540),n(5680));const o={},i="Assembly Introduction: First look at Assembly instructions",s={unversionedId:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Guides/Assembly Introduction: First look at assembly instructions/README",id:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Guides/Assembly Introduction: First look at assembly instructions/README",title:"Assembly Introduction: First look at Assembly instructions",description:"To follow this guide, you will need to use the `instructions.asm` file located in the `guides/instructions/support` directory.",source:"@site/docs/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Guides/Assembly Introduction: First look at assembly instructions/README.md",sourceDirName:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Guides/Assembly Introduction: First look at assembly instructions",slug:"/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Guides/Assembly Introduction: First look at assembly instructions/",permalink:"/hardware-software-interface/12/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Guides/Assembly Introduction: First look at assembly instructions/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Guides",permalink:"/hardware-software-interface/12/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Guides/"},next:{title:"Drills",permalink:"/hardware-software-interface/12/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Drills/"}},l={},u=[],p={toc:u},c="wrapper";function g(e){let{components:t,...o}=e;return(0,a.yg)(c,(0,r.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"assembly-introduction-first-look-at-assembly-instructions"},"Assembly Introduction: First look at Assembly instructions"),(0,a.yg)("p",null,"To follow this guide, you will need to use the ",(0,a.yg)("inlineCode",{parentName:"p"},"instructions.asm")," file located in the ",(0,a.yg)("inlineCode",{parentName:"p"},"guides/instructions/support")," directory."),(0,a.yg)("p",null,"Diving right into the demo, we can see one of the most important instructions that helps us, programmers, work with the stack and that is ",(0,a.yg)("inlineCode",{parentName:"p"},"push"),". We discussed what the ",(0,a.yg)("inlineCode",{parentName:"p"},"push")," instruction does in the ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/12/Lab%205%20-%20Introduction%20to%20Assembly%20Language/x86%20Architecture%20Family/Reading/#data-movement-instructions"},"reading section"),". Considering its call, we can understand that it takes the ",(0,a.yg)("inlineCode",{parentName:"p"},"0")," value(as a ",(0,a.yg)("inlineCode",{parentName:"p"},"DWORD"),", a number stored on ",(0,a.yg)("inlineCode",{parentName:"p"},"4"),' bytes) and moves it onto the "top" of the stack.'),(0,a.yg)("p",null,"That ",(0,a.yg)("inlineCode",{parentName:"p"},"push")," is followed by a new instruction:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-assembly"},"popf\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"IMPORTANT"),": The ",(0,a.yg)("inlineCode",{parentName:"p"},"popf")," instruction is used for setting, depending on how many bytes we pop from the stack(in our case, 4 bytes), the ",(0,a.yg)("strong",{parentName:"p"},"EFLAGS")," register(setting the entire register when popping 4 bytes and only the 2 lower bytes of the register when popping 2 bytes). You can read more about the ",(0,a.yg)("inlineCode",{parentName:"p"},"popf")," instruction ",(0,a.yg)("a",{parentName:"p",href:"https://www.felixcloutier.com/x86/popf:popfd:popfq"},"here")," and ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/FLAGS_register"},"here"),".")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"EFLAGS Representation",src:n(9883).A})),(0,a.yg)("p",null,"Having in mind what the ",(0,a.yg)("inlineCode",{parentName:"p"},"popf")," instruction does, try to guess what would adding the following line of code at line 15 and the ",(0,a.yg)("inlineCode",{parentName:"p"},"mystery_label")," label at the line(of the current file, before adding the instruction) 53 would make the program do."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-assembly"},"jnc mystery_label\n")),(0,a.yg)("p",null,"Moving on, we can see that the ",(0,a.yg)("inlineCode",{parentName:"p"},"0")," value is set to the ",(0,a.yg)("inlineCode",{parentName:"p"},"eax")," register by using the ",(0,a.yg)("inlineCode",{parentName:"p"},"mov")," instruction. Can you give example of another two ways of setting the value in ",(0,a.yg)("inlineCode",{parentName:"p"},"eax")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"0")," without using ",(0,a.yg)("inlineCode",{parentName:"p"},"mov")," ?"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"HINT"),": Think about the ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/12/Lab%205%20-%20Introduction%20to%20Assembly%20Language/x86%20Architecture%20Family/Reading/#arithmetic-and-logic-instructions"},"logical operators"),".")),(0,a.yg)("p",null,"Next, by using the ",(0,a.yg)("inlineCode",{parentName:"p"},"test")," instruction we can set the ",(0,a.yg)("inlineCode",{parentName:"p"},"flags")," based on the output of the ",(0,a.yg)("strong",{parentName:"p"},"logical and")," between ",(0,a.yg)("inlineCode",{parentName:"p"},"eax")," and itself."),(0,a.yg)("p",null,"After resetting the flags, we store ",(0,a.yg)("inlineCode",{parentName:"p"},"0xffffffff")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"ebx")," register(which is actually the largest number it can store before setting the carry flag) and then use the ",(0,a.yg)("inlineCode",{parentName:"p"},"test")," instruction yet again. Similarly, what do you think adding the following line of code after the ",(0,a.yg)("inlineCode",{parentName:"p"},"test")," instruction would produce ?"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-assembly"},"jnz mystery_label\n")),(0,a.yg)("p",null,"We reset the flags once again and now we take a look at working with the smaller portions of the ",(0,a.yg)("inlineCode",{parentName:"p"},"eax")," register. Can you guess the output of the following command, put right under the ",(0,a.yg)("inlineCode",{parentName:"p"},"add al, bl")," instruction ? What about the flags ? Which flag has been set ?"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-assembly"},"PRINTF32 `%d\\n\\x0`, eax\n")),(0,a.yg)("p",null,"Similarly, try to answer the same questions from above, but considering the next portions of the code."),(0,a.yg)("p",null,"After thoroughly inspecting this example, you should have a vague idea about how setting the flags works."))}g.isMDXComponent=!0},9883:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/EFLAGS_REPRESENTATION-2092cff4e0c5323ca3736ef4a4ab22b4.svg"}}]);