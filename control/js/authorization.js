//class to make sure that user has been authorized to see the homepage
class Authorization {
	constructor() {
        document.querySelector("body").style.display = "none";
		const auth = localStorage.getItem("auth");
		this.validateAuthorization(auth);
	}

	//method to redirect user back to login page if they're not authorized
	validateAuthorization(auth) {
		if (auth) {
            document.querySelector("body").style.display = "block";
		} else {
            window.location.replace("index.html");
		}
	}

	//method to redirect user back to login page and remove the auth local storage item
	//when Log Out button is pressed
	logOut() {
		localStorage.removeItem("auth");
		window.location.replace("index.html");
	}
}

//check user's authorization and create an event listener for the Log Out button
const auth = new Authorization();
document.querySelector(".logout").addEventListener("click", (e) => {
		auth.logOut();
	}
);