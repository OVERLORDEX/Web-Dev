class Animal:
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def speak(self):
        return "Some generic sound"

    def info(self):
        return f"{self.name} is a {self.age}-year-old {self.species}"

    def __str__(self):
        return f"Animal({self.name}, {self.age}, {self.species})"


class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age, "Dog")
        self.breed = breed

    def speak(self):
        return "Woof! Woof!"

    def fetch(self, item):
        return f"{self.name} fetched the {item}!"

    def __str__(self):
        return f"Dog({self.name}, {self.age}, {self.breed})"


class Cat(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age, "Cat")
        self.color = color

    def speak(self):
        return "GET OUTTT!"

    def scratch(self):
        return f"{self.name} BECOME NUMBER 1 ESPER!"

    def __str__(self):
        return f"Cat({self.name}, {self.age}, {self.color})"