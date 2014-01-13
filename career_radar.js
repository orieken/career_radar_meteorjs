if (Meteor.isClient) {
    Template.userDetails.helpers({
    user: function() {
        var user = {
            firstName: 'Oscar',
            lastName: 'Rieken',
            email: 'oscar.rieken@example.com',
            date: new Date().toTimeString(),
            bio: 'Hi, I\'m Oscar',
            languages: [
                { languageName: 'Ruby', skill: 4 },
                { languageName: 'Java', skill: 3 },
                { languageName: 'C#', skill: 3 }
            ],
            platforms: [
                { platformName: 'Windows', skill: 4 },
                { platformName: 'OSX', skill: 4 },
                { platformName: 'Linux', skill: 4 }
            ],
            tools: [
                { toolName: 'Selenium-Webdriver', skill: 5 },
                { toolName: 'Watir-Webdriver', skill: 5 },
                { toolName: 'Cucumber', skill: 5 }
            ],
            techniques: [
                { techniqueName: 'TDD', skill: 3 },
                { techniqueName: 'BDD', skill: 4 },
                { techniqueName: 'OOD', skill: 4 }
            ]
        };
        return user;
    }
});
}


if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
