# openCX-*your module name* Development Report

Welcome to the documentation pages of the *your (sub)product name* of **openCX**!

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


Ana Isabel Ferreira Maia
Luís Henrique Condado Marques
Nuno Rodrigues De Castro Santos Silva
Ricardo Manuel Magalhães Pinto Pereira

---

## Product Vision
Produto que utiliza tecnologia "IR Beam" ou "Break-beam" (Raios Infravermelhos) para contar o número de pessoas dentro de uma sala de conferências ao longo do tempo, de modo a criar gráficos e estatísticas que podem ser úteis para saber quais conferências têm maior adesão ou interesse.


---
## Elevator Pitch
Draft a small text to help you quickly introduce and describe your product in a short time and a few words, a technique usually known as elevator pitch.

Take a look at the following links to learn some techniques:
* [Crafting an Elevator Pitch](https://www.mindtools.com/pages/article/elevator-pitch.htm)
* [The Best Elevator Pitch Examples, Templates, and Tactics - A Guide to Writing an Unforgettable Elevator Speech, by strategypeak.com](https://strategypeak.com/elevator-pitch-examples/)
* [Top 7 Killer Elevator Pitch Examples, by toggl.com](https://blog.toggl.com/elevator-pitch-examples/)

---
## Requirements

In this section, you should describe all kinds of requirements for your module: functional and non-functional requirements.

Start by contextualizing your module, describing the main concepts, terms, roles, scope and boundaries of the application domain addressed by the project.

### Use case diagram


![alt text](https://github.com/softeng-feup/open-cx-peoplestalker/use_cases.jpg)

### User stories

As an Attendee, I want to know how many people are in the room so that I know if the room is full or not;

As an Attendee, I want to know how many people entered and left the room through the presentation so that I can be informed of how interested people were in each topic;

As an Attendee, I want to know how many people went to a certain presentation so that I can be informed of how interested people were in each presentation;

As an Attendee, I want to know statistics of the attendance of Sessions so that I can be informed of how interested people were in each Session;

As an Attendee, I want to know statistics of the attendance of the presentations given by Speakers so that I can be informed of how good the Speakers were in their previous presentations;

As an Attendee, I want to know the percentage of free seats so that I know if it’ll be easy to find a free seat;

As an Admin, I want to be able to create Presentations, Sessions and Conferences, and include each within each other (Presentation < Session < Conference), so that I can create and manage my Conference as its Admin/creator.;

As an Admin, I want to be able to assign the date and hour of each presentation as well as which speaker will speak, and the room information so that I can assign the hours, room and speaker for each Presentation.;
