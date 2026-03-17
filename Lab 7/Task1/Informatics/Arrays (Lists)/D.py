N = int(input())
A = list(map(int, input().split()))

count = sum(1 for i in range(1, N) if A[i] > A[i-1])
print(count)