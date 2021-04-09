package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

type Node struct {
	Val      int
	Children []*Node
}

func postorder(root *Node) []int {
	if root == nil {
		return []int{}
	}

	subtree := []int{}

	for _, child := range root.Children {
		subtree = append(subtree, postorder(child)...)
	}

	return append(subtree, root.Val)
}

func TestMain(t *testing.T) {
	assert.Equal(t, []int{5, 6, 3, 2, 4, 1}, postorder(&Node{1, []*Node{
		{3, []*Node{{5, nil}, {6, nil}}},
		{2, nil},
		{4, nil},
	}}))

	assert.Equal(t, []int{2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1}, postorder(&Node{1, []*Node{
		{2, nil},
		{3, []*Node{
			{6, nil},
			{7, []*Node{
				{11, []*Node{{14, nil}}},
			}},
		}},
		{4, []*Node{
			{8, []*Node{{12, nil}}},
		}},
		{5, []*Node{
			{9, []*Node{{13, nil}}},
			{10, nil},
		}},
	}}))

	assert.Equal(t, []int{}, postorder(nil))
}
