require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const app = express();

//connectDB
connectDB();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

const __dirname = path.resolve();
 app.use('/upload', express.static(path.join(__dirname, '/upload')));

app.get('/',(req,res) =>{
    res.send('Server is running');
});


if(process.env.NODE_ENV =='production'){
    app.use(express.static(path.join(__dirname, '/client/build')))
}

//Error Handler (should be last piece of middleware)

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
// process.on("unhandledRejection",(err, promise) =>{
//     console.log(`Logged Error: ${err}`);
//     server.close(() => process.exit(1));
// })
