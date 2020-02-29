import React, { components } from 'react';
import {Link} from 'react-router-dom';
import './display.css';
import moment from 'moment';

class Display extends React.Component {
    constructor(props) {
        super(props);
        let data = JSON.parse(localStorage.getItem('list'));
        this.state = {
            datas: data
        }
    }
    render() {
        let index =this.props.match.params.id;
        console.log("display index"+ index);
        return (
            <div className="container">
                <div>
                    <h3 className="details">Details</h3>
                </div>
                {this.state.datas.map((data, dataindex) => {
                    if (dataindex ==index)
                        return (
                                <div className="displaydata data" key={dataindex}>
                                    <label className="col-sm-2"><b>Category:</b></label>
                                    <p className="col-sm-4">{data.categories}</p>

                                    <label className="col-sm-5"><b>Topic:</b></label>
                                    <p className="col-sm-6">{data.topic}</p>

                                    <label className="col-sm-5"><b>Host:</b></label>
                                    <p className="col-sm-6">{data.host}</p>

                                    <label className="col-sm-5"><b>Date:</b></label>
                                    <p className=" col-sm-6">{moment(data.date).format('DD-MM-YYYY')}</p>

                                    <label className="col-sm-5"><b>Duration:</b></label>
                                    <p className=" col-sm-6">{data.duration}</p>

                                    <div className="buttons">
                                            <Link to='/training/Display/table'> 
                                                <button style={{margin:"5px"}} 
                                                    className="btn btn-primary">Back</button>
                                            </Link> 
                                    </div>
                                </div>
                        )
                })
                }
            </div>
        )
    }
}
export default Display;