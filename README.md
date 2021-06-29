# ray-core
A utility library for ray-userland software.

# Installation
```
npm i ray-core --save
```

# Usage
If a function exists execute it:
```javascript
const core = require('core');

const myFunk = () => {
  console.log("This Function Exists!");
}

core.funcAnime(myFunk);
```

To send a JSON or string over an expressJS response object, with a latency:
```javascript
const core = require('core');
const express = require('express');
const app = express();

const json = { name: "John Doe", age: 45 };
const latency = 1000;
const callback = () => {
  console.log('This is the callback function!');
}

app.send('/node1', (req, res)=>{
  core.sendJSON(res, json, latency, callback); 
});

```

To send a File over an expressJS response object, with a latency:
```javascript
const core = require('core');
const express = require('express');
const app = express();

const json = { name: "John Doe", age: 45 };
const latency = 1000;
const callback = () => {
  console.log('This is the callback function!');
}

app.send('/node1', (req, res)=>{
  core.sendFile(res, json, latency, callback); 
});

```

Use `argAssign()` to give an argument a defaultValue if the argument is `undefined`:
```
// let name = "Jack Mouse";

let arg = argAssign(name, "John Doe");

console.log(arg);

```

# LICENSE
MIT License

Copyright (c) 2021 Ray Voice

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

