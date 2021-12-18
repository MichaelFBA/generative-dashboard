/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { h } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

export function IndexPage() {
  return (
    <html>
      <head>
        <title>Generative Dashboard</title>
        <link rel="stylesheet" href="src/styles/index.css"/>
      </head>
      <body>
        <section id="imgGrid"></section>
        <script src="src/scripts/index.js"></script>
      </body>
    </html>
  );
}