package main

import (
	"sort"
	"testing"

	"github.com/stretchr/testify/assert"
)

func heightChecker(heights []int) int {
	sortedHeights := append(heights[:0:0], heights...)
	sort.Ints(sortedHeights)

	res := 0

	for i, _ := range heights {
		if sortedHeights[i] != heights[i] {
			res++
		}
	}

	return res
}

func TestMain(t *testing.T) {
	assert.Equal(t, 3, heightChecker([]int{1, 1, 4, 2, 1, 3}))
	assert.Equal(t, 5, heightChecker([]int{5, 1, 2, 3, 4}))
}
