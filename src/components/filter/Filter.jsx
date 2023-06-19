import "./Filter.scss";
export default function Filter({ cars }) {
  let markaList = [];
  function makeMarkaList() {
    markaList = cars.map(function (car) {
      return car.marka;
    });
    markaList = [...new Set(markaList)];
    console.log(markaList);
  }
  makeMarkaList();

  let cityList = [];
  function makeCityList() {
    cityList = cars.map(function (car) {
      return car.city;
    });
    cityList = [...new Set(cityList)];
    console.log(cityList);
  }
  makeCityList();

  let banTypeList = [];
  function makebanTypeList() {
    banTypeList = cars.map(function (car) {
      return car.banType;
    });
    banTypeList = [...new Set(banTypeList)];
    console.log(banTypeList);
  }
  makebanTypeList();

  let yearList = [];
  function makeYearList() {
    yearList = cars.map(function (car) {
      return car.year;
    });
    yearList = [...new Set(yearList)];
    console.log(yearList);
  }
  makeYearList();

  return (
    <div className="filter">
      <select name="marka">
        {/* <option value="audi">Audi</option>
        <option value="BMW">BMW</option> */}
        {markaList.map(function (marka) {
          return <option value={marka}>{marka}</option>;
        })}
      </select>
      <select name="model">
        <option value="audi">Audi</option>
        <option value="BMW">BMW</option>
      </select>
      <div className="newOptions">
        <div>All</div>
        <div>Yeni</div>
        <div>Surulmush</div>
      </div>
      <select name="city">
        {cityList.map(function (city) {
          return <option value={city}>{city}</option>;
        })}
      </select>
      <div>
      <input placeholder="Qiymət" type="number" />
      <input placeholder="Qiymət" type="number" />
      </div>
        <div>
        <select name="" id="">
        <option value="azn">azn</option>
      </select>
      <div>Kredit</div>
      <div>Barter</div>
        </div>
   
     
      <select name="banType">
        {banTypeList.map(function (banType) {
          return <option value={banType}>{banType}</option>;
        })}
      </select>

     
      
    
      <div className="years">
      <select name="year">
        {yearList.map(function (year) {
          return <option value={year}>{year}</option>;
        })}
      </select>
      <select name="year">
        {yearList.map(function (year) {
          return <option value={year}>{year}</option>;
        })}
      </select>
      </div>
    </div>
  );
}
