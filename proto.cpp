
#define LEDPIN 13
// Pin 13: Arduino has an LED connected on pin 13
// Pin 11: Teensy 2.0 has the LED on pin 11
// Pin  6: Teensy++ 2.0 has the LED on pin 6
// Pin 13: Teensy 3.0 has the LED on pin 13

#define INNERSENSORPIN 2
#define OUTERSENSORPIN 3

#define NONE 0
#define INCOMING 1
#define OUTGOING 2

#define READY 0
#define INNER_BROKEN 1
#define OUTER_BROKEN 2
#define BOTH_BROKEN 3

namespace ESOF
{
    class proto
    {
        int innerSensorState = 0, outerSensorState = 0, lastInnerState = 0, lastOuterState = 0;         // variables for reading the pushbutton status
		int status = READY, int transit = NONE;

        void setup()
        {
            // initialize the LED pin as an output:
            //pinMode(LEDPIN, OUTPUT);
            // initialize the sensor pins as an input:
            pinMode(INNERSENSORPIN, INPUT);
			pinMode(OUTERSENSORPIN, INPUT);
			// turn on the pullup
            
			digitalWrite(OUTERSENSORPIN, HIGH);
            Serial.begin(9600);
        }

        void loop()
        {
			switch (status)
			{
			case READY:
				// read the state of the pushbutton value:
				innerSensorState = digitalRead(SENSORPIN1);
				outerSensorState = digitalRead(SENSORPIN2);
				// check if the sensor beam is broken
				// if it is, the sensorState is LOW:
				digitalWrite(INNERSENSORPIN, HIGH);
				if (innerSensorState == LOW)
					// turn LED on:
					digitalWrite(LEDPIN, HIGH);
				else
					// turn LED off:
					digitalWrite(LEDPIN, LOW);

				if (innerSensorState && !lastInnerState)
					Serial.println("Inner Sensor Unbroken");					
				if (!innerSensorState && lastInnerState)
				{
					Serial.println("Inner Sensor Broken");
					transit = OUTGOING;
					status = INNER_BROKEN;
				}
				lastInnerState = innerSensorState;

				digitalWrite(OUTERSENSORPIN, HIGH);
				if (outerSensorState == LOW)
					// turn LED on:
					digitalWrite(LEDPIN, HIGH);
				else
					// turn LED off:
					digitalWrite(LEDPIN, LOW);

				if (outerSensorState && !lastOuterState)
					Serial.println("Outer Sensor Unbroken");
				if (!outerSensorState && lastOuterState)
				{
					Serial.println("Outer Sensor Broken");
					transit = INCOMING;
					status = OUTER_BROKEN;
				}
				lastOuterState = outerSensorState;
				break;
			case INNER_BROKEN:
				// read the state of the pushbutton value:
				innerSensorState = digitalRead(SENSORPIN1);
				outerSensorState = digitalRead(SENSORPIN2);
				// check if the sensor beam is broken
				// if it is, the sensorState is LOW:
				digitalWrite(INNERSENSORPIN, HIGH);
				if (innerSensorState == LOW)
					// turn LED on:
					digitalWrite(LEDPIN, HIGH);
				else
					// turn LED off:
					digitalWrite(LEDPIN, LOW);

				if (innerSensorState && !lastInnerState)
				{
					Serial.println("Inner Sensor Unbroken");
					if(transit == INCOMING)
						; //TODO: Stalker recebe a informação que entrou uma pessoa
					transit = NONE;
					status = READY;
				}
				if (!innerSensorState && lastInnerState)
					Serial.println("Inner Sensor Broken");
				lastInnerState = innerSensorState;

				digitalWrite(OUTERSENSORPIN, HIGH);
				if (outerSensorState == LOW)
					// turn LED on:
					digitalWrite(LEDPIN, HIGH);
				else
					// turn LED off:
					digitalWrite(LEDPIN, LOW);

				if (outerSensorState && !lastOuterState)
					Serial.println("Outer Sensor Unbroken");
				if (!outerSensorState && lastOuterState)
				{
					Serial.println("Outer Sensor Broken");
					status = BOTH_BROKEN;
				}
				lastOuterState = outerSensorState;
				break;
			case BOTH_BROKEN:
				// read the state of the pushbutton value:
				innerSensorState = digitalRead(SENSORPIN1);
				outerSensorState = digitalRead(SENSORPIN2);
				// check if the sensor beam is broken
				// if it is, the sensorState is LOW:
				digitalWrite(INNERSENSORPIN, HIGH);
				if (innerSensorState == LOW)
					// turn LED on:
					digitalWrite(LEDPIN, HIGH);
				else
					// turn LED off:
					digitalWrite(LEDPIN, LOW);

				if (innerSensorState && !lastInnerState)
				{
					Serial.println("Inner Sensor Unbroken");
					status = OUTER_BROKEN;
				}
				if (!innerSensorState && lastInnerState)
					Serial.println("Inner Sensor Broken");
				lastInnerState = innerSensorState;

				digitalWrite(OUTERSENSORPIN, HIGH);
				if (outerSensorState == LOW)
					// turn LED on:
					digitalWrite(LEDPIN, HIGH);
				else
					// turn LED off:
					digitalWrite(LEDPIN, LOW);

				if (outerSensorState && !lastOuterState)
				{
					Serial.println("Outer Sensor Unbroken");
					status = INNER_BROKEN;
				}
				if (!outerSensorState && lastOuterState)
					Serial.println("Outer Sensor Broken");
				lastOuterState = outerSensorState;
				break;
			case OUTER_BROKEN:
				// read the state of the pushbutton value:
				innerSensorState = digitalRead(SENSORPIN1);
				outerSensorState = digitalRead(SENSORPIN2);
				// check if the sensor beam is broken
				// if it is, the sensorState is LOW:
				digitalWrite(INNERSENSORPIN, HIGH);
				if (innerSensorState == LOW)
					// turn LED on:
					digitalWrite(LEDPIN, HIGH);
				else
					// turn LED off:
					digitalWrite(LEDPIN, LOW);

				if (innerSensorState && !lastInnerState)
					Serial.println("Inner Sensor Unbroken");
				if (!innerSensorState && lastInnerState)
				{
					Serial.println("Inner Sensor Broken");
					status = BOTH_BROKEN;
				}
				lastInnerState = innerSensorState;

				digitalWrite(OUTERSENSORPIN, HIGH);
				if (outerSensorState == LOW)
					// turn LED on:
					digitalWrite(LEDPIN, HIGH);
				else
					// turn LED off:
					digitalWrite(LEDPIN, LOW);

				if (outerSensorState && !lastOuterState)
				{
					Serial.println("Outer Sensor Unbroken");
					if (transit == OUTGOING)
						; //TODO: Stalker recebe a informação que saiu uma pessoa
					transit = NONE;
					status = READY;
				}
				if (!outerSensorState && lastOuterState)
					Serial.println("Outer Sensor Broken");
				lastOuterState = outerSensorState;
				break;
			default:
				break;
			}
            
        }
    }
}
