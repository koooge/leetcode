package main

import (
	"strconv"
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
)

func subdomainVisits(cpdomains []string) []string {
	visits := make(map[string]int)

	for _, domain := range cpdomains {
		s := strings.Split(domain, " ")
		count, _ := strconv.Atoi(s[0])
		name := strings.Split(s[1], ".")

		for i := 0; i < len(name); i++ {
			val := strings.Join(name[i:], ".")
			visits[val] += count
		}
	}

	ret := []string{}
	for k, v := range visits {
		r := strconv.Itoa(v) + " " + k
		ret = append(ret, r)
	}

	return ret
}

func TestMain(t *testing.T) {
	assert.Equal(t, []string{"9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"}, subdomainVisits([]string{"9001 discuss.leetcode.com"}))
	assert.Equal(t, []string{"901 mail.com", "50 yahoo.com", "900 google.mail.com", "5 wiki.org", "5 org", "1 intel.mail.com", "951 com"}, subdomainVisits([]string{"900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"}))
}
