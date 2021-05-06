package main

import (
	"testing"
	"unicode"

	"github.com/stretchr/testify/assert"
)

func numRookCaptures(board [][]byte) int {
	num := 0

	for i, row := range board {
		for j, _ := range row {
			if row[j] == 'R' {
				// left
				for d := 1; j-d >= 0; d++ {
					if board[i][j-d] != '.' {
						if unicode.IsLower(rune(board[i][j-d])) {
							num++
						}
						break
					}
				}

				// right
				for d := 1; j+d < 8; d++ {
					if board[i][j+d] != '.' {
						if unicode.IsLower(rune(board[i][j+d])) {
							num++
						}
						break
					}
				}

				// top
				for d := 1; i-d >= 0; d++ {
					if board[i-d][j] != '.' {
						if unicode.IsLower(rune(board[i-d][j])) {
							num++
						}
						break
					}
				}

				// bottom
				for d := 1; i+d < 8; d++ {
					if board[i+d][j] != '.' {
						if unicode.IsLower(rune(board[i+d][j])) {
							num++
						}
						break
					}
				}

				return num
			}
		}
	}

	return 0
}

func TestMain(t *testing.T) {
	assert.Equal(t, 3, numRookCaptures([][]byte{
		{'.', '.', '.', '.', '.', '.', '.', '.'},
		{'.', '.', '.', 'p', '.', '.', '.', '.'},
		{'.', '.', '.', 'R', '.', '.', '.', 'p'},
		{'.', '.', '.', '.', '.', '.', '.', '.'},
		{'.', '.', '.', '.', '.', '.', '.', '.'},
		{'.', '.', '.', 'p', '.', '.', '.', '.'},
		{'.', '.', '.', '.', '.', '.', '.', '.'},
		{'.', '.', '.', '.', '.', '.', '.', '.'},
	}))

	assert.Equal(t, 0, numRookCaptures([][]byte{
		{'.', '.', '.', '.', '.', '.', '.', '.'},
		{'.', 'p', 'p', 'p', 'p', 'p', '.', '.'},
		{'.', 'p', 'p', 'B', 'p', 'p', '.', '.'},
		{'.', 'p', 'B', 'R', 'B', 'p', '.', '.'},
		{'.', 'p', 'p', 'B', 'p', 'p', '.', '.'},
		{'.', 'p', 'p', 'p', 'p', 'p', '.', '.'},
		{'.', '.', '.', '.', '.', '.', '.', '.'},
		{'.', '.', '.', '.', '.', '.', '.', '.'},
	}))

	assert.Equal(t, 3, numRookCaptures([][]byte{
		{'.', '.', '.', '.', '.', '.', '.', '.'},
		{'.', '.', '.', 'p', '.', '.', '.', '.'},
		{'.', '.', '.', 'p', '.', '.', '.', '.'},
		{'p', 'p', '.', 'R', '.', 'p', 'B', '.'},
		{'.', '.', '.', '.', '.', '.', '.', '.'},
		{'.', '.', '.', 'B', '.', '.', '.', '.'},
		{'.', '.', '.', 'p', '.', '.', '.', '.'},
		{'.', '.', '.', '.', '.', '.', '.', '.'},
	}))
}
