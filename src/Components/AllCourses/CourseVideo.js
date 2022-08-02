import React from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import useAdmission from '../../Hooks/useAdmission';
import useJobCourses from '../../Hooks/useJobCourse';
import useLanguage from '../../Hooks/useLanguage';
import useVideo from '../../Hooks/useVideo';

const CourseVideo = () => {
    const { fileName } = useParams();
  const [video] = useVideo([]);

  const courseData = video.find((allcard) => allcard.fileName === fileName);
    return (
        <div className="h-96 w-full">
            <iframe className='rounded-sm' width={'100%'} height={'100%'} src={courseData?.vurl}frameborder="0" allowfullscreen></iframe>
          </div>
    );
};

export default CourseVideo;