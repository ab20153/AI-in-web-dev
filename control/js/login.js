//login class to validate the login form fields
class Login {
	constructor(form, fields) {
		this.form = form;
		this.fields = fields;
		this.validate();
	}

	//method to set a local storage item if username and password have been provided
	validate() {
		this.form.addEventListener("submit", (e) => {
			e.preventDefault();
			var error = false;
			//validate each field (username, password)
			this.fields.forEach((field) => {
				const input = document.querySelector(`#${field}`);
				if (this.validateFields(input) == false) {
					error = true;
				}
			});
			//if both fields validated, submit form and generate the local storage item
			if (!error) {
				localStorage.setItem("auth", true);
				this.form.submit();
			}
		});
	}

	//method to validate a field
	validateFields(field) {
		//if field is empty, create an error message under the field
		if (field.value.trim() === "") {
			this.setStatus(
				field,
				`The ${field.previousElementSibling.innerText} field can't be left blank.`,
				false
			);
			return false;
		} else {
			this.setStatus(field, null, true);
			return true;
	    }
    }

	//method to generate or remove error messages under invalid fields
	setStatus(field, message, success) {
		const errorMessage = field.parentElement.querySelector(".errorMessage");

		if (success) {
			if (errorMessage) {
				errorMessage.innerText = "";
			}
			field.classList.remove("inputError");
		}else{
			errorMessage.innerText = message;
			field.classList.add("inputError");
		}
	}
}

//grab the form from the login page and run validation on its fields
const form = document.querySelector(".loginForm");
if (form) {
	const fields = ["username", "password"];
	const validation = new Login(form, fields);
}