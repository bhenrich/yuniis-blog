const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.get("/rss-feed", async (req, res) => {
    try {
        const response = await axios.get("https://rss.spacehey.com/blog_user?id=1941139"); // Replace with the actual RSS feed URL
        res.send(response.data);
    } catch (error) {
        res.status(500).send("Error fetching RSS feed.");
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Proxy server is running on port ${port}`);
});
