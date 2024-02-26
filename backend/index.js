const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const db = process.env.MONGO;
const app = express();


const corsOptions = {
  origin: ["http://localhost:5173", "https://green-guard.vercel.app"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // enable set cookie
  optionsSuccessStatus: 204,
};

// Allow requests from the specified frontend origin
app.use(cors(corsOptions));
app.use(cors());
const dbURI = db;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Parse incoming JSON data
app.use(express.json());
const authRoutes = require("./routes/auth");
app.use('/auth', authRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.get("/", (req, res) => {
  res.json({ message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄" });
});