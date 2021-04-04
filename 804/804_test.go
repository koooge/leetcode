package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func uniqueMorseRepresentations(words []string) int {
	morse := []string{".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."}
	repr := []string{}
	unique := 0

	for _, word := range words {
		m := ""
		for _, c := range word {
			m += morse[c-97]
		}
		unique++
		for _, rep := range repr {
			if m == rep {
				unique--
				break
			}
		}
		repr = append(repr, m)
	}

	return unique
}

func TestMain(t *testing.T) {
	assert.Equal(t, 2, uniqueMorseRepresentations([]string{"gin", "zen", "gig", "msg"}))
}
