#include<stdio.h>
int main()
{
    int i,j;
    int array[2][3]={3,4,7,2,5,7};
    printf("array elements are \n");
    for(i=0;i<2;i++)
    {
        
    for(j=0;j<3;j++)
    {
     printf("%d ",array[i][j]);
    }
    printf("\n");
    }
    


}