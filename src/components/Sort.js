import React,{Component} from 'react';

class Sort extends Component {

 

  
    render() {
        return (
            <div className="col-6">
                        
                          <div className="btn-group">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown">
                                  Sắp xếp
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" >
                              <a className="dropdown-item" href=" # ">Tên A-Z <span><i className="fas fa-check" ></i></span></a>
                              <a className="dropdown-item" href=" # " >Tên Z-A <span><i className="fas fa-check" ></i></span></a>
                              <a className="dropdown-item" href=" # " >Trạng thái kích hoạt <span><i className="fas fa-check" ></i></span></a>
                              <a className="dropdown-item" href=" # " >Trạng thái ẩn <span><i className="fas fa-check" ></i></span></a>
                            </div>
                          </div>
                    </div>
        );
    }
}

export default Sort 