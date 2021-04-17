package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func minDeletionSize(strs []string) int {
	d := 0

	for i := 0; i < len(strs[0]); i++ {
		for j := 0; j < len(strs)-1; j++ {
			if strs[j][i] > strs[j+1][i] {
				d++
				break
			}
		}
	}

	return d
}

func TestMain(t *testing.T) {
	assert.Equal(t, 1, minDeletionSize([]string{"cba", "daf", "ghi"}))
	assert.Equal(t, 0, minDeletionSize([]string{"a", "b"}))
	assert.Equal(t, 3, minDeletionSize([]string{"zyx", "wvu", "tsr"}))
}
