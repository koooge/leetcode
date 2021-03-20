package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func countGoodTriplets(arr []int, a int, b int, c int) int {
	count := 0

	for i := 0; i < len(arr)-2; i++ {
		for j := i + 1; j < len(arr)-1; j++ {
			for k := j + 1; k < len(arr); k++ {
				da := arr[i] - arr[j]
				db := arr[j] - arr[k]
				dc := arr[i] - arr[k]
				if da <= a && da >= -a && db <= b && db >= -b && dc <= c && dc >= -c {
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
