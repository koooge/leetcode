package main

import (
	"strconv"
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
)

func maximum69Number(num int) int {
	str := strings.Replace(strconv.Itoa(num), "6", "9", 1)
	ret, _ := strconv.Atoi(str)
	return ret
}

func TestMain(t *testing.T) {
	assert.Equal(t, 9969, maximum69Number(9669))
	assert.Equal(t, 9999, maximum69Number(9996))
	assert.Equal(t, 9999, maximum69Number(9999))
}
