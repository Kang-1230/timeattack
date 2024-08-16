import React from "react";

const List = ({ country }) => {
  return (
    <li className="list">
      <ul className="listitem">
        {country.map((country) => (
          <div key={c.id}>{c.name}</div>
        ))}
      </ul>
    </li>
  );
};

export default List;
