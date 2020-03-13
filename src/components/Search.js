import React,{Component} from 'react';

class Search extends Component {

    render() {
        return (
            <div className="col-6">
                <div className="input-gr">
                    <input 
                    type="text" 
                    placeholder="enter here.............."
                   
                    />
                    <button 
                    className="btn-search"
                    type="button"
                   

                    >Search</button>
                </div>
            </div>
        );
    }
}

export default Search