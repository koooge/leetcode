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

func searchBST(root *TreeNode, val int) *TreeNode {
	if root == nil {
		return nil
	}

	if root.Val == val {
		return root
	}

	if root.Left != nil {
		left := searchBST(root.Left, val)
		if left != nil && left.Val == val {
			return left
		}
	}
	if root.Right != nil {
		right := searchBST(root.Right, val)
		if right != nil && right.Val == val {
			return right
		}
	}

	return nil
}

func TestMain(t *testing.T) {
	assert.Equal(t, &TreeNode{2, &TreeNode{1, nil, nil}, &TreeNode{3, nil, nil}}, searchBST(&TreeNode{4,
		&TreeNode{2, &TreeNode{1, nil, nil}, &TreeNode{3, nil, nil}},
		&TreeNode{7, nil, nil},
	}, 2))
	assert.Equal(t, (*TreeNode)(nil), searchBST(&TreeNode{4,
		&TreeNode{2, &TreeNode{1, nil, nil}, &TreeNode{3, nil, nil}},
		&TreeNode{7, nil, nil},
	}, 5))
}
