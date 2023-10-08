#include<stdio.h>
int main()
{
    int n,i;
    printf("enter the limit\n");
    scanf("%d",&n);
    printf("the numbers are:\n");
    for(i=1;i<=n;i++)
    {
     printf("%d\n",2*i-1);
    }

}