#include<stdio.h>
int main()
{
    int i,k,j,row;
    printf("Enter the number of rows");
    scanf("%d",&row);
    for(i=1;i<=row;i++)
    {
        for(k=i;k<=row;k++)
        {
         printf(" ");
        }
    for(j=1;j<=i;j++)
    {
     printf(" *");
    }
 printf("\n");
 
 }
    return 0;
}