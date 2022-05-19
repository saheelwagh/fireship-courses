# Notes
## react - nextjs -firebase course
Goal -> build an app similar to dev.to
folder -> nextfire
### Technical overview of the app
decisons explained over the course :
- when to use ssr ?
    - when to hydrate ?
- how to fetch from firebase efficiently ?
- what is ISR of nextjs ?
- settin up custom username in a firebase app 

### next js structure
use create-next-app command

app starts at index.js

_app.js -> entry wrapper  for all other app components

use 
./components -> one comp per file
./lib -> fb config, custom hooks etc

#### next js typescript
https://nextjs.org/docs/basic-features/typescript docs

#### firebase
react-firebase-hooks lib for easier operations

keep an eye on reactfire for future use

##### creating ccustom vscode snippets
file ->pref -> selcet lang or global snippet for all lanfs-> 

- written in json
```
// in file 'Code/User/snippets/javascript.json'
{
  "For Loop": {
    "prefix": ["for", "for-const"],
    "body": ["for (const ${2:element} of ${1:array}) {", "\t$0", "}"],
    "description": "A for loop."
  }
}
```
For loop -> name
prefix -> trigger words to display snippet in IntelliSense
body -> expanded and inserted
descr -> optional info 

