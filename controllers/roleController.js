const { role } = require("../models");


exports.createRole = async (req, res) => {

    try {

        await role.bulkCreate([
            { name: "Vendor" },
            { name: "Editor" },
            { name: "Creator" }
        ])

        return res.status(201).json({ success: "Data added" })


    } catch (error) {
        console.log(error);
    }
}
