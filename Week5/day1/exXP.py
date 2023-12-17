# !/usr/bin/env python3

import numpy as np

#  1
vector_zeros = np.zeros(10)
print("Task 1 Output:", vector_zeros)

#  2
memory_size = vector_zeros.size * vector_zeros.itemsize
print("Task 2 Output:", memory_size)

#  3
# `python -c "import numpy; help(numpy.add)"`

#  4
vector_range_10_to_49 = np.arange(10, 50)
print("Task 4 Output:", vector_range_10_to_49)

#  5
vector_reversed = vector_range_10_to_49[::-1]
print("Task 5 Output:", vector_reversed)

#  6
matrix_3x3 = np.arange(9).reshape(3, 3)
print("Task 6 Output:\n", matrix_3x3)

#  7
nonzero_indices = np.nonzero([1, 2, 0, 0, 4, 0])
print("Task 7 Output:", nonzero_indices)

#  8
identity_matrix_3x3 = np.eye(3)
print("Task 8 Output:\n", identity_matrix_3x3)

#  9
matrix_5x5 = np.tile(np.arange(5), (5, 1))
print("Task 9 Output:\n", matrix_5x5)

#  10
vector_linspace = np.linspace(0.1, 0.9, 10)
print("Task 10 Output:", vector_linspace)

#  11
random_vector_sorted = np.sort(np.random.rand(10))
print("Task 11 Output:", random_vector_sorted)

#  12
scalar_types = [np.int8, np.int32, np.int64, np.float32, np.float64]
for dtype in scalar_types:
    info = np.iinfo(dtype) if np.issubdtype(dtype, np.integer)\
                        else np.finfo(dtype)
    print("Task 12 Output ({}): Min={}, Max={}\
        ".format(dtype.__name__, info.min, info.max))

#  13
float_array = np.random.rand(5, 5)
int_array = float_array.astype(int)
print("Task 13 Output (Before):\n", float_array)
print("Task 13 Output (After):\n", int_array)

#  14
matrix_subtracted_mean = matrix_3x3 - np.mean(matrix_3x3,
                                              axis=1, keepdims=True)
print("Task 14 Output:\n", matrix_subtracted_mean)

#  15
array_to_sort = np.array([[3, 8, 1], [2, 6, 4], [5, 7, 9]])
sorted_array_by_nth_column = array_to_sort[array_to_sort[:, 1].argsort()]
print("Task 15 Output:\n", sorted_array_by_nth_column)

#  16
array_swap_rows = np.array([[0, 1, 2], [3, 4, 5], [6, 7, 8]])
array_swap_rows[[0, 1]] = array_swap_rows[[1, 0]]
print("Task 16 Output:\n", array_swap_rows)

#  17
C = np.bincount([1, 3, 2, 4, 2, 1])
A = np.repeat(np.arange(len(C)), C)
print("Task 17 Output:", A)
