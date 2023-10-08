#include<stdio.h>
void line(char c)
//char c is argument
{
    int i;
    for(i=0;i<=20;i++)
    printf("%c",c);
}
void main()
{
    line('*'); // * goes to char c and executes the function
    printf("\nmark list\n");
    line('#');
}

//function with argument and no return value
