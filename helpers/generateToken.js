import jwt from "jsonwebtoken";

const generateToken = (user) => {
    console.log('user --> ', user);
    const payload = {
        id: user.id,
        username: user.username,
        user_type: user.user_type
    };
    const secret = process.env.SECRET;
    const options = {
        expiresIn: "1d"
    };
    return jwt.sign(payload, secret, options);
}

export default generateToken;

// Not using this.