#include<stdio.h>
int main()
{
    int i,num,sum=0;
    system("cls");
    printf("enter a number\n");
    scanf("%d",&num);
    for(i=1;i<=num;i++)
    {
        sum=sum+i;
    }
    printf("result is %d",sum);
    return 0;
}