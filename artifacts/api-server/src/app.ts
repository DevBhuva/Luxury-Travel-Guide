import express, { type Express } from "express";
import cors from "cors";
import { createRequire } from "module";
import type { Options as PinoHttpOptions, HttpLogger } from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

// pino-http@10 has no `exports` field in package.json (only `main`), which
// makes its default export unresolvable under TypeScript's bundler moduleResolution.
// We use createRequire for the runtime value and a type-only import for types +
// module augmentations (IncomingMessage.id, etc.). esbuild handles CJS interop at build time.
const _require = createRequire(import.meta.url);
const pinoHttp = _require("pino-http") as (opts?: PinoHttpOptions) => HttpLogger;

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
