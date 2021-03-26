package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func sortArrayByParity(A []int) []int {
	odds := []int{}
	evens := []int{}

	for _, n := range A {
		if n%2 == 0 {
			evens = append(evens, n)
		} else {
			odds = append(odds, n)
		}
	}

	return append(evens, odds...)
}

func TestMain(t *testing.T) {
	assert.Equal(t, []int{2, 4, 3, 1}, sortArrayByParity([]int{3, 1, 2, 4}))
}
