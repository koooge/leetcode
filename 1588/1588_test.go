package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func sumOddLengthSubarrays(arr []int) int {
	sum := 0

	for i := 1; i <= len(arr); i += 2 {
		for j := 0; j < len(arr)-i+1; j++ {
			for _, k := range arr[j : j+i] {
				sum += k
			}
		}
	}

	return sum
}

func TestMain(t *testing.T) {
	assert.Equal(t, 58, sumOddLengthSubarrays([]int{1, 4, 2, 5, 3}))
	assert.Equal(t, 3, sumOddLengthSubarrays([]int{1, 2}))
	assert.Equal(t, 66, sumOddLengthSubarrays([]int{10, 11, 12}))
}
