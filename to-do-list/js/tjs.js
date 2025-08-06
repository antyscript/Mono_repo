

let table = document.getElementById('tbody');
let input = document.getElementById('input');
let buttonadd = document.getElementById('buttonadd')
var box = document.querySelectorAll('.box');
var noms = document.querySelectorAll('.nom');
let data = []


let datas = localStorage.getItem('datas')
if (datas){
  datas = JSON.parse(datas)
  datas.forEach(addi)
}

table.addEventListener('change', function(e) {
  if (e.target.classList.contains('box')) {
    let tr = e.target.closest('tr');
    let nom = tr.querySelector('.nom');
    if (e.target.checked) {
      nom.style.cssText = 'text-decoration: line-through #666; color:#666;';
    } else {
      nom.style.cssText = 'text-decoration: none;';
    }
  }
});



table.addEventListener('click', function(e) {
  if (e.target.classList.contains('del')) {
    let tr = e.target.closest('tr');
    let nomText = tr.querySelector('.nom').textContent;
    tr.remove();
    data = data.filter(item => item !== nomText);
    localStorage.setItem('datas', JSON.stringify(data));
  }
});

let correct = null

table.addEventListener('click', function(e){
  if (e.target.classList.contains('changet')){
    let tr = e.target.closest('tr');
    let nom = tr.querySelector('.nom');
    input.value = nom.textContent;
    correct = nom
    }
});



buttonadd.onclick = function(){
  if (correct){
    correct.textContent = input.value
    correct = null
    input.value = "";
    
  }else{
  addi(input.value);
  input.value = "";
 }
};




function addi(name){
  if (name.length < 1){return}
    table.insertAdjacentHTML('beforeend',
    `<tr>
    <td class="nom">${name}</td>
    <td><input type="checkbox" class="box"></td>
    <td><button class="changet">change</button></td>
    <td><button class="del">delete</button></td>
  </tr>
`);
     data.push(name);
     localStorage.setItem('datas', JSON.stringify(data))
  };





