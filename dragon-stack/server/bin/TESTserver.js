/// see bin/www for proper (alt) codebase organization

const app = require("../app/index.js");

const PORT = 5000;

app.listen(PORT, () =>
  console.log(
    "\x1b[33m\x1b[40m",
    "TEST SERVER ONLIN on PORT:" + PORT,
    "\x1b[0m"
  )
);
