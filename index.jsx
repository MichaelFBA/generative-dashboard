/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";
import { IndexPage } from './src/pages/index.jsx'

async function handler(req) {
  const { pathname } = new URL(req.url);
  console.log(pathname)
  // This is how the server works:
  // 1. A request comes in for a specific asset.
  // 2. We read the asset from the file system.
  // 3. We send the asset back to the client.

  // Check if the request is for style.css.
  if (pathname.endsWith(".css")) {
    // Read the style.css file from the file system.
    const file = await Deno.readFile(`./src${pathname}`);
    // Respond to the request with the style.css file.
    return new Response(file, {
      headers: {
        "content-type": "text/css",
      },
    });
  }

  if (pathname.endsWith(".js")) {
    // Read the style.css file from the file system.
    const file = await Deno.readFile(`./src${pathname}`);
    // Respond to the request with the style.css file.
    return new Response(file, {
      headers: {
        "content-type": "text/js",
      },
    });
  }

  const html = renderSSR(<IndexPage />);
  return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
}

console.log("Listening on http://localhost:8000");
serve(handler);