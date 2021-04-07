package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func judgeCircle(moves string) bool {
	x := 0
	y := 0

	for _, c := range moves {
		if c == 'U' {
			y++
		} else if c == 'D' {
			y--
		} else if c == 'R' {
			x++
		} else if c == 'L' {
			x--
		}
	}

	return x == 0 && y == 0
}

func TestMain(t *testing.T) {
	assert.Equal(t, true, judgeCircle("UD"))
	assert.Equal(t, false, judgeCircle("LL"))
	assert.Equal(t, false, judgeCircle("RRDD"))
	assert.Equal(t, false, judgeCircle("LDRRLRUULR"))
}
