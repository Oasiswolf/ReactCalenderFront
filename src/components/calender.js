import React, { Component } from 'react'

import Header from './header'
import ContentWrapper from './contentwrapper'
import Footer from './footer'

export default class Calender extends Component {
    constructor(props) {
        super(props)

        this.monthList = ["January", 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', "December"]

        this.now = this.calculateDateData()

        this.state = {
            month: {},
            monthData: []
        }

        this.handleMonthChange = this.handleMonthChange.bind(this)
    }

    calculateDateData() {
        const now = new Date();
        const month = this.monthList[now.getMonth()]
        const year = now.getFullYear()
        return {month, year}
    }

    componentDidMount() {
        fetch("https://api-calender-oasis.herokuapp.com/month/get")
        .then(response => response.json())
        .then(data => this.setState({
            monthData: data,
            month: data.filter(month => month.name === this.now.month && month.year === this.now.year)[0]
            })
        )
    }

    handleMonthChange(direction) {
        const currentMonthIndex = this.monthList.indexOf(this.state.month.name)
        const newMonthName = this.monthList[direction === "next" ? currentMonthIndex +1 : currentMonthIndex - 1]
        const newMonthData = this.state.monthData.filter(month => month.name === newMonthName)[0]
        this.setState({ month: newMonthData })
    }

    render() {
        return(
            <div>
                <h1>Main Calender Load</h1>
                <Header
                monthName={this.state.month.name}
                changeMonth={this.handleMonthChange} 
                />
                <ContentWrapper 
                currentMonth={this.state.month}
                />
                <Footer
                currentYear={this.state.month.year}
                />
            </div>
        )
    }
}