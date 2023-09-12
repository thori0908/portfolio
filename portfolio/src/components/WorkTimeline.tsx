
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

function WorkTimeline() {
  type Work = { title: string, companyName: string, startDate: string }
  const works = [
    {title: 'Full Stack Engineer', companyName: 'ExaWizards, Inc', startDate: 'Aug 2020'},
    {title: 'Tech Lead', companyName: 'Laibo, Inc', startDate: 'June 2018'},
    {title: 'Software Engineer', companyName: 'BizReach, Inc', startDate: 'Jan 2017'},
    {title: 'Software Engineer', companyName: 'fact-real, Inc', startDate: 'April 2015'}
  ] as Work[]

  return (
    <Timeline>
        {works.map((work, index) => (
            <TimelineItem>
                <TimelineOppositeContent color="textSecondary">
                    {work.startDate}
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot />
                {index !== works.length-1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>{`${work.title} at ${work.companyName}`}</TimelineContent>
            </TimelineItem>
        ))}
    </Timeline>
  );
}

export default WorkTimeline;