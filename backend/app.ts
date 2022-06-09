const express = require("express");

const app = express();
const PORT = 3000;

app.listen(PORT, (error: any) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});

app.get("/post-message", async (req: any, res: any) => {
  res.send("HELOBELO11a");
});
