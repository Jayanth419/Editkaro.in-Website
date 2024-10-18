/** @format */

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

// Portfolio Video Filtering
function filterVideos(category) {
	const videoItems = document.querySelectorAll(".video-item");
	videoItems.forEach((item) => {
		if (category === "all" || item.getAttribute("data-category") === category) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
}

// Portfolio Search Functionality
function searchPortfolio() {
	const input = document.getElementById("portfolioSearch").value.toLowerCase();
	const videoItems = document.querySelectorAll(".video-item");
	videoItems.forEach((item) => {
		const overlayText = item
			.querySelector(".video-overlay p")
			.textContent.toLowerCase();
		if (overlayText.includes(input)) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
}
