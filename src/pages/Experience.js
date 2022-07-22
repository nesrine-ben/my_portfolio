import React from 'react'
import {
  VerticalTimeline, VerticalTimelineElement
} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
import '../styles/Experience.css'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2002-2006"
          iconStyle={{ background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}
          >
          <h3 className='vertical-timeline-element-title'> 
          Faculté des Sciences Economiques et de Gestion de Tunis
          </h3>
          <p>Maitrise en Informatique Appliquée à la Gestion</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2009-2011"
          iconStyle={{ background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}
          >
          <h3 className='vertical-timeline-element-title'> 
          Institut Supérieur des Arts et Multimédia Manouba
          </h3>
          <p>Mastère en Multimédia et Arts de l'image</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2009-2011"
          iconStyle={{ background: "#e9d25b", color: "#fff"}}
          icon={<WorkIcon />}
          >
          <h3 className='vertical-timeline-element-title'> 
          Institut Supérieur des Arts et Multimédia Manouba
          </h3>
          <p>Mastère en Multimédia et Arts de l'image</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className="vertical-timeline-element--education"
          date="2009-2011"
          iconStyle={{ background: "#e9d25b", color: "#fff"}}
          icon={<WorkIcon />}
          >
          <h3 className='vertical-timeline-element-title'> 
          Institut Supérieur des Arts et Multimédia Manouba
          </h3>
          <p>Mastère en Multimédia et Arts de l'image</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience