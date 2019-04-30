import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getDetailCourse } from '../Component/redux/actions/course.actions'
import '../Styles/CourseDetailPage.css'
class CourseDetailPage extends Component {
  componentDidMount() {
    this.props.getDeCourse(this.props.match.params.courseid);
  }
  render() {
    return (
      <div className="detailComponent" style={{ backgroundColor: ' rgb(10, 32, 41)' }} >
        <div className="col-xs-12">
          <div className="body_detailFilm container-fluid" style={{ background: 'rgb(10, 32, 41)' }}>
            <img width="100%" src={this.props.DetailCourse.HinhAnh} />
            <div className="Gradient"></div>

            <div className="detailMainInfo mainMaxWidth2">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-6 filmPosterTop">
                  <div className="row">
                  <img src={this.props.DetailCourse.HinhAnh} width = "90%" height ="90% " />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-6 text-white infoMain">
                  <h3><strong>{this.props.DetailCourse.TenKhoaHoc}</strong></h3>
                  <p>Lượt Xem:{this.props.DetailCourse.LuotXem}</p>
                  <p>Mô tả: {this.props.DetailCourse.MoTa} </p>
                  <div className="buttonGroup">
                    <button className="btn btn-danger text-light mr-3" type="button">Ghi Danh</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
const mapstatetoProp = (mapstate) => {
  console.log('log: ', mapstate);
  return {
    DetailCourse: mapstate.storeCourseReducer.CourseDetail
  }
}
const DispatchToProps = (dispatch) => {
  console.log('dispatch: ', dispatch);
  return {
    getDeCourse: (courseid) => {
      dispatch(getDetailCourse(courseid))
    }
  }
}
export default connect(mapstatetoProp, DispatchToProps)(CourseDetailPage);