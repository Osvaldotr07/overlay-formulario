const $inputList = document.querySelectorAll('input')
const $overlay = document.querySelector('#overlay')
$inputList.forEach($input => {
    $input.addEventListener('focus', focus)
    $input.addEventListener('blur', blur)
})

function focus(evet){
    $overlay.classList.add('is-active')
    event.target.classList.add('is-active')
}
$overlay.addEventListener('click', (evet) => {
    $overlay.classList.remove('is-active')
    const $maybeIsAnInput = document.elementFromPoint(evet.clientX, evet.clientY)
    if($maybeIsAnInput.tagName === 'INPUT'){
        $maybeIsAnInput.focus()
    }
})
function blur(evet){
    evet.target.classList.remove('is-active')
    //$overlay.classList.remove('is-active')  
}