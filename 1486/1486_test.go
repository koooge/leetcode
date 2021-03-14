package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func xorOperation(n int, start int) int {
	xor := start

	for i := 1; i < n; i++ {
		numsI := start + 2*i
		xor = xor ^ numsI
	}

	return xor
}

func TestMain(t *testing.T) {
	assert.Equal(t, 8, xorOperation(5, 0))
	assert.Equal(t, 8, xorOperation(4, 3))
	assert.Equal(t, 7, xorOperation(1, 7))
	assert.Equal(t, 2, xorOperation(10, 5))
}
