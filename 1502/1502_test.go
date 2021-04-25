package main

import (
	"sort"
	"testing"

	"github.com/stretchr/testify/assert"
)

func canMakeArithmeticProgression(arr []int) bool {
	sort.Ints(arr)
	d := arr[1] - arr[0]

	for i := 2; i < len(arr); i++ {
		if arr[i]-arr[i-1] != d {
			return false
		}
	}

	return true
}

func TestMain(t *testing.T) {
	assert.Equal(t, true, canMakeArithmeticProgression([]int{3, 5, 1}))
	assert.Equal(t, false, canMakeArithmeticProgression([]int{1, 2, 4}))
}
