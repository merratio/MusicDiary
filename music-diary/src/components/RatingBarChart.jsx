import {BarElement, CategoryScale, Chart as ChartJs, LinearScale} from 'chart.js'
import {Bar} from 'react-chartjs-2'

ChartJs.register(LinearScale, CategoryScale, BarElement)

const RatingBarChart = (props) =>{
    const ratingStats = props.songs.reduce((acc,song) =>{
        acc[song.artist] = (acc[song.artist]|| 0) + 1
        return acc

    }, {})

    const data = {
        labels: Object.keys(ratingStats),
        datasets:[
            {
                label: 'Songs by artists',
                data: Object.values(ratingStats),
                backgroundColor:[
                    '#FF6384',
                    '#36A2EB',
                    '#FFC356',
                    '#4BC0C0',
                    '#9966FF',
                    '#FF9F40',
                    '#FF6384',
                    '#C9CBCF'
                ],
                borderWidth: 2,

            }

        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend:{
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Music rating Distribution'
            }
        }
    }

    return(
        <>
        <div className='pieChart'>
            <h2>Artist Distribution</h2>
            <hr />
            <div className='pie'>
                <Bar data={data} options={options}/>

            </div>
            
        </div>
        
        </>
    )
}

export default RatingBarChart