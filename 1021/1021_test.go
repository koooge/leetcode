package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func removeOuterParentheses(S string) string {
	rem := ""
	depth := 0

	for _, c := range S {
		if depth > 0 {
			if c == ')' {
				depth--
			} else {
				depth++
			}
			if depth > 0 {
				rem += string(c)
			}
		} else {
			depth++
		}
	}

	return rem
}

func TestMain(t *testing.T) {
	assert.Equal(t, "()()()", removeOuterParentheses("(()())(())"))
	assert.Equal(t, "()()()()(())", removeOuterParentheses("(()())(())(()(()))"))
	assert.Equal(t, "", removeOuterParentheses("()()"))
}
