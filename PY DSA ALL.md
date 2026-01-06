# Python DSA Complete Cheat Sheet

## 1. Lists

### Creation & Initialization
```python
# Basic creation
lst = [1, 2, 3]
lst2 = list([1, 2, 3])
lst3 = list(range(5))  # [0, 1, 2, 3, 4]

# List with default values
lst = [0] * 5  # [0, 0, 0, 0, 0]

# List comprehension (MOST IMPORTANT!)
lst = [i for i in range(5)]  # [0, 1, 2, 3, 4]
lst = [i**2 for i in range(5)]  # [0, 1, 4, 9, 16]
lst = [i for i in range(10) if i % 2 == 0]  # [0, 2, 4, 6, 8]

# 2D List (for DP/Matrix problems)
rows, cols = 3, 4
matrix = [[0] * cols for _ in range(rows)]
# OR
matrix = [[0 for _ in range(cols)] for _ in range(rows)]

# WRONG WAY (all rows point to same list!)
matrix = [[0] * cols] * rows  # DON'T DO THIS!
```

### Adding/Removing Elements
```python
lst = [1, 2, 3]

# Add to end
lst.append(4)  # [1, 2, 3, 4] - O(1)

# Add multiple elements
lst.extend([5, 6])  # [1, 2, 3, 4, 5, 6]
lst += [7, 8]  # Same as extend

# Insert at specific index
lst.insert(0, 0)  # Insert 0 at index 0 - O(n)

# Remove by value (first occurrence)
lst.remove(3)  # Removes first 3 - O(n)

# Remove by index
lst.pop()  # Remove last element - O(1)
lst.pop(0)  # Remove first element - O(n)

# Delete by index/slice
del lst[0]  # Delete first element
del lst[1:3]  # Delete slice

# Clear all
lst.clear()
```

### Accessing Elements
```python
lst = [1, 2, 3, 4, 5]

lst[0]  # 1 (first element)
lst[-1]  # 5 (last element)
lst[-2]  # 4 (second to last)

# Slicing [start:end:step]
lst[1:3]  # [2, 3] (index 1 to 2)
lst[:3]  # [1, 2, 3] (first 3)
lst[2:]  # [3, 4, 5] (from index 2)
lst[::2]  # [1, 3, 5] (every 2nd element)
lst[::-1]  # [5, 4, 3, 2, 1] (reverse)
```

### Search & Find
```python
lst = [1, 2, 3, 4, 5, 2]

# index() - Returns index of first occurrence
lst.index(3)  # 2
lst.index(10)  # ValueError if not found

# count() - Count occurrences
lst.count(2)  # 2

# in operator - Check existence
3 in lst  # True
10 in lst  # False

# min/max
min(lst)  # 1
max(lst)  # 5

# sum
sum(lst)  # 17
```

### Sorting & Reversing
```python
lst = [3, 1, 4, 1, 5]

# sort() - In-place sorting (MUTATES)
lst.sort()  # [1, 1, 3, 4, 5]
lst.sort(reverse=True)  # [5, 4, 3, 1, 1]

# sorted() - Returns NEW sorted list
new_lst = sorted(lst)  # Original unchanged

# Custom sorting
lst.sort(key=lambda x: -x)  # Sort descending
words.sort(key=len)  # Sort by length
people.sort(key=lambda x: x['age'])  # Sort by age

# reverse() - In-place reverse (MUTATES)
lst.reverse()

# Reversed copy
new_lst = lst[::-1]
```

### List Comprehensions (POWERFUL!)
```python
# Basic
[x for x in range(10)]

# With condition
[x for x in range(10) if x % 2 == 0]

# With transformation
[x**2 for x in range(10)]

# Nested loops (flatten 2D)
matrix = [[1, 2], [3, 4]]
flat = [num for row in matrix for num in row]  # [1, 2, 3, 4]

# With if-else
[x if x > 0 else 0 for x in range(-5, 5)]

# 2D list comprehension
[[i+j for j in range(3)] for i in range(3)]
```

