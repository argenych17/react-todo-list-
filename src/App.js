import React from "react";
import "./App.css"
import CreateTodo from "./components/create-todo/Create-todo";
import Header from "./components/header/header";
import Todo from "./components/todo/Todo";



class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    todolist: [
      {id: 1, text:"Сделать домашку ", status: false},
      {id: 2, text:"Купить сахар ", status: true},
      {id: 3, text:"Купить соль ", status: false},
    ]
  }
  this.createTodo = this.createTodo.bind(this)
  this.changeStatus = this.ChangeStatus.bind(this);
  }

  createTodo(str){
    
    this.setState({todolist: [...this.state.todolist, {
      id: Math.random(),
      text: str, 
      status: false 
    }] })
  }

  ChangeStatus (id) {
    alert(id)
    const newArr = this.state.todolist.map((item)=> {
          if(item.id === id){
            const newobj = {...item , status: !item.status}
            return newobj
          }
      return item 
    
    })
    
    this.setState({todolist: newArr })
}

  render() {
    return (

      <div className="App">
        <div className="todo-wrapper" >
          <Header count={this.state.todolist.length} />
  
          <div className="p-3" >
            <CreateTodo createTodo={this.createTodo} />
         
           <div className="mt-2 todo-list " >
  
            {
             this.state.todolist.map((todo) => <Todo 
             key={todo.id}
             changeStatus={this.ChangeStatus}
             id= {todo.id}
             text={todo.text} 
             status={todo.status} 
              />)
            }
          
           </div>
           </div>
        </div>
      </div>
  
  
    );

  }

}

// function App() {
//   return (

//     <div className="App">
//       <div className="todo-wrapper" >
//         <Header count={4} />

//         <div className="p-3" >
//           <CreateTodo />
       
//         <div className="mt-2 todo-list " >

//           {
//             [1, 2, 3].map((todo) => <Todo text={todo}  />)
//           }
          

//         </div>
//          </div>
//       </div>
//     </div>


//   );
// }

export default App;
