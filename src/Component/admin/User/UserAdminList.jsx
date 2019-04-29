import React, { Component } from 'react';
import UserAdminItem from './UserAdminItem'
import {getUserList} from '../../redux/actions/user.actions'
import {Table} from 'react-bootstrap'
import {connect} from 'react-redux'
class UserAdminList extends Component {
    componentDidMount() {
        this.props.SaveDSND();
    }
    
    render() {
        let elmUser = this.props.DSND.map((adUser, index) => {
            return <UserAdminItem
                key = {index}
                adUser = {adUser}/>
        })
        return (
            <div>
                <Table hover bordered >
                    <thead>
                        <tr>
                           
                            <th className="text-center">Mã Khóa Học</th>
                            <th className="text-center">Tên Khóa Học</th>
                            <th className="text-center">Người Tạo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {elmUser}
                    </tbody>
                </Table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log('state' , state);
    return {
        DSND : state.storeUserReducer.UserList
    }
    
}
const dispatchToProps = (dispatch) => {
    return {
        SaveDSND: () => {
            dispatch(getUserList())
        }
    }
}
export default connect(mapStateToProps, dispatchToProps) (UserAdminList);