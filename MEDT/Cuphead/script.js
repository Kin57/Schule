function discretize(e, t) { return e / t * t } window.addEventListener("DOMContentLoaded", function () { var e = document.getElementById("close"), t = document.getElementById("description"); e.addEventListener("click", function () { t.style.display = "none" }), document.getElementById("face").onload = function () { var e = document.getElementById("face"); window.face = e; var t = document.createElement("canvas"); t.width = e.width, t.height = e.height; var n = t.getContext("2d"); n.drawImage(e, 0, 0, e.width, e.height); for (var d = n.getImageData(0, 0, e.width, e.height).data, i = {}, o = 0; o < 8 * e.width; o += 4) { var a = "rgba(" + discretize(d[o], 1) + "," + discretize(d[o + 1], 1) + "," + discretize(d[o + 2], 1) + "," + discretize(d[o + 3], 1) + ")"; i[a] = i[a] || 0, i[a] += 1 } var c = null; Object.keys(i).forEach(function (e) { 1 < i[e] && (c = e) }), setTimeout(function () { var e = document.getElementById("saveButton"); e.setAttribute("href", t.toDataURL()), e.classList.remove("disabled"), document.body.style.backgroundColor = c, document.body.classList.add("show"), document.getElementById("description").className = "show" }, 2500) } }), setTimeout(function () { document.getElementById("description").className = "show" }, 5500)
let menuOutput = document.getElementById(menu);

let btn = document.getElementById("button");
btn.innerHTML = "Read More";

btn.onclick = function(){
    menuOutput.style.visibility = visible;
}