### Common Operations
```python
lst1 = [1, 2]
lst2 = [3, 4]

# Concatenation
lst1 + lst2  # [1, 2, 3, 4]

# Repetition
[0] * 5  # [0, 0, 0, 0, 0]

# Length
len(lst1)  # 2

# Copy
copy = lst1[:]
copy2 = lst1.copy()
copy3 = list(lst1)

# Join (list to string)
''.join(['a', 'b', 'c'])  # 'abc'
'-'.join(['a', 'b', 'c'])  # 'a-b-c'
```

### Iteration
```python
lst = [1, 2, 3]

# Basic for loop
for item in lst:
    print(item)

# With index (enumerate)
for i, item in enumerate(lst):
    print(i, item)

# With custom start index
for i, item in enumerate(lst, start=1):
    print(i, item)

# Iterate two lists together
for a, b in zip(lst1, lst2):
    print(a, b)

# Iterate in reverse
for item in reversed(lst):
    print(item)
```

---

## 2. Strings

### Creation
```python
s1 = "hello"
s2 = 'world'
s3 = """multi
line"""
s4 = f"Hello {name}"  # f-string (formatted)
```

### Basic Properties & Access
```python
s = "hello"

len(s)  # 5
s[0]  # 'h'
s[-1]  # 'o' (last char)

# Slicing (same as lists)
s[1:3]  # 'el'
s[:3]  # 'hel'
s[2:]  # 'llo'
s[::-1]  # 'olleh' (reverse)
```

### Search & Check
```python
s = "hello world"

# in operator
'world' in s  # True
'x' in s  # False

# find() / rfind() - Returns index or -1
s.find('o')  # 4 (first occurrence)
s.rfind('o')  # 7 (last occurrence)
s.find('x')  # -1 (not found)

# index() / rindex() - Raises ValueError if not found
s.index('o')  # 4
s.rindex('o')  # 7

# count()
s.count('l')  # 3

# startswith() / endswith()
s.startswith('hello')  # True
s.endswith('world')  # True
```

### Transformation
```python
s = "Hello World"

# Case conversion
s.lower()  # "hello world"
s.upper()  # "HELLO WORLD"
s.capitalize()  # "Hello world"
s.title()  # "Hello World"
s.swapcase()  # "hELLO wORLD"

# strip() - Remove whitespace
"  hello  ".strip()  # "hello"
"  hello  ".lstrip()  # "hello  "
"  hello  ".rstrip()  # "  hello"

# Replace
s.replace('World', 'Python')  # "Hello Python"
s.replace('l', 'L', 2)  # Replace first 2 occurrences

# Center/Left/Right justify
"hello".center(10, '*')  # "**hello***"
"hello".ljust(10, '*')  # "hello*****"
"hello".rjust(10, '*')  # "*****hello"

# zfill() - Pad with zeros
"42".zfill(5)  # "00042"
```

### Split & Join
```python
# split() - String to list
"a,b,c".split(',')  # ['a', 'b', 'c']
"hello world".split()  # ['hello', 'world'] (split by whitespace)
"a-b-c".split('-', 1)  # ['a', 'b-c'] (max split = 1)

# splitlines() - Split by newlines
"line1\nline2".splitlines()  # ['line1', 'line2']

# join() - List to string
','.join(['a', 'b', 'c'])  # "a,b,c"
''.join(['h', 'i'])  # "hi"
```

### Check Methods
```python
s = "hello123"

s.isalpha()  # False (has digits)
s.isdigit()  # False (has letters)
s.isalnum()  # True (alphanumeric)
s.isspace()  # False
"HELLO".isupper()  # True
"hello".islower()  # True
```

