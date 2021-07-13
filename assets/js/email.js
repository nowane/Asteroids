function sendMail(contact) {
    emailjs.send("gmail", "template_ms2", {
            "from_name": contact.fullname.value,
            "from_email": contact.emailaddress.value,
            "message": contact.message.value,
        })
        .then(
            function (response) {
                alert("SUCCESSFUL!", response);
            },
            function (error) {
                alert("FAILURE!", error);
            },

            document.getElementById("contactForm").reset());;
    return false; // To block loading a new page after submit
}