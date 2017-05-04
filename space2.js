var minionPositionX = [];
var minionPositionY = [];
var enemyXPosition = [800];
var enemyYPosition = [200];
var avatarPositionX = 200;
var avatarPositionY = 200;
var avatarWidth = 70;
var avatarHeight = 100;
var deathBallWidth = 300;
var deathBallHeight = 300;
var enemyWidth = 100;
var enemyHeight = 150;
var senzuBeanWidth = 100;
var senzuBeanHeight = 100;
var ginyuPositionX = avatarPositionX + 500;
var ginyuPositionY = avatarPositionY - 1000;
var ginyuWidth = 80;
var ginyuHeight = 130;
var kiPosition = []
var blastPositionsX = [];
var blastPositionsY = [];
var deathBallPositionX = [];
var deathBallPositionY = [];
var senzuBeanPositionX = [];
var senzuBeanPositionY = [];
var friezaHeadPositionX = 400
var friezaHeadPositionY = 200
var friezaHeadWidth = 40;
var friezaHeadHeight = 40;
var transform = 0;
var ssjTransformWidth = 200;
var ssjTransformHeight = 250;
var ssjTransformOffsetX = 55;
var ssjTransformOffsetY = 135;
var saiyanOffsetWidth = 0;
var ssjWidthOffset = 0;
var ssjHeightOffset = 0;
var vegetaMove = 50
var ssjVegetaMove = 100
var hpBarOffset = .5



var minionImage = new Image();
var enemyImage = new Image();
var avatarImage = new Image();
var kiBlastImage = new Image();
var kiBlastFlicker1 = new Image();
var kiBlastFlicker2 = new Image();
var avatarImageDamaged = new Image();
var avatarImageDamaged2 = new Image();
var vegetaDeadImage = new Image();
var friezaDamaged = new Image();
var vegetaBlastImage = new Image();
var vegetaBlastImage2 = new Image();
var vegetaBlastImage3 = new Image();
var vegetaBlastImage4 = new Image();
var vegetaBlastImage5 = new Image();
var transform1 = new Image();
var transform2 = new Image();
var transform3 = new Image();
var transform4 = new Image();
var transform5 = new Image();
var transform6 = new Image();
var transform7 = new Image();
var transform8 = new Image();
var transform9 = new Image();
var transform10 = new Image();
var powerUpImage = new Image();
var powerUpImage2 = new Image();
var powerUpimage3 = new Image();
var deathBallImage = new Image();
var senzuBeanImage = new Image();
var ginyuImage = new Image();
var ginyuDamaged1 = new Image();
var ginyuDamaged2 = new Image();
var friezaHeadImage = new Image();


var kiBlastSound = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/KiBlast.mp3");
var menuSound = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/menu.mp3");
var hitSound = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/hitSoundFixed.mp3");
var hitSound2 = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/hitSound2.mp3");
var friezaHit1 = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/friezaHit1.mp3");
var friezaHit2 = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/friezaHit2.mp3");
var friezaComment = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/friezaComment.mp3");
var friezaShieldHeal = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/friezaShieldHeal.mp3");
var vegetaAudio1 = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/vegetaAudio1.mp3");
var friezaAudio1 = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/friezaAudio1.mp3");
var friezaVictoryAudio = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/friezaVictoryAudio.mp3");
var powerUpAudio = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/powerUpAudio.mp3");
var vegetaHealAudio = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/vegetaHealAudio.mp3")
var ginyuAudio1 = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/ginyuAudio.mp3");
var ginyuAudio2 = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/ginyuAudio2.mp3");
var ginyuAudio3 = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/ginyuAudio3.mp3");
var friezaDeathAudio = new Audio ("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/friezaDeathAudio.mp3")
var vegetaVictoryAudio = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/vegetaVictoryAudio.mp3")
var goldenFriezaEntranceAudio = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/goldenFriezaEntrance.mp3")
var ssjVegetaAudio = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/ssjVegetaAudio.mp3")
var ssjVegetaAudio2 = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/ssjVegetaAudio2.mp3")
var teleportAudio = new Audio("https://s3.amazonaws.com/frieza-game-dev/sounds/sounds/teleportAudio.mp3");

var gameCanvas = document.getElementById("gameCanvas");

var deathBallVerticalIncrement = 5;
var deathBallDown = 0
var incrementX = 0;
var reverseCountX = 0;
var minionShift = 2;
var kiBlastIncrement = 0;
var kiBlastCounter = 0;
var hpDecreaser = 10;
var currentHealth = 800;
var healthPoints = 800;
var totalHealth = 800;
var friezaShield = 350;
var friezaHealthPoints = 7000;
var currentFriezaHealthPoints = 7000;
var currentGinyuHealthPoints = 100;
var currentScore = 0;
var energyPoints = 100;
var currentEnergy = 100;
var currentEnergy2 = 0
var friezaRunAway = true;
var friezaRunText = true;
var slidingFrieza = false;
var slidingFrieza2 = false;
var friezaShieldDown = false;
var randomSlideXCondition = false;
var randomSlideYCondition = false;
var randomSlideXLeftCondition = false;
var slidingFriezaDown = false;
var slidingFriezaUp = false;
var slidingFriezaLeft = false;
var friezaReturned = false;
var friezaDead = false;
var specialAttack = true;
var gameSet = false;
var powerUp = false;
var victoryToggle = false;
var ginyuEntrance = true;
var ginyuHere = true;
var ginyuDeath = false;
var ginyuHealthDisplay = false;
var ginyuDead = false;
var deathAudioPlayed = false;
var goldenFriezaCommentPlayed = false;
var charged = false;
var superSayain = false;
var transforming = false;
var nowFiring = false;
var ssjVegetaText = false;
var vegetaDead = false;
var friezaCommentPlayed = false;
var friezaHere = true;
var energyGlow = false;
var gameStarted = false;
var healBegin = 0;
var blastIncrement = []
var vertIncrement = 10;
var sideIncrement = 10;
var headInc = -Math.abs(3)
var bodyInc = 1
var firing = 0;
var date = new Date();
var time_start = date.getTime();



var intervalId;
var intervalId2;
var friezaInterval;
var flashTextInterval;
var deathAnimation;
var friezaRunInterval;
var friezaSlideInterval;
var friezaSlideInterval2;
var randomSlideXInterval;
var randomSlideYInterval;
var randomSlideXLeftInterval;
var friezaSlideIntervalDown;
var friezaSlideIntervalUp;
var friezaSlideIntervalLeft;
var textInterval;
var blastAnimationInterval = []
var ginyuDeathInterval;
var friezaReturnInterval;
var friezaDeathAnimationInterval;


//image sources
kiBlastImage.src = "https://media.giphy.com/media/8TB91dQVqMR6U/200.gif"; //255x200
enemyImage.src = "./images/friezaBody.png";
avatarImage.src = "./images/vegetaNormal.png";
minionImage.src = "./images/fireball.gif"; // 156x90
avatarImageDamaged.src = "./images/vegetaNormalDamaged.png";
avatarImageDamaged2.src = "./images/vegetaNormalDamaged2.png";
vegetaDeadImage.src = "./images/vegetaDead.png";
friezaDamaged.src = "./images/friezaDamaged.png"; // 733x1147
vegetaBlastImage.src = "./images/vegetaBlast.png";
vegetaBlastImage2.src = "./images/vegetaBlast2.png";
vegetaBlastImage3.src = "./images/vegetaBlast3.png";
vegetaBlastImage4.src = "./images/vegetaBlast4.png";
vegetaBlastImage5.src = "./images/vegetaBlast5.png";
transform1.src = "./images/transform1.png";
transform2.src = "./images/transform2.png";
transform3.src = "./images/transform3.png";
transform4.src = "./images/transform4.png";
transform5.src = "./images/transform5.png";
transform6.src = "./images/transform6.png";
transform7.src = "./images/transform7.png";
transform8.src = "./images/transform8.png";
transform9.src = "./images/transform9.png";
transform10.src = "./images/transform10.png";
powerUpImage.src = "./images/powerUp1.png";
powerUpImage2.src = "./images/powerUp2.png";
powerUpimage3.src = "./images/powerUp3.png";
deathBallImage.src = "./images/deathball.png";
senzuBeanImage.src = "./images/senzuBean.png"
ginyuImage.src = "./images/ginyuBody.png";
ginyuDamaged1.src = "./images/ginyuDamaged1.png";
ginyuDamaged2.src = "./images/ginyuDamaged2.png";
friezaHeadImage.src = "./images/friezaHead.png"

// portrait subtitles
var vegeta_intro = "Welcome to the end of your life!"
var vegeta_intro2 = "...and I promise it\'s going to hurt!"
var frieza_intro = "I was right!"
var frieza_intro2 = "I must exterminate the sayain race!"
var frieza_run_text = "I may have underestimated you..."
var vegeta_comment1 = "You of all people should know this about me, that I don\'t share Kakarot\'s taste for forgiveness."
var vegeta_comment2 = "I\'m sending you back to hell!"
var frieza_comment1 = "Haha, you\'re threats are as empty as your title."
var frieza_comment2 = "All hail Vegeta, prince of no one."
var ginyuText = "My my, what a rush! I'd forgotten how much fun a real fight could be!"
var friezaDeathComment = "AHHHHHHHHHHHHHHH!!!"
var vegetaVictoryComment = "I am a warrior, the sayain prince, Vegeta!!"
var goldenFriezaComment = "I know gold's a bit gauche, but I wanted to ensure you grasp my new position atop the pecking order."
var ssjVegetaComment = "The sleeper has awakened. I am the prince of all saiyans once again!"

