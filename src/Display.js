export const Display = ({ ddt }) => {
  console.log(ddt);
  return (
    <p>
      <ul>
        {ddt.map((itm) => (
          <li>{itm}</li>
        ))}
      </ul>
    </p>
  );
};
