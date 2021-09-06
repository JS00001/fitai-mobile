import React from 'react';

import WorkoutsPersonalized from './Subscreens/Workouts.Personalized';
import WorkoutsYours from './Subscreens/Workouts.Yours';
import SegmentControl from '../components/SegmentControl';

export default function Workouts() {

    const [pageIndex, setPageIndex] = React.useState(0);

    return (
        <>
            <SegmentControl 
                values={["Your Workouts", "Personalized"]}
                onChange={(index) => setPageIndex(index)}
            />
            {pageIndex ? <WorkoutsPersonalized /> : <WorkoutsYours />}
        </>
    )
}
