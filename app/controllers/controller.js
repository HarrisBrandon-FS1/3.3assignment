const Authors = require("../models/Authors");

const getAllAuthors = async (req, res) => {
    console.log(">>>", req.query);
    const authors = await Authors.find({});
    res.status(200).json({
        data: authors,
        success: true,
        message: `${req.method} - request to Author endpoint`,
    });
};

const getAuthorById = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        id,
        success: true,
        message: `${req.method} - request to Author endpoint`,
    });
};

