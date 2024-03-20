"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[1109],{5680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),g=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=g(a),p=r,y=d["".concat(s,".").concat(p)]||d[p]||m[p]||l;return a?n.createElement(y,i(i({ref:t},u),{},{components:a})):n.createElement(y,i({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9906:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var n=a(8168),r=(a(6540),a(5680));const l={},i="x86 Family",o={unversionedId:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Reading/README",id:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Reading/README",title:"x86 Family",description:"Almost all major processors from Intel share a common ISA (Instruction Set Architecture). These processors are highly backwards compatible, with most instructions unchanged over generations, but only added or extended.",source:"@site/docs/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Reading/README.md",sourceDirName:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Reading",slug:"/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Reading/",permalink:"/hardware-software-interface/12/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Reading/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"x86 Architecture Family",permalink:"/hardware-software-interface/12/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/"},next:{title:"Guides",permalink:"/hardware-software-interface/12/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Guides/"}},s={},g=[{value:"Registers",id:"registers",level:2},{value:"Instruction Classes",id:"instruction-classes",level:2},{value:"Data Movement Instructions",id:"data-movement-instructions",level:3},{value:"Arithmetic and Logic Instructions",id:"arithmetic-and-logic-instructions",level:3},{value:"Program Control Instructions",id:"program-control-instructions",level:3}],u={toc:g},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"x86-family"},"x86 Family"),(0,r.yg)("p",null,"Almost all major processors from Intel share a common ISA (",(0,r.yg)("strong",{parentName:"p"},"I"),"nstruction ",(0,r.yg)("strong",{parentName:"p"},"S"),"et ",(0,r.yg)("strong",{parentName:"p"},"A"),"rchitecture). These processors are highly backwards compatible, with most instructions unchanged over generations, but only added or extended."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"NOTE"),": An ISA defines the instructions supported by a processor, register size, addressing modes, data types, instruction format, interrupts, and memory organization. Processors in this family fall into the broad category of CISC (",(0,r.yg)("strong",{parentName:"p"},"C"),"omplex ",(0,r.yg)("strong",{parentName:"p"},"I"),"nstruction ",(0,r.yg)("strong",{parentName:"p"},"S"),"et ",(0,r.yg)("strong",{parentName:"p"},"C"),"omputers). The philosophy behind them is to have a large number of instructions, with variable length, capable of performing complex operations, over multiple clock cycles.")),(0,r.yg)("h2",{id:"registers"},"Registers"),(0,r.yg)("p",null,"The basic working units for x86 processors are registers. These are a suite of locations within the processor through which it interacts with memory, I/O, etc."),(0,r.yg)("p",null,"x86 processors have 8 such 32-bit registers. Although any of these can be used in operations, for historical reasons, each register has a specific role."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Role"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"EAX"),(0,r.yg)("td",{parentName:"tr",align:null},"accumulator; system calls, I/O, arithmetic")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"EBX"),(0,r.yg)("td",{parentName:"tr",align:null},"base register; used for memory-based addressing")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ECX"),(0,r.yg)("td",{parentName:"tr",align:null},"counter in loop instructions")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"EDX"),(0,r.yg)("td",{parentName:"tr",align:null},"data register; I/O, arithmetic, interrupt values; can extend EAX to 64 bits")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ESI"),(0,r.yg)("td",{parentName:"tr",align:null},"source in string operations")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"EDI"),(0,r.yg)("td",{parentName:"tr",align:null},"destination in string operations")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"EBP"),(0,r.yg)("td",{parentName:"tr",align:null},"base or frame pointer; points to the current stack frame")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ESP"),(0,r.yg)("td",{parentName:"tr",align:null},"stack pointer; points to the top of the stack")))),(0,r.yg)("p",null,"In addition to these, there are some special registers that cannot be directly accessed by the programmer, such as EFLAGS and EIP (",(0,r.yg)("strong",{parentName:"p"},"I"),"nstruction ",(0,r.yg)("strong",{parentName:"p"},"P"),"ointer)."),(0,r.yg)("p",null,"EIP is a register that holds the address of the current instruction to be executed. It cannot be directly modified, programmatically, but indirectly through jump, call, and ret instructions."),(0,r.yg)("p",null,"The EFLAGS register contains 32 bits used as status indicators or condition variables. We say that a flag is set if its value is 1. The ones commonly used by programmers are:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Expanded Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CF"),(0,r.yg)("td",{parentName:"tr",align:null},"Carry Flag"),(0,r.yg)("td",{parentName:"tr",align:null},"Set if the result exceeds the maximum (or minimum) unsigned integer value")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"PF"),(0,r.yg)("td",{parentName:"tr",align:null},"Parity Flag"),(0,r.yg)("td",{parentName:"tr",align:null},"Set if the low byte of the result contains an even number of 1 bits")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"AF"),(0,r.yg)("td",{parentName:"tr",align:null},"Auxiliary Carry Flag"),(0,r.yg)("td",{parentName:"tr",align:null},"Used in BCD arithmetic; set if bit 3 generates a carry or borrow")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ZF"),(0,r.yg)("td",{parentName:"tr",align:null},"Zero Flag"),(0,r.yg)("td",{parentName:"tr",align:null},"Set if the result of the previous instruction is 0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SF"),(0,r.yg)("td",{parentName:"tr",align:null},"Sign Flag"),(0,r.yg)("td",{parentName:"tr",align:null},"Has the same value as the sign bit of the result (1 negative, 0 positive)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"OF"),(0,r.yg)("td",{parentName:"tr",align:null},"Overflow Flag"),(0,r.yg)("td",{parentName:"tr",align:null},"Set if the result exceeds the maximum (or minimum) signed integer value")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"NOTE"),': If you follow the evolution of registers from 8086, you\'ll see that initially they were named AX, BX, CX etc., and were 16 bits in size. From 80386, Intel extended these registers to 32 bits (i.e., "extended" AX \u2192 EAX).')),(0,r.yg)("h2",{id:"instruction-classes"},"Instruction Classes"),(0,r.yg)("p",null,"Although the current set of instructions for Intel processors has ",(0,r.yg)("a",{parentName:"p",href:"https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-software-developer-instruction-set-reference-manual-325383.pdf"},"hundreds of instructions"),", we will only look at a ",(0,r.yg)("a",{parentName:"p",href:"http://css.csail.mit.edu/6.858/2015/readings/i386.pdf"},"small portion of them"),". More procisely, some of the 80386 instructions."),(0,r.yg)("p",null,"All x86 processors instructions can fit into 3 categories :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"data movement instructions"),(0,r.yg)("li",{parentName:"ul"},"arithmetical/logical instructions"),(0,r.yg)("li",{parentName:"ul"},"program control instructions")),(0,r.yg)("p",null,"We will only display some of the more important instructions of each category since many of them are alike."),(0,r.yg)("h3",{id:"data-movement-instructions"},"Data Movement Instructions"),(0,r.yg)("p",null,"These instructions are used to transfer data between registers, between memory and registers, and to initialize data:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Operands"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mov"),(0,r.yg)("td",{parentName:"tr",align:null},"dst, src"),(0,r.yg)("td",{parentName:"tr",align:null},"Moves the value from source to the destination(erasing what was in the destination before)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"push"),(0,r.yg)("td",{parentName:"tr",align:null},"src"),(0,r.yg)("td",{parentName:"tr",align:null},'Moves the value from the source onto the "top" of the stack')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pop"),(0,r.yg)("td",{parentName:"tr",align:null},"dst"),(0,r.yg)("td",{parentName:"tr",align:null},'Moves the value from the "top" of the stack into the destination')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"lea"),(0,r.yg)("td",{parentName:"tr",align:null},"dst, src"),(0,r.yg)("td",{parentName:"tr",align:null},"Loads the effective address of the source to the destination")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"xchg"),(0,r.yg)("td",{parentName:"tr",align:null},"dst, src"),(0,r.yg)("td",{parentName:"tr",align:null},"Swaps(Exchanges) the values between the source and the destination")))),(0,r.yg)("h3",{id:"arithmetic-and-logic-instructions"},"Arithmetic and Logic Instructions"),(0,r.yg)("p",null,"These instructions perform arithmetic and logic operations:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Operands"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"add"),(0,r.yg)("td",{parentName:"tr",align:null},"dst, src"),(0,r.yg)("td",{parentName:"tr",align:null},"Adds the source and the destination, storing the result in the destination")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sub"),(0,r.yg)("td",{parentName:"tr",align:null},"dst, src"),(0,r.yg)("td",{parentName:"tr",align:null},"Subtracts the source from the destination, storing the result in the destination")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"and"),(0,r.yg)("td",{parentName:"tr",align:null},"dst, src"),(0,r.yg)("td",{parentName:"tr",align:null},"Calculates logical AND between the source and the destination, storing the result in the destination")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"or"),(0,r.yg)("td",{parentName:"tr",align:null},"dst, src"),(0,r.yg)("td",{parentName:"tr",align:null},"Calculates logical OR between the source and the destination, storing the result in the destination")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"xor"),(0,r.yg)("td",{parentName:"tr",align:null},"dst, src"),(0,r.yg)("td",{parentName:"tr",align:null},"Calculates logical XOR between the source and the destination, storing the result in the destination")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"test"),(0,r.yg)("td",{parentName:"tr",align:null},"dst, src"),(0,r.yg)("td",{parentName:"tr",align:null},"Calculates logical AND between the source and the destination without storing the result")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"shl"),(0,r.yg)("td",{parentName:"tr",align:null},"dst, ",(0,r.yg)("inlineCode",{parentName:"td"},"<const>")),(0,r.yg)("td",{parentName:"tr",align:null},"Calculates the logical shifted value from the destination with a constant number of positions, storing the result in the destination")))),(0,r.yg)("h3",{id:"program-control-instructions"},"Program Control Instructions"),(0,r.yg)("p",null,"These instructions are used to control the flow of programs:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Operands"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jmp"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"<address>")),(0,r.yg)("td",{parentName:"tr",align:null},"Jumps unconditionally to the specified address(directly, by register, by labels)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cmp"),(0,r.yg)("td",{parentName:"tr",align:null},"dst, src"),(0,r.yg)("td",{parentName:"tr",align:null},"Compares the source with the destination(more details below)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"j",(0,r.yg)("inlineCode",{parentName:"td"},"cond")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"<address>")),(0,r.yg)("td",{parentName:"tr",align:null},"Jumps conditionally to the specified address depending on the state of the flag(set/not set)/condition variable")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"call"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"<address>")),(0,r.yg)("td",{parentName:"tr",align:null},"Calls the subroutine located at the specified address")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"NOTE"),": ",(0,r.yg)("a",{parentName:"p",href:"https://www.felixcloutier.com/x86/cmp"},"The 'cmp dest, src' instruction")," effectively calculates ",(0,r.yg)("inlineCode",{parentName:"p"},"dest - src")," behind the scenes(as in subtracting the source from the destination); we are talking about an unsigned subtraction, without storing the result. Therefore, when talking about the code:"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-assembly"},"  cmp eax, 0\n  jl negative\n")),(0,r.yg)("p",{parentName:"blockquote"},"The jump to the ",(0,r.yg)("inlineCode",{parentName:"p"},"negative")," label will be made only if the value in eax is less than ",(0,r.yg)("inlineCode",{parentName:"p"},"0"),". The ",(0,r.yg)("inlineCode",{parentName:"p"},"eax - 0")," subtraction is evaluated and if the result is negative(and so, eax is negative), the jump will be made."),(0,r.yg)("p",{parentName:"blockquote"},"When have comparisons with ",(0,r.yg)("inlineCode",{parentName:"p"},"0"),", the same thing can be done more efficiently using the ",(0,r.yg)("inlineCode",{parentName:"p"},"test")," instruction:"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-assembly"},"  test eax, eax\n  jl negative\n")),(0,r.yg)("p",{parentName:"blockquote"},"More on this ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/X86_Assembly/Control_Flow#Comparison_Instructions"},"here"),".")))}m.isMDXComponent=!0}}]);