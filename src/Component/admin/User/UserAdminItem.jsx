import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
class UserAdminItem extends Component {
    render() {
        let { adUser } = this.props
        return (

            <tr>
                <th>
                    {/* <img src={adUser.HinhAnh} width='42px' alt="cover" /> */}
                </th>
                <th>{adUser.TaiKhoan}</th>
                <th>{adUser.MatKhau}</th>
                <th>{adUser.HoTen}</th>
                <th>
                    <Button style = {{width:'80px'}} >
                        <span>
                        <i style={{fontSize:'20px'}} class="material-icons">delete_sweep</i>
                        </span>

                    </Button>
                    <Button style = {{marginLeft:'10px',width:'80px'}} >
                        <span>
                        <i style={{fontSize:'20px'}} class="material-icons">border_color</i>
                        </span>
                    </Button>
                </th>
            </tr>

        );
    }
}

export default UserAdminItem;