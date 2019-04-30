import React, { Component } from 'react';
import UserAdminItem from './UserAdminItem'
import { getUserList } from '../../redux/actions/user.actions'
import { Table ,Container, Card} from 'react-bootstrap'
import { connect } from 'react-redux'
class UserAdminList extends Component {
  componentDidMount() {
    this.props.SaveDSND();
  }

  render() {
    let elmUser = this.props.DSND.map((adUser, index) => {
      return <UserAdminItem 
        
        key={index}
        adUser={adUser} />
    })
    return (
      <div className='table-group'>
        <Container bordered>
        <Card style={{ padding: '15px',width:'100%',overflow:'hidden'}}>
        <div className="text-center"><h3>Danh sách người dùng</h3></div>
        <Table style={{borderCollapse:'collapse',padding:0}} hover  bordered >
            <thead style={{borderCollapse:'collapse'}}>
              <tr>
                <th style={{maxWidth:100,}} className="text-center">Tài Khoản</th>
                <th className="text-center">Mật Khẩu</th>
                <th className="text-center">Họ Tên</th>
                <th className="text-center">Email</th>
                <th style={{maxWidth:100,}} className="text-center">Số điện thoại</th>
                <th style={{maxWidth:100,}} className="text-center">Mã loại người dùng</th>
                <th style={{maxWidth:100,}} className="text-center">Tên loại người dùng</th>
                <th className="text-center">Thao tác</th>
              </tr>
            </thead>
            <tbody style={{padding:0}}>
              {elmUser}
            </tbody>
          </Table>
        </Card>


        </Container>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    DSND: state.storeUserReducer.UserList
  }

}
const dispatchToProps = (dispatch) => {
  return {
    SaveDSND: () => {
      dispatch(getUserList())
    }
  }
}
export default connect(mapStateToProps, dispatchToProps)(UserAdminList);