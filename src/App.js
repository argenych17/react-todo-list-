import React from "react";
import "./App.css"
import CreateTodo from "./components/create-todo/Create-todo";
import Header from "./components/header/header";
import Todo from "./components/todo/Todo";



class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    todolist: [],
    isLoading:[true],
    
  }
  this.createTodo = this.createTodo.bind(this)
  this.changeStatus = this.changeStatus.bind(this);
  this.Edit = this.Edit.bind(this)
  this.Delete = this.Delete.bind(this)
  
  
  }


  componentDidMount(){
    console.log("Did Mount");
    const data = JSON.parse(localStorage.getItem("todo")) || [];
    this.setState({todolist: data })

    setTimeout(()=>{
   this.setState({isLoading: false })
    }, 3000)
  }



  componentDidUpdate(){
    console.log("did Update ");
     localStorage.setItem("todo", JSON.stringify(this.state.todolist))
  }


  componentWillUnmount(){
     console.log("Will mount");
  }





  createTodo(str){
    
    this.setState({todolist: [...this.state.todolist, {
      id: Math.random(),
      text: str, 
      status: false 
    }] })
  }


 

  changeStatus(id) {
    const newArr = this.state.todolist.map((item) => {
      if (item.id === id) {
        const newObj = { ...item, status: !item.status }
        return newObj
      }
      return item
    });
    this.setState({ todolist: newArr });
  }
  Delete(id) {
   
    const newArr = this.state.todolist.filter((todo) => todo.id !== id);
    this.setState({ todolist: newArr})
  }
 


  Edit(id, Text) {
    
    const newArr = this.state.todolist.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: Text }
      }
      return todo
    });
    this.setState({ todolist: newArr })
  }


  render() {

   if(this.state.isLoading){
     return <div className="loader" >
       <img src="https://i.gifer.com/origin/01/017905764ef7551292353101da65eb66_w200.gif"  />
     </div>

     
   } 

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
             changeStatus={this.changeStatus}
             id= {todo.id}
             text={todo.text} 
             status={todo.status} 
             Delete={this.Delete}
             Edit={this.Edit}
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
