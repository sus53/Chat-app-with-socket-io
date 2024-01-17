import User from "../models/User.js";

export const GetUser = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const RegisterUser = async (req, res) => {
    const password = req.body.password;
    try {
        const salt = await bcrypt.genSalt(5);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ username: req.body.username, password: hashedPassword });

        await user.save();
        res.status(201).json({ username: req.body.username });

    } catch (error) {
        res.status(402).json({ message: error.message });
    }
}

export const LoginUser = async (req, res) => {
    try {
        const user = await User.findone({ username: req.body.username });
        !user && res.status(400).json("Wrong username or password");

        const password = await bcrypt.compare(req.body.password, user.password);
        !password && res.status(400).json("Wrong username or password");

        res.status(200).json(req.body.username);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}