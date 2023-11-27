// advance dom manipulations 
/*let abc = document.getElementById()
abc.addEventListener('keydown',function(){
  console.log("hello")
}) 
audio 
 document.getElementById().play()
*/


class Player {
  constructor(health, heal) {
    this.health = health
    this.heal = heal
    // why did it show me error bcoz dom element takes time to display but class constructor gets intitlized so it did not find dom element that is why
    setTimeout(() => {
      let p1Score = document.getElementById('p1_score')
      let p2Score = document.getElementById('p2_score')
      p1Score.innerText = health
      p2Score.innerText = health
    }, 100)

  }
  compare(p1_score, p2_score) {
    let popup = document.getElementById('result_box')
    let winner_name = document.getElementById('winner')
    let winner_sound = document.getElementById('victory')
    popup.style.opacity = "1";
    popup.style.zIndex = "1000000";
    console.log(p1_score, p2_score)
    if (p1_score > p2_score) {
      winner_name.innerText = "LAKSHAY";
      localStore(p1_score, p2_score)
      
    } else {
      winner_name.innerText = "RAKESH";
       localStore(p1_score, p2_score)
    }
    victory.play()
  }
  fight_player1(random) {
    let p2Score = document.getElementById('p2_score')
    let score=Number(p2Score.innerText)
    if(score<0){
      console.log(score)
      this.compare(100,0)
    }
    p2Score.innerText=`${score+Number(random)}`
    
    
   
  }
  fight_player2(random) {
    let p1Score = document.getElementById('p1_score')
    let score=Number(p1Score.innerText)
    if(score<0){
      console.log(score)
      this.compare(0,100)
    }
    p1Score.innerText=`${score+Number(random)}`


  }

}
let john = new Player(100, 100)


exit = () => {
  let popup = document.getElementById('result_box')
  popup.style.zIndex = "0";
  popup.style.opacity = "0";
  let p1Score = document.getElementById('p1_score')
  let p2Score = document.getElementById('p2_score')
  setTimeout(()=>{ p1Score.innerText = 100
                 p2Score.innerText = 100},2000)
 
}
localStore=(p1,p2)=>{
  
  localStorage.setItem('p1score',`${p1}`)
  localStorage.setItem('p2score',`${p2}`)
  let p1history = document.getElementById('set_player1')
  let p2history = document.getElementById('set_player2')
   p1history.innerText=`${localStorage.getItem('p1score')}`
   p2history.innerText=`${localStorage.getItem('p2score')}`
  
  
}

automatic = () => {
  let arr = [Math.floor(Math.random() * 100), Math.floor(Math.random() * -5)]
  let ran = Math.floor(Math.random() * 2)
  john.compare(arr[ran], arr[1 - ran])
  let p1Score = document.getElementById('p1_score')
  let p2Score = document.getElementById('p2_score')
  p1Score.innerText = arr[ran]
  p2Score.innerText = arr[1 - ran]

}
document.addEventListener('keydown', function(e) {
  let ran = Math.ceil(Math.random() * 15)
  if (e.key == "p") {
    let p1_attack = document.getElementById('p1attack')
    p1_attack.play()
     john.fight_player1(-ran)

  } else if (e.key == "k") {
    let p1_heal = document.getElementById('p1heal')
    p1_heal.play()
     john.fight_player1(ran)
    

  }
})

document.addEventListener('keydown', function(e) {
  let ran = Math.ceil(Math.random() * 15)
  let p2Score = document.getElementById('p2_score')
  if (e.key == "w") {
    let p2_attack = document.getElementById('p2attack')
    p2_attack.play()
    john.fight_player2(-ran)
    

  } else if (e.key == "s") {
    let p2_heal = document.getElementById('p2heal')
    p2_heal.play()
     john.fight_player2(ran)

  }
})