if __name__ == '__main__':
    N = int(input())
    lst = []

    for _ in range(N):
        command_line = input().split()
        command = command_line[0]

        if command == "print":
            print(lst)
        else:
            args = list(map(int, command_line[1:]))
            getattr(lst, command)(*args)