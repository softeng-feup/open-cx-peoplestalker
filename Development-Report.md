# openCX-*PeopleStalker* Development Report	

Welcome to the documentation pages of the *PeopleStalker* of **openCX**!	

You can find here detailed about the (sub)product, hereby mentioned as module, from a high-level vision to low-level implementation decisions, a kind of Software Development Report (see [template](https://github.com/softeng-feup/open-cx/blob/master/docs/templates/Development-Report.md)), organized by discipline (as of RUP):	

* Business modeling	
  * [Product Vision](#Product-Vision)	
  * [Elevator Pitch](#Elevator-Pitch)	
* Requirements	
  * [Use Case Diagram](#Use-case-diagram)	
  * [User stories](#User-stories)	
  * [Domain model](#Domain-model)	
* Architecture and Design	
  * [Logical architecture](#Logical-architecture)	
  * [Physical architecture](#Physical-architecture)	
  * [Prototype](#Prototype)	
* [Implementation](#Implementation)	
* [Test](#Test)	
* [Configuration and change management](#Configuration-and-change-management)	
* [Project management](#Project-management)	

So far, contributions are exclusively made by the initial team, but we hope to open them to the community, in all areas and topics: requirements, technologies, development, experimentation, testing, etc.	

Please contact us!	

Thank you!	


 Ana Isabel Ferreira Maia	
 Luís Henrique Condado Marques	
 Nuno Rodrigues De Castro Santos Silva  	
 Ricardo Manuel Magalhães Pinto Pereira  	

---	

## Product Vision	
PeopleStalker is here to revolutionize the way a conference manager can view the interest and attendance of the public on its presentations.

With a easy to setup and use product, and clear and concise data statistics given, PeopleStalker aims to conquer the market with a commodity that hasn’t been seen before.

PeopleStalker, revolutionizing conference statistics for a fluid and concise data interpretation.


---	


## Elevator Pitch	
PeopleStalker is a software product made for conference organisers and atendees, that provides insights and statistics about the attendance of a certain conference. The software displays the processed data in a simple and user friendly way, making it suitable for everyone who wishes to be part of the conference.	

TODO: esclarecer melhor os selling points do produto	

---	


## Requirements	

In this section, you should describe all kinds of requirements for your module: functional and non-functional requirements.	

Start by contextualizing your module, describing the main concepts, terms, roles, scope and boundaries of the application domain addressed by the project.	

### Use case diagram	

![Use Case](https://github.com/softeng-feup/open-cx-peoplestalker/blob/master/use_cases.jpg)	

TODO: descrever utilizadores, o que cada um representa, descrever cada use case (peqeno indice com cada	
alterar herança das classes, mudar pa include/Extends(?)	
### User stories	

Trello - https://trello.com/b/UpNIOA4Q/esof-people-stalker	

### Domain model	

![Domain Model UML](https://github.com/softeng-feup/open-cx-peoplestalker/blob/master/domain_analysis.png)	


## Architecture and Design	
### Logical architecture	
TODO-perguntar stor	
![Logical_architecture](https://i.gyazo.com/bf31b4a621fe01220b4a78d297edce8d.png)	

TODO: Ordenar codigo em packages, ver melhor arquitectura logica 	


### Physical architecture	

On a hardware point of view, our product is simple. We have a Raspberry Pi 3, a breaboard, and 2 Sharp 2Y0A02 distant measuring sensors.	
The PI gives power to the breadboard, to which the sensors are connected, and they give their output back. Using the Raspberry Pi 3's functionalities and I/O pin's, we read these inputs and process them via a state machine programmed in Python that we coded.	
Using a special Firebase library, the program updates our Firebase database everytime someone crosses the sensor.	
With the PI's WI-FI connectability, it is connected to the internet, either via FEUP's internet, or using a mobile router. 	
![Physical architecture](https://github.com/softeng-feup/open-cx-peoplestalker/blob/master/physical_architecture.png)	

TODO: usar UML deployment diagrams, refazer uml COMO UM UML	

### Prototype	
In this section we will briefly describe the iterations and user stories associated with them throughout out project.	
Among our user stories are : 	
-Knowing the ammount of people in a presentation at the current moment, we implemented this by getting the last inserted data in our realtime database in firebase, then checking the ammount of people in the room at that moment.	
-Maximum people in the room in a given presentation	
-Percentage of seats at the current moment, given the first user storie in this list, and knowing the ammount of seats available (which is inserted by the Admin of the Presentation), calculate the percentage of people in that given moment	
-Know the ammount of people that were present in the presentation throughout it, by getting the hour and ammount of people in a given presentation and then displaying it in a graph (TODO)	
TODO - falta as outras e implementa-las	


## Implementation	
Our project is being implemented using Raspberry Pi and a sensor in a doorway, that then sends information to a firebase realtime database. 	
The section below will describe each iteration in the process of developing our project:	
Iteration 1: In this iteration we dedicated our time to acquire the desired sensors and discover how they worked with the Raspberry Pi. At the same time, we started to better define the objectives of our project. 	
Iteration 2: Started developing the code in C we would use to then count the ammount of people in a room and send that information, along with the time and date, to our desired database.	
Iteration 3: Choose the desired database to use, it being Firebase. Put our code developed in iteration 2 in Python so that it can then transfer the information from the sensors and Raspberry Pi to Firebase.	
Iteration 4: Development of the web page created to display the statistics we would calculate using the above information. Completed some of the basic user stories.	


## Test	
//Temos de fazer aceeptance Test, nada feito por enquanto	

## Configuration and change management	
Configuration and change management are key activities to control change to, and maintain the integrity of, a project’s artifacts (code, models, documents).	

For the purpose of ESOF, we will use a very simple approach, just to manage feature requests, bug fixes, and improvements, using GitHub issues and following the GitHub flow.	



## Project management	
For managing our project we chose to use Trello, divided in three categories:	
-To do : User Stories that have not been implemented	
-Doing : User Stories being implemented at the moment by different group members	
-Done : User Stories completed	
