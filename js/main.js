// function (bold) {
//      addeventlistener("click", function(bold){
//         document.getElementById("b").style.fontweight= bold;
//     }
//   }
//   function (italic) {
//     addeventlistener("click", function(italic){
//       document.getElementById(italic).style.fontweight = italic;
//   }
// }
//   function (underline) {
//     addeventlistener("click", function(underline){
//       document.getElementById(underline).style.fontweight =underline;
//     }    
//   }

var textarea = document.getElementById("mytext");

function makeItbold() {

    if (textarea.style.fontWeight != "bold") {
        textarea.style.fontWeight = "bold";
    } else {
        textarea.style.fontWeight = "normal";

    }
}

function makeItitalic() {
    if (textarea.style.fontStyle != "italic") {
        textarea.style.fontStyle = "italic";
    } else {
        textarea.style.fontStyle = "normal";
    }
}

function makeItunderlined() {
    if (textarea.style.textDecoration != "underline") {
        textarea.style.textDecoration = "underline";
    } else {
        textarea.style.textDecoration = "none";
    }
}
function changesize() {
var userfontsize= document.getElementById("sizeselect").value;
textarea.style.fontSize =userfontsize;

}
function changefont() {
    var userfontfamily = document.getElementById("fontselect").value;
    textarea.style.fontFamily=userfontfamily;
}