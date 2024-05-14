"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[4320],{5680:(e,a,n)=>{n.d(a,{xA:()=>o,yg:()=>d});var t=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function m(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),l=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},o=function(e){var a=l(e.components);return t.createElement(p.Provider,{value:a},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),g=l(n),c=r,d=g["".concat(p,".").concat(c)]||g[c]||y[c]||s;return n?t.createElement(d,i(i({ref:a},o),{},{components:n})):t.createElement(d,i({ref:a},o))}));function d(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=c;var m={};for(var p in a)hasOwnProperty.call(a,p)&&(m[p]=a[p]);m.originalType=e,m[g]="string"==typeof e?e:r,i[1]=m;for(var l=2;l<s;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7615:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>m,toc:()=>l});var t=n(8168),r=(n(6540),n(5680));const s={},i="Binary and Hexadecimal Systems",m={unversionedId:"Lab 1 - Number Representation/Binary and Hexadecimal/Reading/README",id:"Lab 1 - Number Representation/Binary and Hexadecimal/Reading/README",title:"Binary and Hexadecimal Systems",description:"For representing information (instructions and data), computers use the binary system (base 2).",source:"@site/docs/Lab 1 - Number Representation/Binary and Hexadecimal/Reading/README.md",sourceDirName:"Lab 1 - Number Representation/Binary and Hexadecimal/Reading",slug:"/Lab 1 - Number Representation/Binary and Hexadecimal/Reading/",permalink:"/hardware-software-interface/23/Lab 1 - Number Representation/Binary and Hexadecimal/Reading/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Binary and Hexadecimal",permalink:"/hardware-software-interface/23/Lab 1 - Number Representation/Binary and Hexadecimal/"},next:{title:"Drills",permalink:"/hardware-software-interface/23/Lab 1 - Number Representation/Binary and Hexadecimal/Drills/"}},p={},l=[{value:"Binary System",id:"binary-system",level:2},{value:"Operations with Values Represented in Binary",id:"operations-with-values-represented-in-binary",level:3},{value:"Arithmetic Operations",id:"arithmetic-operations",level:4},{value:"Logical Operations",id:"logical-operations",level:3},{value:"Operators on Binary Values",id:"operators-on-binary-values",level:4},{value:"Logical Shifts",id:"logical-shifts",level:4},{value:"Hexadecimal System",id:"hexadecimal-system",level:2},{value:"Conversion from Decimal to Binary/Hexadecimal",id:"conversion-from-decimal-to-binaryhexadecimal",level:3},{value:"Example: Conversion of the number 0xD9B1 to decimal",id:"example-conversion-of-the-number-0xd9b1-to-decimal",level:4},{value:"Conversion between Binary and Hexadecimal",id:"conversion-between-binary-and-hexadecimal",level:3},{value:"Example: Conversion of the number 0xD9B1 to binary",id:"example-conversion-of-the-number-0xd9b1-to-binary",level:4},{value:"Use of Base 16 Representation",id:"use-of-base-16-representation",level:3},{value:"Representation of Data Types",id:"representation-of-data-types",level:2},{value:"Order of Representation for Numbers Larger than One Byte (Little-Endian vs Big-Endian)",id:"order-of-representation-for-numbers-larger-than-one-byte-little-endian-vs-big-endian",level:2}],o={toc:l},g="wrapper";function y(e){let{components:a,...s}=e;return(0,r.yg)(g,(0,t.A)({},o,s,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"binary-and-hexadecimal-systems"},"Binary and Hexadecimal Systems"),(0,r.yg)("p",null,"For representing information (instructions and data), computers use the binary system (base 2).\nWhen writing programs in assembly language, the hexadecimal system (base 16) is preferred because it saves the programmer from writing long strings of 1s and 0s, and conversion to/from binary can be done much more easily than with the decimal system (base 10)."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"NOTE"),": We'll use the prefix ",(0,r.yg)("inlineCode",{parentName:"p"},"0b")," for representing numbers in binary and ",(0,r.yg)("inlineCode",{parentName:"p"},"0x")," for hexadecimal numbers.\nFor example, we can write the unsigned integer ",(0,r.yg)("inlineCode",{parentName:"p"},"127")," as ",(0,r.yg)("inlineCode",{parentName:"p"},"0b01111111")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"0x7F"),".")),(0,r.yg)("h2",{id:"binary-system"},"Binary System"),(0,r.yg)("p",null,"In the ",(0,r.yg)("strong",{parentName:"p"},"binary system")," (base 2), values are represented as a string of 0s and 1s.\nEach digit in the string represents a bit, and a group of 8 bits forms a byte.\nA group of 4 bits is called a ",(0,r.yg)("strong",{parentName:"p"},"nibble")," or ",(0,r.yg)("strong",{parentName:"p"},"half-byte"),"."),(0,r.yg)("h3",{id:"operations-with-values-represented-in-binary"},"Operations with Values Represented in Binary"),(0,r.yg)("h4",{id:"arithmetic-operations"},"Arithmetic Operations"),(0,r.yg)("p",null,"Arithmetic operations are the classic ",(0,r.yg)("inlineCode",{parentName:"p"},"+"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"-"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"*"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"/")," (integer division), ",(0,r.yg)("inlineCode",{parentName:"p"},"%")," (modulo).\nFundamentally they work the same way in any base 10, 2, 16 etc.\nJust keep in mind what the maximum digit is for each of these bases so you know when to carry or subtract 1 to or from the higher-order digit of the result or operand."),(0,r.yg)("p",null,"You can find a few examples of arithmetic operations in base 2 ",(0,r.yg)("a",{parentName:"p",href:"https://www.tutorialspoint.com/computer_logical_organization/binary_arithmetic.htm"},"here")),(0,r.yg)("h3",{id:"logical-operations"},"Logical Operations"),(0,r.yg)("h4",{id:"operators-on-binary-values"},"Operators on Binary Values"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"NOT Operation"),":\nInverts each bit.")),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"INV(0b10011010) = 0b01100101\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Logical AND Operation"),":\nPerforms the 'and' operation between bits at the same positions in operands.")),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"0b1001 AND 0b0111 = 0b0001\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Logical OR Operation"),":\nPerforms the 'or' operation between bits at the same positions in operands.")),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"0b1001 OR 0b0111 = 0b1111\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Exclusive OR (XOR) Operation"),":")),(0,r.yg)("p",null,"If bits at the same positions in operands have equal values, the resulting bit is 0;\notherwise, it's 1."),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"0b1001 XOR 0b0111 = 0b1110\n")),(0,r.yg)("h4",{id:"logical-shifts"},"Logical Shifts"),(0,r.yg)("p",null,"Logical shifts left/right involve moving each bit by one position.\nSince the result must be on the same number of bits as the initial value, the first bit is lost, and the empty space is filled with a 0 bit."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Left Logical Shift",src:n(5902).A})),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Right Logical Shift",src:n(9751).A})),(0,r.yg)("p",null,"For explanations related to bitwise operations in C, refer to the guide at ",(0,r.yg)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/"},"Bitwise Operators in C"),"."),(0,r.yg)("h2",{id:"hexadecimal-system"},"Hexadecimal System"),(0,r.yg)("p",null,"In the ",(0,r.yg)("strong",{parentName:"p"},"hexadecimal system")," (base 16), values are represented as a string of characters from '0' to '9' or 'a' to 'f'.\nA byte consists of two such characters, so each character corresponds to a group of 4 bits (a nibble)."),(0,r.yg)("h3",{id:"conversion-from-decimal-to-binaryhexadecimal"},"Conversion from Decimal to Binary/Hexadecimal"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Divide the number successively by the base number (2 or 16) and keep the remainders."),(0,r.yg)("li",{parentName:"ul"},"When the quotient of the division becomes 0, write down the remainders in reverse order."),(0,r.yg)("li",{parentName:"ul"},"In the case of base 16, when the remainder is greater than 9, letters a-f are used (",(0,r.yg)("inlineCode",{parentName:"li"},"0xa = 10"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"0xf = 15"),").")),(0,r.yg)("h4",{id:"example-conversion-of-the-number-0xd9b1-to-decimal"},"Example: Conversion of the number 0xD9B1 to decimal"),(0,r.yg)("div",{className:"math math-display"},(0,r.yg)("span",{parentName:"div",className:"katex-display"},(0,r.yg)("span",{parentName:"span",className:"katex"},(0,r.yg)("span",{parentName:"span",className:"katex-mathml"},(0,r.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.yg)("semantics",{parentName:"math"},(0,r.yg)("mrow",{parentName:"semantics"},(0,r.yg)("mtext",{parentName:"mrow",mathvariant:"monospace"},"0xD9B1"),(0,r.yg)("mo",{parentName:"mrow"},"="),(0,r.yg)("mn",{parentName:"mrow"},"1"),(0,r.yg)("mo",{parentName:"mrow"},"\u22c5"),(0,r.yg)("mn",{parentName:"mrow"},"1"),(0,r.yg)("msup",{parentName:"mrow"},(0,r.yg)("mn",{parentName:"msup"},"6"),(0,r.yg)("mn",{parentName:"msup"},"0")),(0,r.yg)("mo",{parentName:"mrow"},"+"),(0,r.yg)("mn",{parentName:"mrow"},"11"),(0,r.yg)("mo",{parentName:"mrow"},"\u22c5"),(0,r.yg)("mn",{parentName:"mrow"},"1"),(0,r.yg)("msup",{parentName:"mrow"},(0,r.yg)("mn",{parentName:"msup"},"6"),(0,r.yg)("mn",{parentName:"msup"},"1")),(0,r.yg)("mo",{parentName:"mrow"},"+"),(0,r.yg)("mn",{parentName:"mrow"},"9"),(0,r.yg)("mo",{parentName:"mrow"},"\u22c5"),(0,r.yg)("mn",{parentName:"mrow"},"1"),(0,r.yg)("msup",{parentName:"mrow"},(0,r.yg)("mn",{parentName:"msup"},"6"),(0,r.yg)("mn",{parentName:"msup"},"2")),(0,r.yg)("mo",{parentName:"mrow"},"+"),(0,r.yg)("mn",{parentName:"mrow"},"13"),(0,r.yg)("mo",{parentName:"mrow"},"\u22c5"),(0,r.yg)("mn",{parentName:"mrow"},"1"),(0,r.yg)("msup",{parentName:"mrow"},(0,r.yg)("mn",{parentName:"msup"},"6"),(0,r.yg)("mn",{parentName:"msup"},"3")),(0,r.yg)("mo",{parentName:"mrow"},"="),(0,r.yg)("mn",{parentName:"mrow"},"55729")),(0,r.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\texttt{0xD9B1} = 1 \\cdot 16 ^ 0 + 11 \\cdot 16 ^ 1 + 9 \\cdot 16 ^ 2 + 13 \\cdot 16 ^ 3 = 55729")))),(0,r.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"0.6111em"}}),(0,r.yg)("span",{parentName:"span",className:"mord text"},(0,r.yg)("span",{parentName:"span",className:"mord texttt"},"0xD9B1")),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.yg)("span",{parentName:"span",className:"mrel"},"="),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.yg)("span",{parentName:"span",className:"mord"},"1"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.yg)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"0.9474em",verticalAlign:"-0.0833em"}}),(0,r.yg)("span",{parentName:"span",className:"mord"},"1"),(0,r.yg)("span",{parentName:"span",className:"mord"},(0,r.yg)("span",{parentName:"span",className:"mord"},"6"),(0,r.yg)("span",{parentName:"span",className:"msupsub"},(0,r.yg)("span",{parentName:"span",className:"vlist-t"},(0,r.yg)("span",{parentName:"span",className:"vlist-r"},(0,r.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8641em"}},(0,r.yg)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,r.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.yg)("span",{parentName:"span",className:"mord mtight"},"0")))))))),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.yg)("span",{parentName:"span",className:"mbin"},"+"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.yg)("span",{parentName:"span",className:"mord"},"11"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.yg)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"0.9474em",verticalAlign:"-0.0833em"}}),(0,r.yg)("span",{parentName:"span",className:"mord"},"1"),(0,r.yg)("span",{parentName:"span",className:"mord"},(0,r.yg)("span",{parentName:"span",className:"mord"},"6"),(0,r.yg)("span",{parentName:"span",className:"msupsub"},(0,r.yg)("span",{parentName:"span",className:"vlist-t"},(0,r.yg)("span",{parentName:"span",className:"vlist-r"},(0,r.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8641em"}},(0,r.yg)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,r.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.yg)("span",{parentName:"span",className:"mord mtight"},"1")))))))),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.yg)("span",{parentName:"span",className:"mbin"},"+"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.yg)("span",{parentName:"span",className:"mord"},"9"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.yg)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"0.9474em",verticalAlign:"-0.0833em"}}),(0,r.yg)("span",{parentName:"span",className:"mord"},"1"),(0,r.yg)("span",{parentName:"span",className:"mord"},(0,r.yg)("span",{parentName:"span",className:"mord"},"6"),(0,r.yg)("span",{parentName:"span",className:"msupsub"},(0,r.yg)("span",{parentName:"span",className:"vlist-t"},(0,r.yg)("span",{parentName:"span",className:"vlist-r"},(0,r.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8641em"}},(0,r.yg)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,r.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.yg)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.yg)("span",{parentName:"span",className:"mbin"},"+"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.yg)("span",{parentName:"span",className:"mord"},"13"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.yg)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8641em"}}),(0,r.yg)("span",{parentName:"span",className:"mord"},"1"),(0,r.yg)("span",{parentName:"span",className:"mord"},(0,r.yg)("span",{parentName:"span",className:"mord"},"6"),(0,r.yg)("span",{parentName:"span",className:"msupsub"},(0,r.yg)("span",{parentName:"span",className:"vlist-t"},(0,r.yg)("span",{parentName:"span",className:"vlist-r"},(0,r.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8641em"}},(0,r.yg)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,r.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.yg)("span",{parentName:"span",className:"mord mtight"},"3")))))))),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.yg)("span",{parentName:"span",className:"mrel"},"="),(0,r.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.yg)("span",{parentName:"span",className:"base"},(0,r.yg)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.yg)("span",{parentName:"span",className:"mord"},"55729")))))),(0,r.yg)("h3",{id:"conversion-between-binary-and-hexadecimal"},"Conversion between Binary and Hexadecimal"),(0,r.yg)("p",null,"As mentioned earlier, a digit in a hexadecimal number corresponds to a group of 4 bits (a nibble).\nTherefore, to convert a number from hexadecimal to binary, it's sufficient to transform each digit into the equivalent 4-bit group."),(0,r.yg)("h4",{id:"example-conversion-of-the-number-0xd9b1-to-binary"},"Example: Conversion of the number 0xD9B1 to binary"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"0x1 = 0b0001")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"0xB = 0b1011")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"0x9 = 0b1001")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"0xD = 0b1101"))),(0,r.yg)("p",null,"Thus, the resulting binary number is ",(0,r.yg)("inlineCode",{parentName:"p"},"0b1101100110110001"),"."),(0,r.yg)("p",null,"The reverse operation, conversion from binary to hexadecimal, can be done by converting each group of 4 bits into the corresponding digit in hexadecimal."),(0,r.yg)("h3",{id:"use-of-base-16-representation"},"Use of Base 16 Representation"),(0,r.yg)("p",null,"The hexadecimal system is used to represent memory addresses and to visualize data in a more interpretable way than a sequence composed only of 0s and 1s.\nThe image below provides an example in this regard:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Memory Map",src:n(2456).A,width:"845",height:"475"})),(0,r.yg)("p",null,"(Image taken from ",(0,r.yg)("a",{parentName:"p",href:"https://www.digital-detective.net/"},"Digital Detective"),")"),(0,r.yg)("h2",{id:"representation-of-data-types"},"Representation of Data Types"),(0,r.yg)("p",null,"In a computer's memory, a value is stored on a fixed number of bits.\nDepending on the architecture, each processor can access a maximum number of bits in a single operation, which represents the word size."),(0,r.yg)("p",null,"The sizes of common data types used in C are dependent on both the processor and the platform on which the program was compiled (operating system, compiler).\nThe table below presents the sizes of data types on a 32-bit architecture processor, when the program is compiled using gcc under Linux."),(0,r.yg)("p",null,"On the left side of the image ",(0,r.yg)("a",{parentName:"p",href:"#use-of-base-16-representation"},"above"),", we have memory addresses where data is located.\nAt address ",(0,r.yg)("inlineCode",{parentName:"p"},"0x0009FA08"),", the first 4 bytes starting from offset ",(0,r.yg)("inlineCode",{parentName:"p"},"0x02")," are ",(0,r.yg)("inlineCode",{parentName:"p"},"0x01")," ",(0,r.yg)("inlineCode",{parentName:"p"},"0x00"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"0xFF"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"0xFF"),".\nThese can represent a 4-byte integer, 4 characters, or 2 integers on 2 bytes.\nBy using base 16, we can interpret the data and infer what they might represent."),(0,r.yg)("p",null,"The table below shows the sizes of data types on a 32-bit processor."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Data Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Number of Bits"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Number of Bytes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"char")),(0,r.yg)("td",{parentName:"tr",align:"center"},"8"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"short")),(0,r.yg)("td",{parentName:"tr",align:"center"},"16"),(0,r.yg)("td",{parentName:"tr",align:"center"},"2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"int")),(0,r.yg)("td",{parentName:"tr",align:"center"},"32"),(0,r.yg)("td",{parentName:"tr",align:"center"},"4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"size_t")),(0,r.yg)("td",{parentName:"tr",align:"center"},"32"),(0,r.yg)("td",{parentName:"tr",align:"center"},"4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"long")),(0,r.yg)("td",{parentName:"tr",align:"center"},"32"),(0,r.yg)("td",{parentName:"tr",align:"center"},"4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"long long")),(0,r.yg)("td",{parentName:"tr",align:"center"},"64"),(0,r.yg)("td",{parentName:"tr",align:"center"},"8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"pointer"),(0,r.yg)("td",{parentName:"tr",align:"center"},"32"),(0,r.yg)("td",{parentName:"tr",align:"center"},"4")))),(0,r.yg)("p",null,"On a 64-bit machine, the table above still holds true except for the types below.\nOn 64-bit processors, addresses are 64 bits wide, which obviously affects the size of pointers and ",(0,r.yg)("inlineCode",{parentName:"p"},"size_t"),"."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Data Type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Number of Bits"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Number of Bytes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"size_t")),(0,r.yg)("td",{parentName:"tr",align:"center"},"64"),(0,r.yg)("td",{parentName:"tr",align:"center"},"8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("inlineCode",{parentName:"td"},"long")),(0,r.yg)("td",{parentName:"tr",align:"center"},"64"),(0,r.yg)("td",{parentName:"tr",align:"center"},"8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"pointer"),(0,r.yg)("td",{parentName:"tr",align:"center"},"64"),(0,r.yg)("td",{parentName:"tr",align:"center"},"8")))),(0,r.yg)("h2",{id:"order-of-representation-for-numbers-larger-than-one-byte-little-endian-vs-big-endian"},"Order of Representation for Numbers Larger than One Byte (Little-Endian vs Big-Endian)"),(0,r.yg)("p",null,"For representing values larger than one byte, there are two possible methods, both used in practice:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Little-Endian: The least significant byte is stored first (bytes are stored in reverse order).\nThis model is used by the Intel x86 processor family.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Big-Endian: The most significant byte is stored first."))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Example"),": We want to store the value 0x4a912480 in memory on 32 bits (4 bytes), starting at address ",(0,r.yg)("inlineCode",{parentName:"p"},"0x100"),", using both methods:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Method"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Address ",(0,r.yg)("inlineCode",{parentName:"th"},"0x100")),(0,r.yg)("th",{parentName:"tr",align:"center"},"Address ",(0,r.yg)("inlineCode",{parentName:"th"},"0x101")),(0,r.yg)("th",{parentName:"tr",align:"center"},"Address ",(0,r.yg)("inlineCode",{parentName:"th"},"0x102")),(0,r.yg)("th",{parentName:"tr",align:"center"},"Address ",(0,r.yg)("inlineCode",{parentName:"th"},"0x103")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Little-Endian"),(0,r.yg)("td",{parentName:"tr",align:"center"},"0x80"),(0,r.yg)("td",{parentName:"tr",align:"center"},"0x24"),(0,r.yg)("td",{parentName:"tr",align:"center"},"0x91"),(0,r.yg)("td",{parentName:"tr",align:"center"},"0x4a")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Big-Endian"),(0,r.yg)("td",{parentName:"tr",align:"center"},"0x4a"),(0,r.yg)("td",{parentName:"tr",align:"center"},"0x91"),(0,r.yg)("td",{parentName:"tr",align:"center"},"0x24"),(0,r.yg)("td",{parentName:"tr",align:"center"},"0x80")))))}y.isMDXComponent=!0},2456:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/hex-view-70f8a8fe3819dd4265d1ed064899fe6b.png"},5902:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/left-logical-shift-8a7457b9b81e57808f65c343bdf0706f.svg"},9751:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/right-logical-shift-f622a1bc8014edbba4e5222fafabb919.svg"}}]);