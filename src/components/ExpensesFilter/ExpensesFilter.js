import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  function setYearHandler(event) {
    // console.log(event.target.value);
    props.onFilter(event.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label for="year" className="label">
          Filter by year
        </label>
        <select onChange={setYearHandler} name="year" className="select">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
