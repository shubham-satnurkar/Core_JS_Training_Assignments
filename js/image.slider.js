var image=document.getElementById("img");
var count=document.getElementById("count");
var img_array=["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg"];
var index=0;
function slide()
{
    image.setAttribute("src",img_array[index]);
    index++;
    if(index>=img_array.length)
    {
    index=0;
    }
    console.log(index)
    count.innerHTML = index;
}
setInterval("slide()",1000);