function setUpGame(){
  gameStarted = true;
  var gameCanvas = document.getElementById("gameCanvas");
  var enemyImage = new Image();

  $(function(){
    $("#ginyuHealth").fadeToggle('fast');
  });
  date = new Date();
  time_start = date.getTime();

  enemyImage.src = "./images/friezaBody2.png";
  if (gameSet){
    console.log("game is set")
  } else {
    gameCanvas.getContext("2d").drawImage(enemyImage, enemyXPosition[0], enemyYPosition[0], enemyWidth, enemyHeight);
    gameCanvas.getContext("2d").drawImage(avatarImage, 200, 200, 100, 100);
    gameSet = true;
  }

  if (intervalId2){
  clearInterval(intervalId2)
  }
  intervalId2 = setInterval(enemyMovement, 25);
}

function enemyMovement(){
  var gameCanvas = document.getElementById("gameCanvas");
  var numberOfEnemies = minionPositionY.length
  var numberOfBlasts = blastPositionsX.length
  var numberofDeathBalls = deathBallPositionX.length
  var numberofSenzuBeans = senzuBeanPositionX.length
  var hp = document.getElementById("hpBar");
  var shieldText = document.getElementById("shieldDownText");
  var gameCanvas = document.getElementById("gameCanvas");
  var friezaBarrier = document.getElementById("friezaHealthBar");
  var dateCurrent = new Date();
  var timeCurrent = dateCurrent.getTime()
  var timer = timeCurrent - time_start
  if (avatarPositionX > 1100){
    avatarPositionX = 300
  }

  if (currentEnergy2 >= 200 && superSayain == false){
      setTimeout(function(){
        if (energyGlow == false){
          jQuery("#energyBar2").css("background-color", "red")
          energyGlow = true;
        } else if (energyGlow == true){
          jQuery("#energyBar2").css("background-color", "purple")
          energyGlow = false;
        }
      }, 500);
  } else {
    jQuery("#energyBar2").css("background-color", "yellow")
  }
  if (healthPoints > 0 && friezaDead == false){
    currentScore += 1
  }
  score.innerHTML = "Score " + currentScore
  if (vegetaDead){
    setTimeout(function(){
      if (victoryToggle == false){
        jQuery("#victory").fadeToggle("slow")
        jQuery("#victory").css("background-image", "url('./images/vegetaDeadGif.gif')")
        jQuery("#victorybutton").fadeToggle("slow")
        victory.innerHTML = "YOU WERE KILLED! SCORE " + currentScore
        victoryToggle = true;
      }
    }, 5000);
  }
  if ((timer > 15000 && timer < 20000 || timer > 40000 && timer < 45000 || timer > 60000 && timer < 65000) && (friezaReturned || ginyuHere)){
    enemyXPosition[0] = 700;
    enemyYPosition[0] = 200;
    if (specialAttack && friezaDead == false){
      minionPositionX = []
      minionPositionY = []
      minionImage.src = "./images/fireball2.png"
      minionPositionY.push(30)
      minionPositionY.push(70)
      minionPositionY.push(110)
      minionPositionY.push(150)
      minionPositionY.push(190)
      minionPositionY.push(240)
      minionPositionY.push(270)
      minionPositionY.push(310)
      minionPositionY.push(350)
      minionPositionX.push(enemyXPosition[0] + 50)
      minionPositionX.push(enemyXPosition[0] + 50)
      minionPositionX.push(enemyXPosition[0] + 50)
      minionPositionX.push(enemyXPosition[0] + 50)
      minionPositionX.push(enemyXPosition[0] + 50)
      minionPositionX.push(enemyXPosition[0] + 50)
      minionPositionX.push(enemyXPosition[0] + 50)
      minionPositionX.push(enemyXPosition[0] + 50)
      minionPositionX.push(enemyXPosition[0] + 50)
      specialAttack = false;
    }
  }
  if (ginyuDead){
    enemyImage.src = "./images/goldenFriezaBody.png";
    friezaDamaged.src = "./images/goldenFriezaDamaged.png"
    jQuery("#friezaHealthBar").css("background-color", "#ff0e3e")
    jQuery("#ginyuHealth").css("display", "none")
    if (friezaReturned == false && enemyXPosition[0] > avatarPositionX){
      enemyXPosition[0] = enemyXPosition[0] - 5
    } else {
      friezaHere = true;
      friezaReturned = true;
      if(goldenFriezaCommentPlayed == false){
        setTimeout(function(){
          jQuery('#portrait').html('');
          clearInterval(textInterval)
          goldenFriezaEntranceAudio.play()
          portraitPicture.src = "./images/goldenFriezaPortrait.png";
          $("#portraitPicture").fadeToggle("slow");
          $("#portrait").fadeToggle("slow");
          showText("#portrait", goldenFriezaComment, 0, 35);
        }, 3000);
        goldenFriezaCommentPlayed = true;
        setTimeout(function(){
          $("#portraitPicture").fadeToggle("slow");
          $("#portrait").fadeToggle("slow");
        }, 12000);
      }
     }
  }

  if ( timer > 20000 && timer < 40000 || timer > 45000 && timer < 60000 || timer > 65000){
    minionImage.src = "./images/fireball.gif"
  }
  if (timer > 30000 && timer < 35000 || timer > 50000 && timer < 55000){
    specialAttack = true;
  }
  // INVINCIBILITY FOR TESTING
  // if (timer > 10000){
  //   currentHealth = 400
  //   healthPoints = 400
  // }
  ///////////////////////////
  if (timer < 10000){
    enemyXPosition[0] = 800;
    enemyYPosition[0] = 200;
    friezaShield = 350;
  }
  if (healthPoints <= 0){
    enemyXPosition[0] = 500;
    enemyYPosition[0] = 200;
  }

  if (timer > 1000 && timer < 1020){
    $(function(){
      $("#portrait").fadeToggle("slow");
      $("#portraitPicture").fadeToggle("slow");
      vegetaAudio1.play();
      showText("#portrait", vegeta_intro, 0, 40);
      setTimeout(function(){
        setTimeout(function(){
          $("#portraitPicture").fadeToggle("slow");
        }, 2000);
        clearInterval(textInterval)
        jQuery('#portrait').html('');
        showText("#portrait", vegeta_intro2, 0, 40);
      }, 2300);

    });
  }
  if (timer > 6000 && timer < 6020){
    portraitPicture.src="./images/friezaTorso.png";
    friezaAudio1.play();
    $("#portraitPicture").fadeToggle("slow");
    jQuery('#portrait').html('');
    clearInterval(textInterval)
    showText('#portrait', frieza_intro, 0, 30);
    setTimeout(function(){
      setTimeout(function(){
        $("#portrait").fadeToggle("slow");
        $("#portraitPicture").fadeToggle("slow");
      }, 4000);
      jQuery('#portrait').html('');
      showText('#portrait', frieza_intro2, 0, 30);
    }, 1000);
  }
  if (friezaShieldDown){
    function flashText(){
      setTimeout(function(){
        shieldText.style.color = "white";
      }, 100);
      setTimeout(function(){
        shieldText.style.color = "red";
      }, 100);
      setTimeout(function(){
        clearInterval(flashTextInterval)
      }, 100);
    }

    flashTextInterval = setInterval(flashText, 50);
    shieldText.innerHTML = "FRIEZA'S SHIELDS ARE DOWN!";
  } else {
    shieldText.innerHTML = ""
    clearInterval(flashTextInterval)
  }

  // random add minion generator
  if (Math.random() < 1/20 && friezaDead == false && timer > 10000){
    minionPositionY.push(Math.random() * 1000);
    minionPositionX.push(avatarPositionX + 500 + minionShift);
  }
    minionShift = minionShift + 1

  // random death ball attack
  if (Math.random() < 1/150 && timer > 10000 && friezaDead == false){
    deathBallPositionX.push(enemyXPosition[0] - 20);
    deathBallPositionY.push(enemyYPosition[0]);
  }
  // random senzu bean spawn
  if (Math.random() < 1/100 && timer > 10000){
    senzuBeanPositionY.push(Math.random() * 1000);
    senzuBeanPositionX.push(avatarPositionX + 500 + minionShift);
  }
  // Frieza movement: If FRIEZA is below 5000 hitpoints, he'll move to the right until 2500px from VEGETA
  if (enemyXPosition[0] > avatarPositionX + 4500 && ginyuDead == false){
    clearInterval(friezaRunInterval);
    enemyXPosition[0] = avatarPositionX + 4500
    friezaRunAway = false;
  }

  function friezaRun(){
    enemyXPosition[0] = enemyXPosition[0] + 1
  }
  if (currentFriezaHealthPoints < 5000 && friezaRunAway && ginyuDead == false){
    enemyXPosition[0] = enemyXPosition + 5
    friezaHere = false;
    if (friezaRunText) {
      clearInterval(textInterval)
      $("#portrait").fadeToggle("slow");
      $("#portraitPicture").fadeToggle("slow");
      jQuery('#portrait').html('');
      portraitPicture.src="./images/friezaTorso.png";
      $(function(){
        showText("#portrait", frieza_run_text, 0, 30);
        setTimeout(function(){
          $("#portraitPicture").fadeToggle("slow");
        }, 3000);
        setTimeout(function(){
          jQuery('#portrait').html('');
          clearInterval(textInterval)
          portraitPicture.src = "./images/ginyuPortrait.png";
          $("#portraitPicture").fadeToggle("slow");
          ginyuAudio3.play();
          showText("#portrait", ginyuText, 0, 30);
          setTimeout(function(){
            $("#portraitPicture").fadeToggle("slow")
            $("#portrait").fadeToggle("slow")
          }, 7000);
        }, 5000);
      });
      friezaRunText = false;
    }
  }

  if (ginyuEntrance == false && ginyuHealthDisplay == false){
    $(function(){
      $("#ginyuHealth").slideToggle("slow")
    });
    ginyuHealthDisplay = true;
  }
  if (currentFriezaHealthPoints < 5000 && ginyuEntrance){
    if (ginyuPositionY >= 200){
      ginyuPositionY = ginyuPositionY
      ginyuEntrance = false;
      ginyuHere = false;
    } else {
      ginyuPositionY += 10
    }
  }

  function friezaSlide(){ //down to the right
    enemyXPosition[0] = enemyXPosition[0] + 3;
  }
  function friezaSlideDown(){
    enemyYPosition[0] = enemyYPosition[0] + 2;
  }
  function friezaSlideUp(){
    enemyYPosition[0] = enemyYPosition[0] - 2;
  }
  function friezaSlideLeft(){
    enemyXPosition[0] = enemyXPosition[0] - 2;
  }
  function friezaSlide2(){ //up to the left
    enemyXPosition[0] = enemyXPosition[0] - 3;
    enemyYPosition[0] = enemyYPosition[0] - 1;
  }
  function randomSlideX(){ //slide to the x
    enemyXPosition[0] = enemyXPosition[0] + 1
  }
  function randomSlideXLeft(){
    enemyXPosition[0] = enemyXPosition[0] - 1
  }
  function randomSlideY(){
    enemyYPosition[0] = enemyYPosition[0] + 1
  }
  // frieza slide left
  if (Math.random() < .3 && ginyuHere){
    if ((enemyXPosition[0] > avatarPositionX + Math.random() * 300) && slidingFriezaLeft == false) {
      friezaSlideIntervalLeft = setInterval(friezaSlideLeft, 1);
      slidingFriezaLeft = true;
    }
  }
  // frieza slide left clear
  if (enemyXPosition[0] < avatarPositionX + Math.random() * 400 && slidingFriezaLeft){
    clearInterval(friezaSlideIntervalLeft)
    slidingFriezaLeft = false;
  }
  // frieza slide right
  if (Math.random() < .5){
    if ((enemyXPosition[0] < avatarPositionX - Math.random() * 200) && slidingFrieza == false) {
      friezaSlideInterval = setInterval(friezaSlide, 1);
      slidingFrieza = true;
    }
  }
  // // // frieza slide clear (R)
  if (enemyXPosition[0] > avatarPositionX + Math.random() * 300 && slidingFrieza){
    clearInterval(friezaSlideInterval)
    slidingFrieza = false;
  }
  // frieza slide down
  if (Math.random() < .4){
    if ((enemyYPosition[0] < avatarPositionY - Math.random() * 300) && slidingFriezaDown == false){
      friezaSlideIntervalDown = setInterval(friezaSlideDown, 1);
      slidingFriezaDown = true;
    }
  }
  // frieza slide clear (D)
  if (enemyYPosition[0] > avatarPositionY + Math.random() * 300 && slidingFriezaDown) {
    clearInterval(friezaSlideIntervalDown)
    slidingFriezaDown = false;
  }
  // frieza slide up
  if (Math.random() < .4){
    if ((enemyYPosition[0] > avatarPositionY + Math.random() * 300) && slidingFriezaUp == false){
      friezaSlideIntervalUp = setInterval(friezaSlideUp, 1);
      slidingFriezaUp = true;
    }
  }
  // frieza slide up clear
  if (enemyYPosition[0] < avatarPositionY + Math.random() * 100 && slidingFriezaUp){
    clearInterval(friezaSlideIntervalUp)
    slidingFriezaUp = false;
  }
  ////////////////////////////////////////////////////////////////////////

  if (enemyXPosition[0] <= 0){
    incrementX = 2;
    reverseCountX = 1;
  } else if (enemyXPosition[0] > 0 && reverseCountX == 0){
    incrementX = -Math.abs(2);
  } else if (enemyXPosition[0] > 500 && reverseCountX == 1){
    incrementX = -Math.abs(2);
    reverseCountX = 0;
  }
  if (friezaHere){
    enemyXPosition[0] = enemyXPosition[0] + incrementX;
  }


  //minion movement
  var CurrentEnemyNumber = 0;
  while (CurrentEnemyNumber < numberOfEnemies){
    minionPositionX[CurrentEnemyNumber] = minionPositionX[CurrentEnemyNumber] - 6;
    CurrentEnemyNumber += 1;
  }
  // blast movement
  var CurrentBlastNumber = 0;
  while (CurrentBlastNumber < numberOfBlasts){
    blastPositionsX[CurrentBlastNumber] = blastPositionsX[CurrentBlastNumber] + 30;
    CurrentBlastNumber += 1;
  }
  // death ball movement
  if (deathBallDown == 10){
    deathBallVerticalIncrement = -Math.abs(10);
  } else if (deathBallDown == 20){
    deathBallVerticalIncrement = 5;
    deathBallDown = 0
  }
  var CurrentDeathBallNumber = 0;
  while (CurrentDeathBallNumber < numberofDeathBalls) {
    deathBallPositionX[CurrentDeathBallNumber] = deathBallPositionX[CurrentDeathBallNumber] - 10;
    deathBallPositionY[CurrentDeathBallNumber] = deathBallPositionY[CurrentDeathBallNumber] + deathBallVerticalIncrement;
    CurrentDeathBallNumber += 1;
  }
  deathBallDown += 1
  // senzu Bean movement
  var CurrentSenzuBeanNumber = 1;
  while (CurrentSenzuBeanNumber < numberofSenzuBeans){
    senzuBeanPositionX[CurrentSenzuBeanNumber] = senzuBeanPositionX[CurrentSenzuBeanNumber] - 3;
    CurrentSenzuBeanNumber += 1;
  }
  // ginyu movement
  if (ginyuEntrance == false){
    if (ginyuPositionY <= 10 && ginyuDeath == false){
      vertIncrement = 10
    } else if (ginyuPositionY >= 400 && ginyuDeath == false){
      vertIncrement = -Math.abs(10)
    }
    if (ginyuPositionX <= avatarPositionX - 500 && ginyuDeath == false){
      sideIncrement = 10
    } else if (ginyuPositionX >= avatarPositionX + 600 && ginyuDeath == false){
      sideIncrement = -Math.abs(10)
    }
    ginyuPositionY += vertIncrement
    ginyuPositionX += sideIncrement
  }

  gameCanvas.width = 3000;
  if (currentFriezaHealthPoints > 0){
    gameCanvas.getContext("2d").drawImage(enemyImage, enemyXPosition[0] + 8, enemyYPosition[0], enemyWidth, enemyHeight);
  } else {
    if (deathAudioPlayed == false){
      friezaDeathAudio.play();
      portraitPicture.src = "./images/goldenFriezaPortrait.png"
      $("#portrait").fadeToggle("slow");
      $("#portraitPicture").fadeToggle("slow");
      jQuery('#portrait').html('');
      clearInterval(textInterval);
      showText('#portrait', friezaDeathComment, 0, 40);
      deathAudioPlayed = true;
      setTimeout(function(){
        $("#portraitPicture").fadeToggle("slow");
        jQuery('#portrait').html('');
        clearInterval(textInterval);
      }, 7000);
      setTimeout(function(){
        jQuery('#portrait').html('');
        clearInterval(textInterval)
        vegetaVictoryAudio.play()
        if (superSayain){
          portraitPicture.src = "./images/ssjVegetaPortrait.png"
        } else {
          portraitPicture.src = "./images/vegataPortrait.png";
        }
        $("#portraitPicture").fadeToggle("slow");
        showText("#portrait", vegetaVictoryComment, 0, 40);
      }, 10000);
    }
    friezaDeathAnimationInterval = setInterval(friezaDeathAnimation, 500)
    friezaDead = true;


    setTimeout(function(){
      if (victoryToggle == false){
        jQuery("#victory").fadeToggle("slow")
        victory.innerHTML = "YOU BEAT FRIEZA WITH A SCORE OF " + Math.round((currentScore * (10000000 / timer)))
        victoryToggle = true;
      }
    }, 10000);
  }


  function generateAvatar(){
    var gameCanvas = document.getElementById("gameCanvas");
    if (superSayain){
      vegetaBlastImage2.src = "./images/SSJvegetaBlast2.png"
      vegetaBlastImage3.src = "./images/SSJvegetaBlast3.png"
      vegetaBlastImage4.src = "./images/SSJvegetaBlast4.png"
      vegetaBlastImage5.src = "./images/SSJvegetaBlast.png"
      vegetaBlastImage.src = "./images/SSJvegetaBlast5.png"
      saiyanOffsetWidth = -Math.abs(65)
    } else {
      saiyanOffsetWidth = 10;
    }
    if (transforming == false){
      if (firing == 1) {
        gameCanvas.getContext("2d").drawImage(vegetaBlastImage2, avatarPositionX, avatarPositionY, avatarWidth + saiyanOffsetWidth, avatarHeight);
      } else if (firing == 2) {
        gameCanvas.getContext("2d").drawImage(vegetaBlastImage3, avatarPositionX, avatarPositionY, avatarWidth + saiyanOffsetWidth, avatarHeight);
      } else if (firing == 3) {
        gameCanvas.getContext("2d").drawImage(vegetaBlastImage4, avatarPositionX, avatarPositionY, avatarWidth + saiyanOffsetWidth, avatarHeight);
      } else if (firing == 4) {
        gameCanvas.getContext("2d").drawImage(vegetaBlastImage5, avatarPositionX, avatarPositionY, avatarWidth + saiyanOffsetWidth, avatarHeight);
      } else if (firing == 5) {
        gameCanvas.getContext("2d").drawImage(vegetaBlastImage, avatarPositionX, avatarPositionY, avatarWidth, avatarHeight);
      } else {
        gameCanvas.getContext("2d").drawImage(avatarImage, avatarPositionX, avatarPositionY, avatarWidth, avatarHeight);
      }
    } else if (transforming){
        if (transform == 1){
          gameCanvas.getContext("2d").drawImage(transform1, avatarPositionX, avatarPositionY, avatarWidth + 20, avatarHeight + 20);
        } else if (transform == 2){
          gameCanvas.getContext("2d").drawImage(transform2, avatarPositionX, avatarPositionY, avatarWidth + 20, avatarHeight + 20);
        } else if (transform == 3){
          gameCanvas.getContext("2d").drawImage(transform3, avatarPositionX, avatarPositionY, avatarWidth + 20, avatarHeight + 20);
        } else if (transform == 4){
          gameCanvas.getContext("2d").drawImage(transform4, avatarPositionX, avatarPositionY, avatarWidth + 20, avatarHeight + 20);
        } else if (transform == 5){
          gameCanvas.getContext("2d").drawImage(transform5, avatarPositionX, avatarPositionY, avatarWidth + 20, avatarHeight + 20);
        } else if (transform == 6){
          gameCanvas.getContext("2d").drawImage(transform6, avatarPositionX, avatarPositionY, avatarWidth + 20, avatarHeight + 20);
        } else if (transform == 7){
          gameCanvas.getContext("2d").drawImage(transform7, avatarPositionX - ssjTransformOffsetX, avatarPositionY - ssjTransformOffsetY, ssjTransformWidth, ssjTransformHeight);
        } else if (transform == 8){
          gameCanvas.getContext("2d").drawImage(transform8, avatarPositionX - ssjTransformOffsetX, avatarPositionY - ssjTransformOffsetY, ssjTransformWidth, ssjTransformHeight);
        } else if (transform == 9){
          gameCanvas.getContext("2d").drawImage(transform9, avatarPositionX - ssjTransformOffsetX, avatarPositionY - ssjTransformOffsetY, ssjTransformWidth, ssjTransformHeight);
        } else if (transform == 10){
          gameCanvas.getContext("2d").drawImage(transform10, avatarPositionX - ssjTransformOffsetX, avatarPositionY - ssjTransformOffsetY, ssjTransformWidth, ssjTransformHeight);
        } else if (transform == 11){
          gameCanvas.getContext("2d").drawImage(transform7, avatarPositionX - ssjTransformOffsetX, avatarPositionY - ssjTransformOffsetY, ssjTransformWidth, ssjTransformHeight);
        } else if (transform == 12){
          gameCanvas.getContext("2d").drawImage(transform8, avatarPositionX - ssjTransformOffsetX, avatarPositionY - ssjTransformOffsetY, ssjTransformWidth, ssjTransformHeight);
        } else if (transform == 13){
          gameCanvas.getContext("2d").drawImage(transform9, avatarPositionX - ssjTransformOffsetX, avatarPositionY - ssjTransformOffsetY, ssjTransformWidth, ssjTransformHeight);
        } else if (transform == 14){
          gameCanvas.getContext("2d").drawImage(transform10, avatarPositionX - ssjTransformOffsetX, avatarPositionY - ssjTransformOffsetY, ssjTransformWidth, ssjTransformHeight);
        } else if (transform == 15){
          gameCanvas.getContext("2d").drawImage(transform8, avatarPositionX - ssjTransformOffsetX, avatarPositionY - ssjTransformOffsetY, ssjTransformWidth, ssjTransformHeight);
        } else if (transform == 16){
          gameCanvas.getContext("2d").drawImage(transform9, avatarPositionX - ssjTransformOffsetX, avatarPositionY - ssjTransformOffsetY, ssjTransformWidth, ssjTransformHeight);
        } else if (transform == 17){
          gameCanvas.getContext("2d").drawImage(transform10, avatarPositionX - ssjTransformOffsetX, avatarPositionY - ssjTransformOffsetY, ssjTransformWidth, ssjTransformHeight);
        } else if (transform == 18){
          gameCanvas.getContext("2d").drawImage(transform7, avatarPositionX - ssjTransformOffsetX, avatarPositionY - ssjTransformOffsetY, ssjTransformWidth, ssjTransformHeight);
        } else if (transform == 19){
          gameCanvas.getContext("2d").drawImage(transform8, avatarPositionX - ssjTransformOffsetX, avatarPositionY - ssjTransformOffsetY, ssjTransformWidth, ssjTransformHeight);
        } else if (transform == 20){
          gameCanvas.getContext("2d").drawImage(transform9, avatarPositionX - ssjTransformOffsetX, avatarPositionY - ssjTransformOffsetY, ssjTransformWidth, ssjTransformHeight);
        } else if (transform == 21){
          gameCanvas.getContext("2d").drawImage(transform10, avatarPositionX - ssjTransformOffsetX, avatarPositionY - ssjTransformOffsetY, ssjTransformWidth, ssjTransformHeight);
        }
    }
  }
  if (healthPoints == 0){
    // console.log("You're dead!");
  } else {
    generateAvatar()
    var ssjOffsetX = 5
    var ssjOffsetX2 = 0
    if (superSayain){
      ssjOffsetX = -Math.abs(30)
      ssjOffsetX2 = -Math.abs(30)
    }
    if (powerUp){
      gameCanvas.getContext("2d").drawImage(powerUpImage, avatarPositionX - ssjOffsetX, avatarPositionY)
      if (timer % 7 == 0){
        gameCanvas.getContext("2d").drawImage(powerUpImage2, avatarPositionX - ssjOffsetX2, avatarPositionY)
      }
      if (timer % 3 == 0){
        gameCanvas.getContext("2d").drawImage(powerUpimage3, avatarPositionX - ssjOffsetX, avatarPositionY)
      }
    }
  }
  // fade out minions
  var CurrentEnemyNumber = 0;
  while (CurrentEnemyNumber < numberOfEnemies){
    if (minionPositionX[CurrentEnemyNumber] < avatarPositionX - 1000){
      minionPositionX.splice(CurrentEnemyNumber, 1);
      minionPositionY.splice(CurrentEnemyNumber, 1);
    }
    CurrentEnemyNumber = CurrentEnemyNumber + 1;
  }
  // fade out blasts
  var CurrentBlastNumber = 0;
  while(CurrentBlastNumber < numberOfBlasts){
    if(blastPositionsX[CurrentBlastNumber] > avatarPositionX + 1000){
      blastPositionsX.splice(CurrentBlastNumber, 1);
      blastPositionsY.splice(CurrentBlastNumber, 1);
    }
    CurrentBlastNumber += 1;
  }
  // fade out death balls
  var CurrentDeathBallNumber = 0;
  while (CurrentDeathBallNumber < numberofDeathBalls){
    if (deathBallPositionX[CurrentDeathBallNumber] < avatarPositionX - 1000){
      deathBallPositionX.splice(CurrentDeathBallNumber, 1);
      deathBallPositionY.splice(CurrentDeathBallNumber, 1);
    }
    CurrentDeathBallNumber += 1;
  }
  // fade out senzu beans
  var CurrentSenzuBeanNumber = 0;
  while (CurrentSenzuBeanNumber < numberofSenzuBeans){
    if (senzuBeanPositionX[CurrentSenzuBeanNumber] < avatarPositionX - 1000){
      senzuBeanPositionX.splice(CurrentSenzuBeanNumber, 1);
      senzuBeanPositionY.splice(CurrentSenzuBeanNumber, 1);
    }
    CurrentSenzuBeanNumber += 1;
  }
  // generate minions
  var CurrentEnemyNumber = 0;
  while (CurrentEnemyNumber < numberOfEnemies){
    gameCanvas.getContext("2d").drawImage(minionImage, minionPositionX[CurrentEnemyNumber], minionPositionY[CurrentEnemyNumber])
    CurrentEnemyNumber = CurrentEnemyNumber + 1;
  }
  // generate blasts
  var CurrentBlastNumber = 0;
  while (CurrentBlastNumber < numberOfBlasts){
    if (blastPositionsX[CurrentBlastNumber] % 8 == 0 || blastPositionsX[CurrentBlastNumber] % 7 == 0){
      gameCanvas.getContext("2d").drawImage(kiBlastImage, blastPositionsX[CurrentBlastNumber], blastPositionsY[CurrentBlastNumber])
    }
    // gameCanvas.getContext("2d").drawImage(kiBlastImage, blastPositionsX[CurrentBlastNumber], blastPositionsY[CurrentBlastNumber])
    CurrentBlastNumber += 1
  }
  // generate death balls
  var CurrentDeathBallNumber = 0;
  while (CurrentDeathBallNumber < numberofDeathBalls){
    gameCanvas.getContext("2d").drawImage(deathBallImage, deathBallPositionX[CurrentDeathBallNumber], deathBallPositionY[CurrentDeathBallNumber], deathBallWidth, deathBallHeight);
    CurrentDeathBallNumber += 1;
  }
  // generate senzu beans
  var CurrentSenzuBeanNumber = 0;
  while (CurrentSenzuBeanNumber < numberofSenzuBeans){
    gameCanvas.getContext("2d").drawImage(senzuBeanImage, senzuBeanPositionX[CurrentSenzuBeanNumber], senzuBeanPositionY[CurrentSenzuBeanNumber], senzuBeanWidth, senzuBeanHeight);
    CurrentSenzuBeanNumber += 1;
  }
  // generate ginyu
    gameCanvas.getContext("2d").drawImage(ginyuImage, ginyuPositionX, ginyuPositionY, ginyuWidth, ginyuHeight)
  // hit enemy
  var CurrentBlastNumber = 0;
  while (CurrentBlastNumber < numberOfBlasts){
    if ( ( (blastPositionsX[CurrentBlastNumber] < enemyXPosition[0] && enemyXPosition[0] < blastPositionsX[CurrentBlastNumber] + 50) || (enemyXPosition[0] < blastPositionsX[CurrentBlastNumber] && blastPositionsX[CurrentBlastNumber] < enemyXPosition[0] + enemyWidth)) && ((blastPositionsY[CurrentBlastNumber] < enemyYPosition[0] && enemyYPosition[0] < blastPositionsY[CurrentBlastNumber] + 170) || (enemyYPosition[0] < blastPositionsY[CurrentBlastNumber] && blastPositionsY[CurrentBlastNumber] < enemyYPosition[0] + (enemyHeight * .80)))){
      gameCanvas.getContext("2d").drawImage(friezaDamaged, enemyXPosition[0], enemyYPosition[0], enemyWidth, enemyHeight);

      if (friezaShieldDown){
        friezaHit1.play();
      } else {
          friezaHit2.play();
      }

      if (friezaShield <= 0){
        friezaShield = 0;
        friezaShieldDown = true;


      } else {
        if (superSayain){
          friezaShield = friezaShield - 5;
        } else {
          friezaShield = friezaShield - 1;
        }
      }
      friezaBarrier.style.height= friezaShield + "px";
      if (friezaShieldDown){
        function damageFrieza(){
          friezaHp = document.getElementById("friezaHealthText");
          if (currentFriezaHealthPoints == 0){
            console.log("frieza dead!")
            currentFriezaHealthPoints = 0;
          } else {
            if (superSayain){
              currentFriezaHealthPoints = currentFriezaHealthPoints - 40;
            } else {
              currentFriezaHealthPoints = currentFriezaHealthPoints - 20;
            }

          }
          friezaHp.innerHTML = "<span style=color:red>FRIEZA</span>" + " " + currentFriezaHealthPoints + "/" + friezaHealthPoints
        }
        damageFrieza();
      }
      if (friezaShield <= 0){
        setTimeout(function(){
          // friezaBarrier.style.height= "350px";
          if (friezaShield <= 0){
            clearInterval(friezaInterval)
            friezaInterval = setInterval(friezaShieldRecoverAnimation, 20);
          }
          function friezaShieldRecoverAnimation(){
            if (friezaShield == 350){
              friezaShieldDown = false;
              clearInterval(friezaInterval)
              return;
            } else {
              if (friezaShield >= 350){
                friezaShield = 350;
                friezaShieldDown = false;
                clearInterval(friezaInterval)
              }
              friezaShield = friezaShield + 5;
              friezaShieldHeal.play();
              friezaBarrier.style.height= friezaShield +"px";
            }
          }

        }, 10000);

      }
    }
    CurrentBlastNumber += 1
  }
  // hit ginyu
  CurrentBlastNumber = 0;
  while (CurrentBlastNumber < numberOfBlasts){
    if ( ( (blastPositionsX[CurrentBlastNumber] < ginyuPositionX && ginyuPositionX < blastPositionsX[CurrentBlastNumber] + 50) || (ginyuPositionX < blastPositionsX[CurrentBlastNumber] && blastPositionsX[CurrentBlastNumber] < ginyuPositionX + ginyuWidth)) && ((blastPositionsY[CurrentBlastNumber] < ginyuPositionY && ginyuPositionY < blastPositionsY[CurrentBlastNumber] + 170) || (ginyuPositionY < blastPositionsY[CurrentBlastNumber] && blastPositionsY[CurrentBlastNumber] < ginyuPositionY + (ginyuHeight * .80)))){
      ginyuAudio1.play()
      gameCanvas.getContext("2d").drawImage(ginyuDamaged1, ginyuPositionX, ginyuPositionY, ginyuWidth, ginyuHeight);
      setTimeout(function(){
        gameCanvas.getContext("2d").drawImage(ginyuDamaged2, ginyuPositionX, ginyuPositionY, ginyuWidth, ginyuHeight);
      }, 100);
      if (superSayain){
        currentGinyuHealthPoints = currentGinyuHealthPoints - 4
      } else {
        currentGinyuHealthPoints = currentGinyuHealthPoints - 2
      }

      ginyuHealth.style.width = currentGinyuHealthPoints + "px"
      if (currentGinyuHealthPoints <= 0){
        ginyuDead = true;
        ginyuAudio2.play();
        ginyuDeath = true;
        ginyuHere = true;
        ginyuDeathInterval = setInterval(ginyuDeathAnimation, 5)
      }
    }
    CurrentBlastNumber += 1;
  }

  if (superSayain && nowFiring == false){
    ssjWidthOffset = 0;
    avatarImageDamaged.src = "./images/ssjVegetaDamaged.png"
    avatarImageDamaged2.src = "./images/ssjVegetaDamaged2.png"
  } else if (superSayain && nowFiring){
    ssjWidthOffset = 40
    ssjHeightOffset = 0;
  }

  // damage.self hit box
  if (((avatarPositionX < enemyXPosition[0] && enemyXPosition[0] < avatarPositionX + avatarWidth) || (enemyXPosition[0] < avatarPositionX && avatarPositionX < enemyXPosition[0] + enemyWidth)) && ((avatarPositionY < enemyYPosition[0] && enemyYPosition[0] < avatarPositionY + avatarHeight) || (enemyYPosition[0] < avatarPositionY && avatarPositionY < enemyYPosition[0] + enemyHeight))){
    if (transforming == false){
      hitSound.play();
      gameCanvas.getContext("2d").drawImage(avatarImageDamaged, avatarPositionX, avatarPositionY, avatarWidth - ssjWidthOffset, avatarHeight);
      setTimeout(function(){
        gameCanvas.getContext("2d").drawImage(avatarImageDamaged2, avatarPositionX + 2, avatarPositionY, avatarWidth - ssjWidthOffset, avatarHeight);
      }, 100);
      currentHealth = currentHealth - 1;
      healthPoints = healthPoints - 1;
      hp.style.width= currentHealth * hpBarOffset + "px";
      if (healthPoints <= 0){
        vegetaDead = true;
        setTimeout(function(){
          friezaVictoryAudio.play()
          console.log("playing friezavictory...")
        }, 1000);
        healthPoints = 0
        hitSound2.play();
        deathAnimation = function(){
          var gameCanvas = document.getElementById("gameCanvas");
          avatarPositionY = avatarPositionY + 5;
          gameCanvas.getContext("2d").drawImage(vegetaDeadImage, avatarPositionX, avatarPositionY, 70, 100);
        }
        setInterval(deathAnimation, 3);
      } else if (healthPoints < totalHealth / 2 && friezaCommentPlayed == false){
        friezaCommentPlayed = true;
        friezaComment.play();
        if (superSayain){
          portraitPicture.src = "./images/ssjVegetaPortrait.png"
        } else {
          portraitPicture.src = "./images/vegetaPortrait.png";
        }

        $(function(){
          $("#portrait").fadeToggle("slow");
          $("#portraitPicture").fadeToggle("slow");
          jQuery('#portrait').html('');
          clearInterval(textInterval);
          showText('#portrait', vegeta_comment1, 0, 40);
          setTimeout(function(){
            jQuery('#portrait').html('');
            showText('#portrait', vegeta_comment2, 0, 30);
          }, 6000);
          setTimeout(function(){
            portraitPicture.src="./images/friezaTorso.png";
            jQuery('#portrait').html('');
            showText('#portrait', frieza_comment1, 0, 42);
            setTimeout(function(){
              setTimeout(function(){
                $("#portrait").fadeToggle("slow");
                $("#portraitPicture").fadeToggle("slow");
              }, 5000);
              jQuery('#portrait').html('');
              clearInterval(textInterval);
              showText('#portrait', frieza_comment2, 0, 40);
            }, 3500);
          }, 8000);
        });
        // healthPoints = healthPoints - 1;
      } else {
      // healthPoints = healthPoints - 1;
      }
      hp.innerHTML = "HEALTH " + healthPoints + "/" + totalHealth;
    }

  }


  CurrentEnemyNumber = 0;
  while (CurrentEnemyNumber < numberOfEnemies){
    if ( ( (avatarPositionX < minionPositionX[CurrentEnemyNumber] && minionPositionX[CurrentEnemyNumber] < avatarPositionX + 40) || (minionPositionX[CurrentEnemyNumber] < avatarPositionX && avatarPositionX < minionPositionX[CurrentEnemyNumber] + 100) ) && ( (avatarPositionY < minionPositionY[CurrentEnemyNumber] && minionPositionY[CurrentEnemyNumber] < avatarPositionY + 50) || (minionPositionY[CurrentEnemyNumber] < avatarPositionY && avatarPositionY < minionPositionY[CurrentEnemyNumber] + 60))){
      if (transforming == false){
        hitSound.play();
        gameCanvas.getContext("2d").drawImage(avatarImageDamaged, avatarPositionX, avatarPositionY, avatarWidth - ssjWidthOffset, avatarHeight);
        setTimeout(function(){
          gameCanvas.getContext("2d").drawImage(avatarImageDamaged2, avatarPositionX + 2, avatarPositionY, avatarWidth - ssjWidthOffset, avatarHeight);
        }, 100);
        currentHealth = currentHealth - 5;
        healthPoints = healthPoints - 5;
        hp.style.width= currentHealth * hpBarOffset + "px";
        if (healthPoints <= 0){
          vegetaDead = true;
          healthPoints = 0
          hitSound2.play();
          setTimeout(function(){
            friezaVictoryAudio.play()
          }, 1000);
          deathAnimation = function(){
            var gameCanvas = document.getElementById("gameCanvas");
            avatarPositionY = avatarPositionY + 5;
            gameCanvas.getContext("2d").drawImage(vegetaDeadImage, avatarPositionX, avatarPositionY, 70, 100);
          }
          setInterval(deathAnimation, 3);
        } else if (healthPoints < totalHealth / 2 && friezaCommentPlayed == false){
          friezaCommentPlayed = true;
          friezaComment.play();
          if (superSayain){
            portraitPicture.src = "./images/ssjVegetaPortrait.png"
          } else {
            portraitPicture.src="./images/vegetaPortrait.png";
          }

          $(function(){
            $("#portrait").fadeToggle("slow");
            $("#portraitPicture").fadeToggle("slow");
            jQuery('#portrait').html('');
            clearInterval(textInterval);
            showText('#portrait', vegeta_comment1, 0, 40);
            setTimeout(function(){
              jQuery('#portrait').html('');
              showText('#portrait', vegeta_comment2, 0, 30);
            }, 6000);
            setTimeout(function(){
              portraitPicture.src="./images/friezaTorso.png";
              jQuery('#portrait').html('');
              showText('#portrait', frieza_comment1, 0, 42);
              setTimeout(function(){
                setTimeout(function(){
                  $("#portrait").fadeToggle("slow");
                  $("#portraitPicture").fadeToggle("slow");
                }, 5000);
                jQuery('#portrait').html('');
                clearInterval(textInterval);
                showText('#portrait', frieza_comment2, 0, 40);
              }, 3500);
            }, 8000);
          });
          // healthPoints = healthPoints - 5;
        } else {
        // healthPoints = healthPoints - 5;
        }
        hp.innerHTML = "HEALTH " + healthPoints + "/" + totalHealth;

      }

    }
    CurrentEnemyNumber = CurrentEnemyNumber + 1;
  }
  var CurrentDeathBallNumber = 0;
  while (CurrentDeathBallNumber < numberofDeathBalls){
    if (((avatarPositionX < deathBallPositionX[CurrentDeathBallNumber] && deathBallPositionX[CurrentDeathBallNumber] < avatarPositionX + avatarWidth) || (deathBallPositionX[CurrentDeathBallNumber] < avatarPositionX && avatarPositionX < deathBallPositionX[CurrentDeathBallNumber] + deathBallWidth)) && ((avatarPositionY < deathBallPositionY[CurrentDeathBallNumber] && deathBallPositionY[CurrentDeathBallNumber] < avatarPositionY + avatarHeight) || (deathBallPositionY[CurrentDeathBallNumber] < avatarPositionY && avatarPositionY < deathBallPositionY[CurrentDeathBallNumber] + deathBallHeight))){
      if (transforming == false){
        vegetaHit();
      }
    }
    CurrentDeathBallNumber += 1;
  }
  var CurrentSenzuBeanNumber = 0;
  while (CurrentSenzuBeanNumber < numberofSenzuBeans){
    if (((avatarPositionX < senzuBeanPositionX[CurrentSenzuBeanNumber] && senzuBeanPositionX[CurrentSenzuBeanNumber] < avatarPositionX + avatarWidth) || (senzuBeanPositionX[CurrentSenzuBeanNumber] < avatarPositionX && avatarPositionX < senzuBeanPositionX[CurrentSenzuBeanNumber] + senzuBeanWidth)) && ((avatarPositionY < senzuBeanPositionY[CurrentSenzuBeanNumber] && senzuBeanPositionY[CurrentSenzuBeanNumber] < avatarPositionY + avatarHeight) || (senzuBeanPositionY[CurrentSenzuBeanNumber] < avatarPositionY && avatarPositionY < senzuBeanPositionY[CurrentSenzuBeanNumber] + senzuBeanHeight))){
      vegetaHeal();
      vegetaHealAudio.play();
      senzuBeanPositionX.splice(CurrentSenzuBeanNumber, 1);
      senzuBeanPositionY.splice(CurrentSenzuBeanNumber, 1);
    }
    CurrentSenzuBeanNumber += 1;
  }

    if (((avatarPositionX < ginyuPositionX && ginyuPositionX < avatarPositionX + avatarWidth) || (ginyuPositionX < avatarPositionX && avatarPositionX < ginyuPositionX + ginyuWidth)) && ((avatarPositionY < ginyuPositionY && ginyuPositionY < avatarPositionY + avatarHeight) || (ginyuPositionY < avatarPositionY && avatarPositionY < ginyuPositionY + ginyuHeight))){
      if (transforming == false){
        vegetaHit();
        hitSound2.play();
      }

    }
}

$(document).ready(function(){
  var audio = document.getElementById('audio');
  document.getElementById('mute').addEventListener('click', function(e) {
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
  }, false);
  $('#gameStart').click(function(){
    $('#gameStart').fadeToggle('fast');
  });
  $('#menuButton').click(function(){
    $('#menu').slideToggle('slow');
  });
  $('#items-H').click(function(){
    expand("items");
    console.log('expanding items...');
  });
  $('#status-H').click(function(){
    expand("status");
    console.log('expanding status...');
  });
  $('#skills-H').click(function(){
    expand("skills");
    console.log('expanding skills...');
  });
  $('#quests-H').click(function(){
    expand("quests");
    console.log('expanding quests...');
  });
    window.addEventListener("keydown", function(e) {
      // space and arrow keys
      if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault();
      }
  }, false);
  var gokuSwitch = 0;
  var blastCt = 0;
  $(document).keydown(function(key){
    switch(parseInt(key.which, 10)){
      //left key pressed
      case 65:
        if (key.shiftKey) {
          $('#goku').animate({left: "-=100px"}, 50);
        } else {
          $('#goku').animate({left: "-=20px"}, 100);
        }
        break;
      // right key pressed
      case 87:
        if (key.shiftKey) {
          $('#goku').animate({top: "-=100px"}, 50);
        } else {
          $('#goku').animate({top: "-=20px"}, 100);
        }
        break;
      // up key pressed
      case 68:
        if (key.shiftKey) {
          $('#goku').animate({left: "+=100px"}, 50);
        } else {
          $('#goku').animate({left: "+=20px"}, 100);
        }
        break;
      // down key pressed
      case 83:
        if (key.shiftKey) {
          $('#goku').animate({top: "+=100px"}, 50);
        } else {
          $('#goku').animate({top: "+=20px"}, 100);
        }
        break;
    }
  });
    setInterval(shiftCanvas, 25);
    function shiftCanvas(){
      $('#gameCanvas').animate({left: "+=.01px"}, 500);
    }

    var map = {87: false, 83: false, 68: false, 65: false, 16: false, 32: false, 76: false, 75: false};
    document.addEventListener('keydown', function(e){
      // map = {38: false, 40: false, 39: false, 37: false, 16: false};
      e = e || window.event
      if (e.keyCode in map) {
          map[e.keyCode] = true;
          //move up (fast)
          if (map[87] && map[16]){
            if (avatarPositionY > 0){
              if (superSayain){
                avatarPositionY = avatarPositionY - ssjVegetaMove;
              } else {
                avatarPositionY = avatarPositionY - vegetaMove;
              }
            } // move up (slow)
          } else if (map[87]){
            if (avatarPositionY > 0){
              if (superSayain){
                avatarPositionY = avatarPositionY - 20;
              } else {
                avatarPositionY = avatarPositionY - 10;
              }
            } // move down (fast)
          } else if (map[83] && map[16]){
            if (avatarPositionY < 500){
              if (superSayain){
                avatarPositionY = avatarPositionY + ssjVegetaMove;
              } else {
                avatarPositionY = avatarPositionY + vegetaMove;
              }
            } // move down (slow)
          } else if (map[83]){
            if (avatarPositionY < 500){
              if (superSayain){
                avatarPositionY = avatarPositionY + 20;
              } else {
                avatarPositionY = avatarPositionY + 10;
              }
            } // move right (fast)
          } else if (map[68] && map[16]){
            if (avatarPositionX < 1100){
              if (superSayain){
                avatarPositionX = avatarPositionX + ssjVegetaMove;
              } else {
                avatarPositionX = avatarPositionX + vegetaMove;
              }
            } // move right (slow)
          } else if (map[68]){
            if (avatarPositionX < 1100){
              if (superSayain){
                avatarPositionX = avatarPositionX + 20;
              } else {
                avatarPositionX = avatarPositionX + 10;
              }
            } // move left (fast)
          } else if (map[65] && map[16]){
            if (avatarPositionX > 0){
              if (superSayain){
                avatarPositionX = avatarPositionX - ssjVegetaMove;
              } else {
                avatarPositionX = avatarPositionX - vegetaMove;
              }
            } // move left (slow)
          } else if (map[65]){
            if (avatarPositionX > 0){
              if (superSayain){
                avatarPositionX = avatarPositionX - 20;
              } else {
                avatarPositionX = avatarPositionX - 10;
              }
            }
          } else if (map[32]){
            // avatarPositionX = avatarPositionX + 200;
            if (avatarPositionX < 1100 && avatarPositionX + 400 < 1100){
              teleportAudio.play()
              setTimeout(function(){
                avatarPositionX = avatarPositionX + 50;
              }, 50);
              setTimeout(function(){
                avatarPositionX = avatarPositionX + 50;
              }, 80);
              setTimeout(function(){
                avatarPositionX = avatarPositionX + 50;
              }, 120);
              setTimeout(function(){
                avatarPositionX = avatarPositionX + 50;
              }, 150);
              setTimeout(function(){
                avatarPositionX = avatarPositionX + 50;
              }, 200);
              setTimeout(function(){
                avatarPositionX = avatarPositionX + 50;
              }, 240);
              setTimeout(function(){
                avatarPositionX = avatarPositionX + 20;
              }, 300);
              setTimeout(function(){
                avatarPositionX = avatarPositionX + 20;
              }, 330);
              setTimeout(function(){
                avatarPositionX = avatarPositionX + 10;
              }, 370);
              setTimeout(function(){
                avatarPositionX = avatarPositionX + 10;
              }, 410);
              setTimeout(function(){
                avatarPositionX = avatarPositionX + 10;
              }, 450);
              setTimeout(function(){
                avatarPositionX = avatarPositionX + 10;
              }, 480);
              setTimeout(function(){
                avatarPositionX = avatarPositionX + 10;
              }, 500);
            }

          } else if (map[76] && map[16]){
            if (currentEnergy2 >= 200 && superSayain == false && vegetaDead == false){
              if (ssjVegetaText == false){
                ssjVegetaTalk();
              }

              transformAnimation();
              $(function(){
                $("#audio").attr("src", "https://s3.amazonaws.com/frieza-game-dev/sounds/music/vegetaTheme.mp3")
              });
              ssjVegetaAudio.play()

            }
          } else if (map[76]){
            if (currentHealth <= 0){
              console.log("you're dead")
            } else {
              if (gameStarted){
                energyIncrease();
                powerUp = true;
              }

            }
          } else if (map[75]){
            if (currentEnergy <= 0 || currentHealth <= 0){
              console.log("out of energy")
            } else {
              fireKiBlast();
              firingAnimation();
              energyDecrease();
            }
          }
      }
      // console.log(e.keyCode)

  })

  window.addEventListener("keyup", checkKeyPress, false);
  function checkKeyPress(e){
    if (e.keyCode == "87"){
      map[e.keyCode] = false;
    } else if (e.keyCode == "83"){
      map[e.keyCode] = false;
    } else if (e.keyCode == "39"){
      map[e.keyCode] = false;
    } else if (e.keyCode == "68"){
      map[e.keyCode] = false;
    } else if (e.keyCode == "65"){
      map[e.keyCode] = false;
    } else if (e.keyCode == "32"){
      map[e.keyCode] = false;
    } else if (e.keyCode == "76"){
      map[e.keyCode] = false;
      powerUp = false;
    } else if (e.keyCode == "75"){
      map[e.keyCode] = false;
    } else if (e.keyCode == "16"){
      map[e.keyCode] = false;
    }
    // console.log(e.keyCode)
  }





  function kiBlast(){
    kiBlastIncrement = 0;
    kiPosition = []
    kiPosition.push(avatarPositionY)
    kiBlastSound.play();
    // gameCanvas.getContext("2d").drawImage(kiBlastImage, avatarPositionX + 10, avatarPositionY)
        if (intervalId){
              clearInterval(intervalId)
        }
        intervalId = setInterval(movingKiBlast, 10);

  }


  function movingKiBlast(){
    var gameCanvas = document.getElementById("gameCanvas");
    var friezaBarrier = document.getElementById("friezaHealthBar");
    gameCanvas.getContext("2d").drawImage(kiBlastImage, avatarPositionX + kiBlastIncrement, kiPosition[0] - 20);
    var kiBlastPositionX = avatarPositionX + kiBlastIncrement;
    var kiBlastPositionY = kiPosition[0] - 20;
    if ( ( (kiBlastPositionX < enemyXPosition[0] && enemyXPosition[0] < kiBlastPositionX + 50) || (enemyXPosition[0] < kiBlastPositionX && kiBlastPositionX < enemyXPosition[0] + enemyWidth)) && ((kiBlastPositionY < enemyYPosition[0] && enemyYPosition[0] < kiBlastPositionY + 170) || (enemyYPosition[0] < kiBlastPositionY && kiBlastPositionY < enemyYPosition[0] + (enemyHeight * .80)))){
      // var shieldText = document.getElementById("shieldDownText");
      gameCanvas.getContext("2d").drawImage(friezaDamaged, enemyXPosition[0], enemyYPosition[0], enemyWidth, enemyHeight);

      if (friezaShieldDown){
        friezaHit1.play();
      } else {
          friezaHit2.play();
      }

      if (friezaShield <= 0){
        friezaShield = 0;
        friezaShieldDown = true;
        // shieldText.innerHTML = "FRIEZA'S SHIELDS ARE DOWN!"


      } else {
        // shieldText.innerHTML = ""
        friezaShield = friezaShield - 1;
      }
      friezaBarrier.style.height= friezaShield + "px";
      if (friezaShieldDown){
        function damageFrieza(){
          friezaHp = document.getElementById("friezaHealthText");
          if (currentFriezaHealthPoints == 0){
            console.log("frieza dead!")
            currentFriezaHealthPoints = 0;
          } else {
            currentFriezaHealthPoints = currentFriezaHealthPoints - 20;
          }
          friezaHp.innerHTML = "<span style=color:red>FRIEZA</span>" + " " + currentFriezaHealthPoints + "/" + friezaHealthPoints
        }
        damageFrieza();
      }
      if (friezaShield <= 0){
        setTimeout(function(){
          // friezaBarrier.style.height= "350px";
          if (friezaShield <= 0){
            clearInterval(friezaInterval)
            friezaInterval = setInterval(friezaShieldRecoverAnimation, 20);
          }
          function friezaShieldRecoverAnimation(){
            if (friezaShield == 350){
              friezaShieldDown = false;
              clearInterval(friezaInterval)
              return;
            } else {
              if (friezaShield >= 350){
                friezaShield = 350;
                friezaShieldDown = false;
                clearInterval(friezaInterval)
              }
              friezaShield = friezaShield + 5;
              friezaShieldHeal.play();
              friezaBarrier.style.height= friezaShield +"px";
            }
          }

        }, 10000);

      }
    }
    kiBlastIncrement = kiBlastIncrement + 20;
  }

  $("#menuButton").click(function(){
    menuSound.play();
  });
  function fireKiBlast(){
    firing = true;
    kiBlastSound.play();
    blastPositionsX.push(avatarPositionX + 20);
    blastPositionsY.push(avatarPositionY - 20);
    setTimeout(function(){
      firing = false;
    }, 200);
  }
  function firingAnimation(){
    nowFiring = true;
    setTimeout(function(){
      firing = 1;
      if (superSayain){
        avatarImageDamaged.src = "./images/SSJvegetaBlast2Damaged.png"
        avatarImageDamaged2.src = "./images/SSJvegetaBlast3Damaged.png"
      } else {
        avatarImageDamaged.src = "./images/vegetaBlast2Damaged.png"
        avatarImageDamaged2.src = "./images/vegetaBlast3Damaged.png"
      }
    }, 20);
    setTimeout(function(){
      firing = 2;
      if (superSayain){
        avatarImageDamaged.src = "./images/SSJvegetaBlast3Damaged.png"
        avatarImageDamaged2.src = "./images/SSJvegetaBlast4Damaged.png"
      } else {
        avatarImageDamaged.src = "./images/vegetaBlast3Damaged.png"
        avatarImageDamaged2.src = "./images/vegetaBlast4Damaged.png"
      }
    }, 70);
    setTimeout(function(){
      firing = 3;
      if (superSayain){
        avatarImageDamaged.src = "./images/SSJvegetaBlast4Damaged.png"
        avatarImageDamaged2.src = "./images/SSJvegetaBlast5Damaged.png"
      } else {
        avatarImageDamaged.src = "./images/vegetaBlast4Damaged.png"
        avatarImageDamaged2.src = "./images/vegetaBlastDamaged.png"
      }
    }, 120);
    setTimeout(function(){
      firing = 4;
      if (superSayain){
        avatarImageDamaged.src = "./images/SSJvegetaBlastDamaged.png"
        avatarImageDamaged2.src = "./images/SSJvegetaBlast5Damaged.png"
      } else {
        avatarImageDamaged.src = "./images/vegetaBlast5Damaged.png"
        avatarImageDamaged2.src = "./images/vegetaBlastDamaged.png"
      }
    }, 150);
    setTimeout(function(){
      firing = 5;
      if (superSayain){
        avatarImageDamaged.src = "./images/SSJvegetaBlastDamaged.png"
        avatarImageDamaged2.src = "./images/SSJvegetaBlastDamaged.png"
      } else {
        avatarImageDamaged.src = "./images/vegetaBlastDamaged.png"
        avatarImageDamaged2.src = "./images/vegetaBlastDamaged.png"
      }
    }, 200);
    setTimeout(function(){
      firing = 0;
      if (superSayain){
        avatarImageDamaged.src = "./images/SSJvegetaDamaged.png"
        avatarImageDamaged2.src = "./images/SSJvegetaDamaged2.png"
      } else {
        avatarImageDamaged.src = "./images/vegetaNormalDamaged.png"
        avatarImageDamaged2.src = "./images/vegetaNormalDamaged2.png"
      }
      nowFiring = false;
    }, 240);
  }

});
var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    textInterval = setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}
function energyDecrease(){
  if (currentEnergy <= 0){
    currentEnergy = 0
  } else if (currentEnergy <= 100 && charged == false){
    currentEnergy = currentEnergy - 2
  } else if (currentEnergy >= 100 && charged && currentEnergy2 > 0){
    currentEnergy2 = currentEnergy2 - 2
  } else if (currentEnergy2 <= 0){
    charged = false
    currentEnergy2 = 0
    jQuery("#energyBar2").css("display", "none")
    jQuery("#energyBar").css("display", "block")
  }
  energyBar.innerHTML = "ENERGY " + currentEnergy;
  energyBar.style.width= currentEnergy * 4 + "px";
  energyBar2.innerHTML = "SUPER ENERGY " + currentEnergy2;
  energyBar2.style.width= currentEnergy2 * 1 + "px";
}
function energyIncrease(){
  var gameCanvas = document.getElementById("gameCanvas");
  if (currentEnergy >= 100 && currentEnergy2 <= 500){
    currentEnergy = 100
    charged = true;
    energyBar.style.width = 400 + "px"
    jQuery("#energyBar2").css("display", "block");
    jQuery("#energyBar").css("display", "none");
    currentEnergy2 = currentEnergy2 + 1
  } else if (currentEnergy2 <= 0) {
    charged = false;
    currentEnergy = currentEnergy + 2
    jQuery("#energyBar2").css("display", "none");
    jQuery("#energyBar").css("display", "block");
  } else if (currentEnergy2 >= 500){
    currentEnergy2 = 500
  }
  powerUpAudio.play();
  energyBar.innerHTML = "ENERGY " + currentEnergy;
  energyBar.style.width= currentEnergy * 4 + "px";
  energyBar2.innerHTML = "SUPER ENERGY " + currentEnergy2
  energyBar2.style.width= currentEnergy2 * 1 + "px";
  var ssjOffsetX = 0
  if (superSayain){
    ssjOffsetX = 20
  }
  gameCanvas.getContext("2d").drawImage(powerUpImage, avatarPositionX + ssjOffsetX, avatarPositionY)
}

