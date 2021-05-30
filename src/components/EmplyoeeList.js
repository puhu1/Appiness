import React, {Component} from 'react';
import {connect} from "react-redux";
import "./Login.css"

class EmplyoeeList extends Component {
    render() {
        let renderTable = [];
        let dashboardData = this.props.dashboardData.login.dashboardData.user
        let headers = Object.keys(dashboardData[0])
        renderTable.push(
            <table className={"employee"}>
                <thead>
                    <tr>{headers.map(label => {
                        return (<th>{label}</th>)
                    })}
                    </tr>
                </thead>
                <tbody>
                    {dashboardData.map((employeeDetail, i) => {
                        return (<tr>{headers.map(label => {
                            return <td>{employeeDetail[label]}</td>
                        })}</tr>)
                    })}
                </tbody>
            </table>)
        return (
            <div style={{width: '100%', height: '100vh',}} className={"employee_list"}>
                <h1>Employee List !!</h1>
                <div style={{width: '90%'}}>{renderTable}</div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    dashboardData: state
});

export default connect(mapStateToProps, {})(EmplyoeeList);
