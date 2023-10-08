#include<stdio.h>
int main()
{
    int i,sum=0;
    printf("the first ten numbers are\n");
    for(i=1;i<=10;i++)
    {
        printf("\n%d",i);
        sum+=i;
     
    }
    printf("\nthe sum is %d",sum);
}