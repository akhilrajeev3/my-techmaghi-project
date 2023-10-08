#include<stdio.h>
int main()
{
    int marks;
    printf("enter marks:");
    scanf("%d",&marks);
    {

    if(marks>=90)
    {
        printf("A+");

    }
    else if( marks<90)
    {
        printf("B+");
    }
    else if( marks<=80)
    {
        printf("c+");
    }
    else if(marks<=70)
    {
        printf("D+");   
    }

    else{
            printf("F failed");

    }
    }

        return 0;
}