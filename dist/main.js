(()=>{"use strict";var e;document.getElementById("addProject").addEventListener("click",(function(){(function(){var e=document.createElement("div");e.setAttribute("class","modal-content");var t=document.createElement("span");t.setAttribute("class","close-button"),t.innerHTML="&times;";var n=document.createElement("div");n.setAttribute("class","columns"),n.setAttribute("id","col-one");var i=document.createElement("div");i.setAttribute("class","columns"),i.setAttribute("id","col-two");var d=document.createElement("p");d.setAttribute("class","textContent"),d.innerHTML="test";var a=function(){var e=document.body,t=document.createElement("div");return t.setAttribute("id","modalStore"),t.setAttribute("class","modal"),e.appendChild(t),t}();e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(d),a.appendChild(e)})(),modalStore.style.display="block"})),document.getElementById("inboxBtn").addEventListener("click",(function(){mainDisplay=document.getElementById("mainDisplay"),mainDisplay.innerHTML="Inbox"})),document.getElementById("todayBtn").addEventListener("click",(function(){mainDisplay=document.getElementById("mainDisplay"),mainDisplay.innerHTML="Today"})),document.getElementById("weekBtn").addEventListener("click",(function(){mainDisplay=document.getElementById("mainDisplay"),mainDisplay.innerHTML="Week"})),(e=document.createElement("div")).setAttribute("id","mainGrid"),document.getElementById("mainDisplay").appendChild(e),e.textContent="test text"})();