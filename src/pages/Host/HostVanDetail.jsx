import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

export default function HostVanDetail() {
  const params = useParams();
  const [van, setVan] = useState(null);
  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);
  return (
    <section>
      <div className="van-detail-container">
        <Link to=".." relative="path" className="back-btn">
          &larr; <span>Back to all vans</span>
        </Link>
        {van ? (
          <div>
            <div className="van-list">
              <img
                src={van.imageUrl}
                alt={van.name}
                className="host-van-list-img"
              ></img>
              <div className="van-details">
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <span className="description">{van.name}</span>
                <span className="price">${van.price}/day</span>
              </div>
            </div>
            <nav className="host-links">
              <NavLink to="." end>
                Details
              </NavLink>
              <NavLink to="pricing">Pricing</NavLink>
              <NavLink to="photos">Photos</NavLink>
            </nav>
            <Outlet context={{ van}} />
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      
    </section>
  );
}
