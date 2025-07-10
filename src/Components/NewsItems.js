import fallbackImg from '../Components/image.png'; // Make sure the image exists at this path

const NewsItems = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src || fallbackImg}
        alt="news"
        style={{ height: "200px", objectFit: "cover" }}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "No Title"}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : "No description available."}
        </p>
        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
