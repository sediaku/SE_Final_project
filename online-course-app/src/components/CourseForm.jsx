function CourseForm(){
    return (
        <div className = "container">
            <h1>Create a New Form</h1>
            <form>
                <label> Course Name: </label>
                <input type="text" placeholder = "Enter Course Name"/>

                <label> Description: </label>
                <textarea name = "description" cols ="30" rows ="10" placeholder="Description"></textarea>

                <label htmlFor = "Difficulty"> Select Difficulty: </label>
                <input type="radio" name = "Difficulty"/>Beginner 
                <input type="radio" name = "Difficulty"/>Intermediate
                <input type="radio" name = "Difficulty"/>Expert

                <label> Thumbnail: </label>
                <input type="file" placeholder="Select Image"/>

                <button type="Submit">Submit</button>
            </form>
        </div>
    )
}