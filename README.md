# THIS IS A SIMPLE TASK FOR LOG DIGESSION
this is a simple task i have it involves in reading the log and preparing  a nice table of status code and their count in the log
i mean the number of times the status count is present in the entire log



# JAVA SCRIPT IMPLEMENTATION

for the java script the dependencies are :
```
npm init
npm install axios cli-table3
npm install @types/axios --save-dev
```


for running the app:
```
node javaScriptImpl.js
```



# TYPE SCRIPT IMPLEMENTATION

for type script dependencies are:
```
npm init -y
npm install typescript ts-node @types/node`
```
for running the app:
```
npx ts-node typeScriptImpl.ts
```


#sample output
JSWs-MacBook-Pro-3:log_digestion shashikanth$ node javaScriptImpl.js


```
┌──────────────┬────────────┬───────┐
│   (index)    │ statusCode │ count │
├──────────────┼────────────┼───────┤
│ Server Error │    500     │  23   │
│  Not found   │    404     │  23   │
│      OK      │    200     │ 1256  │
│ Not changed  │    304     │  50   │
└──────────────┴────────────┴───────┘                    
```
