import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export async function loader() {
  await requireAuth()
  return getHostVans();
}
export default function HostVans() {
  const vanList = useLoaderData();
  const dataElements = vanList.map((van) => {
    return (
      <Link to={van.id} key={van.id}>
        <div className="van-list">
          <img src={van.imageUrl} alt={van.name} className="van-list-img"></img>
          <div className="van-details">
            <span className="description">{van.name}</span>
            <span className="price">${van.price}/day</span>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div className="van-list-container">
      <h1>Your listed vans</h1>
      <section>{dataElements}</section>
    </div>
  );
}
