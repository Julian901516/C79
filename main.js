studentarray=[]
function submit(){
    var name1 = document.getElementById("student1").value
    var name2 = document.getElementById("student2").value
    var name3 = document.getElementById("student3").value
    var name4 = document.getElementById("student4").value
    var name5 = document.getElementById("student5").value
    studentarray.push(name1)
    studentarray.push(name2)
    studentarray.push(name3)
    studentarray.push(name4)
    studentarray.push(name5)
    console.log(studentarray)
    document.getElementById("displayname").innerHTML = studentarray
    document.getElementById("submitbutton").style.display="none"
    document.getElementById("sortbutton").style.display="inline-block"
}
function sorting(){
    studentarray.sort()
    console.log(studentarray)
    document.getElementById("displayname").innerHTML = studentarray
}