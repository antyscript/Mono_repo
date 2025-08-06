let play = document.querySelectorAll('.play');
let result = document.querySelector('.result');
let rock = document.querySelector('.rock');
let win = document.querySelector('.win');
let lose = document.querySelector('.lose');
let draw = document.querySelector('.draw');
let sesiser = document.querySelector('.sesiser');
let paper = document.querySelector('.paper');
let random = document.querySelector('.random');
let player = null;
let option = ['✊', '✌','🤚'];
let op = option[Math.floor(Math.random()*3)] ;
result.innerHTML = 'chose any hand for play';

if (sessionStorage.getItem('draw')){
  draw.innerHTML = sessionStorage.getItem('draw');
}else{
  draw.innerHTML = '0'
}
if (sessionStorage.getItem('win')){
  win.innerHTML = sessionStorage.getItem('win');
}else{
  win.innerHTML = '0';
}
if (sessionStorage.getItem('lose')){
  lose.innerHTML = sessionStorage.getItem('lose');
}else{
  lose.innerHTML = '0'
}




play.forEach(function(btn) {
  btn.addEventListener('click', _ => {
    play.forEach(p => p.style.display = 'none');
    player = btn;
    btn.style.cssText = 'display: flex';
    
    random.innerHTML = op
    
    if (btn.innerHTML === op){
      result.innerHTML = 'draw !';
      draw.innerHTML = parseInt(draw.innerHTML) +1
    }else if (btn.innerHTML === '✊' && op === '🤚'){
      result.innerHTML = 'you lose !'
      lose.innerHTML = parseInt(lose.innerHTML) +1
    }else if (btn.innerHTML === '✊' && op === '✌'){
      result.innerHTML = 'you win !'
      win.innerHTML = parseInt(win.innerHTML) +1
    }else if (btn.innerHTML === '🤚' && op === '✊'){
      result.innerHTML = 'you win !'
      win.innerHTML = parseInt(win.innerHTML) +1
    }else if (btn.innerHTML === '🤚' && op === '✌'){
      result.innerHTML = 'you lose !'
      lose.innerHTML = parseInt(lose.innerHTML) +1
    }else if (btn.innerHTML === '✌' && op === '✊'){
      result.innerHTML = 'you lose !'
      lose.innerHTML = parseInt(lose.innerHTML) +1
    }else if (btn.innerHTML === '✌' && op === '🤚'){
      result.innerHTML = 'you win !'
      win.innerHTML = parseInt(win.innerHTML) +1
    };
    
     sessionStorage.setItem('draw', draw.innerHTML);
     sessionStorage.setItem('win', win.innerHTML);
     sessionStorage.setItem('lose', lose.innerHTML);
  
    setTimeout( _ => window.location.reload(), 500);
    
  });
});

function replay(){
  result.innerHTML = 'wait ...';
  setTimeout( _ => window.location.reload(), 500);
  draw.innerHTML = '0';
  win.innerHTML = '0';
  lose.innerHTML = '0';
  sessionStorage.clear();
}

