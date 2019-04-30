import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
class UserAdminItem extends Component {
  render() {
    let { adUser } = this.props
    return (
      <tr>
        <th style={{maxWidth:50,fontSize:'14px'}} className='text-center'>{adUser.TaiKhoan}</th>
        <th style={{maxWidth:50,fontSize:'14px'}} className='text-center'>{adUser.MatKhau}</th>
        <th style={{maxWidth:50,fontSize:'14px'}} className='text-center'>{adUser.HoTen}</th>
        <th style={{maxWidth:70,fontSize:'14px'}} className='text-center'>{adUser.Email}</th>
        <th style={{maxWidth:40,fontSize:'14px'}} className='text-center'>{adUser.SoDT}</th>
        <th style={{maxWidth:50,fontSize:'14px'}} className='text-center'>{adUser.MaLoaiNguoiDung}</th>
        <th style={{maxWidth:50,fontSize:'14px'}} className='text-center'>{adUser.TenLoaiNguoiDung}</th>
        <th style={{maxWidth:120,fontSize:'14px'}} className='text-center'>
          <Button style={{ width: '50px' }} >
            <span>
              <i style={{ fontSize: '20px' }} class="material-icons">delete_sweep</i>
            </span>
          </Button>
          <Button style={{ marginLeft: '10px', width: '50px' }} >
            <span>
              <i style={{ fontSize: '20px' }} class="material-icons">border_color</i>
            </span>
          </Button>
        </th>
      </tr>

    );
  }
}

export default UserAdminItem;