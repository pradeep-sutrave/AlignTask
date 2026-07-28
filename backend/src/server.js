import app from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";

const port = env.port || 8000;

const startServer = async () => {
    await connectDB();
    app.listen(port, () => {
        console.log(`Server running at port ${port}\nclick here -> http://localhost:${port}/`);
    });
};

startServer();