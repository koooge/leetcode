package main

import (
	"strconv"
	"testing"

	"github.com/stretchr/testify/assert"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func getDecimalValue(head *ListNode) int {
	bi := ""
	for head != nil {
		bi += strconv.Itoa(head.Val)
		head = head.Next
	}

	i, _ := strconv.ParseInt(bi, 2, 64)
	return int(i)
}

func TestMain(t *testing.T) {
	assert.Equal(t, 5, getDecimalValue(&ListNode{1, &ListNode{0, &ListNode{1, nil}}}))
	assert.Equal(t, 0, getDecimalValue(&ListNode{0, nil}))
	assert.Equal(t, 1, getDecimalValue(&ListNode{1, nil}))
	assert.Equal(t, 18880, getDecimalValue(&ListNode{1, &ListNode{0, &ListNode{0, &ListNode{1, &ListNode{0, &ListNode{0, &ListNode{1, &ListNode{1, &ListNode{1, &ListNode{0, &ListNode{0, &ListNode{0, &ListNode{0, &ListNode{0, &ListNode{0, nil}}}}}}}}}}}}}}}))
	assert.Equal(t, 0, getDecimalValue(&ListNode{0, &ListNode{0, nil}}))
}
