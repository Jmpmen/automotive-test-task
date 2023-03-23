function SearchBar({ value, onChange }) {
    return (
      <div>
        <input type="text" placeholder="Search" value={value} onChange={onChange} />
      </div>
    );
  }
  
  export default SearchBar;