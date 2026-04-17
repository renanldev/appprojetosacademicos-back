const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true }
  },
  { _id: false }
);

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    discipline: { type: String, required: true, trim: true },
    professor: { type: String, required: true, trim: true },
    period: {
      type: String,
      required: true,
      enum: ['1', '2', '3', '4', '5']
    },
    technologies: [{ type: String, required: true, trim: true }],
    softSkills: [{ type: String, required: true, trim: true }],
    teamMembers: [teamMemberSchema],
    coverImage: { type: String, default: '' },
    demoVideo: { type: String, default: '' }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Project', projectSchema);