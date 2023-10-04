import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState();
  const [menu, setMenu] = useState([]);
  const { id } = useParams();
  // useParam is a hook provided router library

  const getData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.159014&lng=72.9985686&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setResInfo(json.data.cards[0].card.card.info);
    setMenu(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
    console.log(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="res-info-page">
        <h1>{resInfo?.name}</h1>
        <h2>Rating: {resInfo?.avgRatingString} </h2>
        <h2>Location: {resInfo?.city}</h2>
      </div>

      <h1>Menu</h1>
      <div className="res-info-page">
        {menu?.map((item) => {
          return (
            <p key={item.card.info.name}>
              {item.card.info.name}:{item.card.info.price / 100}Rs{" "}
            </p>
          );
        })}
      </div>
    </div>
  );
};
