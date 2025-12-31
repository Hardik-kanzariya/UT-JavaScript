console.log("11-marks-average-grade!");

// 1.
// const MarksArray = [85, 78, 92, 88, 76];

// function calculateAverageAndGrade(CurrentMarks) {
//     let totalMarks = 0;
//     let averageMarks = 0;
//     let grade = '';

// for(let mark of CurrentMarks){
//     totalMarks += mark;
// }
// // console.log(totalMarks);
// averageMarks  = (totalMarks / CurrentMarks.length);
// console.log(averageMarks);

//  if(averageMarks < 70) return grade = 'D'; 
//   if(averageMarks < 80) return grade = 'C';
//   if(averageMarks < 90) return grade = 'B';
//   if(averageMarks <= 100) return grade = 'A';

// };

// console.log('Grade:', calculateAverageAndGrade(MarksArray));

// 2.
const MarksArray = [55, 85, 55, 65];

function calculateAverage(CurrentMarks){
    let total = 0;
    for (const mark of CurrentMarks) {
        total += mark;
    }
    // console.log(total);
    return average = (total / CurrentMarks.length);
}
// console.log(calculateAverage(MarksArray));

function calculateGrade(CurrentMarks) {
    const average = calculateAverage(CurrentMarks);
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
};

console.log('Grade:', calculateGrade(MarksArray));

// Output: Grade: D