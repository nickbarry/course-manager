// Sometimes there just isn't time on a coding challenge to wire up a DB! I'm comfortable with SQL and NoSQL DBs, and
// I'm happy to talk about them with you. For now, I'm just maintaining dummy data here on the server for the sake
// of making the app look real.

const courses = [
  {
    title: 'Number Theory',
    id: 1,
  },
  {
    title: 'Advanced Javascript',
    id: 2,
  },
  {
    title: 'Calligraphy',
    id: 3,
  },
  {
    title: 'Behavioral Economics',
    id: 4,
  },
  {
    title: 'Startups and Entrepreneurialism',
    id: 5,
  },
  {
    title: 'Algorithms and Data Structures',
    id: 6,
  },
];

const students = [
  {
    id: 1,
    name: 'Hannah Abbott' },
  {
    id: 2,
    name: 'Baba Yaga' },
  {
    id: 3,
    name: 'Bellatrix Black' },
  {
    id: 4,
    name: 'Susan Bones' },
  {
    id: 5,
    name: 'Lavender Brown' },
  {
    id: 6,
    name: 'Crystal Camblebunker' },
  {
    id: 7,
    name: 'The Centaur' },
  {
    id: 8,
    name: 'Tracey Davis' },
  {
    id: 9,
    name: 'Albus Dumbledore' },
  {
    id: 10,
    name: 'Dudley Dursley' },
  {
    id: 11,
    name: 'Vernon Dursley' },
  {
    id: 12,
    name: 'Petunia Evans-Verres' },
  {
    id: 13,
    name: 'Fawkes' },
  {
    id: 14,
    name: 'Arabella Figg' },
  {
    id: 15,
    name: 'Perenelle Flamel' },
  {
    id: 16,
    name: 'Filius Flitwick' },
  {
    id: 17,
    name: 'Hermione Granger' },
  {
    id: 18,
    name: 'Daphne Greengrass' },
  {
    id: 19,
    name: 'Lesath Lestrange' },
  {
    id: 20,
    name: 'Neville Longbottom' },
  {
    id: 21,
    name: 'Draco Malfoy' },
  {
    id: 22,
    name: 'Lucius Malfoy' },
  {
    id: 23,
    name: 'Narcissa Malfoy' },
  {
    id: 24,
    name: 'Minerva McGonagall' },
  {
    id: 25,
    name: 'David Monroe' },
  {
    id: 26,
    name: 'Padma Patil' },
  {
    id: 27,
    name: 'Parvati Patil' },
  {
    id: 28,
    name: 'Harry Potter' },
  {
    id: 29,
    name: 'James Potter' },
  {
    id: 30,
    name: 'Lily Potter' },
  {
    id: 31,
    name: 'Quirinus Quirrell' },
  {
    id: 32,
    name: 'Tom Riddle' },
  {
    id: 33,
    name: 'Rita Skeeter' },
  {
    id: 34,
    name: 'Severus Snape' },
  {
    id: 35,
    name: 'Pomona Sprout' },
  {
    id: 36,
    name: 'Sybill Trelawney' },
  {
    id: 37,
    name: 'Michael Verres-Evans' },
  {
    id: 38,
    name: 'Fred and George Weasley' },
  {
    id: 39,
    name: 'Ron Weasley' },
  {
    id: 40,
    name: 'Blaise Zabini' },
];

// Randomly assign some students to some courses
const courses_students = [];
let id = 1;
const randIntOneThroughN = (n) => Math.floor(Math.random() * n) + 1;
students.forEach(student => {
  const numberOfCourses = randIntOneThroughN(4); // number of courses they'll be part of
  const coursesUsed = {};
  for (let i = 0; i < numberOfCourses; i++) {
    const courseId = randIntOneThroughN(6);
    if (!coursesUsed[courseId]) { // Don't record the same course/student intersection twice
      coursesUsed[courseId] = true;
      courses_students.push({
        id: id++,
        course_id: courseId,
        student_id: student.id,
      });
    }
  }
});

module.exports = { courses, students, courses_students };
