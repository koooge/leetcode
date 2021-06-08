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

func sumRootToLeaf(root *TreeNode) int {
	return dfs(root, 0)
}

func dfs(root *TreeNode, val int) int {
	if root == nil {
		return 0
	}
	val = val*2 + root.Val
	if root.Left == nil && root.Right == nil {
		return val
	}
	return dfs(root.Left, val) + dfs(root.Right, val)
}

func TestMain(t *testing.T) {
	assert.Equal(t, 22, sumRootToLeaf(&TreeNode{1,
		&TreeNode{0, &TreeNode{0, nil, nil}, &TreeNode{1, nil, nil}},
		&TreeNode{1, &TreeNode{0, nil, nil}, &TreeNode{1, nil, nil}},
	}))
	assert.Equal(t, 0, sumRootToLeaf(&TreeNode{0, nil, nil}))
	assert.Equal(t, 1, sumRootToLeaf(&TreeNode{1, nil, nil}))
	assert.Equal(t, 3, sumRootToLeaf(&TreeNode{1, &TreeNode{1, nil, nil}, nil}))
}
