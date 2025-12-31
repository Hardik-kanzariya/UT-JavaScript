// 1. What is String?
// String ek primitive data type che je text ne represent kare che
// String ne single quotes, double quotes, ya backticks ma define kari sakay che

// 2. Declaration
let singleQuoteString = 'Hello';
let doubleQuoteString = "World";
let templateLiteralString = `Hello World`;

// Strings Methods:-

// 1. length:- String ni length find karva mate
let str1 = "Hello";
console.log(str1.length); // out put:- 5

// 2. charAt():- String na specific index par character ne find karva mate
let str2 = "Hello";
console.log(str2.charAt(0)); // out put:- H

// 3. toUpperCase():- String ne uppercase ma convert karva mate
let str3 = "Hello";
console.log(str3.toUpperCase()); // out put:- HELLO

// 4. toLowerCase():- String ne lowercase ma convert karva mate
let str4 = "Hello";
console.log(str4.toLowerCase()); // out put:- hello

// 5. trim():- String na starting ane end maathi space ne remove karva mate
let str5 = "   Hello   ";
console.log(str5.trim()); // out put:- Hello

// 6. trimStart():- String na starting maathi space ne remove karva mate
let str6 = "   World   ";
console.log(str6.trimStart()); // out put:- "World   "

// 7. trimEnd():- String na end maathi space ne remove karva mate
let str7 = "   Hardik   ";
console.log(str7.trimEnd()); // out put:- "   Hardik"

// 8. slice():- String na specific part ne extract karva mate
let str8 = "Hello World";
console.log(str8.slice(0, 5)); // out put:- Hello

// 9. includes():- String ma specific substring che ke nahi te check karva mate
let str9 = "Hello World";
console.log(str9.includes("World")); // out put:- true

// 10. indexOf():- String ma specific substring ni position find karva mate
let str10 = "Hello World";
console.log(str10.indexOf("World")); // out put:- 6

// 11. lastIndexOf():- String ma specific substring ni last position find karva mate
let str11 = "Hello World World";
console.log(str11.lastIndexOf("World")); // out put:- 12

// 12. split():- String ne array ma convert karva mate
let str12 = "Hello World";
console.log(str12.split(" ")); // out put:- ["Hello", "World"]

// 13. replace():- String ma specific substring ne replace karva mate
let str13 = "Hello World";
console.log(str13.replace("World", "Hardik")); // out put:- Hello Hardik

// 14. concat():- Be string ne jodva mate
let str14a = "Hello";
let str14b = "World";
console.log(str14a.concat(" ", str14b)); // out put:- Hello World

// 15. repeat():- String ne specific number of times repeat karva mate
let str15 = "Hello";
console.log(str15.repeat(3)); // out put:- HelloHelloHello

// 16. padStart():- String ma padding left side or start ma add karva mate
let str16 = "5";
console.log(str16.padStart(2, "0")); // out put:- 05

// 17. padEnd():- String ma padding end side or right ma add karva mate
let str17 = "5";
console.log(str17.padEnd(2, "0")); // out put:- 50

// 18. at():- String na specific index par character ne find karva mate
let str18 = "Hello";
console.log(str18.at(0)); // out put:- H

// 19. startsWith():- String na starting ma specific substring che ke nahi te check karva mate
let str19 = "Hello World";
console.log(str19.startsWith("Hello")); // out put:- true

// 20. endsWith():- String na end ma specific substring che ke nahi te check karva mate
let str20 = "Hello World";
console.log(str20.endsWith("World")); // out put:- true

// 21. substring():- String na specific part ne extract karva mate 
let str21 = "Hello World";
console.log(str21.substring(0, 5)); // out put:- Hello

// 22. str():- array jem access karva mate
let str22 = "Hello";
console.log(str22.at(0)); // out put:- H

// 23.charCodeAt():- String na specific index par character no Unicode value find karva mate
let str23 = "Hello";
console.log(str23.charCodeAt(0)); // out put:- 72

// 24. codePointAt():- String na specific index par character no Unicode code point find karva mate
let str24 = "👍";
console.log(str24.codePointAt(0)); // out put:- 128522

// 25. isString():- Check karva mate ke value string che ke nahi
let str25 = "Hello";
console.log(typeof str25 === "string"); // out put:- true

// 26. isEmpty():- Check karva mate ke string khali che ke nahi
let str26 = "";
console.log(str26.length === 0); // out put:- true

// 27. isWellFormed():- Check karva mate ke string sachi rite banavi che ke nahi and 
// unicode characters ne support kare che ke nahi
let str27 = "Hello";
console.log(str27.length > 0 && str27.trim().length > 0); // out put:- true

// 28. normalize():- String ne specific Unicode form ma convert karva mate
let str28 = "é";
console.log(str28.normalize("NFC")); // out put:- é

// 29. isNormalized():- Check karva mate ke string normalized che ke nahi
let str29 = "é";
console.log(str29.normalize("NFC") === str29); // out put:- true

// 30. replaceAll():- String ma specific substring ne badalva mate
let str30 = "Hello World";
console.log(str30.replaceAll("o", "0")); // out put:- Hell0 W0rld

// 31. secure():- String ne secure karva mate
let str31 = "Hello World";
console.log(str31.replace(/[^a-zA-Z0-9]/g, "")); // out put:- HelloWorld

// 32. search():- String ma specific substring ne search karva mate
let str32 = "Hello World";
console.log(str32.search("World")); // out put:- 6

// 33. match():- String ma specific pattern ne match karva mate
let str33 = "Hello World";
console.log(str33.match("World")); // out put:- ["World"]

// 34. matchAll():- String ma specific pattern ne match karva mate
let str34 = "Hello World";
console.log(str34.matchAll("o")); // out put:- [ "o", "o" ]

