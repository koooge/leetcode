package main

import (
	"sort"
	"testing"

	"github.com/stretchr/testify/assert"
)

func minSubsequence(nums []int) []int {
	sort.Sort(sort.Reverse(sort.IntSlice(nums)))

	total := 0
	for _, n := range nums {
		total += n
	}

	sub := []int{}
	subTotal := 0
	for _, n := range nums {
		if subTotal > total/2 {
			break
		}
		subTotal += n
		sub = append(sub, n)
	}

	return sub
}

func TestMain(t *testing.T) {
	assert.Equal(t, []int{10, 9}, minSubsequence([]int{4, 3, 10, 9, 8}))
	assert.Equal(t, []int{7, 7, 6}, minSubsequence([]int{4, 4, 7, 6, 7}))
}
