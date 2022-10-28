#include <iostream>
using namespace std;

int main() {
    double x, y, result;
    int choice;
    cout << "Enter two numbers: \n";
    cin >> x >> y;
    cout << "Which operation do you want to perform: \n";
    cout << "For Addition : Press 1 \n";
    cout << "For Subtraction : Press 2 \n";
    cout << "For Multiplication : Press 3 \n";
    cout << "For Division : Press 4 \n";
    cin >> choice;
    if (choice == 1) { 
        result = x + y;
    }
    else if (choice == 2) {
        result = x - y;
    }
    else if (choice == 3) {
        result = x * y;
    }
    else if (choice == 4) {
        result = x / y;
    }
    else {
        cout << "WRONG CHOICE";
    }
    cout << result;
    return 0;
}