(()=>{"use strict";function e(){modalStore.style.display="none",projectStore.style.display="none"}function t(){document.getElementById("modalStore").style.display="block",document.getElementsByClassName("close-button")[0].addEventListener("click",e),window.onclick=function(e){e.target==modalStore&&(modalStore.style.display="none")}}function n(){return{taskTitle:document.getElementById("title").value,taskDesc:document.getElementById("desc").value,priority:document.getElementById("priority").value,dueDate:document.getElementById("due-date").value,taskProject:document.getElementById("project").value}}let o=n();document.getElementById("inboxBtn").onclick=function(){document.getElementById("mainHead").innerHTML="Inbox",document.getElementById("inbox").style.display="block"},document.getElementById("todayBtn").onclick=function(){document.getElementById("mainHead").innerHTML="Today",document.getElementById("inbox").style.display="none"},document.getElementById("weekBtn").onclick=function(){document.getElementById("mainHead").innerHTML="Week",document.getElementById("inbox").style.display="none"},document.getElementById("project-submit").onclick=function(){document.getElementById("project-submit").addEventListener("click",function(){var e,t,n,o,d,l=document.getElementById("project-list"),c=document.createElement("li"),m=document.getElementById("pName").value;c.innerHTML=m,l.appendChild(c),e=document.getElementById("project-list").getElementsByTagName("li"),t=Array.from(e),n=document.getElementById("project"),o=t[t.length-1].innerText,(d=document.createElement("option")).textContent=o,d.value=o,n.appendChild(d)}()),projectStore.style.display="none"},document.getElementById("modal-submit").onclick=()=>{n(),function(){var e=document.getElementById("taskList"),t=document.createElement("li");t.textContent=o.taskTitle;var n=document.createElement("input");n.setAttribute("type","checkbox");var d=document.createElement("span");d.setAttribute("class","material-icons taskControl"),d.textContent="delete";var l=document.createElement("span");l.setAttribute("class","material-icons taskControl"),l.textContent="edit";var c=document.createElement("div");c.setAttribute("class","taskControl"),c.textContent=o.dueDate,t.appendChild(n),t.appendChild(d),t.appendChild(l),t.appendChild(c),e.appendChild(t)}(),modalStore.style.display="none"},document.getElementById("open-modal").addEventListener("click",t),document.getElementById("addListItem").addEventListener("click",t),document.getElementById("addProject").addEventListener("click",(function(){document.getElementById("projectStore").style.display="block",document.getElementsByClassName("close-button")[1].addEventListener("click",e),window.onclick=function(e){e.target==projectStore&&(projectStore.style.display="none")}}))})();