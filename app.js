var ChemMarks = document.querySelector('#chem-marks');
var EngMarks = document.querySelector('#eng-marks');
var ComMarks = document.querySelector('#com-marks');
var SSTMarks = document.querySelector('#sst-marks');
var SciMarks = document.querySelector('#sci-marks');
var IslMarks = document.querySelector('#isl-marks');
var UrduMarks = document.querySelector('#urdu-marks');
var SindhiMarks = document.querySelector('#sin-marks');
var studenTotal = document.querySelector('#total-marks');
var percentage = document.querySelector('#percentage');
var grade = document.querySelector('#grad');


function calculatePercentage(){
    console.log(ChemMarks.value);
    console.log(EngMarks.value);
    console.log(ComMarks.value);
    console.log(SSTMarks.value);
    console.log(SciMarks.value);
    console.log(IslMarks.value);
    console.log(UrduMarks.value);
    console.log(SindhiMarks.value);
    
    var totalMarks = 800;
    var obtainedMarks = +ChemMarks.value + +EngMarks.value + +ComMarks.value + +SSTMarks.value + +SciMarks.value + +IslMarks.value + +UrduMarks.value + +SindhiMarks.value;
    console.log('obtained marks ===>', obtainedMarks);
    studenTotal.innerHTML = obtainedMarks;
    var studentPercentage = obtainedMarks / totalMarks * 100;
    percentage.innerHTML = studentPercentage;
    var grade = document.getElementById('grade')

    
    if(studentPercentage >= 85) {
        grade.innerHTML = 'A+';
    }else if(studentPercentage >= 70) {
        grade.innerHTML = 'A';
    }else if(studentPercentage >= 60) {
        grade.innerHTML = 'B';
    }else if(studentPercentage >= 50) {
        grade.innerHTML = 'C';
    }else if(studentPercentage >= 40) {
        grade.innerHTML = 'D';
    }else{
        grade.innerHTML = 'FAIL';
    }

}
