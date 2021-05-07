package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func minStartValue(nums []int) int {
	for i := 1; ; i++ {
		sum := i
		for j := 0; j < len(nums); j++ {
			sum += nums[j]
			if sum < 1 {
				break
			}
			if j == len(nums)-1 {
				return i
			}
		}
	}
}

func TestMain(t *testing.T) {
	assert.Equal(t, 5, minStartValue([]int{-3, 2, -3, 4, 2}))
	assert.Equal(t, 1, minStartValue([]int{1, 2}))
	assert.Equal(t, 5, minStartValue([]int{1, -2, -3}))
}
