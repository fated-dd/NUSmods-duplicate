document.addEventListener("DOMContentLoaded" , function (){
    document.getElementById("nusmods-form").addEventListener(
        "submit" , (event) =>{
            event.preventDefault();

            getCourseData();
        }
    )

    function getCourseData() {
        let inputField = document.getElementById("course-code");
        let courseCode = inputField.value.toUpperCase();
        fetch(`https://api.nusmods.com/v2/2023-2024/modules/${courseCode}.json`, {})
        .then(response => response.status === 200 ? response.json() : null)
        .then(data => {
            if (data === null){
                alert("INVALID COURSE CODE!");
            } else {

                

                let courseDiv = document.getElementById("course-div");
                courseDiv.hidden = false;
                courseDiv.innerHTML = "";

                let courseTitle = document.createElement("div");
                courseTitle.setAttribute("id" , "courseTitle");
                courseTitle.innerText  = data.title;

                let courseCode = document.createElement("div");
                courseCode.innerText = data.moduleCode;
                courseCode.setAttribute("id" , "courseCode");

                let courseCredit = document.createElement("div");
                courseCredit.innerText = data.department + "•" + data.moduleCredit + "units";
                courseCredit.setAttribute("id" , "courseCredit");

                let description = document.createElement("div");
                description.innerText = data.description;
                description.setAttribute("id" , "description");

                courseDiv.appendChild(courseCode);
                courseDiv.appendChild(courseTitle);
                courseDiv.appendChild(courseCredit);
                courseDiv.appendChild(description);
                
            }
        })
    }
})