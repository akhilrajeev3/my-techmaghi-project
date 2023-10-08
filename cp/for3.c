#include<stdio.h>
int main(){

int i,n,sum=0,avg;
printf("enter the limit\n");
scanf("%d",&n);
printf("the first %d natural numbers are\n",n);
for(i=1;i<=n;i++)
{
    printf("\n%d",i);
    sum+=i;
    avg=sum/n;
}
printf("\nsum is %d and average is %d",sum,avg);
}
