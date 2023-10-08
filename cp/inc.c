#include<stdio.h>
int main()
{
    int a=5,b,c;
    b=++a;
    // here a also becomes 6,so a=6 after the last line
    printf("%d\n",a);

    a=5;
    c=a++;
    printf("%d\n",b);
    printf("%d",c);
}