const express = require("express");
const notesRoutes = require("./src/routes/notes.route");

const app = express();
const PORT = 1198;

app.use(express.json());

app.use("/", notesRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Simple CRUD API is running",
    });
});

app.use((error, req, res, next) => {
    if (error.type === "entity.parse.failed") {
        return res.status(400).json({
            success: false,
            message: "Request body must contain valid JSON.",
        });
    }

    next(error);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
