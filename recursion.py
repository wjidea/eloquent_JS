def findSolution(target):
    def find(current, history):
        print(current, history)
        if current == target:
            return history
        elif current > target:
            return None
        else:
            return find(current + 5, f'({history} + 5)') or find(current * 3, f'({history} * 3)')
    return find(1, "1")

print(findSolution(13))
