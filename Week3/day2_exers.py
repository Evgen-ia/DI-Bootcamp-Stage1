import random

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return "{} is barking.".format(self.name)

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        self_speed = self.run_speed() * self.weight
        other_speed = other_dog.run_speed() * other_dog.weight

        if self_speed > other_speed:
            return "{} won the fight!".format(self.name)
        elif self_speed < other_speed:
            return "{} won the fight!".format(other_dog.name)
        else:
            return "It's a draw!"

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        bark_output = self.bark()
        self.trained = True
        return bark_output

    def play(self, *dog_names):
        all_dogs = ", ".join(dog_names)
        print("{} all play together.".format(all_dogs))

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "{} does a barrel roll.".format(self.name),
                "{} stands on his back legs.".format(self.name),
                "{} shakes your hand.".format(self.name),
                "{} plays dead.".format(self.name)
            ]
            print(random.choice(tricks))
        else:
            print("{self.name} is not trained. Train the dog first!".format(self.name))


