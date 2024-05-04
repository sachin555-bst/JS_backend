import mongoose from 'mongoose'

const medicalRecordsSchema = new mongoose.Schema({


},{timestamp:true});

export const medicalRecord = mongoose.model('MedicalRecord',medicalRecordsSchema)