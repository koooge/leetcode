package main

import (
	"sort"
	"testing"

	"github.com/stretchr/testify/assert"
)

func frequencySort(nums []int) []int {
	d := make(map[int]int)

	for i, _ := range nums {
		d[nums[i]]++
	}

	sort.Slice(nums, func(a, b int) bool {
		if d[nums[a]] == d[nums[b]] {
			return nums[a] > nums[b]
		}
		return d[nums[a]] < d[nums[b]]
	})

	return nums
}

func TestMain(t *testing.T) {
	assert.Equal(t, []int{3, 1, 1, 2, 2, 2}, frequencySort([]int{1, 1, 2, 2, 2, 3}))
	assert.Equal(t, []int{1, 3, 3, 2, 2}, frequencySort([]int{2, 3, 1, 3, 2}))
	assert.Equal(t, []int{5, -1, 4, 4, -6, -6, 1, 1, 1}, frequencySort([]int{-1, 1, -6, 4, 5, -6, 1, 4, 1}))
}
