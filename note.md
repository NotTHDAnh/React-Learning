# ROAD TO FULL STACK

## FUNCTION IN JAVASCRIPT

- function is a unit of code, a group of code, named, do 1 or something, and return some value through value
- if the function not return anything, we called it void, do not return
- return value, could be a primitive (singly: number, string : 5 10 15, 3.14, 'A','Z')
- return value, could be a complicated things, complicated data, look at the data we can see more thing in it -> that's called object within info inside, when we look at the object, these thing called property/attribute
- **simple traditional**, syntax of JS:
->

```js
function function_name(argument if has) {
    line of js code here;
    return value;
}
```

- give a function another **'nickname'**

```js
const nick = function function_name(argument if has) {
    line of js code here;
    return value;
}
```

// nick is a pointer variable, an reference variable, point to ram area where the code of function is located

const nick1 = 2005; // primitive variable, 2005 is in the ram area : 'nick1'

---

## Object explanation

Variable is a RAM area that contain values

- if the value is simple(primitive) -> 1 area (on, off) is enough
- if the value is more complicated (object) -> it will cost 2 ram's area, one big section for object's info, 1 reference variable, pointer save the point location in that big area

```java
int yob = 2005; // Java - 1 ram area
```

```js
const yob = 2005; // JS - 1 ram area
```

Student s = new Student("SE01","An Nguyen",2005, 8.6); // JAVA: 2 ram's area
-> much bytes in ram contain object's info/state, that's called object area

const s = {"id": "SE01", "name":"An Nguyen","yob":2005,"gpa": 8.6};

//JSON: JavaScript Object Notation: a way to represent an object, a complicated info in JS style. It's called self explanation

---
FUNCTION DEMO IN BOTH STYLE:

```js
function add(a,b) {
    return a + b;
} // function declaration
```

```js
const tx = function add(a,b) {
    return a + b;
}
    ```

-> HOW TO CALL THAT FUNCTION

functionName() if a function has no argument

functionName(specific arguments)

if a function has a nick 
-> nick() or nick(argument)


example
```js
add(30,70); // 100 is returned value

console.log(add(30,70));

tx(30,70);
```

---

- Give the function another nickname; or discard it own name; use NICK only

```js
// ANONYMOUS FUNCTION - FUNCTION THAT DOESN'T HAVE ORIGIN NAME, WE CALLED IT THROUGH NICK
const nick = function (arguements){
    line of code;
    return value;
}

nick(); // run a function through nick
```

---
arrow function

- That is a anonymous function that cut off some unnessary things

```js
// ANONYMOUS FUNCTION - FUNCTION THAT DOESN'T HAVE ORIGIN NAME, WE CALLED IT THROUGH NICK
const nick = function (arguements){
    line of code;
    return value;
}

// ARROW => // JAVA ->, C# =>

const nick = (arguements) => {
    line of code;
    return value;
}
// FUNCTION THAT CUT OFF IT'S ORIGIN NAME, THE FUNCTION, SEPARATE ARGUMENT AND BODY BY THE ARROW SYMBOL 
// => ANONYMOUS FUNCTION THAT CUT OFF SEVERAL THINGS, THAT'S CALL AN ARROW FUNCTION
```

----

- Note: React will update: crud, color, show/hide tags, process user's action. Every web's content is in the main div named "root". We called it container

---

## APPLICATION OF CALLBACK FUNCTION | FUNCTIONAL PROGRAMMING - BASICALLY DELEGATES

### functional programming

- Java, C#, C++: Class, Object: field/property/attribute + method()
--> OOP - OBJECT ORIENTED PROGRAMMING, Code has to be in class
- C, Pascal,..: -> code start from function, function get data, argument are values
--> PROCEDURAL PROGRAMMING LANGUAGE
- java which has lambda expression, -> stream-api
- cc# has delegates, lambda expression => FUNCTIONAL Programming Extras -LINQ
- JavaScript: NATIVE FUNCTIONAL PROGRAMMING LANGUAGE
(Dr.Scheme)

-> in JS, function is also considered as an data, object

eg: function f(???) {...}

this function is saved in ram, this ram section has unique feature: name, number of argument, return value
because of this is an object, data, "value", so it will have an variable for it

 ->**SO, WHEN WE USE CALLBACK FUNCTION**

- It's a method that write a function with argument is another function, that's call functional programming
- Function is pass to a function by argument(callback function)
- Use callback is a method that is design a main function(which called a callback, receive callback) for the easily to open in the future. And it's also designed to process the known demands, or unknown

Eg: the function printmanager() can print even,odss,number,l..

- the main function receive outside function, so we can pass a variety of function even though it's don't know what that outside function do -> it can interact with **future**

> Eg:
A Pho restaurent, it's owner serve Pho to customer -> function make-a-Pho()

make-a-Pho() -> return Pho-bowl

"I'd like to order a Pho" -> make-a-Pho(option)

"I'd like to order a Pho with clear broth" -> make-a-Pho(option)

"I'd like to order a Pho, no spring onion" -> make-a-Pho(option)

"I'd like to order a Pho raw beef,..." -> make-a-Pho(option)

"I'd like to order a Pho raw beef,...,more Pho" -> make-a-Pho(option)

```js
function make-a-Pho(option???) {
    if(option == clear broth)
        return clear broth Pho
    if(option == clear broth, no spring onions)
        return ...
    // Not expandable,
}
```

So we need this

```jsx
function make-a-Pho(funtion-that-satisfy-customer-request) {
    create a Pho-bowl-thats-satisfy-request;
}
```

===> The owner has a lot of ingredients: spring onions, beef, broth,... -> so She/he has will pass the permission for customer to order the Pho by their request

===> There a function that has a lot of data, but it don't know which to return
-> so it will wait from outside for it to process
-> it equivalent to .map of array
                    .filter of array
                    .reduce of array

---

**OOP ADVANCE PRINCIPES**

Open/ CLosed Principle: Open with add more, close with edit existed one

---

## DESTRUCTURING - GET VALUE IN ARRAY, OBJECT FAST

- Array, object is the object that contains a lot of data, so when we need to get that data in array,object, and assign it to a variable, we have 2 ways:

1. Array

```js
const arr =[5,10,15,20];

// * GET ELEMENT FROM ARRAY TO USE, TRADITIONAL WAYS;
const a1 = arr[0];
const a2 = arr[1];
const a3 = arr[2];
const a4 = arr[3];

console.log("Values of arrays (traditional):", a1,a2,a3,a4);

// * GET ELEMENT FROM ARRAY TO USE,MORDERN WAYS - DESTRUCT ARRAY AND QUICK ASSIGN INTO SET OF VARIABLE

const [e1,e2,e3,e4] = arr;

console.log("Values of arrays (destruct):", a1,a2,a3,a4);
// ~~~ const [count,setCount] = useState(0); //jsx
```

1. Object

```js
const s = {id : "SE1",name : "AN NGUYEN",yob = 2005};

// GET INFO IN OBJECT IN TRADITIONAL WAY
const id = s.id;
const name = s.name;
const nameSinh = s.yob;

console.log("Student's info:",id,name,nameSinh);


// * GET INFO FROM OBJECTTO USE, MORDERN WAY - DESTRUCT OBJECT AND QUICK ASSIGN INTO SET OF VARIABLE
//               alias for origin name: yob
const {id, name, yob:namSinh} = s;

console.log("Student's info:",id,name,nameSinh);

```

---

# TIP N TRICK W ARROW FUNCTION

- Help button event listener process
- Using in collection (list,set,map) which is objects that contain many data but we can't predict what is the uses of these data

# IMPORT & EXPORT

- ES6 - JS ECMASCRIPT VERSION 6,2015, Establish Module, ecmascript module
- Each .js file is encaps, function and variable are private
- Eg: A.js can't get functions from B.js except:
    B.js decide to public the function for everybody to use -> it's called export
- There's 2 type of export: Export and export default
-> export default. if a js file has export default, there's only a default
-> export equivalent public in java when we talk about function in class

Eg:

```js
export default function map(arr, fCallBack){
    
}

// export default map
```

- Callback that return true/false -> predicate function

- Standard array provide a variety of processing function:

.map( => )

.filter( => )

.reduce( => )

.forEach( => ) // alternative for: for(let i = ...)

