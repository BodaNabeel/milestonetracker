import React, { useContext } from 'react'
import { DataContext } from '../../data/DataContext'
import DoughnutChart from '../DoughnutChart'

export default function ProgressOverviewCard() {
    const {storedBooks, storedMovies, storedSeries, storedGames} = useContext(DataContext)
    console.log(storedBooks.length)
  return (
    <div className='ProgressOverviewCard-Container'>
        <div className="ProgressOverviewCard">
            <h1 className="ProgressOverviewCard-title">Books</h1>
            <div className="ProgressOverviewCard-content">
                <DoughnutChart />
                <button className="ProgressOverviewCard-btn">Details</button>
            </div>
        </div>
        <div className="ProgressOverviewCard">
            <h1 className="ProgressOverviewCard-title">Movies</h1>
            <div className="ProgressOverviewCard-content">
                <DoughnutChart />
                <button className="ProgressOverviewCard-btn">Details</button>
            </div>
        </div>
        <div className="ProgressOverviewCard">
            <h1 className="ProgressOverviewCard-title">Series</h1>
            <div className="ProgressOverviewCard-content">
                <DoughnutChart />
                <button className="ProgressOverviewCard-btn">Details</button>
            </div>
        </div>

    </div>
  )
}
