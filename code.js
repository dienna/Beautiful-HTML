const _pi = 3.141;
const _2b2tseed = -4172144997902289642;

function customTag(tagName,fn){
  document.createElement(tagName);
  //find all the tags occurrences (instances) in the document
  var tagInstances = document.getElementsByTagName(tagName);
        //for each occurrence run the associated function
        for ( var i = 0; i < tagInstances.length; i++) {
            fn(tagInstances[i]);
        }
}
 
function lol(element){
        //code for rendering the element goes here
// W.I.P tag
        }
}   
 
customTag("lol",lol);