### String Formatting
```python
name = "John"
age = 30

# f-strings (BEST - Python 3.6+)
f"My name is {name} and I'm {age}"
f"{age * 2}"  # Expressions allowed

# format()
"My name is {} and I'm {}".format(name, age)
"My name is {0} and I'm {1}".format(name, age)
"My name is {n} and I'm {a}".format(n=name, a=age)

# % operator (old style)
"My name is %s and I'm %d" % (name, age)
```

### Common String Patterns for DSA
```python
# Reverse string
s[::-1]

# Check palindrome
s == s[::-1]

# Character frequency
from collections import Counter
freq = Counter(s)

# Remove duplicates (preserve order)
''.join(dict.fromkeys(s))

# Anagram check
sorted(s1) == sorted(s2)
```

---

## 3. Dictionaries (dict)

### Creation
```python
d = {'a': 1, 'b': 2}
d2 = dict(a=1, b=2)
d3 = dict([('a', 1), ('b', 2)])

# Dictionary comprehension
d = {i: i**2 for i in range(5)}  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
```

### Access & Modify
```python
d = {'name': 'John', 'age': 30}

# Access
d['name']  # 'John'
d.get('name')  # 'John'
d.get('city', 'NYC')  # 'NYC' (default if not found)

# Modify
d['age'] = 31
d['city'] = 'NYC'  # Add new key

# Delete
del d['age']
d.pop('name')  # Remove and return value
d.pop('city', None)  # Return None if not found
d.popitem()  # Remove and return last inserted item

# Clear all
d.clear()
```

### Dictionary Methods (MOST IMPORTANT!)
```python
d = {'a': 1, 'b': 2, 'c': 3}

# keys() - Returns dict_keys object
d.keys()  # dict_keys(['a', 'b', 'c'])
list(d.keys())  # ['a', 'b', 'c']

# values() - Returns dict_values object
d.values()  # dict_values([1, 2, 3])
list(d.values())  # [1, 2, 3]

# items() - Returns dict_items object
d.items()  # dict_items([('a', 1), ('b', 2), ('c', 3)])

# update() - Merge dictionaries
d.update({'d': 4, 'e': 5})

# setdefault() - Get value or set default
d.setdefault('f', 0)  # Returns 0 and sets d['f'] = 0

# get() with default
d.get('z', 0)  # Returns 0 if 'z' not in dict

# Check existence
'a' in d  # True
'z' in d  # False
```

### Iteration
```python
d = {'a': 1, 'b': 2, 'c': 3}

# Iterate keys
for key in d:
    print(key)

# Iterate values
for value in d.values():
    print(value)

# Iterate key-value pairs (MOST COMMON)
for key, value in d.items():
    print(key, value)
```

### Common Dictionary Patterns for DSA
```python
# Frequency counter
freq = {}
for item in arr:
    freq[item] = freq.get(item, 0) + 1

# OR using defaultdict
from collections import defaultdict
freq = defaultdict(int)
for item in arr:
    freq[item] += 1

# OR using Counter (BEST!)
from collections import Counter
freq = Counter(arr)

# Group by property
groups = defaultdict(list)
for item in items:
    groups[item.property].append(item)

# Merge dictionaries (Python 3.9+)
d1 = {'a': 1}
d2 = {'b': 2}
merged = d1 | d2  # {'a': 1, 'b': 2}

# Merge (Python 3.5+)
merged = {**d1, **d2}
```

---

## 4. Sets

A Set stores **unique** elements in no particular order.

### Creation
```python
s = {1, 2, 3}
s2 = set([1, 2, 3, 2])  # {1, 2, 3} - duplicates removed
s3 = set()  # Empty set (NOT {} which is empty dict!)

# Set comprehension
s = {x for x in range(5)}  # {0, 1, 2, 3, 4}
```

### Basic Operations
```python
s = {1, 2, 3}

# Add
s.add(4)  # {1, 2, 3, 4}

# Remove
s.remove(2)  # Raises KeyError if not found
s.discard(2)  # Does nothing if not found (SAFER)
s.pop()  # Remove and return arbitrary element

# Clear
s.clear()

# Length
len(s)

# Check membership
2 in s  # True
10 in s  # False
```

