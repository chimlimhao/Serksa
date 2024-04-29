import random
import time
import os

class lane:

    def __init__(self) -> None:
        self._cars = 0
        self._is_active = False
        self._log = 0

    @property
    def cars(self) -> int:
        return self._cars

    @property
    def is_active(self) -> bool:
        return self._is_active

    @is_active.setter
    def is_active(self, value: bool):
        self._is_active = value

    def leave(self):
        if self._cars > 0 and self._is_active:
            self._cars -= 1
            self._log -= 1
        else:
            pass # not allowed to leave

    def enter(self):
        self._cars += 1
        self._log += 1

    def get_changes(self) -> int:
        log = self._log
        self._log = 0
        return log



lane_1 = lane()
lane_2 = lane()
lane_3 = lane()
lane_4 = lane()

MAX_LIMIT = 120
base_limit = 60
current_lane = 0

inactive_weight = 1

def get_all_cars_from_lane_1_3() -> int:
    return lane_1.cars + lane_3.cars


def get_all_cars_from_lane_2_4() -> int:
    return lane_2.cars + lane_4.cars


def print_traffic(second: str = None):
    cars1 = get_all_cars_from_lane_1_3()
    lane1_3_log = lane_1.get_changes() + lane_3.get_changes()
    if lane1_3_log == 0:
        change1 = "--"
    else:
        change1 = f"+{lane1_3_log}" if lane1_3_log > 0 else f"{lane1_3_log}"
    cars2 = get_all_cars_from_lane_2_4()
    lane2_4_log = lane_2.get_changes() + lane_4.get_changes()
    if lane2_4_log == 0:
        change2 = "--"
    else:
        change2 = f"+{lane2_4_log}" if lane2_4_log > 0 else f"{lane2_4_log}"
    lane = "1&3" if current_lane == 0 else "2&4"
    os.system("clear")
    print(f""" {second}
      Active:{lane}
| lane 1,3 | lane 2,4 |
| {cars1:5}    | {cars2:5}    |
|    {change1:2}    |    {change2:2}    |""")


def change_lane():
    global base_limit
    global inactive_weight
    global current_lane
    base_limit = 30
    inactive_weight = 0
    current_lane = 1 if current_lane == 0 else 0
    lane_1.is_active = False
    lane_3.is_active = False
    lane_2.is_active = False
    lane_4.is_active = False

    if current_lane == 0:
        lane_1.is_active = True
        lane_3.is_active = True
    else:
        lane_2.is_active = True
        lane_4.is_active = True


def run():
    global inactive_weight
    global base_limit
    while True:
        randomly_add_traffic() # simulate a car entering the lane
        randomly_remove_traffic() # simulate a car leaving the lane

        if current_lane == 0:
            active_lane = get_all_cars_from_lane_1_3()

            inactive_lane = get_all_cars_from_lane_2_4()

        else:
            active_lane = get_all_cars_from_lane_2_4()

            inactive_lane = get_all_cars_from_lane_1_3()


        # The amount of second of green light on
        if active_lane + base_limit > MAX_LIMIT:
            active_lane = MAX_LIMIT
        else:
            active_lane += base_limit # 85

        if inactive_lane + inactive_weight > active_lane:
            change_lane()

        #increasing the inactive weight by 1 everysingle time the loops run. 
        inactive_weight += 1 #This can be seconds.
        total_second = max(active_lane - (inactive_lane + inactive_weight), 0)  # Calculate total seconds correctly
        if total_second > 0:
            total_second = 0
    # Trigger a lane switch or any other action when countdown reaches 0

        # If there are no vehicles from lane1 and 3, we speed up the time of green light
        if active_lane == base_limit: 
            inactive_weight += 2
        print_traffic(f"Active Value: {active_lane}, Inactive Value: {inactive_lane + inactive_weight}\nSeconds: {total_second}")
        time.sleep(1)


def run_basic():
    global inactive_weight
    global base_limit

    while True:
        randomly_add_traffic()
        randomly_remove_traffic()

        if inactive_weight > MAX_LIMIT:
            change_lane()

        inactive_weight += 1
        print_traffic(str(MAX_LIMIT - inactive_weight))
        time.sleep(0.2)


def randomly_add_traffic():
    chance = 50 # %
    roll = random.randint(1, 100)
    if roll <= chance:
        lane_1.enter()
    roll = random.randint(1, 100)
    if roll <= chance:
        lane_2.enter()
    roll = random.randint(1, 100)
    if roll <= chance:
        lane_3.enter()
    roll = random.randint(1, 100)
    if roll <= chance:
        lane_4.enter()


def randomly_remove_traffic():
    global inactive_weight # used as time since last switch
    if inactive_weight < 5:
        chance = 25 # %
    elif inactive_weight < 10:
        chance = 60 # % higher value because theres no need to accelerate
    else:
        chance = 90 # %
    roll = random.randint(1, 100)
    if roll <= chance:
        lane_1.leave()
    roll = random.randint(1, 100)
    if roll <= chance:
        lane_2.leave()
    roll = random.randint(1, 100)
    if roll <= chance:
        lane_3.leave()
    roll = random.randint(1, 100)
    if roll <= chance:
        lane_4.leave()



if __name__ == "__main__":
    change_lane()
    # run_basic()
    run()
