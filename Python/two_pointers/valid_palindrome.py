# https://leetcode.com/problems/valid-palindrome/

class Solution:
    def isPalindrome(self, s: str) -> bool:
        newStr = ""

        for char in s:
            if char.isalnum():
                newStr += char.lower()

        return newStr == newStr[::-1]

    def isPalindrome2(self, s: str) -> bool:
        start, end = 0, len(s) - 1

        while start <= end:
            if not s[start].isalnum():
                start += 1
                continue

            if not s[end].isalnum():
                end -= 1
                continue

            if s[start].isalnum() and s[end].isalnum() and s[start].lower() != s[end].lower():
                return False

            start += 1
            end -= 1

        return True