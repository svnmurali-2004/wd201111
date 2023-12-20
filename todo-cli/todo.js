const todoList = () => {
<<<<<<< HEAD
  let all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => !item.completed && item.dueDate < today);
      // Write the date check condition here and return the array
      // of overdue items accordingly.
    }
  
    const dueToday = () => {
        const today = new Date().toISOString().split("T")[0];
        return all.filter((item) => item.dueDate === today);
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
    }
  
    const dueLater = () => {
        const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => !item.completed && item.dueDate > today);
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
    }
  
    const toDisplayableList = (list) => {
        return list
        .map((item, index) => {
          const dueText = item.dueDate
            ? item.dueDate === today
              ? "" // For tasks due today, don't include the date
              : ` ${item.dueDate}`
            : "";
          const completionStatus = item.completed ? "[x]" : "[ ]";
          return `${completionStatus} ${item.title}${dueText}`;
        })
        .join("\n");
  
      // Format the To-Do list here, and return the output string
      // as per the format given above.
    }
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};

module.exports = todoList;
=======
    all = [];
    const add = (todoItem) => {
     all.push(todoItem);
    };
    const markAsComplete = (index) => {
     all[index].completed = true;
    };
   
    const overdue = () => {
     a = all.filter((item) => item.dueDate == yesterday);
     return a;
    };
   
    const dueToday = () => {
     b = all.filter((item) => item.dueDate == today);
     return b;
    };
   
    const dueLater = () => {
     c = all.filter((item) => item.dueDate == tomorrow);
     return c;
    };
   
    const toDisplayableList = (list) => {
     if (list[0].dueDate == yesterday) {
      yes = list.map((item) => "[ ]" + " " + item.title + " " + yesterday).join("\n");
      return yes;
     } else if (list[0].dueDate == today) {
      let i = 0;
      a = "";
      for (i = 0; i < list.length; i++) {
       if (i == 0) {
        a += "[x]" + " " + list[i].title + " " + "\n";
       } else {
        a += "[ ]" + " " + list[i].title;
       }
      }
      return a;
     } else {
      tom = list.map((item) => "[ ]" + " " + item.title + " " + tomorrow).join("\n");
      return tom;
     }
    };
   
    return {
     all,
     add,
     markAsComplete,
     overdue,
     dueToday,
     dueLater,
     toDisplayableList,
    };
   };
  const todos = todoList();

  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };

  var dateToday = new Date();
  const today = formattedDate(dateToday);
  const yesterday = formattedDate(new Date(new Date().setDate(dateToday.getDate() - 1)));
  const tomorrow = formattedDate(new Date(new Date().setDate(dateToday.getDate() + 1)));
  
  todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
  todos.add({ title: "Pay rent", dueDate: today, completed: true });
  todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
  todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
  todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });
  
  console.log("My Todo-list\n");
  
  console.log("Overdue");
  var overdues = todos.overdue();
  var formattedOverdues = todos.toDisplayableList(overdues);
  console.log(formattedOverdues);
  console.log("\n");
  
  console.log("Due Today");
  let itemsDueToday = todos.dueToday();
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
  console.log(formattedItemsDueToday);
  console.log("\n");
  
  console.log("Due Later");
  let itemsDueLater = todos.dueLater();
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
  console.log(formattedItemsDueLater);
  console.log("\n\n");
  
  module.exports = todoList;
>>>>>>> 569d7c8dd1c81f6cb772801811df5d7da5bf075b
