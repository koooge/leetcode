package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func numberOfLines(widths []int, s string) []int {
	w := []int{1, 0}

	for i, _ := range s {
		width := widths[s[i]-97]
		if w[1]+width <= 100 {
			w[1] += width
		} else {
			w[0]++
			w[1] = width
		}
	}

	return w
}

func TestMain(t *testing.T) {
	assert.Equal(t, []int{3, 60}, numberOfLines([]int{10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10}, "abcdefghijklmnopqrstuvwxyz"))
	assert.Equal(t, []int{2, 4}, numberOfLines([]int{4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10}, "bbbcccdddaaa"))
}
