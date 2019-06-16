import React from 'react';
import { getVisitors } from '../../services/api.service';
import '../../App.css';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visitors : []
        }
    }
    
    componentDidMount(){
        getVisitors('getVisitors')
        .then((res) => {
            this.setState({
                visitors : res.data
            },()=>{
               
            })
        })

    }

    render(){
        return(
            <div>
                <h1>Visitors</h1>
                {this.state.visitors.length > 0 ?
                <table id="visitors">
                    <thead>
                        <th>Browser</th>
                        <th>OS</th>
                        <th>Country</th>
                        <th>Region</th>
                        <th>Ip</th>
                        <th>Language</th>
                    </thead>
                    <tbody>
                        {this.state.visitors && this.state.visitors.map((visitor,index) => {
                    return (
                        <tr key={index}>
                            <td>{visitor.browser}</td>
                            <td>{visitor.os}</td>
                            <td>{visitor.country}</td>
                            <td>{visitor.region}</td>
                            <td>{visitor.ip}</td>
                            <td>{visitor.language}</td>
                        </tr>
                    )
                })}
                    </tbody>
                </table>
                :<h3>No Records found</h3> }
            </div>
        )
        
    }
}

export default Home;