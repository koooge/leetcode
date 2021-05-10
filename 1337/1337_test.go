package main

import (
	"sort"
	"testing"

	"github.com/stretchr/testify/assert"
)

func kWeakestRows(mat [][]int, k int) []int {
	keys := make([]int, len(mat))
	n := len(mat[0])
	for i := 0; i < len(mat); i++ {
		weight := 0
		for j := 0; j < n; j++ {
			if mat[i][j] == 0 {
				break
			}
			weight++
		}
		keys[i] = weight<<16 | i
	}

	sort.Ints(keys)

	for i := 0; i < k; i++ {
		keys[i] &= 0xffff
	}
	return keys[:k]
}

func TestMain(t *testing.T) {
	assert.Equal(t, []int{2, 0, 3}, kWeakestRows([][]int{
		{1, 1, 0, 0, 0},
		{1, 1, 1, 1, 0},
		{1, 0, 0, 0, 0},
		{1, 1, 0, 0, 0},
		{1, 1, 1, 1, 1},
	}, 3))

	assert.Equal(t, []int{0, 2}, kWeakestRows([][]int{
		{1, 0, 0, 0},
		{1, 1, 1, 1},
		{1, 0, 0, 0},
		{1, 0, 0, 0},
	}, 2))
}
