function showLoading () {
  let loading = document.querySelector('#loading')
  loading.style.display = 'block'
}

function hideLoading () {
  let loading = document.querySelector('#loading')
  loading.style.display = 'none'
}

export {
  showLoading,
  hideLoading
}