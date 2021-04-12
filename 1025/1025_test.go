package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func divisorGame(n int) bool {
	return n%2 == 0
}

func TestMain(t *testing.T) {
	assert.Equal(t, true, divisorGame(2))
	assert.Equal(t, false, divisorGame(3))
}
