#include<stdio.h>
  int main()
  {
    system("cls");
    int a,b,choice,result;
    printf("enter two numbers\n");
    scanf("%d%d",&a,&b);
    printf("1 for addition\n2 for substraction\n");
    scanf("%d",&choice);
    switch(choice)
    {
        case 1:
        result=a+b;
        printf("result is %d\n",result);
        break;
        case 2:
        result=a-b;
        printf("result is %d\n",result);
        break;
        default:
        printf("Not available");
        

    }
    return 0;

  }