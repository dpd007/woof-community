const Card = ({ id, personName, personImg, dogDetails }) => {
  return (
    // <div className="card">
    //   <label>{personName}</label>
    //   <label>{personImg}</label>
    //   {dogDetails.map((item) => (
    //     <div>
    //       <label>
    //         {item.name} - {item.breed}
    //       </label>
    //       <img src={item.dogImage} alt="" />
    //     </div>
    //   ))}
    // </div>
    <div
      className={`card mb-3 p-1 ${id}`}
      key={id}
      style={{ maxWidth: "inherit" }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={dogDetails[0].dogImage}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {dogDetails[0].name} Owned By {personName}
            </h5>
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
              expedita sint. Esse natus obcaecati deleniti. Consequatur, vero
              voluptates. Fugiat repellat pariatur recusandae nam, illum fugit
              molestiae. Laboriosam sint nulla est?
            </p>
            <p className="card-text">
              <small className="text-muted">Asked 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
