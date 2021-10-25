import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { getCodes } from "./routes.ts";

const router = new Router();

router
  .get("/", (ctx) => (ctx.response.body = "Welcome to Sherrify API"))
  .get("/codes", getCodes);
// .get("/codes/:codeId", getCode)
// .post("/codes", createCode)
// .put("/codes/:codeId", updateCode)
// .delete("/codes/:codeId", deleteCode);

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 5000 });
console.log("Server is up and running ✨");
