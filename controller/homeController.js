const fs = require("fs");
// const { path } = require("../app");

const Bollywood = JSON.parse(
    fs.readFileSync(`${__dirname}/../JsonData/Bollywood.json`,"utf-8")
    );
const Hollywood = JSON.parse(
    fs.readFileSync(`${__dirname}/../JsonData/Hollywood.json`,"utf-8")
    );
const Fitness = JSON.parse(
    fs.readFileSync(`${__dirname}/../JsonData/Fitness.json`,"utf-8")
    );
const Food = JSON.parse(
    fs.readFileSync(`${__dirname}/../JsonData/Food.json`,"utf-8")
    );
const Technology = JSON.parse(
    fs.readFileSync(`${__dirname}/../JsonData/Technology.json`,"utf-8")
    );
// console.log(Bollywood);
exports.getHomeData = (req,res)=>{
    res.status(200).json({
        Bollywood,Hollywood,Fitness,Food,Technology
    });
}