### Set Operations
```python
s1 = {1, 2, 3}
s2 = {2, 3, 4}

# Union
s1 | s2  # {1, 2, 3, 4}
s1.union(s2)

# Intersection
s1 & s2  # {2, 3}
s1.intersection(s2)

# Difference
s1 - s2  # {1} (in s1 but not s2)
s1.difference(s2)

# Symmetric difference
s1 ^ s2  # {1, 4} (in either but not both)
s1.symmetric_difference(s2)

# Subset
{1, 2} <= {1, 2, 3}  # True
{1, 2}.issubset({1, 2, 3})

# Superset
{1, 2, 3} >= {1, 2}  # True
{1, 2, 3}.issuperset({1, 2})
```

### Common Set Patterns for DSA
```python
# Remove duplicates
unique = list(set(arr))

# Check for duplicates
has_duplicates = len(arr) != len(set(arr))

# Find common elements
common = set(arr1) & set(arr2)

# Track visited nodes
visited = set()
visited.add(node)
if neighbor not in visited:
    # Visit neighbor
    pass

# Note: Sets can't store lists or dicts (unhashable)
# Use tuples instead
coords = set()
coords.add((x, y))  # Tuple is hashable
```

---

## 5. Tuples

Tuples are **immutable** lists.

### Creation
```python
t = (1, 2, 3)
t2 = 1, 2, 3  # Parentheses optional
t3 = (1,)  # Single element tuple (comma required!)
t4 = tuple([1, 2, 3])
```

### Operations
```python
t = (1, 2, 3, 2)

# Access (same as list)
t[0]  # 1
t[-1]  # 3
t[1:3]  # (2, 3)

# count() / index()
t.count(2)  # 2
t.index(3)  # 2

# Length
len(t)  # 4

# Membership
2 in t  # True

# Concatenation
(1, 2) + (3, 4)  # (1, 2, 3, 4)

# Repetition
(1, 2) * 3  # (1, 2, 1, 2, 1, 2)

# Unpacking
a, b, c = (1, 2, 3)
a, *rest = (1, 2, 3, 4)  # a=1, rest=[2, 3, 4]
```

### Use Cases
```python
# Multiple return values
def min_max(arr):
    return min(arr), max(arr)

minimum, maximum = min_max([1, 2, 3])

# As dictionary keys (tuples are hashable)
coords = {(0, 0): 'origin', (1, 1): 'point'}

# Swap variables
a, b = b, a
```

---

## 6. Collections Module (CRITICAL for DSA!)

### Counter - Frequency counting
```python
from collections import Counter

# Create
counter = Counter([1, 2, 2, 3, 3, 3])
# Counter({3: 3, 2: 2, 1: 1})

counter = Counter("hello")
# Counter({'l': 2, 'h': 1, 'e': 1, 'o': 1})

# Operations
counter.most_common(2)  # [(3, 3), (2, 2)] - Top 2
counter['x']  # 0 (returns 0 if not found, not KeyError)

# Arithmetic
c1 = Counter(['a', 'b', 'c'])
c2 = Counter(['a', 'b', 'd'])
c1 + c2  # Counter({'a': 2, 'b': 2, 'c': 1, 'd': 1})
c1 - c2  # Counter({'c': 1})
```

### defaultdict - Automatic default values
```python
from collections import defaultdict

# Int default (for counting)
freq = defaultdict(int)
for item in arr:
    freq[item] += 1  # No need to check if key exists!

# List default (for grouping)
groups = defaultdict(list)
for item in items:
    groups[item.category].append(item)

# Set default
graph = defaultdict(set)
graph[node].add(neighbor)

# Custom default
from collections import defaultdict
dd = defaultdict(lambda: 'N/A')
```

