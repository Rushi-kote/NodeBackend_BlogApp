const fs = require("fs");

const Bollywood = JSON.parse(
    fs.readFileSync(`${__dirname}/../JsonData/Bollywood.json`,"utf-8")
);

exports.getHollywoodData = (req,res)=>{
    res.status(200).json({
        Bollywood
    });
}