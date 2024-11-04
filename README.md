# Exercise 1 NodeJs Cao Khanh Hoang
 JS intro: Objects,  Array manipulation and Clases 

 # exercise1.js
 1.Created an object `student` with the following properties:
    - `name`: "Marie"
    - `age`: 20
    - `courses`: an empty array `[]`
2. Accessed and modify the object's values:
    - Changed the `age` property to 21.
    - Added a new property `grade` with the value "A".
3. Worked with the `courses` array of the object:
    - Added the elements "Math," "Physics," and "Chemistry" to the `courses` array using the `push` method.
    - Used the `indexOf` method to find the index of "Physics" in the `courses` array.
    - Used the `slice` method to create a new array containing the first two elements of `courses`.
4. Displayed the results:
    - Logged the complete `student` object with the modifications to the console.
    - Displayed the index of "Physics."
    - Displayed the new array created with `slice`.

# exercise2.js

1. Create a `User` class with the following properties and methods:
    - Properties:
        - `firstName`: String
        - `lastName`: String
        - `age`: Number
        - `email`: String
        - `admin`: Boolean
    - Methods:
        - `getUserInfo()`: Returns a string containing the user's full name and age in the format "Full Name: [firstName] [lastName], Age: [age]".
        - `setAge(newAge)`: Modifies the user's `age` property to the specified `newAge`.
2. Test the `User` class:
    - Create an instance of the `User` class.
    - Use the `getUserInfo()` method to display the user's full name and age.
    - Use the `setAge(newAge)` method to update the user's age, then use `getUserInfo()` again to verify the change.


