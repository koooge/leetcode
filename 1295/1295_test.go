package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func findNumbers(nums []int) int {
	evens := 0

	for _, num := range nums {
		digit := 1
		for num >= 10 {
			num /= 10
			digit++
		}
		if digit%2 == 0 {
			evens++
		}
	}

	return evens
}

func TestMain(t *testing.T) {
	assert.Equal(t, 2, findNumbers([]int{12, 345, 2, 6, 7896}))
	assert.Equal(t, 1, findNumbers([]int{555, 901, 482, 1771}))
	assert.Equal(t, 1, findNumbers([]int{100000}))
}
