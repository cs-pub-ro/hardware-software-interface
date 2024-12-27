"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[1109],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),g=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=g(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=g(n),y=r,u=p["".concat(s,".").concat(y)]||p[y]||m[y]||i;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var g=2;g<i;g++)l[g]=n[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var a=n(8168),r=(n(6540),n(5680));const i={},l="x86 Family",o={unversionedId:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Reading/README",id:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Reading/README",title:"x86 Family",description:"Almost all major processors from Intel share a common ISA (Instruction Set Architecture).",source:"@site/docs/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Reading/README.md",sourceDirName:"Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Reading",slug:"/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Reading/",permalink:"/hardware-software-interface/26/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Reading/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"x86 Architecture Family",permalink:"/hardware-software-interface/26/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/"},next:{title:"Guides",permalink:"/hardware-software-interface/26/Lab 5 - Introduction to Assembly Language/x86 Architecture Family/Guides/"}},s={},g=[{value:"Registers",id:"registers",level:2},{value:"Instruction Classes",id:"instruction-classes",level:2},{value:"Data Movement Instructions",id:"data-movement-instructions",level:3},{value:"Arithmetic and Logic Instructions",id:"arithmetic-and-logic-instructions",level:3},{value:"Program Control Instructions",id:"program-control-instructions",level:3}],d={toc:g},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"x86-family"},"x86 Family"),(0,r.yg)("p",null,"Almost all major processors from Intel share a common ISA (Instruction Set Architecture).\nThese processors are highly backward compatible, with most instructions unchanged over generations, but only added or extended."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"NOTE"),": An ISA defines the instructions supported by a processor, register size, addressing modes, data types, instruction format, interrupts, and memory organization.\nProcessors in this family fall into the broad category of CISC (Complex Instruction Set Computers).\nThe philosophy behind them is to have a large number of instructions, with variable length, capable of performing complex operations, over multiple clock cycles.")),(0,r.yg)("h2",{id:"registers"},"Registers"),(0,r.yg)("p",null,"The basic working units for x86 processors are registers.\nThese are a suite of locations within the processor through which it interacts with memory, I/O, etc."),(0,r.yg)("p",null,"x86 processors have 8 such 32-bit registers.\nAlthough any of these can be used in operations, for historical reasons, each register has a specific role."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Role"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"eax")),(0,r.yg)("td",{parentName:"tr",align:null},"accumulator; system calls, I/O, arithmetic")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ebx")),(0,r.yg)("td",{parentName:"tr",align:null},"base register; used for memory-based addressing")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ecx")),(0,r.yg)("td",{parentName:"tr",align:null},"counter in loop instructions")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"edx")),(0,r.yg)("td",{parentName:"tr",align:null},"data register, used for I/O, arithmetic, interrupt values; can extend eax to 64 bits")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"esi")),(0,r.yg)("td",{parentName:"tr",align:null},"source in string operations")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"edi")),(0,r.yg)("td",{parentName:"tr",align:null},"destination in string operations")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ebp")),(0,r.yg)("td",{parentName:"tr",align:null},"base or frame pointer; points to the current stack frame")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"esp")),(0,r.yg)("td",{parentName:"tr",align:null},"stack pointer; points to the top of the stack")))),(0,r.yg)("p",null,"In addition to these, there are some special registers that cannot be directly accessed by the programmer, such as ",(0,r.yg)("inlineCode",{parentName:"p"},"eflags")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"eip")," (Instruction Pointer)."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"eip")," is a register that holds the address of the current instruction to be executed.\nIt cannot be directly modified, programmatically, but indirectly through jump, call, and ret instructions."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"eflags")," register contains ",(0,r.yg)("inlineCode",{parentName:"p"},"32")," bits used as status indicators or condition variables.\nWe say that a flag is set if its value is ",(0,r.yg)("inlineCode",{parentName:"p"},"1"),". The ones commonly used by programmers are:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Expanded Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"CF")),(0,r.yg)("td",{parentName:"tr",align:null},"Carry Flag"),(0,r.yg)("td",{parentName:"tr",align:null},"Set if the result exceeds the maximum (or minimum) unsigned integer value")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PF")),(0,r.yg)("td",{parentName:"tr",align:null},"Parity Flag"),(0,r.yg)("td",{parentName:"tr",align:null},"Set if the low byte of the result contains an even number of 1 bits")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"AF")),(0,r.yg)("td",{parentName:"tr",align:null},"Auxiliary Carry Flag"),(0,r.yg)("td",{parentName:"tr",align:null},"Used in BCD arithmetic; set if bit 3 generates a carry or borrow")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"ZF")),(0,r.yg)("td",{parentName:"tr",align:null},"Zero Flag"),(0,r.yg)("td",{parentName:"tr",align:null},"Set if the result of the previous instruction is 0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"SF")),(0,r.yg)("td",{parentName:"tr",align:null},"Sign Flag"),(0,r.yg)("td",{parentName:"tr",align:null},"Has the same value as the sign bit of the result (1 negative, 0 positive)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"OF")),(0,r.yg)("td",{parentName:"tr",align:null},"Overflow Flag"),(0,r.yg)("td",{parentName:"tr",align:null},"Set if the result exceeds the maximum (or minimum) signed integer value")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"NOTE"),": If you follow the evolution of registers from 8086, you'll see that initially they were named ",(0,r.yg)("inlineCode",{parentName:"p"},"ax"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"bx"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"cx"),' etc., and were 16 bits in size.\nFrom 80386, Intel extended these registers to 32 bits (i.e., "extended" ',(0,r.yg)("inlineCode",{parentName:"p"},"ax")," \u2192 ",(0,r.yg)("inlineCode",{parentName:"p"},"eax"),").")),(0,r.yg)("h2",{id:"instruction-classes"},"Instruction Classes"),(0,r.yg)("p",null,"Although the current set of instructions for Intel processors has ",(0,r.yg)("a",{parentName:"p",href:"https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-software-developer-instruction-set-reference-manual-325383.pdf"},"hundreds of instructions"),", we will only look at a ",(0,r.yg)("a",{parentName:"p",href:"http://css.csail.mit.edu/6.858/2015/readings/i386.pdf"},"small portion of them"),".\nMore precisely, some of the 80386 instructions."),(0,r.yg)("p",null,"All x86 processors instructions can fit into 3 categories :"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"data movement instructions"),(0,r.yg)("li",{parentName:"ul"},"arithmetical/logical instructions"),(0,r.yg)("li",{parentName:"ul"},"program control instructions")),(0,r.yg)("p",null,"We will only display some of the more important instructions of each category since many of them are alike."),(0,r.yg)("h3",{id:"data-movement-instructions"},"Data Movement Instructions"),(0,r.yg)("p",null,"These instructions are used to transfer data between registers, between memory and registers, and to initialize data:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Operands"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"mov")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dst, src")),(0,r.yg)("td",{parentName:"tr",align:null},"Moves the value from source to the destination(erasing what was in the destination before)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"push")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"src")),(0,r.yg)("td",{parentName:"tr",align:null},'Moves the value from the source onto the "top" of the stack')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"pop")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dst")),(0,r.yg)("td",{parentName:"tr",align:null},'Moves the value from the "top" of the stack into the destination')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"lea")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dst, src")),(0,r.yg)("td",{parentName:"tr",align:null},"Loads the effective address of the source to the destination")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"xchg")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dst, src")),(0,r.yg)("td",{parentName:"tr",align:null},"Swaps(Exchanges) the values between the source and the destination")))),(0,r.yg)("h3",{id:"arithmetic-and-logic-instructions"},"Arithmetic and Logic Instructions"),(0,r.yg)("p",null,"These instructions perform arithmetic and logic operations:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Operands"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"add")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dst, src")),(0,r.yg)("td",{parentName:"tr",align:null},"Adds the source and the destination, storing the result in the destination")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"sub")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dst, src")),(0,r.yg)("td",{parentName:"tr",align:null},"Subtracts the source from the destination, storing the result in the destination")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"and")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dst, src")),(0,r.yg)("td",{parentName:"tr",align:null},"Calculates logical AND between the source and the destination, storing the result in the destination")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"or")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dst, src")),(0,r.yg)("td",{parentName:"tr",align:null},"Calculates logical OR between the source and the destination, storing the result in the destination")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"xor")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dst, src")),(0,r.yg)("td",{parentName:"tr",align:null},"Calculates logical XOR between the source and the destination, storing the result in the destination")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"test")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dst, src")),(0,r.yg)("td",{parentName:"tr",align:null},"Calculates logical AND between the source and the destination without storing the result")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"shl")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dst, <const>")),(0,r.yg)("td",{parentName:"tr",align:null},"Calculates the logical shifted value from the destination with a constant number of positions, storing the result in the destination")))),(0,r.yg)("h3",{id:"program-control-instructions"},"Program Control Instructions"),(0,r.yg)("p",null,"These instructions are used to control the flow of programs:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Operands"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"jmp")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"<address>")),(0,r.yg)("td",{parentName:"tr",align:null},"Jumps unconditionally to the specified address(directly, by register, by labels)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"cmp")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"dst, src")),(0,r.yg)("td",{parentName:"tr",align:null},"Compares the source with the destination(more details below)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"j",(0,r.yg)("inlineCode",{parentName:"td"},"cond")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"<address>")),(0,r.yg)("td",{parentName:"tr",align:null},"Jumps conditionally to the specified address depending on the state of the flag(set/not set)/condition variable")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"call"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"<address>")),(0,r.yg)("td",{parentName:"tr",align:null},"Calls the subroutine located at the specified address")))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"NOTE"),": ",(0,r.yg)("a",{parentName:"p",href:"https://www.felixcloutier.com/x86/cmp"},"The 'cmp dest, src' instruction")," effectively calculates ",(0,r.yg)("inlineCode",{parentName:"p"},"dest - src")," behind the scenes(as in subtracting the source from the destination).\nWe are talking about an unsigned subtraction, without storing the result.")),(0,r.yg)("p",null,"Therefore, when talking about the code:"),(0,r.yg)("blockquote",null,(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-assembly"},"  cmp eax, 0\n  jl negative\n"))),(0,r.yg)("p",null,"The jump to the ",(0,r.yg)("inlineCode",{parentName:"p"},"negative")," label will be made only if the value in eax is less than ",(0,r.yg)("inlineCode",{parentName:"p"},"0"),".\nThe ",(0,r.yg)("inlineCode",{parentName:"p"},"eax - 0")," subtraction is evaluated and if the result is negative(and so, eax is negative), the jump will be made.\\\nWhen have comparisons with ",(0,r.yg)("inlineCode",{parentName:"p"},"0"),", the same thing can be done more efficiently using the ",(0,r.yg)("inlineCode",{parentName:"p"},"test")," instruction:"),(0,r.yg)("blockquote",null,(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-assembly"},"  test eax, eax\n  jl negative\n"))),(0,r.yg)("p",null,"More on this ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/X86_Assembly/Control_Flow#Comparison_Instructions"},"here"),"."))}m.isMDXComponent=!0}}]);