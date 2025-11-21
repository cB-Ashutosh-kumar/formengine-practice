import React, { useMemo, useState } from 'react'
import SearchInputComp from '../comopnents/SearchInputComp';
import FilterDropDown from '../comopnents/FilterDropDown';

const EmployListPage = () => {
  // search have features like , search on emp name and based on Department
  // searchInput
  const [searchInput, setSearchInput] = useState("");
  const [searchDep, setSearchDep] = useState("");
  const [location, setLocation] = useState("");


  // dummy data 
  const employees = useMemo(() => {
    return [
      { id: 1, name: "Ashutosh Kumar", department: "Engineering", location: "Patna" },
      { id: 2, name: "Amrit Anand", department: "HR", location: "Delhi" },
      { id: 3, name: "Shivam Singh", department: "Engineering", location: "Mumbai" },
      { id: 4, name: "Neha Verma", department: "Finance", location: "Patna" },
    ];
  }, [])

  // get the the filterData and optimized with the useMemo(() => first, [second])
  const filterData = useMemo(() => {
    return employees.filter((emp) => {
      return emp.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) &&
        emp.department.toLocaleLowerCase().includes(searchDep.toLocaleLowerCase()) &&
        (location ? emp.location === location : true)
    })
  }, [employees, searchInput, searchDep, location])


  // const searchHandler = (data)=>{
  //   setSearchInput(data);
  //   searchDep(data)
  // }


  return (
    <div style={{ border: "1px solid #777", borderRadius: "4px", padding: "6px", }}>
      {/* filter container */}
      <div style={{ display: "flex", flexDirection: "row", gap: "20px", marginBottom: "10px" }}>
        {/* search */}
        <SearchInputComp placeholder={"Search via name ,department,location"} onSearch={setSearchInput} />
        <SearchInputComp placeholder={"Search via name ,department,location"} onSearch={setSearchDep} />
        <FilterDropDown options={["Patna", "Delhi", "Mumbai"]} onFilter={setLocation} />
      </div>

      {/* data display  */}
      <div style={{ borderTop: "1px solid #777" }}>
        <table aria-hidden="true" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ marginTop: "50px" }}>
            <tr style={{ textAlign: "center", fontWeight: "bold" }}>
              <td style={{ width: "25%", borderBottom: "1px solid #ccc", padding: "15px 0px 10px 0px" }}>Id</td>
              <td style={{ width: "25%", borderBottom: "1px solid #ccc" }}>Name</td>
              <td style={{ width: "25%", borderBottom: "1px solid #ccc" }}>Department</td>
              <td style={{ width: "25%", borderBottom: "1px solid #ccc" }}>Location</td>
            </tr>
          </thead>
          <tbody>
            {
              filterData.length > 0 ? (
                filterData.map((emp) => (
                  <tr key={emp.id} style={{ textAlign: "center" }}>
                    <td style={{ width: "25%", borderBottom: "1px solid #ccc", padding: "7.5px 0px" }}>{emp.id}</td>
                    <td style={{ width: "25%", borderBottom: "1px solid #ccc" }}>{emp.name}</td>
                    <td style={{ width: "25%", borderBottom: "1px solid #ccc" }}>{emp.department}</td>
                    <td style={{ width: "25%", borderBottom: "1px solid #ccc" }}>{emp.location}</td>
                  </tr>
                ))
              ) : (
                <tr style={{ height: "80vh" }}>

                  <td colSpan={4} style={{ color: "gray", textAlign: "center" }}>
                    No Employee Found
                  </td>

                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmployListPage
