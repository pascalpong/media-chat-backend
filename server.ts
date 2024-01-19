import app from "./src/app";

const PORT = process.env.PORT || 8800;

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server shut down");
  });
});
