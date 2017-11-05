var url = "https://lab3-ammarmz.c9users.io:8080/api/course1";
var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send(null);
var myArray = [];

xhr.addEventListener('load',function()
{
   var arr = xhr.responseText.split(',')
   
   
   
   for (var i in arr)
   {
        if ((i - 2)%4 == 0)
        {
            
            myArray.push((arr[i].substr(8)));
        }
   }
    myArray.reverse();
    
    for (var i in myArray)
    {
           var ul = document.getElementById("course1List");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(myArray[i]));
            ul.appendChild(li);  
            if(i == 19)
            {
                break;
            }
    }
});

var url2 = "https://lab3-ammarmz.c9users.io:8080/api/course2";
var xhr2 = new XMLHttpRequest();
xhr2.open("GET", url2);
xhr2.send(null);
var myArray2 = [];

xhr2.addEventListener('load',function()
{
   var arr = xhr2.responseText.split(',')
   
   var counter = 0;
   
   for (var i in arr)
   {
        if ((i - 2)%4 == 0)
        {
            
            myArray2.push((arr[i].substr(8)));
        }
   }
    myArray2.reverse();
    
    for (var i in myArray2)
    {
           var ul = document.getElementById("course2List");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(myArray2[i]));
            ul.appendChild(li);  
            if(i == 19)
            {
                break;
            }
    }
});


 
