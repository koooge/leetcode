package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func balancedStringSplit(s string) int {
	stack := []rune{}
	amount := 0

	for _, c := range s {
		if len(stack) == 0 || c == stack[len(stack)-1] {
			stack = append(stack, c)
		} else {
			stack = stack[:len(stack)-1]
			if len(stack) == 0 {
				amount++
			}
		}
	}

	return amount
}

func TestMain(t *testing.T) {
	assert.Equal(t, 4, balancedStringSplit("RLRRLLRLRL"))
	assert.Equal(t, 3, balancedStringSplit("RLLLLRRRLR"))
	assert.Equal(t, 1, balancedStringSplit("LLLLRRRR"))
}
