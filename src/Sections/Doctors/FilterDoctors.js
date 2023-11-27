import React from 'react'

function FilterDoctors() {



    const gitUniqueData = (data, property) => {
        // console.log("=======================================");
        let newValue = data.map((curElem) => {
            // console.log(curElem[property]);
            return curElem[property];
        })
        // if (property === "colors") {
        //     newValue = newValue.flat()
        // }
        // console.log(["all" , ...new Set(newValue)]);
        return (newValue = ["all" , ...new Set(newValue)])
    }

    const categoryOnlyData = gitUniqueData(all_products, "category")

    return (
        <div>FilterDoctors</div>
    )
}

export default FilterDoctors