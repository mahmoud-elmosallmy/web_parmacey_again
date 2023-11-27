import React, { createContext } from 'react'

const FilterDoctors = createContext()

function FilterContext({children}) {
    return (
        <FilterDoctors.Provider value={{}}>{children}</FilterDoctors.Provider>
    )
}

export default FilterContext