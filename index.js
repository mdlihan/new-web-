const option = document.getElementById("option");
const manu = document.getElementById("manu");

option.addEventListener("click", () => {
if(manu.className === 'hidden'){
    manu.classList.remove('hidden');
}else{
    manu.classList.add('hidden');
}
});