package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func minCostToMoveChips(position []int) int {
	odd, even := 0, 0
	for _, c := range position {
		if c%2 == 0 {
			even++
		} else {
			odd++
		}
	}

	if even < odd {
		return even
	}

	return odd
}

func TestMain(t *testing.T) {
	assert.Equal(t, 1, minCostToMoveChips([]int{1, 2, 3}))
	assert.Equal(t, 2, minCostToMoveChips([]int{2, 2, 2, 3, 3}))
	assert.Equal(t, 1, minCostToMoveChips([]int{1, 1000000000}))
	assert.Equal(t, 1, minCostToMoveChips([]int{1, 2, 2, 2, 2}))
}