### deque - Double-ended queue
```python
from collections import deque

# Create
dq = deque([1, 2, 3])

# Add
dq.append(4)  # Add to right
dq.appendleft(0)  # Add to left

# Remove
dq.pop()  # Remove from right
dq.popleft()  # Remove from left - O(1)!

# Access
dq[0]  # First element
dq[-1]  # Last element

# Rotate
dq.rotate(1)  # Rotate right by 1
dq.rotate(-1)  # Rotate left by 1

# Use as Queue (BETTER than list!)
queue = deque()
queue.append(item)  # Enqueue
queue.popleft()  # Dequeue - O(1)!

# Use as Stack
stack = deque()
stack.append(item)  # Push
stack.pop()  # Pop
```

### OrderedDict - Ordered dictionary (less important in Python 3.7+)
```python
from collections import OrderedDict

# Regular dict maintains insertion order in Python 3.7+
# But OrderedDict has extra features:

od = OrderedDict()
od['a'] = 1
od['b'] = 2

# Move to end
od.move_to_end('a')  # Move 'a' to end
od.move_to_end('b', last=False)  # Move 'b' to beginning

# Pop items
od.popitem(last=True)  # Pop from end
od.popitem(last=False)  # Pop from beginning
```

---

## 7. Heapq Module (Priority Queue)

Python has a built-in **min heap**!

```python
import heapq

# Create heap from list
heap = [3, 1, 4, 1, 5]
heapq.heapify(heap)  # Convert to min heap in-place

# Push
heapq.heappush(heap, 2)  # O(log n)

# Pop
min_val = heapq.heappop(heap)  # Remove and return smallest - O(log n)

# Peek (without removing)
min_val = heap[0]

# Push and pop in one operation
heapq.heappushpop(heap, 6)  # Push 6, then pop smallest

# Replace (pop then push)
heapq.heapreplace(heap, 7)  # Pop smallest, then push 7

# Get n largest/smallest
heapq.nlargest(3, heap)  # 3 largest elements
heapq.nsmallest(3, heap)  # 3 smallest elements

# Max heap (use negative values)
max_heap = []
heapq.heappush(max_heap, -val)
max_val = -heapq.heappop(max_heap)

# Heap with tuples (sorts by first element)
heap = []
heapq.heappush(heap, (priority, item))
priority, item = heapq.heappop(heap)

# Custom objects
heapq.heappush(heap, (obj.priority, obj))
```

---

## 8. Common DSA Patterns in Python

### Two Pointers
```python
def two_sum(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        total = arr[left] + arr[right]
        if total == target:
            return [left, right]
        elif total < target:
            left += 1
        else:
            right -= 1
    return [-1, -1]
```

### Sliding Window
```python
def max_subarray_sum(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)
    
    return max_sum
```

### Frequency Counter
```python
from collections import Counter

def char_frequency(s):
    return Counter(s)

# OR manual
def char_frequency_manual(s):
    freq = {}
    for char in s:
        freq[char] = freq.get(char, 0) + 1
    return freq
```

### Graph DFS (Recursive)
```python
def dfs(graph, node, visited=None):
    if visited is None:
        visited = set()
    
    if node in visited:
        return
    
    visited.add(node)
    print(node)
    
    for neighbor in graph.get(node, []):
        dfs(graph, neighbor, visited)
```

### Graph BFS
```python
from collections import deque

def bfs(graph, start):
    queue = deque([start])
    visited = {start}
    
    while queue:
        node = queue.popleft()
        print(node)
        
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
```

### Binary Search
```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1
```

### Dynamic Programming
```python
# Bottom-up (Tabulation)
def fib(n):
    if n <= 1:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]

# Top-down (Memoization)
def fib_memo(n, memo=None):
    if memo is None:
        memo = {}
    
    if n in memo:
        return memo[n]
    
    if n <= 1:
        return n
    
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]
```

