---
title: "Quicksort"
date: 2023-10-22T01:25:29+09:00
draft: true
---



{{< expand code >}}

```python3
def solution(numbers, target):
    answer = 0
    def recur(cur_idx, cur_val):
        """ recursion function need
            1. return logic
            2. recursive calls
        """
        if cur_idx == len(numbers):

            # return logic
            nonlocal answer
            if cur_val == target:
                answer += 1
            return

        # recursive calls
        ## when next number is added
        recur(cur_idx + 1, cur_val + numbers[cur_idx])
        ## when next number is subtracted
        recur(cur_idx + 1, cur_val - numbers[cur_idx])

    # start with idx == 0, current value == 0
    recur(0, 0)
    return answer
```
{{< /expand >}}
