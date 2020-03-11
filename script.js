//add an event listener to the add button
document.getElementById("addButton").addEventListener("click", addOneComment);
//add an event listener to the input field
document.getElementById("addInput").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addOneComment();
    
    }
})

function addOneComment() {
    if (document.getElementById("addInput").value != "" && document.getElementsByClassName('comment').length < 10) {
      //set selector in variables
      const unorderedList = document.getElementById("list");
      const listItem = document.createElement("li");
      const spanItem = document.createElement("span");
  
      //add class="comment" to the li
      listItem.classList.add("comment");
      //create a text node with the value of the input, then append it to the li
      const textNode = document.createTextNode(document.getElementById("addInput").value);
      spanItem.appendChild(textNode)
      listItem.appendChild(spanItem)
      //append the li to the ul, then clear the input field
      unorderedList.appendChild(listItem);
      document.getElementById("addInput").value = "";
      setTimeout(function(){
        listItem.style.opacity = 1 ;
    }, 300);
    }
}


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block"; // CHANGE THERE TO FIX
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

