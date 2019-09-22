# SoloProject - PokeTeam Viewer

Project completed in relation to the Solo project due Week 7 at QA

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

<a name="architecture"></a>
## Architecture
<a name="erd"></a>
### Entity Relationship Diagrams
#### Initial plan
![Initial ERD](/Documentation/ER Diagram V1.png)

The ERD above shows the initial four tables that I had hoped the finished application would end up with but as the development progressed, the tables were reduced and less attributes were used in order to reduce the complexity so that a minimal viable product could be produced within the time constraints. However the attributes that were omitted can be added back in later versions of the application with minimal effort.

#### Delivered solution
![Final ERD](/Documentation/ER Diagram V2.png)

<a name="testing"></a>
## Testing
https://app.codacy.com/manual/RajeevanVJ96/pokeTeamApi/dashboard?bid=14198575

<a name="depl"></a>
## Deployment

The building and deployment process was automated using Jenkins which is set up to run on Google Cloud Platform virtual machine. Jenkins is scripted to clone down the source git repo every minute while operational and copy the project into external directory to then be hosted by an Apache2 web server also running on the same instance. The API to communicate data between the web pages and the database is controlled by Spring boot application ran by Maven.

<a name="tech"></a>
### Technologies Used

* H2 Database Engine - Database
* Java - Logic
* Apache2 - Deployment
* Jenkins - CI Server
* Maven - Dependency Management
* [Git]https://github.com/RajeevanVJ96/SoloProject.git - VCS
* [Trello]https://trello.com/b/DJTCtsWw/team-manager - Project Tracking
* GCP - Live Environment

<a name="FE"></a>
## Front End Design
### Wireframes
Team page
![Poses Wireframe](/Documentation/Roster_Page.jpg)
Making Changes
![Routines Wireframe](/Documentation/Edit_Mon.jpg)

<a name="improve"></a>
## Future improvements

<a name="auth"></a>
## Author

Rajeevan Vijayakumar

<a name="ack"></a>
## Acknowledgements

* QA consulting and our fantastic instructors with special thanks to Christopher Perrins
* The fantastic lads from Anonymous and Co 



