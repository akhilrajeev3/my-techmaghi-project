#include<stdio.h>
int main()
{
    int n=0;
    printf("enter the number");
    scanf("%d",&n);
    if(n>0)
    {
        printf("the number is positive");
    }
    else if(n<0){
            printf("the number is negative");
    
    }
    else{
        printf("zero");
    }
    return 0;

}