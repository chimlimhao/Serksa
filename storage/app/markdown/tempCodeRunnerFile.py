

        #increasing the inactive weight by 1 everysingle time the loops run. 
        inactive_weight += 1 #This can be seconds.
        total_second = active_lane - (inactive_lane + inactive_weight)
        total_second -= 1
        if total_second < 0:
            total_second = 0
        
        # If there are no vehicles from lane1 and 3, we speed up the time of green light
        if active_lane == base_limit: 
            inactive_weight += 2
        print_traffic(f"Active Value: {active_lane}, Inactive Value: {inactive_lane + inactive_weight}\nSeconds: {total_second}")
        time.sleep(1)


def run_basic():
    global inactive_weight
    global base_limit

    while True: