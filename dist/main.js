(()=>{"use strict";function e(){modalStore.style.display="none"}var t;document.addEventListener("DOMContentLoaded",(function(){!function(){var e=document.createElement("div");e.setAttribute("class","modal-content");var t=document.createElement("div");t.setAttribute("class","modal-header"),t.innerHTML="Add Task";var n=document.createElement("span");n.setAttribute("class","close-button"),n.innerHTML="&times;";var d=document.createElement("div");d.setAttribute("class","modal-footer");var i=function(){var e=document.body,t=document.createElement("div");return t.setAttribute("id","modalStore"),t.setAttribute("class","modal"),e.appendChild(t),t}(),a=function(){var e=document.createElement("div");e.setAttribute("class","modal-body");var t=document.createElement("div");t.setAttribute("class","columns"),t.setAttribute("id","col-one");var n=document.createElement("div");n.setAttribute("class","columns"),n.setAttribute("id","col-two");var d=document.createElement("p");d.setAttribute("class","column-text"),d.innerHTML="some text";var i=document.createElement("p");return i.setAttribute("class","column-text"),i.innerHTML="some text",t.appendChild(d),n.appendChild(i),e.appendChild(t),e.appendChild(n),e}();e.appendChild(t),t.appendChild(n),e.appendChild(a),e.appendChild(d),i.appendChild(e)}()})),document.getElementById("addProject").addEventListener("click",(function(){modalStore.style.display="block",document.getElementsByClassName("close-button")[0].addEventListener("click",e),window.onclick=function(e){e.target==modalStore&&(modalStore.style.display="none")}})),document.getElementById("inboxBtn").addEventListener("click",(function(){mainDisplay=document.getElementById("mainDisplay"),mainDisplay.innerHTML="Inbox"})),document.getElementById("todayBtn").addEventListener("click",(function(){mainDisplay=document.getElementById("mainDisplay"),mainDisplay.innerHTML="Today"})),document.getElementById("weekBtn").addEventListener("click",(function(){mainDisplay=document.getElementById("mainDisplay"),mainDisplay.innerHTML="Week"})),(t=document.createElement("div")).setAttribute("id","mainGrid"),document.getElementById("mainDisplay").appendChild(t),t.textContent="test text"})();