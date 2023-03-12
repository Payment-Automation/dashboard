import React from 'react';
import Layout from './reusables/Layout';
import Transfer from '../../components/dashboard/Transfer';

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
            <Layout>
                <Transfer/>
            </Layout>
            <Styles/>
        </div>
    )
}

export default Dashboard;
