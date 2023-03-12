const fs = require("fs");

const Fitness = JSON.parse(
    fs.readFileSync(`${__dirname}/../JsonData/Fitness.json`,"utf-8")
);

exports.getFitnessData = (req,res)=>{
    res.status(200).json({
        Fitness
    });
}