Template.contact_me.events({
    'click #send_email': function (e){
        e.preventDefault();

        $('div#message').toggleClass('hidden');

    }
});
