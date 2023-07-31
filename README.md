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

# for prod file
```

┌─────────┬─────────────────────────┬────────────┬───────┐
│ (index) │          index          │ statusCode │ count │
├─────────┼─────────────────────────┼────────────┼───────┤
│    0    │          'OK'           │    200     │ 51340 │
│    1    │    'Partial Content'    │    206     │ 5148  │
│    2    │     'Not Modified'      │    304     │ 26521 │
│    3    │     'Unauthorized'      │    401     │   2   │
│    4    │       'Not Found'       │    404     │ 23350 │
│    5    │ 'Unprocessable Entity'  │    422     │  80   │
│    6    │ 'Internal Server Error' │    500     │  511  │
└─────────┴─────────────────────────┴────────────┴───────┘
                  
```

# for dev file

```

┌─────────┬───────────────────────────────────┬────────────┬────────┐
│ (index) │               index               │ statusCode │ count  │
├─────────┼───────────────────────────────────┼────────────┼────────┤
│    0    │               'OK'                │    200     │ 55123  │
│    1    │         'Partial Content'         │    206     │  6147  │
│    2    │          'Not Modified'           │    304     │ 104479 │
│    3    │           'Bad Request'           │    400     │  332   │
│    4    │          'Unauthorized'           │    401     │   38   │
│    5    │            'Not Found'            │    404     │ 27159  │
│    6    │ 'Requested Range Not Satisfiable' │    416     │   1    │
│    7    │      'Unprocessable Entity'       │    422     │  474   │
│    8    │      'Internal Server Error'      │    500     │  265   │
└─────────┴───────────────────────────────────┴────────────┴────────┘

```


<img width="1800" alt="image" src="https://github.com/Mshashikanth1/log_digestion/assets/57630057/ad1c3f75-b6cb-4696-9e61-72d8f1fac793">
