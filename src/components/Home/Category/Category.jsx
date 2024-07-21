import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories, headingText }) => {
  const navigate = useNavigate();

  console.log("Categories:", categories); // Debugging line

  return (
    <div className="shop-by-category">
      <div className="sec-heading">{headingText}</div>
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={
                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                item.attributes.img.data.attributes.url
              }
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
