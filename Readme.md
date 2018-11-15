## sdb-module

My first npm module. It's a simple command line app greeter. 

### Installation instructions
1- First make your folder project, then do:
```
npm init -y
touch app.js 
```
copy this code:
```
const greeter = require('sdb-module')
console.log(greeter())
```

2- Install the package (locally) 
   npm install sdb-module 

   then execute
   node app.js

   Or

   install it globally:

   npm i -g sdb-module

3- Use:

   ```
   greeter

   greeter --name= 'Daniel'
   ```

**Thank you class for your feedback!**