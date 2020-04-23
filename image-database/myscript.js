// Your web app's Firebase configuration //GOOBER FILE GOES HERE
GOOBER

// Initialize Firebase, make a reference variable 
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//sets the folder "User" with no data - functionally clearing any data
function clearData(){
    database.ref("User/Images").set({});
    gotoWelcome();
}

/* reloads the content of the page, this is done by looping over all of the elements with the keys "name" & 
"content" within the folder "User" */
function reload_content(){
    var page="";
    // these two lines of javascript are key to iterating through the database
    firebase.database().ref("User/Images").on('value', function(snap){
        snap.forEach(function(childNodes) { // This loop iterates over children of User

            //childNodes.key is key of the children of userid such as (20170710)
            img = childNodes.val().image;

            //add the data into your preset html wrapper, be sure to escape special characters
            page += "<div class=\"card\">\r\n  <div class=\"container\" style=\"background: rgba(255, 255, 255, .5);\">\r\n   <img src=\"" + String(img) + "\" style=\"width: 600px; height: 500px; object-fit: scale-down;\">\r\n <\/div><\/div><\/div><\/div><br/>";
        });	//don't forget these!! 
    });
    document.getElementById("data").innerHTML = page  // sets the inner html of the element whose id is "data" with the string of html that was just made
}

//add a grouping of data to the database
function push(image){
    database.ref("User/Images").push({
        image: String(image)
    });
}


function goto(){
    //var bottom = document.getElementById('data').scrollTop = document.getElementById('data').scrollHeight;
    document.getElementById("link").scrollIntoView();
}

function  gotoWelcome(){
    //var bottom = document.getElementById('data').scrollTop = document.getElementById('data').scrollHeight;
    document.getElementById("h1").scrollIntoView();
}

//encode an image and push to database
function encode() {
    var selectedfile = document.getElementById("myinput").files;
    if (selectedfile.length > 0) {
        var imageFile = selectedfile[0];
        var fileReader = new FileReader();
        fileReader.readAsDataURL(imageFile);      //to 64bit
        fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; 
            console.log(srcData);	//look at it in the console
            push(srcData);
        }
    }
}

//load content after the page is loaded
document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(() => { 
        reload_content();
        setTimeout(() => { 
            reload_content(); 
            }, 500)
    }, 1000)
});
