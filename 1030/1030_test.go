package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func allCellsDistOrder(R int, C int, r0 int, c0 int) [][]int {
	cells := [][]int{{r0, c0}}

	if c0-1 >= 0 {
		left := _allCellsDistOrder(0, R, 0, c0, r0, c0-1)
		cells = append(cells, left...)
	}

	if r0+1 <= R-1 {
		bottom := _allCellsDistOrder(r0, R, 0, C, r0+1, c0)
		cells = append(cells, bottom...)
	}

	if c0+1 <= C-1 {
		right := _allCellsDistOrder(0, R, c0, C, r0, c0+1)
		cells = append(cells, right...)
	}

	if r0-1 >= 0 {
		top := _allCellsDistOrder(0, r0, 0, C, r0-1, c0)
		cells = append(cells, top...)
	}

	return cells
}

func _allCellsDistOrder(Rorigin int, R int, Corigin int, C int, r0 int, c0 int) [][]int {
	cells := [][]int{{r0, c0}}

	if c0-1 > Corigin {
		left := _allCellsDistOrder(0, R, 0, c0, r0, c0-1)
		cells = append(cells, left...)
	}

	if r0+1 <= R-1 {
		bottom := _allCellsDistOrder(r0, R, 0, C, r0+1, c0)
		cells = append(cells, bottom...)
	}

	if c0+1 <= C-1 {
		right := _allCellsDistOrder(0, R, c0, C, r0, c0+1)
		cells = append(cells, right...)
	}

	if r0-1 > Rorigin {
		top := _allCellsDistOrder(0, r0, 0, C, r0-1, c0)
		cells = append(cells, top...)
	}

	return cells
}

func TestMain(t *testing.T) {
	assert.Equal(t, [][]int{{0, 0}, {0, 1}}, allCellsDistOrder(1, 2, 0, 0))
	// assert.Equal(t, [][]int{{0, 1}, {0, 0}, {1, 1}, {1, 0}}, allCellsDistOrder(2, 2, 0, 1))
	// assert.Equal(t, [][]int{{1, 2}, {0, 2}, {1, 1}, {0, 1}, {1, 0}, {0, 0}}, allCellsDistOrder(2, 3, 1, 2))
}
