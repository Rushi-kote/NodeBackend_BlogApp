const fs = require("fs");

const Technology = JSON.parse(
    fs.readFileSync(`${__dirname}/../JsonData/Technology.json`,"utf-8")
);

exports.getTechnologyData = (req,res)=>{
    res.status(200).json({
        Technology
    });
}