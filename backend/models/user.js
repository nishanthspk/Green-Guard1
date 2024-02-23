const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const UserDetailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    },
    {
        collection:"UserDetail",
    }

);

mongoose.model("UserDetail", UserDetailSchema);
