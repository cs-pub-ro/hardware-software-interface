(()=>{"use strict";var e,a,f,c,b,d={},r={};function t(e){var a=r[e];if(void 0!==a)return a.exports;var f=r[e]={id:e,loaded:!1,exports:{}};return d[e].call(f.exports,f,f.exports,t),f.loaded=!0,f.exports}t.m=d,t.c=r,e=[],t.O=(a,f,c,b)=>{if(!f){var d=1/0;for(i=0;i<e.length;i++){f=e[i][0],c=e[i][1],b=e[i][2];for(var r=!0,o=0;o<f.length;o++)(!1&b||d>=b)&&Object.keys(t.O).every((e=>t.O[e](f[o])))?f.splice(o--,1):(r=!1,b<d&&(d=b));if(r){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}b=b||0;for(var i=e.length;i>0&&e[i-1][2]>b;i--)e[i]=e[i-1];e[i]=[f,c,b]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var b=Object.create(null);t.r(b);var d={};a=a||[null,f({}),f([]),f(f)];for(var r=2&c&&e;"object"==typeof r&&!~a.indexOf(r);r=f(r))Object.getOwnPropertyNames(r).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,t.d(b,d),b},t.d=(e,a)=>{for(var f in a)t.o(a,f)&&!t.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,f)=>(t.f[f](e,a),a)),[])),t.u=e=>"assets/js/"+({61:"3aa6549c",272:"3db98193",432:"7a6f195f",448:"f2750b5f",508:"4f5064b1",611:"7a6683ad",656:"c6581611",665:"3d610f5e",681:"f9a68512",691:"f8af6801",737:"bab2ef39",845:"1ec5f0e1",880:"3644a991",993:"7d763481",1109:"fb4369c7",1112:"a5a836fc",1117:"33f3ec70",1235:"62ed8bcd",1464:"3fc90637",1682:"358e44fb",1722:"8d354dde",1774:"e6905a0e",1794:"ab0f3bef",1931:"1230b56e",1956:"80851254",1973:"4ed588b0",2008:"09112f1c",2040:"9acbb093",2276:"c39bfeb5",2278:"23374ca6",2295:"c5cbc80f",2326:"c77bce40",2429:"c08c75ac",2611:"6d6e1a76",2612:"2a79a850",2756:"be88f8ee",3030:"7aca5381",3057:"28f56b4c",3078:"dcc14510",3088:"82d2a2b4",3090:"7877dcc8",3133:"abc20ddd",3165:"78a01999",3167:"f6b1891e",3249:"4dfa6a82",3332:"412ac080",3401:"b27bfc48",3427:"e958bb5f",3518:"754334b5",3556:"b01fa5e5",3583:"2dfee068",3749:"7b2d1fa1",3755:"6f03637c",3882:"14587e45",3951:"222745c9",3985:"d8cd7e10",3990:"4ce912a6",4025:"d9de85a0",4134:"393be207",4202:"37f08d30",4209:"f059164c",4210:"294d6974",4320:"3f574f55",4433:"6ee97e2a",4464:"a2d438ba",4565:"53a3a0c4",4785:"ecdc6acc",4849:"caf705e1",4896:"df654f97",4907:"6dc0b3d6",4915:"8fe0b029",5112:"0831bf1d",5614:"b2107e02",5630:"ae2ec5bf",5720:"ec33a5fa",5816:"7a5c681b",5820:"ff51b094",5834:"6d1941c1",5888:"35130bb7",6007:"08bd14d9",6052:"2ccbfdf1",6061:"1f391b9e",6130:"e3b90993",6183:"b380202a",6250:"df74f804",6459:"273f2ef7",6736:"ef10bf1b",6768:"e444edd3",6787:"5cd612e0",6821:"1d2bae6e",6858:"cbcb6eee",6894:"eda11b85",6943:"2467d83b",6950:"ee3ab485",6969:"14eb3368",7015:"cb3c04d5",7115:"205125c2",7212:"f2721a33",7305:"af05858c",7507:"bbb620fd",7513:"10b27fee",7639:"b3c1b78d",7721:"c30ffe49",7766:"664e1339",7767:"7801b8ae",7776:"11cc5a67",8127:"26095bf2",8128:"c57e14ec",8194:"58bdcf32",8265:"111726e3",8307:"69f67925",8401:"17896441",8428:"56a9c9ec",8561:"e18ebce3",8581:"935f2afb",8703:"abb3df9a",8714:"1be78505",8720:"33b15c9e",8867:"801c5245",8874:"04860bfc",8921:"7c0e9950",8934:"4ab2ea9a",8968:"0e89db92",9436:"9b03be8f",9480:"ea153781",9486:"85d2489e",9659:"f19de930",9808:"26515f4d"}[e]||e)+"."+{61:"e2ffb7ed",272:"632514ce",432:"2a5b4fb3",448:"8c87b5d1",508:"2d5f5e04",611:"c53fd9b4",656:"cb57abf0",665:"4378fe6d",681:"cd854285",691:"887e18f0",737:"7832e4fe",845:"f13084da",880:"b59aaa4a",993:"f5fda746",1109:"23493afa",1112:"7056a7b6",1117:"d2250c5b",1235:"dfbb5b5e",1464:"8374af5c",1682:"7d689c51",1722:"ba892166",1774:"5cf224fe",1794:"0263cfc4",1931:"2cf78b07",1956:"6e714015",1973:"7ccf14a4",2008:"934a9754",2040:"0b424c42",2276:"d98a3178",2278:"ebc60e0c",2295:"f5c9254e",2326:"862cf23e",2429:"15487810",2611:"522f41ad",2612:"8dd963d0",2756:"7d4c22e6",3030:"71962e82",3057:"82336a83",3078:"eb8314d5",3088:"6e9f13af",3090:"06aa2e5b",3133:"04f5c53b",3165:"b43d4f99",3167:"ea2283a0",3249:"650553ee",3332:"ab6dfb92",3401:"e3360edb",3427:"cfafc45f",3518:"9dc68b52",3556:"4b412f2f",3583:"01d6e3ff",3749:"fc29b395",3755:"cef3662c",3882:"eccaf32b",3951:"e4b6c78b",3985:"3b72b927",3990:"f17fe26e",4025:"27810f38",4134:"ccfea9c8",4202:"1b40f50e",4209:"30669964",4210:"5ad3bbcb",4320:"d43cde3f",4433:"4e97619d",4464:"080dc42c",4565:"e95fec7a",4567:"5cbadd9f",4785:"068d329a",4849:"9478c4c3",4896:"31f6db89",4907:"dcfcf5db",4915:"d41c02d3",5112:"096ccb1d",5614:"33d26ccb",5630:"a5970a1e",5720:"0a622136",5816:"cf13b5f2",5820:"91adcff2",5834:"e1161b4a",5888:"a3014fde",6007:"53850809",6052:"b4f4b2da",6061:"78b43ecc",6130:"147239ca",6183:"ab85f8f5",6250:"7942c82a",6459:"0c4ffd0c",6736:"5129def9",6768:"65c54d3c",6787:"536c30f7",6821:"1ba9c8b7",6858:"6def57d2",6894:"58fd44d7",6943:"51c8e522",6950:"47a36749",6969:"a8d17189",7015:"8c9c3aa5",7115:"7df2f55e",7212:"5dc35211",7305:"c6ed1f08",7507:"e6da7cbd",7513:"eae4c050",7639:"51fbc702",7721:"7a173a50",7766:"44d98909",7767:"6fddd857",7776:"38da2968",8127:"f3e5704c",8128:"e83de79c",8194:"c90d83be",8265:"9be52db0",8307:"9a3892d0",8401:"5c92b45b",8428:"d0a048ad",8561:"63328334",8581:"8fb4e340",8703:"1f12ccb2",8714:"d320b8c4",8720:"c2f04bed",8867:"52b0079c",8874:"04105608",8921:"0f9c7537",8934:"5fa2d17a",8968:"efabca82",9393:"b613ae43",9436:"6570386c",9480:"4ce00778",9486:"41818c30",9659:"694fa239",9808:"20ef58cd"}[e]+".js",t.miniCssF=e=>{},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},b="hardware-software-interface:",t.l=(e,a,f,d)=>{if(c[e])c[e].push(a);else{var r,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==b+f){r=u;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,t.nc&&r.setAttribute("nonce",t.nc),r.setAttribute("data-webpack",b+f),r.src=e),c[e]=[a];var l=(a,f)=>{r.onerror=r.onload=null,clearTimeout(s);var b=c[e];if(delete c[e],r.parentNode&&r.parentNode.removeChild(r),b&&b.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),o&&document.head.appendChild(r)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/hardware-software-interface/21/",t.gca=function(e){return e={17896441:"8401",80851254:"1956","3aa6549c":"61","3db98193":"272","7a6f195f":"432",f2750b5f:"448","4f5064b1":"508","7a6683ad":"611",c6581611:"656","3d610f5e":"665",f9a68512:"681",f8af6801:"691",bab2ef39:"737","1ec5f0e1":"845","3644a991":"880","7d763481":"993",fb4369c7:"1109",a5a836fc:"1112","33f3ec70":"1117","62ed8bcd":"1235","3fc90637":"1464","358e44fb":"1682","8d354dde":"1722",e6905a0e:"1774",ab0f3bef:"1794","1230b56e":"1931","4ed588b0":"1973","09112f1c":"2008","9acbb093":"2040",c39bfeb5:"2276","23374ca6":"2278",c5cbc80f:"2295",c77bce40:"2326",c08c75ac:"2429","6d6e1a76":"2611","2a79a850":"2612",be88f8ee:"2756","7aca5381":"3030","28f56b4c":"3057",dcc14510:"3078","82d2a2b4":"3088","7877dcc8":"3090",abc20ddd:"3133","78a01999":"3165",f6b1891e:"3167","4dfa6a82":"3249","412ac080":"3332",b27bfc48:"3401",e958bb5f:"3427","754334b5":"3518",b01fa5e5:"3556","2dfee068":"3583","7b2d1fa1":"3749","6f03637c":"3755","14587e45":"3882","222745c9":"3951",d8cd7e10:"3985","4ce912a6":"3990",d9de85a0:"4025","393be207":"4134","37f08d30":"4202",f059164c:"4209","294d6974":"4210","3f574f55":"4320","6ee97e2a":"4433",a2d438ba:"4464","53a3a0c4":"4565",ecdc6acc:"4785",caf705e1:"4849",df654f97:"4896","6dc0b3d6":"4907","8fe0b029":"4915","0831bf1d":"5112",b2107e02:"5614",ae2ec5bf:"5630",ec33a5fa:"5720","7a5c681b":"5816",ff51b094:"5820","6d1941c1":"5834","35130bb7":"5888","08bd14d9":"6007","2ccbfdf1":"6052","1f391b9e":"6061",e3b90993:"6130",b380202a:"6183",df74f804:"6250","273f2ef7":"6459",ef10bf1b:"6736",e444edd3:"6768","5cd612e0":"6787","1d2bae6e":"6821",cbcb6eee:"6858",eda11b85:"6894","2467d83b":"6943",ee3ab485:"6950","14eb3368":"6969",cb3c04d5:"7015","205125c2":"7115",f2721a33:"7212",af05858c:"7305",bbb620fd:"7507","10b27fee":"7513",b3c1b78d:"7639",c30ffe49:"7721","664e1339":"7766","7801b8ae":"7767","11cc5a67":"7776","26095bf2":"8127",c57e14ec:"8128","58bdcf32":"8194","111726e3":"8265","69f67925":"8307","56a9c9ec":"8428",e18ebce3:"8561","935f2afb":"8581",abb3df9a:"8703","1be78505":"8714","33b15c9e":"8720","801c5245":"8867","04860bfc":"8874","7c0e9950":"8921","4ab2ea9a":"8934","0e89db92":"8968","9b03be8f":"9436",ea153781:"9480","85d2489e":"9486",f19de930:"9659","26515f4d":"9808"}[e]||e,t.p+t.u(e)},(()=>{var e={5354:0,1869:0};t.f.j=(a,f)=>{var c=t.o(e,a)?e[a]:void 0;if(0!==c)if(c)f.push(c[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var b=new Promise(((f,b)=>c=e[a]=[f,b]));f.push(c[2]=b);var d=t.p+t.u(a),r=new Error;t.l(d,(f=>{if(t.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var b=f&&("load"===f.type?"missing":f.type),d=f&&f.target&&f.target.src;r.message="Loading chunk "+a+" failed.\n("+b+": "+d+")",r.name="ChunkLoadError",r.type=b,r.request=d,c[1](r)}}),"chunk-"+a,a)}},t.O.j=a=>0===e[a];var a=(a,f)=>{var c,b,d=f[0],r=f[1],o=f[2],n=0;if(d.some((a=>0!==e[a]))){for(c in r)t.o(r,c)&&(t.m[c]=r[c]);if(o)var i=o(t)}for(a&&a(f);n<d.length;n++)b=d[n],t.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return t.O(i)},f=self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();