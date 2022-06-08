const { create } = require("./attacker");

exports.Start = function Start(){
    var title = document.getElementById('title');
    title.innerHTML = 'App';    
}
exports.myFunction = function(){
    window.open('https://twitter.com/AccountAmini')
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
exports.SetupForm  = function(){
    var form = document.getElementById('form');
    form.addEventListener('submit', function(e){
       e.preventDefault();
       var btn = document.getElementById('btn');
         btn.innerHTML = '<span class="absolute left-0 inset-y-0 flex items-center pl-3"> <!-- Heroicon name: solid/lock-closed --> <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" /> </svg> </span>Started...(CHECK THE SERVER!)';
         btn.disabled = true; 
         var ip = document.getElementById('email-address');
         if (ip.value == "play.ghalbeyou.ir"){
            alert("You can't use this server!");
            window.location.reload();
            return;
         }
         var port = document.getElementById('password');
         var version = document.getElementById('version');
         // let second = 1;
         var inve = setInterval(() => {
            create(ip.value, port.value, version.value);
         }, 300);
         setTimeout(() => {
            clearInterval(inve);

            btn.innerHTML = '<span class="absolute left-0 inset-y-0 flex items-center pl-3"> <!-- Heroicon name: solid/lock-closed --> <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" /> </svg> </span>Attack';
            btn.disabled = false;
            window.location.reload()
         }, 60000);
    });
}
