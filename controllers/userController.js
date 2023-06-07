const { User, user_info } = require("../models")
const bcrypt = require("bcrypt");
exports.createUser = async (req, res) => {
    try {

        let { name, email, gender, password, role_id } = req.body;
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
        const userData = await User.create({
            name: name,
            email: email,
            password: hashPassword,
            gender: gender
        });
        if (!role_id) return res.status(400).json({ error: "Select user role" })


        role_id.forEach(async (e) => {

            await user_info.create({
                user_id: userData.id,
                role_id: e
            })
        })

        return res.status(201).json({
            success: true,
            message: "Data Addedd Successfully",
            data: userData
        })

    } catch (error) {
        console.log(error);
    }

}

exports.getUser = async (req, res) => {
    try {


        const data = await User.findOne(

            {
                include: ["user_role"],
                where: {
                    id: req.params.id
                }
            })

        return res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }
}