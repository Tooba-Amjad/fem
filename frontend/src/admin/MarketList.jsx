import React, { useState, useEffect, useContext } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { FaSortUp, FaSortDown, FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import 'react-confirm-alert/src/react-confirm-alert.css';
import '../style/List.css';

const API_BASE_URL = import.meta.env.VITE_API_URL;

function MarketList() {
  const [marketsData, setMarketsData] = useState([]);
  const [loadingMarkets, setLoadingMarkets] = useState(false);
  const [errorMarkets, setErrorMarkets] = useState(null);
  const [sortOrder, setSortOrder] = useState('desc');

  const { user } = useContext(AuthContext);
  const userRole = user ? user.role : 'guest';
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        setLoadingMarkets(true);
        const response = await fetch(`${API_BASE_URL}/api/market`);
        
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
console.log(data)
        setMarketsData(data);
      } catch (error) {
        setErrorMarkets(error.message);
      } finally {
        setLoadingMarkets(false);
      }
    };

    fetchMarkets();
  }, []);

  // Sort marketsData directly when sortOrder changes
  useEffect(() => {
    setMarketsData(prev =>
      [...prev].sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      })
    );
  }, [sortOrder]);

  const handleSortToggle = () => {
    setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const handleDelete = (slug) => {
    confirmAlert({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this market?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              const res = await fetch(`${API_BASE_URL}/api/market/${slug}`, {
                method: 'DELETE',
              });
              const result = await res.json();
              if (!res.ok) throw new Error(result.error || 'Failed to delete');

              setMarketsData(prev => prev.filter(m => m.slug !== slug));

              alert('Market deleted successfully!');
            } catch (err) {
              alert('Error: ' + err.message);
            }
          },
        },
        { label: 'No' },
      ],
    });
  };

  const handleEdit = (id) => {
    navigate(`/markets/edit/${id}`);
  };

  return (
    <div className="container">
      <div className="d-flex mb-4 btn-container">
        <button onClick={handleSortToggle} className="btn btn-info btn-spacing">
          {sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />}
          <span className="sort-text text-white">Sort</span>
        </button>

        {['admin', 'editor'].includes(userRole) && (
          <Link to="/addmarket" className="btn btn-primary btn-spacing">Add</Link>
        )}
      </div>

      {errorMarkets && <p className="text-danger">Error: {errorMarkets}</p>}
      {loadingMarkets ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {marketsData.map((market) => (
            <div key={market._id} className="col-md-4 mb-4">
              <div
            
                onClick={() => navigate(`/market/:${market.slug}`)}
                className="text-decoration-none card"
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={`${API_BASE_URL}/uploads/${market.mainImage}`}
                  className="card-img-top"
                  alt={market.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ height: '30px', overflow: 'hidden' }}>{market.name}</h5>
                  <p className="card-footer">
                   
                    <b>Date:</b> {new Date(market.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              {['admin', 'editor'].includes(userRole) && (
                <div className="d-flex justify-content-center p-2">
                  <button onClick={(e) => { e.stopPropagation(); handleEdit(market._id); }} className="btn btn-cutsom m-1">
                    <FaEdit />
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); handleDelete(market.slug); }} className="btn btn-transparent m-1">
                    <FaTrash />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MarketList;
