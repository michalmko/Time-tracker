const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('#footer-year');

footerYear.textContent = currentYear;

const validateEmail = email => {
	if (email.toLowerCase().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
		return true;
	} else {
		return false;
	}
};

const validatePassword = password => {
    
	return password.length >= 8 ? true : false;
};

console.log(validateEmail('a_aa@aaa2-1.pl'));

console.log(validatePassword('aadbdaer1'));
