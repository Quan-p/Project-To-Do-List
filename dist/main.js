(()=>{"use strict";function e(){modalStore.style.display="none",projectStore.style.display="none",editModal.style.display="none"}function t(){document.getElementById("modalStore").style.display="block",document.getElementsByClassName("close-button")[0].addEventListener("click",e),window.onclick=function(e){e.target==modalStore&&(modalStore.style.display="none")}}function n(){return[document.getElementById("title").value,document.getElementById("desc").value,document.getElementById("priority").value,document.getElementById("due-date").value,document.getElementById("project").value]}function l(e){var t,n,l;e=e||window.event,(t=e.target||e.srcElement)&&"P"===t.tagName.toUpperCase()&&(t.style.display="none",l=t.innerHTML,(n=document.createElement("input")).type="text",n.value=l,n.size=Math.max(l.length/4*3,4),t.parentNode.insertBefore(n,t),n.focus(),n.onblur=function(){t.parentNode.removeChild(n),t.innerHTML=""==n.value?"&nbsp;":n.value,t.style.display=""})}function o(){var e,t=document.getElementsByClassName("delTask");for(e=0;e<t.length;e++)t[e].addEventListener("click",(function(e){e.target.parentNode.parentNode.remove()}),!1)}var a;o(),function(){var e,t=document.getElementsByClassName("collapsible");for(e=0;e<t.length;e++)t[e].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))}(),document.getElementById("inboxBtn").onclick=function(){document.getElementById("mainHead").innerHTML="Inbox",document.getElementById("inbox").style.display="flex"},document.getElementById("project-submit").onclick=function(){var e,t,n,l,o,a,d,i;document.getElementById("project-submit").addEventListener("click",(a=document.getElementById("project-list"),d=document.createElement("li"),i=document.getElementById("pName").value,d.innerHTML=i,a.appendChild(d),e=document.getElementById("project-list").getElementsByTagName("li"),t=Array.from(e),n=document.getElementById("project"),l=t[t.length-1].innerText,(o=document.createElement("option")).textContent=l,o.value=l,void n.appendChild(o)),function(){var e=document.getElementById("project-list").getElementsByTagName("li"),t=[];for(let n=0;n<=e.length-1;n++)t.push(e[n].innerHTML);localStorage.setItem("projects",t)}()),projectStore.style.display="none",document.getElementById("pName").value=""},document.getElementById("modal-submit").onclick=()=>{n(),function(){var t=n(),l=document.getElementById("taskList"),o=document.createElement("li");o.setAttribute("class",t[4]);var a=document.createElement("div");a.setAttribute("class","left-task");var d=document.createElement("div");d.setAttribute("class","right-task");var i=document.createElement("input");i.setAttribute("type","checkbox");var c=document.createElement("div");c.setAttribute("class","title collapsible"),c.innerHTML=t[0],c.addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}));var s=document.createElement("span");s.setAttribute("class","material-icons taskControl delTask"),s.textContent="delete";var m=document.createElement("span");m.setAttribute("class","material-icons taskControl edit"),m.textContent="edit",m.addEventListener("click",(function(){this.classList.toggle("active"),document.getElementById("editModal").style.display="block",document.getElementsByClassName("close-button")[2].addEventListener("click",e),window.onclick=function(e){e.target==editModal&&(editModal.style.display="none")}}));var r=document.createElement("div");r.setAttribute("class","taskControl"),r.textContent=t[3],a.appendChild(i),a.appendChild(c),d.appendChild(r),d.appendChild(m),d.appendChild(s),o.appendChild(a),o.appendChild(d),l.appendChild(o),function(e){var t=n()[2];e.style.color="low"==t?"blue":"medium"==t?"green":"high"==t?"yellow":"red"}(o)}(),function(){var e=n(),t=document.createElement("div");t.setAttribute("class","task-content");var o=document.createElement("p");o.setAttribute("class","taskDesc"),o.innerHTML=e[1],o.addEventListener("click",(function(e){this.classList.toggle("active"),l(e)})),t.appendChild(o);var a=document.getElementsByClassName("left-task");a[a.length-1].appendChild(t)}(),modalStore.style.display="none",o(),document.getElementById("title").value="",document.getElementById("desc").value=""},document.getElementById("open-modal").addEventListener("click",t),document.getElementById("addListItem").addEventListener("click",t),document.getElementById("addProject").addEventListener("click",(function(){document.getElementById("projectStore").style.display="block",document.getElementsByClassName("close-button")[1].addEventListener("click",e),window.onclick=function(e){e.target==projectStore&&(projectStore.style.display="none")}})),a=document.getElementsByClassName("taskDesc"),Array.from(a).forEach((function(e){e.addEventListener("click",l,!1)}))})();