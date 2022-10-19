import server from "./server";
import path from "./core/routes/path";
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`[server]: Server is running at PORT:${PORT}`);
  console.log(
    `[server]: See swagger in -->>>  http://localhost:${PORT}${path.swagger} <<<--`
  );
});
