const fs = require("fs");

const Hollywood = JSON.parse(
    fs.readFileSync(`${__dirname}/../JsonData/Hollywood.json`,"utf-8")
);

exports.getHollywoodData = (req,res)=>{
    res.status(200).json({
        Hollywood
    });
}