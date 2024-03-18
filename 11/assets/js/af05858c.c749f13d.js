"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[7305],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),g=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=g(t),c=a,m=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var g=2;g<i;g++)o[g]=t[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9026:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var r=t(8168),a=(t(6540),t(5680));const i={},o="GNU Debugger (GDB)",l={unversionedId:"Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Reading/README",id:"Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Reading/README",title:"GNU Debugger (GDB)",description:"Starting GDB",source:"@site/docs/Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Reading/README.md",sourceDirName:"Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Reading",slug:"/Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Reading/",permalink:"/hardware-software-interface/11/Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Reading/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Introduction to GDB",permalink:"/hardware-software-interface/11/Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/"},next:{title:"Guides",permalink:"/hardware-software-interface/11/Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Guides/"}},s={},g=[{value:"Starting GDB",id:"starting-gdb",level:2},{value:"Running the Program",id:"running-the-program",level:2},{value:"Breakpoints",id:"breakpoints",level:2},{value:"Stepping through instructions",id:"stepping-through-instructions",level:2},{value:"Inspecting Memory",id:"inspecting-memory",level:2},{value:"pwndbg",id:"pwndbg",level:2}],p={toc:g},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"gnu-debugger-gdb"},"GNU Debugger (GDB)"),(0,a.yg)("h2",{id:"starting-gdb"},"Starting GDB"),(0,a.yg)("p",null,"GDB is a powerful tool for debugging programs.\nIt allows you to inspect the state of a program at a certain point in its execution, set breakpoints, and step through the code, among other things.\nTo start GDB, you need to run the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"gdb [program_name]\n")),(0,a.yg)("h2",{id:"running-the-program"},"Running the Program"),(0,a.yg)("p",null,"To run the program being debugged, there are two available commands:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"r")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"run")," - this command will run the program"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"start")," - unlike ",(0,a.yg)("inlineCode",{parentName:"li"},"run"),", this command will start the program but immediately stop after entering ",(0,a.yg)("inlineCode",{parentName:"li"},"main"),", it is equivalent to setting a breakpoint at ",(0,a.yg)("inlineCode",{parentName:"li"},"main")," and then running the program")),(0,a.yg)("h2",{id:"breakpoints"},"Breakpoints"),(0,a.yg)("p",null,"The essential element of GDB is the breakpoint.\nEssentially, setting a breakpoint at a certain instruction causes the program's execution to halt every time it reaches that point.\nSetting a breakpoint is done with the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-gdb"},"break [location]\n")),(0,a.yg)("p",null,"or in short form:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-gdb"},"b [location]\n")),(0,a.yg)("p",null,"where ",(0,a.yg)("em",{parentName:"p"},"location")," can represent the name of a function, the line number of the code, or even a memory address, in which case the address must be preceded by the symbol *.\nFor example: ",(0,a.yg)("inlineCode",{parentName:"p"},"break \\*0xCAFEBABE")),(0,a.yg)("h2",{id:"stepping-through-instructions"},"Stepping through instructions"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"si")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"stepi")," - executes the current instruction"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ni")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"nexti")," - similar to ",(0,a.yg)("inlineCode",{parentName:"li"},"stepi"),", but if the current instruction is a function call, the debugger will not enter the function"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"c")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"continue")," - continues program execution until the next breakpoint or until it finishes"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"finish")," - continues program execution until leaving the current function")),(0,a.yg)("h2",{id:"inspecting-memory"},"Inspecting Memory"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"p")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"print")," var - displays the value of ",(0,a.yg)("inlineCode",{parentName:"li"},"var"),".\nPrint is a very flexible command, allowing dereferencing of pointers, displaying addresses of variables, and indexing through arrays using *, & and [].\nThe print command can be followed by the /f parameter specifying the display format (x for hex, d for decimal, s for string)."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"x")," or ",(0,a.yg)("inlineCode",{parentName:"li"},"examine")," - Inspects the content at the given address.\nThe usage of this command is as follows:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"x/nfu address\n")),(0,a.yg)("p",null,"where:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"n is the number of displayed elements"),(0,a.yg)("li",{parentName:"ul"},"f is the display format (x for hex, d for decimal, s for string, and i for instructions)"),(0,a.yg)("li",{parentName:"ul"},"u is the size of each element (b for 1 byte, h for 2, w for 4, and g for 8 bytes)")),(0,a.yg)("p",null,"We recommend the article ",(0,a.yg)("a",{parentName:"p",href:"https://developers.redhat.com/articles/the-gdb-developers-gnu-debugger-tutorial-part-1-getting-started-with-the-debugger#why_another_gdb_tutorial_"},"Debugging")," for further understanding of how to use GDB both in the CLI and through an IDE."),(0,a.yg)("h2",{id:"pwndbg"},"pwndbg"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/pwndbg/pwndbg"},"pwndbg")," is a GDB plugin that provides a number of useful features for debugging and exploiting binaries.\nIt makes GDB easier to use and infinitely more powerful.\nIt will become more useful as we progress through the lab sessions."),(0,a.yg)("p",null,"Cheatsheet ",(0,a.yg)("a",{parentName:"p",href:"https://cheatography.com/superkojiman/cheat-sheets/gdb-pwndbg/"},"gdb + pwndbg"),"; pwndbg ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/pwndbg/pwndbg/blob/dev/FEATURES.md"},"features")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-pwndbg"},"pwndbg> show context-sections\n'regs disasm code ghidra stack backtrace expressions'\n# for smaller terminals\npwndbg> set context-sections 'regs code stack'\n# display memory area in hex + ASCII\npwndbg> hexdump $ecx\n# display stack\npwndbg> stack\n# permanently display memory dump of 8 bytes\npwndbg> ctx-watch execute \"x/8xb &msg\"\n\n# recommended settings in .gdbinit\nset context-sections 'regs code expressions'\nset show-flags on\nset dereference-limit 1\n")))}d.isMDXComponent=!0}}]);