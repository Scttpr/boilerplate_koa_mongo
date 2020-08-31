# Boilerplate for TypeScript, KoaJS, MongoDB REST API

## Setup

Everything related to scripts is in `package.json`, you just need to copy dist config to config.json, in terminal :
```bash
cp config.dist.json config.json 
```

Edit config if whished !

## Current source tree

```bash
src
├── app.ts
├── config
│  ├── database.ts
│  └── index.ts
├── constants.ts
├── middlewares
│  ├── errorHandler.ts
│  └── throwAndLog.ts
├── models
│  ├── constants.ts
│  └── Example
│     ├── index.ts
│     ├── interface.ts
│     └── schema.ts
├── routes
│  └── index.ts
├── server.ts
└── tests
   ├── helpers
   │  ├── database.ts
   │  └── request.ts
   ├── models
   │  └── Example.test.ts
   └── routes
      └── index.test.ts

```
