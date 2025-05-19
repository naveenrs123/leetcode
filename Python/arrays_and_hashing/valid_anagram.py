# https://leetcode.com/problems/valid-anagram/

def isAnagram(s: str, t: str) -> bool:
    return sorted(s) == sorted(t)

def isAnagram(s: str, t: str) -> bool:
    # Counter(s) == Counter(t) ONLY IN PYTHON

    if (len(s) != len(t)):
        return False

    countS, countT = {}, {}

    for i in range(len(s)):
        countS[s[i]] = 1 + countS.get(s[i], 0)
        countT[t[i]] = 1 + countT.get(t[i], 0)

    for key in countS:
        if (countS[key] != countT.get(key, 0)):
            return False

    return True