function vegetaHit(){
  gameCanvas = document.getElementById("gameCanvas");
  var hp = document.getElementById("hpBar");
  hitSound.play();
  gameCanvas.getContext("2d").drawImage(avatarImageDamaged, avatarPositionX, avatarPositionY, avatarWidth - ssjWidthOffset, avatarHeight);
  setTimeout(function(){
    gameCanvas.getContext("2d").drawImage(avatarImageDamaged2, avatarPositionX + 2, avatarPositionY, avatarWidth - ssjWidthOffset, avatarHeight);
  }, 100);
  currentHealth = currentHealth - 10;
  healthPoints = healthPoints - 10;
  hp.style.width= currentHealth * hpBarOffset + "px";
  if (healthPoints <= 0){
    healthPoints = 0
    vegetaDead = true;
    hitSound2.play();
    setTimeout(function(){
      friezaVictoryAudio.play()
    }, 1000);
    deathAnimation = function(){
      var gameCanvas = document.getElementById("gameCanvas");
      avatarPositionY = avatarPositionY + 5;
      gameCanvas.getContext("2d").drawImage(vegetaDeadImage, avatarPositionX, avatarPositionY, 70, 100);
    }
    setInterval(deathAnimation, 3);
  } else if (healthPoints < totalHealth && friezaCommentPlayed == false){
    friezaCommentPlayed = true;
    friezaComment.play();
    if (superSayain){
      portraitPicture.src = "./images/ssjVegetaPortrait.png"
    } else {
      portraitPicture.src="./images/vegetaPortrait.png";
    }

    $(function(){
      $("#portrait").fadeToggle("slow");
      $("#portraitPicture").fadeToggle("slow");
      jQuery('#portrait').html('');
      clearInterval(textInterval);
      showText('#portrait', vegeta_comment1, 0, 40);
      setTimeout(function(){
        jQuery('#portrait').html('');
        showText('#portrait', vegeta_comment2, 0, 30);
      }, 6000);
      setTimeout(function(){
        portraitPicture.src="./images/friezaTorso.png";
        jQuery('#portrait').html('');
        showText('#portrait', frieza_comment1, 0, 42);
        setTimeout(function(){
          setTimeout(function(){
            $("#portrait").fadeToggle("slow");
            $("#portraitPicture").fadeToggle("slow");
          }, 5000);
          jQuery('#portrait').html('');
          clearInterval(textInterval);
          showText('#portrait', frieza_comment2, 0, 40);
        }, 3500);
      }, 8000);
    });
    // healthPoints = healthPoints - 10;
  } else {
  // healthPoints = healthPoints - 10;
  }
  hp.innerHTML = "HEALTH " + healthPoints + "/" + totalHealth;
}

