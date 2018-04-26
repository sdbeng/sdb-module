## sdb-module

My first npm module. It's a simple command line app greeter. 

### Installation instructions
1- First make your folder project, then do:
```
npm init -y
touch app.js 
```
and copy this code,
```
const greeter = require('sdb-module')
console.log(greeter())
```

2- Then, you can install the package (locally) 
   npm install sdb-module 

   then execute
   node app.js

   Or

   install it globally:

   npm i -g sdb-module

3- Then do:

   ```
   greeter

   greeter --name= 'Daniel'
   ```

**Thank you class for your feedback!**