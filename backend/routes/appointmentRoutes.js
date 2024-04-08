const express = require('express')
const router = express.Router()
const {createAppointment, getAppointmentsByDoctorAndDate} = require('../controllers/appointmentController')
const {protect} = require('../middleware/authMiddleware')


router.post('/create', createAppointment)
router.get('/:Doctor/:sDate', getAppointmentsByDoctorAndDate);

module.exports = router