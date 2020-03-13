import React,{Component} from 'react';

class TaskForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:'',
            status:true
        };
    }
    onChange = (event) =>{
        var target=event.target
        var name=target.name
        var value=target.value
        if(name === 'status'){
            if(value === 'true'){
                value = true
            }else{
                value = false
            }
        }
        this.setState({
            [name]:value
        })
    }
    onSubmit = (e) =>{
        e.preventDefault()
        if(this.state.name === ''){
            alert('Please enter name in field')
        }else{
            this.props.onSubmit(this.state)
            this.onReset()
        }
        
    }
    onReset = () =>{
        this.setState({
            name:'',
            status:true
        })
    }
    componentWillMount(){
        var {taskEditing} = this.props
        if(taskEditing){
            this.setState({
                id:taskEditing.id,
                name:taskEditing.name,
                status:taskEditing.status
            })
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.taskEditing){
            this.setState({
                id:nextProps.taskEditing.id,
                name:nextProps.taskEditing.name,
                status:nextProps.taskEditing.status
            })
        }else if(!nextProps.taskEditing){
            this.setState({
                id:'',
                name:'',
                status:true
            })
        }
    }
    render() {
        var id = this.state.id

        return (
            <div className="panel panel-warning">
                    <div className="panel-heading">
                        <button >
                           {id === ''?'Thêm công việc':'Cập nhật công việc'}
                        </button>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                                
                                />
                            </div>
                            <label>Trạng Thái :</label> 
                            <select 
                            className="form-control" 
                            required="required"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                            >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Lưu lại</button>&nbsp;
                                <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={this.onReset}
                                >Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
        );
    }
}

export default TaskForm 