#include<stdio.h>
int main()
{
    int i,n;
    printf("enter the size of array\n");
    scanf("%d",&n);
    //intialize array after getting value of n
    int s[n];
    for(i=0;i<n;i++)
    {
        printf("enter the element %d:",i);
        //store values into each array position using s[i]
        scanf("%d",&s[i]);
    }
    printf("The elements are\n");
    for(i=0;i<n;i++)
    {
        //print using s[i]
        printf(" %d",s[i]);
        
        
    }
    printf("\n");
  
}