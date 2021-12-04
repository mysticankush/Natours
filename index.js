var total_buttons=document.querySelectorAll(".nature").length;
for(var i=0;i<total_buttons;i++)
{
  document.querySelectorAll(".nature")[i].addEventListener("click",function(){
    var buttonClicked=this.getAttribute("id");
     makesound(buttonClicked);
  })
}
function makesound(key)
{
  switch (key)
  {
    case 'rain':
    var tom1=new Audio("visual_media/rain-thunderstorm.WAV");
    tom1.play();
        break;
    case 'birds':
        var tom2=new Audio("visual_media/birds-in-jungle.WAV");
        tom2.play();
        break;
    case 'river':
        var tom3=new Audio("visual_media/river-surrounding-jungle.WAV");
        tom3.play();
        break;
    case 'tree':
        var tom4=new Audio("visual_media/tree-breeze.WAV");
        tom4.play();
        break;
    default :Alert("You clicked an invalid number that is : " + buttonClicked);
  }
}