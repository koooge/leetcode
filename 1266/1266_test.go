package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func minTimeToVisitAllPoints(points [][]int) int {
	time := 0

	for i := 0; i < len(points)-1; i++ {
		dx := abs(points[i+1][0] - points[i][0])
		dy := abs(points[i+1][1] - points[i][1])
		if dx-dy > 0 {
			time += dx
		} else {
			time += dy
		}
	}

	return time
}

func abs(v int) int {
	if v < 0 {
		return -v
	}
	return v
}

func TestMain(t *testing.T) {
	assert.Equal(t, 7, minTimeToVisitAllPoints([][]int{{1, 1}, {3, 4}, {-1, 0}}))
	assert.Equal(t, 5, minTimeToVisitAllPoints([][]int{{3, 2}, {-2, 2}}))
}
