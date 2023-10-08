#include<stdio.h>
int main()
{
    int i,j;
    for(i=0;i<5;i++)
    {
        for(j=1;j<4;j++)
        {
            printf("%d ",j);
        }
        // This statement executes after the inner loop executes till the condition of inner loop is satisfied
        // then control goes to outer loop
        printf("\n");
    }
}