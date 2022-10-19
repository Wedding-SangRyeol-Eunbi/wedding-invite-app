import React, {useState} from 'react';
import {Calendar} from 'react-calendar';
import dayjs from 'dayjs';
import 'react-calendar/dist/Calendar.css';
import '../static/css/WeddingDate.css';

function WeddingDate() {
    const [selectDate, setSelectDate] = useState(new Date('2023-01-15'));

    return (
        <div id="weddingCalendar">
            <Calendar
                value={selectDate}
                calendarType="US"
                formatDay={(locale, date) => dayjs(date).format('D')}
                prevLabel={null}
                prev2Label={'2023년 1월 15일 (일)'}
                nextLabel={null}
                next2Label={'오후 2시'}
                showNeighboringMonth={false}
                locale={'ko'}
            />
        </div>
    );
}

export default WeddingDate;
