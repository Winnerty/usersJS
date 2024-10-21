# Overview

Simple exercise to manipulate the DOM using JavaScript

In the `script.js` file there is an array of users. Each user is an array that contains data about this user.

## Exercise

The idea is to create a function that loops through the users and display their data on screen

## Solutions

This repo proposes two solutions within it. Two branches one called "sollution" that uses the property `innerHTML` of the main container. This is a simplistic and insecure way of writing html into the page.
The other solution, the branch called "solutionTwo" uses a more programatical approach using the method `createElement` that safely creates each element, then add the required attributes to it e.g. classes, src, alt, etc
This takes more code but is safer and less prone to errors
