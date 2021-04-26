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

func averageOfLevels(root *TreeNode) []float64 {
	ave := []float64{}
	nodes := []*TreeNode{root}

	for len(nodes) != 0 {
		sum := 0
		count := 0
		nextNodes := []*TreeNode{}
		for _, node := range nodes {
			sum += node.Val
			count += 1
			if node.Left != nil {
				nextNodes = append(nextNodes, node.Left)
			}
			if node.Right != nil {
				nextNodes = append(nextNodes, node.Right)
			}
		}

		nodes = nextNodes
		ave = append(ave, float64(sum)/float64(count))
	}

	return ave
}

func TestMain(t *testing.T) {
	assert.Equal(t, []float64{3.00000, 14.50000, 11.00000}, averageOfLevels(&TreeNode{3,
		&TreeNode{9, nil, nil},
		&TreeNode{20,
			&TreeNode{15, nil, nil},
			&TreeNode{7, nil, nil},
		},
	}))
	assert.Equal(t, []float64{3.00000, 14.50000, 11.00000}, averageOfLevels(&TreeNode{3,
		&TreeNode{9,
			&TreeNode{15, nil, nil},
			&TreeNode{7, nil, nil},
		},
		&TreeNode{20, nil, nil},
	}))
}
