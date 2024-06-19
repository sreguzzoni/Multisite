import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, MdSchool } from 'react-icons/md';

const Timeline = () => {
  return (
    <div>
      <h1>My Timeline</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2018 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Tech Company</h4>
          <p>
            Developed various applications and services using modern technologies.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Computer Science</h3>
          <h4 className="vertical-timeline-element-subtitle">University Name</h4>
          <p>
            Specialized in software development and data science.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
