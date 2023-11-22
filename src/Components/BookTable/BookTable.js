import React, { useState } from "react";

export default function BookTable(){
    const [ showTable, setShowTable ] = useState(false);
    const [ bookedTable, setBookedTable ] = useState([]);
    const [ bookingName, setBookingName ] = useState();
    const [ mobile, setMobile ] = useState();
    const [ tableNumber, setTableNumber ] = useState();
    const [ member, setMember ] = useState();
    const [ time, setTime ] = useState();

    const handleShowTable = () =>{
        setShowTable(!showTable);
    }

    const handleFormInput = (e) =>{
        if(e.target.type === 'text' ){
            const inputValue = e.target.value;
            if(e.target.name === 'bookingName'){
                setBookingName(inputValue);
            }
            else if(e.target.name === 'mobile'){
                setMobile(inputValue);
            }
            else if(e.target.name === 'selectedTable'){
                setTableNumber(inputValue);
            }
            else if(e.target.name === 'selectedMember'){
                setMember(inputValue);
            }
            else if(e.target.name === 'selectedTime'){
                setTime(inputValue);
            }
        }
    }

    const handleTableBook = (e) =>{
        e.preventDefault();
        setBookedTable([...bookedTable,{name: bookingName, mobile: mobile, table: tableNumber, numberofmember: member, time: time}])
        setBookingName('');
        setMobile('');
        setTableNumber('');
        setTableNumber('');
        setTime('');
        console.log(bookedTable);
        console.log({name: bookingName, mobile: mobile, table: tableNumber, numberofmember: member, time: time});
    }

    return(
        <div className="my-[40px] h-[auto] p-[20px] 
                text-center bg-white 
                shadow-lg shadow-indigo-500/50  
                md:mx-[50px] md:h-[auto]  xl:h-[650px] xl:mx-[200px]"
            >
            <h2 className="font-bold text-[32px] mb-4">Reserve A Table</h2>
            <div className="flex flex-wrap justify-stretch 
                    lg:flex-nowrap 
                    xl:flex-nowrap">
                {showTable ? (
                    <div className="flex flex-col 
                            w-[650px] mx-[15px]
                            md:mx-[15px] lg:mx-[60px]">
                        <div className="w-[100%] flex flex-col items-start mb-[20px]">
                            <h4 className="font-bold text-[14px] mb-[5px]">Booking Time :</h4>
                            <select className="w-[100%] h-[40px] text-[14px] mb-[5px] border-solid border-2 border-slate-200 rounded-md" name="selectedFruit">
                                <option value="">2:00 pm</option>
                                <option value="">3:00 pm</option>
                                <option value="">4:00 pm</option>
                                <option value="">5:00 pm</option>
                                <option value="">6:00 pm</option>
                                <option value="">7:00 pm</option>
                                <option value="">8:00 pm</option>
                                <option value="">9:00 pm</option>
                                <option value="">10:00 pm</option>
                            </select>
                        </div>
                        <div className="flex justify-between flex-wrap items-stretch mx-[50px] h-[100%] md: mb-[25px]">
                            <div className="w-[80px] h-[25px] mx-2 my-2 bg-[#e6ac0e] text-white rounded-md">Table 01</div>
                            <div className="w-[80px] h-[25px] mx-2 my-2 bg-[#e6ac0e] text-white rounded-md">Table 02</div>
                            <div className="w-[80px] h-[25px] mx-2 my-2 bg-[#e6ac0e] text-white rounded-md">Table 03</div>
                            <div className="w-[80px] h-[25px] mx-2 my-2 bg-[#e6ac0e] text-white rounded-md">Table 04</div>
                            <div className="w-[80px] h-[25px] mx-2 my-2 bg-[#e6ac0e] text-white rounded-md">Table 04</div>
                            <div className="w-[80px] h-[25px] mx-2 my-2 bg-[#e6ac0e] text-white rounded-md">Table 04</div>
                            <div className="w-[80px] h-[25px] mx-2 my-2 bg-[#e6ac0e] text-white rounded-md">Table 04</div>
                            <div className="w-[80px] h-[25px] mx-2 my-2 bg-[#e6ac0e] text-white rounded-md">Table 04</div>
                            <div className="w-[80px] h-[25px] mx-2 my-2 bg-[#e6ac0e] text-white rounded-md">Table 04</div>
                            <div className="w-[80px] h-[25px] mx-2 my-2 bg-[#e6ac0e] text-white rounded-md">Table 04</div>
                        </div>
                    </div>
                    ):(<div className="flex justify-between min-w-fit md:w-[100%] md:justify-center">
                        <img className="mx-[20px] mb-[40px] 
                                w-[140px] h-[240px] object-cover
                                md:w-[200px] md:h-[300px]
                                lg:w-[200px] lg:h-[400px]" 
                                src="http://localhost:3002/sources/assets/images/pizza/Pizza-2.jpg" 
                            />
                        <img className="mx-[20px] mt-[40px] 
                                w-[140px] h-[240px] object-cover
                                md:w-[200px] md:h-[300px]
                                lg:w-[200px] lg:h-[400px]" 
                                src="http://localhost:3002/sources/assets/images/pizza/Pizza-3.jpg" 
                            />
                    </div>)}
                <div className="w-[100%] h-[100%] flex flex-col items-start p-3">
                    {showTable ? (
                        <div className="w-[100%]">
                            <div className="w-[100%] flex flex-col items-start mb-[5px]">
                                <h4 className="font-bold text-[14px] mb-[5px]">Mobile Number :</h4>
                                <input className="w-[100%] h-[40px] 
                                    text-[14px] mb-[5px] px-2
                                    border-solid border-2 
                                    border-slate-200 rounded-md" />
                            </div>
                            <button 
                                className="p-2 mb-5 w-[100%] text-white
                                    bg-[#e6ac0e] rounded-md 
                                    font-bold text-[16px] 
                                    hover:bg-[#f8c331]"
                                onClick={handleShowTable}>
                                    Search Table
                            </button> 
                            <button 
                                className="p-2 mb-5 w-[100%] text-white
                                    bg-[#020202] rounded-md 
                                    font-bold text-[16px] 
                                    hover:bg-[#2b2b2b]"
                                onClick={handleShowTable}>
                                    Back
                            </button>
                        </div>
                    ):(
                        <div className="w-[100%]">
                            <form onSubmit={handleTableBook}>
                                <div className="w-[100%] flex flex-col items-start mb-[5px]">
                                    <h4 className="font-bold text-[14px] mb-[5px]">Booking Name :</h4>
                                    <input 
                                        className="w-[100%] h-[40px] 
                                            text-[14px] mb-[5px] 
                                            border-solid border-2 
                                            border-slate-200 rounded-md" 
                                        type="text"
                                        name="bookingName"
                                        onChange={ handleFormInput }
                                        value={bookingName}
                                    />
                                </div>
                                <div className="w-[100%] flex flex-col items-start mb-[5px]">
                                    <h4 className="font-bold text-[14px] mb-[5px]">Mobile Number :</h4>
                                    <input 
                                        className="w-[100%] h-[40px] 
                                            text-[14px] mb-[5px] 
                                            border-solid border-2 
                                            border-slate-200 rounded-md"
                                        type="text"
                                        name="mobile"
                                        onChange={ handleFormInput }
                                        value={mobile}
                                    />
                                </div>
                                <div className="w-[100%] flex flex-col items-start mb-[5px]">
                                    <h4 className="font-bold text-[14px] mb-[5px]">Table Name :</h4>
                                    <select 
                                        className="w-[100%] h-[40px] 
                                            text-[14px] mb-[5px] 
                                            border-solid border-2 border-slate-200 
                                            rounded-md" 
                                        type="text"
                                        name="selectedTable"
                                        onChange={ handleFormInput }
                                        value={tableNumber}
                                    >
                                        <option value="">-- Select Table --</option>
                                        <option value="Table 01">Table 01</option>
                                        <option value="Table 02">Table 02</option>
                                        <option value="Table 03">Table 03</option>
                                        <option value="Table 04">Table 04</option>
                                        <option value="Table 05">Table 05</option>
                                        <option value="Table 06">Table 06</option>
                                    </select>
                                </div>
                                <div className="w-[100%] flex flex-col items-start mb-[5px]">
                                    <h4 className="font-bold text-[14px] mb-[5px]">Number of Member :</h4>
                                    <select 
                                        className="w-[100%] h-[40px] 
`                                           text-[14px] mb-[5px] 
                                            border-solid border-2 
                                            border-slate-200 rounded-md" 
                                        type="text"
                                        name="selectedMember"
                                        onChange={ handleFormInput }
                                        value={member}
                                    >
                                        <option value="">-- Select Number of Member --</option>
                                        <option value="1 member">1 member</option>
                                        <option value="2 member">2 member</option>
                                        <option value="3 member">3 member</option>
                                        <option value="4 member">4 member</option>
                                        <option value="5 member">5 member</option>
                                        <option value="6 member">6 member</option>
                                        <option value="7 member">7 member</option>
                                    </select>
                                </div>
                                <div className="w-[100%] flex flex-col items-start mb-[5px]">
                                    <h4 className="font-bold text-[14px] mb-[5px]">Booking Time :</h4>
                                    <select 
                                        className="w-[100%] h-[40px] 
                                            text-[14px] mb-[5px] 
                                            border-solid border-2 
                                            border-slate-200 rounded-md" 
                                        type="text"
                                        name="selectedTime"
                                        onChange={ handleFormInput }
                                        value={time}
                                    >
                                        <option value="">-- Select Your Time --</option>
                                        <option value="11:00pm - 1:00pm">All Open</option>
                                        <option value="2:00 pm">2:00 pm</option>
                                        <option value="3:00 pm">3:00 pm</option>
                                        <option value="4:00 pm">4:00 pm</option>
                                        <option value="5:00 pm">5:00 pm</option>
                                        <option value="6:00 pm">6:00 pm</option>
                                        <option value="7:00 pm">7:00 pm</option>
                                        <option value="8:00 pm">8:00 pm</option>
                                        <option value="9:00 pm">9:00 pm</option>
                                        <option value="10:00 pm">10:00 pm</option>
                                    </select>
                                </div>
                                <button 
                                    className="p-2 mb-5 w-[100%] text-white
                                        bg-[#e6ac0e]  rounded-md 
                                        font-bold text-[16px] 
                                        hover:bg-[#f8c331] ">
                                    Book Now
                                </button>
                                <button 
                                    className="p-2 mb-5 w-[100%] text-white
                                        bg-[#020202] rounded-md 
                                        font-bold text-[16px] 
                                        hover:bg-[#2b2b2b]"
                                    onClick={handleShowTable}>
                                        Show Table
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}