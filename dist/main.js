(()=>{"use strict";function e(){modalStore.style.display="none"}var t;(t=document.createElement("div")).setAttribute("id","mainGrid"),document.getElementById("mainDisplay").appendChild(t),t.textContent="test text",document.getElementById("inboxBtn").onclick=function(){document.getElementById("mainDisplay").innerHTML="Inbox"},document.getElementById("todayBtn").onclick=function(){document.getElementById("mainDisplay").innerHTML="Today"},document.getElementById("weekBtn").onclick=function(){document.getElementById("mainDisplay").innerHTML="Week"},document.getElementById("open-modal").addEventListener("click",(function(){document.getElementById("modalStore").style.display="block",document.getElementsByClassName("close-button")[0].addEventListener("click",e),window.onclick=function(e){e.target==modalStore&&(modalStore.style.display="none")}}))})();