function vegetaHeal(){
  gameCanvas = document.getElementById("gameCanvas");
  var hp = document.getElementById("hpBar");
  currentHealth = currentHealth + 50;
  hp.style.width= currentHealth * hpBarOffset + "px";
  healthPoints = healthPoints + 50;
  hp.innerHTML = "HEALTH " + healthPoints + "/" + totalHealth;
  if (charged){
    currentEnergy2 = currentEnergy2 + 25
    energyBar2.innerHTML = "SUPER ENERGY " + currentEnergy2
    energyBar2.style.width= currentEnergy2 + "px"
  }
  if (currentEnergy + 50 <= 100){
    currentEnergy = currentEnergy + 50;
    energyBar.innerHTML = "Energy " + currentEnergy
    energyBar.style.width= currentEnergy + "px"
  } else if (currentEnergy + 50 > 100 && charged == false){
    currentEnergy = 100
    charged = true;
    currentEnergy2 = currentEnergy2 + (currentEnergy + 50 - 100)
    jQuery("#energyBar2").css("display", "block")
    jQuery("#energyBar").css("display", "none")
    energyBar2.innerHTML = "SUPER ENERGY " + currentEnergy2
    energyBar2.style.width= currentEnergy2 + "px"
  }


}
function ginyuDeathAnimation(){
  ginyuPositionY = ginyuPositionY + 4
  ginyuImage.src = "./images/ginyuDamaged2.png"
}
function friezaDeathAnimation(){
  gameCanvas = document.getElementById("gameCanvas")
  enemyImage.src = "./images/goldenFriezaDead.png"
  if (friezaHeadPositionY < 500){
    enemyXPosition[0] = 600
    enemyYPosition[0] = avatarPositionY
  }
  gameCanvas.getContext("2d").drawImage(friezaHeadImage, friezaHeadPositionX, friezaHeadPositionY, friezaHeadWidth, friezaHeadHeight)
  gameCanvas.getContext("2d").drawImage(enemyImage, enemyXPosition[0], enemyYPosition[0], enemyWidth, enemyHeight)
  friezaHeadPositionX = friezaHeadPositionX + 2.2
  if (friezaHeadPositionY < 10){
    headInc = 2
  }
  friezaHeadPositionY = friezaHeadPositionY + headInc
  if (friezaHeadPositionY > 500){
    enemyYPosition[0] = 200 + bodyInc
    enemyXPosition[0] = 600
    bodyInc += 1
  }
}

