package main

import "fmt"

func div(x int, y int) (int, int) {
	if y == 0 {
		return 1, 0
	} else {
		return 0, x / y
	}

}

func main() {

	error, result := div(12, 2)
	if error != 1 {
		fmt.Println("Result ", result)
	} else {
		fmt.Println("Division by zero  ")
	}

}
