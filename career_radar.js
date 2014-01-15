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
    // our d3 code goes here
    Template.chart.rendered = function () {
        var sampleSVG = d3.select("#chart_area")
            .append("svg")
            .attr("width", 600)
            .attr("height", 600);

        //Draw the line
        sampleSVG.append("line")
            .attr("x1", 50)
            .attr("y1", 50)
            .attr("x2", 50)
            .attr("y2", 50)
            .attr("stroke-width", 2)
            .attr("stroke", "black");





        sampleSVG.append("circle")
            .style("stroke", "gray")
            .style("fill", "white")
            .attr("id", "d3_circle")
            .attr("r", 5)
            .attr("cx", 50)
            .attr("cy", 50)
            .on("mouseover", function(){d3.select(this).style("fill", "blue");})
            .on("mouseout", function(){d3.select(this).style("fill", "white");})
            .on("mousedown", grow);


        function grow(){
            d3.select(this)
                .transition()
                .delay(0)
                .duration(500)
                .attr("r", 40)
                .each("end", animateSecondStep);
        }

        function animateSecondStep(){
            d3.select(this)
                .transition()
                .duration(500)
                .attr("r", 5);
        }

    }

}


if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