function transformAnimation(){
  transforming = true;
  setTimeout(function(){
    transform = 1
  }, 20);
  setTimeout(function(){
    transform = 2
  }, 120);
  setTimeout(function(){
    transform = 3
  }, 200);
  setTimeout(function(){
    transform = 4
  }, 280);
  setTimeout(function(){
    transform = 5
  }, 370);
  setTimeout(function(){
    transform = 6
  }, 420);
  setTimeout(function(){
    transform = 7
  }, 520);
  setTimeout(function(){
    transform = 8
  }, 630);
  setTimeout(function(){
    transform = 9
  }, 780);
  setTimeout(function(){
    transform = 10
  }, 980);
  setTimeout(function(){
    transform = 11
  }, 1080);
  setTimeout(function(){
    transform = 12
  }, 1180);
  setTimeout(function(){
    transform = 13
  }, 1280);
  setTimeout(function(){
    transform = 14
  }, 1380);
  setTimeout(function(){
    transform = 15
  }, 1480);
  setTimeout(function(){
    transform = 16
  }, 1580);
  setTimeout(function(){
    transform = 17
  }, 1680);
  setTimeout(function(){
    transform = 18
  }, 1780);
  setTimeout(function(){
    transform = 19
  }, 1880);
  setTimeout(function(){
    transform = 20
  }, 1980);
  setTimeout(function(){
    transform = 21
  }, 2080);
  setTimeout(function(){
    transforming = false;
    superSayain = true;
    avatarImage.src = "./images/ssjVegeta.png"
    kiBlastImage.src = "./images/ssjBlast.png"
    currentHealth = 2000;
    healthPoints = 2000;
    totalHealth = 2000;
    hpBarOffset = .2
    avatarWidth = 150;
  }, 5030);
}
function ssjVegetaTalk(){
  setTimeout(function(){
    ssjVegetaAudio2.play()
    portraitPicture.src = "http://img09.deviantart.net/62dc/i/2016/116/3/f/super_saiyan_2_vegeta__budokai_3__alt_palette__2_by_rayzorblade189-da0azch.png";
    $("#portrait").fadeToggle("slow");
    $("#portraitPicture").fadeToggle("slow");
    jQuery('#portrait').html('');
    clearInterval(textInterval);
    showText('#portrait', ssjVegetaComment, 0, 40);
    setTimeout(function(){
      $("#portrait").fadeToggle("slow");
      $("#portraitPicture").fadeToggle("slow");
      jQuery('#portrait').html('');
      clearInterval(textInterval);
    }, 5000);
  }, 8000);
  ssjVegetaText = true;
}
var tip = 0
function gotIt(){
  if (tip == 0){
    jQuery("#tip img").attr("src", "./images/movementTip2.png")
    jQuery("#tipP1").text("Ki Blast, power-up, and dash")
    jQuery("#tipP2").text("")
    tip += 1;
  } else if (tip == 1){
    jQuery("#tip img").attr("src", "./images/movementTip3.png")
    jQuery("#tipP1").text("Dodge the enemies")
    jQuery("#tipP2").text("")
    tip += 1;
  } else if (tip == 2){
    jQuery("#tip img").attr("src", "./images/vegetaPowerUpGif.gif")
    jQuery("#tipP1").text("Shift + L")
    jQuery("#tipP2").text("Charge Super Energy up to 200 to transform")
    tip += 1
  } else if (tip == 3){
    jQuery("#tip").css("display", "none")
    jQuery("#tipButton").css("display", "none")
    jQuery("#gameStart").css("display", "block")
  }

}
