import style from '../pages/PrivateRoutes/UserPage/UserPage.module.css'


function handleEditName() {
  const formContainer = document.getElementById('userTitleForm')
  const title = document.getElementById('userTitleName')
  const editBtn = document.getElementById('editBtn')

  title.classList.add(style.hidden)
  title.classList.remove(style.visible)

  formContainer.classList.add(style.visible)
  formContainer.classList.remove(style.hidden)

  editBtn.classList.add(style.hidden)
  editBtn.classList.remove(style.visible)

  console.log(formContainer)
  console.log(title)
  console.log(editBtn)
}



export { handleEditName}