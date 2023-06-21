def num_of_subarrays(arr, k, threshold)

  if(arr.size < k)
    return 0
  end

  countSub = 0
  tempCalc = 0

  for i in 0..k - 1
    tempCalc += arr[i]

    if(i == k - 1)
      average = tempCalc/k
      if(average >= threshold)
        countSub += 1
      end
    end

  end

  for j in k..arr.length - 1
    tempCalc = tempCalc - arr[j - k] + arr[j]
    average = tempCalc/k
    if(average >= threshold)
      countSub += 1
    end
  end

  countSub
end

puts num_of_subarrays([2,2,2,2,5,5,5,8], 3, 4)
