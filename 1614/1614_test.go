package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func maxDepth(s string) int {
	max := 0
	open := 0

	for _, c := range s {
		if c == '(' {
			open++
			if open > max {
				max = open
			}
		} else if c == ')' {
			open--
		}
	}

	return max
}

func TestMain(t *testing.T) {
	assert.Equal(t, 3, maxDepth("(1+(2*3)+((8)/4))+1"))
	assert.Equal(t, 1, maxDepth("1+(2*3)/(2-1)"))
	assert.Equal(t, 0, maxDepth("1"))
}
