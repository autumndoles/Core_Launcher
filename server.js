const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

// Serve the Core Games Launcher files
app.use(express.static(__dirname));

// Start the server
app.listen(PORT, "0.0.0.0", () => {
console.log(`Core Games Launcher running on port ${PORT}`);
});
