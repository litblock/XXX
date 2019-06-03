var host = document.getElementById("host");
var hostVal = host.value;
var installButton = document.getElementById("installButton");
var output = document.getElementById("output");

installButton.addEventListener("click",function(){
	hostVal = host.value;
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.get(tabs[0].id,function(tab){
			install(hostVal,tab.url);
		})
	})
});


function install(host,url){
	if(host==="kamission"){
		if(url.includes("khanacademy.org")&&url.includes("mission")){
			bc("Installing...","color:green;");
			var footer = document.getElementById("footer").childNodes[0].childNodes[0];
			var div = document.createElement("div");
			div.innerHTML = "";
			footer.appendChild(div);
		}else{
			bc("Please install game on khanacademy mission!","color:red;");
		}
	}
}
function bc(text,style){
	var div = document.createElement("div");
	div.setAttribute("style",style);
	div.innerHTML = text;
	output.innerHTML = "";
	output.appendChild(div);
}
