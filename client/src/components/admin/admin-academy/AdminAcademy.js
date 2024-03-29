import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Vimeo from '@u-wave/react-vimeo'
import { getCourses, deleteCourse } from '../../../actions/course'
import { useHistory } from 'react-router-dom'

const AdminAcademy = ({ match, getCourses, deleteCourse, courses }) => {
  const history = useHistory()
  const { category, chapter } = match.params

  React.useEffect(() => {
    getCourses(category, chapter)
  }, [category, chapter, getCourses])

  return (
    <div className='row admin-academy bg-pure-gold-grey py-4'>
      <div className='col-lg-12'>
        <div className='bg-white pure-gold-rounded-lg p-3 mb-3'>
          <div className='font-24 font-bold'>
            Academy
            {courses.length ? null : <Link to={`/academy-create/${category}/${chapter}`}> <i className='fa fa-plus-circle text-pure-gold-grey'></i></Link>}
          </div>
          <div className='row pt-4'>
            <div className='col-lg-3 col-md-5 border-right'>
              {['READY', 'SET', 'LAUNCH'].map((item, index) =>
                <div key={index} className='pb-4'>
                  <div className='font-18 font-bold'>
                    {item}
                  </div>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((moduleItem, moduleIndex) =>
                    <Link key={moduleIndex} to={`/academy/${index + 1}/${moduleItem}`}>
                      <div className={'rounded-lg cursor-pointer font-16 pl-1 ' + ((index + 1) === Number(category) && moduleItem === Number(chapter) ? 'bg-pure-gold-brown' : '')}>
                        <i className='fa fa-caret-right'></i> Chapter {moduleItem}
                      </div>
                    </Link>
                  )}
                </div>
              )}
            </div>
            <div className='col-lg-9 col-md-7'>
              {courses.length === 0 ? <div>There is no course in this chapter.</div> : null}
              {courses.map((item, index) =>
                <div key={index}>
                  <div className='text-right'>
                    <Link to={`/academy-edit/${item._id}`} className='btn bg-pure-gold-brown mb-2 width-85'>EDIT</Link>
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure?')) deleteCourse(history, item._id)
                      }}
                      className='btn bg-pure-gold-brown mb-2 ml-2 width-85'
                    >DELETE</button>
                  </div>
                  <div className='font-18 font-bold text-center mt-2'>{item.title}</div>
                  <div className='font-18 pt-3 text-justify course-description'>
                    {item.description}
                  </div>
                  <div className="text-center p-1 pt-3">
                    <Vimeo
                      video={item.video}
                      responsive={true}
                    />
                  </div>
                  {item.exams.map((item, index) =>
                    <div key={index} className='my-3'>
                      <div className='my-2'><span className='badge badge-pending font-16 width-100'>Question {index + 1}:</span> {item.question}</div>
                      <div className='my-2'><span className='badge badge-pending font-16 width-100'>Answer:</span> {item.answer}</div>
                      <hr />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  courses: state.course.courses
})

export default connect(mapStateToProps, { getCourses, deleteCourse })(AdminAcademy)