package main

import (
	"sort"
	"testing"

	"github.com/stretchr/testify/assert"
)

func relativeSortArray(arr1 []int, arr2 []int) []int {
	ans := []int{}

	for _, a2 := range arr2 {
		for i := len(arr1) - 1; i >= 0; i-- {
			if arr1[i] == a2 {
				ans = append(ans, arr1[i])
				arr1 = append(arr1[:i], arr1[i+1:]...)
			}
		}
	}

	sort.Ints(arr1)

	return append(ans, arr1...)
}

func TestMain(t *testing.T) {
	assert.Equal(t, []int{2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19}, relativeSortArray([]int{2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19}, []int{2, 1, 4, 3, 9, 6}))
}
