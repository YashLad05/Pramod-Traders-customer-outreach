
function validationCheck() {
    document.getElementById('newCustomerForm').addEventListener('submit', function (e) {
        e.preventDefault();

        var isValid = true;
        var inputs = this.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value === '' && (
                inputs[i].id !== 'ropes' &&
                inputs[i].id !== 'gardenPipes' &&
                inputs[i].id !== 'goSajProducts' &&
                inputs[i].id !== 'samruddhiProducts' &&
                inputs[i].id !== 'greenNets')) {
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

    var phoneNumber = "+919890165360";

    var name = document.querySelector('.name').value;
    var phoneNo = document.querySelector('.phoneNo').value;
    var message = document.querySelector('.message').value;

    var checkboxes = ['ropes', 'gardenPipes', 'goSajProducts', 'samruddhiProducts', 'greenNets'];
    var selections = checkboxes.filter(id => document.getElementById(id).checked).join(", ");

    var url = "https://wa.me/" + phoneNumber + "?text="
        + "*Pramod Traders' New Customer Information*" + "%0a%0a"
        + "*Name :* " + name + "%0a"
        + "*Phone No. :* " + phoneNo + "%0a"
        + "*Interested in :* " + (selections === "" ? "Did not select any products" : selections) + "%0a%0a"
        + "*Message :* " + message + "%0a";

    window.open(url, '_blank').focus();

}