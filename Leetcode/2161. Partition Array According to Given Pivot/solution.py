def pivotArray(nums, pivot):
  left = []
  right = []
  middle = []

  for num in nums:
    if num < pivot :
      left.append(num)
    elif num > pivot:
      right.append(num)
    else:
      middle.append(num)

  return left + middle + right

print(pivotArray([9,12,5,10,14,3,10], 10))
