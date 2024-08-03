import React, {useEffect, useState} from 'react'
import { LineChart } from '@mui/x-charts/LineChart' 
import './ReportPage.css'
import CalorieIntakePopup from '../components/ReportFormPopup/CalorieIntake/CalorieIntakePopup'
import{ AiFillEdit } from 'react-icons/ai'
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';



const ReportPage = () => {
    const color = '#ffc20e'
    const location = useLocation();
    const pathname = location.pathname;
    console.log(pathname)

    const chartsParams = {
        // margin: {bottom: 20, left: 25, right: 5 },
        height: 300,
        // height:300,
        margin:{ left: 30, right: 30, top: 30, bottom: 50 },
        // grid:{ vertical: true, horizontal: true }
    }
    const [dataS1,setDataS1]=useState(null)
    const getDataForS1 = async () => {
        if (pathname == '/report/Calorie%20Intake') {
            fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/calorieintake getcalorieintakebylimit',{
                method: 'POST',
                credentials: 'include', 
                headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify({ limit: 10 })
            })
            .then(res => res-json())
            .then(data => {
                if (data.ok && data.data.length > 0){
                    let temp = data.data.map((item) => {
                        return {
                            date: item.date, 
                            value: item.calorientake, 
                            unit: 'kcal'
                        }
                    })
                    let dataForLineChart = temp.map((item) => {
                        let val = JSON. stringify(item.value)
                        return val
                    })
                    
                    let dataForXAxis = temp-map((item) => {
                        let val = new Date(item.date)
                        return val
                    }) 

                    setDataS1({
                        data: dataForLineChart,
                        title: '1 Day Calorie Intake',
                        color: color,
                        xAxis: {
                            data: dataForXAxis,
                            label: 'Last 10 Days', 
                            scaleType: 'time'
                        }
                    })
                }
                    
                else{
                    setDataS1([])
                }
            } )
            .catch(err => {
                console. log(err)
            })
        }        
        else {
            // get data for other reports
            alert('get data for other reports')
        }
    }

        // let temp = [
        //     {
        //         date: 'Thu Sep 28 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2000,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Wed Sep 27 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2500,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Tue Sep 26 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2700,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Mon Sep 25 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 3000,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Sun Sep 24 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2000,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Sat Sep 23 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2300,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Fri Sep 22 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2500,
        //         unit: 'kcal'
        //     },
        //     {
        //         date: 'Thu Sep 21 2023 20:30:30 GMT+0530 (India Standard Time)',
        //         value: 2700,
        //         unit: 'kcal'
        //     },
        // ]
        // let dataForLineChart = temp.map((item) => {
        //     let val = JSON.stringify(item.value);
        //     return val;
        // })
        
        // let dataForXAxis = temp.map((item) => {
        //     let val = new Date(item.date);
        //     return val;
        // })

        // console.log({
        //     data: dataForLineChart,
        //     title: '1 Day Calorie Intake',
        //     color: color,
        //     xAxis: {
        //       data: dataForXAxis,
        //       label: 'Last 10 Days',
        //       scaleType: 'time',
        //     }
        //   })

        // setDataS1({
        //     data: dataForLineChart,
        //     title: '1 Day Calorie Intake',
        //     color: color,
        //     xAxis: {
        //         data: dataForXAxis,
        //         label: 'Last 10 Days',
        //         scaleType: 'time'
        //     }
        // })

        

    }
    useEffect(() => {
        getDataForS1()
    }, [])

    console.log(dataS1 &&1)
    
    const [showCalorieIntakePopup, setShowCalorieIntakePopup] = useState(false)


  return (
    <div className='reportpage'>
        {
            dataS1.length > 0 && 
            <div className='s1'>
                {
                    dataS1 &&
                    <LineChart
                        xAxis={[{
                            id: 'Day',
                            data: dataS1.xAxis.data, 
                            scaleType: dataS1.xAxis-scaleType,
                            label: dataS1.xAxis.label, 
                            valueFormatter: (date) => {
                                return date-getDate();
                            }
                        }]}
                        series={[
                            {
                                data: dataS1.date,
                                label: dataS1.title,
                                color: dataS1.color,
                            },
                        ]}
                        {...chartsParams}
                    />
                }
            </div>
        } 
        
        <button className='editbutton'
                onClick={() => {
                    if (pathname == './repoet/Calorie%20Intake'){
                    setShowCalorieIntakePopup(true)
                    }
                    else{
                        //show popup for other reports
                        alert('show popup for other reports')
                    }
                }}
            >
                <AiFillEdit />
            </button>

            {
                showCalorieIntakePopup &&

                <CalorieIntakePopup setShowCalorieIntakePopup={setShowCalorieIntakePopup} />

            }

    </div>
)


export default ReportPage
