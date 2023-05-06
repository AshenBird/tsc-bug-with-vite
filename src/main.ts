import { createServer as createViteServer } from "vite"
import * as Path from "node:path"
import process from "node:process"
import express from "express"
import { createServer } from "http";

const main = async ()=>{
  const app = express();
  const httpServer = createServer(app);
  const viteServer = await createViteServer({
    configFile:Path.join(process.cwd(),"vite.config.ts"),
    server:{
      middlewareMode:true
    }
  })
  app.use(viteServer.middlewares);
  httpServer.listen(3000);
}

main()
