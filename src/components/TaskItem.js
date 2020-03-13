import React,{Component} from 'react';

class TaskItem extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    onDeleteItem = () =>{
        var {task} = this.props
        this.props.onDeleteItem(task.id)
    }                   
    onUpdateStatus = () =>{
        var {task} = this.props
        this.props.onUpdateStatus(task.id)
    }
    onEditingItem = () =>{
        var {task} = this.props
        this.props.onEditingItem(task.id)
    }
    render() {
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{this.props.task.name}</td>
                <td className="text-center">
                    <span className={this.props.task.status === true?'label label-success':'label label-danger'}
                    onClick={this.onUpdateStatus}
                    >
                    {this.props.task.status === true?'true':'false'}
                    </span>
                </td>
                <td className="text-center">
                    <button 
                    type="button" 
                    className="btn btn-warning"
                    onClick={this.onEditingItem}
                    >
                        Sửa
                    </button>
                    &nbsp;
                    <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={this.onDeleteItem}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem