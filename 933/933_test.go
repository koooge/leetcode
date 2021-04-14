package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

type RecentCounter struct {
	requests []int
}

func Constructor() RecentCounter {
	return RecentCounter{[]int{}}
}

func (this *RecentCounter) Ping(t int) int {
	this.requests = append(this.requests, t)
	for i, val := range this.requests {
		if val >= t-3000 {
			this.requests = this.requests[i:]
			break
		}
	}
	return len(this.requests)
}

func TestMain(t *testing.T) {
	obj := Constructor()
	assert.Equal(t, 1, obj.Ping(1))
	assert.Equal(t, 2, obj.Ping(100))
	assert.Equal(t, 3, obj.Ping(3001))
	assert.Equal(t, 3, obj.Ping(3002))

}
