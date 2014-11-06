if (Meteor.isClient) {
    Handlebars.registerHelper("user", function(){
        var user = {
            firstName: 'Oscar',
            lastName: 'Rieken',
            email: 'oriekenjr@gmail.com',
            date: 'Thu Jan 23 2014 23:59:05',
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.",
            githubUrl: "https://github.com/orieken",
            twitterUrl: "https://twitter.com/OscarRieken",
            twitterUserName: "OscarRieken",
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
            ],
            experience: [
                {
                    companyName: 'Manheim',
//                    dateStarted: '01.2012',
//                    dateEnded: 'Current',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                    technologies: [
                        { techName: 'Ruby', techIcon: 'ruby-logo'},
                        { techName: 'Java', techIcon: 'sun-microsystem-java-logo'},
                        { techName: 'jRuby', techIcon: 'jruby'},
                        { techName: 'Watir-Webdriver', techIcon: 'watir-so'},
                        { techName: 'Selenium-WebDriver', techIcon: 'Seleniumlogo'},
                        { techName: 'Selenium-Grid', techIcon: 'selenium-grid'},
                        { techName: 'Rails', techIcon: 'rails'},
                        { techName: 'jQuery', techIcon: 'jquery-logo'},
                        { techName: 'Nodejs', techIcon: 'nodejs'},
                        { techName: 'Angularjs', techIcon: 'angularjs-logo'},
                        { techName: 'Meteorjs', techIcon: 'logo-meteor'},
                        { techName: 'Puppet', techIcon: 'PL_logo_vertical_RGB_sm'}
                        ]
                },
                {
                    companyName: 'ThoughtWorks',
//                    dateStarted: '07.2012',
//                    dateEnded: '12.2011',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                    technologies: [
                        { techName: 'Ruby', techIcon: 'ruby-logo'},
                        { techName: 'Java', techIcon: 'sun-microsystem-java-logo'},
                        { techName: 'jRuby', techIcon: 'jruby'},
                        { techName: 'Watir-Webdriver', techIcon: 'watir-so'},
                        { techName: 'Selenium-WebDriver', techIcon: 'Seleniumlogo'},
                        { techName: 'Selenium-Grid', techIcon: 'selenium-grid'},
                        { techName: 'Rails', techIcon: 'rails'},
                        { techName: 'CSharp.Net', techIcon: 'csharp-logo'},
                        { techName: 'jQuery', techIcon: 'jquery-logo'}
                    ]
                },
                {
                    companyName: 'S3',
//                    dateStarted: '07.2012',
//                    dateEnded: '12.2011',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                    technologies: [
                        { techName: 'CSharp.Net', techIcon: 'csharp-logo'},
                        { techName: 'VB.Net', techIcon: 'vb-net-logo'},
                        { techName: 'QTP', techIcon: 'qtp-logo'}
                    ]
                },
                {
                    companyName: 'VGT',
//                    dateStarted: '07.2012',
//                    dateEnded: '12.2011',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                    technologies: [
                        { techName: 'CSharp.Net', techIcon: 'csharp-logo'},
                        { techName: 'Selenium-WebDriver', techIcon: 'Seleniumlogo'},
                        { techName: 'QTP', techIcon: 'qtp-logo'}
                    ]
                },
                {
                    companyName: 'OCA',
//                    dateStarted: '07.2012',
//                    dateEnded: '12.2011',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                    technologies: [
                        { techName: 'CSharp.Net', techIcon: 'csharp-logo'},
                        { techName: 'VB.Net', techIcon: 'vb-net-logo'},
                        { techName: 'Visual Basic', techIcon: 'vb6-logo'},
                        { techName: 'Rational Robot', techIcon: 'rational-robot-logo'}
                    ]
                }
            ]
        };
        return user;
    });
}