
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

#firebase usage:
firebase = firebase.FirebaseApplication('https://peoplestalker-318b4.firebaseio.com/', None)
#firebase.put("/dht", "/temp", "0.00")
#firebase.put("/dht", "/humidity", "0.00")

def update_firebase():
	data = {"counterIn": counterIN, "counterOut": counterOUT,"time":datetime.datetime.now()}
	#data = {"temp": temperature, "humidity": humidity}
	print('posting')
	firebase.post('/sensor/dht', data)
	

while True:
	#print('this:')
	#print(datetime.datetime.now())
	#print(GPIO.input(pin2))
	#print(GPIO.input(pin3))
	
	#update_firebase()

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
			update_firebase()
		if GPIO.input(pin2) == 0 and GPIO.input(pin3) == 0 and ENTERING :
			counterIN += 1
			ENTERING = 0
			EXITING = 0
			state = 0
			update_firebase()



GPIO.cleanup()
