Recursion

* A technique where a function calls itself to solve smaller instances of a problem.
* Must include a base case to stop the recursion and prevent infinite loops.
* Useful when a complex problem can be broken down into smaller sub-problems.
* Example: Fibonacci Series, Tree Traversal, Factorial, etc.

Time Complexity for Recursive Approach

* O(n)
  → Performs one call per year.
  → Each call involves a single multiplication followed by a recursive call.


Space Complexity for Recursive Approach

* O(n)
  → Recursion uses the call stack, and each recursive call adds a new frame.
  → For n years, the stack grows linearly to n calls.

Optimization – Iterative Method

Using an iterative approach offers several advantages:

* Time Complexity – O(n)
  → Uses a simple for loop from 0 to n.
  → Each year’s value is calculated using straightforward multiplication.

* Space Complexity – O(1)
  → Only requires a few variables for calculations.
  → No stack memory needed, unlike the recursive version.

* No stack overflow risk
  → Safe even for large inputs like 10,000+ years.

* Easier to extend
  → Can integrate additional business logic (e.g., varying rates, tax, inflation) easily.

