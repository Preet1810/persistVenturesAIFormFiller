import mongoose from "mongoose";

const UserSchema=new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            // min: 8,
        },
        fullname: {
            type: String,
        },
        contactNo: {
            type: Number,
        },
        role: {
            type: String
        },
        experience: {
            type: String
        },
        linkedin: {
            type: String
        },
        companies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Company' }],
    },
    { timestamps: true }
);

const User=mongoose.model("User", UserSchema);
export default User;