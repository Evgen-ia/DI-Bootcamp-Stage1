import random


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
            return "{} wins the fight against {}"\
                .format(self.name, other_dog.name)
        elif self_speed < other_dog_speed:
            return "{} wins the fight against {}"\
                .format(other_dog.name, self.name)
        else:
            return "It's a draw between {} and {}"\
                .format(self.name, other_dog.name)


class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        bark_output = super().bark()
        self.trained = True
        print(bark_output)
        print("{} is now trained!".format(self.name))

    def play(self, *dog_names):
        print("{} all play together".format(', '.join(dog_names)))

    def do_a_trick(self):
        if self.trained:
            trick = random.choice(["does a barrel roll",
                                   "stands on his back legs",
                                   "shakes your hand", "plays dead"])
            print("{} {}".format(self.name, trick))
        else:
            print("{} is not trained yet.".format(self.name))


pet_dog1 = PetDog(name="Bobik", age=3, weight=5)
pet_dog2 = PetDog(name="Sima", age=4, weight=25)

pet_dog1.train()
pet_dog2.play("Bobik", "Sima")
pet_dog1.do_a_trick()
