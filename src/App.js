import './App.css';
import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';
import {post} from '../src/api/api'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      Column2: '',
      Dates: moment().toDate(),
      season:'',
      Week:'',
      Month:'',
      Year:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value 
    })
  }

  handleDateChange(date){
    
    // let day = newdate.getDate();
    // let mnt = newdate.getMonth()+1;
    // let year = newdate.getFullYear();
    // const finaldate = day+"-"+mnt+"-"+year;
    // console.log("Whole date print", finaldate)
    this.setState({
      Dates: date
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    // var date1 = new Date(this.state.startDate),
    // mnth = ("0" + (date1.getMonth() + 1)).slice(-2),
    // day = ("0" + date1.getDate()).slice(-2);    
    // var newdate = [date1.getFullYear(), mnth, day].join("-");
    // console.log("new date", newdate)
    // console.log(this.state);
    const params = 'Column2=example_valueTest&Dates=2022-01-13&season=1&Week=2&Month=1&Year=2021';
    const apiurl = 'https://f1-ml-service.azure-api.net/score/score?'+params;
    //const api_key = 'wKcN5MmPzFrXESaAJFcD6zybIkviKtwn';
    // let url='_p_EntityNameTickerFilter='+this.state.entityNameTicker+
    //     '&_p_destinationId='+this.state.destinationId+
    //     '&_p_miles='+this.state.pmiles+
    //     '&_p_FromDate='+''+
    //     '&_p_ToDate='+''+
    //     '&_p_SortbyDate30='+true+
    //     '&_p_SortbyDate90='+''+
    //     '&_p_OwnerShipFilter='+this.state.ownerShip+       
    //     '&_p_AbNormalFilter='+this.state.abnormal+      
    //     '&_page_number='+this.state.pageNumber+
    //     '&_count_per_page='+this.state.perPage+
    //     '&_p_SearchText='+encodeURIComponent(this.state.searchText);

    const data = [{
      "Column2": "example_valueTest ",
      "Dates": "2022-01-13",
      "season": "1",
      "Week": "2",
      "Month": "1",
      "Year": "2022"
    }]
    console.log("postBody", data)
    // const requestMetadata = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Autorization': api_key,
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
    //     },
    //     body: JSON.stringify(postBody)
    // };

    post(apiurl).then(res => {
      console.log("Api response", res)
    }).catch(err =>{
        console.log("Error log", err)
    })

    // fetch(apiurl, requestMetadata)
    //     .then(res => res.json())
    //     .then(ticketcount => {
    //         this.setState({ ticketcount });
    //     });
  }

  render(){
    return (
      <div className="row col-lg-12 App">
        <div className="formOuter">
        <form name="my-form" onSubmit={this.onFormSubmit}>
        <div className="form-group row">
          <label className="col-lg-12 padding0">Column 2</label>
          <div className="col-lg-12 padding0">
            <input type="text" id="Column2" name="Column2" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-12 padding0">Dates</label>
          <div className="col-lg-12 padding0">
          <DatePicker 
          selected={this.state.Dates}
          onChange={ this.handleDateChange }
          name="startDate"
          dateFormat="yyyy-MM-dd" 
          />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-12 padding0">Season</label>
          <div className="col-lg-12 padding0">
            <input type="text" id="season" name="season" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-12 padding0">Week</label>
          <div className="col-lg-12 padding0">
            <input type="text" id="Week" name="Week" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-12 padding0">Month</label>
          <div className="col-lg-12 padding0">
            <input type="text" id="Month" name="Month" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-lg-12 padding0">Year</label>
          <div className="col-lg-12 padding0">
            <input type="text" id="Year" name="Year" onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-lg-12 padding0">
            <button type="submit" id="btnsub" name="btnsub" className="btn btn-primary">Submit</button>
          </div>
        </div>
        </form>
        <div className="form-group row">
          <label className="col-lg-12 padding0">No of tickets</label>
          {!!this.state.ticketcount ? <div className="col-lg-12 padding0">{this.state.ticketcount}</div> : 0}
        </div>
      </div>
      </div>
    );
  }
  
}

export default App;
