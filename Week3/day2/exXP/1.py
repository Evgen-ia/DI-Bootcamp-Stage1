

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return '{} is just walking around'.format(self.name)


class Bengal(Cat):
    def sing(self, sounds):
        return '{}'.format(sounds)


class Chartreux(Cat):
    def sing(self, sounds):
        return '{}'.format(sounds)


class Siamese(Cat):
    def sing(self, sounds):
        return '{}'.format(sounds)


bengal_cat = Bengal(name='BengalCat', age=3)
chartreux_cat = Chartreux(name='ChartreuxCat', age=4)
siamese_cat = Siamese(name='SiameseCat', age=2)


all_cats = [bengal_cat, chartreux_cat, siamese_cat]

sara_pets = Pets(animals=all_cats)

sara_pets.walk()
