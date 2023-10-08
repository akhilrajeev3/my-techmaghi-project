#include<stdio.h>
int main()
{
    int age;
    printf("enter the age\n");
    scanf("%d",&age);
    {
        if(age>=18)
        {
            printf("you are eligible");
        }
        else{
            printf("you are not eligble");
        }
        return 0;
    }
}