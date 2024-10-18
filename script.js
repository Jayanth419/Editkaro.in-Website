/** @format */

document.getElementById("contact").addEventListener("submit", function (e) {
	e.preventDefault(); // Prevent the default form submission

	const formData = {
		name: this.name.value,
		email: this.email.value,
		phone: this.phone.value,
		message: this.message.value,
	};

	// Log form data for debugging
	console.log("Form submitted with data:", formData);

	// Send contact data to Google Sheets
	fetch(
		"https://script.google.com/macros/s/AKfycbxwlR0pgsUT4ghXTEFmHyOA942aWfqUGhK2BoMaqQw/exec",
		{
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
			},
		}
	)
		.then((response) => response.json())
		.then((data) => {
			if (data.result === "success") {
				document.querySelector(".success-message").style.display = "block";
				this.reset(); // Reset the form
			} else {
				console.error("Submission failed:", data.error);
			}
		})
		.catch((error) => console.error("Error:", error));
});
