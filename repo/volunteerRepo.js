const Volunteer = require('../models/volunteer');

async function getAllVolunteers() {
    return await Volunteer.find();
}

async function getVolunteerById(id) {
    return await Volunteer.findById(id);
}

async function createVolunteer(data) {
    const newVolunteer = new Volunteer(data);
    return await newVolunteer.save();
}

async function updateVolunteer(id, newData) {
    return await Volunteer.findByIdAndUpdate(id, newData, { new: true });
}

async function deleteVolunteer(id) {
    return await Volunteer.findByIdAndDelete(id);
}

module.exports = {
    getAllVolunteers,
    getVolunteerById,
    createVolunteer,
    updateVolunteer,
    deleteVolunteer
};

