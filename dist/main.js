(()=>{"use strict";function e(){modalStore.style.display="none",projectStore.style.display="none"}function t(){document.getElementById("modalStore").style.display="block",document.getElementsByClassName("close-button")[0].addEventListener("click",e),window.onclick=function(e){e.target==modalStore&&(modalStore.style.display="none")}}function n(){return[document.getElementById("title").value,document.getElementById("desc").value,document.getElementById("priority").value,document.getElementById("due-date").value,document.getElementById("project").value]}function l(){var e,t=document.getElementsByClassName("collapsible");for(e=0;e<t.length;e++)t[e].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))}l(),document.getElementById("inboxBtn").onclick=function(){document.getElementById("mainHead").innerHTML="Inbox",document.getElementById("inbox").style.display="flex"},document.getElementById("todayBtn").onclick=function(){document.getElementById("mainHead").innerHTML="Today",document.getElementById("inbox").style.display="none"},document.getElementById("weekBtn").onclick=function(){document.getElementById("mainHead").innerHTML="Week",document.getElementById("inbox").style.display="none"},document.getElementById("project-submit").onclick=function(){document.getElementById("project-submit").addEventListener("click",function(){var e,t,n,l,d,o=document.getElementById("project-list"),c=document.createElement("li"),i=document.getElementById("pName").value;c.innerHTML=i,o.appendChild(c),e=document.getElementById("project-list").getElementsByTagName("li"),t=Array.from(e),n=document.getElementById("project"),l=t[t.length-1].innerText,(d=document.createElement("option")).textContent=l,d.value=l,n.appendChild(d)}()),projectStore.style.display="none"},document.getElementById("modal-submit").onclick=()=>{n(),function(){var e=n(),t=document.getElementById("taskList"),l=document.createElement("li"),d=document.createElement("div");d.setAttribute("class","left-task");var o=document.createElement("div");o.setAttribute("class","right-task");var c=document.createElement("input");c.setAttribute("type","checkbox");var i=document.createElement("div");i.setAttribute("class","title collapsible"),i.innerHTML=e[0];var a=document.createElement("span");a.setAttribute("class","material-icons taskControl"),a.textContent="delete";var m=document.createElement("span");m.setAttribute("class","material-icons taskControl"),m.textContent="edit";var s=document.createElement("div");s.setAttribute("class","taskControl"),s.textContent=e[3],d.appendChild(c),d.appendChild(i),o.appendChild(s),o.appendChild(m),o.appendChild(a),l.appendChild(d),l.appendChild(o),t.appendChild(l)}(),function(){var e=n(),t=document.createElement("div");t.setAttribute("class","task-content");var d=document.createElement("p");d.innerHTML=e[1],t.appendChild(d);var o=document.getElementsByClassName("left-task");o[o.length-1].appendChild(t),l()}(),modalStore.style.display="none"},document.getElementById("open-modal").addEventListener("click",t),document.getElementById("addListItem").addEventListener("click",t),document.getElementById("addProject").addEventListener("click",(function(){document.getElementById("projectStore").style.display="block",document.getElementsByClassName("close-button")[1].addEventListener("click",e),window.onclick=function(e){e.target==projectStore&&(projectStore.style.display="none")}}))})();