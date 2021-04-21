package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func projectionArea(grid [][]int) int {
	xy := 0
	yz := 0
	zx := 0

	yzmax := grid[0]

	for _, cubes := range grid {
		for i := 0; i < len(cubes); i++ {
			if len(yzmax) < i || cubes[i] > yzmax[i] {
				yzmax[i] = cubes[i]
			}
		}

		zxmax := 0
		for _, cube := range cubes {
			if cube != 0 {
				xy++
			}

			if cube > zxmax {
				zxmax = cube
			}
		}
		zx += zxmax
	}

	for _, n := range yzmax {
		yz += n
	}

	return xy + yz + zx
}

func TestMain(t *testing.T) {
	assert.Equal(t, 17, projectionArea([][]int{{1, 2}, {3, 4}}))
	assert.Equal(t, 5, projectionArea([][]int{{2}}))
	assert.Equal(t, 8, projectionArea([][]int{{1, 0}, {0, 2}}))
	assert.Equal(t, 14, projectionArea([][]int{{1, 1, 1}, {1, 0, 1}, {1, 1, 1}}))
	assert.Equal(t, 21, projectionArea([][]int{{2, 2, 2}, {2, 1, 2}, {2, 2, 2}}))
}
