 #include<stdio.h>
 int main()
 {
    int i,limit;
    printf("enter a number\n");
    scanf("%d",&limit);
    for(i=2;i<=limit;i++)
    {
        if(i%2 ==0)
        printf("%d\n",i);
    }
    return 0;
 }