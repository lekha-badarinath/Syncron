class test():
    def __init__(self,x,y):
        self.x = x
        self.y = y
    def addFunction(self):
        self.__z = 1
        print (self.x + self.y + self.__z)
        print (self.x,self.y,self.__z)

new = test(12,2)
new.addFunction()
# new._z = 12