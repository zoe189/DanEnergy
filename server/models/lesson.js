const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true }, // e.g., "data-structure" or "algorithm"
  content: { type: String, required: true },
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Challenge' }]
});

module.exports = mongoose.model('Lesson', LessonSchema);
