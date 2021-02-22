import React from 'react';
import SideNav from '../components/dashboard/reusables/sideNav';
import Transfer from '../components/dashboard/transfer';

const Styles = () => {
    return (
        <style jsx='true'>
            {
                ` .mainArea {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 250px;
                }
                 `
            }</style>
    )
}

const Dashboard = () => {
    return (
        <div>
            <SideNav/>
            <div className='mainArea'>
                <Transfer/>
            </div>
            <Styles/>
        </div>
    )
}

export default Dashboard;
