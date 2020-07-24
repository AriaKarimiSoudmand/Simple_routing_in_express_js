const express = require("express");
const app = express();
const shopRoute = require("./routes/shop");
const adminRoute = require("./routes/admin");

// FILTER url by putting "/admin" down here ... check routes/admin.js
app.use('/admin',adminRoute);
app.use(shopRoute);
app.use((req, res, noxt)=>{
    res.status(404).send("<h1>Page not found!</h1> <title>404</title>")
})

app.listen(3000);
