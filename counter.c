#include <wiringPi.h>
#include <stdio.h>

int main(void)
{
 int state = 0;
 int pin_input2 = 2;
 int pin_input3 = 3;
 int counterIN = 0, counterOUT = 0;
 if(wiringPiSetup()==-1)
   {printf("error"); return 1;}
 pinMode(pin_input2, INPUT);
 pinMode(pin_input3, INPUT);
 int ENTERING =0, EXITING =0;
 
  for(;;)
  {
   delay(20);

  switch(state)
  {
	case 0: //both unbroken
	
	if(digitalRead(pin_input2) && !digitalRead(pin_input3))
		{
		 state=1; //go to first state, ENTERING
		 ENTERING = 1;
		}
	if(!digitalRead(pin_input2) && digitalRead(pin_input3))
		{
		 state=1; //go to first state, EXITING
		 EXITING=1;
		}
	break;

	case 1: //first sensor broken, left or right
	
	if(!digitalRead(pin_input2) && !digitalRead(pin_input3)) //both unbroken, go back to 0
		{
		ENTERING=0; EXITING = 0;
		state=0;
		}
	if(digitalRead(pin_input2) && digitalRead(pin_input3))
	state=3; 
	break;
	
	case 3:
	
	if(!digitalRead(pin_input2) && !digitalRead(pin_input3)) //both unbroken, go back to 0
		{
		ENTERING=0; EXITING = 0;
		state=0;
		}
	if(!digitalRead(pin_input2) && digitalRead(pin_input3) && ENTERING)
		{
		state=4;
		}
	if(digitalRead(pin_input2) && !digitalRead(pin_input3) && EXITING)
		{
		state=4;
		}
	break;
	
	case 4:printf("Case 4\n");
	if(!digitalRead(pin_input2) && !digitalRead(pin_input3)&& EXITING)
	{
	counterOUT++;
	EXITING =0; ENTERING=0;
	state=0;
	printf("CounterOUT: %d\n",counterOUT);
	}
	if(!digitalRead(pin_input2) && !digitalRead(pin_input3)&& ENTERING)
	{
	counterIN++;
	EXITING =0; ENTERING=0;
	state=0;
	printf("CounterIN: %d\n",counterIN);
	}
	break;

  }
  }
 return 0;
}