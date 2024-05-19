

const handleClick = (ev) => {
    ev.preventDefault();
    let id = ev.target.id;
    debugger;
    window.location.href = `/plant?id=${id}`;
   
}

$(()=>{
    $('[id=plantCard]').on('click', handleClick);
    debugger;
})