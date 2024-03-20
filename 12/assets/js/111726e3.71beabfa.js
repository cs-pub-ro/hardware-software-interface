"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[8265],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>h});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),y=r,h=c["".concat(l,".").concat(y)]||c[y]||m[y]||i;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2197:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(8168),r=(t(6540),t(5680));const i={},o="Pointers",s={unversionedId:"Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Reading/README",id:"Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Reading/README",title:"Pointers",description:"In the C programming language, memory interaction is achieved through pointers.",source:"@site/docs/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Reading/README.md",sourceDirName:"Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Reading",slug:"/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Reading/",permalink:"/hardware-software-interface/12/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Reading/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Memory Operations",permalink:"/hardware-software-interface/12/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/"},next:{title:"Guides",permalink:"/hardware-software-interface/12/Lab 2 - Memory Operations. Introduction to GDB/Memory Operations/Guides/"}},l={},d=[{value:"Pointer Operations and Pointer Arithmetic",id:"pointer-operations-and-pointer-arithmetic",level:2},{value:"Interpreting Data in Memory",id:"interpreting-data-in-memory",level:3},{value:"Pointers to Arrays",id:"pointers-to-arrays",level:3},{value:"Structures and Pointers to Structures",id:"structures-and-pointers-to-structures",level:2},{value:"Void Pointers",id:"void-pointers",level:2},{value:"Pointers in Functions and Function Pointers",id:"pointers-in-functions-and-function-pointers",level:2}],p={toc:d},c="wrapper";function m(e){let{components:n,...i}=e;return(0,r.yg)(c,(0,a.A)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"pointers"},"Pointers"),(0,r.yg)("p",null,"In the C programming language, memory interaction is achieved through pointers.\nWe remind you that a pointer is a variable that holds a memory address.\nThe general declaration form is as follows: ",(0,r.yg)("inlineCode",{parentName:"p"},"type *variable_name"),", where ",(0,r.yg)("inlineCode",{parentName:"p"},"type")," can represent any valid data type in C."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"WARNING:")," The ",(0,r.yg)("strong",{parentName:"p"},"asterisk (",(0,r.yg)("inlineCode",{parentName:"strong"},"*"),")")," used in declaring a pointer denotes that it is a pointer and should not be confused with the dereference operator.\nThese are two entirely different concepts represented by the same symbol.\nDeclaring a pointer does not mean allocating a memory area to store data.\nA pointer is also a data type, whose value is a number representing a memory address.\nThe size of the pointer data type is always the same, regardless of the type of data it points to, and is determined by the architecture and operating system on which the program was compiled (but usually 4 bytes on 32-bit systems and 8 bytes on 64-bit systems)."),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-c"},"  int *p = 0xCAFEBABE; /* Declaring a pointer */\n  int x = *p; /* The value at the address stored in p */\n"))),(0,r.yg)("p",null,"In C, a pointer can represent:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The address of data of a certain type"),(0,r.yg)("li",{parentName:"ul"},"The address of a memory area"),(0,r.yg)("li",{parentName:"ul"},"The address of a function"),(0,r.yg)("li",{parentName:"ul"},"The address where data of an unknown type is held (void pointer)")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"TIP:")," The size of a pointer depends on the architecture and operating system on which the program was compiled.\nThe size of a pointer is determined by ",(0,r.yg)("inlineCode",{parentName:"p"},"sizeof(void*)")," and is not necessarily equal to the size of an ",(0,r.yg)("inlineCode",{parentName:"p"},"int"),".")),(0,r.yg)("h2",{id:"pointer-operations-and-pointer-arithmetic"},"Pointer Operations and Pointer Arithmetic"),(0,r.yg)("p",null,"Arithmetic operations on pointers are slightly different from those on integer data types.\nThe only valid operations are ",(0,r.yg)("strong",{parentName:"p"},"incrementing")," or ",(0,r.yg)("strong",{parentName:"p"},"decrementing")," a pointer, ",(0,r.yg)("strong",{parentName:"p"},"adding")," or ",(0,r.yg)("strong",{parentName:"p"},"subtracting")," an integer from a pointer, and subtracting two pointers of the ",(0,r.yg)("strong",{parentName:"p"},"same type"),".\nThe behavior of these operations is influenced by the data type to which the pointers refer."),(0,r.yg)("p",null,"When incrementing a pointer related to a data type ",(0,r.yg)("inlineCode",{parentName:"p"},"T"),", the address is not increased by 1 but by the value ",(0,r.yg)("inlineCode",{parentName:"p"},"sizeof(T)"),", which ensures addressing the next object of the same type.\nSimilarly, adding an integer ",(0,r.yg)("inlineCode",{parentName:"p"},"n")," to a pointer ",(0,r.yg)("inlineCode",{parentName:"p"},"p")," (thus the operation ",(0,r.yg)("inlineCode",{parentName:"p"},"p + n"),") actually represents ",(0,r.yg)("inlineCode",{parentName:"p"},"p + n * sizeof(*p)"),".\nFor example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"char *char_ptr = 1000;\nshort *short_ptr = 2000;\nint *int_ptr = 3000;\n\n++char_ptr; /* char_ptr will point to address 1001 */\n++short_ptr; /* short_ptr points to address 2002 */\n++int_ptr; /* int_ptr points to address 3004 */\n")),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"A diagram which visualizes arithmetic operations on pointers",src:t(2632).A})),(0,r.yg)("p",null,"Subtracting two pointers is possible only if both have the same type.\nThe result of the subtraction is obtained by calculating the difference between the memory addresses they point to.\nFor example, calculating the length of a string:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'char *s = "Learn IOCLA, you must!";\nchar *p = s;\nfor (; *p != 0; ++p); /* Iterating character by character until \'\\0\' */\n\nprintf("%ld", p - s); /** It will display 22, the length of the string\n                       * referenced by `s`. */\n')),(0,r.yg)("h3",{id:"interpreting-data-in-memory"},"Interpreting Data in Memory"),(0,r.yg)("p",null,"On most modern computers, the smallest unit of data that can be addressed is the ",(0,r.yg)("inlineCode",{parentName:"p"},"byte")," (8 bits), meaning that we can view data in memory as a sequence of bytes, each with its own address.\nAs mentioned in the ",(0,r.yg)("a",{parentName:"p",href:"../../../Lab%201%20-%20Number%20Representation/Binary%20and%20Hexadecimal/Reading"},"previous lab"),", when we want to store information represented by multiple bytes, we need to consider the order imposed by the system architecture, called ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Endianness"},"endianness"),".\nBelow is the mechanism for extracting data from memory on a ",(0,r.yg)("strong",{parentName:"p"},"little-endian")," architecture:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'int n = 0xCAFEBABE;\nunsigned char first_byte = *((unsigned char*) &n); /* Extracting the first byte of n */\nunsigned char second_byte = *((unsigned char*) &n + 1); /* Extracting the second byte of n */\nprintf("0x%x, 0x%x\\n", first_byte, second_byte); /* It will display 0xBE, 0xBA */\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"NOTE:")," For casted pointers, arithmetic operations are performed on the type to which they have been cast."),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"WARNING:")," Do not confuse ",(0,r.yg)("inlineCode",{parentName:"p"},"*p++")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"(*p)++"),".\nIn the first case, it increments the address pointed by ",(0,r.yg)("inlineCode",{parentName:"p"},"p"),", while in the second case, it increments the value at that address.\nArithmetic on pointers of type ",(0,r.yg)("inlineCode",{parentName:"p"},"void")," is not possible due to the lack of a concrete data type they point to.")),(0,r.yg)("h3",{id:"pointers-to-arrays"},"Pointers to Arrays"),(0,r.yg)("p",null,"There is a very close relationship between pointers and arrays.\nIn C, the name of an array is a ",(0,r.yg)("em",{parentName:"p"},"constant pointer")," (its address is allocated by the compiler and cannot be modified during execution) to the first element of the array: ",(0,r.yg)("inlineCode",{parentName:"p"},"v = &v[0]"),".\nFor example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"int v[10], *p;\np = v;\n++p; /* Correct */\n++v; /* ERROR */\n")),(0,r.yg)("p",null,"Arrays are stored in a continuous block of memory, so pointer arithmetic works the same way for arrays as well.\nHere are some equivalences:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"v[0] <==> *v\nv[1] <==> *(v + 1)\nv[n] <==> *(v + n)\n&v[0] <==> v\n&v[1] <==> v + 1\n&v[n] <==> v + n\n")),(0,r.yg)("p",null,"Additionally, an array also contains information about its length and the total size occupied in memory, so ",(0,r.yg)("inlineCode",{parentName:"p"},"sizeof(v)")," will return the space occupied in memory (number of bytes), and ",(0,r.yg)("inlineCode",{parentName:"p"},"sizeof(v) / sizeof(*v)")," will return the number of elements in ",(0,r.yg)("inlineCode",{parentName:"p"},"v"),"."),(0,r.yg)("p",null,"Using pointers, we can dynamically allocate memory.\nIn this sense, dynamic allocation of a two-dimensional array (a matrix) can be done as follows:"),(0,r.yg)("p",null,"The traditional method, where we allocate an array of pointers to pointers:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"int **array1 = malloc(nrows * sizeof(*array1));\nfor (i = 0; i < nrows; ++i)\n    array1[i] = malloc(ncolumns * sizeof(**array1));\n")),(0,r.yg)("p",null,"If we want to keep the array in a continuous block of memory:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"int **array2 = malloc(nrows * sizeof(*array2));\narray2[0] = malloc(nrows * ncolumns * sizeof(**array2));\nfor (i = 1; i < nrows; ++i)\n    array2[i] = array2[0] + i * ncolumns;\n")),(0,r.yg)("p",null,"Below is the difference between the two approaches:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"A diagram which showcases the fact that the second approach keeps all the elements in a continuous block of memory, while the first fragments the lines in different places in memory",src:t(2044).A})),(0,r.yg)("p",null,"In both cases, the elements of the matrix can be accessed using the indexing operator ",(0,r.yg)("inlineCode",{parentName:"p"},"[]"),": ",(0,r.yg)("inlineCode",{parentName:"p"},"arrayX[i][j]"),".\nAlso, just like with vectors, we can replace indexing with pointer operations.\nThus, ",(0,r.yg)("inlineCode",{parentName:"p"},"arr[i][j] = *(arr + i)[j] = *(*(arr + i) + j)"),"."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"WARNING:")," Whenever you allocate memory using a pointer, use ",(0,r.yg)("inlineCode",{parentName:"p"},"p = malloc(n * sizeof(*p))")," instead of ",(0,r.yg)("inlineCode",{parentName:"p"},"p = malloc(n * sizeof(int))"),".\nUsing ",(0,r.yg)("inlineCode",{parentName:"p"},"sizeof(*p)")," makes the code more robust and self-documenting, so anyone reading the code will see that the correct number of bytes is being allocated without needing to check the data type that ",(0,r.yg)("inlineCode",{parentName:"p"},"p")," is pointing to.")),(0,r.yg)("h2",{id:"structures-and-pointers-to-structures"},"Structures and Pointers to Structures"),(0,r.yg)("p",null,"Structures are data types in which we can group multiple variables, possibly of different types (unlike arrays, which contain only data of the same type).\nA structure can be defined as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"struct struct_name {\n    field_declarations\n};\n")),(0,r.yg)("p",null,"For simplifying declarations, we can associate a structure with a data type name: ",(0,r.yg)("inlineCode",{parentName:"p"},"typedef struct {field_declarations} struct_name;")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"typedef struct student {\n    char *name;\n    int year;\n    float grade;\n} Student;\n\nint main() {\n    Student s;\n    s.name = (char *) malloc(20 * sizeof(*s.name));\n    s.year = 3;\n    return 0;\n}\n")),(0,r.yg)("p",null,"Accessing members of a structure is done using the ",(0,r.yg)("inlineCode",{parentName:"p"},".")," operator."),(0,r.yg)("p",null,"In the case of pointers to structures, accessing members is done by dereferencing the pointers:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'Student *s = (Student *) malloc(sizeof(*s));\n(*s).year = 3;\n/* In practice, to ease writing, the "->" operator is used */\ns->year = 4;\n')),(0,r.yg)("p",null,"The size of a structure is not always equal to the sum of the sizes of its fields.\nThis happens because of padding added by the compiler to ensure proper memory alignment.\nPadding is added after a structure member followed by another member with a larger size, or at the end of the structure."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'struct A {\n    /* sizeof(int) = 4  */\n    int x;\n    /* Padding with 4 bytes */\n\n    /* sizeof(double) = 8 */\n    double z;\n\n    /* sizeof(short) = 2 */\n    short y;\n    /* Padding with 6 bytes */\n};\n\nprintf("Size of struct: %zu", sizeof(struct A)) /* Will print 24 */\n')),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"A diagram visualizing the padding of each structure field, 4 bytes for x, 6 for y, and 0 for z",src:t(5485).A})),(0,r.yg)("p",null,"The red portion represents the padding added by the compiler, and the green parts represent the structure's members."),(0,r.yg)("p",null,"However, we can prevent the compiler from adding padding by using ",(0,r.yg)("inlineCode",{parentName:"p"},"__attribute__((packed))")," when declaring the structure (More details about this in the Computer Communication Protocols course).\nThus, for the previous example, the result would be 14."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"NOTE:")," If you declare pointers to structures, don't forget to allocate memory for them before accessing the structure fields.\nAlso, remember to allocate and initialize structure fields that are pointer types before using them.\nAlso, pay attention to how you access structure fields.")),(0,r.yg)("h2",{id:"void-pointers"},"Void Pointers"),(0,r.yg)("p",null,"Memory can be seen as an array of bytes, accessible through pointers.\nBy the type of the pointer, the addressed memory area gains a certain interpretation, as discussed above.\nThere are cases where we want to address a zone of this ",(0,r.yg)("em",{parentName:"p"},"'array'")," in a generic way, thus requiring ",(0,r.yg)("strong",{parentName:"p"},"void pointers"),"."),(0,r.yg)("p",null,"A pointer to ",(0,r.yg)("inlineCode",{parentName:"p"},"void")," is a pointer that does not have an associated type.\nVoid pointers have a ",(0,r.yg)("strong",{parentName:"p"},"high flexibility")," because they can point to any type of data, but they also have a ",(0,r.yg)("strong",{parentName:"p"},"limitation")," in that they cannot be dereferenced, and to be used in pointer operations, they need to be converted to a known data type."),(0,r.yg)("p",null,"They are most commonly used in the implementation of ",(0,r.yg)("strong",{parentName:"p"},"generic functions"),".\nFor example, the functions ",(0,r.yg)("inlineCode",{parentName:"p"},"malloc()")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"calloc()")," return a pointer to void, allowing these functions to be used for memory allocation for any data type."),(0,r.yg)("p",null,"An example of using void pointers is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"#include <stdio.h>\n\nvoid increment(void *data, int element_size) {\n    /* Check if the data entered is a char */\n    if (element_size == sizeof(char)) {\n        /* As mentioned, to be dereferenced,\n         * a void pointer needs to be cast\n         */\n        char *char_ptr = data;\n        ++(*char_ptr);\n    }\n\n    if (element_size == sizeof(int)) {\n        int *int_ptr = data;\n        ++(*int_ptr);\n    }\n}\n\nint main() {\n    char c = 'a';\n    int x = 10;\n\n    increment(&c, sizeof(c));\n    increment(&x, sizeof(x));\n\n    printf(\"%c, %d\\n\", c, x); /* Will print: b, 11 */\n    return 0;\n}\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"NOTE:")," In ",(0,r.yg)("inlineCode",{parentName:"p"},"C"),", it is not necessary to explicitly cast the assignment of a pointer of type T with a ",(0,r.yg)("inlineCode",{parentName:"p"},"void*")," pointer."),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Example (Good practice):")),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-c"},"int *array = malloc(sizeof(*array) * number_of_elements);\n")),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"NOT like this:")),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-c"},"int *array = (int*) malloc(sizeof(*array) * number_of_elements);\n"))),(0,r.yg)("h2",{id:"pointers-in-functions-and-function-pointers"},"Pointers in Functions and Function Pointers"),(0,r.yg)("p",null,"Within functions, pointers can be used for:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Passing results through arguments"),(0,r.yg)("li",{parentName:"ul"},"Passing an address through the function's return"),(0,r.yg)("li",{parentName:"ul"},"Passing other functions and subsequently using them")),(0,r.yg)("p",null,"A function that needs to modify multiple values passed through arguments or that needs to transmit multiple calculated results within the function should use pointer arguments."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int c = *a;\n    *a = *b;\n    *b = c;\n}\n\nint main() {\n    int a = 3, b = 5;\n    swap(&a, &b);\n\n    printf("a = %d, b = %d\\n", a, b); /* Will print a = 5, b = 3 */\n\n    return 0;\n}\n')),(0,r.yg)("p",null,"A function can return a pointer, but this pointer cannot contain the address of a local variable.\nMost of the time, the result is one of the arguments, possibly modified within the function.\nFor example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},"char* toUpper(char *s) {\n    /* Takes a string and returns the string in uppercase */\n    for (int i = 0 ; s[i] ; ++i) {\n        if (s[i] >= 'a' && s[i] <= 'z') {\n            s[i] -= 32;\n        }\n    }\n\n    return s;\n}\n")),(0,r.yg)("p",null,"If a function returns the address of a local variable, it must be static.\nThe lifetime of a local variable ends when the execution of the function in which it was defined ends, and therefore the address of such a variable should not be passed outside the function."),(0,r.yg)("p",null,"The name of a function represents the memory address at which the function begins.\nA function pointer is a variable that stores the address of a function that can be called later through that pointer.\nUsually, function pointers are used to pass a function as a parameter to another function."),(0,r.yg)("p",null,"The declaration of a function pointer is done as follows: ",(0,r.yg)("inlineCode",{parentName:"p"},"type (*pf) (formal_parameter_list)")),(0,r.yg)("p",null,"Why is it necessary to use extra parentheses?\nWithout them, we would be talking about a function that returns a pointer.\nBelow are two examples of using function pointers:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'int add(int a, int b) {\n    return a + b;\n}\n\nint subtract(int a, int b) {\n    return a - b;\n}\n\nint operation(int x, int y, int (*func) (int, int)) {\n    return func(x, y);\n}\n\nint main() {\n    int (*minus)(int, int) = subtract;\n    printf("%d", operation(10, 5, minus)); /* Will print 5 */\n\n    return 0;\n}\n')),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"http://www.cplusplus.com/reference/cstdlib/qsort/"},"qsort()")," function from ",(0,r.yg)("inlineCode",{parentName:"p"},"stdlib.h")," uses a function pointer as a comparator."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c"},'int compare(const void *a, const void *b) {\n    return *(int *) a - *(int *)b;\n}\n\nint main() {\n    int v[] = {100, 5, 325, 1, 30};\n    int size = sizeof(v) / sizeof(*v);\n\n    qsort(v, size, sizeof(*v), compare);\n    for (int i = 0 ; i < size ; ++i) {\n        printf("%d ", v[i]);\n    }\n\n    return 0;\n}\n')))}m.isMDXComponent=!0},2632:(e,n,t)=>{t.d(n,{A:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBEbyBub3QgZWRpdCB0aGlzIGZpbGUgd2l0aCBlZGl0b3JzIG90aGVyIHRoYW4gZHJhdy5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzNzlweCIgaGVpZ2h0PSIyNDFweCIgdmlld0JveD0iLTAuNSAtMC41IDM3OSAyNDEiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDthcHAuZGlhZ3JhbXMubmV0JnF1b3Q7IG1vZGlmaWVkPSZxdW90OzIwMjQtMDMtMDFUMTI6MjE6MjEuNDkyWiZxdW90OyBhZ2VudD0mcXVvdDtNb3ppbGxhLzUuMCAoWDExOyBVYnVudHU7IExpbnV4IHg4Nl82NDsgcnY6MTIzLjApIEdlY2tvLzIwMTAwMTAxIEZpcmVmb3gvMTIzLjAmcXVvdDsgZXRhZz0mcXVvdDtIOThldElZd2M5dHF1U09mZTVsSCZxdW90OyB2ZXJzaW9uPSZxdW90OzI0LjAuMCZxdW90OyB0eXBlPSZxdW90O2RldmljZSZxdW90OyZndDsmI3hBOyAgJmx0O2RpYWdyYW0gbmFtZT0mcXVvdDtQYWdlLTEmcXVvdDsgaWQ9JnF1b3Q7R1FxZEl3eTNzOEl0MFR3dXoxOEcmcXVvdDsmZ3Q7JiN4QTsgICAgJmx0O214R3JhcGhNb2RlbCBkeD0mcXVvdDsxMjIxJnF1b3Q7IGR5PSZxdW90Ozc2MiZxdW90OyBncmlkPSZxdW90OzEmcXVvdDsgZ3JpZFNpemU9JnF1b3Q7MTAmcXVvdDsgZ3VpZGVzPSZxdW90OzEmcXVvdDsgdG9vbHRpcHM9JnF1b3Q7MSZxdW90OyBjb25uZWN0PSZxdW90OzEmcXVvdDsgYXJyb3dzPSZxdW90OzEmcXVvdDsgZm9sZD0mcXVvdDsxJnF1b3Q7IHBhZ2U9JnF1b3Q7MSZxdW90OyBwYWdlU2NhbGU9JnF1b3Q7MSZxdW90OyBwYWdlV2lkdGg9JnF1b3Q7ODUwJnF1b3Q7IHBhZ2VIZWlnaHQ9JnF1b3Q7MTEwMCZxdW90OyBtYXRoPSZxdW90OzAmcXVvdDsgc2hhZG93PSZxdW90OzAmcXVvdDsmZ3Q7JiN4QTsgICAgICAmbHQ7cm9vdCZndDsmI3hBOyAgICAgICAgJmx0O214Q2VsbCBpZD0mcXVvdDswJnF1b3Q7IC8mZ3Q7JiN4QTsgICAgICAgICZsdDtteENlbGwgaWQ9JnF1b3Q7MSZxdW90OyBwYXJlbnQ9JnF1b3Q7MCZxdW90OyAvJmd0OyYjeEE7ICAgICAgICAmbHQ7bXhDZWxsIGlkPSZxdW90O3VSZi16R1dHVzlCeXpNOVhUV0VGLTEmcXVvdDsgdmFsdWU9JnF1b3Q7JnF1b3Q7IHN0eWxlPSZxdW90O3NoYXBlPWltYWdlO3ZlcnRpY2FsTGFiZWxQb3NpdGlvbj1ib3R0b207bGFiZWxCYWNrZ3JvdW5kQ29sb3I9ZGVmYXVsdDt2ZXJ0aWNhbEFsaWduPXRvcDthc3BlY3Q9Zml4ZWQ7aW1hZ2VBc3BlY3Q9MDtpbWFnZT1kYXRhOmltYWdlL3BuZyxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBWHNBQUFEeEJBTUFBQURZVEFveUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFZVUV4VVJRQUFBUC8vLysvdjc4Ykd4b3lNakZKU1VpRWhJZjhBQUk3N2tENEFBQUFKY0VoWmN3QUFEc01BQUE3REFjZHZxR1FBQUFVdFNVUkJWSGphN1ozQmI2TTRGSWZ0SWRtem5XbVZhOUx0ekxra21yMDNpWHFlclVqUDFVck52YWY4KzBzZ3dReTJ3UkRETStudmt5cUNlU1VmN2pOTktjOHdRSW9jTHdMNmhOVG9zOVBXZE1HelJSYk1pOVZBanJsR1gwakpKUmZwTWwza1RhbjZlVlhJSUlBK0pkQ241R2IxMHkzVkV5ZExYK2VySXBEZkZ2aXRTMG11Ly9Dd1hxKzN1OTB1MmUvM2g4UEIrZFBlNGZDMjN5ZkpicmZkcnRlcmh5V052cHhKdWN3WDUyWTlrdXZmVzd4YTVsK0QyOXVTcDZVK0dkQ25CUHFVUUo4UzZGTUNmVXFnVHduMEtZRStKZENuQlBxVVFKK1NtOUF2WDJWN2V6dTh1MTVrKyt0dytBamhLdHV5dUZMV2hlemkzRkpkb3hzT1hHR201RGIxYTg4OGN4a01ObjM5TEtQMGo1OHlGSnFTeDNSdUg3ZisvSGlVb2RDbDk4UFBmYlhkMERZaWZSUFE5d1gwS2JIcUwyTHI5OXlDL3VmNWl4WTMvVmxVM2hTKy9xL0pncjB1cHZHQ3hYTEdwajlZeE5RUkJLLy9QWktMVFNLL2YxczhwMTAvdWR0RXMwbjJhU0VuZnprLzBuOTZzT2p6TkhtU3gvZm9sRUt6Nk82LzZNLzBrZUgzZnB3OC9YM1JmeDZYL2luMzR5VE4rRXlmVFpjdnI2UFNMNk4xZkVBMDZqTzJHck4rMkVDZkV1aFRBbjFLb0U4SjlDbUJQaVhRcHdUNmxFQ2ZFdWhUQW4xSzZpcEdWYjNsNVYvcWFsVndsNkRlZTZaR1gxVzdpdlAvUjh1cjNDR0lHMjdCOGt0dDhsVE5wSzR2UzZKNkVLbStrSm8rMS9TTElOV2tnaWlUUjlWR0YvcXFnTHJrV2kyZ0xnVlI5cjZRbWo3WDlGVlE2WUNDMEIvNTBGV1Y2WmR6WXFsOC9YSjdrbDYrYnFoeDd3LzgxcVhreWxwMUozb3NhUGRUcSs0VTFFZEJ1K2Ric0llK1Q5dGR2OCtnem53Wi9aRW5EL1Q5ZzZIcklhZ3p5UDNXUVI3QjBQVVExQmtNM2RaQkhvRis2eUNQWU9oNkNPb01jcjkxa0Vjd2REMEVkUVpEdDNXUVI2NnJWWGVpejRKMkw3WHFUdlJTMEk0cnpKUjhtVnIxdWlDeUtoRDNXblVEbCtnNVdRRlVsM0pqalpIckg4bUs3NzNvQjVmN2FydlRYb0xWZHdQNjNiaFovVGExZnREdlJyUCtaVmxUdko3cHp5VkJFYjVOLy9GOXhhYkxYOGtzM2Y0dGRXZXZ2OWtUc3gxQmNQci9yR2FUSDl2bzUycVM5ZjdpZWJlSVQ1WGZab0xULzhrMjBmMlczMi95T3VsRi9KTHF4NmZQQnlZK3N3MmZ4OEUvUFZoei8vRTExVTk3UDVLNS9rN0VkZGtmV084L1RWZlIvWE9hKzVGOCtUZkwvYnVQRWVsWHFEZlBDRlpmNUNYM0lZSS8xU21CUGlYUXB3VDZsRUNmRXVoVEFuMUtvRThKOUNtQlBpWFFwd1Q2bEVDZmtycUNWNjNpdnp3dGdEWEkwRlFxbXhXRzZRUjRkZWVDVlZxRVRkS3VieWdiTHEwS2E1RGU5RWVWc2haVUtvT3YxRjF6UTYyL3M3NDBWVDF6N2NuZWhta0I5Q1pOWCtyNjVZa0pxaTJ5Zzc3Z21qNlRXbDI5bWhiQTBNU3FMYUk0SU5WVUpGM3hNMkhhMjltcXhqMzJQdGVidE43bk5UOGlRNnJ3NGZTRmROQlg3OWEzZmo5RDF4cGtHS2pjMEZ2TytyVW56dUpNcG9LWWZZcVY4b21UTmU5Y0drNmw3ZlhId00zTkZPRDlIbVovNkhkRFcrNWg3dlVPOG11RFNuZERYM01icWhQOTd1bkw2UE1BZzZCUEdZU2gyK0ZOL2UwSnVVOFloS0hiQUladXpaNlErNFJCR0xvTllPalc3QW01VHhpRW9kc0FobTdObnBEN2hFR0dxMnorNStQMGh6YXo1N24zcS9OeGhvMmEyUk5YbUNuNXdqTUZ1TDFCOGFxUGtxNnJaZ3B3NHJMTFh1cngvUlI3dXpCeS9WNEtBb2ZUSHpMMzFYWi9iMFdoN3hIb2EvaXBWWGNDK2hvTnlYT3VGUFZ5S0VQM2ZsWmZ2OVNmcTk2UlBncmFhL1UzU2ZabzdNdHoxYTlrY1AwNHNUOVh2VDBFK3FMeVhQWDVzVHQ5VENmUW9ILzNZWHV1ZWplRzYvMENuMmZRd2ZYOVBsZWRvUGREQnZxVVFKOFNqNWNVUUdzWSt4OCszYlBTbUlNUUxnQUFBQUJKUlU1RXJrSmdnZz09OyZxdW90OyB2ZXJ0ZXg9JnF1b3Q7MSZxdW90OyBwYXJlbnQ9JnF1b3Q7MSZxdW90OyZndDsmI3hBOyAgICAgICAgICAmbHQ7bXhHZW9tZXRyeSB4PSZxdW90OzM1MCZxdW90OyB5PSZxdW90OzI3MCZxdW90OyB3aWR0aD0mcXVvdDszNzkmcXVvdDsgaGVpZ2h0PSZxdW90OzI0MSZxdW90OyBhcz0mcXVvdDtnZW9tZXRyeSZxdW90OyAvJmd0OyYjeEE7ICAgICAgICAmbHQ7L214Q2VsbCZndDsmI3hBOyAgICAgICZsdDsvcm9vdCZndDsmI3hBOyAgICAmbHQ7L214R3JhcGhNb2RlbCZndDsmI3hBOyAgJmx0Oy9kaWFncmFtJmd0OyYjeEE7Jmx0Oy9teGZpbGUmZ3Q7JiN4QTsiPjxkZWZzLz48Zz48Zz48aW1hZ2UgeD0iLTAuNSIgeT0iLTAuNSIgd2lkdGg9IjM3OSIgaGVpZ2h0PSIyNDEiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBWHNBQUFEeEJBTUFBQURZVEFveUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUFZVUV4VVJRQUFBUC8vLysvdjc4Ykd4b3lNakZKU1VpRWhJZjhBQUk3N2tENEFBQUFKY0VoWmN3QUFEc01BQUE3REFjZHZxR1FBQUFVdFNVUkJWSGphN1ozQmI2TTRGSWZ0SWRtem5XbVZhOUx0ekxra21yMDNpWHFlclVqUDFVck52YWY4KzBzZ3dReTJ3UkRETStudmt5cUNlU1VmN2pOTktjOHdRSW9jTHdMNmhOVG9zOVBXZE1HelJSYk1pOVZBanJsR1gwakpKUmZwTWwza1RhbjZlVlhJSUlBK0pkQ241R2IxMHkzVkV5ZExYK2VySXBEZkZ2aXRTMG11Ly9Dd1hxKzN1OTB1MmUvM2g4UEIrZFBlNGZDMjN5ZkpicmZkcnRlcmh5V052cHhKdWN3WDUyWTlrdXZmVzd4YTVsK0QyOXVTcDZVK0dkQ25CUHFVUUo4UzZGTUNmVXFnVHduMEtZRStKZENuQlBxVVFKK1NtOUF2WDJWN2V6dTh1MTVrKyt0dytBamhLdHV5dUZMV2hlemkzRkpkb3hzT1hHR201RGIxYTg4OGN4a01ObjM5TEtQMGo1OHlGSnFTeDNSdUg3ZisvSGlVb2RDbDk4UFBmYlhkMERZaWZSUFE5d1gwS2JIcUwyTHI5OXlDL3VmNWl4WTMvVmxVM2hTKy9xL0pncjB1cHZHQ3hYTEdwajlZeE5RUkJLLy9QWktMVFNLL2YxczhwMTAvdWR0RXMwbjJhU0VuZnprLzBuOTZzT2p6TkhtU3gvZm9sRUt6Nk82LzZNLzBrZUgzZnB3OC9YM1JmeDZYL2luMzR5VE4rRXlmVFpjdnI2UFNMNk4xZkVBMDZqTzJHck4rMkVDZkV1aFRBbjFLb0U4SjlDbUJQaVhRcHdUNmxFQ2ZFdWhUQW4xSzZpcEdWYjNsNVYvcWFsVndsNkRlZTZaR1gxVzdpdlAvUjh1cjNDR0lHMjdCOGt0dDhsVE5wSzR2UzZKNkVLbStrSm8rMS9TTElOV2tnaWlUUjlWR0YvcXFnTHJrV2kyZ0xnVlI5cjZRbWo3WDlGVlE2WUNDMEIvNTBGV1Y2WmR6WXFsOC9YSjdrbDYrYnFoeDd3LzgxcVhreWxwMUozb3NhUGRUcSs0VTFFZEJ1K2Ric0llK1Q5dGR2OCtnem53Wi9aRW5EL1Q5ZzZIcklhZ3p5UDNXUVI3QjBQVVExQmtNM2RaQkhvRis2eUNQWU9oNkNPb01jcjkxa0Vjd2REMEVkUVpEdDNXUVI2NnJWWGVpejRKMkw3WHFUdlJTMEk0cnpKUjhtVnIxdWlDeUtoRDNXblVEbCtnNVdRRlVsM0pqalpIckg4bUs3NzNvQjVmN2FydlRYb0xWZHdQNjNiaFovVGExZnREdlJyUCtaVmxUdko3cHp5VkJFYjVOLy9GOXhhYkxYOGtzM2Y0dGRXZXZ2OWtUc3gxQmNQci9yR2FUSDl2bzUycVM5ZjdpZWJlSVQ1WGZab0xULzhrMjBmMlczMi95T3VsRi9KTHF4NmZQQnlZK3N3MmZ4OEUvUFZoei8vRTExVTk3UDVLNS9rN0VkZGtmV084L1RWZlIvWE9hKzVGOCtUZkwvYnVQRWVsWHFEZlBDRlpmNUNYM0lZSS8xU21CUGlYUXB3VDZsRUNmRXVoVEFuMUtvRThKOUNtQlBpWFFwd1Q2bEVDZmtycUNWNjNpdnp3dGdEWEkwRlFxbXhXRzZRUjRkZWVDVlZxRVRkS3VieWdiTHEwS2E1RGU5RWVWc2haVUtvT3YxRjF6UTYyL3M3NDBWVDF6N2NuZWhta0I5Q1pOWCtyNjVZa0pxaTJ5Zzc3Z21qNlRXbDI5bWhiQTBNU3FMYUk0SU5WVUpGM3hNMkhhMjltcXhqMzJQdGVidE43bk5UOGlRNnJ3NGZTRmROQlg3OWEzZmo5RDF4cGtHS2pjMEZ2TytyVW56dUpNcG9LWWZZcVY4b21UTmU5Y0drNmw3ZlhId00zTkZPRDlIbVovNkhkRFcrNWg3dlVPOG11RFNuZERYM01icWhQOTd1bkw2UE1BZzZCUEdZU2gyK0ZOL2UwSnVVOFloS0hiQUladXpaNlErNFJCR0xvTllPalc3QW01VHhpRW9kc0FobTdObnBEN2hFR0dxMnorNStQMGh6YXo1N24zcS9OeGhvMmEyUk5YbUNuNXdqTUZ1TDFCOGFxUGtxNnJaZ3B3NHJMTFh1cngvUlI3dXpCeS9WNEtBb2ZUSHpMMzFYWi9iMFdoN3hIb2EvaXBWWGNDK2hvTnlYT3VGUFZ5S0VQM2ZsWmZ2OVNmcTk2UlBncmFhL1UzU2ZabzdNdHoxYTlrY1AwNHNUOVh2VDBFK3FMeVhQWDVzVHQ5VENmUW9ILzNZWHV1ZWplRzYvMENuMmZRd2ZYOVBsZWRvUGREQnZxVVFKOFNqNWNVUUdzWSt4OCszYlBTbUlNUUxnQUFBQUJKUlU1RXJrSmdnZz09IiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIi8+PC9nPjwvZz48L3N2Zz4="},2044:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/arrays-711feb0e634dad7923a5eeb5b5e39ea8.svg"},5485:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/padding-2fd4583438926eb112dbc94e18ba6cb0.svg"}}]);