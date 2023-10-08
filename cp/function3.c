#include<stdio.h>
int add(int a,int b)
{
 int sum;
 sum=a+b;
 return sum;
}
int main()
{
    int sum,a=30,b=40;
    sum=add(a,b);
    printf("%d ",sum);
}