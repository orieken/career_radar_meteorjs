if (Meteor.isClient) {
    Handlebars.registerHelper("user", function(){
        var user = {
            firstName: 'Oscar',
            lastName: 'Rieken',
            email: 'oriekenjr@gmail.com',
            date: new Date().toTimeString(),
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
                    dateStarted: '01.2012',
                    dateEnded: 'Current',
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
                    dateStarted: '07.2012',
                    dateEnded: '12.2011',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                    technologies: [
                        { techName: 'Ruby', techIcon: 'ruby-logo'},
                        { techName: 'Java', techIcon: 'sun-microsystem-java-logo'},
                        { techName: 'jRuby', techIcon: 'jruby'},
                        { techName: 'Watir-Webdriver', techIcon: 'watir-so'},
                        { techName: 'Selenium-WebDriver', techIcon: 'Seleniumlogo'},
                        { techName: 'Selenium-Grid', techIcon: 'selenium-grid'},
                        { techName: 'Rails', techIcon: 'rails'},
                        { techName: 'CSharp.Net', techIcon: 'dot-net'},
                        { techName: 'jQuery', techIcon: 'jquery-logo'}
                    ]
                }
            ]
        };
        return user;
    });

    //email popover
    Template.contact_me.events({
       'click #send_email': function (e){
           e.preventDefault();
           $('#send_email').popover({
               animation: true,
               placement:'top',
               title: "Not Implemented Yet"
                   });
       }
    });


    Template.chart.rendered = function () {

    // our d3 code goes here
        var w = 450,
            h = 450;

        var colorscale = d3.scale.category20c();
        //Legend titles


        //Data
        var d = [
            [
                {axis:"Ruby",value:4},
                {axis:"Rails",value:3.5},
                {axis:"Python",value:3},
                {axis:"Java",value:3},
                {axis:"JavaScript",value:3},
                {axis:"C#",value:4},
                {axis:"VB.net",value:4},
                {axis:"Haskell",value:1},
                {axis:"Clojure",value:2},
                {axis:"Scala",value:2},
                {axis:"Selenium-WebDriver",value:5},
                {axis:"Erlang",value:2},
                {axis:"Io",value:1},
                {axis:"Prolog",value:1},
                {axis:"Cucumber-JVM",value:4},
                {axis:"Puppet",value:3},
                {axis:"Cucumber",value:5},
                {axis:"Linux",value:4},
                {axis:"Windows",value:5},
                {axis:"OsX",value:5},
                {axis:"Git",value:4},
                {axis:"SVN",value:3},
                {axis:"Watir-WebDriver",value:5},
                {axis:"Nodejs",value:3},
                {axis:"Meteorjs",value:3},
                {axis:"Knockoutjs",value:3},
                {axis:"Angularjs",value:3},
                {axis:"HTML5",value:5},
                {axis:"CSS3",value:5},
                {axis:"XML",value:4},
                {axis:"YAML",value:4},
                {axis:"DB2",value:3},
                {axis:"MSSQL",value:3},
                {axis:"MongoDB",value:3},
                {axis:"CouchDB",value:3},
                {axis:"Json",value:4},
                {axis:"MySQL",value:3}
            ]
        ];

//Options for the Radar chart, other than default
        var mycfg = {
            w: w,
            h: h,
            maxValue: 5,
            levels: 5,
            ExtraWidthX: 150,
            color: colorscale
        };

//Call function to draw the Radar chart
//Will expect that data is in %'s
        RadarChart.draw("#chart_area", d, mycfg);

        var svg = d3.select('#chart_area')
            .selectAll('svg')
            .append('svg')
            .attr("width", w+300)
            .attr("height", h);

    var text = svg.append("text")
        .attr("class", "title")
        .attr('transform', 'translate(90,0)')
        .attr("x", w - 70)
        .attr("y", 10)
        .attr("font-size", "12px")
        .attr("fill", "#404040")
        .text("Current Skills");

    }
}