"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[5117],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),f=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=f(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=f(r),g=n,d=c["".concat(s,".").concat(g)]||c[g]||p[g]||o;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var f=2;f<o;f++)i[f]=r[f];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9554:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>f});var a=r(8168),n=(r(6540),r(5680));const o={},i="Buffer Overflow for Program Written in C",l={unversionedId:"Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow in C/README",id:"Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow in C/README",title:"Buffer Overflow for Program Written in C",description:"Most often, we will identify buffer overflow vulnerabilities in programs written in C.",source:"@site/docs/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow in C/README.md",sourceDirName:"Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow in C",slug:"/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow in C/",permalink:"/hardware-software-interface/25/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow in C/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tasks",permalink:"/hardware-software-interface/25/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/"},next:{title:"Overwrite Return Address",permalink:"/hardware-software-interface/25/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overwrite Return Address/"}},s={},f=[{value:"Overwrite Variable Using a Buffer",id:"overwrite-variable-using-a-buffer",level:2},{value:"BONUS: Stack Canary",id:"bonus-stack-canary",level:2}],u={toc:f},c="wrapper";function p(e){let{components:t,...r}=e;return(0,n.yg)(c,(0,a.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"buffer-overflow-for-program-written-in-c"},"Buffer Overflow for Program Written in C"),(0,n.yg)("p",null,"Most often, we will identify buffer overflow vulnerabilities in programs written in C.\nThere we need to see what buffers are and what is the distance from the buffer to the desired variable to be able to overwrite it."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"IMPORTANT"),' It is important to consider that the distance between a buffer and another variable in C may not correspond to the "real-world" distance;\nthe compiler can make updates, reorders, may leave free spaces between variables, etc.')),(0,n.yg)("h2",{id:"overwrite-variable-using-a-buffer"},"Overwrite Variable Using a Buffer"),(0,n.yg)("p",null,"For the current exercise, access the ",(0,n.yg)("inlineCode",{parentName:"p"},"drills/tasks/overflow-in-c/support/")," directory from the lab resource archive and observe the corresponding C source code.\nFor the case where you do not want to compile the code yourself, you have in the archive the equivalent assembly language file and the executable file."),(0,n.yg)("p",null,"Discover the difference between the buffer's address and the variable's address, create an input file (also called ",(0,n.yg)("inlineCode",{parentName:"p"},"payload"),") with which to trigger the overflow and make it so that the message ",(0,n.yg)("em",{parentName:"p"},"Full of win")," is displayed."),(0,n.yg)("p",null,"It is recommended to first take a look at the assembly file, then understand the offsets."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"HINT"),' To see the "real-world" reality, i.e., to find out what the difference is between the buffer and the variable we want to overwrite,\nconsult the equivalent assembly language file (',(0,n.yg)("inlineCode",{parentName:"p"},"do_overflow.asm"),"), obtained by assembling the C code.\nIn this file, you can find the relative address of the buffer to ",(0,n.yg)("inlineCode",{parentName:"p"},"ebp")," and the variable to ",(0,n.yg)("inlineCode",{parentName:"p"},"ebp"),";\nfollow the sequence between lines ",(0,n.yg)("inlineCode",{parentName:"p"},"36")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"47"),";\nyou have a mapping between the variable name and the relative offset to ",(0,n.yg)("inlineCode",{parentName:"p"},"ebp"),".\nWith this information, you can create the string to transmit as a payload to the standard input of the program.\n",(0,n.yg)("strong",{parentName:"p"},"NOTE")," If you want to recompile the files run:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"make clean && make\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"HINT")," As above, to transmit the input string for the program, it is recommended to write it in a file\nand then redirect that file to the corresponding program command.\nRedirecting the payload file to the program is done using a command like:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"./do_overflow < payload\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"HINT")," If you are confused about the value in the C code:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-C"},"if (sexy_var == 0x5541494D)\n")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"You can use this ",(0,n.yg)("a",{parentName:"p",href:"https://www.rapidtables.com/convert/number/hex-to-ascii.html"},"site")," to convert from hexadecimal to ASCII.")),(0,n.yg)("h2",{id:"bonus-stack-canary"},"BONUS: Stack Canary"),(0,n.yg)("p",null,"Now that you displayed ",(0,n.yg)("em",{parentName:"p"},"Full of win!"),", let's take a look at the Makefile"),(0,n.yg)("blockquote",null,(0,n.yg)("pre",{parentName:"blockquote"},(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"cat Makefile\n"))),(0,n.yg)("p",null,"Carefully analyze the compilation options.\nWhat do you notice?"),(0,n.yg)("p",null,"As observed above, despite exceeding the buffer size and overwriting another variable in the program, it terminated normally.\nThis is undesirable when working with buffers because they are a potential source of easy attacks.\nUse ",(0,n.yg)("inlineCode",{parentName:"p"},"objdump")," to inspect the ",(0,n.yg)("inlineCode",{parentName:"p"},"main")," function of the executable."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"HINT")," To inspect the source, use the following command:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"objdump -M intel -d do_overflow\n")),(0,n.yg)("p",null,"Now, go into the ",(0,n.yg)("inlineCode",{parentName:"p"},"Makefile")," and modify the ",(0,n.yg)("inlineCode",{parentName:"p"},"CFLAGS")," parameters by replacing ",(0,n.yg)("inlineCode",{parentName:"p"},"-fno-stack-protector")," with ",(0,n.yg)("inlineCode",{parentName:"p"},"-fstack-protector"),".\nRecompile the program and run it.\nWhat do you observe?"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"NOTE")," With the ",(0,n.yg)("inlineCode",{parentName:"p"},"-fstack-protector")," option or flag, we instructed the compiler to enable ",(0,n.yg)("em",{parentName:"p"},"Stack Smashing Protection")," for our executable.\nTherefore, any buffer overflow attack will be detected in the code, and the program execution will terminate with an error.")),(0,n.yg)("p",null,"Inspect the recompiled executable again with the new flag using ",(0,n.yg)("inlineCode",{parentName:"p"},"objdump"),".\nWhat has changed?"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"NOTE")," The compiler introduced a randomly generated value called a ",(0,n.yg)("strong",{parentName:"p"},"canary")," onto the stack, which it checks before exiting the current function's execution.\nThrough buffer overflow, this canary was overwritten upon exceeding the buffer's size, resulting in a mismatch between the initial canary value and the one at the end of the function execution.")),(0,n.yg)("p",null,"Recompile the files and run:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"make clean && make\n")),(0,n.yg)("p",null,"If you try the same payload, it will not work because of the ",(0,n.yg)("strong",{parentName:"p"},"canary")," generated. You will most likely see a message like this:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Bash"},"Not quite there. Try again!\n*** stack smashing detected ***: terminated\nAborted (core dumped)\n")),(0,n.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,n.yg)("a",{parentName:"p",href:"/hardware-software-interface/25/Lab%2011%20-%20Buffer%20Management.%20Buffer%20Overflow/Buffer%20Overflow%20Vulnerabilities/Reading/#How-Do-We-Protect-Against-Buffer-Overflow-Attacks?"},"this")," reading material."))}p.isMDXComponent=!0}}]);