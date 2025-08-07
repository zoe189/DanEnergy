// server/controllers/lessonController.js
exports.getLessons = (req, res) => {
  const lessons = [
    { id: 1, title: 'Intro to JavaScript', difficulty: 'Beginner' },
    { id: 2, title: 'Functions in JS', difficulty: 'Beginner' },
    { id: 3, title: 'Asynchronous JS', difficulty: 'Intermediate' },
  ];
  res.json(lessons);
};
