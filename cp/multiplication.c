#include<stdio.h>
int main()
{
    int i,n;
    printf("whose table is to be printed\n");
    scanf("%d",&n);
    for(i=1;i<=10;i++)
    {
        printf("\n%d X %d = %d",n,i,n*i);
    
    }
}