# SoloProject - PokeTeam Viewer

Project completed in relation to the Solo project due Week 8 at QA

## Index
[Brief](#brief)
* [Solution](#solution)
   
[Architecture](#architecture)
* [Entity Relationship Diagrams](#erd)
	
[Testing](#testing)
* [Report](#report)

[Deployment](#depl)
* [Technologies Used](#tech)
     
[Front End Design](#FE)

[Improvements for the Future](#improve)

[Authors](#auth)

[Acknowledgements](#ack)

<a name="brief"></a>
## The Brief

The brief was to created a object oriented web application that covers all the core topics and utilises the various tools covered at the Academy in the last 6 weeks.

<a name="solution"></a>
### Solution

My project was to create a website to allow a user to display their favourite pokemon in a team format. The application will allow users to add/remove their own pokemon to the team with various attributes. Each pokemon can also have its attributes edited.
THe application will also allow users to have back up storage of pokemon that they can switch in and out at will, essentially emulating a trainer's interaction
in the video games

<a name="architecture"></a>
## Architecture
<a name="erd"></a>
### Entity Relationship Diagrams
#### Initial plan
![Initial ERD](/Documentation/ER Diagram V1.png)

The ERD above shows the initial four tables that I had hoped the finished application would end up with but as the development progressed, the tables were reduced and less attributes were used in order to reduce the complexity so that a minimal viable product could be produced within the time constraints. However the attributes that were omitted can be added back in later versions of the application with minimal effort.

#### Delivered solution
![Final ERD](/Documentation/ER%20Diagram%20V3.png)

The ERD above is the final two tables that are present in the delivered build of the project. It makes use of a one to many relationship between PokeTeam and Pokemon 
where the poketeam consists of 6 pokemon from the Pokemon table at a time. The current build only holds 1 team but functionality
to include more teams is available.

<a name="testing"></a>
## Testing

Testing of the project consisted of Mockito for the API, Selenium Tests for the front end website and Codacy was used to check
the quality of the code. The code coverage can be found in [here](Documentation/Mockito%20test%20coverage.PNG) along with the selenium test report [here](Documentation/report.html). Below are links to the codacy dashboards, repositories of the API and Selenium Tests:
* Codacy Dashboard for API Review - https://app.codacy.com/manual/RajeevanVJ96/pokeTeamApi/dashboard?bid=14198575

* Github repository for API - https://github.com/RajeevanVJ96/pokeTeamApi

* Github repository for Selenium Tests - https://github.com/RajeevanVJ96/SeleniumProjectTests
<a name="depl"></a>
## Deployment

The building and deployment process was automated using Jenkins which is set up to run on Google Cloud Platform virtual machine. Jenkins is scripted to clone down the source git repo every minute while operational and copy the project into external directory to then be hosted by an Apache2 web server also running on the same instance. The API to communicate data between the web pages and the database is controlled by a Spring boot application ran by Maven.
This is run on a separate instance to allow for easy upgrades and loose coupling.

<a name="tech"></a>
### Technologies Used

*   MySQL Database Engine - Database
*   Java - API Logic
*   JavaScript - Front End Logic
*   HTML, CSS, Bootstrap Studio - Front End Design
*   Apache2 - Deployment
*   Jenkins - CI Server
*   Maven - Dependency Management
*   [Git]https://github.com/RajeevanVJ96/SoloProject.git - VCS
*   [Trello]https://trello.com/b/DJTCtsWw/team-manager - Project Tracking
*   GCP - Live Environment

<a name="FE"></a>
## Front End Design
### Wireframes
Team page
![Roster Wireframe](/Documentation/Roster_Page.jpg)
Making Changes
![View  Wireframe](/Documentation/Edit_Mon.jpg)

### Final Look
Team page
![Home page](/Documentation/index.jpg)
View and Editing
![View page](/Documentation/viewadd.jpg)
Adding
![add page](/Documentation/add.png)
View All
![all page](/Documentation/added.png)
<a name="improve"></a>
## Future improvements

Regarding the future of the application I hope to:
*    Add in proper functionality for creating multiple rosters of Pokemon so users can
show off multiple teams and switch between them at will on the front page. 

*    Add the ability to have an inventory system whereby users can emulate a bag from the games
and this would contain the various items and their quantities which could be changed at will.
The design would follow similarly to the existing design of the pokemon and poketeams in that 
a Bag would have a one to many relationship with a table of items.

*    Add more fields to describe pokemon such as their level, nature, description and personal notes
that can be set by the user. 

<a name="auth"></a>
## Author

Rajeevan Vijayakumar

<a name="ack"></a>
## Acknowledgements

*   QA consulting and our fantastic instructors with special thanks to Christopher Perrins
*   The mad lads from Anonymous and Co and the rest of our fantastic cohort.  