-> Arrow function is used mostly in callback, callback in main to expand the use of main

- advanced alias

```js
import * as ArrayUtils from "./blabla.js"
// every function inside the .s file is called ArrayUtils
// use these func through ".", Eg: ArrayUtils.print();
// Except for default, don't call it's name, use ArrayUtils.default();

```

## WEB SERVER

- WEB PAGE: .HTML -> STATIC WEB, APPEAR IN BROWSER IN 2 WAYS:
- IT AVAILABLE ON DISK, WE DOUBLE CLICK THE FILE IN BROWSER TO OPEN IT; File: C:/ -> this called open a file
    If in HTML has <script type = "module" ... > it will appears some error, can't run html -> CORS
- Open a file get from a cloud pc, but there some issues: how to locate that cloud pc, so we will resolve this problem through ip address(ipv4, ipv6) which is a long hexa number (v6) v4

But there's number are to complex, so there's a way to map ip to readable name like .. .com -> domain name service (DNS)

So the way that request, response come/from to a server to get the web page is called communicate protocol HTTP, HTTPS

Application that listen, serve web request -> web server

So when we need to test the same model, but in local, we install web server in out desktop so the web even though in our system, but it's called in web Standard called by url just the same like normal web

127.0.0.1 ~ localhost

If we install server in local, we have to point where to get the .html, and then we can get the page using url with localhost

Vite

Serve

- These 2 vite, serve is 2 application for  react dev, to make our laptop, folder contain html,.js into web serve location
- These 2 are small application, tool serve static web, written in .js and run on nodejs background
- If we want to use these tools, we have to download it to our com, there's 3 ways:
Global download:

use for every project, can use anywhere: npm install -g vite, npm install --global vite, npm i -g vite

It wil be located at c:\users\account\appdata\roaming\npm\node_modules

and run with

vite --port 6969

serve -l 6789

---
npm     |   npx
when installed node, we have:

- node.exe is runtime environment from browser to outer
- npm is a tool written in js with node in background, help to manage js package, install libray ~ maven in java
- can run app .js in local, but can't directly call, so that we have to define it in file package.json in script

run vite

npm run dev -> npm find into package.json -> script -> dev -> run

- npx (Node package execute) execute directly apps, don't need to go into script like npm

-> npx vite
// if vite not installed, it will automatically install and run
// it will install into %appdata%\local\npm-cache\npx

---

Server with project, located in node_modules for each project:

npm create vite@latest my-app --template react

npm run dev

npx vite --port 6969

Web server for dev

HMR - HOT MODULE REPLACEMENT -> auto reload page when update code

File package.json ~~~ pom.xml in maven project

- Define library, dependency, package for:
-> dev, when code the app
-> when run the app
When type 'npm install' the npm will automatically go in internet, website npmjs.org which is contain all the js lib, then it put all these package into node_modules inside project
- Do not put this folder in project's github (must put it in .gitignore)

- In package.json

7.2.4 -> the version must be exactly -> can use any version, it will take the latest

^7.2.4 -> download the 7.x.x , it doesn't care after 7

~7.2.4 -> accept 7.2.x

# REACT

- React is JavaScript's library, developed by Meta(facebook) to make web app in rich-client, client side rendering(crs) style
- Web app has some style:

| rich server -> SSR - Server Side Rendering   | rich client -> CSR - Client Side Rendering    |
|--------------- | --------------- |
| JSP/Servlet   | React, vuejs, angularjs ..   |
| Webserver prepare pages| Webserver perpared an empty index page and a lot of js libs with dev's code, installed into client's browser, and the Jss interact with DOM tree of user, and it can also call backend api to json   |

(rich server)
USER ---- BROWSER ---- SERVER
                        - PREPARE FULL PAGE
                        - PAGES
                        - BACKEND PROCESSING, DATABASE

(rich client)
USER ---- BROWSER ---- FE SERVER(index.html) ---------- BE SERVER
                       ```<div id="root">```
                 <---- JS (code js
                            + React) <-------> Web API
                                        JSON        DB

- React Lib provide:
1.1 Lib/ function for dev to code layout, pages, process user's action when interact with the web
-> Code create web written in pure js or jsx
-> Code create layout
-> Code process user's action
-> Code get data from other places(api)

