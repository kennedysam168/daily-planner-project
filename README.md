# daily-planner-project

## Description
For this project i was tasked with creating a daily planner/scheduler. The finished product will allow the user to add events or tasks to a certain time block of the day to help keep track of their day. The date will be displayed at the top of the screen and each time block will be color coded either red, for past, green, for present, or blue, for future.


## build
To build this project I used a combination of html, css, jquery, and javascript. I started by creating all the files and making the base of the webpage in html. Once I had the title and header I then used the moment jquery api to display the live date. From there I created the first time block to display what hour of the day it represents, a text box, and a save button. From there I reused that same template for each hour of the day. I then used css to style the page before hopping into javascript. In javascript I mainly used jquery to keep the code as short and concise as possible. I used a click event to linke the save button to local storage and then created a function with conditional statements to determine if the time block was past present or future, and then created classes to add color depending on the time.


## Usage
To use the webpage all the user needs to do is select the time block they would like to add an event to, type the event in to that time block and then hit the save button to have the event persist through page reload.


## Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist