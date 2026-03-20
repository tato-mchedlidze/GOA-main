def manual_append(main_list, item_to_insert):
    length = len(main_list)

    print(main_list)
    main_list.insert(length, item_to_insert)
    print(main_list)