import { app } from "./app";
import { meRoutes } from "./routes/me";
import { statsRoutes } from "./routes/stats";

app.register(meRoutes, { prefix: "/me" });
app.register(statsRoutes, { prefix: "/stats" });

export { app };