### Backtracking
```python
def permute(nums):
    result = []
    
    def backtrack(path, remaining):
        if not remaining:
            result.append(path[:])
            return
        
        for i in range(len(remaining)):
            path.append(remaining[i])
            backtrack(path, remaining[:i] + remaining[i+1:])
            path.pop()
    
    backtrack([], nums)
    return result
```

---

## 9. Important Python Tricks for DSA

### List Manipulation
```python
# Swap elements
arr[i], arr[j] = arr[j], arr[i]

# Copy list
copy = arr[:]
copy2 = arr.copy()
copy3 = list(arr)

# Flatten 2D list
flat = [item for row in matrix for item in row]

# Transpose matrix
transpose = list(zip(*matrix))
# OR
transpose = [[matrix[j][i] for j in range(len(matrix))] 
             for i in range(len(matrix[0]))]

# Remove duplicates (preserve order)
seen = set()
unique = [x for x in arr if not (x in seen or seen.add(x))]
```

### Math Operations
```python
# Min/Max
min(arr)
max(arr)
min(a, b, c)
max(a, b, c)

# Absolute value
abs(-5)  # 5

# Power
pow(2, 3)  # 8
2 ** 3  # 8

# Floor division
7 // 2  # 3

# Modulo
7 % 2  # 1

# Divmod (quotient and remainder)
divmod(7, 2)  # (3, 1)

# Square root
import math
math.sqrt(16)  # 4.0

# Ceiling/Floor
math.ceil(4.2)  # 5
math.floor(4.7)  # 4

# GCD/LCM
math.gcd(12, 8)  # 4
math.lcm(12, 8)  # 24 (Python 3.9+)
```

### Infinity
```python
# Infinity
float('inf')
float('-inf')

max_val = float('-inf')
min_val = float('inf')

# Check if infinity
import math
math.isinf(float('inf'))  # True
```

### String/Number Conversion
```python
# String to int
int("123")  # 123
int("1010", 2)  # 10 (binary to decimal)
int("FF", 16)  # 255 (hex to decimal)

# String to float
float("123.45")  # 123.45

# Int to string
str(123)  # "123"

# Character to ASCII
ord('A')  # 65
ord('a')  # 97

# ASCII to character
chr(65)  # 'A'
chr(97)  # 'a'

# Binary/Hex representation
bin(10)  # '0b1010'
hex(255)  # '0xff'
oct(8)  # '0o10'
```

### Useful Built-ins
```python
# all() - All elements True
all([True, True, False])  # False
all([1, 2, 3])  # True

# any() - At least one True
any([False, False, True])  # True

# zip() - Combine iterables
list(zip([1, 2], ['a', 'b']))  # [(1, 'a'), (2, 'b')]

# enumerate() - Index and value
list(enumerate(['a', 'b']))  # [(0, 'a'), (1, 'b')]

# reversed() - Reverse iterator
list(reversed([1, 2, 3]))  # [3, 2, 1]

# sorted() - Sort any iterable
sorted([3, 1, 2])  # [1, 2, 3]
sorted("bac")  # ['a', 'b', 'c']

# map() - Apply function to all
list(map(lambda x: x**2, [1, 2, 3]))  # [1, 4, 9]

# filter() - Filter by condition
list(filter(lambda x: x > 0, [-1, 0, 1, 2]))  # [1, 2]

# sum() - Sum of iterable
sum([1, 2, 3])  # 6
sum([1, 2, 3], 10)  # 16 (with starting value)
```

### Comprehensions
```python
# List comprehension
[x**2 for x in range(5)]

# Dict comprehension
{x: x**2 for x in range(5)}

# Set comprehension
{x**2 for x in range(5)}

# Generator expression (memory efficient)
gen = (x**2 for x in range(5))
```

---

## 10. Time Complexity Reference

| Operation | List | Set | Dict | Deque |
|-----------|------|-----|------|-------|
| Access by index | O(1) | N/A | N/A | O(1) |
| Search | O(n) | O(1) | O(1) | O(n) |