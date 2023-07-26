// create a Javascript application

list_1 = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"];
list_2 = ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"];

// Get a unique set of users from List1 which are not in List2

unique_list_1_users = [];

for (let list_1_name of list_1) {
  unique_name = true;
  for (let list_2_name of list_2) {
    if (list_1_name === list_2_name) {
      unique_name = false;
      break;
    }
  }
  if (unique_name) {
    unique_list_1_users.push(list_1_name);
  }
}

console.log(unique_list_1_users);

// Get a unique set of users from List2 which are not in List1

unique_list_2_users = [];

for (let list_2_name of list_2) {
  unique_name = true;
  for (let list_1_name of list_1) {
    if (list_2_name === list_1_name) {
      unique_name = false;
      break;
    }
  }
  if (unique_name) {
    unique_list_2_users.push(list_2_name);
  }
}

console.log(unique_list_2_users);

// Get a set of users who are present in in List1 and List2 both (intersection of list1 & list2)

common_users_from_both_lists = [];

for (let list_1_name of list_1) {
  for (let list_2_name of list_2) {
    if (list_1_name === list_2_name) {
      common_users_from_both_lists.push(list_1_name);
    }
  }
}

console.log(common_users_from_both_lists);
