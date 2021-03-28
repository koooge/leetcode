package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func numberOfSteps(num int) int {
	step := 0

	for num > 0 {
		if num%2 == 0 {
			num /= 2
		} else {
			num--
		}
		step++
	}

	return step
}

func TestMain(t *testing.T) {
	assert.Equal(t, 6, numberOfSteps(14))
	assert.Equal(t, 4, numberOfSteps(8))
	assert.Equal(t, 12, numberOfSteps(123))
}
