#include<stdio.h>
int main()
{
    int divident,divisor,quotient,remainder;
    printf("enter divident");
    scanf("%d",&divident);
    printf("enter divisor");
    scanf("%d",&divisor);
    quotient=divident/divisor;
    remainder=divident%divisor;
    printf("%d\n",quotient);
    printf("%d",remainder);
    return 0;
}
