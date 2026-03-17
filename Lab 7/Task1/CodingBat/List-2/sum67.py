def sum67(nums):
    total = 0
    skip = False
    for n in nums:
        if n == 6:
            skip = True
            continue
        if skip:
            if n == 7:
                skip = False
            continue
        total += n
    return total