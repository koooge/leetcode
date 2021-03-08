package main

import (
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
)

func countConsistentStrings(allowed string, words []string) int {
	output := 0

	for _, word := range words {
		output++
		for _, c := range word {
			if !strings.ContainsRune(allowed, c) {
				output--
				break
			}
		}
	}

	return output
}

func TestMain(t *testing.T) {
	assert.Equal(t, countConsistentStrings("ab", []string{"ad", "bd", "aaab", "baa", "badab"}), 2)
	assert.Equal(t, countConsistentStrings("abc", []string{"a", "b", "c", "ab", "ac", "bc", "abc"}), 7)
	assert.Equal(t, countConsistentStrings("cad", []string{"cc", "acd", "b", "ba", "bac", "bad", "ac", "d"}), 4)
}
