$(document).ready(function() {

    // Email Validation
    //===========================================================================
    
    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    // Contact Form AJAX
    //===========================================================================

    $("#contact-send-button").on("click", function(event) {
        // console.log("clicked");
        event.preventDefault();

        const userFirstName     = $("#firstname").val().trim();
        const userLastName      = $("#lastname").val().trim();
        const userFullName      = `${userFirstName} ${userLastName}`;
        const userEmail         = $("#email").val().trim();
        const userEmailSubject  = $("#subject").val().trim();
        const userHowDidHear    = $("#howDidHear").val().trim();
        const userEmailMessage  = $("#message").val().trim();
        const responseMessage   = $("#contact-us-form .email-ajax-response");

        // console.log(`firstname: ${userFirstName}`);
        // console.log(`lastname: ${userLastName}`);
        console.log(`fullname: ${userFullName}`);
        console.log(`email: ${userEmail}`);
        console.log(`subject: ${userEmailSubject}`);
        console.log(`how they heard ${userHowDidHear}`);
        console.log(`message: ${userEmailMessage}`);

        if (( userFirstName === "" || userLastName === "" || userEmail === "" || userEmailSubject === "" || userEmailMessage === "") || (!isValidEmailAddress(userEmail) )) {
            responseMessage.fadeIn(500);
            responseMessage.html('<i class="fa fa-warning"></i> Please fix the errors and try again.');
        }

        else {
            $.ajax({
                type: "POST",
                url: "/assets/php/contactForm.php",
                dataType: "json",
                data: {
                    userEmail: userEmail,
                    userFullName: userFullName,
                    userEmailSubject: userEmailSubject,
                    userHowDidHear: userHowDidHear,
                    userEmailMessage: userEmailMessage,
                },
                beforeSend: function(result) {
                    $("#contact-us-form button").empty();
                    $("#contact-us-form button").append("<i class='fa fa-cog fa-spin'></i> Wait...");
                },
                // success: function(result) {
                complete: function(result) {
                    if(result.sendstatus === 1) {
                        $("#contact-us-form .ajax-hidden").fadeOut(500);
                        responseMessage.html(result.message).fadeIn(500);
                    }

                    else {
                        $("#contact-us-form button").empty();
                        $("#contact-us-form button").append("<i class='fa fa-retweet></i> Please Try Again.");
                        responseMessage.html(result.message).fadeIn(1000);
                    }
                }
            })
        }
    });

});