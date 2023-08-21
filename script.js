Let menuIcon = document.querySelector('menu-icon');
Let menuIcon = document.querySelector(.'navbar');

menuIcon.onclick =() => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

Let sections=document.quetySelectorAll('section');

Let navLinks=document.quetySelectorAll('header nav a');

window.onscroll = ()=> {
	secton.forEach(sec=> {
		Let top = window.scrollY;
		Let offset =sec.offsetTop - 150;
		Let height  = sec.offsetHeight;
		Let id = sec.getAttribute('id');

		if(top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id+']').classList.add('active');
			});
		};
	});

	Let header = document.querySelector('header');

	header.classList.toggle('sticky', window.scrollY > 100);

	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
};


ScrollReveal({ 
	reset:true,
	distance: '80px',
	duration: 2000,
	delay:200
});

ScrollReveal().reveal('.Home-content,.heading', {origin:'top'});
ScrollReveal().reveal('.Home-img,.Skills-container, .Portfolio-box, .Contact-form', {origin:'bottom'});
ScrollReveal().reveal('.Home-content h1 . About-img', {origin:'left'});
ScrollReveal().reveal('.Home-content P , .About-container', {origin:'right'});

const typed = new Typed(.'multiple-text' ,{
	strings;['Web Developer', 'Frontend Developer','UI/UX Designer'],
	typeSpeed:100,
	backSpeed:100,
	backDelay:100,
	loop:true,

});