const { User } = require("../models")
const bcrypt = require("bcrypt")

exports.createUser = async (req, res) => {
    try {

        let { name, email, gender, password } = req.body;
        console.log(req.body, "bodyyyy");

        let findUser = await User.findOne({
            where:
                { email: email }
        });
        if (findUser) return res.status(401).json(apiError("email already exist"));

        let saltRound = 10;
        let hashPassword = await bcrypt.hash(password, saltRound);
        console.log(hashPassword);

        // if (gender !== "F" || gender !== "M") { return res.status(400).json({ error: " Select Valid gender" }) }
        const createUser = await User.create({
            name: name,
            email: email,
            password: hashPassword,
            gender: gender
        });

        

        return res.status(201).json({
            success: true,
            message: "Data Addedd Successfully",
            data: createUser
        })






    } catch (error) {
        console.log(error);
    }

}