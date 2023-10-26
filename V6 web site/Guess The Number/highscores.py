with open('scores.txt', 'r') as file:
    scores = file.readlines()
    scores = [int(score.strip()) for score in scores]
    scores.sort()

print("Top 5 High Scores:")
for score in scores[:5]:
    print(score)
