package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func minStartValue(nums []int) int {
	sum := 0
	min_sum := 0

	for _, n := range nums {
		sum += n
		if sum < min_sum {
			min_sum = sum
		}
	}

	return 1 - min_sum
}

func TestMain(t *testing.T) {
	assert.Equal(t, 5, minStartValue([]int{-3, 2, -3, 4, 2}))
	assert.Equal(t, 1, minStartValue([]int{1, 2}))
	assert.Equal(t, 5, minStartValue([]int{1, -2, -3}))
}
