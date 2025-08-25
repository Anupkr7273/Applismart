import React from 'react';
import StatsCard from '../../components/dashboard/StatsCard';
import RecentActivity from '../../components/dashboard/RecentActivity';
import { Link } from 'react-router-dom';

const Overview = () => {
    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        Welcome back, Anup!
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Here's what's happening with your job applications today.
                    </p>
                </div>

                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                    + Upload Resume
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard
                    title="Total Resumes"
                    value="3"
                    icon="📝"
                    trend="up"
                    trendValue="+1 today"
                    color="blue"
                />

                <StatsCard
                    title="Average ATS Score"
                    value="82%"
                    icon="⭐"
                    trend="up"
                    trendValue="+5% this week"
                    color="green"
                />

                <StatsCard
                    title="Cover Letters"
                    value="12"
                    icon="✉️"
                    trend="up"
                    trendValue="+3 this month"
                    color="purple"
                />

                <StatsCard
                    title="Applications"
                    value="8"
                    icon="📊"
                    trend="steady"
                    color="orange"
                />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <RecentActivity />

                {/* Quick Actions Panel */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Actions</h3>

                    <div className="space-y-3">
                        <Link to="/ai-tools/rewrite" className="w-full flex items-center space-x-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                            <span className="text-2xl">🔄</span>
                            <span className="text-left">
                                <p className="font-medium text-gray-800 dark:text-white">Rewrite Resume</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Enhance your bullet points</p>
                            </span>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;