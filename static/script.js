document.getElementById('course1').addEventListener("click",post());

function post()
{
    alert("HIIIAFIDNFIDNOIDNFIDNIDN");
    var text = document.getElementById('paragraph_text1').value;

    var url = "https://lab3-ammarmz.c9users.io:8080/api/message";
        var params = "message=" + text;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);

//Send the proper header information along with the request
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.send(params.json);
        text= " ";
}