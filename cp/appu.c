#include<stdio.h.>
int main()
{
    system("cls");
    int a,b;
    printf("enter two numbers");
    scanf("%d%d",&a,&b);
    if (a>b)
    {
       printf("the largest number is %d",a);
    }
    else
    {
        printf("the largest number is %d",b);
    }

    return 0;

}