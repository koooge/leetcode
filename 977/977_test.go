package main

import (
	"sort"
	"testing"

	"github.com/stretchr/testify/assert"
)

func sortedSquares(nums []int) []int {
	for i, _ := range nums {
		nums[i] = nums[i] * nums[i]
	}

	sort.Ints(nums)

	return nums
}

func TestMain(t *testing.T) {
	assert.Equal(t, []int{0, 1, 9, 16, 100}, sortedSquares([]int{-4, -1, 0, 3, 10}))
	assert.Equal(t, []int{4, 9, 9, 49, 121}, sortedSquares([]int{-7, -3, 2, 3, 11}))
}
