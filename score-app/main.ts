import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/json", (c) => {
  return c.json({ teste: "meu teste" });
});

Deno.serve(app.fetch);
