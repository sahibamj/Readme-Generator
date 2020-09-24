var fs = require('fs');
const markdown = require('./generateMarkdown');
var inquirer = require('inquirer');
const terminalLink = require('terminal-link');


const questions = [
    {
        type: "input",
        message: "badge",
        name: "badge"
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "Title"
    },
    {
     type: "input",
     message: "What is the description of the project?",
     name: "Description"
 },
 {
     type: "input",
     message: "What are the installation instructions required for the project?",
     name: "Installation"
 },
 {
     type: "input",
     message: "Enter usage information for the project.",
     name: "Usage"
 },
 {
     type: "input",
     message: "What are the contribution guidelines for the project.",
     name: "Contributing"
 },
 {
     type: "input",
     message: "Enter instructions to test the project.",
     name: "Tests"
 },
 {
     type: "checkbox",
     message: "Choose license for your project.",
     name: "License",
     choices: [
         "ISC License",
         "Apache License",
         "MIT License",
         "GPL License"
     ]
 },
 {
    type: "input",
    message: "Enter your username",
    name: "Username"
},
{
    type: "input",
    message: "Enter your email address",
    name: "Email"
},
{
    type: "input",
    message: "Enter your table of contents separated by colon",
    name: "ContentTable"
},
]

inquirer.prompt(questions).then(response => {
    fs.appendFileSync("README.md", ("*TITLE " + response.Title) + '\n', function(err) {
        if (err) {
            return console.log(err);
        } else {
            console.log("success!")
        }
        });

        fs.appendFileSync("README.md", ('\n' + response.badge) + '\n', function(err) {
            if(err) {
                return console.log(err)
            } else {
                console.log(link);
            }
        })

        fs.appendFileSync("README.md", ('\n' + "*DESCRIPTION" + '\n' + response.Description) + '\n', function(err) {
            if(err) {
                return console.log(err)
            } else {
                console.log("success!")
            }
        })

        fs.appendFileSync("README.md", ('\n' + "*INSTALLATION" + '\n' + response.Installation) + '\n', function(err) {
            if(err) {
                return console.log(err)
            } else {
                console.log("success!")
            }
        })

        fs.appendFileSync("README.md", ('\n' + "*USAGE" + '\n' + response.Usage) + '\n', function(err) {
            if(err) {
                return console.log(err)
            } else {
                console.log("success!")
            }
        })

        fs.appendFileSync("README.md", ('\n' + "*CONTRIBUTING" + '\n' + response.Contributing) + '\n', function(err) {
            if(err) {
                return console.log(err)
            } else {
                console.log("success!")
            }
        })

        fs.appendFileSync("README.md", ('\n' + "*TESTS" + '\n' + response.Tests) + '\n', function(err) {
            if(err) {
                return console.log(err)
            } else {
                console.log("success!")
            }
        })

        fs.appendFileSync("README.md", ('\n' + "*LICENSE" + '\n' + response.License) + '\n', function(err) {
            if(err) {
                return console.log(err)
            } else {
                console.log("success!")
            }
        })

        fs.appendFileSync("README.md", ('\n' + "*USERNAME" + '\n' + response.Username) + '\n', function(err) {
            if(err) {
                return console.log(err)
            } else {
                console.log("success!")
            }
        })

        fs.appendFileSync("README.md", ('\n' + "*EMAIL" + '\n' + response.Email) + '\n', function(err) {
            if(err) {
                return console.log(err)
            } else {
                console.log("success!")
            }
        })

        fs.appendFileSync("README.md", ('\n' + "*TABLE OF CONTENTS" + '\n' + '\n' + '- ' + response.ContentTable.split(": ").join('\n' + '- ')) + '\n', function(err) {
            if(err) {
                return console.log(err)
            } else {
                console.log("success!");
            }
        })
    });
    
 