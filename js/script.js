document
	.querySelector(".btn-mobile-nav")
	.addEventListener("click", function () {
		document.querySelector(".navigation").classList.toggle("nav-open");
	});
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const href = link.getAttribute("href");
		if (href === "#") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
		if (href !== "#" && href.startsWith("#")) {
			const selectEl = document.querySelector(href);
			selectEl.scrollIntoView({
				behavior: "smooth",
			});
		}
	});
});
// Sticky Navigation
const sectionHeroEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		console.log(ent);
		if (ent.isIntersecting === false) {
			document.body.classList.add("sticky");
		}
		if (ent.isIntersecting === true) {
			document.body.classList.remove("sticky");
		}
	},
	{
		// In The View Port
		root: null,
		threshold: 0,
		rootMargin: "-80px",
	}
);
obs.observe(sectionHeroEl);

//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
