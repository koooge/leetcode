package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func shuffle(nums []int, n int) []int {
	shuffled := []int{}
	for i := 0; i < n; i++ {
		shuffled = append(shuffled, nums[i], nums[i+n])
	}
	return shuffled
}

func TestMain(t *testing.T) {
	assert.Equal(t, shuffle([]int{2, 5, 1, 3, 4, 7}, 3), []int{2, 3, 5, 4, 1, 7})
	assert.Equal(t, shuffle([]int{1, 2, 3, 4, 4, 3, 2, 1}, 4), []int{1, 4, 2, 3, 3, 2, 4, 1})
	assert.Equal(t, shuffle([]int{1, 1, 2, 2}, 2), []int{1, 2, 1, 2})
}
