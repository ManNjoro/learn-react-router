import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader({ params }) {
  await requireAuth()
  return getHostVans(params.id)
}
export default function HostVanDetail() {
  const van = useLoaderData()
  return (
    <section>
      <div className="van-detail-container">
        <Link to=".." relative="path" className="back-btn">
          &larr; <span>Back to all vans</span>
        </Link>
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
      </div>
      
    </section>
  );
}
