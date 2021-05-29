package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

type ListNode struct {
	Val  int
	Next *ListNode
}

func middleNode(head *ListNode) *ListNode {
	middle := head

	for i := 1; head != nil; i++ {
		if i%2 == 0 {
			middle = middle.Next
		}
		head = head.Next
	}

	return middle
}

func TestMain(t *testing.T) {
	assert.Equal(t, &ListNode{3, &ListNode{4, &ListNode{5, nil}}}, middleNode(&ListNode{1, &ListNode{2, &ListNode{3, &ListNode{4, &ListNode{5, nil}}}}}))
	assert.Equal(t, &ListNode{4, &ListNode{5, &ListNode{6, nil}}}, middleNode(&ListNode{1, &ListNode{2, &ListNode{3, &ListNode{4, &ListNode{5, &ListNode{6, nil}}}}}}))
}
