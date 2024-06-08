import React from "react";

const Calendar = (props) => {
    const { leaveDates, month, year } = props;

    const getDaysInMonth = (month, year) => {
        console.log(month, year)
        var date = new Date(year, month, 1);
        var data = [];
        while (date.getMonth() === month) {
            data.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        const firstDay = data[0].getDay();
        if (firstDay !== 0) {
            for (let index = 0; index < firstDay; index++) {
                data.splice(index, 0, "")
            }
        }
        return data;
    };

    const monthData = getDaysInMonth(month, year);
    return (
        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 p-2 mt-5" >
            <div className='lg:col-span-12 md:col-span-12  sm:col-span-12 font-poppins text-center text-xl font-semibold'>May</div>
            <div className='lg:col-span-12 md:col-span-12  sm:col-span-12 font-poppins text-center text-xl font-semibold'>
                <div className="grid lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-7 p-2 mt-2 text-lg font-normal" >
                    <div className='lg:col-span-1 md:col-span-1  sm:col-span-1 font-poppins text-center mt-2 m-2'>Sun</div>
                    <div className='lg:col-span-1 md:col-span-1  sm:col-span-1 font-poppins text-center mt-2 m-2'>Mon</div>
                    <div className='lg:col-span-1 md:col-span-1  sm:col-span-1 font-poppins text-center mt-2 m-2'>Tue</div>
                    <div className='lg:col-span-1 md:col-span-1  sm:col-span-1 font-poppins text-center mt-2 m-2'>Wed</div>
                    <div className='lg:col-span-1 md:col-span-1  sm:col-span-1 font-poppins text-center mt-2 m-2'>Thu</div>
                    <div className='lg:col-span-1 md:col-span-1  sm:col-span-1 font-poppins text-center mt-2 m-2'>Fri</div>
                    <div className='lg:col-span-1 md:col-span-1  sm:col-span-1 font-poppins text-center mt-2 m-2'>Sat</div>
                    {monthData?.map((ele) => {
                        if (ele) {
                            return <div className={ele.getDay() === 0 || ele.getDay() === 6 ?
                                'lg:col-span-1 md:col-span-1  sm:col-span-1 font-poppins text-center mt-1 m-2 bg-[#8B8B8B] text-white' :
                                leaveDates === ele.getDate() ? 'lg:col-span-1 md:col-span-1  sm:col-span-1 font-poppins text-center mt-1 m-2 bg-[#C71026] text-white' :
                                    'lg:col-span-1 md:col-span-1  sm:col-span-1 font-poppins text-center mt-1 m-2 bg-[#16C098] text-white'}>{ele.getDate()}</div>
                        } else {
                            return <div className='lg:col-span-1 md:col-span-1  sm:col-span-1 font-poppins text-center mt-1 m-2 bg-[#ECEEF6]'>{ele}</div>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}
export default Calendar;