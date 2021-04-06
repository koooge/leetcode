package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func repeatedNTimes(A []int) int {
	n := len(A) / 2
	m := make(map[int]int)

	for _, num := range A {
		m[num]++
		if m[num] == n {
			return num
		}
	}

	return -1
}

func TestMain(t *testing.T) {
	assert.Equal(t, 3, repeatedNTimes([]int{1, 2, 3, 3}))
	assert.Equal(t, 2, repeatedNTimes([]int{2, 1, 2, 5, 3, 2}))
	assert.Equal(t, 5, repeatedNTimes([]int{5, 1, 5, 2, 5, 3, 5, 4}))
}
