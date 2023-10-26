#+TITLE: BFS-DFS
#+DATE: 2023-07-04T01:10:47+09:00
#+PUBLISHDATE: 2023-07-04T01:10:47+09:00
#+DRAFT: nil
#+CATEGORIES[]: Algorithm
#+TAGS[]: algorithm
#+DESCRIPTION: BFS-DFS quizs and solutions

quiz link : https://school.programmers.co.kr/learn/courses/30/lessons/43165

- BFS : Breadth-First Search
- DFS : Depth-First Search


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

