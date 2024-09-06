const express=require('express')
const router=express.Router()
const connectionData=require("../Models/Connections")

router.post('/saveConnectionData',async(req,res)=>{
    const {name,gender,phone,email,country,Linkedin}=req.body;
    if(!name||!gender||!phone||!email||!Linkedin)
    {
        return res.status(400).json({error:'All fields are required'})
    }

    try{
        const newData=new connectionData({name,gender,phone,email,country,Linkedin})
        await newData.save()
        return res.status(201).json({message:"Data saved",data:newData})
    }
    catch(error){
        return res.status(500).json({error: 'Failed to save data'})
    }

})

router.get('/getConnectionData',async(req,res)=>{
    try{
        const data=await connectionData.find()
        
        res.json(data)
    }
    catch(error)
    {
        res.json({error:'failed to retive'})

    }
})

router.delete('/deleteConnection/:id',async(req,res)=>{
  try {
    const getUser=req.params.id
    const results=await connectionData.findByIdAndDelete(getUser)
    console.log(results);
    if(results)
    {
        return res.status(200).json({message:"deleted"})
    }
    else
    {
        return res.status(404).json({message:"user not found"})
    }
}
catch(error){

    return res.status(500).json({error:"user not found"})

}
})

router.put("/updateConnections/:id", async (req, res) => {
    const { id } = req.params;
    const { name,  gender, phone, email, country, Linkedin   } = req.body;
    try {
        const updatedUser = await connectionData.findByIdAndUpdate(
            id,
            { name,  gender, phone, email, country, Linkedin },
            { new: true }
        );
        console.log(updatedUser);
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ message: "User updated successfully", updatedUser });
    } catch (error) {
      res.status(500).json({ message: "Error updating user", error });
    }
  });
module.exports = router;