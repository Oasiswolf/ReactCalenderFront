import React, { Component } from 'react'

export default class DayWrapper extends Component {
    constructor(props) {
        super(props)

        const reminder = props.month
            ? props.month.reminders.filter(
                (reminder) => reminder.date === props.date
                )[0] : undefined;

        this.state ={
            reminderExists: reminder ? true : false,
            textInput: reminder ? reminder.text : ""

        }
        
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit() {
        if(!this.state.reminderExists && this.state.textInput !== "") {
            fetch("https://api-calender-oasis.herokuapp.com/reminder/add", {
                 method: "POST",
                 headers: { "content-type": "application/json" },
                 body: JSON.stringify({
                     text: this.state.textInput,
                     date: this.props.date,
                     month_id: this.props.month.id})
                    }
                    ).then(response => response.json())
                    .then(data=> {
                        if(typeof data === "string") {console.log(data);
                        }else {
                            this.setState({reminderExists: true})
                        }
                    })
                    .catch((error) => console.log("Error adding reminder", error));
            } else if (this.state.reminderExists && this.state.textInput !== "") {
                fetch(`https://api-calender-oasis.herokuapp.com/reminder/update/${this.props.month.id}/${this.props.date}`,
                {
                    method: "PUT",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({
                        text: this.state.textInput
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (typeof data === "string") {
                        console.log(data)
                    }
                })
                .catch((error) => console.log("Error updateing reminder", error));
            }
        }
    
    render() {

        return(
                <div className={this.props.overflow ? "day-overflow" :"day"}>
        
                    <span className="Date">{this.props.date}</span>
                    <textarea
                        className="reminderField"
                        disabled={this.props.overflow}
                        onBlur={this.handleSubmit}
                        value={this.state.textInput}
                        onChange={((event) => this.setState({textInput: event.target.value})).bind(this)}
                    >
                    
                    </textarea>
        
                </div>
        )
    }
}