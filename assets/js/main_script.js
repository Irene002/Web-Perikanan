const loginBtn = document.getElementById('loginBtn');
const loginOverlay = document.getElementById('loginOverlay');
const closeBtn = document.getElementById('closeBtn');

loginBtn.onclick = function(){
    loginOverlay.style.display = 'block';
}

closeBtn.onclick = function(){
    loginOverlay.style.display = 'none';
}