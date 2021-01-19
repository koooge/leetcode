class ParkingSystem:
    def __init__(self, big: int, medium: int, small: int):
        self.park = [big, medium, small]

    def addCar(self, carType: int) -> bool:
        if self.park[carType - 1] > 0:
            self.park[carType - 1] -= 1
            return True
        else:
            return False

obj = ParkingSystem(1, 1, 0)
assert(obj.addCar(1) == True)
assert(obj.addCar(2) == True)
assert(obj.addCar(3) == False)
assert(obj.addCar(1) == False)
