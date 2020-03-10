//add an event listener to the add button
document.getElementById("addButton").addEventListener("click", addOneComment);
//add an event listener to the input field
document.getElementById("addInput").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addOneComment();
    
    }
})

function addOneComment() {
    if (document.getElementById("addInput").value != "" && document.getElementsByClassName("comment").length < 6) {
      //set selector in variables
      const unorderedList = document.getElementById("list");
      const listItem = document.createElement("li");
  
      //add class="comment" to the li
      listItem.classList.add("comment");
      //create a text node with the value of the input, then append it to the li
      const textNode = document.createTextNode(document.getElementById("addInput").value);
      listItem.appendChild(textNode)
      //append the li to the ul, then clear the input field
      unorderedList.appendChild(listItem);
      document.getElementById("addInput").value = "";
      setTimeout(function(){
        listItem.style.opacity = 1 ;
    }, 300);
    }
}

