function externalalert()
{
    alert("external alert");
}
function externalalert()
{
    var name=prompt("enter internal msg");
    document.write(name);
    console.log(name);

    alert("hii"+name);
}
function externalconfirm()
{
        if(confirm("internal confirm"))
        {
            alert("yesssss");
        
        }else
        {
            alert("nooo");
        }
    }