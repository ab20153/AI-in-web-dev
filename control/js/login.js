class Login {
	constructor(form, fields) {
		this.form = form;
		this.fields = fields;
		this.validate();
	}

	validate() {
		this.form.addEventListener("submit", (e) => {
			e.preventDefault();
			var error = false;
			this.fields.forEach((field) => {
				const input = document.querySelector(`#${field}`);
				if (this.validateFields(input) == false) {
					error = true;
				}
			});
			if (!error) {
				//do login api here
				localStorage.setItem("auth", true);
				this.form.submit();
			}
		});
	}

	validateFields(field) {
		if (field.value.trim() === "") {
			this.setStatus(
				field,
				`The ${field.previousElementSibling.innerText} field can't be left blank.`,
				false
			);
			return false;
		} else {
			if (field.type == "password") {
				this.setStatus(field, null, true);
				return true;
		    }
	    }
    }

	setStatus(field, message, success) {
		const errorMessage = field.parentElement.querySelector(".errorMessage");

		if (success) {
			if (errorMessage) {
				errorMessage.innerText = "";
			}
			field.classList.remove("inputError");
		}

		if (!success) {
			errorMessage.innerText = message;
			field.classList.add("inputError");
		}
	}
}

const form = document.querySelector(".loginForm");
if (form) {
	const fields = ["username", "password"];
	const validation = new Login(form, fields);
}