package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func shortestToChar(s string, c byte) []int {
	arr := []int{}

	for i := 0; i < len(s); i++ {
		for j := 0; ; j++ {
			if i+j < len(s) && s[i+j] == c || i-j >= 0 && s[i-j] == c {
				arr = append(arr, j)
				break
			}
		}
	}

	return arr
}

func TestMain(t *testing.T) {
	assert.Equal(t, []int{3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0}, shortestToChar("loveleetcode", 'e'))
	assert.Equal(t, []int{3, 2, 1, 0}, shortestToChar("aaab", 'b'))
}
