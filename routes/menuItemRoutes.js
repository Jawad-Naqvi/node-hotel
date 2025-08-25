const express = require('express');
const router = express.Router();
 const MenuItem = require('../models/menuItem')

 

router.post('/',async (req, res)=>{

    try{
        const data = req.body
        const newMenu = new MenuItem(data);
        
        const response = await newMenu.save();

        console.log('person data saved');
        res.status(200).json(response);
        
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'person Internal Server Error'});
    }

})

router.get('/', async (req, res)=> {
    try{
        const data = await MenuItem.find();
        console.log(' Menu data fetched');
        res.status(200).json(data);        

    }catch(err){
        console.log(err);
        res.status(500).json({error: ' Menu Internal Server Error'});
        
    }
})

router.get('/:taste', async (req, res)=> {
    try{
             

    }catch(err){
        
        
    }
})

module.exports = router