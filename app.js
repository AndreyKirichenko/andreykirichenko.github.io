!function(s){var l={};function e(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return s[t].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=s,e.c=l,e.d=function(s,l,t){e.o(s,l)||Object.defineProperty(s,l,{enumerable:!0,get:t})},e.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},e.t=function(s,l){if(1&l&&(s=e(s)),8&l)return s;if(4&l&&"object"==typeof s&&s&&s.__esModule)return s;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:s}),2&l&&"string"!=typeof s)for(var a in s)e.d(t,a,function(l){return s[l]}.bind(null,a));return t},e.n=function(s){var l=s&&s.__esModule?function(){return s.default}:function(){return s};return e.d(l,"a",l),l},e.o=function(s,l){return Object.prototype.hasOwnProperty.call(s,l)},e.p="",e(e.s=1)}([function(s,l,e){"use strict";var t=Object.prototype.hasOwnProperty;function a(s,l){return Array.isArray(s)?function(s,l){for(var e,t="",i="",c=Array.isArray(l),n=0;n<s.length;n++)(e=a(s[n]))&&(c&&l[n]&&(e=o(e)),t=t+i+e,i=" ");return t}(s,l):s&&"object"==typeof s?function(s){var l="",e="";for(var a in s)a&&s[a]&&t.call(s,a)&&(l=l+e+a,e=" ");return l}(s):s||""}function i(s){if(!s)return"";if("object"==typeof s){var l="";for(var e in s)t.call(s,e)&&(l=l+e+":"+s[e]+";");return l}return s+""}function c(s,l,e,t){return!1!==l&&null!=l&&(l||"class"!==s&&"style"!==s)?!0===l?" "+(t?s:s+'="'+s+'"'):("function"==typeof l.toJSON&&(l=l.toJSON()),"string"==typeof l||(l=JSON.stringify(l),e||-1===l.indexOf('"'))?(e&&(l=o(l))," "+s+'="'+l+'"'):" "+s+"='"+l.replace(/'/g,"&#39;")+"'"):""}l.merge=function s(l,e){if(1===arguments.length){for(var t=l[0],a=1;a<l.length;a++)t=s(t,l[a]);return t}for(var c in e)if("class"===c){var n=l[c]||[];l[c]=(Array.isArray(n)?n:[n]).concat(e[c]||[])}else if("style"===c){var n=i(l[c]);n=n&&";"!==n[n.length-1]?n+";":n;var o=i(e[c]);o=o&&";"!==o[o.length-1]?o+";":o,l[c]=n+o}else l[c]=e[c];return l},l.classes=a,l.style=i,l.attr=c,l.attrs=function(s,l){var e="";for(var n in s)if(t.call(s,n)){var o=s[n];if("class"===n){o=a(o),e=c(n,o,!1,l)+e;continue}"style"===n&&(o=i(o)),e+=c(n,o,!1,l)}return e};var n=/["&<>]/;function o(s){var l=""+s,e=n.exec(l);if(!e)return s;var t,a,i,c="";for(t=e.index,a=0;t<l.length;t++){switch(l.charCodeAt(t)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}a!==t&&(c+=l.substring(a,t)),a=t+1,c+=i}return a!==t?c+l.substring(a,t):c}l.escape=o,l.rethrow=function s(l,t,a,i){if(!(l instanceof Error))throw l;if(!("undefined"==typeof window&&t||i))throw l.message+=" on line "+a,l;try{i=i||e(5).readFileSync(t,"utf8")}catch(e){s(l,null,a)}var c=3,n=i.split("\n"),o=Math.max(a-c,0),r=Math.min(n.length,a+c);var c=n.slice(o,r).map(function(s,l){var e=l+o+1;return(e==a?"  > ":"    ")+e+"| "+s}).join("\n");l.path=t;l.message=(t||"Pug")+":"+a+"\n"+c+"\n\n"+l.message;throw l}},function(s,l,e){"use strict";e(2),e(4),document.addEventListener("DOMContentLoaded",function(s){})},function(s,l,e){},,function(s,l,e){e(0);s.exports=function(s){var l,t="";return t=t+'<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"><title>TheWaay</title></head><body>'+(null==(l=e(6).call(this,s))?"":l)+'<div class="page">'+(null==(l=e(7).call(this,s))?"":l)+(null==(l=e(8).call(this,s))?"":l)+(null==(l=e(9).call(this,s))?"":l)+(null==(l=e(10).call(this,s))?"":l)+(null==(l=e(11).call(this,s))?"":l)+(null==(l=e(12).call(this,s))?"":l)+(null==(l=e(13).call(this,s))?"":l)+(null==(l=e(14).call(this,s))?"":l)+(null==(l=e(15).call(this,s))?"":l)+(null==(l=e(16).call(this,s))?"":l)+"</div></body></html>"}},function(s,l){},function(s,l,e){e(0);s.exports=function(s){var l="";return l+='<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><symbol id="svgSberbank" viewbox="0 0 64 60"><g fill="#FFF" fill-rule="evenodd"><path d="M19.154 36.992L.954 26.77a16.338 16.338 0 0 0-.601-.34c-.256-.05-.353-.366-.353.347v3.831c0 2.3 1.268 7.284 2.205 9.447.127.295.015.021.144.336.599 1.453 1.375 3.048 2.215 4.329.625.951 1.653 2.557 2.42 3.327.42.42.494.629.875 1.04l2.835 2.751c1.064.812 2.064 1.833 3.225 2.522 3.264 1.936 4.012 2.32 7.675 3.658 3.842 1.403 9.354 1.916 13.372 1.331 1.514-.22 3.52-.37 4.986-.92.886-.333 1.72-.464 3.237-1.073l3.69-1.736c1.513-.846 3.34-2.015 4.704-3.119.384-.31.603-.604.97-.944l2.9-2.847.078-.082 1.76-2.23c1.98-2.48 3.471-6.132 4.425-9.143l.814-3.177c.576-3.916.76-6.002.128-9.942-.37-2.306-.16-1.887-.926-4.34-.62-1.99-1.206-3.602-2.193-5.47l-2.534 1.298c-.041.023-.24.127-.311.168L44.478 22.73c-.509.274-.755.443-1.21.705-.273.157-.313.166-.63.328-.241.123-.017-.005-.312.166l-2.949 1.68c-.859.481-1.577.887-2.436 1.395-.899.531-1.66.903-2.555 1.436l-8.757 4.97c-.513.312-.776.49-1.313.763l-5.162 2.82z"></path><path d="M19.154 29.33c-1.384-.926-3.116-1.745-4.359-2.504-.041-.025-.155-.098-.196-.122-.131-.077-.174-.097-.31-.17-.235-.13-.39-.211-.614-.344-.448-.267-.642-.387-1.113-.643l-1.639-.915c-.383-.188-.283-.136-.62-.338l-8.866-5.02-.958 3.671L18.557 33.12c.362.18.31.168.597.36.386-.204.746-.392 1.13-.625.344-.209.18-.14.607-.351 1.723-.856 3.776-2.242 5.5-3.12.276-.142.377-.202.621-.336.198-.11.443-.238.616-.342l3.25-1.858c.087-.053.26-.165.294-.185l1.241-.674c.435-.263.716-.45 1.213-.703l6.01-3.408c.444-.268.804-.422 1.24-.675.285-.164.009-.022.292-.186l9.36-5.326c.335-.2.239-.15.62-.338.165-.082.164-.07.322-.157.117-.064.247-.154.296-.183l1.238-.677c.828-.5 1.541-.902 2.441-1.39.65-.353 1.89-1.192 2.497-1.334-.519-.775-1.548-2.37-2.234-2.873-.934.218-7.05 3.826-8.546 4.702l-1.735.98c-.042.023-.165.088-.207.112l-.1.06c-.03.018-.068.044-.098.061L19.432 29.13c-.286.183-.113.058-.278.201"></path><path d="M19.154 21.51c-1.26-.668-2.487-1.39-3.763-2.144l-3.274-1.833c-.231-.133-.244-.163-.494-.305-1.178-.673-6.974-4.026-7.633-4.179-.172.74-.84 1.682-1.254 2.736-.185.468-.01-.191-.182.456 1.722 1.153 3.11 1.75 4.66 2.683l9.055 5.152c.159.096.184.108.407.23.605.334 1.093.557 1.65.91.715.454.815.571 1.58.086l4.786-2.725c1.142-.638 2.174-1.239 3.25-1.858l22.226-12.57c.7-.381 2.819-1.517 3.145-1.963-.346-.519-.78-.875-1.298-1.256L50.6 3.79l-13.817 7.732-.104.056c-.156.084-.154.07-.317.162l-1.513.88c-.354.212-.562.303-.923.514L19.154 21.51z"></path><path d="M8.141 7.622c-.376.251-1.94 2.208-2.076 2.714.359.488.945.68 1.529 1.025.554.327 1.063.648 1.624.93l9.777 5.547c.53 0 1.353-.593 1.849-.865l.815-.462c.302-.185.116-.09.401-.237L34.908 9.01c.03-.018.067-.045.097-.062.03-.018.068-.044.099-.061l.102-.058 12.201-6.793c-.166-.623-.933-.867-1.648-1.225C42.992-.572 44-.282 39.177 2.424L28.14 8.626c-.284.17-.144.104-.498.3l-1.713 1c-.426.24-.66.305-1.061.536-.384.221-.749.468-1.092.665l-4.409 2.455c-.499.13-1.528-.598-2.289-1.01-.721-.393-1.368-.808-2.129-1.224-.835-.457-1.383-.848-2.233-1.278-.47-.238-.677-.379-1.114-.642L8.141 7.622z"></path></g></symbol><symbol id="svgBankStPetersburg" viewbox="0 0 35 60"><g fill="none" fill-rule="evenodd"><path d="M1.192 11.532c-3.113 8.826 1.518 18.493 10.341 21.604 8.822 3.109 18.495-1.516 21.603-10.34 3.108-8.824-1.52-18.493-10.34-21.604a16.92 16.92 0 0 0-5.632-.969c-6.981.001-13.517 4.35-15.972 11.31z" fill="#FFF"></path><path d="M1.192 11.532c-3.113 8.826 1.518 18.493 10.341 21.604 8.822 3.109 18.495-1.516 21.603-10.34 3.108-8.824-1.52-18.493-10.34-21.604a16.92 16.92 0 0 0-5.632-.969c-6.981.001-13.517 4.35-15.972 11.31z" stroke="#333" stroke-width=".216"></path><path d="M.226 44.88l.006 1.709c.013 3.256 7.602 5.867 16.955 5.837 9.358-.036 16.926-2.704 16.915-5.959l-.003-1.715-33.873.128z" fill="#FFF"></path><path d="M.226 44.88l.006 1.709c.013 3.256 7.602 5.867 16.955 5.837 9.358-.036 16.926-2.704 16.915-5.959l-.003-1.715-33.873.128z" stroke="#333" stroke-width=".216"></path><path d="M17.145 38.919c-9.356.034-16.93 2.7-16.919 5.96.01 3.252 7.603 5.861 16.958 5.83 9.351-.032 16.924-2.7 16.915-5.957-.013-3.236-7.516-5.834-16.79-5.834h-.164z" fill="#FFF"></path><path d="M17.145 38.919c-9.356.034-16.93 2.7-16.919 5.96.01 3.252 7.603 5.861 16.958 5.83 9.351-.032 16.924-2.7 16.915-5.957-.013-3.236-7.516-5.834-16.79-5.834h-.164z" stroke="#333" stroke-width=".216"></path><path d="M34.102 58.865v-1.018c0-.478-7.582-.95-16.935-.95-9.355 0-16.938.472-16.938.95v1.018c0 .472 7.583.945 16.938.945 9.353 0 16.935-.473 16.935-.945z" fill="#FFF"></path><path d="M34.102 58.865v-1.018c0-.478-7.582-.95-16.935-.95-9.355 0-16.938.472-16.938.95v1.018c0 .472 7.583.945 16.938.945 9.353 0 16.935-.473 16.935-.945z" stroke="#333" stroke-width=".216"></path></g></symbol><symbol id="svgVtb" viewbox="0 0 109 39"><g fill="none" fill-rule="evenodd"><path d="M28.022 15.558H2.173L.308 20.683h25.848l1.866-5.125zM33.602.216H7.754L5.9 5.311h25.848L33.602.216zm-2.787 7.657H4.966l-1.864 5.124H28.95l1.865-5.124z" fill="#FFF"></path><path d="M28.022 15.558H2.173L.308 20.683h25.848l1.866-5.125zM33.602.216H7.754L5.9 5.311h25.848L33.602.216zm-2.787 7.657H4.966l-1.864 5.124H28.95l1.865-5.124z" stroke="#333" stroke-width=".216"></path><path d="M54.771 22.234v.106c1.17.426 2.287 1.17 2.872 1.649 1.809 1.489 2.606 3.457 2.606 6.01 0 4.202-2.233 7.234-5.903 8.191-1.118.32-2.288.426-4.469.426H38.762V7.873h9.84c2.02 0 3.404.106 4.626.426 3.564.957 5.904 3.404 5.904 7.286 0 2.074-.744 3.83-1.968 5-.532.532-1.276 1.17-2.393 1.649zm-9.84 3.244v8.085h4.255c1.277 0 2.447-.106 3.298-.904.85-.799 1.223-1.809 1.223-3.138 0-1.011-.266-1.969-.797-2.66-.904-1.117-2.021-1.383-3.936-1.383H44.93zm-.053-5.319h3.457c1.064 0 1.596 0 2.128-.159 1.436-.426 2.34-1.702 2.34-3.457 0-2.075-.957-2.98-2.34-3.404-.586-.16-1.17-.213-2.34-.213h-3.245v7.233zm24.626 18.457V13.032h-8.882V7.873H85.3l-1.755 5.159h-7.872v25.584h-6.17zm17.712 0V7.873h20l-1.756 5.159H93.333v6.808h4.946c3.99 0 6.064.957 7.5 2.18 1.117.958 3.032 3.085 3.032 7.288 0 4.149-1.969 6.436-3.617 7.605-1.915 1.33-3.936 1.703-8.031 1.703h-9.947zm6.117-5.16h4.627c1.755 0 2.82-.425 3.564-1.383.372-.478.904-1.329.904-2.925 0-1.596-.532-2.712-1.596-3.51-.637-.479-1.488-.745-2.925-.745h-4.574v8.564z" fill="#FFF"></path><path d="M54.771 22.234v.106c1.17.426 2.287 1.17 2.872 1.649 1.809 1.489 2.606 3.457 2.606 6.01 0 4.202-2.233 7.234-5.903 8.191-1.118.32-2.288.426-4.469.426H38.762V7.873h9.84c2.02 0 3.404.106 4.626.426 3.564.957 5.904 3.404 5.904 7.286 0 2.074-.744 3.83-1.968 5-.532.532-1.276 1.17-2.393 1.649zm-9.84 3.244v8.085h4.255c1.277 0 2.447-.106 3.298-.904.85-.799 1.223-1.809 1.223-3.138 0-1.011-.266-1.969-.797-2.66-.904-1.117-2.021-1.383-3.936-1.383H44.93zm-.053-5.319h3.457c1.064 0 1.596 0 2.128-.159 1.436-.426 2.34-1.702 2.34-3.457 0-2.075-.957-2.98-2.34-3.404-.586-.16-1.17-.213-2.34-.213h-3.245v7.233zm24.626 18.457V13.032h-8.882V7.873H85.3l-1.755 5.159h-7.872v25.584h-6.17zm17.712 0V7.873h20l-1.756 5.159H93.333v6.808h4.946c3.99 0 6.064.957 7.5 2.18 1.117.958 3.032 3.085 3.032 7.288 0 4.149-1.969 6.436-3.617 7.605-1.915 1.33-3.936 1.703-8.031 1.703h-9.947zm6.117-5.16h4.627c1.755 0 2.82-.425 3.564-1.383.372-.478.904-1.329.904-2.925 0-1.596-.532-2.712-1.596-3.51-.637-.479-1.488-.745-2.925-.745h-4.574v8.564z" stroke="#333" stroke-width=".216"></path></g></symbol><symbol id="svgRaiffeisenBank" viewbox="0 0 63 60"><g fill="none" fill-rule="evenodd"><path d="M22.29 30.087L1.135 51.805l9.078 7.977 21.155-21.718L52.52 59.81l9.066-8.005L40.43 30.087l3.89-3.996v-8.84l2.177-1.827v5.793l3.45 3.09 9.94-10.186 2.533 2.69c.536-3.007.395-4.915-.572-7.813-.843-2.514-1.515-4.07-3.494-5.833-1.987-1.773-3.582-2.518-6.23-2.8-2.208-.239-3.684-.201-5.627.877-.544.303-.88.461-1.313.908L33.942 13.68l2.177 2.665-4.751 4.872-4.752-4.872 2.177-2.664L17.538 2.15c-.432-.444-.762-.606-1.3-.909C14.3.155 12.812.082 10.61.364c-2.497.32-3.946 1.116-5.82 2.8C2.82 4.938 2.2 6.504 1.3 8.999.316 11.73.079 13.48.3 16.372l2.547-2.251 9.941 10.186 3.45-3.09v-5.793l2.176 1.786v8.88l3.876 3.997z" fill="#FFF"></path><path d="M22.29 30.087L1.135 51.805l9.078 7.977 21.155-21.718L52.52 59.81l9.066-8.005L40.43 30.087l3.89-3.996v-8.84l2.177-1.827v5.793l3.45 3.09 9.94-10.186 2.533 2.69c.536-3.007.395-4.915-.572-7.813-.843-2.514-1.515-4.07-3.494-5.833-1.987-1.773-3.582-2.518-6.23-2.8-2.208-.239-3.684-.201-5.627.877-.544.303-.88.461-1.313.908L33.942 13.68l2.177 2.665-4.751 4.872-4.752-4.872 2.177-2.664L17.538 2.15c-.432-.444-.762-.606-1.3-.909C14.3.155 12.812.082 10.61.364c-2.497.32-3.946 1.116-5.82 2.8C2.82 4.938 2.2 6.504 1.3 8.999.316 11.73.079 13.48.3 16.372l2.547-2.251 9.941 10.186 3.45-3.09v-5.793l2.176 1.786v8.88l3.876 3.997z" stroke="#4D4D4D" stroke-width=".216"></path></g></symbol><symbol id="svgCreditEuroeBank" viewbox="0 0 60 60"><g fill="none" fill-rule="evenodd"><path d="M30.017.223c16.454 0 29.792 13.34 29.792 29.794S46.471 59.81 30.017 59.81C13.562 59.81.223 46.47.223 30.017.223 13.562 13.563.223 30.017.223zM15.12 30.017L30.017 15.12l14.896 14.897-14.896 14.897L15.12 30.017z" fill="#FFF"></path><path d="M30.017.223c16.454 0 29.792 13.34 29.792 29.794S46.471 59.81 30.017 59.81C13.562 59.81.223 46.47.223 30.017.223 13.562 13.563.223 30.017.223zM15.12 30.017L30.017 15.12l14.896 14.897-14.896 14.897L15.12 30.017z" stroke="#4D4D4D" stroke-width=".216"></path></g></symbol><symbol id="svgBankOtkritie" viewbox="0 0 60 60"><g fill="none" fill-rule="evenodd"><path d="M50.193 31.51c0 7.25-3.77 13.753-9.85 16.972l-1.393.659c-.458.21-.963.331-1.453.331-.946 0-1.698-.4-2.149-1.136-.358-.607-.458-1.261-.316-2.01.21-1.038 1.02-1.56 1.259-1.69 3.584-1.628 5.89-5.284 5.89-9.33V24.732c0-4.047-2.298-7.698-5.843-9.308-.009-.008-1.067-.513-1.306-1.717-.142-.75-.042-1.406.316-2.008.45-.725 1.203-1.137 2.15-1.137.489 0 .994.11 1.452.327 0 0 1.31.622 1.364.642 6.105 3.238 9.88 9.745 9.88 16.99v2.99zM23.746 44.636c.24.13 1.053.652 1.265 1.69.142.749.046 1.403-.32 2.01-.447.735-1.199 1.136-2.15 1.136-.485 0-.985-.12-1.452-.331l-1.393-.66c-6.08-3.218-9.851-9.722-9.851-16.97v-2.99c0-7.245 3.784-13.752 9.878-16.99.059-.02 1.366-.642 1.366-.642a3.464 3.464 0 0 1 1.449-.327c.947 0 1.706.412 2.154 1.137.365.602.46 1.257.319 2.008-.24 1.204-1.295 1.709-1.307 1.717-3.546 1.61-5.838 5.261-5.838 9.308v10.574c0 4.046 2.296 7.702 5.88 9.33zM30.019.223C13.565.223.223 13.564.223 30.015.223 46.47 13.565 59.81 30.02 59.81c16.453 0 29.798-13.34 29.798-29.795 0-16.45-13.345-29.792-29.798-29.792z" fill="#FFF"></path><path d="M50.193 31.51c0 7.25-3.77 13.753-9.85 16.972l-1.393.659c-.458.21-.963.331-1.453.331-.946 0-1.698-.4-2.149-1.136-.358-.607-.458-1.261-.316-2.01.21-1.038 1.02-1.56 1.259-1.69 3.584-1.628 5.89-5.284 5.89-9.33V24.732c0-4.047-2.298-7.698-5.843-9.308-.009-.008-1.067-.513-1.306-1.717-.142-.75-.042-1.406.316-2.008.45-.725 1.203-1.137 2.15-1.137.489 0 .994.11 1.452.327 0 0 1.31.622 1.364.642 6.105 3.238 9.88 9.745 9.88 16.99v2.99zM23.746 44.636c.24.13 1.053.652 1.265 1.69.142.749.046 1.403-.32 2.01-.447.735-1.199 1.136-2.15 1.136-.485 0-.985-.12-1.452-.331l-1.393-.66c-6.08-3.218-9.851-9.722-9.851-16.97v-2.99c0-7.245 3.784-13.752 9.878-16.99.059-.02 1.366-.642 1.366-.642a3.464 3.464 0 0 1 1.449-.327c.947 0 1.706.412 2.154 1.137.365.602.46 1.257.319 2.008-.24 1.204-1.295 1.709-1.307 1.717-3.546 1.61-5.838 5.261-5.838 9.308v10.574c0 4.046 2.296 7.702 5.88 9.33zM30.019.223C13.565.223.223 13.564.223 30.015.223 46.47 13.565 59.81 30.02 59.81c16.453 0 29.798-13.34 29.798-29.795 0-16.45-13.345-29.792-29.798-29.792z" stroke="#4D4D4D" stroke-width=".216"></path></g></symbol><symbol id="svgPlay" viewbox="0 0 120 120"><g fill-rule="nonzero" fill="none"><circle cx="60" cy="60" r="60" fill="#EFAC56"></circle><path fill="#FFF" d="M76 60L44 80V40z"></path></g></symbol><symbol id="svgSpeakerLine" viewbox="0 0 17 17"><path d="M0 16c8.837 0 16-7.163 16-16" fill-rule="nonzero" stroke="#FFF" stroke-width="2" fill="none" opacity=".5"></path></symbol><symbol id="svgBurgerIcon" viewbox="0 0 20 25"><g fill="#currentColor" fill-rule="nonzero"><path d="M0 0h20v2H0zM0 23h20v2H0zM0 11h20v2H0z"></path></g></symbol><svg id="svgBurgerMobileIcon" viewbox="0 0 40 37"><g fill="#currentColor" fill-rule="nonzero"><path d="M0 0h40v2H0zM0 34.286h40v2H0zM0 17.143h40v2H0z"></path></g></svg><symbol id="svgClose" viewbox="0 0 16 16"><g fill="#currentColor" fill-rule="nonzero"><path d="M.222 14.364L14.364.222l1.414 1.414L1.636 15.778z"></path><path d="M1.636.222l14.142 14.142-1.414 1.414L.222 1.636z"></path></g></symbol><symbol id="svgTheWaayLogo" viewbox="0 0 295 117"><g fill="#currentColor" fill-rule="evenodd"><path d="M103.057 35.042h13.14l5.476-25.186h6.57l-5.475 25.186h13.14l3.286-12.046h8.76l-3.285 12.046h14.236L166.57 0h-14.235l-2.19 12.046h-8.761L143.574 0H97.582l-1.095 9.856h10.95zM195.042 35.042l2.19-7.666H179.71l1.095-5.475h15.33l2.191-7.665h-16.426l1.095-5.476h17.521L201.612 0h-29.566l-7.666 35.042z">/</path><path d="M117.293 56.943l2.19 25.186h-14.236l13.14-25.186h-1.094zm63.513 0l2.19 25.186H168.76l13.141-25.186h-1.095zm-101.84 59.133h8.76l8.76-16.426h24.092l1.095 16.426h29.567L160 99.65h24.091l1.095 16.426h28.472l-10.95-74.464h-39.423l-19.71 35.042-5.476-35.042H98.677L75.68 82.13l-1.095-40.517v4.38-4.38H47.209L25.308 88.7l1.095-47.088H.122l2.19 74.464h30.661l21.902-49.278 1.095 49.278H78.966z" fill-rule="nonzero">/</path><path d="M246.51 72.274l-5.476-30.662h-30.661l16.425 51.468-4.38 22.996h28.472l4.38-22.996 39.422-51.468h-29.567z">/</path></g></symbol><symbol id="svgIconFB" viewbox="0 0 39 39"><g fill="none" fill-rule="evenodd"><path d="M38.4 19.2c0 10.604-8.597 19.2-19.2 19.2C8.596 38.4 0 29.804 0 19.2S8.596 0 19.2 0c10.603 0 19.2 8.596 19.2 19.2" fill="#44569A"/><path d="M20.983 30.72V20.21h3.528l.529-4.095h-4.057V13.5c0-1.186.33-1.994 2.03-1.994l2.17-.001V7.842c-.376-.05-1.663-.162-3.161-.162-3.127 0-5.268 1.909-5.268 5.414v3.021h-3.537v4.095h3.537v10.51h4.23z" fill="#FEFEFE">/</path></g></symbol><symbol id="svgIconM" viewbox="0 0 39 39"><g fill="none" fill-rule="evenodd"><path d="M38.4 19.2c0 10.604-8.597 19.2-19.2 19.2C8.596 38.4 0 29.804 0 19.2S8.596 0 19.2 0c10.603 0 19.2 8.596 19.2 19.2" fill="#FFF">/</path><path d="M9.975 13.517a.937.937 0 0 0-.305-.79l-2.258-2.72V9.6h7.012l5.419 11.885L24.608 9.6h6.684v.406l-1.93 1.851a.564.564 0 0 0-.215.542V26a.564.564 0 0 0 .214.542l1.886 1.852v.406h-9.484v-.406l1.953-1.897c.192-.191.192-.248.192-.541V14.96l-5.431 13.794h-.734L11.42 14.96v9.245c-.053.389.077.78.35 1.06l2.541 3.083v.406H7.107v-.406l2.54-3.082c.273-.281.394-.675.328-1.06v-10.69z" fill="#000">/</path></g></symbol><symbol id="svgIconTelegram" viewbox="0 0 37 38"><defs><path id="a" d="M36.57 19.81c0 10.099-8.186 18.285-18.285 18.285S0 29.91 0 19.81C0 9.71 8.186 1.524 18.285 1.524c10.1 0 18.286 8.186 18.286 18.286">/</path><lineargradient id="b" x1="50.001%" x2="50.001%" y1="-.001%" y2="99.635%"><stop offset="0%" stop-color="#6BC3E2">/</stop><stop offset="100%" stop-color="#50ACD6">/</stop></lineargradient></defs><g fill="none" fill-rule="evenodd"><g transform="translate(0 -.62)"><mask id="c" fill="#fff"><use xlink:href="#a">/</use></mask><path d="M36.57 19.81c0 10.099-8.186 18.285-18.285 18.285S0 29.91 0 19.81C0 9.71 8.186 1.524 18.285 1.524c10.1 0 18.286 8.186 18.286 18.286" fill="url(#b)" mask="url(#c)">/</path></g><path d="M27.183 11.423L23.917 27.89s-.457 1.142-1.713.594l-7.537-5.778-2.74-1.325-4.614-1.553s-.708-.251-.776-.8c-.069-.547.799-.844.799-.844l18.34-7.194s1.507-.663 1.507.433" fill="#FEFEFE">/</path><path d="M14.088 27.705s-.22-.02-.494-.888-1.668-5.436-1.668-5.436l11.077-7.034s.64-.388.617 0c0 0 .114.068-.229.388-.342.32-8.701 7.833-8.701 7.833l-.602 5.137z" fill="#D8E9F3">/</path><path d="M17.557 24.921l-2.981 2.718s-.233.177-.488.066l.57-5.049 2.899 2.265z" fill="#B9D3E5">/</path></g></symbol></defs></svg>'}},function(s,l,e){e(0);s.exports=function(s){var l="";return l+='<div class="page__section page__header"><div class="page__content"><header class="header"><svg class="svg header__logo"><use xlink:href="#svgTheWaayLogo"></use></svg><a class="button button--attention header__button" href="">Войти</a><button class="header__burger"><svg class="svg header__burgerIcon"><use xlink:href="#svgBurgerIcon"></use></svg><svg class="svg header__burgerIconMobile"><use xlink:href="#svgBurgerMobileIcon"></use></svg></button></header></div></div>'}},function(s,l,e){e(0);s.exports=function(s){var l="";return l+='<section class="menu page__menu"><div class="menu__navigation"><nav class="navigation"><ul class="navigation__list"><li class="navigation__item"><a class="navigation__link" href="#">The Waay</a></li><li class="navigation__item"><a class="navigation__link" href="#">Проекты</a></li><li class="navigation__item"><a class="navigation__link" href="#">Кейсы</a></li><li class="navigation__item"><a class="navigation__link" href="#">Особенности</a></li><li class="navigation__item"><a class="navigation__link" href="#">Ссылки</a></li></ul></nav></div></section>'}},function(s,l,e){e(0);s.exports=function(s){var l="";return l+='<section class="page__section home"><div class="home__circle1"></div><div class="home__circle2"></div><div class="page__content home__content"><div class="home__form form"><input class="form__field textInput" type="text" placeholder="Имя"><input class="form__field textInput" type="text" placeholder="Организация"><input class="form__field textInput" type="text" placeholder="Телефон"><input class="form__field textInput" type="text" placeholder="Эл.почта"></div><div class="home__hint hint"><div class="hint__text">Заполните форму и&nbsp;мы&nbsp;отправим вам подробную информацию, расскажем про особенности методологии и&nbsp;поможем прикинуть бизнес-кейс</div><svg class="svg hint__line"><use xlink:href="#svgSpeakerLine"></use></svg><div class="hint__speaker"></div></div><a class="button button--attention button--big home__demo" href="#">Демо доступ</a><div class="home__version"><div class="version">The Waay. Demo version v1</div></div></div></section>'}},function(s,l,e){e(0);s.exports=function(s){var l="";return l+='<section class="page__section section2"><div class="page__content section2__content"><div class="section2__sliderDotts"></div><svg class="svg section2__logo"><use xlink:href="#svgTheWaayLogo"></use></svg></div></section>'}},function(s,l,e){e(0);s.exports=function(s){var l="";return l+='<section class="page__section section3"><div class="page__content section3__content"><div class="section3__text">Система персонализации отношений Банка с&nbsp;клиентами, которую вы&nbsp;можете начать использовать прямо сейчас</div><a class="section3__play" href="#"><svg class="svg section3__playIcon"><use xlink:href="#svgPlay"></use></svg></a><div class="section3__footer"><a class="button button--attention button--big section3__demo" href="#">Демо доступ</a><div class="section3__or">или</div><a class="section3__more" href="#">Подробное описание</a><div class="section3__version"><div class="version">The Waay. Demo version v1</div></div><div class="section3__subscribe"></div></div></div></section>'}},function(s,l,e){e(0);s.exports=function(s){var l="";return l+='<section class="page__section section4"><div class="page__content section4__content"><div class="section4__try"><div class="section4__tryText">Мы&nbsp;помогаем банкам увеличивать объемы x-sell на&nbsp;10-15% в&nbsp;год через каналы смс, email, call-центр, цифровые каналы за&nbsp;счет персонализации коммуникаций на&nbsp;основе глубокого поведенческого профилирования клиентов. Да-да. Система действительно пишет за&nbsp;вас персонализированные смс, email и&nbsp;прочие коммуникации. Облако персональных сообщений формируется на&nbsp;основании глубокого поведенческого профилирования клиентов. Данный профиль состоит из&nbsp;психографического профиля, поведенческого профиля, образа жизни, жизненных приоритетов и&nbsp;десятка дополнительны поведенческих шкал</div><a class="button button--big section4__tryButton" href="#">Попробовать Демо<br>и посчитать бизнес-кейс</a></div><div class="section4__circles"></div><div class="section4__clients"></div></div></section>'}},function(s,l,e){e(0);s.exports=function(s){var l="";return l+='<section class="page__section topBanks"><div class="page__content topBanks__content"><h1 class="topBanks__title title"><span class="title__highlighted">Проекты</span>&nbsp;с Топ<br>банками в России</h1><ul class="topBanks__list"><li class="topBanks__item"><svg class="svg topBanks__logo topBanks__logo--sberbank"><use xlink:href="#svgSberbank"></use></svg><div class="topBanks__name">Сбербанк</div></li><li class="topBanks__item"><svg class="svg topBanks__logo topBanks__logo--bankStPetersburg"><use xlink:href="#svgBankStPetersburg"></use><div class="topBanks__name">Банк<br>Санкт-Петербург</div></svg></li><li class="topBanks__item"><svg class="svg topBanks__logo topBanks__logo--vtb"><use xlink:href="#svgVtb"></use><div class="topBanks__name">ВТБ<br>Страхование</div></svg></li><li class="topBanks__item"><svg class="svg topBanks__logo topBanks__logo--raiffeisenBank"><use xlink:href="#svgRaiffeisenBank"></use><div class="topBanks__name">РайффайзенБанк</div></svg></li><li class="topBanks__item"><svg class="svg topBanks__logo topBanks__logo--creditEuroeBank"><use xlink:href="#svgCreditEuroeBank"></use><div class="topBanks__name">Credit Europe Bank</div></svg></li><li class="topBanks__item"><svg class="svg topBanks__logo topBanks__logo--bankOtkritie"><use xlink:href="#svgBankOtkritie"></use><div class="topBanks__name">Банк Открытие</div></svg></li></ul><div class="topBanks__done">10 000 000 клиентов проанализировано</div><a class="topBanks__more button button--big" href="#">Подробнее о кейсах</a></div></section>'}},function(s,l,e){e(0);s.exports=function(s){var l="";return l+='<section class="page__section cases"><div class="page__content cases__content"><h1 class="cases__title title title--highlighted">Кейсы</h1><ul class="cases__list"><li class="cases__item">ВТБ Стахование</li><li class="cases__item">Банк Санкт-Петербург</li><li class="cases__item">Кредит Евппора Банк</li></ul><h1 class="cases__theWaay" aria-label="TheWaay"><svg class="svg cases__theWaayLogo"><use xlink:href="#svgTheWaayLogo"></use></svg></h1><h2 class="cases__subtitle">3 продука</h2><div class="cases__articles"><ul class="cases__articleList"><li class="cases__articleItem"><article class="casesArticle"><h3 class="casesArticle__title">Помощник в анализе</h3><p class="casesArticle__description">+10-20% к точности существующих внутренних моделей банка</p><p class="casesArticle__text">Размеченная клиентская база: психографический профиль, образ жизни, жизненный прио-ритеты, интересы, увлечения, любимые бренды и&nbsp;места</p></article></li><li class="cases__articleItem"><article class="casesArticle"><h3 class="casesArticle__title">X-SELL помощник</h3><p class="casesArticle__description">+10-15% к x-sell результативности</p><p class="casesArticle__text">Готовые высоконверсионые адаптированные коммуника-ции: смс, email, call-центр, цифровые каналы под каждый из&nbsp;глубоких профилей и&nbsp;под любой банковский продукт</p></article></li><li class="cases__articleItem"><article class="casesArticle"><h3 class="casesArticle__title">Lifestyle  помощник</h3><p class="casesArticle__description">+12-18% к вовлечению в цифровые каналы</p><p class="casesArticle__text">Рекомендации для клиентов по&nbsp;финансам, банковским проду-ктам, куда сходить и&nbsp;что поло-житься под каждый из&nbsp;глубоких профилей</p></article></li></ul><h2 class="cases__subtitle">Особенность</h2><ul class="cases__articleList"><li class="cases__articleItem"><article class="casesArticle"><h3 class="casesArticle__title">Набор данных</h3><p class="casesArticle__text">Основа системы профили-рования&nbsp;&mdash; это карточная транзакционная активность клиента, которую мы&nbsp;полу-чаем от&nbsp;банка в&nbsp;обезли-ченном виде, а&nbsp;также его чеки, которые мы&nbsp;получаем от&nbsp;Партнера</p></article></li><li class="cases__articleItem"><article class="casesArticle"><h3 class="casesArticle__title">Глубина\u2028<br>профилирования</h3><p class="casesArticle__text">Образ жизни, психографи-ческий профиль, жизненные приоритеты, а&nbsp;также десятки других шкал, которые позволят вам быстро взглянуть как на&nbsp;каждого клиента так и&nbsp;поделить клиентов на&nbsp;актуальные сегменты</p></article></li><li class="cases__articleItem"><article class="casesArticle"><h3 class="casesArticle__title">Легкость и скорость<br>использования</h3><p class="casesArticle__text">Вы&nbsp;можете начать использо-вать систему прямо сейчас. В&nbsp;системе доступен набор готовых стандартных отчетов, которые позволят вам решать&nbsp;80% задач без технической подготовки за&nbsp;минуты</p></article></li></ul><h2 class="cases__subtitle">3 формата работы</h2><ul class="cases__articleList"><li class="cases__articleItem"><article class="casesArticle"><h3 class="casesArticle__title">Быстрый</h3><p class="casesArticle__text">Вы&nbsp;можете получить доступ к&nbsp;системе анализа и&nbsp;вручную загружать и&nbsp;выгружать данные. Вариант используется на&nbsp;пер-вых этапах сотрудничества</p></article></li><li class="cases__articleItem"><article class="casesArticle"><h3 class="casesArticle__title">API</h3><p class="casesArticle__text">Также мы&nbsp;можем настроить обмен данным через API. Данный формате позволяет обмениваться обезличенным данными в&nbsp;режиме реального времени и&nbsp;без ограничений по&nbsp;объем</p></article></li><li class="cases__articleItem"><article class="casesArticle"><h3 class="casesArticle__title">В ИТ-периметре банка</h3><p class="casesArticle__text">На&nbsp;этапах когда требуется real-time реакция системы, а&nbsp;также когда объемы данных перехо-дят за&nbsp;определнную планку мы&nbsp;размещаем ключевые модули системы внутри периметра банка</p></article></li></ul></div><h1 class="title cases__title cases__title--howTo">Как получить первые результаты через несколько дней</h1></div></section>'}},function(s,l,e){e(0);s.exports=function(s){var l="";return l+='<section class="page__section links"><div class="page__content links__content"><div class="title links__title">Посмотреть и почитать</div></div></section>'}},function(s,l,e){e(0);s.exports=function(s){var l="";return l+='<footer class="page__section footer" role="contentinfo"><div class="page__content footer__content"><svg class="svg footer__logo"><use xlink:href="#svgTheWaayLogo"></use></svg><div class="footer__text">The27 Lab&nbsp;&&nbsp;School:<br>Исследования, инсайты, обновления, кейсы в&nbsp;почте или телеграме</div><div class="footer__socials"><ul class="footerSocials"><li class="footerSocials__items"><svg class="svg footerSocial__logo footerSocial__logo--telegram"><use xlink:href="#svgIconTelegram"></use></svg></li><li class="footerSocials__items"><svg class="svg footerSocial__logo footerSocial__logo--fb"><use xlink:href="#svgIconFB"></use></svg></li><li class="footerSocials__items"><svg class="svg footerSocial__logo footerSocial__logo--m"><use xlink:href="#svgIconM"></use></svg></li></ul></div><div class="footer__contacts"><ul class="footerContacts"><li class="footerContacts__item"><span class="footerContacts__title">Дубна</span><p class="footerContacts__text">Дубна, улица Мичурина, 29, офис:&nbsp;16</p></li><li class="footerContacts__item"><span class="footerContacts__title">Москва</span><p class="footerContacts__text">Волгоградский проспект, 28А, офис&nbsp;513</p></li></ul></div><nav class="footer__links"><ul class="footerLinks"><li class="footerLinks__item"><a class="footerLinks__link" href="#">Мы</a></li><li class="footerLinks__item"><a class="footerLinks__link" href="#">Продукт</a></li><li class="footerLinks__item"><a class="footerLinks__link" href="#">Демо</a></li><li class="footerLinks__item"><a class="footerLinks__link" href="#">Бизнес</a></li><li class="footerLinks__item"><a class="footerLinks__link" href="#">The 27 lab &<br>school</a></li></ul><ul class="footerLinks"><li class="footerLinks__item"><a class="footerLinks__link" href="#">Facebook</a></li><li class="footerLinks__item"><a class="footerLinks__link" href="#">Telegram</a></li><li class="footerLinks__item"><a class="footerLinks__link" href="#">Medium</a></li></ul></nav><div class="footer__subscribe"></div><div class="footer__button"><a class="button button--attention button--big" href="#">Демо доступ</a></div></div></footer>'}}]);