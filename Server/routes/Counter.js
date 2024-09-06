const express = require('express');
const router = express.Router();
const ClientData = require('../Models/ClientData');
const EmployeeData = require('../Models/Data');
const ConnectionsData = require('../Models/Connections');

// Route to count total documents in each collection
router.get('/countDocuments', async (req, res) => {
  try {
    const clientCount = await ClientData.countDocuments(); // Count documents in ClientData collection
    const connectionsCount = await ConnectionsData.countDocuments(); // Count documents in ConnectionsData collection
    const employeeCount = await EmployeeData.countDocuments(); // Count documents in EmployeeData collection

    res.json({
      totalClients: clientCount,
      totalConnections: connectionsCount,
      totalEmployees: employeeCount,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to count documents' });
  }
});

module.exports = router;
