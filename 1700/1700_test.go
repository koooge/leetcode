package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func countStudents(students []int, sandwiches []int) int {
	count := []int{0, 0}

	for i := 0; i < len(students); i++ {
		count[students[i]]++
	}

	for i := 0; i < len(sandwiches); i++ {
		if count[sandwiches[i]] == 0 {
			break
		}
		count[sandwiches[i]]--
	}

	return count[0] + count[1]
}

func TestMain(t *testing.T) {
	assert.Equal(t, 0, countStudents([]int{1, 1, 0, 0}, []int{0, 1, 0, 1}))
	assert.Equal(t, 3, countStudents([]int{1, 1, 1, 0, 0, 1}, []int{1, 0, 0, 0, 1, 1}))
}
