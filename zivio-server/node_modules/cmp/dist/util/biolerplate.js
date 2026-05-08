"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gatewayBoilerplate = exports.packageBoilerplate = exports.modelBoilerplate = exports.interfaceBoilerplate = exports.routerBoilerplate = exports.appBoilerplate = void 0;
const getServiceInPascalCase = (service) => {
    const arr = service.split("-");
    const tmp = arr.map((item) => {
        const firstLetter = item[0].toUpperCase();
        const restLetter = item.slice(1);
        return firstLetter + restLetter;
    });
    return tmp.join("");
};
const appBoilerplate = (service, port) => {
    return [
        `import dotenv from "dotenv"`,
        `dotenv.config()\n`,
        `import mongoose from "mongoose"`,
        `mongoose.connect(process.env.DB!)`,
        `.then(()=>console.log("${service} - Database is running"))`,
        `.catch(()=>console.log("${service} - Failed to connect with database"))\n`,
        `import express, { Request, Response } from "express"`,
        `import ${getServiceInPascalCase(service)}Router from "./${service}.router"`,
        `import morgan from "morgan"`,
        `import cors from "cors"`,
        `const app = express()`,
        `app.listen(process.env.PORT, ()=>console.log("${service} service is running on - http://localhost:${port}/${service}"))\n`,
        `app.use(cors({`,
        `\torigin: process.env.CLIENT,`,
        `\tcredentials: true`,
        `}))`,
        `app.use(express.json())`,
        `app.use(express.urlencoded({extended: false}))\n`,
        `app.use("/${service}", ${getServiceInPascalCase(service)}Router)`
    ].join("\n");
};
exports.appBoilerplate = appBoilerplate;
const routerBoilerplate = (service) => {
    return [
        `import {Router, Request, Response} from "express"`,
        `const ${getServiceInPascalCase(service)}Router = Router()\n`,
        `${getServiceInPascalCase(service)}Router.get("/", (req: Request, res: Response)=>{`,
        `\tres.json({message: "Hello from ${service} service"})`,
        `})\n`,
        `export default ${getServiceInPascalCase(service)}Router`
    ].join("\n");
};
exports.routerBoilerplate = routerBoilerplate;
const interfaceBoilerplate = (service) => {
    const Provider = getServiceInPascalCase(service);
    return [
        `import { Document } from "mongoose"\n`,
        `export interface ${Provider}ModelInterface extends Document {\n`,
        `\t`,
        `}`
    ].join("\n");
};
exports.interfaceBoilerplate = interfaceBoilerplate;
const modelBoilerplate = (service) => {
    const Provider = getServiceInPascalCase(service);
    return [
        `import { Schema, model } from "mongoose"`,
        `import { ${Provider}ModelInterface } from "./${service}.interface"\n`,
        `const schema = new Schema<${Provider}ModelInterface>({\n`,
        `\t`,
        `}, {timestamps: true})\n`,
        `const ${Provider}Model = model<${Provider}ModelInterface>("${Provider}", schema)`,
        `export default ${Provider}Model`
    ].join("\n");
};
exports.modelBoilerplate = modelBoilerplate;
const packageBoilerplate = (service) => {
    const data = {
        "name": service,
        "version": "1.0.0",
        "main": "index.js",
        "scripts": {
            "dev": "ts-node-dev --respawn --transpile-only src/app.ts",
            "build": "tsc",
            "start": "node dist/app.js"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "description": "",
        "dependencies": {
            "cors": "^2.8.5",
            "dotenv": "^17.0.0",
            "express": "^5.1.0",
            "mongoose": "^8.16.1",
            "morgan": "^1.10.0"
        },
        "devDependencies": {
            "@types/cors": "^2.8.19",
            "@types/express": "^5.0.3",
            "@types/morgan": "^1.9.10",
            "@types/node": "^24.0.7",
            "ts-node-dev": "^2.0.0",
            "typescript": "^5.8.3"
        }
    };
    return JSON.stringify(data, null, 2);
};
exports.packageBoilerplate = packageBoilerplate;
const gatewayBoilerplate = (service, port) => {
    return [
        `\n\napp.use("/${service}", createProxyMiddleware({`,
        `\ttarget: 'http://localhost:${port}/${service}',`,
        `\tchangeOrigin: true`,
        `}))`
    ].join("\n");
};
exports.gatewayBoilerplate = gatewayBoilerplate;
