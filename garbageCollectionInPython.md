# Garbage Collection in Python

## Python's memory allocation or deallocation method is automatic. 
The user does not have to allocate or deallocate memory similar to using memory allocation in languages like `C` or `C++`.
Pythoon ususes two strategies for memory allocation.

  - [ ] Reference counting 
  - [ ] Gargabe collection

---

## Reference counting

Python and various other programming languages employ reference counting , a memory management approach, to automatically manage memory by tracking how many times an object is referenced.
A reference count, or the number of references that point to an object, is a property
of each object in the python language. WHen an object's
reference count reaches zero, it becomes un-referenceable and its memory can be freed up.

## Example:

**Example 1: Simple Reference Counting**

```py
# Create an object
x = [1, 2, 3]

# Increment reference count
y = x

# Decrement reference count
y = None
```

**Example 2: Reference Counting with Cyclic Reference**

```py
# Create teo objects that refer to each other
x = [1, 2, 3]
y = [4, 5, 6] 
x.append(y)
y.append(x)
```

**Example 3: Using the `sys.getrefcount()` function**

```py
import sys

# Create an object
x= [1, 2, 3]

# GEt reference count
ref_count = sys.getrefcount(x)

print("Reference count of x:", ref_count)
```

**output:**

```py
Reference count of x: 2
```

---

### Garbage Collection 

Garbage collection is a memory management tequnique used in 
programming languages to automatically reclaim memory that is no
longer accessible or in use by application. It helps prevent memory
leaks, optimize memory usage, and ensure efficient memory allocation for the program.

**Generational Garbage Collection**

When attention to add an object to a reference counter, a cyclical reference or reference cycle is produced.
Because the object's reference counter could never reach 0 (due to cycle),
a reference counter cannot destroy the object. Therefor, in situations like this, we employ the 
universal waste collector. It operates and releases the memory used. A Generational Garbage Collector can
be found in the standard library's gc module.

**Automatic Garbage Collection of Cycles**

Because reference cycle take computational work to discover, garbage collection must be a scheduled activity.
Python schedules garbage allocation based upon a threshold of object allocation and object dealloctaions.
When the number of allocation minus the number of deallocation is greater than the threshold number, the garbage collector is run.
One can inspect the threshold for new object (objects in Python known as generation 0 objects) by importing the gc module
and asking for garbage collection thresholds:

```py
# laoding gc
import gc

# get the current collection
# thresholds as a tuple
print("Garbage collection thresholds:",
                    gc.get_threshold())
```

**Output:**
```py
Garbage collection thresholds: (700, 10, 10)
```

Here, the default threshold on the above system is 700. This means 
when the number of allocations vs. the number of deallocations is greater than 700 the automatic garbage collection will run.
Thus any portion of your code which frees up large blocks of memory is a good candidate for running manual garbage collection.


### Manual Gargage COllection

Invoking the garbage collector manulllay during the execution of a program can be a good idea for how to handle memeory being
consumed by reference cycles.
The garbage collection can be invoked manually in the following way:

```py
#Importing gc module
import gc

# Returns the number of
# objects it has collected
# and deallocated
collected = gc.collect()

# Prints Garbage collector
# as 0 object
print("Garbage collector: collected",
          "%d objects." % collected)
```

**Output:**
```py
('Garbage collector: collected', '0 objects.')
```

If few cycles are created, then how manual collection works:

**Example:**

```py
import gc
i = 0
 
# create a cycle and on each iteration x as a dictionary
# assigned to 1

def create_cycle():
    x = { }
    x[i + 1] = x
    print(x)

# lists are cleared whenever a full collection or
# collection of the highest generation (2) is run
collected = gc.collect() # or gc.collect(2)
print("Garbage collector: collected %d objects. % (collected))

print (" Creating cycles...")
for i in range(10):
    create_cycle()

collected = gc.collect()

print("Garbage collector: collected %d objects." % (collected))
```

**Output**

```node
Garbage collector: collected 0 objects
Create cycles...
{1: {...}}
{2: {...}}
{3: {...}}
{4: {...}}
{5: {...}}
{6: {...}}
{7: {...}}
{8: {...}}
{9: {...}}
{10: {...}}
Garbage collector: collected 10 objects.
```

There are two ways for performing manual garbage cokkkection: timebased
and event-based garbage collection.

- [1] **Time-based** garbage collection is simple: the garbage collector is called after a fixed interval.
- [2] **Event-base** garbage collection calls the garbage collector on event occurrence. For example, when a user exits the applictaion or when the application enters into an idle state.

### Force Garbage Collection

In Python, the garbage collector runs automatically and periodically to clean up objects that are no longer referenced and this are eligible for
garbage collection. However, is some cases, you may wnat to force
garbage collection to occur immediately. You can di this using the gc.
collect() function provided by the gc module.

**Example:**

```py
import gc

# Create some objects
obj1 = [1, 2, 3]
obj2 = {"a": 1, "b": 2}
obj3 = "Hello, world!"

# Delete references to objects
del obj1
del obj2
del obj3

# Force a garbage collection
gc.collect()
```
