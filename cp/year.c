#include<stdio.h>
int main()
{
    int y,m,d,w;
    printf("enter the number of days\n");
    scanf("%d",&d);
    y=d/365;
    m=d/30;
    w=d/7;
    printf("Years = %d\n",y);
    printf("weeks = %d",w);
}