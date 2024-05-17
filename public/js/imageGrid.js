

const handleClick = (ev) => {
    ev.preventDefault();
    let id = ev.target.id;
    window.location.href = `/plant?id=${id}`;
    debugger;
}

$(()=>{
    $('[id=plantCard]').on('click', handleClick);
    debugger;
})