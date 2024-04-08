const asyncHandler = require('express-async-handler');
const Appointment = require('../models/appointmentModel');



const createAppointment = asyncHandler(async (req, res) => {

    const {doctor, patient, appointment_date, appointment_time, status, notes} = req.body

    if(!doctor || !patient || !appointment_date || !appointment_time){
        res.status(400)
        throw new Error('Incomplete Appointment Details')
    }



    const appointment = await Appointment.create({
        doctor, patient, appointment_date, appointment_time, status, notes
    })

    if(appointment){
        res.status(201).json({
            _id:appointment.id,
            patient:appointment.patient,
            doctor:appointment.doctor,
            appointment_date:appointment.appointment_date,
            roleappointment_time: appointment.appointment_time,
            status: "Confirmed",
            notes : appointment.notes
        })
    }else{
        res.status(400)
        throw new Error('Invalid Appointment')
    }

})

const getAppointmentsByDoctorAndDate = asyncHandler(async (req, res) => {
    const {sDate, Doctor } = req.params; // Access parameters from req.params
  
    if (!sDate || !Doctor) {
      return res.status(400).json({ message: 'Missing required parameters: selectedDate or selectedDoctor' });
    }
  
    try {

      const appointments = await Appointment.find({
        doctor: Doctor,
        appointment_date: { 
          $gte: new Date(sDate), 
          $lt: new Date(sDate).setHours(23, 59, 59, 999) 
        }
      });
  
      res.json(appointments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching appointments' });
    }
  });

module.exports = {
    createAppointment,
    getAppointmentsByDoctorAndDate
};