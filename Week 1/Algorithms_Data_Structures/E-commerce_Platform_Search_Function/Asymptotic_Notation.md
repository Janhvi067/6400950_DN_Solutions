1. Understand Asymptotic Notation

Big O Notation is used to describe the efficiency of an algorithm in terms of time and space as the input size grows.
It helps analyze the scalability and performance of an algorithm without focusing on machine-specific constants.

* It shows the upper bound of an algorithm's growth rate.
* Common notations: O(1), O(log n), O(n), O(n log n), O(n²)

Best, Average, and Worst-Case Scenarios in Searching:

| Scenario     | Description                                          |
| ------------ | ---------------------------------------------------- |
| Best Case    | The target is found at the beginning or immediately. |
| Average Case | The target is found somewhere in the middle.         |
| Worst Case   | The target is not present or found at the end.       |

Two search algorithms are used to find products:

* Linear Search:

  * Goes through each element in the array one by one.
  * Works on unsorted data.

* Binary Search:

  * Works on a sorted array.
  * Repeatedly divides the search space in half.
  * Much faster than linear search for large datasets.

The "Product" objects are stored in:

* An unsorted array for linear search.
* A sorted array (by productId) for binary search.

4. Analysis

| Algorithm     | Time Complexity | Sorted Data Required | Use Case                        |
| ------------- | --------------- | -------------------- | ------------------------------- |
| Linear Search | O(n)            | No                   | Small datasets or unsorted data |
| Binary Search | O(log n)        | Yes                  | Large datasets with sorted data |


* Linear search is simpler and works without sorting, suitable for small or dynamic datasets.
* Binary search is much more efficient and preferred for large, static, or frequently queried datasets where data can be pre-sorted.
