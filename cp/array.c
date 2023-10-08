#include<stdio.h>
int main()
{
    int sum=0,i,size[10],n;
    float avg;
    printf("enter the number of elements\n");
    scanf("%d",&n);
    for(i=0;i<n;i++)
    {
        printf("Enter the element %d\n",i);
        scanf("%d",&size[i]);
        sum+=size[i];
    }
    printf("\n sum=%d\n",sum);
    avg=sum/n;
    printf("average = %f",avg);
    
}