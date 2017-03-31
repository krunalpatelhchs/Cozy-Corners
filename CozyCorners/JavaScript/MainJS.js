function openNav() {
	var nl2 = document.getElementById("navigation-list2")
	if (nl2.style.display == "inline")  {
		nl2.style.display = 'none'
	} else {
		nl2.style.display = 'inline'
	}
			
}
window.addEventListener("resize", function(event) {	
	if (document.body.clientWidth >= 1224) {
		var nl2 = document.getElementById("navigation-list2")
		nl2.style.display = 'inline'
	} else {
		var nl2 = document.getElementById("navigation-list2")
		nl2.style.display = 'none'
	}
				
})