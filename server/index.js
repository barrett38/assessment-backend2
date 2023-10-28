const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, getAurelius, getThomas, getNumerology } = require("./controller");
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/aurelius", getAurelius);
app.get("/api/thomas", getThomas);
app.get("/api/numerology/:number", getNumerology); // RESTful route for numerology

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
