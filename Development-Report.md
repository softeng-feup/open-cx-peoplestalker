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
Product that uses "IR Beam" or "Break-Beam" (Infrared rays) technology to count the number of people inside a conference room over time to create graphs and statistics that can be useful in knowing which conferences have greater adhesion or interest.


---


## Elevator Pitch
PeopleStalker is a software product made for conference organisers and atendees, that provides insights and statistics about the attendance of a certain conference. The software displays the processed data in a simple and user friendly way, making it suitable for everyone who wishes to be part of the conference.


---


## Requirements

In this section, you should describe all kinds of requirements for your module: functional and non-functional requirements.

Start by contextualizing your module, describing the main concepts, terms, roles, scope and boundaries of the application domain addressed by the project.

### Use case diagram

![Use Case](https://github.com/softeng-feup/open-cx-peoplestalker/blob/master/use_cases.jpg)

### User stories

Trello - https://trello.com/b/UpNIOA4Q/esof-people-stalker

### Domain model

![Domain Model UML](https://github.com/softeng-feup/open-cx-peoplestalker/blob/master/domain_analysis.png)


## Architecture and Design
### Logical architecture
TODO-perguntar stor
### Physical architecture
![Physical architecture](https://github.com/softeng-feup/open-cx-peoplestalker/blob/master/physical_architecture.png)

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

