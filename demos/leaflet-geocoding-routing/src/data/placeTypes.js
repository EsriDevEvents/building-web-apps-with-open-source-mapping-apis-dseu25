// This file is used to populate the category buttons in components/SearchControl.js - to change button functionality, modify these here.

// Find new category IDs at https://developers.arcgis.com/documentation/mapping-and-location-services/place-finding/places-category-finder/
const placeTypes = [
{
    name: "Default",
    categoryIds: "",
    icon: "https://static.arcgis.com/icons/places/Default_15.svg",
},
{
    name: "Restaurants",
    categoryIds: ["4d4b7105d754a06374d81259"],
    icon: "https://static.arcgis.com/icons/places/Restaurant_15.svg",
},
{
    name: "Hotels",
    categoryIds: ["4bf58dd8d48988d1d5941735", "4bf58dd8d48988d1fa931735"],
    icon: "https://static.arcgis.com/icons/places/Lodging_15.svg",
},
{
    name: "Grocery",
    categoryIds: ["4bf58dd8d48988d118951735"],
    icon: "https://static.arcgis.com/icons/places/Grocery_Store_15.svg",
},
{
    name: "Coffee",
    categoryIds: ["4bf58dd8d48988d1e0931735", "5e18993feee47d000759b256"],
    icon: "https://static.arcgis.com/icons/places/Coffee_or_Tea_15.svg",
},
{
    name: "ATM",
    categoryIds: ["52f2ab2ebcbc57f1066b8b56"],
    icon: "https://static.arcgis.com/icons/places/Bank_15.svg",
},
{
    name: "Parks",
    categoryIds: ["4bf58dd8d48988d163941735"],
    icon: "https://static.arcgis.com/icons/places/Park_15.svg",
},
{
    name: "Fuel",
    categoryIds: ["4bf58dd8d48988d113951735"],
    icon: "https://static.arcgis.com/icons/places/Gas_Station_15.svg",
},
]
export default placeTypes;

export function getPlaceType(name) {
    return placeTypes.find(placeType => placeType.name === name)
}