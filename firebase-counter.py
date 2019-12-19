#!/usr/bin/python
import os
import time
import urllib2 

import RPi.GPIO as GPIO
from time import sleep
import datetime
from firebase import firebase
import Adafruit_DHT

import urllib2, urllib, httplib
import json
import os 
from functools import partial
import datetime

#GPIO SETUP:
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
pin2 = 27 #connect sensor "2" to white cord
pin3 = 22 #connect sensor "3" to blue cord
GPIO.setup(pin2,GPIO.IN)
GPIO.setup(pin3,GPIO.IN)

#needed variables for state machine:
state = 0
counterIN=0
counterOUT=0
ENTERING = 0
EXITING = 0
nbrOfPeopleInRoomBefore = 0
nbrOfPeopleInRoom = 0


#firebase usage:
firebase = firebase.FirebaseApplication('https://peoplestalker-318b4.firebaseio.com/', None)


def update_firebase(entrance):
	nbrOfPeopleInRoom = counterIN - counterOUT
	data = {"PeopleInRoom": nbrOfPeopleInRoom,"Entrance": entrance, "DateTime": datetime.datetime.now()}
	print('Posting, number of people in room:')
	print(nbrOfPeopleInRoom)
	print('Entrance:')
	print(entrance)
	#upload status only if connected to the internet
	while True:
		try:
			urllib2.urlopen("http://www.google.com").close()
		except urllib2.URLError:
			print "Not Connected"
			time.sleep(1)
		else:
			print "Connected"
			#firebase.post('/sensor/dht', data)
			nbrOfPeopleInRoomBefore = nbrOfPeopleInRoom
			break
		

while True:
	if state == 0: # no sensors broken, start state machine
		if GPIO.input(pin2) and GPIO.input(pin3) == 0 :
			state = 1
			ENTERING = 1
		if (GPIO.input(pin2) == 0) and (GPIO.input(pin3) == 1):
			state = 1
			EXITING = 1
		
	elif state == 1: # first sensor broken, left or right
		if GPIO.input(pin2) ==0 and GPIO.input(pin3) == 0 : #both unbroken, go back to 0
			ENTERING = 0
			EXITING = 0
			state = 0
		if GPIO.input(pin2) and GPIO.input(pin3) :
			state = 3
		
	elif state == 3:
		if GPIO.input(pin2) ==0 and GPIO.input(pin3) == 0 : #both unbroken, go back to 0
			ENTERING = 0
			EXITING = 0
			state = 0
		if GPIO.input(pin2) == 0 and GPIO.input(pin3) and ENTERING :
			state = 4
		if GPIO.input(pin2) and GPIO.input(pin3) == 0 and EXITING :
			state = 4
			
	elif state == 4:
		if GPIO.input(pin2) == 0 and GPIO.input(pin3) == 0 and EXITING :
			counterOUT += 1
			ENTERING = 0
			EXITING = 0
			state = 0
			if 0 > counterIN - counterOUT:
				counterIN = 0
				counterOUT = 0
				print('NEGATIVE NUMBER OF PEOPLE')
			else:
				update_firebase(0)
		if GPIO.input(pin2) == 0 and GPIO.input(pin3) == 0 and ENTERING :
			counterIN += 1
			ENTERING = 0
			EXITING = 0
			state = 0
			update_firebase(1)

GPIO.cleanup()
