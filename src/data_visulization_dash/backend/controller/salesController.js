const sales = require('../model/salesModel');

exports.getSalesData = async (req, res, next) => {
    
        const data = await sales.find();
        res.status(200).json({
            status: 'success',
            total: data.length,
            data
        });
}; 