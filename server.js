const express = require("express");
const path = require("path")
const app = express();

const PORT = process.env.PORT || 8080;

const DIST_DIR = path.join(__dirname, "./dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.static(DIST_DIR));

// important to add this line, else chunks/bundled file will give 404 error
app.use(express.static(DIST_DIR));

app.get("*", (req, res) => {
    res.sendFile(HTML_FILE);
})

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})