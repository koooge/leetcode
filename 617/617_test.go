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
	if root1 == nil {
		return root2
	}
	if root2 == nil {
		return root1
	}

	root1.Val += root2.Val
	root1.Left = mergeTrees(root1.Left, root2.Left)
	root1.Right = mergeTrees(root1.Right, root2.Right)

	return root1
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

	assert.Equal(t, mergeTrees(nil, nil), (*TreeNode)(nil))
}
