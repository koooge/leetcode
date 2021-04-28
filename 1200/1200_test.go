package main

import (
	"sort"
	"testing"

	"github.com/stretchr/testify/assert"
)

func minimumAbsDifference(arr []int) [][]int {
	min := [][]int{}
	sort.Ints(arr)
	minAbs := arr[len(arr)-1] - arr[0]

	for i := 0; i < len(arr)-1; i++ {
		d := arr[i+1] - arr[i]
		if d == minAbs {
			min = append(min, []int{arr[i], arr[i+1]})
		} else if d < minAbs {
			min = [][]int{{arr[i], arr[i+1]}}
			minAbs = d
		}
	}

	return min
}

func TestMain(t *testing.T) {
	assert.Equal(t, [][]int{{1, 2}, {2, 3}, {3, 4}}, minimumAbsDifference([]int{4, 2, 1, 3}))
	assert.Equal(t, [][]int{{1, 3}}, minimumAbsDifference([]int{1, 3, 6, 10, 15}))
	assert.Equal(t, [][]int{{-14, -10}, {19, 23}, {23, 27}}, minimumAbsDifference([]int{3, 8, -10, 23, 19, -4, -14, 27}))
}
