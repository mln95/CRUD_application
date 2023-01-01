if(window.location.pathname == "/"){
    const ondelete = document.querySelectorAll(".delete");
    ondelete.forEach(function(el) {
       
        el.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
  
        var request = {
            "url" : `http://localhost:3000/api/v1/task/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            fetch(request.url, {
                method: request.method,
                body: JSON.stringify(request.data),
                headers: {
                "Content-Type": "application/json"
                }
                }).then(response => {
                alert("Data Updated Successfully!");
                window.location.replace('/')
                });
        }
    });
    })
} else {
    document.getElementById('update').addEventListener('submit',function(event) {
        event.preventDefault();
        var formData = new FormData(this); // create a FormData object from the form
        var unindexed_array = Array.from(formData.entries());
        console.log(unindexed_array)
        var data = {
            task: unindexed_array[0][1],
            id: unindexed_array[1][1]
        }
    
        var request = {
            "url" : `http://localhost:3000/api/v1/task/${data.id}`,
            "method" : "PATCH",
            "data" : data
        }
    
        fetch(request.url, {
            method: request.method,
            body: JSON.stringify(request.data),
            headers: {
            "Content-Type": "application/json"
            }
            }).then(response => {
            alert("Data Updated Successfully!");
            window.location.replace('/')
            });
    })
    
}
