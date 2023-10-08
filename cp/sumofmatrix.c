#include<stdio.h>
int main()
{
    int i,j;
    float a[2][2], b[2][2],result[2][2];
    printf("enter the elements of the 1st matrix\n");
    for(i=0;i<2;i++)
    {
     for(j=0;j<2;j++)
     {
        printf("enter element (%d,%d)",i,j);
        scanf("%f",&a[i][j]);
     }
    }
    printf("enter the elements of the 2nd matrix\n");
    for(i=0;i<2;i++)
    {
     for(j=0;j<2;j++)
     {
        printf("enter the element at (%d,%d)",i,j);
        scanf("%f",&b[i][j]);
     }
    }
     for(i=0;i<2;i++)
    {
     for(j=0;j<2;j++)
     {
        result[i][j] = a[i][j] + b[i][j];
     }
    }
    for(i=0;i<2;i++)
    {
     for(j=0;j<2;j++)
     {
    printf(" %f",result[i][j]);
     }
     printf("\n");
    }
    


}