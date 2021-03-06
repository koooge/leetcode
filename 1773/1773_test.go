package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func countMatches(items [][]string, ruleKey string, ruleValue string) int {
	index := map[string]int{
		"type":  0,
		"color": 1,
		"name":  2,
	}[ruleKey]

	match := 0

	for _, item := range items {
		if item[index] == ruleValue {
			match++
		}
	}

	return match
}

func TestMain(t *testing.T) {
	assert.Equal(t, countMatches([][]string{
		{"phone", "blue", "pixel"},
		{"computer", "silver", "lenovo"},
		{"phone", "gold", "iphone"},
	}, "color", "silver"), 1)
	assert.Equal(t, countMatches([][]string{
		{"phone", "blue", "pixel"},
		{"computer", "silver", "phone"},
		{"phone", "gold", "iphone"},
	}, "type", "phone"), 2)
}
