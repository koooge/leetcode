package main

import (
	"sort"
	"testing"

	"github.com/stretchr/testify/assert"
)

func arrayPairSum(nums []int) int {
	sort.Ints(nums)
	sum := 0

	for i := 0; i < len(nums); i += 2 {
		sum += nums[i]
	}

	return sum
}

func TestMain(t *testing.T) {
	assert.Equal(t, 4, arrayPairSum([]int{1, 4, 3, 2}))
	assert.Equal(t, 9, arrayPairSum([]int{6, 2, 6, 5, 1, 2}))
}
