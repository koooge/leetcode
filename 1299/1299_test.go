package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func replaceElements(arr []int) []int {
	greatest := -1

	for i := len(arr) - 1; i >= 0; i-- {
		if greatest > arr[i] {
			arr[i] = greatest
		} else {
			arr[i], greatest = greatest, arr[i]
		}
	}

	return arr
}

func TestMain(t *testing.T) {
	assert.Equal(t, []int{18, 6, 6, 6, 1, -1}, replaceElements([]int{17, 18, 5, 4, 6, 1}))
	assert.Equal(t, []int{-1}, replaceElements([]int{400}))
}
