#include<stdio.h>

int main() {
    int arows, acolumns, brows, bcolumns, prows, pcolumns;
    int i, j, k;
    int sum = 0;

    printf("Enter the rows and columns of matrix a: ");
    scanf("%d %d", &arows, &acolumns);

    int a[arows][acolumns];

    printf("Enter the elements of matrix a:\n");
    for (i = 0; i < arows; i++) {
        for (j = 0; j < acolumns; j++) {
            printf("Enter the element at (%d,%d): ", i, j);
            scanf("%d", &a[i][j]);
        }
    }

    printf("Enter the rows and columns of matrix b: ");
    scanf("%d %d", &brows, &bcolumns);

    int b[brows][bcolumns];

    if (brows != acolumns) {
        printf("The matrices cannot be multiplied.\n");
    } else {
        printf("Enter the elements of matrix b:\n");
        for (i = 0; i < brows; i++) {
            for (j = 0; j < bcolumns; j++) {
                printf("Enter the element at (%d,%d): ", i, j);
                scanf("%d", &b[i][j]);
            }
        }

        prows = arows; // Number of rows in the product matrix
        pcolumns = bcolumns; // Number of columns in the product matrix

        int pdt[prows][pcolumns]; // Result matrix

        for (i = 0; i < prows; i++) {
            for (j = 0; j < pcolumns; j++) {
                sum = 0;
                for (k = 0; k < acolumns; k++) {
                    sum += a[i][k] * b[k][j];
                }
                pdt[i][j] = sum;
            }
        }

        printf("The product of the matrices is:\n");
        for (i = 0; i < prows; i++) {
            for (j = 0; j < pcolumns; j++) {
                printf("%d ", pdt[i][j]);
            }
            printf("\n");
        }
    }

    return 0;
}
