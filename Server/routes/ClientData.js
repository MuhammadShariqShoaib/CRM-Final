const express = require('express');
const router = express.Router();
const ClientData = require('../Models/ClientData');

router.post('/saveClientData', async (req, res) => {
  
  const { name, field, gender, email, phone,country, Linkedin } = req.body;
  if (!name || !field || !gender) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {
    const newData = new ClientData({ name, field, gender, email, phone,country, Linkedin });
    console.log(newData);
      await newData.save();
      res.status(201).json({ message: 'Data saved successfully', data: newData });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save data' });
    }
  });

  router.get('/getClientData', async (req, res) => {
    try {
      const data = await ClientData.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve data' });
    }
  });

  router.delete('/deleteClient/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const result = await ClientData.findByIdAndDelete(userId);
  
      if (result) {
        res.status(200).json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.put("/updateClient/:id", async (req, res) => {
    const { id } = req.params;
    const { name, field, gender, phone, email, country, Linkedin } = req.body;
    try {
      const updatedUser = await ClientData.findByIdAndUpdate(
        id,
        { name, field, gender, phone, email, country, Linkedin },
        { new: true }
      );

      
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({ message: "User updated successfully", updatedUser });
    } catch (error) {
      res.status(500).json({ message: "Error updating user", error });
    }
  });
  module.exports = router;