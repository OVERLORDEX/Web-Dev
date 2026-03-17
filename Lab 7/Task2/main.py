from models import Animal, Dog, Cat

def main():
    animals = [
        Dog("WORLD DESTROYER 3000", 3, "Golden Retriever"),
        Cat("KAIDEN", 7, "Yellow-White"),
        Animal("ARMAGEDON", 5, "Unknown")
    ]

    for animal in animals:
        print(animal)                  # __str__ method
        print(animal.info())           # gen info
        print(animal.speak())          # полиморфизм: any sounds
        if isinstance(animal, Dog):
            print(animal.fetch("ball"))
        if isinstance(animal, Cat):
            print(animal.scratch())
        print("-" * 40)

if __name__ == "__main__":
    main()