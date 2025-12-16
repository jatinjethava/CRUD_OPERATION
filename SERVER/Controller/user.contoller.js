const USER = require('../Model/model');

const CreateUser = async (req, res) => {
    try {
        const body = req.body;

        if (!body.name || !body.email || !body.mobile_no || !body.course || !body.fees) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newUser = new USER(body);
        const savedUser = await newUser.save();

        if (savedUser) {
            res.status(201).json({ message: "User created successfully", data: savedUser, id: savedUser._id });
        } else {
            res.status(500).json({ message: "Failed to create user" });
        }

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { CreateUser };