# Simple REST API Wrapper for node:os written in Typescript and Express

# Quickstart
```
yarn
```
```
yarn dev
```

# Examples

```
GET http://localhost:3123/api/monos/arch

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 17
ETag: W/"11-ju13Y3Rvevs4ojHupV/ZJVL7Mws"
Date: Wed, 10 Aug 2022 07:18:17 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{
  "message": "x64"
}
```

```
GET http://localhost:3123/api/monos/version

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 17
ETag: W/"11-m0m1qsHbM3uK/RgKyGLJiorMBlY"
Date: Wed, 10 Aug 2022 07:13:44 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{
  "message": 11730
}
```
