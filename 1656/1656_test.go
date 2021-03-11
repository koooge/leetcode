package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

type OrderedStream struct {
	ptr  int
	list []string
}

func Constructor(n int) OrderedStream {
	return OrderedStream{0, make([]string, n)}
}

func (this *OrderedStream) Insert(id int, value string) []string {
	this.list[id-1] = value

	if this.list[this.ptr] == "" {
		return []string{}
	} else {
		for i, v := range this.list[this.ptr:] {
			if v == "" {
				temp := this.ptr
				this.ptr += i
				return this.list[temp:this.ptr]
			}
		}
	}

	return this.list[this.ptr:]
}

func TestMain(t *testing.T) {
	obj := Constructor(5)
	assert.Equal(t, []string{}, obj.Insert(3, "ccccc"))
	assert.Equal(t, []string{"aaaaa"}, obj.Insert(1, "aaaaa"))
	assert.Equal(t, []string{"bbbbb", "ccccc"}, obj.Insert(2, "bbbbb"))
	assert.Equal(t, []string{}, obj.Insert(5, "eeeee"))
	assert.Equal(t, []string{"ddddd", "eeeee"}, obj.Insert(4, "ddddd"))
}
