def numOfSubarrays(arr, k, threshold):
  if len(arr ) < k:
    return 0

  countSub = 0
  tempCalc = 0

  for i in range(k):
    tempCalc += arr[i]

    if i == k - 1:
      average = tempCalc/k
      if average >= threshold:
        countSub += 1

  for j in range(k, len(arr)):
    tempCalc = tempCalc - arr[j - k] + arr[j]
    average = tempCalc/k

    if average >= threshold:
      countSub += 1

  return countSub


"print(numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4))"
print(numOfSubarrays([11,13,17,23,29,31,7,5,2,3], 3, 5))
