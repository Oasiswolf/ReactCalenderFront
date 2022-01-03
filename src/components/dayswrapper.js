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
    }

    handleSubmit() {
        if(!this.state.reminderExists && this.state.textInput !== "") {
            fetch("https://api-calender-oasis.herokuapp.com/reminder/add", {
                 method: "POST",
                 headers: { "content-type": "application/json" },
                 body: JSON.stringify({
                     text:this.state.textInput,
                     date: this.props.date,
                     month_id: this.props.month_id})
                    }
                    ).then(response => response.json())
                    .then(data=> {
                        if(typeof Data === "string") {console.log(data);
                        }else {
                            this.setState({reminderExists: true})
                        }
                    })
            } else if (this.state.reminderExists && this.state.textInput !== "") {
                fetch(`https://api-calender-oasis.herokuapp.com/reminder/update/${this.props.month.id}/${this.props.date}`,
                {
                    methods: "PUT",
                    headers: {"content-type": "application/json"},
                    body: JSON.stringify({text:this.state.textInput})
                })
                .then(response => response.json())
                .then(data => {
                    if (typeof data === "string") {
                        console.log(data)
                    }
                })
            }
        }
    
    render() {

        return(
                <div className="day">
        
                    <span className="Date">{this.props.date}</span>
                    <textarea
                        className="reminderField"
                        disabled={this.props.overflow}
                    >
                    
                    </textarea>
        
                </div>
        )
    }
}