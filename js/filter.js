function loadCategories(categories)
{
    const select = document.getElementById("category-select");


    select.innerHTML = "";

    // Add default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "0";
    defaultOption.innerText = "Show All";
    select.appendChild(defaultOption);

    // Add each category once
    categories.forEach(c =>
    {
        const option = document.createElement("option");
        option.value = c.categoryId;
        option.innerText = c.name;
        select.appendChild(option);
    });
}
