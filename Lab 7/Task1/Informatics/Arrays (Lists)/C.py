N = int(input())
A = list(map(int, input().split()))

count = sum(1 for x in A if x > 0)
print(count)