// The file includes data objects instead of getting JSON special for test application.
// It is assumed that the data will come from the server in JSON format

// Getting json from server. Here are objects

// Faculty object 

let faculties = {

    "idfaculty_cdad68c0b015": {
        title:"Faculty of testing vine",
        idcourses:['idcourse_343546','idcourse_3435436','idcourse_34354576'] // list of courses ids
    },

    "idfaculty_a7bdbf552504": {
        title:"Faculty of health",
    idcourses:['idcourse_3435646','idcourse_3431546'] // list of courses ids
    }

};
 
// Courses object 

let courses = {

    "idcourse_343546": {
        title: "Organoleptic",
        idsubjects:['idsubject_45345','idsubject_45346','idsubject_45347','idsubject_45348','idsubject_45349'],
        idstudents:[]
    },
    "idcourse_3435436": {
        title: "Course 2",
        idsubjects:[],
        idstudents:[]
    },
    "idcourse_34354576": {
        title: "Course 3",
        idsubjects:[],
        idstudents:[]
    },
    "idcourse_3435646": {
        title: "Course 4",
        idsubjects:[],
        idstudents:[]
    },
    "idcourse_3431546": {
        title: "Course 5",
        idsubjects:[],
        idstudents:[]
    }
};

// Subjects object 

    let subjects = {

    "idsubject_45345": {
        title: "Type of vines",
        idteachers:[],
        semestr:1,
        courseid:'idcourse_343546'
    },
    "idsubject_45346": {
        title: "Testing red vines",
        idteachers:[],
        semestr:1,
        courseid:'idcourse_343546'
        },
    "idsubject_45347": {
        title: "Testing white vines",
        idteachers:[],
        semestr:2,
        courseid:'idcourse_343546'
    },
    "idsubject_45348": {
        title: "Testing other types of vines",
        idteachers:[],
        semestr:2,
        courseid:'idcourse_343546'
    },
    "idsubject_45349": {
        title: "Exam",
        idteachers:[],
        semestr:3,
        courseid:'idcourse_343546'
    }
}
 
// Teachers object
let teachers = {
    "idteacher_453453": {
        surname:"Surname teacher 1",
        birthdate:"",
        regnumber:453453,
    }
}

// Students object

let students = {
    "idstudent_409663": {
        surname:"Surname student 1",
        regnumber:409663,
        marks: {
            "idsubject_45345":83 // idsubject has value of the student
        }      
    }
}

// Function which is generating id
function getRandome() {
    return (()=>([1e7]+1e3).replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15 >> c/4).toString(16)))();
}