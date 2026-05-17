const express = require("express");
const itemsRouter = require("./routers/items.router");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/items", itemsRouter);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});