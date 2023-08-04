class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        pairs = { ')': '(', ']': '[', '}': '{' }

        for char in s:
            if char == '(' or char == '[' or char == '{':
                stack.append(char)
            else:
                if len(stack) > 0 and stack[-1] == pairs[char]:
                    stack.pop()
                else:
                    stack.append(char)
        
        return len(stack) == 0