document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest ("[data-dropdown]")!= null) return

    let currentDrop
    if (isDropdownButton) {
        currentDrop = e.target.closest("[data-dropdown]")
        currentDrop.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDrop) return
        dropdown.classList.remove("active")
    })
})
