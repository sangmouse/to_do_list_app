
import React,{Component} from 'react';
import './App.css';
import Control from './components/Control';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';




class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isDisplayForm:false,
      tasks:[],
      taskEditing:null
    };
  }
  onToggleForm = () =>{
    if(this.state.isDisplayForm && this.state.taskEditing !== null){
      this.setState({
        isDisplayForm:true,
        taskEditing:null
      })
    }else{
      this.setState({
        isDisplayForm:!this.state.isDisplayForm,
        taskEditing:null
      })
    }
    
  }
  s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1)
  }
  generateID(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4()
  }
  componentWillMount(){
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"))
      this.setState({
        tasks:tasks
      })
    }
  }
  onSubmit = (data) =>{
    var {tasks} = this.state
    if(data.id === ''){
      // adding new
      data.id = this.generateID()
      tasks.push(data)
    }else{
      // editing
      var index = this.findIndex(data.id)
      tasks[index] = data

    }
    this.setState({
      tasks:tasks,
      taskEditing:null
    })
    localStorage.setItem("tasks", JSON.stringify(tasks))
    this.onToggleForm()
  }
  findIndex = (id) =>{
    var {tasks} = this.state
    var result = -1
    tasks.forEach( (task, index) =>{
      if(task.id === id){
        result = index
      }
    })
    return result
  }
  onDeleteItem = (id) =>{
    var {tasks} = this.state
    var index = this.findIndex(id)
    if(index  !== -1){
      tasks.splice(index, 1)
      this.setState({
        tasks:tasks
      })
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }
  }
  onUpdateStatus = (id) =>{
    var {tasks} = this.state
    var index = this.findIndex(id)
    if(index !== -1){
      tasks[index].status = !tasks[index].status
      this.setState({
        tasks:tasks
      })
    }
  }
  
  onEditingItem = (id) =>{
    this.setState({
      isDisplayForm:true
    })
    var {tasks} = this.state
    var index = this.findIndex(id)
    if(index !== -1){
      var taskEditing = tasks[index]
      
    }
    this.setState({
      taskEditing:taskEditing
    })

  }
  render() {
    var {tasks, taskEditing} = this.state
    var elementForm = this.state.isDisplayForm?<TaskForm
    onSubmit={this.onSubmit}
    taskEditing={taskEditing}
  />:' '
    return (
        <div className="main">
            <div className="container">
              <div className="text-center">
                <h1 className="title">Work Management</h1>
              </div>
              <div className="row">  
                <div className="col-4">
                  {elementForm}
                </div>
                <div className={this.state.isDisplayForm?'col-8':'col-12'}>
                  <button
                    onClick={this.onToggleForm}
                  >
                      Thêm Công Việc
                  </button>  
                  <Control/>
                  <TaskList
                    tasks={tasks}
                    onDeleteItem={this.onDeleteItem}
                    onUpdateStatus={this.onUpdateStatus}
                    onEditingItem={this.onEditingItem}
                  />
                </div>
              </div>  
            </div>
          </div>
    );
}
}

export default App;
