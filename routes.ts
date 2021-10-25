import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import db from "./mongodb.ts";

const codesCollection = db.collection("codes");

const getCodes = async (ctx: RouterContext) => {
  const codes = await codesCollection.find();
  ctx.response.body = codes;
};

export { getCodes };
