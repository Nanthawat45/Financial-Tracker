const express = require("express");
const app = express();
const financialrouter = require("./router/financial.router")
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const corsOptions = {
    origin:"https://financial-tracker-o2l9pr0ui-nanthawat45s-projects.vercel.app/"
};

//use Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req,res) =>{
    res.send("<h1>Financial Tracker API</h1>")
});

//use router
app.use("/api/vi/financial", financialrouter);

app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
});
