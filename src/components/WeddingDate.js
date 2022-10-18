import React, {useState} from 'react';
import {Calendar} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../static/css/WeddingDate.css';

function WeddingDate() {
    const [selectDate, setSelectDate] = useState(new Date('2023-01-15'));

    return (
        <div>
            <p>2023-01-15</p>
            <Calendar
                value={selectDate}
                calendarType="US"
                // minDate={new Date('2023-01-01')}
                // maxDate={new Date('2023-01-31')}
                nextLabel={null}
                next2Label={'오후 2시'}
                prevLabel={null}
                prev2Label={'2023년 1월 15일 (일)'}
                // showNavigation={false}
                showNeighboringMonth={false}
                locale={'ko'}
            />
        </div>
    );
}

export default WeddingDate;
