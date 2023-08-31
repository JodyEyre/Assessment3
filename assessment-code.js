// part one original code
function countReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return{
            value: state.value +1
        }
    }
    return state
}
// function countReducer takes in two parametres - state (current) and action (what has happened/happening)
// if the action is an increment then return a new object with value = state.value + 1  
// a new state object is created where value has an increment of 1 

function countReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            value: state.value + 1
        };
    } else if (action.type === 'decrement') {
        // Decrease the value by 1
        return {
            value: state.value - 1
        };
    } else if (action.type === 'reset') {
        // Reset the state to its initial value
        return initialState;
    }
    return state;
}

// part two

const classInso = () => {
    let [studentsCount, setStudentsCount] = useState(0);

    return(
        <div>
            <p>Number of students in class room {studentsCount}</p>
            <button onClick={?????} >Add Student</button>
        </div>
    )
}
// line 34 uses 'use state' which manages the local state within the functional component of 'classInso'
// studentscount is a variable which shows the current state value currently holding 0
// setStudentsCount is a function which is used to update the studentsCount which will update the value to a new value
// line 39 shows a button element - the onClick attribute determines what will happen when the button is clicked. A javascript function 
// will be executed when the button is clicked - to add a student as the button says setStudentsCount would be called to update the studentsCount state
// which would increment the student number by one

const students = [
    {name: "Nrupul", present: false},
    {name:"Prateek", present: true},
    {name:"Jane", present: true},
    {name:"Paul", present: false}
    {name:"Luke", present: true}
]

// a) When the onClick detected that the Add Student button is clicked 
// a variable would be initialised which would be 'numberPresent' to 0
// the array would then be iterated through and for each student object it would
// check if the student is present based on the present property - if true or false
// if the student is present it would increment the 'numberPresent' by 1 
// the state of studentsCount would then be updated with the value or number of 'numberPresent'

// b) the function would be triggered by the onClick handler which is part of the Add student button
// I would then add a function which would addStudent and this would follow the logic for above?
// <button onClick={() => setStudentsCount(studentsCount + 1)}>Add Student</button>


// c) To update the state with the result of the function I would use the setStudentsCount function 

const addStudent = () => {
    // setting the numberPresent to 0
    let numberPresentCount = 0;
    // iterate through the array to check students present and increment
    students.forEach(student => {
        if(student.present) {
            numberPresentCount++;
        }
    });
    // update state with the count of present students from attendence check
    setStudentsCount(numberPresentCount);
};

// part three

const initialState = {value: 0}
function countReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            value: state.value + action.payload
        }
    }
    return state
}

// 1) Line 174 shows a Redux reducer which handles an action of an increment 
// action.type==='increment' will check to see if the action is an increment and then updates the state by
// looking at state.value and adding the value of action.payload to state
//2) firstly I would need to set up Redux to manage the state and handle the increment action - I would need to make sure
// that i defined a redux store, action creator and a reducer

// the action creator would need to create the increment action and include the student count as payload - this would be in a seperate file 

export const incrementWithStudentCount = (studentCount) => {
    return {
        type: 'increment',
        payload: studentCount
    };
};

// the useSelector hook would then take the current state from the redux store and use the useDispatch hook to get the dispatch function - this would need to be
// imported at the top of the file to include the action creator above

// this would calculate the number of students present using the numberPresentCount and then get the studentsCount from the redux store
const numberPresentCount = students.filter(student => student.present).length;
const studentsCount = useSelector((state) => state.value);

// Get the dispatch function and add a student by releasing the action then release the increment action with the studentCount as the payload variable
const dispatch = useDispatch();
const addStudent = () => {
    dispatch(incrementWithStudentCount(numberPresentCount));
};

return (
    <div>
        <p>Number of students in class room: {studentsCount}</p>
        <button onClick={addStudent}>Add Student</button>
    </div>
);
};

// 3 I think that the Figure 4 is better because it accumulates the count of present students by doing multiple actions which makes sure that the 
// value of the students updates with the relevant and appropriate action. When using count actions this is good practice to increment over multiple actions to allow
//a running total.
// whereas the code shown in figure 5 doesn't accumulate the count it replaces the value of state with the 
// value of the payload. When counting it is important to use multiple increments because then you have an actual total and you also have continous tracking over time
// if you wanted to look back at the historical data you could to analyse trends.

// Algorithms 1 (coding) 15 marks

function palindromeChecker(input)
// define a start and an end of the string
 {
    let start = 0;
    let end = input.length - 1;
    // check characters from the start and end until they meet in middle if the characters in the positions don't match - not a palindrome
    while (start < end) {
        if (input[start] !== input[end]) {
            return false;
        }
        start++;
        end--;
    }
    // if checked all characters and they match it is true
    return true;
}

console.log(palindromeChecker("radar"));  
console.log(palindromeChecker("level"));   
console.log(palindromeChecker("Pencil"));  
console.log(palindromeChecker("A"));

// Big 0 time - in the while loop the string is iterated through from both ends towards the middle - the number of iterations is proportional to the 
// size of half the length of the string therefore the complexity is O(n) where n is the length of the string. 
// the space complexity is determined by the amount of memory used by the algorithm - stores are in variables like start,end and input.length so memory stays same
// the space complexity I think would be 0(1) with a constant usage of space - this shows that the algorithm is pretty efficient - it could be improved by checking
//for invalid numbers or characters

// Algorithms 2 (coding) (20 marks)
// write a fuunction that takes in an unsorted array of any size
// in the input array a number is missing and the function should return the missing number 
// if negative number or non numberic then return an error

function whereIsTheMissingNo(arr) {
    // calculate the expected sum of the numbers from 1 to n where n is the length of the array +1
    let n = str.length + 1;
    let sumOfArray = (n * (n + 1)) / 2;
    let sum = 0;
    // iterate through the elements in the array str
    for (let i = 0; i < str.length; i++) {
        // check if not positive no
        if (typeof str[i] !== 'number' || str[i] <= 0) {
            return "This is not a valid value";
        }
        // calculate the number of elements in str
        sum += str[i];
    }
// calculate the missin no by subtracting from the sum of str from the expected sum
    let missingNo = sumOfArray - sum;
    // missing number check
    if (missingNo === 0) {
        return "There are no missing numbers present";
    } else {
        return `The missing number is ${missingNo}`;
    }
}

console.log(whereIsTheMissingNo([4, 5, 1, 3, 5])); 

// the function is pretty efficient for finding missing numbers in an array which uses a mathmatical formula which is a constant time function operation //
// the loop also iterates through the elements which is efficient 
// the big 0 is 0(n) where n is the length of str - the iteration of the elements are constant time operations 
// in terms of the big 0 space complexity the complexity would be 0(1) which is a constant use of space as the memory variables don't get bigger


