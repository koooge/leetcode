package main

import (
	"strconv"
	"testing"

	"github.com/stretchr/testify/assert"
)

func countBalls(lowLimit int, highLimit int) int {
	max := 0
	box := make(map[int]int)

	for i := lowLimit; i <= highLimit; i++ {
		boxnum := 0
		for _, c := range strconv.Itoa(i) {
			d, _ := strconv.Atoi(string(c))
			boxnum += d
		}
		box[boxnum]++
		if box[boxnum] > max {
			max = box[boxnum]
		}
	}

	return max
}

func TestMain(t *testing.T) {
	assert.Equal(t, 2, countBalls(1, 10))
	assert.Equal(t, 2, countBalls(5, 15))
	assert.Equal(t, 2, countBalls(19, 28))
}
