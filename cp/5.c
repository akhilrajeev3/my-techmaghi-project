#include<stdio.h>
int main()
{
    int mark;
    printf("enter the marks\n");
    scanf("%d",&mark);
    {
     if(mark<=100 && mark>=90){
        printf("A+");
     }
     else if(mark<90 && mark>=80){
        printf("A");
     }
     else if(mark<80 && mark>=70){
        printf("B+");
     }
     else if(mark<70 && mark>=60){
        printf("B");
     }
      else if(mark<60 && mark>=50){
        printf("C+");
     }
     else{
        printf("failed");
     }
    }
     return 0;
    
}