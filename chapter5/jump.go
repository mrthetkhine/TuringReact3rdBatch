package main

import "fmt"

func main() {

	x := 0
label:
	fmt.Println("hello ")
	fmt.Println("Hello 2")
	x = x + 1
	if x < 5 {
		goto label
	} else {
		goto another
	}
	fmt.Println("Never printed")
another:
	fmt.Println("Another label")
	//goto label

}
