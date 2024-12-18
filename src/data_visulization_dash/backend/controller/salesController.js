const sales = require('../model/salesModel');

exports.getSalesData = async (req, res, next) => {

    // const data = {
    //     a: {
    //         "name": "",
    //         "age": 1
    //     },
    //     b: {
    //         "name": "",
    //         "age": 2
    //     }
    // }

    try {
        const data = await sales.find();
        // console.log(salesdata);
        res.status(200).json(data);
    }
    catch (err) {
        // res.status(400).json({
        //     staus: "Error",
        //     error:err
        // });
        console.log(err);
    }              
    
    next();
}; 