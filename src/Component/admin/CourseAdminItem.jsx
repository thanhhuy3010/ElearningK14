import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
class CourseAdminItem extends Component {
  render() {
    let { adCourse } = this.props
    return (
      <tr>
        <th className='text-center'>
          <img src={adCourse.HinhAnh} width='42px' alt="cover" />
        </th>
        <th className='text-center'>{adCourse.MaKhoaHoc}</th>
        <th className='text-center'>{adCourse.TenKhoaHoc}</th>
        <th className='text-center'>{adCourse.NguoiTao}</th>
        <th className='text-center'>
          <Button style={{ width: '80px' }} >
            <span>
              <i style={{ fontSize: '20px' }} className="material-icons">delete_sweep</i>
            </span>
          </Button>
          <Button style={{ marginLeft: '10px', width: '80px' }} >
            <span>
              <i style={{ fontSize: '20px' }} className="material-icons">border_color</i>
            </span>
          </Button>
        </th>
      </tr>

    );
  }
}

export default CourseAdminItem;