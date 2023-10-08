#include<stdio.h>
int main()
{
    int arows,acolumns,brows,bcolumns;
   
    int i,j,k;
    
    int sum=0;
    printf("enter the rows and columns of the matrix a:");
    scanf("%d %d",&arows,&acolumns);

    int a[arows][acolumns];

    printf("enter the elements of the matrix a:\n");
    for(i=0;i<arows;i++)
    {
        for(j=0;j<acolumns;j++)
        {
            printf("enter the element at (%d,%d):",i,j);
            scanf("%d",&a[i][j]);
        }
    }
    printf("enter the rows and columns of matrix b:");
    scanf("%d %d",&brows,&bcolumns);

    int b[brows][bcolumns];

    if(brows!=acolumns)
    {
        printf("the matrix cannot be multiplied\n");
    }
    else
    printf("enter the elements of matrix b:\n");
    for(i=0;i<brows;i++)
    {
        for(j=0;j<bcolumns;j++)
        {
            printf("enter the element at (%d,%d):",i,j);
            scanf("%d",&b[i][j]);
        }
    }
    int pdt[arows][bcolumns];


    for(i=0;i<arows;i++)
    {
        for(j=0;j<bcolumns;j++)
        {
            sum=0;
            for(k=0;k<brows;k++)
            {
            
                sum+= a[i][k] * b[k][j];
                
                
            }
            pdt[i][j]=sum;
            
        }
    }
    for(i=0;i<arows;i++)
    {
        for(j=0;j<bcolumns;j++)
        {
            printf("%d ",pdt[i][j]);
        }
        printf("\n");
    }
    
}