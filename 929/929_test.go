package main

import (
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
)

func numUniqueEmails(emails []string) int {
	unique := make(map[string]bool)

	for _, email := range emails {
		e := strings.Split(email, "@")
		l := strings.Replace(strings.Split(e[0], "+")[0], ".", "", -1)

		unique[l+"@"+e[1]] = true
	}

	return len(unique)
}

func TestMain(t *testing.T) {
	assert.Equal(t, 2, numUniqueEmails([]string{"test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"}))
	assert.Equal(t, 3, numUniqueEmails([]string{"a@leetcode.com", "b@leetcode.com", "c@leetcode.com"}))
	assert.Equal(t, 1, numUniqueEmails([]string{"test.email+alex@leetcode.com", "test.email@leetcode.com"}))
}
