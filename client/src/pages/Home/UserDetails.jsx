import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FiArrowLeft, FiMail, FiCalendar, FiDollarSign, FiActivity, FiPackage, FiUser, FiClock } from 'react-icons/fi';
import { providerarray, OriginalsGames, TableGames } from '../../utils/gameData';

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const user = {
    id: parseInt(id),
    name: 'John Doe',
    email: 'john@gaming.com',
    status: 'active',
    lastActive: '2 minutes ago',
    joinDate: '2024-01-15',
    totalDeposits: 12500,
    totalWithdrawals: 8500,
    balance: 4000,
    gamesPlayed: 42,
    favoriteGames: ['Limbo', 'First Person Deal or No Deal'],
    favoriteProviders: ['jili', 'evolutionlive'],
  };

  const rechargeHistory = [
    { id: 1, date: '2024-03-15 14:30', amount: 1000, method: 'Credit Card', status: 'completed' },
    { id: 2, date: '2024-03-14 10:15', amount: 500, method: 'Crypto', status: 'completed' },
    { id: 3, date: '2024-03-13 16:45', amount: 2000, method: 'Bank Transfer', status: 'pending' },
    { id: 4, date: '2024-03-12 09:20', amount: 750, method: 'E-Wallet', status: 'completed' },
  ];

  const betHistory = [
    { id: 1, date: '2024-03-15 14:35', game: 'Limbo', betAmount: 100, winAmount: 200, result: 'win' },
    { id: 2, date: '2024-03-15 14:20', game: 'Crash', betAmount: 50, winAmount: 0, result: 'loss' },
    { id: 3, date: '2024-03-14 11:05', game: 'Blackjack', betAmount: 200, winAmount: 350, result: 'win' },
    { id: 4, date: '2024-03-14 10:30', game: 'Roulette', betAmount: 75, winAmount: 150, result: 'win' },
  ];

  const userProviders = providerarray.filter(p => 
    user.favoriteProviders.includes(p.provider)
  );

  const userGames = [...OriginalsGames, ...TableGames].filter(game =>
    user.favoriteProviders.includes(game.provider)
  ).slice(0, 10);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <FiArrowLeft className="w-6 h-6 text-gray-300" />
          </button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gradient-silver">
              User Details
            </h1>
            <p className="text-gray-400">
              View detailed information about user #{id}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - User Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* User Profile Card */}
          <div className="glass border border-gray-800 rounded-xl p-6">
            <div className="flex flex-col md:flex-row items-start justify-between mb-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 flex items-center justify-center text-white text-2xl md:text-3xl font-bold">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">{user.name}</h2>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span className="px-3 py-1 bg-gray-700 text-white rounded-full text-sm">
                      {user.status.toUpperCase()}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center">
                      <FiClock className="mr-1" /> Last active: {user.lastActive}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Total Deposits', value: `$${user.totalDeposits.toLocaleString()}`, icon: <FiDollarSign /> },
                { label: 'Balance', value: `$${user.balance.toLocaleString()}`, icon: <span>💰</span> },
                { label: 'Games Played', value: user.gamesPlayed, icon: <span>🎮</span> },
                { label: 'Total Withdrawals', value: `$${user.totalWithdrawals.toLocaleString()}`, icon: <FiDollarSign /> },
              ].map((stat, index) => (
                <div key={index} className="glass border border-gray-800 rounded-xl p-4">
                  <div className="text-gray-300 text-sm mb-1">{stat.label}</div>
                  <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50">
                <FiMail className="text-gray-400" />
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="font-medium text-white">{user.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50">
                <FiCalendar className="text-gray-400" />
                <div>
                  <div className="text-sm text-gray-400">Join Date</div>
                  <div className="font-medium text-white">{user.joinDate}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Recharge History */}
          <div className="glass border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <FiDollarSign className="mr-2" />
              Recharge History
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Amount</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Method</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {rechargeHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-800/30">
                      <td className="px-4 py-3 text-sm text-gray-300">{item.date}</td>
                      <td className="px-4 py-3 text-sm font-bold text-white">${item.amount.toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{item.method}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          item.status === 'completed' 
                            ? 'bg-gray-700 text-white'
                            : 'bg-gray-800 text-gray-400'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bet History */}
          <div className="glass border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <FiActivity className="mr-2" />
              Bet History
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Game</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Bet Amount</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Win Amount</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-400">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {betHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-800/30">
                      <td className="px-4 py-3 text-sm text-gray-300">{item.date}</td>
                      <td className="px-4 py-3 text-sm font-medium text-white">{item.game}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">${item.betAmount}</td>
                      <td className="px-4 py-3 text-sm">
                        {item.winAmount > 0 ? <span className="text-white">${item.winAmount}</span> : '-'}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          item.result === 'win'
                            ? 'bg-gray-700 text-white'
                            : 'bg-gray-800 text-gray-400'
                        }`}>
                          {item.result.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column - Access & Quick Actions */}
        <div className="space-y-6">
          {/* Game Access */}
          <div className="glass border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <FiPackage className="mr-2" />
              Game Access
            </h3>
            <div className="space-y-3">
              <div className="text-sm text-gray-400 mb-2">
                User has access to {userProviders.length} providers:
              </div>
              {userProviders.map((provider) => (
                <div key={provider.id} className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50">
                  {provider.icon ? (
                    <img src={provider.icon} alt={provider.game_name} className="w-8 h-8 rounded" loading="lazy" />
                  ) : (
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-white text-xs font-bold">
                      {provider.game_name?.charAt(0)}
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="font-medium text-white">{provider.game_name}</div>
                    <div className="text-xs text-gray-400">{provider.game_type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Favorite Games */}
          <div className="glass border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Favorite Games</h3>
            <div className="space-y-3">
              {userGames.map((game) => (
                <div key={game.id} className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50">
                  <img src={game.icon || game.img} alt={game.game_name} className="w-12 h-12 rounded-lg object-cover" loading="lazy" />
                  <div className="flex-1">
                    <div className="font-medium text-white">{game.game_name}</div>
                    <div className="text-xs text-gray-400 flex items-center gap-2">
                      <span>{game.game_type}</span>
                      <span className="px-1 bg-gray-700 rounded">ID: {game.id}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 bg-gradient-to-br from-gray-800 to-black border border-gray-700 text-white rounded-lg hover:shadow-glow transition-all duration-300">
                Add Balance
              </button>
              <button className="w-full px-4 py-3 bg-gradient-to-br from-gray-800 to-black border border-gray-700 text-white rounded-lg hover:shadow-glow transition-all duration-300">
                Reset Password
              </button>
              <button className="w-full px-4 py-3 bg-gradient-to-br from-gray-800 to-black border border-gray-700 text-white rounded-lg hover:shadow-glow transition-all duration-300">
                View Full History
              </button>
              <button className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors">
                Export User Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;