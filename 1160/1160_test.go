package main

import (
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
)

func countCharacters(words []string, chars string) int {
	ans := 0
	charList := make(map[rune]int)
	for _, c := range chars {
		charList[c]++
	}

	for _, word := range words {
		for i, c := range word {
			count := strings.Count(word, string([]byte{byte(c)}))
			if charList[c] < count {
				break
			}

			if i == len(word)-1 {
				ans += len(word)
			}
		}
	}

	return ans
}

func TestMain(t *testing.T) {
	assert.Equal(t, 6, countCharacters([]string{"cat", "bt", "hat", "tree"}, "atach"))
	assert.Equal(t, 10, countCharacters([]string{"hello", "world", "leetcode"}, "welldonehoneyr"))
}
