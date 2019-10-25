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

![Use Case](https://github.com/softeng-feup/open-cx-peoplestalker/blob/master/use_cases.JPG)

### User stories

* As an Attendee, I want to know how many people are in the room so that I know if the room is full or not;

* As an Attendee, I want to know how many people entered and left the room through the presentation so that I can be informed of how interested people were in each topic;

* As an Attendee, I want to know how many people went to a certain presentation so that I can be informed of how interested people were in each presentation;

* As an Attendee, I want to know statistics of the attendance of Sessions so that I can be informed of how interested people were in each Session;

* As an Attendee, I want to know statistics of the attendance of the presentations given by Speakers so that I can be informed of how good the Speakers were in their previous presentations;

* As an Attendee, I want to know the percentage of free seats so that I know if it’ll be easy to find a free seat;

* As an Admin, I want to be able to create Presentations, Sessions and Conferences, and include each within each other (Presentation < Session < Conference), so that I can create and manage my Conference as its Admin/creator.;

* As an Admin, I want to be able to assign the date and hour of each presentation as well as which speaker will speak, and the room information so that I can assign the hours, room and speaker for each Presentation.;

###Domain model

https://github.com/softeng-feup/open-cx-peoplestalker/blob/master/domain_analysis.png
