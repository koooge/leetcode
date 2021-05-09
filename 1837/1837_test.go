package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func sumBase(n int, k int) int {
	a := 0

	for n >= k {
		a += n % k
		n /= k
	}

	return a + n
}

func TestMain(t *testing.T) {
	assert.Equal(t, 9, sumBase(34, 6))
	assert.Equal(t, 1, sumBase(10, 10))
	assert.Equal(t, 3, sumBase(42, 2))
}
