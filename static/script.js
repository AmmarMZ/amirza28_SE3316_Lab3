var url = "https://lab3-ammarmz.c9users.io:8080/api/course1";
var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send(null);
var myArray = [];

xhr.addEventListener('load',function()
{
   var arr = xhr.responseText.split(',')
   
   var counter = 0;
   
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


 
