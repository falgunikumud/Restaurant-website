
const menuBtns=document.querySelectorAll('.menu-btn');
const restaurants=document.querySelectorAll('.restaurant-name');


let activeBtn= "featured";

showrestaurants(activeBtn);
menuBtns.forEach((btn)=>{
	btn.addEventListener('click',()=>{
		resetActiveBtn();
		showrestaurants(btn.id);
		btn.classList.add('active-btn');
	});
});

function resetActiveBtn(){
	menuBtns.forEach((btn)=>{
		btn.classList.remove('active-btn');
	});
}

function showrestaurants(newrestaurantBtn){
	activeBtn=newrestaurantBtn;
	restaurants.forEach((item)=>{
		if (item.classList.contains(activeBtn)) {
			item.style.display="grid";
		}else{
			item.style.display="none";
		}
	});

}



