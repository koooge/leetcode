package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func largestAltitude(gain []int) int {
	largest := 0
	alt := 0

	for _, a := range gain {
		alt += a
		if alt > largest {
			largest = alt
		}
	}

	return largest
}

func TestMain(t *testing.T) {
	assert.Equal(t, 1, largestAltitude([]int{-5, 1, 5, 0, -7}))
	assert.Equal(t, 0, largestAltitude([]int{-4, -3, -2, -1, 4, 3, 2}))
}
