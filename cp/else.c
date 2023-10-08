#include<stdio.h>
int main()
{
    system("cls");
    int num1,num2;
    printf("enter the numbers");
    scanf("%d%d",&num1,&num2);
    if(num1<num2)
    {
        printf("greater number is %d",num2);

    }
    else
    {
        printf("greater number is %d",num1);
    }
    return 0;

}