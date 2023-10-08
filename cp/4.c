#include<stdio.h>
int main()
{
    int num;
    printf("enter a number\n");
    scanf("%d",&num);
    {
        if(num>0)
        {
            printf("the number is positive");
        }
        else if(num<0){
            printf("negative");
        }
        else{
            printf("zero");
        }
    }
    return 0;
}