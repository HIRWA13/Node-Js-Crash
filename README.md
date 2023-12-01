# Node Js heads up

node js is a javascript runtime not a framework or a library as some people confuse it with.

so normally, with frontend we run javascript code in the browser but with node js, we are able to run javascript outside the browser.

## what happens in the browser when we run the code there?

-> for the first time when we run javascript code inside the browser, something gets created and that thing is the `window` which is like the owner of everything that happens inside the browser including variables, functions, objects and so on.

## what happens in node js when we run the code there?

-> in node we don't have a window, instead we have what's called modules
-> by modules it means that each file like `app.js` is a module and the variables, functions, objects and so on are scoped to that module and not the global scope like in the browser.
-> each module has its own properties and functions

-> when we create a new file like `app.js` and we run it, node js will wrap the code inside that file in a function and that function will be executed right away and that function will have access to some variables like `module`, `exports`, `require`, `__dirname` and `__filename` and these variables are not available in the global scope.

```javascript
// app.js
// when we create a file and run it for node will create the below function and wrapp all the codes in it.
(function(exports, require, module, __filename, __dirname) {
    // module content goes here
});
```

## Why node js?

-   it is fast
-   it is scalable
-   it is used for real time applications
-   it is used for microservices
-   it is used for rest api
-   it is used for CRUD applications
-   it is used for single page applications