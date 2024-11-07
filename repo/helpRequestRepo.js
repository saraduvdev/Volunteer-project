const HelpRequest = require('./Models/HelpRequest.Model');

async function getAllHelpRequests() {
    return await HelpRequest.find();
}

async function getHelpRequestById(id) {
    return await HelpRequest.findById(id);
}

async function createHelpRequest(data) {
    const newHelpRequest = new HelpRequest(data);
    return await newHelpRequest.save();
}

async function updateHelpRequest(id, newData) {
    return await HelpRequest.findByIdAndUpdate(id, newData, { new: true });
}

async function deleteHelpRequest(id) {
    return await HelpRequest.findByIdAndDelete(id);
}

async function volunteerForHelpRequest(req, res) {
    try {
        const helpRequest = await findHelpRequestById(req.params.id);
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
}

async function findHelpRequestById(id) {
    return await HelpRequest.findById(id);
}
module.exports = {
    volunteerForHelpRequest,
    deleteHelpRequest,
    updateHelpRequest,
    createHelpRequest,
    getHelpRequestById,   
};