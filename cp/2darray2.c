#include<stdio.h>
int main()
{
    int a,b,i,j;
    printf("enter the number of rows : ");
    scanf("%d",&a);
    printf("enter the number of columns : ");
    scanf("%d",&b);

    int array[a][b];
    
    for(i=0;i<a;i++)
    {
     for(j=0;j<b;j++)
     {
        printf("enter the element at (%d,%d) : ",i,j);
        scanf("%d",&array[i][j]);
     }
     
    }
    printf("the array is : \n");
    for(i=0;i<a;i++)
    {
     for(j=0;j<b;j++)
     {
        printf("%d ",array[i][j]);
        
     }
     printf("\n");
    }
    
}