import React,{Component} from 'react';
import TaskItem from './TaskItem';



class TaskList extends Component {

  
    render() {
        var tasks = this.props.tasks
        var elementTasks = tasks.map((task, index) =>{
            return <TaskItem
                key={task.id}
                index={index}
                task={task}
                onDeleteItem={this.props.onDeleteItem}
                onUpdateStatus={this.props.onUpdateStatus}
                onEditingItem={this.props.onEditingItem}
            ></TaskItem>
        })
        return (
            <div className="row mt-15">
                <div className="col-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input 
                                    type="text" 
                                    className="form-control"/>
                                </td>
                                <td>
                                    <select 
                                    className="form-control"
                                    name="filterStatus">
                                        <option value="-1">Tất Cả</option>
                                        <option value="0">Ẩn</option>
                                        <option value="1">Kích Hoạt</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {elementTasks}
                            
                            
                           
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TaskList 