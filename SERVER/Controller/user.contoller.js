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

const UserList = async (req, res) => {
    try {
        const users = await USER.find();
        res.status(200).json({ massage: "User list fetched successfully", success: true, totalcount: users.length, data: users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const DeleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await USER.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            data: deletedUser
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const UpdateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const updatedUser = await USER.findByIdAndUpdate(id, body, { new: true });

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = { CreateUser, UserList, DeleteUser, UpdateUser };