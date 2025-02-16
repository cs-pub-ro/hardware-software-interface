"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[227],{2135:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/the-stack-growth-5b1bf5b116f559c5646cc74dd64cd802.svg"},2141:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/the-stack-bb76234db11c39d83991c27fc25aa0bd.svg"},2613:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/process_address_space-1b6a850e54c7237af3ca9a6b1ae6fe31.jpg"},5680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>g});var n=t(6540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),h=o,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return t?n.createElement(g,s(s({ref:a},c),{},{components:t})):n.createElement(g,s({ref:a},c))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=h;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8350:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=t(8168),o=(t(6540),t(5680));const r={},s="Lab 8 - The Stack",i={unversionedId:"Labs/lab8",id:"Labs/lab8",title:"Lab 8 - The Stack",description:"Task: Max",source:"@site/docs/Labs/lab8.md",sourceDirName:"Labs",slug:"/Labs/lab8",permalink:"/hardware-software-interface/Labs/lab8",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Lab 7 - Structures, Vectors and Strings",permalink:"/hardware-software-interface/Labs/lab7"},next:{title:"Lab 9 - Functions",permalink:"/hardware-software-interface/Labs/lab9"}},l={},p=[{value:"Task: Max",id:"task-max",level:2},{value:"Task: Reverse Array",id:"task-reverse-array",level:2},{value:"Task: Stack Addressing",id:"task-stack-addressing",level:2},{value:"Task: Local Var",id:"task-local-var",level:2},{value:"Task: GCD - Greatest Common Divisor",id:"task-gcd---greatest-common-divisor",level:2},{value:"Introduction to the Stack",id:"introduction-to-the-stack",level:2},{value:"Reminder: Stack Data Structure",id:"reminder-stack-data-structure",level:3},{value:"So, Why is it Useful?",id:"so-why-is-it-useful",level:3},{value:"Stack Operations",id:"stack-operations",level:3},{value:"Stack in the Context of a Process&#39;s Address Space",id:"stack-in-the-context-of-a-processs-address-space",level:3},{value:"Tricks and Tips",id:"tricks-and-tips",level:3},{value:"Guide: Stack Operations",id:"guide-stack-operations",level:2},{value:"Guide: Stack Addressing",id:"guide-stack-addressing",level:2}],c={toc:p},u="wrapper";function d(e){let{components:a,...r}=e;return(0,o.yg)(u,(0,n.A)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"lab-8---the-stack"},"Lab 8 - The Stack"),(0,o.yg)("h2",{id:"task-max"},"Task: Max"),(0,o.yg)("p",null,"Calculate the maximum between two numbers in two registers (eax and ebx) using a comparison instruction, a jump instruction, and push/pop instructions."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"TIP:")," Consider how you can swap two registers using the stack.")),(0,o.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,o.yg)("a",{parentName:"p",href:"/hardware-software-interface/Labs/lab8#introduction-to-the-stack"},"this")," reading material"),(0,o.yg)("h2",{id:"task-reverse-array"},"Task: Reverse Array"),(0,o.yg)("p",null,"Building on the ",(0,o.yg)("inlineCode",{parentName:"p"},"reverse-array.asm")," exercise, implement the ",(0,o.yg)("inlineCode",{parentName:"p"},"TODO"),"s without using the ",(0,o.yg)("inlineCode",{parentName:"p"},"mov")," instruction when working with arrays, so that at the end of the program, the ",(0,o.yg)("inlineCode",{parentName:"p"},"output")," array contains the ",(0,o.yg)("inlineCode",{parentName:"p"},"input")," array in reverse order."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"NOTE:")," After a correct solution, the program should print:"),(0,o.yg)("pre",{parentName:"blockquote"},(0,o.yg)("code",{parentName:"pre",className:"language-c"},"Reversed array:\n911\n845\n263\n242\n199\n184\n122\n"))),(0,o.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,o.yg)("a",{parentName:"p",href:"/hardware-software-interface/Labs/lab8#introduction-to-the-stack"},"this")," reading material"),(0,o.yg)("h2",{id:"task-stack-addressing"},"Task: Stack Addressing"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"stack-addressing.asm")," program in the lab's archive allocates and initializes two local variables on the stack:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"an array of natural numbers from 1 to ",(0,o.yg)("inlineCode",{parentName:"li"},"NUM")),(0,o.yg)("li",{parentName:"ul"},'a string "Bob has corn".')),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Replace each ",(0,o.yg)("inlineCode",{parentName:"li"},"push")," instruction with an equivalent sequence of instructions."),(0,o.yg)("li",{parentName:"ol"},"Print the addresses and values on the stack in the interval ",(0,o.yg)("inlineCode",{parentName:"li"},"[esp, ebp]")," (from low addresses to high addresses) byte by byte."),(0,o.yg)("li",{parentName:"ol"},"Print the string allocated on the stack byte by byte and explain how it looks in memory.\nThink about where you should start displaying and when you should stop."),(0,o.yg)("li",{parentName:"ol"},"Print the vector allocated on the stack element by element.\nThink about where you should start displaying and what size each element has.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"NOTE:")," After a successful implementation, the program should display something similar to the following output (it won't be exactly the same, stack memory addresses may differ):"),(0,o.yg)("pre",{parentName:"blockquote"},(0,o.yg)("code",{parentName:"pre",className:"language-c"},"0xffcf071b: 65\n0xffcf071c: 110\n0xffcf071d: 97\n0xffcf071e: 32\n0xffcf071f: 97\n...\n0xffcf0734: 4\n0xffcf0735: 0\n0xffcf0736: 0\n0xffcf0737: 0\n0xffcf0738: 5\n0xffcf0739: 0\n0xffcf073a: 0\n0xffcf073b: 0\nBob has corn\n1 2 3 4 5\n")),(0,o.yg)("p",{parentName:"blockquote"},"Explain the significance of each byte.\nWhy are they arranged in that particular order?\nWhy are some bytes 0?"),(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"TIP:")," Remember that ASCII character codes are represented as decimal values.\nRemember the order in which the bytes of a larger number are stored: review the section ",(0,o.yg)("strong",{parentName:"p"},"Order of representation of numbers larger than one byte")," from Lab 01.")),(0,o.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,o.yg)("a",{parentName:"p",href:"/hardware-software-interface/Labs/lab8#introduction-to-the-stack"},"this")," reading material"),(0,o.yg)("h2",{id:"task-local-var"},"Task: Local Var"),(0,o.yg)("p",null,"The program ",(0,o.yg)("inlineCode",{parentName:"p"},"local-var.asm")," in the laboratory archive combines two sorted arrays (",(0,o.yg)("inlineCode",{parentName:"p"},"array_1")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"array_2"),") by placing the resulting array in ",(0,o.yg)("inlineCode",{parentName:"p"},"array_output")," defined in the ",(0,o.yg)("inlineCode",{parentName:"p"},".data")," section."),(0,o.yg)("p",null,"Modify the program so that ",(0,o.yg)("inlineCode",{parentName:"p"},"array_1"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"array_2"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"array_output")," are allocated on the stack.\nThe array allocation is done using the ",(0,o.yg)("inlineCode",{parentName:"p"},"sub")," instruction.\nFor the copies of arrays ",(0,o.yg)("inlineCode",{parentName:"p"},"array_1")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"array_2"),", you will need to copy their elements from the ",(0,o.yg)("inlineCode",{parentName:"p"},".data")," section to the stack before using them."),(0,o.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,o.yg)("a",{parentName:"p",href:"/hardware-software-interface/Labs/lab8#introduction-to-the-stack"},"this")," reading material"),(0,o.yg)("h2",{id:"task-gcd---greatest-common-divisor"},"Task: GCD - Greatest Common Divisor"),(0,o.yg)("p",null,"Open ",(0,o.yg)("inlineCode",{parentName:"p"},"gcd.asm")," and run the program.\nThe code calculates the greatest common divisor (GCD) of two numbers given as parameters using the ",(0,o.yg)("inlineCode",{parentName:"p"},"eax")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"edx")," registers, and then stores the calculated value back in the ",(0,o.yg)("inlineCode",{parentName:"p"},"eax")," register."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Make the necessary modifications so that the error message - ",(0,o.yg)("inlineCode",{parentName:"li"},"Segmentation fault (core dumped)")," - no longer appears."),(0,o.yg)("li",{parentName:"ol"},"Within the ",(0,o.yg)("inlineCode",{parentName:"li"},"print")," label, display the result in the following format:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c"},"gcd(49,28)=7\n")),(0,o.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,o.yg)("a",{parentName:"p",href:"/hardware-software-interface/Labs/lab8#introduction-to-the-stack"},"this")," reading material"),(0,o.yg)("h2",{id:"introduction-to-the-stack"},"Introduction to the Stack"),(0,o.yg)("p",null,"In this lab, we will learn about how the stack is represented in assembly language, its utility, and how to it could be useful to us."),(0,o.yg)("h3",{id:"reminder-stack-data-structure"},"Reminder: Stack Data Structure"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"NOTE:")," This is a quick reminder on how the abstract data structure works.\nIf you feel like you already understand this, you can skip this part.")),(0,o.yg)("p",null,"In the world of algorithms and data structure, a \"stack\" is a data structure used to hold data, mirroring a real-life stack of objects (for example, a stack of books, or a stack of boxes).\nThis data structure's usefulness comes from optimizing the ease and speed at which elements can be added or removed from the top of the stack.\nIt forces us to think about how our data is organized relative to the stack's base and top.\nThe usual operations with the stack are:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"push")," - add an element to the top of the stack"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"pop")," - get the element from the top of the stack ",(0,o.yg)("strong",{parentName:"li"},"and remove it")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"peek")," or ",(0,o.yg)("inlineCode",{parentName:"li"},"top")," - get the element from the top of the stack ",(0,o.yg)("strong",{parentName:"li"},"without removing it"))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"An image showing a stack data structure at different stages. The empty stack gains the element labeled &quot;1&quot; after the instruction &quot;push 1&quot; is applied to it. After the instruction &quot;push 2&quot;, the stack has two items, element 1 being below element 2. Finally, the &quot;pop&quot; instruction makes the stack lose element 2",src:t(2141).A})),(0,o.yg)("p",null,'As the above image suggests, the order in which items are inserted and removed from a stack is represented by the phrase "first in, last out".'),(0,o.yg)("h3",{id:"so-why-is-it-useful"},"So, Why is it Useful?"),(0,o.yg)("p",null,"In the previous chapters we learned how to work with the basics of assembly.\nA pretty big limitation we have imposed on ourselves by using such a low-level language is the small number of values we can work with at a time.\nFor anything but small programs, having just the 6 registers (",(0,o.yg)("inlineCode",{parentName:"p"},"eax"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"ebx"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"ecx"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"edx"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"esi"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"edi"),") is usually not enough, and creating global variables for temporary values is not memory efficient and, at some point, we'll struggle to even name them something reasonable!"),(0,o.yg)("p",null,"You might have also felt the absence of functions. The stack will help us out as it provides a nice place to store:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"the arguments,"),(0,o.yg)("li",{parentName:"ul"},"the values of registers before entering a function so they can be restored on exit,"),(0,o.yg)("li",{parentName:"ul"},"and some metadata useful for when we want to exit out of a function.")),(0,o.yg)("p",null,"More on this in the next lab."),(0,o.yg)("p",null,"As you might have guessed, the solution to this is to use a stack on which we can put arbitrary values onto.\nWe don't need implement it ourselves - it comes built-in \ud83d\ude04!\nWhenever a program stars, the kernel makes sure a zone of memory is allocated for the sole purpose of writing arbitrary data onto.\nMoreover, CPUs also have some specialized instructions that work directly with this memory in a way similar to how a normal stack works."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"Note"),": The size of the stack memory area is often ",(0,o.yg)("a",{parentName:"p",href:"https://stackoverflow.com/questions/54821412/how-to-increase-stack-size-when-compiling-a-c-program-using-mingw-compiler"},"set at compile-time"),".\nWhen going over the maximum allocated space, you can receive a Segmentation Fault, and the phenomenon is called a ",(0,o.yg)("inlineCode",{parentName:"p"},"Stack Overflow"),".\nYou will have probably received this error when you declare a local array with a very high capacity, or when calling a recursive function which never returns.")),(0,o.yg)("h3",{id:"stack-operations"},"Stack Operations"),(0,o.yg)("p",null,"The stack can be modified in two ways:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"By using special instructions designed for stack operations, the most common of which are ",(0,o.yg)("inlineCode",{parentName:"li"},"push")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"pop"),":")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-assembly"},'%include "io.asm"\n\nsection .text\nglobal CMAIN\nCMAIN:\n\n    mov eax, 7\n    mov ebx, 8\n    add eax, ebx\n    push eax                 ; push the value of the eax register onto the stack\n    mov eax, 10              ; we can now use the eax register, as its value is saved on the stack\n    PRINTF32 `%d \\n\\x0`, eax  ; 10\n\n    pop eax                  ; retrieve the value of the eax register from the stack\n    PRINTF32 `%d \\n\\x0`, eax  ; 15\n')),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"By directly accessing the memory with the help of a special register in which the top of the stack is held - ",(0,o.yg)("inlineCode",{parentName:"li"},"esp"),' also known as the "stack pointer register".')),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-assembly"},'%include "io.asm"\n\nsection .text\nglobal CMAIN\nCMAIN:\n    mov eax, 7\n    mov ebx, 8\n    add eax, ebx\n    sub esp, 4           ; reserve 4 bytes on the stack\n    mov [esp], eax       ; move the contents of the eax register to the new address pointed to by esp\n    mov eax, 10\n    PRINTF32 `%d \\n\\x0`, eax\n\n    mov eax, [esp]       ; retrieve the value from the stack\n    add esp, 4           ; restore the value of the esp register\n    PRINTF32 `%d \\n\\x0`, eax\n')),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"IMPORTANT:")," Comment out the instructions ",(0,o.yg)("inlineCode",{parentName:"p"},"sub esp, 4")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"add esp, 4"),".\nWhat happens?\nWhy?"),(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"NOTE:")," The stack is used to remember the return address when a function is called.\n",(0,o.yg)("strong",{parentName:"p"},"Note that the stack grows from higher addresses to lower addresses."),"\nThis is why memory allocation on the stack is done using the ",(0,o.yg)("inlineCode",{parentName:"p"},"sub")," instruction, and deallocation is done using the ",(0,o.yg)("inlineCode",{parentName:"p"},"add")," instruction.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"stack_image",src:t(2135).A})),(0,o.yg)("p",null,"Some processors do not have support for stack operations: for example, MIPS processors do not have ",(0,o.yg)("inlineCode",{parentName:"p"},"push")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"pop")," instructions and do not have a special register for the stack pointer.\nThus, if we want to implement stack operations on a MIPS processor, we would do it exactly as in the example above, but we can choose any register to keep track of the stack pointer."),(0,o.yg)("p",null,"Therefore, the ",(0,o.yg)("inlineCode",{parentName:"p"},"push eax")," instruction on an x86 processor is equivalent to:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-assembly"},"sub esp, 4\nmov [esp], eax\n")),(0,o.yg)("p",null,"And the ",(0,o.yg)("inlineCode",{parentName:"p"},"pop eax")," is equivalent to:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-assembly"},"mov eax, [esp]\nadd esp, 4\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"IMPORTANT:")," We need to be careful with the amount of data allocated on the stack because the size of the stack is limited.\nOverfilling the stack will lead to the well-known error of ",(0,o.yg)("strong",{parentName:"p"},"stack overflow")," (more in the security lab)."),(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"NOTE:")," The default stack size on Linux for a 64-bit architecture is 8MiB.")),(0,o.yg)("h3",{id:"stack-in-the-context-of-a-processs-address-space"},"Stack in the Context of a Process's Address Space"),(0,o.yg)("p",null,"A process's address space, or more precisely, a process's virtual address space, represents the virtual memory area usable by a process.\nEach process has its own address space.\nEven in situations where two processes share a memory region, the virtual space is distinct, but it maps to the same physical memory region."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"stack_image",src:t(2613).A,width:"253",height:"382"})),(0,o.yg)("p",null,"In the figure above, a typical process's address space is presented."),(0,o.yg)("p",null,"The four important zones in a process's address space are the data zone, the code zone, the stack, and the heap.\nAs can be observed from the figure, the stack and the heap are the zones that can grow.\nIn fact, these two zones are dynamic and only make sense in the context of a process.\nOn the other hand, the information in the data and code zones is described in the executable."),(0,o.yg)("h3",{id:"tricks-and-tips"},"Tricks and Tips"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The golden rule of stack usage is: the number of ",(0,o.yg)("inlineCode",{parentName:"p"},"push"),"-es should equal the number of ",(0,o.yg)("inlineCode",{parentName:"p"},"pop"),"-s in a function.\nGiven that the stack is used for function calls, it is very important that when a function finishes its execution, the stack pointer should be updated so that it points to the same memory location (of the stack) as it did at the time of entering the function.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"In situations where we perform N ",(0,o.yg)("inlineCode",{parentName:"p"},"push"),"-es and reach the end of the function without doing a ",(0,o.yg)("inlineCode",{parentName:"p"},"pop")," for any of the values, we can restore the stack pointer using the ",(0,o.yg)("inlineCode",{parentName:"p"},"add")," instruction."))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-assembly"},"section .text\nglobal CMAIN\nCMAIN:\n    mov eax, 5\n    mov ebx, 6\n    mov ecx, 7\n\n    push eax\n    push ebx\n    push ecx\n\n    add esp, 12     ; equivalent to using 3 consecutive pop-s\n    ret\n")),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"An alternative method is to save the current stack pointer value in a separate register, such as ",(0,o.yg)("inlineCode",{parentName:"li"},"ebp"),", before performing any ",(0,o.yg)("inlineCode",{parentName:"li"},"push")," operations.\nThis allows us to easily restore the stack pointer value at the end of the function, without having to keep track of the number of ",(0,o.yg)("inlineCode",{parentName:"li"},"push")," operations performed.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-assembly"},"section .text\nglobal CMAIN\nCMAIN:\n\n    mov ebp, esp       ; save current stack pointer value in ebp\n\n    mov eax, 5\n    mov ebx, 6\n    mov ecx, 7\n\n    push eax\n    push ebx\n    push ecx\n\n    mov esp, ebp       ; restore stack pointer value\n    ret\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"IMPORTANT:")," What is the primary use of the ",(0,o.yg)("inlineCode",{parentName:"p"},"ebp")," register?")),(0,o.yg)("p",null,"As we can observe, the ",(0,o.yg)("inlineCode",{parentName:"p"},"ebp")," register defines the stack frame for each function.\nSimilarly to how we can address local variables using the ",(0,o.yg)("inlineCode",{parentName:"p"},"esp")," register, we can do the same with ",(0,o.yg)("inlineCode",{parentName:"p"},"ebp"),".\nAdditionally, we will see that function parameters are addressed using ",(0,o.yg)("inlineCode",{parentName:"p"},"ebp"),"."),(0,o.yg)("h2",{id:"guide-stack-operations"},"Guide: Stack Operations"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"stack_operations.asm"),' file demonstrates various stack operations.\nThe main focus is to show how to manipulate the stack by pushing and popping values, and how to "allocate" and "deallocate" memory on the stack.'),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"Note:")," Notice how ",(0,o.yg)("inlineCode",{parentName:"p"},"push")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"pop")," are just syntactic sugar for the simpler ",(0,o.yg)("inlineCode",{parentName:"p"},"sub"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"add"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"mov")," instructions.")),(0,o.yg)("p",null,"For convenience, here's the contents of the file.\nTo play around with it, download the lab locally."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-assembly"},'%include "printf32.asm"\n\nsection .data\n    var: dd ?\n\nsection .text\n\n; esp -> stack pointer\n; ebp -> base pointer\n\nextern printf\nglobal main\nmain:\n    push ebp\n    mov ebp, esp\n\n    push dword 10 ; sub esp, 4;  mov [esp], 10;\n    push dword 11 ; sub esp, 4;  mov [esp], 11;\n    push dword 12 ; sub esp, 4;  mov [esp], 12;\n    push dword 13 ; sub esp, 4;  mov [esp], 13;\n    push dword 14 ; sub esp, 4;  mov [esp], 13;\n\n\n    pusha  ; push all registers on the stack\n    popa  ; pop all registers from the stack\n\n    ; Version 1\n    pop eax; ; mov eax, [esp]; add esp, 4\n    pop eax; ; mov eax, [esp]; add esp, 4\n    pop eax; ; mov eax, [esp]; add esp, 4\n    pop eax; ; mov eax, [esp]; add esp, 4\n    pop eax; ; mov eax, [esp]; add esp, 4\n\n    ; Version 2\n    ; add esp, 20 ; 4 * number_of_push\n\n    ; Version 3\n    ; mov esp, ebp\n\n    ; sub esp <-> add esp -> use to allocate/deallocate memory\n\n    ; Aloc 8 bytes <-> 2 int\n    ; sub esp, 8\n    ; mov [esp], 10\n    ; mov [esp + 4], 12\n\n    ; Push/Pop from global variable\n\n    mov dword [var], 1337\n\n    push dword [var]\n    pop dword [var]\n\n    mov eax, [var]\n    PRINTF32 `VAR: %d\\n\\x0`, eax\n\n\n    leave\n    ret\n')),(0,o.yg)("h2",{id:"guide-stack-addressing"},"Guide: Stack Addressing"),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"stack_addressing.asm")," file demonstrates how data is stored on the stack, and especially in what order."),(0,o.yg)("p",null,"Here's what an usual output for the compiled program would be:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c"},"0xff99fba8: 0xf7f46020\n0xff99fba4: 0xa\n0xff99fba0: 0xb\n0xff99fb9c: 0xc\n0xff99fb98: 0xd\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"Note:")," The last 4 values are the ones we pushed on stack.\nWhat is the first one?"),(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("strong",{parentName:"p"},"Answer:")," It is the old EBP we push at the start of the function.")),(0,o.yg)("p",null,"For convenience, here's the contents of the file.\nTo play around with it, download the lab locally."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-assembly"},'%include "printf32.asm"\n\nsection .text\n\nextern printf\nglobal main\nmain:\n    push ebp\n    mov ebp, esp\n\n    push dword 10\n    push dword 11\n    push dword 12\n    push dword 13\n\n    mov eax, ebp\nprint_stack:\n    PRINTF32 `0x\\x0`\n    PRINTF32 `%x\\x0`, eax\n    PRINTF32 `: 0x\\x0`\n    PRINTF32 `%x\\n\\x0`, [eax]\n\n    sub eax, 4\n    cmp eax, esp\n    jge print_stack\n\n    xor eax, eax\n    leave\n    ret\n')))}d.isMDXComponent=!0}}]);