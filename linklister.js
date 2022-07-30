// --------------- LinkLister.html ------------------
const nameInput = document.getElementById("nameInput");
const linkInput = document.getElementById("linkInput");

document.getElementById("enterBTN").addEventListener("click", function(){

    const name = nameInput.value;
    const link = linkInput.value;
    
    if(name == "" || link == ""){
        alert("Must give value to two of the boxes");
    }
    else{
        const a = document.createElement("a");
        a.href = link;
        a.innerText = name;
        a.target = "_blank";
    
        const li = document.createElement("li");
        li.appendChild(a);
        document.getElementById("list").appendChild(li);

    }
});

function enterKey(event){
    const name = nameInput.value;
    const link = linkInput.value;

    if(event.key == "Enter"){
        if(name == "" || link == ""){
            alert("Must give value to two of the boxes");
        }
        else{
            event.preventDefault();
            document.getElementById("enterBTN").click();
        }
    }   
}

document.getElementById("nameInput").addEventListener("keydown", enterKey);
document.getElementById("linkInput").addEventListener("keydown", enterKey);