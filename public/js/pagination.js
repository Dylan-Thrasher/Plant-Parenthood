const handleNextClick = (ev => {
    ev.preventDefault();

    // we get the stored values for current and total pages from the parent element
    const pageAttributes = ev.currentTarget.parentElement.attributes;
    const current = Number(pageAttributes.currentPage.value);
    const totalPages = Number(pageAttributes.totalPages.value);
    const next = current < totalPages ?  current + 1 : 1;


    window.location.href = `/?page=${next}`;
})

const handlePrevClick = (ev => {
    ev.preventDefault();
    // we get the stored values for current and total pages from the parent element
    const pageAttributes = ev.currentTarget.parentElement.attributes;
    const current = Number(pageAttributes.currentPage.value);
    const totalPages = Number(pageAttributes.totalPages.value);
    const prev = current > 1 ?  current - 1 : totalPages;

    //debugger;
    window.location.href = `/?page=${prev}`;
})



$(() => {
    // add listeners to next and prev btns
    $('[id=nextBtn]').on('click', handleNextClick);
    $('[id=prevBtn]').on('click', handlePrevClick);

})