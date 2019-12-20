# ESOF 19/20 - PeopleStalker	

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



Project done by:

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
While it easy to get information regarding how many people attended a conference, or, paid for a ticket, one might be interested in knowing exactly how many people attended each presentation within a conference, the maximum number of people inside the presentation, or just knowing if the room is full or not, as an attendee looking for a seat.

As a solution to this, we have envisioned and developed PeopleStalker! With an easy to set-up and use product, and a simple and concise WebApp, we allow conference managers to deploy a new tool to monitor and get new data never obtained before in conferences.

Using our product, one can get information regarding the percentage of seats taken, which can be helpful as an attendee looking to enter a presentation, the maximum number of people that were at one point in a presentation, and the graph of people attending the presentation throughout time.

Via our WebApp, the conference manager can configure the product to set the times a Presentation starts and ends and will afterwards get the data for each presentation. The conference manager can also choose to show this information to the public.

How did your previous conferences go? Which presentations were the most interesting for the public and which speakers kept the most people keen on attending their lectures?

With PeopleStalker, you will know.


---	


## Requirements	


### Use case diagram	

![Use Case](https://github.com/softeng-feup/open-cx-peoplestalker/blob/master/uc.jpg)	

The Speaker is the person who is presenting the presentation, the Attendee is someone who is watching a presentation and the ConfAdmin is the administrator of the conference, the one who will define the sessions and what presentations will be given and at what time. The use cases presented in the UML are divided into two categories, the ones who will be available to everyone and the ones only available to the Administrator of the conference. The first type include the visualization of the number of attendees over time, the percentage of free seats in the given presentation, the number of attendees present live in the presentation, and the maximum amount of people present until the current time, and some other statistics of the speaker and the sessions, as in, all the information described but about other presentation done by the speaker before and that same session done in the past. The other type of use cases (the ones only available to the administrator), are related to the creation of a conference, once the administrator logs in, only he can create a new conference, which then he can add sessions and presentations within each session. For each presentation he has to specify the room in which it will be presented, the assigned speaker for the presentation and the hours it will take place in.

### User stories	

Trello - https://trello.com/b/UpNIOA4Q/esof-people-stalker	

### Domain model	

![Domain Model UML](https://github.com/softeng-feup/open-cx-peoplestalker/blob/master/domain_analysis.png)	


## Architecture and Design	
### Logical architecture	

![Logical_architecture](https://i.gyazo.com/bf31b4a621fe01220b4a78d297edce8d.png)	
![Logical_architecture2](https://github.com/softeng-feup/open-cx-peoplestalker/blob/master/logical.png)
	


### Physical architecture	

On a hardware point of view, our product is simple. We have a Raspberry Pi 3, a breaboard, and 2 Sharp 2Y0A02 distant measuring sensors.	
The PI gives power to the breadboard, to which the sensors are connected, and they give their output back. Using the Raspberry Pi 3's functionalities and I/O pin's, we read these inputs and process them via a state machine programmed in Python that we coded.	
Using a special Firebase library, the program updates our Firebase database everytime someone crosses the sensor.
Our WebApp gets its inputs from the Firebase Library and displays the data relative to the presentations on the website.
With the PI's WI-FI connectability, it is connected to the internet, either via FEUP's internet, or using a mobile router. 	
![Physical architecture](https://raw.githubusercontent.com/softeng-feup/open-cx-peoplestalker/master/physical-architecture.png)	

	

### Prototype	
In this section we will briefly describe the iterations and user stories associated with them throughout out project.	
Among our user stories are : 	
-Knowing the ammount of people in a presentation at the current moment, we implemented this by getting the last inserted data in our realtime database in firebase, then checking the ammount of people in the room at that moment.	
-Maximum people in the room in a given presentation	
-Percentage of seats at the current moment, given the first user storie in this list, and knowing the ammount of seats available (which is inserted by the Admin of the Presentation), calculate the percentage of people in that given moment	
-Know the ammount of people that were present in the presentation throughout it, by getting the hour and ammount of people in a given presentation and then displaying it in a graph (TODO)	
-Creating a presentation, the information required for the creation of a presentation is collected from a form available only to admins. This information is then sent to firebase's firestore to create the corresponding instance in the presentation collection. Firestore rules allow only admins to do this by requiring an admin authentication token.


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
