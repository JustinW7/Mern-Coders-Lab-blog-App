import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required:true,
    },
    profilePicture:{
        type:String,
        default:'data:image/png;base64,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',
    },
    }, {timestamps: true}
);

const User = mongoose.model('User', userSchema);

export default User;