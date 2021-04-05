package main

import (
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
)

func truncateSentence(s string, k int) string {
	arr := strings.Split(s, " ")
	return strings.Join(arr[:k], " ")
}

func TestMain(t *testing.T) {
	assert.Equal(t, "Hello how are you", truncateSentence("Hello how are you Contestant", 4))
	assert.Equal(t, "What is the solution", truncateSentence("What is the solution to this problem", 4))
	assert.Equal(t, "chopper is not a tanuki", truncateSentence("chopper is not a tanuki", 5))
}
