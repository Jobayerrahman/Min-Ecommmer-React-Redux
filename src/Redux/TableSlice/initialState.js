const initialState = {
    tables:[
        {
            id:1,
            table: "Table 01",
            status: "booked",
            time:"3.00pm",
            color: "#61717f"
        },
        {
            id:2,
            table: "Table 02",
            status: "",
            time:"",
            color: ""
        },
        {
            id:3,
            table: "Table 03",
            status: "",
            time:"",
            color: ""
        },
        {
            id:4,
            table: "Table 04",
            status: "booked",
            time:"3.00pm",
            color: "#61717f"
        },
        {
            id:5,
            table: "Table 05",
            status: "",
            time:"",
            color: ""
        },
        {
            id:6,
            table: "Table 06",
            status: "",
            time:"",
            color: ""
        }
    ],
    bookedInfos: [
        {
            id:1,
            name: "Jora",
            mobile: "741258963",
            table: "Table 01",
            member: "2 person",
            time: "2:00pm"
        },
        {
            id:2,
            name: "Sora",
            mobile: "748965231",
            table: "Table 04",
            member: "4 person",
            time: "5:00pm"
        },
    ]
}

export default initialState;
