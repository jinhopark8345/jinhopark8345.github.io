---
weight: 1
bookFlatSection: true
title: "Data Structures"
---

# Introduction
- Data structures are a **way of organizing and storing data** so that it can be accessed and modified efficiently.
- A lot of the time, the data structures you use will be provided by the language you are using but this doesn't mean you don't **need to know how they work**.
- Knowing how each data structure works and when to use them is a fundamental skill for any programmer.

## Different Data Structures

{{< mermaid >}}
graph LR

    A[Data Structures] --> Primitive
    A --> Non-primitive

    Primitive --> D[int, long, double, ...] 

    Non-primitive --> Non-linear
    Non-primitive --> Linear

    Linear --> I[Array]
    Linear --> J[Linked_list]
    Linear --> K[Stack]
    Linear --> L[Queue]
    Linear --> M[Heap]
    
    Non-linear --> N[Tree]
    Non-linear --> O[Graph]


{{< /mermaid >}}

