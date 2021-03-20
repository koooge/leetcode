package main

import (
	"math"
	"testing"

	"github.com/stretchr/testify/assert"
)

func countGoodTriplets(arr []int, a int, b int, c int) int {
	count := 0

	for i := 0; i < len(arr)-2; i++ {
		for j := i + 1; j < len(arr)-1; j++ {
			for k := j + 1; k < len(arr); k++ {
				xa := int(math.Abs(float64(arr[i] - arr[j])))
				xb := int(math.Abs(float64(arr[j] - arr[k])))
				xc := int(math.Abs(float64(arr[i] - arr[k])))
				if xa <= a && xb <= b && xc <= c {
					count++
				}
			}
		}
	}

	return count
}

func TestMain(t *testing.T) {
	assert.Equal(t, 4, countGoodTriplets([]int{3, 0, 1, 1, 9, 7}, 7, 2, 3))
	assert.Equal(t, 0, countGoodTriplets([]int{1, 1, 2, 2, 3}, 0, 0, 1))
}
