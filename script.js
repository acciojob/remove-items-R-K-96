//your JS code here. If required.

const removeBtn = document.querySelector("input");

removeBtn.addEventListener("click",()=>{
	const selectOption = document.getElementById("colorSelect");
	selectOption.remove(selectOption.selectedIndex)
})

