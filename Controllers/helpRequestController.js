// controllers/helpRequestsController.js


const HelpRequest = require('../Models/HelpRequest.Model');
const mongoose = require('mongoose');

// Get all help requests

exports.getHelpRequests = async (req, res) => {
    try {
        const filters = {};
        if (req.query.location) filters.location = req.query.location;
        if (req.query.status) filters.status = req.query.status;
        if (req.query.priority) filters.priority = req.query.priority;

        const helpRequests = await HelpRequest.find(filters);
        res.json(helpRequests);
    } catch (err) {
        res.status(500).send(err);
    }
};


// Get a specific help request by ID
exports.getHelpRequestById = async (req, res) => {
    try {
        const helpRequest = await HelpRequest.findById(req.params.id);
        if (!helpRequest) {
            return res.status(404).json({ message: 'Help request not found' });
        }
        res.json(helpRequest);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new help request
exports.createHelpRequest = async (req, res) => {
    const helpRequest = new HelpRequest({
        location: req.body.location,
        problemDescription: req.body.problemDescription,
        contactPhone: req.body.contactPhone,
        status: req.body.status,
        priorityCode: req.body.priorityCode
    });

    try {
        const newHelpRequest = await helpRequest.save();
        res.status(201).json(newHelpRequest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update help request details
exports.updateHelpRequest = async (req, res) => {
    try {
        const helpRequest = await HelpRequest.findById(req.params.id);
        if (!helpRequest) {
            return res.status(404).json({ message: 'Help request not found' });
        }

        helpRequest.location = req.body.location;
        helpRequest.problemDescription = req.body.problemDescription;
        helpRequest.contactPhone = req.body.contactPhone;
        helpRequest.status = req.body.status;
        helpRequest.priorityCode = req.body.priorityCode;

        const updatedHelpRequest = await helpRequest.save();
        res.json(updatedHelpRequest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a help request
exports.deleteHelpRequest = async (req, res) => {
    try {
        const helpRequest = await HelpRequest.findById(req.params.id);
        if (!helpRequest) {
            return res.status(404).json({ message: 'Help request not found' });
        }

        await helpRequest.remove();
        res.json({ message: 'Help request deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

exports.volunteerForHelpRequest = async (req, res) => {
    try {
        const helpRequest = await HelpRequest.findById(req.params.id);
        if (helpRequest) {
            helpRequest.status = 'in-progress';
            helpRequest.volunteerId = req.body.volunteerId;
            await helpRequest.save();
            res.json(helpRequest);
        } else {
            res.status(404).send('Help request not found');
        }
    } catch (err) {
        res.status(500).send(err);
    }
}}
;
