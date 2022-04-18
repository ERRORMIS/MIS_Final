require('dotenv').config({path:"./config.env"});
const express = require('express');
const connectDB= require('./config/db');
const errorHandler =require('./middleware/error');
//ConnectDB
connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth',require('./routes/auth'));
app.use('/api/private',require('./routes/private'));

const __dirname = path.resolve();
app.use("/upload", express.static(path.join(__dirname, "/upload")));



if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "frontend" , "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}

//Error handler (Should be last plase of middleware )
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server =app.listen(PORT , () =>console.log(`Server running on port ${PORT}`));

process.on("unhandledRejection",(err,promise) =>{
    console.log(`Logged Error: ${err}`)
    server.close(()=> process.exit(1))
})