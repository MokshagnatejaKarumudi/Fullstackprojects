const btn=document.getElementById("changecolorbtn");
btn.addEventListener("click",()=>{
    const randomcolor=getRandomColor();
    document.body.style.backgroundColor=randomcolor;
});
function getRandomColor(){
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`
}
