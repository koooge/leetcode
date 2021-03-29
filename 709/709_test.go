package main

import (
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
)

func toLowerCase(str string) string {
	return strings.ToLower(str)
}

func TestMain(t *testing.T) {
	assert.Equal(t, "hello", toLowerCase("Hello"))
	assert.Equal(t, "here", toLowerCase("here"))
	assert.Equal(t, "lovely", toLowerCase("LOVELY"))
}
