const express = require('express');
const router = express.Router();

router.ws("/echo", (ws: any, req: any) => {
  console.log("connected!", ws.id);
  ws.send("hello")
  ws.on("close", function(message: any) {
    console.log("closeMessage", message)
  });
  ws.on('message', (message: string) => {
    console.log(message)
  })
})

module.exports = router;
