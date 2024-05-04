function checkClick(){
    html2canvas(document.getElementById("target")).then(canvas => {
        document.body.appendChild(canvas)
        canvas.id = "canvas"
      });
}

function changeClick(){
    firstTeamname.textContent = firstTeam.value;
    secondTeamname.textContent = secondTeam.value;
    firstGameFirstPoint.textContent = firstGameFirst.value;
    firstGameSecondPoint.textContent = firstGameSecond.value;
    secondGameFirstPoint.textContent = secondGameFirst.value;
    secondGameSecondPoint.textContent = secondGameSecond.value;

    switch(firstTeam.value){
        case "龍谷B":
            firstImageName = "RuCBC.jpg";
            break;
        case "京大C":
            firstImageName = "KUCtC.jpg";
            break;  
        case "同志社A":
            firstImageName = "Doshisha.jpg";
            break;
        case "同志社B":
            firstImageName = "Doshisha.jpg";
            break;
        case "近畿大学":
            firstImageName = "CITRUS.jpg";
            break;
        case "京阪神UN連合":
            firstImageName = "keihanshin.jpg";
            break;
        case "奈良大学":
            firstImageName = "Nara.jpg";
            break;
        default:
            break;        
    }
    switch(secondTeam.value){
        case "龍谷B":
            secondImageName = "RuCBC.jpg";
            break;
        case "京大C":
            secondImageName = "KUCtC.jpg";
            break;  
        case "同志社A":
            secondImageName = "Doshisha.jpg";
            break;
        case "同志社B":
            secondImageName = "Doshisha.jpg";
            break;
        case "近畿大学":
            secondImageName = "CITRUS.jpg";
            break;
        case "京阪神UN連合":
            secondImageName = "keihanshin.jpg";
            break;
        case "奈良大学":
            secondImageName = "Nara.jpg";
            break;
        default:
            break;        
    }
    firstImage.src = firstImageName;
    secondImage.src = secondImageName; 
}

function downloadClick(){
    var canvas = document.getElementById("canvas");
    const name = 'firstresult.png';
    const a = document.createElement('a');

    a.href = canvas.toDataURL();
    a.download = name;
    a.click();
}

var firstImage = document.getElementById("firstImage");
var firstImageName = "RuCBC.jpg";
var secondImage = document.getElementById("secondImage");
var secondImageName = "RuCBC.jpg";

firstImage.src = firstImageName;
secondImage.src = secondImageName;
  
  let firstTeam = document.getElementById('firstTeam');
  let firstTeamname = document.getElementById('firstTeamname');
  let secondTeam = document.getElementById('secondTeam');
  let secondTeamname = document.getElementById('secondTeamname');

  let firstGameFirst = document.getElementById('firstGameFirst');
  let firstGameFirstPoint = document.getElementById('firstGameFirstPoint');
  let firstGameSecond = document.getElementById('firstGameSecond');
  let firstGameSecondPoint = document.getElementById('firstGameSecondPoint');

  let secondGameFirst = document.getElementById('secondGameFirst');
  let secondGameFirstPoint = document.getElementById('secondGameFirstPoint');
  let secondGameSecond = document.getElementById('secondGameSecond');
  let secondGameSecondPoint = document.getElementById('secondGameSecondPoint');
  
  let changeButton = document.getElementById('changeButton');
  changeButton.addEventListener('click', changeClick);
  let checkButton = document.getElementById('checkButton');
  checkButton.addEventListener('click', checkClick);
  let downloadButton = document.getElementById('downloadButton');
  downloadButton.addEventListener('click', downloadClick);