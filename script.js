
function validationCheck(){
    document.getElementById('newCustomerForm').addEventListener('submit', function (e) {
        e.preventDefault();
    
        var isValid = true;
        var inputs = this.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value === '') {
                isValid = false;
                inputs[i].style.borderColor = 'red';
                inputs[i].placeholder = 'Mandatory Field';
            }
            else {
                inputs[i].style.borderColor = '';
            }
        }
    
        if (isValid) {
            // If the form is valid, you can submit it
            this.submit();
            sendToWhatsApp();
        }
    });
}


function sendToWhatsApp() {

    var phoneNumber = "+917821056017";

    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var phoneNo = document.querySelector('.phoneNo').value;
    var country = document.querySelector('.country').value;
    var message = document.querySelector('.message').value;

    var url = "https://wa.me/" + phoneNumber + "?text="
        + "*Pramod Traders' New Customer Information*" + "%0a%0a"
        + "*Name :* " + name + "%0a"
        + "*Email Id :* " + email + "%0a"
        + "*Phone No. :* " + phoneNo + "%0a"
        + "*Country :* " + country + "%0a"
        + "*Message :* " + message + "%0a%0a"
        // + "This is a Sample Data for WhatsApp"
        ;

    window.open(url, '_blank').focus();

}