package main

import (
	"testing"
	"unicode"

	"github.com/stretchr/testify/assert"
)

func findWords(words []string) []string {
	typable := []string{}

	for _, s := range words {
		row := -1
		for i, c := range s {
			r := findRow(c)
			if row == -1 {
				row = r
			} else if row != r {
				break
			}
			if i == len(s)-1 {
				typable = append(typable, s)
			}
		}
	}

	return typable
}

func findRow(r rune) int {
	first := []rune{'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'}
	second := []rune{'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'}
	third := []rune{'z', 'x', 'c', 'v', 'b', 'n', 'm'}

	c := unicode.ToLower(r)
	for _, a := range first {
		if c == a {
			return 1
		}
	}

	for _, a := range second {
		if c == a {
			return 2
		}
	}

	for _, a := range third {
		if c == a {
			return 3
		}
	}

	return -1
}

func TestMain(t *testing.T) {
	assert.Equal(t, []string{"Alaska", "Dad"}, findWords([]string{"Hello", "Alaska", "Dad", "Peace"}))
	assert.Equal(t, []string{}, findWords([]string{"omk"}))
	assert.Equal(t, []string{"adsdf", "sdf"}, findWords([]string{"adsdf", "sdf"}))
	assert.Equal(t, []string{"asdfghjkl", "qwertyuiop", "zxcvbnm"}, findWords([]string{"asdfghjkl", "qwertyuiop", "zxcvbnm"}))
}
