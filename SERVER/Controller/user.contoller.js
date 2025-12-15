const USER = require('../Model/model');

const CreateUser = async (req, res) => {
    try {
        const body = req.body;

        if (!body.name || !body.email || !body.mobile_no || !body.course || !body.fees) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newUser = new USER(body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { CreateUser };