jsx help dev write app easily, easy to code but browser  can't understand
jsx have to convert into js then browser can finally understand

Eg:
Dev write code using jsx(js + xml)
            |
            | TRANSPILE/TRANSPILER: TSC, ESBUILD, SWC,BABEL
            V
JS using lib fucntion of react (dist/folder)
            |
            | converted JS, JS of React interfere the DOM tree
            V
        browser's DOM

1.2 lib/ function to run app where dev've code above

**Render()**

- it will change the DOM of index.html, it will cahnge things in <div id="root"></div> React will change content in here

```html
<html>
    <body>
        <div id="root">
            // CONTAINER, NODE IN ORIGINAL DOM OF HTML, REACT LIB FUNCTION WILL BE RENDERED IN here
        </div>
    </body>
</html>
```

.render() can be passed into by JS variable, Number, string, 1 array, 1 JSX

## Favicons

- Favicons: Favourite + icon
- Is a small img, which is favourited, used for recognizing logo, symbol for your web ap
- located in your web's folder when deloy - inside index page
- is a square img in 16 px X 16 px or 32x 32px
- has .icon extension, is broke when zoom out
- we can also use .svg, this will make the zoom out OK because it's vector img, generate from mathimacal function
- Svg is a img standard where it's contain is describe, generate by tags. It's oprigin from ```<svg></svg>``` and then the browser read all the ```<svg>``` tags and render the img
- Every browser has an engine that can actually understand the svg
- tags of svg img is standardalize by W3C (World Wide Web Consortium)
- inside svg source's there only html type text, start with ```<svg></svg>```
- Svg can also be inside html tag
- We can actually use AI to generate SVG

## CSS

- Web design standard, standardalize by W3C
- Is a syntax, words use to decorate the web, the html tags
- Browser understand this, applied this to DOM

**Selector**

- Is the way to locate a HTML element (1 or more tags) and apply layout declaration to these html group tags

**Fundemental Syntax**
Selector {Property: Value;} change layout, color of tags, group of tags into new value

```css
div {background-color:red;}

a {font-weight:500; color:#646cff;}
body {background-color:pink; font-family: Arial;}
.card {background-color:#f8bbd0; padding: 20px; border-radius:12px;}
#ngoctrinh {background-color: pink}
```

JSX: <div className="container">

## JSX

**1. JSX = JAVASCRIPT XML**

- JSX is a extended JS that dev can write HTML in JS code, and inside HTML can have JS Code
- a JS function can return a group of html tag using JXS syntax
Eg:

```jsx
const msg = <h1>Xin Chào</h1>;

function BigMessage() {
    return <h1>Xin Chào</h1>;
}

function BigMessageDetail() {
    const yob = 2000;
    return (
        <>
            <h1>Xin Chào</h1>
            <h2>My name is Dadx | Age : {2026 - yob} </h2>
        </>
    );
}

```

**2. Purpose**

- Used to describe UI "pieces" in web that dev "designed"
- Js function process data, render ui with processed data(change DOM), make the act of create web app, web page more flexible

**3. JSX Syntax**

- A JSX Code, or many html tag

## EVENTs

- Event: is a signal, something happens, something notify that user have just do something
Eg: user click something, type something, drag something, click submit
- Event could even be a signal of browser(a page that done loading, window resize, scrolling)
-> SO we have to write more code to adapt these event
- Event usually tagged with an UI object: button, text box, scroll bar, radio button
-> When an even happens, user do something on UI, the Code happen to react with that, we assign 1 event handler, which is a function relate to event

## COMPONENT

1. What is component

- It is a JS function; but instead of return traditional value; it return a JSX Expression

1. What is Component use for?

- It is a JSX Expression, use to describe UI, design HTML group tag for final web
- It will be called directly, or passively by .render(component)
    .render(num)
    .render(string)
    .render(array)
    .render(JSX with html)
    .render(component)
- Give component to .render() is put JSX Expression
-> give component, put JSX into function => reuse JSX Expression more efficiency, instead of random shit

1. Syntax

```jsx
function FunctionName() {

}


<FunctionName />
```

## PROPS

basically Component arguments

## STATE

## HOOK
