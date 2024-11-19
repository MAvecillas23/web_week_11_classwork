import {defineStore} from 'pinia'
import { ref, computed} from 'vue'

// student store holds studentList data and add new student and delete student functions
// data that the store is going to use
export const useStudentStore = defineStore('students', () => {

    const studentList = ref([
        {name: 'A. Student', starID: 'aa1234aa', present: false},
        {name: 'B. Student', starID: 'bb1234bb', present: false}
    ])
    const mostRecentStudent = ref({}) // empty object

    // add new student to studentList
    function addNewStudent(student) {
        studentList.value.push(student)
    }
    // delete student from studentList
    function deleteStudent(studentToDelete) {
        // look through studentList and keep all students that are not studentToDelete
        studentList.value = studentList.value.filter( (student) => {
            return studentToDelete !== student
        })
        mostRecentStudent.value = '' // reset most recent message
    }

    function arrivedOrLeft(student) {
        mostRecentStudent.value = student
    }

    // computed property that returns the number of students in studentList
    const studentCount = computed( () => {
        return studentList.value.length
    })
    // computed property that sorts studentList
    const sortedStudents = computed( () => {
        return studentList.value.toSorted( (s1, s2) => {
            return s1.name.localeCompare(s2.name)
        })
    })


    return {
        // reactive data
        studentList,
        mostRecentStudent,

        //functions
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        // computed properties
        studentCount,
        sortedStudents
    }
} )