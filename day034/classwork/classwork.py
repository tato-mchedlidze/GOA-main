def remove_elements(main_list, indices_list):
    for ind in indices_list:
        main_list.pop(ind)

        print(main_list)