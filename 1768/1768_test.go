package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func mergeAlternately(word1 string, word2 string) string {
	merged := ""

	for i := 0; i < len(word1) || i < len(word2); i++ {
		if i < len(word1) {
			merged += string(word1[i])
		}
		if i < len(word2) {
			merged += string(word2[i])
		}

	}

	return merged
}

func TestMain(t *testing.T) {
	assert.Equal(t, "apbqcr", mergeAlternately("abc", "pqr"))
	assert.Equal(t, "apbqrs", mergeAlternately("ab", "pqrs"))
	assert.Equal(t, "apbqcd", mergeAlternately("abcd", "pq"))
}
