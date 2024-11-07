const express = require('express');
const router = express.Router();
const helpRequestController = require('../Controllers/helpRequestController.js');

// Get all help requests
router.get('/', helpRequestController.getHelpRequests);

// Get a specific help request by ID
router.get('/:id', helpRequestController.getHelpRequestById);

// Create a new help request
router.post('/', helpRequestController.createHelpRequest);

// Update help request details
router.put('/:id', helpRequestController.updateHelpRequest);

// Delete a help request
router.delete('/:id', helpRequestController.deleteHelpRequest);

// Volunteer for a help request
//router.post('/:id/volunteer', helpRequestController.);

module.exports = router;