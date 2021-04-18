package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func numSpecialEquivGroups(A []string) int {
	m := map[[52]int]interface{}{}

	for _, s := range A {
		array := [52]int{}
		for i, c := range s {
			if i%2 == 0 {
				array[c-'a']++
			} else {
				array[c-'a'+26]++
			}
		}
		m[array] = nil
	}

	return len(m)
}

func TestMain(t *testing.T) {
	assert.Equal(t, 3, numSpecialEquivGroups([]string{"abcd", "cdab", "cbad", "xyzz", "zzxy", "zzyx"}))
	assert.Equal(t, 3, numSpecialEquivGroups([]string{"abc", "acb", "bac", "bca", "cab", "cba"}))
}
