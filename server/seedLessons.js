const mongoose = require('mongoose');
const Lesson = require('./models/Lesson');

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const lesson = new Lesson({
  title: "Stack",
  type: "data-structure",
  content: "Explanation, examples, and diagrams",
  exercises: [] // add challenge IDs later
});

lesson.save()
  .then(() => {
    console.log("Lesson saved!");
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
