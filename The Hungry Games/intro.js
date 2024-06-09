listofpeople = []


function playerenter(){
    listofpeople.push(document.getElementById("pid").value)
    console.log(listofpeople)
    rewriteol()
}

function rewriteol(){
    document.getElementById("inputed").innerHTML = ""
    for (let i = 0; i < listofpeople.length; i++) {
        document.getElementById("inputed").innerHTML = document.getElementById("inputed").innerHTML + "<li>" + listofpeople[i] + "</li>"
        console.log("dogma")
        
    }
}

function listenter(){
    listofpeople = document.getElementById("lid").value.split(",")
    console.log(listofpeople)
    rewriteol()
}

function letsroll(){
    localStorage.setItem("playerlist", listofpeople)
    window.location.href = 'main.html'
}