import {ArcElement, Chart as ChartJs, Legend, Tooltip} from 'chart.js'
import {Pie} from 'react-chartjs-2'

//register Chart.js components
ChartJs.register(ArcElement,Tooltip, Legend)

const GenrePieChart = (props) =>{
    //Calculate genre distribution
    const genreStats = props.songs.reduce((acc, song) => {
        acc[song.genre] = (acc[song.genre] || 0) + 1
        return acc
    }, {})

    //prepare data for chartjs
    const data = {
        labels: Object.keys(genreStats),
        datasets:[
            {
                label: 'Songs by Genre',
                data: Object.values(genreStats),
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
            },
        ],


    }

    const options = {
        responsive: true,
        plugins: {
            legend:{
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Music Genre Distribution'
            }
        }
    }

    return(
        <>
        <div className='pieChart'>
            <h2>Genre Distribution</h2>
            <hr />
            <div className='pie'>
                <Pie data={data} options={options}/>

            </div>
            

        </div>
        
        </>
    ) 
}



export default GenrePieChart
