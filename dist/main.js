(()=>{"use strict";function e(){modalStore.style.display="none",projectStore.style.display="none",editModal.style.display="none"}function t(){document.getElementById("modalStore").style.display="block",document.getElementsByClassName("close-button")[0].addEventListener("click",e),window.onclick=function(e){e.target==modalStore&&(modalStore.style.display="none")}}function n(){document.getElementById("editModal").style.display="block",document.getElementsByClassName("close-button")[2].addEventListener("click",e),window.onclick=function(e){e.target==editModal&&(modalStore.style.display="none")}}function l(){return[document.getElementById("title").value,document.getElementById("desc").value,document.getElementById("priority").value,document.getElementById("due-date").value,document.getElementById("project").value]}function d(){var e,t=document.getElementsByClassName("delTask");for(e=0;e<t.length;e++)t[e].addEventListener("click",(function(e){e.target.parentNode.parentNode.remove()}),!1)}var o;d(),function(){var e,t=document.getElementsByClassName("collapsible");for(e=0;e<t.length;e++)t[e].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))}(),document.getElementById("inboxBtn").onclick=function(){document.getElementById("mainHead").innerHTML="Inbox",document.getElementById("inbox").style.display="flex"},document.getElementById("todayBtn").onclick=function(){document.getElementById("mainHead").innerHTML="Today",document.getElementById("inbox").style.display="none"},document.getElementById("weekBtn").onclick=function(){document.getElementById("mainHead").innerHTML="Week",document.getElementById("inbox").style.display="none"},document.getElementById("project-submit").onclick=function(){document.getElementById("project-submit").addEventListener("click",function(){var e,t,n,l,d,o=document.getElementById("project-list"),c=document.createElement("li"),i=document.getElementById("pName").value;c.innerHTML=i,o.appendChild(c),e=document.getElementById("project-list").getElementsByTagName("li"),t=Array.from(e),n=document.getElementById("project"),l=t[t.length-1].innerText,(d=document.createElement("option")).textContent=l,d.value=l,n.appendChild(d)}()),projectStore.style.display="none"},document.getElementById("modal-submit").onclick=()=>{l(),function(){var e=l(),t=document.getElementById("taskList"),d=document.createElement("li"),o=document.createElement("div");o.setAttribute("class","left-task");var c=document.createElement("div");c.setAttribute("class","right-task");var i=document.createElement("input");i.setAttribute("type","checkbox");var a=document.createElement("div");a.setAttribute("class","title collapsible"),a.innerHTML=e[0],a.addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}));var s=document.createElement("span");s.setAttribute("class","material-icons taskControl delTask"),s.textContent="delete";var m=document.createElement("span");m.setAttribute("class","material-icons taskControl edit"),m.textContent="edit",m.addEventListener("click",(function(){this.classList.toggle("active"),n()}));var r=document.createElement("div");r.setAttribute("class","taskControl"),r.textContent=e[3],o.appendChild(i),o.appendChild(a),c.appendChild(r),c.appendChild(m),c.appendChild(s),d.appendChild(o),d.appendChild(c),t.appendChild(d)}(),function(){var e=l(),t=document.createElement("div");t.setAttribute("class","task-content");var n=document.createElement("p");n.innerHTML=e[1],t.appendChild(n);var d=document.getElementsByClassName("left-task");d[d.length-1].appendChild(t)}(),modalStore.style.display="none",d()},document.getElementById("open-modal").addEventListener("click",t),document.getElementById("addListItem").addEventListener("click",t),document.getElementById("addProject").addEventListener("click",(function(){document.getElementById("projectStore").style.display="block",document.getElementsByClassName("close-button")[1].addEventListener("click",e),window.onclick=function(e){e.target==projectStore&&(projectStore.style.display="none")}})),o=document.getElementsByClassName("edit"),Array.from(o).forEach((function(e){e.addEventListener("click",n,!1)}))})();