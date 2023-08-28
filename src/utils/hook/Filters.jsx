import {useEffect, useState} from "react";

/**
 * A custom hook for filtering data.
 *
 * @param {Array} data - The data to be filtered.
 * @param {Object} initialFilters - An object where each key is a property of the data items
 * and each value is a function that takes an item's value and returns a boolean
 * indicating whether the item should be included in the filtered data.
 *
 * @returns {Array} An array containing the filtered data, the current filters, and a function to update the filters.
 */
const useFilters = (data, initialFilters = {}) => {
    const [filters, setFilters] = useState(initialFilters);
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        let newFilteredData = data;

        for (let key in filters) {
            if (filters[key]) {
                newFilteredData = newFilteredData.filter(item => filters[key](item[key]));
            }
        }

        setFilteredData(newFilteredData);
    }, [data, filters]);

    return [filteredData, filters, setFilters];
};

export default useFilters;