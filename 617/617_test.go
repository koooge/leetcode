package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func mergeTrees(root1 *TreeNode, root2 *TreeNode) *TreeNode {
	node := &TreeNode{0, nil, nil}

	if root1 != nil && root2 != nil {
		node = &TreeNode{root1.Val + root2.Val, nil, nil}
	} else if root1 != nil {
		node.Val = root1.Val
	} else if root2 != nil {
		node.Val = root2.Val
	}

	if (root1 != nil && root1.Left != nil) || (root2 != nil && root2.Left != nil) {
		node.Left = mergeTrees(root1.Left, root2.Left)
	}
	if (root1 != nil && root1.Right != nil) || (root2 != nil && root2.Right != nil) {
		node.Right = mergeTrees(root1.Right, root2.Right)
	}

	return node
}

func TestMain(t *testing.T) {
	assert.Equal(t, mergeTrees(
		&TreeNode{1,
			&TreeNode{3, &TreeNode{5, nil, nil}, nil},
			&TreeNode{2, nil, nil}},
		&TreeNode{2,
			&TreeNode{1, nil, &TreeNode{4, nil, nil}},
			&TreeNode{3, nil, &TreeNode{7, nil, nil}}},
	), &TreeNode{3,
		&TreeNode{4, &TreeNode{5, nil, nil}, &TreeNode{4, nil, nil}},
		&TreeNode{5, nil, &TreeNode{7, nil, nil}},
	})

	assert.Equal(t, mergeTrees(
		&TreeNode{1, nil, nil},
		&TreeNode{1, &TreeNode{2, nil, nil}, nil},
	), &TreeNode{2, &TreeNode{2, nil, nil}, nil})
}
