import { env } from "./env.js";
import { app } from "./app.js";

app.listen(
  {
    port: env.PORT,
  },
  () => app.log.info(`Server is running on http://localhost:${env.PORT}`),
);
