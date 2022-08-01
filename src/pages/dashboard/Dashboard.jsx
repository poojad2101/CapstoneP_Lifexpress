import React from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="Dashboard">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Dashboard;
