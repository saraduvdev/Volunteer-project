const express = require('express');
const router = express.Router();
const volunteerController = require('../Controllers/volunteerController');


// מציאת כל המתנדבים
router.get('/', volunteerController.getVolunteers);

// מציאת מתנדב מסוים לפי ה־ID
router.get('/:id', volunteerController.getVolunteerById);

// יצירת מתנדב חדש
router.post('/', volunteerController.createVolunteer);

// עדכון פרטי מתנדב
router.put('/:id',volunteerController.updateVolunteer);

// מחיקת מתנדב
router.delete('/:id',volunteerController.deleteVolunteer);

module.exports = router;
