package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func numJewelsInStones(jewels string, stones string) int {
	output := 0

	for _, s := range stones {
		for _, j := range jewels {
			if s == j {
				output++
			}
		}
	}

	return output
}

func TestMain(t *testing.T) {
	assert.Equal(t, numJewelsInStones("aA", "aAAbbbb"), 3)
	assert.Equal(t, numJewelsInStones("z", "ZZ"), 0)
}
