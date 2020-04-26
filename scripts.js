const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

function getStyle(element, style) {
    window.getComputedStyle(element).getPropertyValue(style)
}

const initialColors = {
    // keys: css color
    "--bg": "#FCFCFC",
    "--bg-panel": "#EBEBEB",
    "--color-headings": "#0077FF",
    "--color-text": "#333333",
}
                                            
const darkMode = {
    "--bg": "#333333",
    "--bg-panel": "#434343",
    "--color-headings": "#B93FB4",
    "--color-text": "#B5B5B5"
}

function changeColors(colors) {
    Object.keys(colors).map(key => 
        html.style.setProperty(key, colors[key]) 
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})