package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func sumOfUnique(nums []int) int {
	sum := 0
	m := make(map[int]int)

	for _, n := range nums {
		if m[n] == 0 {
			sum += n
		} else if m[n] == 1 {
			sum -= n
		}
		m[n]++
	}

	return sum
}

func TestMain(t *testing.T) {
	assert.Equal(t, 4, sumOfUnique([]int{1, 2, 3, 2}))
	assert.Equal(t, 0, sumOfUnique([]int{1, 1, 1, 1, 1}))
	assert.Equal(t, 15, sumOfUnique([]int{1, 2, 3, 4, 5}))
}
