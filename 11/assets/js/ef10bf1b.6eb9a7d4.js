"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[6736],{5680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>g});var o=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,g=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return t?o.createElement(g,i(i({ref:n},m),{},{components:t})):o.createElement(g,i({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9076:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(8168),r=(t(6540),t(5680));const a={},i="C basics: GOTOs",s={unversionedId:"Lab 4 - Toolchain. GOTO/GOTO statements in C/Reading/README",id:"Lab 4 - Toolchain. GOTO/GOTO statements in C/Reading/README",title:"C basics: GOTOs",description:"A less addressed concept in C tutorials is the goto statement.",source:"@site/docs/Lab 4 - Toolchain. GOTO/GOTO statements in C/Reading/README.md",sourceDirName:"Lab 4 - Toolchain. GOTO/GOTO statements in C/Reading",slug:"/Lab 4 - Toolchain. GOTO/GOTO statements in C/Reading/",permalink:"/hardware-software-interface/11/Lab 4 - Toolchain. GOTO/GOTO statements in C/Reading/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"GOTO statements in C",permalink:"/hardware-software-interface/11/Lab 4 - Toolchain. GOTO/GOTO statements in C/"},next:{title:"Guides",permalink:"/hardware-software-interface/11/Lab 4 - Toolchain. GOTO/GOTO statements in C/Guides/"}},c={},l=[{value:"Syntax",id:"syntax",level:2},{value:"The &quot;WHYs&quot; of <code>goto</code>",id:"the-whys-of-goto",level:2}],m={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,o.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"c-basics-gotos"},"C basics: GOTOs"),(0,r.yg)("p",null,"A less addressed concept in C tutorials is the goto statement.\nUsing the goto statement, a program can jump to intermediate points within a function.\nThese intermediate points are called labels."),(0,r.yg)("h2",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,"Syntax-wise, a label consists of a name followed by the character ",(0,r.yg)("inlineCode",{parentName:"p"},":"),"."),(0,r.yg)("p",null,"Code example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"#include <stdio.h>\n\nint main()\n{\n   int i, j, k;\n   /* some code */\ndo_some_work:\n   /* some other code */\n   work();\n   if (any_work())\n       goto do_some_work;\n   /* some code */\n   return 0;\n}\n")),(0,r.yg)("p",null,"The program executes a job through the ",(0,r.yg)("inlineCode",{parentName:"p"},"work()")," function.\nIn case there are other unfinished jobs, the program execution jumps to the label do_some_work.\ndo_some_work marks the point in the program where the processing of a new job begins.\nTo jump to this point, the goto statement followed by the declared label name is used.\nThrough different combinations of ",(0,r.yg)("inlineCode",{parentName:"p"},"if")," statements and ",(0,r.yg)("inlineCode",{parentName:"p"},"goto")," statements, other C instructions such as ",(0,r.yg)("inlineCode",{parentName:"p"},"else"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"for"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"while")," can be emulated."),(0,r.yg)("p",null,"The example code given above could be replaced with ",(0,r.yg)("inlineCode",{parentName:"p"},"do { \u2026 } while ();"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"#include <stdio.h>\n\nint main()\n{\n    int i, j, k;\n    /* some code */\n    do {\n        /* some other code */\n        work();\n    } while (any_work());\n    /* some code */\n    return 0;\n}\n")),(0,r.yg)("h2",{id:"the-whys-of-goto"},'The "WHYs" of ',(0,r.yg)("inlineCode",{parentName:"h2"},"goto")),(0,r.yg)("p",null,"Not only is this instruction missing in many C tutorials, but recommendations are made against using it because it often leads to obfuscated code (difficult to understand, maintain, and debug).\nHowever, there are cases where it is used.\nIn the Linux kernel code, for example, ",(0,r.yg)("inlineCode",{parentName:"p"},"goto")," instructions are used as a form of try-catch from higher-level languages (such as C++, Java, C#, etc.).\nExample:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'int process_data_from_mouse_device(...)\n{\n    int err;\n    int x, y;\n\n    /* >>try<< instructions */\n    err = init_communication_with_mouse();\n    if (err)\n        goto error;\n\n    err = get_x_coord_from_mouse(&x);\n    if (err)\n        goto error;\n\n    err = get_y_coord_from_mouse(&y);\n    if (err)\n        goto error;\n\n    err = announce_upper_layers_of_mouse_movement(x, y);\n    if (err)\n        goto error;\n\n    err = close_communication_with_mouse();\n    if (err)\n        goto error;\n\n    return 0;\n\n    /* >>catch<< instructions\' exceptions */\nerror:\n    print_message("Failed to get data from mouse device. Error = %d", err);\n    return err;\n}\n')),(0,r.yg)("p",null,"This code attempts to process data coming from a mouse and pass it to other higher-level parts of the kernel that could use it.\nIn case an error occurs, an error message is displayed, and the data processing is terminated.\nThe code seems correct but is not complete.\nIt's incomplete because if an error occurs in the middle of the function, communication with the mouse is left open.\nAn improved version would be the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'int process_data_from_mouse_device(...)\n{\n    int err;\n    int x, y;\n\n    /* >>try<< instructions */\n    err = init_communication_with_mouse();\n    if (err)\n        goto error;\n\n    err = get_x_coord_from_mouse(&x);\n    if (err)\n        goto error_close_connection;\n\n    err = get_y_coord_from_mouse(&y);\n    if (err)\n        goto error_close_connection;\n\n    err = announce_upper_layers_of_mouse_movement(x, y);\n    if (err)\n        goto error_close_connection;\n\n    err = close_communication_with_mouse();\n    if (err)\n        goto error;\n\n    return 0;\n\n    /* >>catch<< instructions\' exceptions */\nerror_close_connection:\n    close_communication_with_mouse();\nerror:\n    print_message("Failed to get data from mouse device. Error = %d", err);\n    return err;\n}\n')),(0,r.yg)("p",null,"In the improved version, if an error occurs, a cleanup part is also performed: the connection with the mouse will be closed, and then the code will continue with the general error handling of any errors in the program (displaying an error message)."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"NOTE"),": Why does this course/lab cover such a topic?"),(0,r.yg)("p",{parentName:"blockquote"},"When we study assembly language, we will notice that a large portion of the workflow resembles a program made up of goto statements, even though most instructions of a high-level language, such as C, are nonexistent.\nThinking in terms of goto statements and including them in our code prepares us for working in assembly language."),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"WARNING"),": In any other situation, this form of programming should be avoided as much as possible.\n",(0,r.yg)("img",{parentName:"p",src:"https://imgs.xkcd.com/comics/goto.png",alt:"goto.png"}))))}p.isMDXComponent=!0}}]);