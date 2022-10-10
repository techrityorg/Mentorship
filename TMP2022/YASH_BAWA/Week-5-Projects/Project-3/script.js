function password_genrator () {
    var pass_len = 8;
    var password = "";
    var char = "123456789@#$%^&*qwertyuiopasdfghjklzxcvbnm";
    for (var i=0;i<=pass_len;i++)
    {
        var random_number = Math.floor (Math.random()*char.length);
        password += char.substring (random_number,random_number+1);

    }
    document.getElementById("data").value = password;
}

function copypass()
{
    var text = document.getElementById("data").value;
    navigator.clipboard.writeText(text).then(function() {
      console.log(text);
    });
}