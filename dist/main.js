(()=>{"use strict";function e(){modalStore.style.display="none",projectStore.style.display="none"}var t;(t=document.createElement("div")).setAttribute("id","mainGrid"),document.getElementById("mainDisplay").appendChild(t),document.getElementById("inboxBtn").onclick=function(){document.getElementById("mainHead").innerHTML="Inbox"},document.getElementById("todayBtn").onclick=function(){document.getElementById("mainHead").innerHTML="Today"},document.getElementById("weekBtn").onclick=function(){document.getElementById("mainHead").innerHTML="Week"},document.getElementById("open-modal").addEventListener("click",(function(){document.getElementById("modalStore").style.display="block",document.getElementsByClassName("close-button")[0].addEventListener("click",e),window.onclick=function(e){e.target==modalStore&&(modalStore.style.display="none")}})),document.getElementById("addProject").addEventListener("click",(function(){document.getElementById("projectStore").style.display="block",document.getElementsByClassName("close-button")[1].addEventListener("click",e),window.onclick=function(e){e.target==projectStore&&(projectStore.style.display="none")}}))})();