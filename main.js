studentarray=[]
function submit(){
    var display_studentarray=[]
    for(var j=1; j<=5; j++){
        var studentname = document.getElementById("student" + j).value
        console.log(studentname)
        studentarray.push(studentname)
    }
    console.log(studentarray)
    var studentarraylength=studentarray.length
    console.log(studentarraylength)
    for(var k=0; k<studentarraylength; k++){
        display_studentarray.push("<h4> name- "+ studentarray[k]+"</h4>")
        console.log(display_studentarray)
    }
    document.getElementById("displaynamewithcommas").innerHTML = display_studentarray
    var removecommas = display_studentarray.join(" ")
    console.log(removecommas)
    document.getElementById("displaynamewithoutcommas").innerHTML = removecommas

    document.getElementById("submitbutton").style.display = "none"
    document.getElementById("sortbutton").style.display = "inline-block"
    // var name1 = document.getElementById("student1").value
    // var name2 = document.getElementById("student2").value
    // var name3 = document.getElementById("student3").value
    // var name4 = document.getElementById("student4").value
    // var name5 = document.getElementById("student5").value
    // studentarray.push(name1)
    // studentarray.push(name2)
    // studentarray.push(name3)
    // studentarray.push(name4)
    // studentarray.push(name5)
    // console.log(studentarray)
    // document.getElementById("displayname").innerHTML = studentarray
    // document.getElementById("submitbutton").style.display="none"
    // document.getElementById("sortbutton").style.display="inline-block"
}

function sorting(){
    studentarray.sort()
    console.log(studentarray)
    var displaystudentarraysorting = []
    var studentarraylength=studentarray.length
    console.log(studentarraylength)
    for(var k=0; k<studentarraylength; k++){
        displaystudentarraysorting.push("<h4> name- "+ studentarray[k]+"</h4>")
        console.log(displaystudentarraysorting)
    }
    var removecommas = displaystudentarraysorting.join(" ")
    console.log(removecommas)
    document.getElementById("displaynamewithoutcommas").innerHTML = removecommas
//     document.getElementById("displayname").innerHTML = studentarray
}
function new_update(){
    document.getElementById("displaynamewithoutcommas").innerHTML = "<h1>" + studentarray + "</h1>"
}