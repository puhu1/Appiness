import React, {Component} from 'react';
import {connect} from "react-redux";
import "./Login.css"
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";

class EmplyoeeList extends Component {
    render() {
        let renderTable = [];
        let dashboardData = this.props.dashboardData.login.dashboardData.user
        let headers = Object.keys(dashboardData[0])
        renderTable.push(
            <Table className={"employee"}>
                <TableHead>
                    <TableRow>{headers.map(label => {
                        return (<TableCell>{label}</TableCell>)
                    })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dashboardData.map((employeeDetail, i) => {
                        return (<TableRow>{headers.map(label => {
                            return <TableCell>{employeeDetail[label]}</TableCell>
                        })}</TableRow>)
                    })}
                </TableBody>
            </Table>)
        return (
            <div className={"employee_list"}>
                <h1>Employee List !!</h1>
                <div>{renderTable}</div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    dashboardData: state
});

export default connect(mapStateToProps, {})(EmplyoeeList);
