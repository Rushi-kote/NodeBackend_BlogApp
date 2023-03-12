const fs = require("fs");

const Food = JSON.parse(
    fs.readFileSync(`${__dirname}/../JsonData/Food.json`,"utf-8")
);

exports.getFoodData = (req,res)=>{
    res.status(200).json({
        Food
    });
}