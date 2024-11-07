// controllers/volunteersController.js

const Volunteer = require('../Models/Volunteer.Model');
        

const mongoose = require('mongoose');

// Get all volunteers
exports.getVolunteers = async (req, res) => {
    try {
        const volunteers = await Volunteer.find();
        res.json(volunteers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a specific volunteer by ID
exports.getVolunteerById = async (req, res) => {
    try {
        const volunteer = await Volunteer.findById(req.params.id);
        if (!volunteer) {
            return res.status(404).json({ message: 'Volunteer not found' });
        }
        res.json(volunteer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new volunteer
exports.createVolunteer = async (req, res) => {
    const volunteer = new Volunteer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        specialties: req.body.specialties
    });

    try {
        const newVolunteer = await volunteer.save();
        res.status(201).json(newVolunteer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update volunteer details
exports.updateVolunteer = async (req, res) => {
    try {
        const volunteer = await Volunteer.findById(req.params.id);
        if (!volunteer) {
            return res.status(404).json({ message: 'Volunteer not found' });
        }

        volunteer.firstName = req.body.firstName;
        volunteer.lastName = req.body.lastName;
        volunteer.phone = req.body.phone;
        volunteer.specialties = req.body.specialties;

        const updatedVolunteer = await volunteer.save();
        res.json(updatedVolunteer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a volunteer
exports.deleteVolunteer = async (req, res) => {
    try {
        const volunteer = await Volunteer.findById(req.params.id);
        if (!volunteer) {
            return res.status(404).json({ message: 'Volunteer not found' });
        }

        await volunteer.remove();
        res.json({ message: 'Volunteer deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
