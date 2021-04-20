package main

import (
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
)

func commonChars(A []string) []string {
	commons := []string{}

	for _, c := range A[0] {
		for i, w := range A {
			index := strings.Index(w, string(c))
			if index == -1 {
				break
			}
			A[i] = A[i][:index] + A[i][index+1:]

			if i == len(A)-1 {
				commons = append(commons, string(c))
			}
		}
	}

	return commons
}

func TestMain(t *testing.T) {
	assert.Equal(t, []string{"e", "l", "l"}, commonChars([]string{"bella", "label", "roller"}))
	assert.Equal(t, []string{"c", "o"}, commonChars([]string{"cool", "lock", "cook"}))
}
