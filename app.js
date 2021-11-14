var list = document.getElementById('list');
var text = document.getElementById('text');
function add(){
  var listchild = document.createElement('li');
  listchild.innerHTML = text.value
  listchild.addEventListener('mouseover', function () {
    clearbtn.style.display = "block"
  })
  listchild.addEventListener('mouseout', function () {
    clearbtn.style.display = "none"
  })


  list.appendChild(listchild)
  var clearbtn = document.createElement('button');

  listchild.appendChild(clearbtn)
  clearbtn.innerHTML = 'x'
  clearbtn.classList = 'clear'
  text.value = ''


  clearbtn.addEventListener('click', function () {
    list.removeChild(listchild)
  })
}
 text.addEventListener('keyup',function(event){
  if(event.keyCode===13){ 
add()
  }
 })
// input.addEventListener("keyup", function(event) {
  // if (event.keyCode === 13) {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// });