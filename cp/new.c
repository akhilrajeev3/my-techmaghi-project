#include<stdio.h>
int main()
{
    int a,b;
    printf("enter two numbers\n");
    scanf("%d%d",&a,&b);
    b=++a;
    printf("a is %d\n",a);
    printf("b is %d",b);
    return 0;
}