class Authorization {
	constructor() {
        document.querySelector("body").style.display = "none";
		const auth = localStorage.getItem("auth");
		this.validateAuth(auth);
	}

	validateAuth(auth) {
		if (auth) {
            document.querySelector("body").style.display = "block";
		} else {
            window.location.replace("index.html");
		}
	}

	logOut() {
		localStorage.removeItem("auth");
		window.location.replace("index.html");
	}
}

const auth = new Authorization();

document.querySelector(".logout").addEventListener("click", (e) => {
	auth.logOut();
});