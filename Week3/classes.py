class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
    
    def bark(self):
        print("{} goes woof".format(self.name))

    def jump(self):
        print("{} jumps {} high!".format(self.name, self.height*2))


davids_dog = Dog("Rex", 30)

davids_dog.jump()
davids_dog.bark()
