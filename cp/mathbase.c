#include<stdio.h>
int main()

{
	system("cls");
	int a,b,choice,result;
	printf("Enter two numbers\n");
	scanf("%d%d",&a,&b);
	printf("1 for additon \n2 for substraction\n3 for multiplication\n4 for division\n");
	scanf("%d",&choice);
	if(choice==1)
	{
		result=a+b;
		printf("result=%d",result);
	}
	else if(choice==2)
	{
		result=a-b;
		printf("result=%d",result);
	}
	else if(choice==3)
	{
		result=a*b;
		printf("result=%d",result);

	}
	else if(choice==4)
	
	{
		result=a/b;
		printf("result=%d",result);
	}
	else
	{
		printf("U did not enter a number");

	}
	return 0;
	
} 