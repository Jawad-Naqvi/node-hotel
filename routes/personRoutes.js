const express = require('express');
const router = express.Router();
const Person = require('./../models/person');


router.post('/', async (req, res) => {

    try {
        const data = req.body
        const newPerson = new Person(data);
        // newPerson.name = data.name;
        // newPerson.age = data.age;
        // newPerson.mobile = data.mobile;
        // newPerson.email = data.email;
        // newPerson.salary = data.salary;

        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

})


//GET method to get the person 
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
            const response = await Person.find({ work: workType });
            console.log('workType response fetched');
            res.status(200).json(response);

        } else {
            res.status(404).json({ error: 'Invalid work type' })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'workType Internal Server Error' })
    }
})

router.put('/:id', async(req,res)=>{
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true,
        })
        if(!response){
            return res.status(404).json({error: 'Person not found'})
        }
        console.log('id data updated');
        res.status(200).json(response);
        
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

router.delete('/:id', async (req, res) =>{
    try{
        const personId = req.params.id;
        // const updateDelteId = req.body;

        const response = await Person.findByIdAndDelete(personId)
        if(!response){
            return res.status(404).json({error: 'person not found to delete'})
        }
        console.log('id data deleted');
        res.status(200).json({message: 'person Deleted successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error in delete'})
        
    }
})

module.exports = router;