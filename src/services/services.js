
    var start = 0;
    var page = 5;
    createTable(start);
    
    function getPrevious() {
        start = start - page;
        if(start < 1)
            start = 0;
        createTable(start);
    }
    
    function getNext() {
        if(document.getElementById('course-list-table') && document.getElementById('course-list-table').rows.length - 1 === page)
            start = start + page;
        createTable(start);
    }
    function selectChange() {
        var id = getId();
        document.getElementById('selectedID').innerHTML = id;
        document.getElementById('updateID').value = id;
        document.getElementById('deleteID').value = id;
    }
    
    function getId() {
        var courses = document.getElementsByName('selectedRow');
        var i = courses.length;
        while(i--) {
            if(courses[i].checked)
                return courses[i].value;
        }
    }
    
    function createTable(start) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 200) {
                var myObj = JSON.parse(this.responseText);
                var tableHTML = '<tr><th></th><th width= "50px">ID</th><th width= "100px">Name</th><th width= "100px">Department</th></tr>';
                for(var i = 0; i < myObj.length; i++) {
                    var student = myObj[i];
                    tableHTML += '<tr><td><input type="radio" onchange= "selectChange()" name="selectedRow" value=' + course.id + '><td>' + course.idNumber + '</td><td>' + course.name + '</td><td>' + course.dept + '</td></tr>';
                }
                tableHTML += '</table>';
                document.getElementById('course-list-table').innerHTML = tableHTML;
            }
        };
        xhttp.open('GET', '/api/courses?page=' + start + '&per_page=' + page, true);
        xhttp.send();
    }