package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func countNegatives(grid [][]int) int {
	negative := 0

	for _, a := range grid {
		for _, n := range a {
			if n < 0 {
				negative++
			}
		}
	}

	return negative
}

func TestMain(t *testing.T) {
	assert.Equal(t, 8, countNegatives([][]int{{4, 3, 2, -1}, {3, 2, 1, -1}, {1, 1, -1, -2}, {-1, -1, -2, -3}}))
	assert.Equal(t, 0, countNegatives([][]int{{3, 2}, {1, 0}}))
	assert.Equal(t, 3, countNegatives([][]int{{1, -1}, {-1, -1}}))
	assert.Equal(t, 1, countNegatives([][]int{{-1}}))
}
