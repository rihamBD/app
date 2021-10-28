const codes = document.getElementById('codes');
const play = document.getElementById('play');
const remove = document.getElementById('remove');
const result = document.getElementById('result');


play.addEventListener('click', (e)=>{
      result.innerHTML = codes.value;
      localStorage.setItem('RESULT', codes.value);
});

remove.addEventListener('click', e=>{
    result.innerHTML = "";
});

/* windows.addEventListener('load', e=>{
    codes.value = localStorage.getItem('RESULT');
}); */
onload = ()=>{
    codes.value = localStorage.getItem('RESULT');
}
