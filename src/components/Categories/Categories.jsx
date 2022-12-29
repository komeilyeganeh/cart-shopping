import "./Categories.scss";

const Categories = ({ categories }) => {
  return (
    <section className="categories">
      <div className="container">
        <div className="category-items">
          {categories.map((category, index) => (
            <button className="category-item" key={index}>
              <p>{category}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
