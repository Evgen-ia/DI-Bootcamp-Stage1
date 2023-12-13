class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return "{} is barking".format(self.name)

    def run_speed(self):
        return self.weight / (self.age * 10)

    def fight(self, other_dog):
        self_speed = self.run_speed() * self.weight
        other_dog_speed = other_dog.run_speed() * other_dog.weight

        if self_speed > other_dog_speed:
            return "{} beats {}".format(self.name, other_dog.name)
        elif self_speed < other_dog_speed:
            return "{} baets {}".format(other_dog.name, self.name)
        else:
            return "draw between {} and {}".format(self.name, other_dog.name)


Vova = Dog(name="Vova", age=1, weight=20)
Max = Dog(name="Max", age=2, weight=25)
Puffy = Dog(name="Puffy", age=3, weight=18)


print(Vova.bark())
print("{}'s running speed is {}".format(Max.name, Max.run_speed()))
print(Puffy.fight(Vova))
